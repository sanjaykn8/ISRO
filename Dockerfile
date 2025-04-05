# Start from Ubuntu:22.04 as the base image
FROM ubuntu:22.04

# Set environment variable to avoid interactive prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update package lists and install Python and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy the application code
COPY . .

# Install required Python packages
RUN pip3 install flask

# Expose port 8000 to the outside world
EXPOSE 8000

# Command to run the Python application
CMD ["python3", "main.py"]
