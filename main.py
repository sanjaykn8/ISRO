from flask import Flask, request, jsonify, send_file
from datetime import datetime, timedelta
import csv
import io
import os
import uuid

app = Flask(__name__)

# In-memory storage for simulation
ITEMS = {}         # itemId -> item data
CONTAINERS = {}    # containerId -> container data
LOGS = []          # list of log entries
WASTE_ITEMS = {}   # itemId -> item data
CURRENT_DATE = datetime.utcnow()

# ---------------------------
# Helper functions
# ---------------------------
def log_action(user_id, action_type, item_id, details):
    entry = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "userId": user_id,
        "actionType": action_type,
        "itemId": item_id,
        "details": details
    }
    LOGS.append(entry)

def dummy_placement_algorithm(items, containers):
    placements = []
    rearrangements = []
    # For each item, simply assign it to the first container with enough space (dummy logic)
    for item in items:
        placed = False
        for container in containers:
            # Dummy check: container dimensions must be >= item dimensions (without rotation)
            if (container["width"] >= item["width"] and 
                container["depth"] >= item["depth"] and 
                container["height"] >= item["height"]):
                # Assign a dummy position: always (0,0,0) to (item dims)
                placement = {
                    "itemId": item["itemId"],
                    "containerId": container["containerId"],
                    "position": {
                        "startCoordinates": {"width": 0, "depth": 0, "height": 0},
                        "endCoordinates": {"width": item["width"], "depth": item["depth"], "height": item["height"]}
                    }
                }
                placements.append(placement)
                # Store placement in item record
                item["containerId"] = container["containerId"]
                item["position"] = placement["position"]
                ITEMS[item["itemId"]] = item
                placed = True
                break
        if not placed:
            # If not placed, add a dummy rearrangement suggestion
            rearrangements.append({
                "step": len(rearrangements) + 1,
                "action": "move",
                "itemId": item["itemId"],
                "fromContainer": "N/A",
                "fromPosition": {"startCoordinates": {"width": 0, "depth": 0, "height": 0},
                                 "endCoordinates": {"width": 0, "depth": 0, "height": 0}},
                "toContainer": "None",
                "toPosition": {"startCoordinates": {"width": 0, "depth": 0, "height": 0},
                               "endCoordinates": {"width": 0, "depth": 0, "height": 0}}
            })
    return placements, rearrangements

def dummy_retrieval_steps(item):
    # Dummy logic: count number of items in same container in front of it.
    # For simulation, we just return a fixed list.
    steps = [
        {"step": 1, "action": "remove", "itemId": "dummy1", "itemName": "Dummy Blocker"},
        {"step": 2, "action": "retrieve", "itemId": item["itemId"], "itemName": item["name"]},
        {"step": 3, "action": "placeBack", "itemId": "dummy1", "itemName": "Dummy Blocker"}
    ]
    return steps

def dummy_return_plan(undocking_container_id, undocking_date, max_weight):
    # Dummy return plan with fixed steps and manifest.
    plan = [
        {"step": 1, "itemId": "itemX", "itemName": "Expired Medkit", "fromContainer": "cont1", "toContainer": undocking_container_id},
        {"step": 2, "itemId": "itemY", "itemName": "Used Food Pack", "fromContainer": "cont2", "toContainer": undocking_container_id}
    ]
    retrieval_steps = [
        {"step": 1, "action": "remove", "itemId": "itemX", "itemName": "Expired Medkit"},
        {"step": 2, "action": "retrieve", "itemId": "itemY", "itemName": "Used Food Pack"}
    ]
    manifest = {
        "undockingContainerId": undocking_container_id,
        "undockingDate": undocking_date,
        "returnItems": [
            {"itemId": "itemX", "name": "Expired Medkit", "reason": "Expired"},
            {"itemId": "itemY", "name": "Used Food Pack", "reason": "Out of Uses"}
        ],
        "totalVolume": 100,
        "totalWeight": 50
    }
    return plan, retrieval_steps, manifest

def simulate_time(days, items_to_use):
    global CURRENT_DATE
    changes = {"itemsUsed": [], "itemsExpired": [], "itemsDepletedToday": []}
    CURRENT_DATE += timedelta(days=days)
    # For each item in the list, decrement usage count if available
    for usage in items_to_use:
        item_id = usage.get("itemId")
        if item_id in ITEMS:
            item = ITEMS[item_id]
            if "usageLimit" in item and item["usageLimit"] > 0:
                item["usageLimit"] -= 1
                changes["itemsUsed"].append({
                    "itemId": item_id,
                    "name": item["name"],
                    "remainingUses": item["usageLimit"]
                })
                if item["usageLimit"] == 0:
                    changes["itemsDepletedToday"].append({
                        "itemId": item_id,
                        "name": item["name"]
                    })
            # Check expiry
            expiry = datetime.fromisoformat(item["expiryDate"].replace("Z", ""))
            if expiry < CURRENT_DATE:
                changes["itemsExpired"].append({
                    "itemId": item_id,
                    "name": item["name"]
                })
                WASTE_ITEMS[item_id] = item
    return CURRENT_DATE.isoformat() + "Z", changes

# ---------------------------
# API Endpoints
# ---------------------------

@app.route("/")
def home():
    return "Space Station Inventory System is Running 🚀"

# 1. Placement Recommendations API
@app.route("/api/placement", methods=["POST"])
def placement():
    data = request.get_json()
    items = data.get("items", [])
    containers = data.get("containers", [])
    
    # Store containers in global variable (simulate import)
    for container in containers:
        CONTAINERS[container["containerId"]] = container

    # Run dummy placement algorithm
    placements, rearrangements = dummy_placement_algorithm(items, containers)
    
    return jsonify({
        "success": True,
        "placements": placements,
        "rearrangements": rearrangements
    })

# 2. Item Search and Retrieval APIs
@app.route("/api/search", methods=["GET"])
def search_item():
    item_id = request.args.get("itemId")
    item_name = request.args.get("itemName")
    user_id = request.args.get("userId", "unknown")
    
    # Find item by id or name (dummy search)
    found_item = None
    for item in ITEMS.values():
        if (item_id and item["itemId"] == item_id) or (item_name and item["name"] == item_name):
            found_item = item
            break
    if not found_item:
        return jsonify({"success": True, "found": False})
    
    steps = dummy_retrieval_steps(found_item)
    return jsonify({
        "success": True,
        "found": True,
        "item": found_item,
        "endCoordinates": found_item.get("position", {}),
        "retrievalSteps": steps
    })

@app.route("/api/retrieve", methods=["POST"])
def retrieve():
    data = request.get_json()
    item_id = data.get("itemId")
    user_id = data.get("userId", "unknown")
    timestamp = data.get("timestamp")
    # Log retrieval action and decrement usage if applicable
    if item_id in ITEMS:
        item = ITEMS[item_id]
        if "usageLimit" in item and item["usageLimit"] > 0:
            item["usageLimit"] -= 1
        log_action(user_id, "retrieve", item_id, {"fromContainer": item.get("containerId", "N/A")})
    return jsonify({"success": True})

@app.route("/api/place", methods=["POST"])
def place():
    data = request.get_json()
    item_id = data.get("itemId")
    user_id = data.get("userId", "unknown")
    timestamp = data.get("timestamp")
    container_id = data.get("containerId")
    position = data.get("position")
    if item_id in ITEMS:
        ITEMS[item_id]["containerId"] = container_id
        ITEMS[item_id]["position"] = position
        log_action(user_id, "place", item_id, {"toContainer": container_id})
    return jsonify({"success": True})

# 3. Waste Management APIs
@app.route("/api/waste/identify", methods=["GET"])
def waste_identify():
    waste_list = []
    for item in WASTE_ITEMS.values():
        waste_list.append({
            "itemId": item["itemId"],
            "name": item["name"],
            "reason": "Expired" if datetime.fromisoformat(item["expiryDate"].replace("Z", "")) < CURRENT_DATE else "Out of Uses",
            "containerId": item.get("containerId", "N/A"),
            "position": item.get("position", {"startCoordinates": {}, "endCoordinates": {}})
        })
    return jsonify({"success": True, "wasteItems": waste_list})

@app.route("/api/waste/return-plan", methods=["POST"])
def waste_return_plan():
    data = request.get_json()
    undocking_container_id = data.get("undockingContainerId")
    undocking_date = data.get("undockingDate")
    max_weight = data.get("maxWeight")
    
    plan, retrieval_steps, manifest = dummy_return_plan(undocking_container_id, undocking_date, max_weight)
    return jsonify({
        "success": True,
        "returnPlan": plan,
        "retrievalSteps": retrieval_steps,
        "returnManifest": manifest
    })

@app.route("/api/waste/complete-undocking", methods=["POST"])
def waste_complete_undocking():
    data = request.get_json()
    undocking_container_id = data.get("undockingContainerId")
    timestamp = data.get("timestamp")
    # Dummy removal: count items in waste
    count = len(WASTE_ITEMS)
    # Clear waste items after removal
    WASTE_ITEMS.clear()
    return jsonify({"success": True, "itemsRemoved": count})

# 4. Time Simulation API
@app.route("/api/simulate/day", methods=["POST"])
def simulate_day():
    data = request.get_json()
    num_of_days = data.get("numOfDays")
    to_timestamp = data.get("toTimestamp")
    items_to_use = data.get("itemsToBeUsedPerDay", [])
    
    if to_timestamp:
        # Calculate days difference from CURRENT_DATE to to_timestamp
        target_date = datetime.fromisoformat(to_timestamp.replace("Z", ""))
        delta = (target_date - CURRENT_DATE).days
        num_of_days = delta if delta > 0 else 0
    new_date, changes = simulate_time(num_of_days, items_to_use)
    return jsonify({"success": True, "newDate": new_date, "changes": changes})

# 5. Import/Export APIs
@app.route("/api/import/items", methods=["POST"])
def import_items():
    if "file" not in request.files:
        return jsonify({"success": False, "itemsImported": 0, "errors": [{"row": 0, "message": "No file provided"}]})
    file = request.files["file"]
    errors = []
    count = 0
    stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
    reader = csv.DictReader(stream)
    for idx, row in enumerate(reader, start=1):
        try:
            item = {
                "itemId": row["Item ID"],
                "name": row["Name"],
                "width": float(row["Width"]),
                "depth": float(row["Depth"]),
                "height": float(row["Height"]),
                "mass": float(row.get("Mass", 0)),
                "priority": int(row.get("Priority", 0)),
                "expiryDate": row["Expiry Date"],
                "usageLimit": int(row.get("Usage Limit", 0)),
                "preferredZone": row["Preferred Zone"]
            }
            ITEMS[item["itemId"]] = item
            count += 1
        except Exception as e:
            errors.append({"row": idx, "message": str(e)})
    return jsonify({"success": True, "itemsImported": count, "errors": errors})

@app.route("/api/import/containers", methods=["POST"])
def import_containers():
    if "file" not in request.files:
        return jsonify({"success": False, "containersImported": 0, "errors": [{"row": 0, "message": "No file provided"}]})
    file = request.files["file"]
    errors = []
    count = 0
    stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
    reader = csv.DictReader(stream)
    for idx, row in enumerate(reader, start=1):
        try:
            container = {
                "containerId": row["Container ID"],
                "zone": row["Zone"],
                "width": float(row["Width"]),
                "depth": float(row["Depth"]),
                "height": float(row["Height"])
            }
            CONTAINERS[container["containerId"]] = container
            count += 1
        except Exception as e:
            errors.append({"row": idx, "message": str(e)})
    return jsonify({"success": True, "containersImported": count, "errors": errors})

@app.route("/api/export/arrangement", methods=["GET"])
def export_arrangement():
    # Create CSV in memory
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Item ID", "Container ID", "Coordinates (W1,D1,H1)", "(W2,D2,H2)"])
    for item in ITEMS.values():
        pos = item.get("position", {})
        start = pos.get("startCoordinates", (0,0,0))
        end = pos.get("endCoordinates", (0,0,0))
        # Ensure tuple format if dict
        if isinstance(start, dict):
            start = (start.get("width",0), start.get("depth",0), start.get("height",0))
        if isinstance(end, dict):
            end = (end.get("width",0), end.get("depth",0), end.get("height",0))
        writer.writerow([item["itemId"], item.get("containerId", "N/A"), start, end])
    output.seek(0)
    return send_file(io.BytesIO(output.getvalue().encode("utf-8")),
                     mimetype="text/csv",
                     as_attachment=True,
                     attachment_filename="arrangement.csv")

# 6. Logging API
@app.route("/api/logs", methods=["GET"])
def get_logs():
    start_date = request.args.get("startDate")
    end_date = request.args.get("endDate")
    item_id = request.args.get("itemId")
    user_id = request.args.get("userId")
    action_type = request.args.get("actionType")
    
    try:
        start_dt = datetime.fromisoformat(start_date.replace("Z", ""))
        end_dt = datetime.fromisoformat(end_date.replace("Z", ""))
    except Exception as e:
        return jsonify({"logs": [], "error": "Invalid date format"}), 400
    
    filtered = []
    for log in LOGS:
        log_dt = datetime.fromisoformat(log["timestamp"].replace("Z", ""))
        if start_dt <= log_dt <= end_dt:
            if item_id and log["itemId"] != item_id:
                continue
            if user_id and log["userId"] != user_id:
                continue
            if action_type and log["actionType"] != action_type:
                continue
            filtered.append(log)
    return jsonify({"logs": filtered})

# ---------------------------
# Main Execution
# ---------------------------
if __name__ == "__main__":
    # Listen on 0.0.0.0 so Docker can access it; use port 8000 as required.
    app.run(host="0.0.0.0", port=8000, debug=True)
