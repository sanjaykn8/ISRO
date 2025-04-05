/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Layout({ children }) {\n    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Layout.useEffect\": ()=>{\n            if (isDark) {\n                document.documentElement.classList.add('dark');\n            } else {\n                document.documentElement.classList.remove('dark');\n            }\n        }\n    }[\"Layout.useEffect\"], [\n        isDark\n    ]);\n    const links = [\n        {\n            href: \"/import\",\n            label: \"📦 Import\"\n        },\n        {\n            href: \"/placement\",\n            label: \"📍 Placement\"\n        },\n        {\n            href: \"/search\",\n            label: \"🔍 Search\"\n        },\n        {\n            href: \"/simulate\",\n            label: \"⏳ Simulate\"\n        },\n        {\n            href: \"/waste\",\n            label: \"🗑 Waste\"\n        },\n        {\n            href: \"/logs\",\n            label: \"🧾 Logs\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-blue-600 text-white p-4 shadow dark:bg-gray-800\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold tracking-wide\",\n                                children: \"\\uD83D\\uDE80 Space Station Inventory\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsDark(!isDark),\n                                className: \"bg-blue-700 hover:bg-blue-500 px-3 py-1 rounded text-sm\",\n                                children: isDark ? '☀️ Light Mode' : '🌙 Dark Mode'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"mt-4 flex flex-wrap gap-4\",\n                        children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: link.href,\n                                className: \"text-white hover:bg-blue-500 bg-blue-700 px-4 py-2 rounded transition dark:bg-gray-700 dark:hover:bg-gray-600\",\n                                children: link.label\n                            }, link.href, false, {\n                                fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1 p-6\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-blue-100 text-center text-xs p-3 mt-auto dark:bg-gray-800\",\n                children: \"\\xa9 2025 ISRO Inventory Management System — All Rights Reserved\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\components\\\\Layout.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2Y7QUFFZCxTQUFTRyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQTs0QkFBQztZQUNSLElBQUlLLFFBQVE7Z0JBQ1ZFLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDekMsT0FBTztnQkFDTEgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztZQUM1QztRQUNGOzJCQUFHO1FBQUNOO0tBQU87SUFFWCxNQUFNTyxRQUFRO1FBQ1o7WUFBRUMsTUFBTTtZQUFXQyxPQUFPO1FBQVk7UUFDdEM7WUFBRUQsTUFBTTtZQUFjQyxPQUFPO1FBQWU7UUFDNUM7WUFBRUQsTUFBTTtZQUFXQyxPQUFPO1FBQVk7UUFDdEM7WUFBRUQsTUFBTTtZQUFhQyxPQUFPO1FBQWE7UUFDekM7WUFBRUQsTUFBTTtZQUFVQyxPQUFPO1FBQVc7UUFDcEM7WUFBRUQsTUFBTTtZQUFTQyxPQUFPO1FBQVU7S0FDbkM7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQW1DOzs7Ozs7MENBQ2pELDhEQUFDRztnQ0FDQ0MsU0FBUyxJQUFNZCxVQUFVLENBQUNEO2dDQUMxQlcsV0FBVTswQ0FFVFgsU0FBUyxrQkFBa0I7Ozs7Ozs7Ozs7OztrQ0FLaEMsOERBQUNnQjt3QkFBSUwsV0FBVTtrQ0FDWkosTUFBTVUsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDckIsa0RBQUlBO2dDQUVIVyxNQUFNVSxLQUFLVixJQUFJO2dDQUNmRyxXQUFVOzBDQUVUTyxLQUFLVCxLQUFLOytCQUpOUyxLQUFLVixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVd0Qiw4REFBQ1c7Z0JBQUtSLFdBQVU7MEJBQWNaOzs7Ozs7MEJBRzlCLDhEQUFDcUI7Z0JBQU9ULFdBQVU7MEJBQStEOzs7Ozs7Ozs7Ozs7QUFLdkYiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmlzYW5cXERlc2t0b3BcXGlzcm9cXHByb2plY3QtZnJvbnRlbmRcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzRGFyaywgc2V0SXNEYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRGFya10pO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHsgaHJlZjogXCIvaW1wb3J0XCIsIGxhYmVsOiBcIvCfk6YgSW1wb3J0XCIgfSxcclxuICAgIHsgaHJlZjogXCIvcGxhY2VtZW50XCIsIGxhYmVsOiBcIvCfk40gUGxhY2VtZW50XCIgfSxcclxuICAgIHsgaHJlZjogXCIvc2VhcmNoXCIsIGxhYmVsOiBcIvCflI0gU2VhcmNoXCIgfSxcclxuICAgIHsgaHJlZjogXCIvc2ltdWxhdGVcIiwgbGFiZWw6IFwi4o+zIFNpbXVsYXRlXCIgfSxcclxuICAgIHsgaHJlZjogXCIvd2FzdGVcIiwgbGFiZWw6IFwi8J+XkSBXYXN0ZVwiIH0sXHJcbiAgICB7IGhyZWY6IFwiL2xvZ3NcIiwgbGFiZWw6IFwi8J+nviBMb2dzXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIGRhcms6YmctZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBwLTQgc2hhZG93IGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy13aWRlXCI+8J+agCBTcGFjZSBTdGF0aW9uIEludmVudG9yeTwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRGFyayghaXNEYXJrKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS01MDAgcHgtMyBweS0xIHJvdW5kZWQgdGV4dC1zbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0RhcmsgPyAn4piA77iPIExpZ2h0IE1vZGUnIDogJ/CfjJkgRGFyayBNb2RlJ31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogTmF2aWdhdGlvbiBCYXIgKi99XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC13cmFwIGdhcC00XCI+XHJcbiAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS01MDAgYmctYmx1ZS03MDAgcHgtNCBweS0yIHJvdW5kZWQgdHJhbnNpdGlvbiBkYXJrOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBwLTZcIj57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCB0ZXh0LWNlbnRlciB0ZXh0LXhzIHAtMyBtdC1hdXRvIGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAmY29weTsgMjAyNSBJU1JPIEludmVudG9yeSBNYW5hZ2VtZW50IFN5c3RlbSDigJQgQWxsIFJpZ2h0cyBSZXNlcnZlZFxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkxheW91dCIsImNoaWxkcmVuIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsaW5rcyIsImhyZWYiLCJsYWJlbCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwiYnV0dG9uIiwib25DbGljayIsIm5hdiIsIm1hcCIsImxpbmsiLCJtYWluIiwiZm9vdGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Layout.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"(pages-dir-node)/./components/Layout.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nisan\\\\Desktop\\\\isro\\\\project-frontend\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQztBQUNYO0FBRWhCLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILDBEQUFNQTtrQkFDTCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuaXNhblxcRGVza3RvcFxcaXNyb1xccHJvamVjdC1mcm9udGVuZFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();