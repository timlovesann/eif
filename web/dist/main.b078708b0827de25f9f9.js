"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/AppSidebar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/AppSidebar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n    DEMO STYLE\r\n*/\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: rgb(60, 147, 206);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 340px;\r\n    max-width: 340px;\r\n    background: #302929;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 120px;\r\n    max-width: 120px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h4,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    -ms-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #4e4143;\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    color:rgb(235, 221, 221);\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #830201;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: rgb(255, 244, 244);\r\n    background: #4c4d4e;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #4e4e50;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/AppSidebar.css"],"names":[],"mappings":"AAAA;;CAEC;AAGD;IACI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;;;IAGI,cAAc;IACd,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;;uDAEuD;;AAEvD;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,UAAU;IACV,kCAAkC;IAClC,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;;uDAEuD;;AAEvD;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;;uDAEuD;;AAEvD;IACI;QACI,eAAe;QACf,eAAe;QACf,kBAAkB;QAClB,6BAA6B;IACjC;IACA;QACI,SAAS;QACT,YAAY;QACZ,UAAU;QACV,kCAAkC;QAClC,8BAA8B;QAC9B,0BAA0B;IAC9B;IACA;QACI,yBAAyB;IAC7B;IACA;;QAEI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["/*\r\n    DEMO STYLE\r\n*/\r\n\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: rgb(60, 147, 206);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 340px;\r\n    max-width: 340px;\r\n    background: #302929;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 120px;\r\n    max-width: 120px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h4,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    -ms-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #4e4143;\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    color:rgb(235, 221, 221);\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #830201;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: rgb(255, 244, 244);\r\n    background: #4c4d4e;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #4e4e50;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n      \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n      sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  code {\r\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n      monospace;\r\n  }", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT;;gBAEY;IACZ,mCAAmC;IACnC,kCAAkC;EACpC;;EAEA;IACE;eACW;EACb","sourcesContent":["body {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n      \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n      sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  code {\r\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n      monospace;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/AppSidebar.css":
/*!****************************!*\
  !*** ./src/AppSidebar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AppSidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./AppSidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/AppSidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AppSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AppSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AppSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AppSidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/common/EventBus.js":
/*!********************************!*\
  !*** ./src/common/EventBus.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const eventBus = {
    on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event, callback) {
        document.removeEventListener(event, callback);
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);


/***/ }),

/***/ "./src/components/home.component.js":
/*!******************************************!*\
  !*** ./src/components/home.component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/services/user.service.js");



class Home extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }
    componentDidMount() {
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__["default"].getPublicContent().then(response => {
            this.setState({
                content: response.data
            });
        }, error => {
            this.setState({
                content: (error.response && error.response.data) ||
                    error.message ||
                    error.toString()
            });
        });
    }
    render() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", Object.assign({ className: "jumbotron" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Release v09052022" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Features Supported" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Ghostbusting Location Report: Download report of suspect locations canvassed across Michigan" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "My Voting History: Examine your voting history for anomalies" })] })] })) })));
    }
}


/***/ }),

/***/ "./src/components/login.component.js":
/*!*******************************************!*\
  !*** ./src/components/login.component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-validation/build/form */ "./node_modules/react-validation/build/form.js");
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-validation/build/input */ "./node_modules/react-validation/build/input.js");
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-validation/build/button */ "./node_modules/react-validation/build/button.js");
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");






const required = value => {
    if (!value) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "alert alert-danger", role: "alert" }, { children: "This field is required!" })));
    }
};
class Login extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleLogin(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].login(this.state.username, this.state.password).then(() => {
                this.props.history.push("/profile");
                window.location.reload();
            }, error => {
                const resMessage = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setState({
                    loading: false,
                    message: resMessage
                });
            });
        }
        else {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-md-12" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "card card-container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_validation_build_form__WEBPACK_IMPORTED_MODULE_2___default()), Object.assign({ onSubmit: this.handleLogin, ref: c => {
                        this.form = c;
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ htmlFor: "username" }, { children: "Username" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default()), { type: "text", className: "form-control", name: "username", value: this.state.username, onChange: this.onChangeUsername, validations: [required] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ htmlFor: "password" }, { children: "Password" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default()), { type: "password", className: "form-control", name: "password", value: this.state.password, onChange: this.onChangePassword, validations: [required] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ className: "btn btn-primary btn-block", disabled: this.state.loading }, { children: [this.state.loading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "spinner-border spinner-border-sm" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Login" })] })) })), this.state.message && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "alert alert-danger", role: "alert" }, { children: this.state.message })) }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_button__WEBPACK_IMPORTED_MODULE_4___default()), { style: { display: "none" }, ref: c => {
                                this.checkBtn = c;
                            } })] })) })) })));
    }
}


/***/ }),

/***/ "./src/components/profile.component.js":
/*!*********************************************!*\
  !*** ./src/components/profile.component.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");




class Profile extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" }
        };
    }
    componentDidMount() {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentUser();
        if (!currentUser)
            this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true });
    }
    render() {
        if (this.state.redirect) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, { to: this.state.redirect });
        }
        const { currentUser } = this.state;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (this.state.userReady) ?
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", Object.assign({ className: "jumbotron" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: currentUser.username }), " Profile"] }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Token:" }), " ", currentUser.accessToken.substring(0, 20), " ...", " ", currentUser.accessToken.substr(currentUser.accessToken.length - 20)] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Id:" }), " ", currentUser.id] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Email:" }), " ", currentUser.email] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Authorities:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: currentUser.roles &&
                                currentUser.roles.map((role, index) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: role }, index)) })] }) : null })));
    }
}


/***/ }),

/***/ "./src/components/register.component.js":
/*!**********************************************!*\
  !*** ./src/components/register.component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-validation/build/form */ "./node_modules/react-validation/build/form.js");
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-validation/build/input */ "./node_modules/react-validation/build/input.js");
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-validation/build/button */ "./node_modules/react-validation/build/button.js");
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");







const required = value => {
    if (!value) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "alert alert-danger", role: "alert" }, { children: "This field is required!" })));
    }
};
const email = value => {
    if (!(0,validator__WEBPACK_IMPORTED_MODULE_6__.isEmail)(value)) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "alert alert-danger", role: "alert" }, { children: "This is not a valid email." })));
    }
};
const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "alert alert-danger", role: "alert" }, { children: "The username must be between 3 and 20 characters." })));
    }
};
const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "alert alert-danger", role: "alert" }, { children: "The password must be between 6 and 40 characters." })));
    }
};
class Register extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleRegister(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].register(this.state.username, this.state.email, this.state.password).then(response => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });
            }, error => {
                const resMessage = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setState({
                    successful: false,
                    message: resMessage
                });
            });
        }
    }
    render() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-md-12" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "card card-container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_validation_build_form__WEBPACK_IMPORTED_MODULE_2___default()), Object.assign({ onSubmit: this.handleRegister, ref: c => {
                        this.form = c;
                    } }, { children: [!this.state.successful && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ htmlFor: "username" }, { children: "Username" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default()), { type: "text", className: "form-control", name: "username", value: this.state.username, onChange: this.onChangeUsername, validations: [required, vusername] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ htmlFor: "email" }, { children: "Email" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default()), { type: "text", className: "form-control", name: "email", value: this.state.email, onChange: this.onChangeEmail, validations: [required, email] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "form-group" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ htmlFor: "password" }, { children: "Password" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_input__WEBPACK_IMPORTED_MODULE_3___default()), { type: "password", className: "form-control", name: "password", value: this.state.password, onChange: this.onChangePassword, validations: [required, vpassword] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "btn btn-primary btn-block" }, { children: "Sign Up" })) }))] })), this.state.message && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "form-group" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger", role: "alert" }, { children: this.state.message })) }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_validation_build_button__WEBPACK_IMPORTED_MODULE_4___default()), { style: { display: "none" }, ref: c => {
                                this.checkBtn = c;
                            } })] })) })) })));
    }
}


/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "unregister": () => (/* binding */ unregister)
/* harmony export */ });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if (false) {}
}
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(error => {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' }
    })
        .then(response => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
        .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(registration => {
            registration.unregister();
        })
            .catch(error => {
            console.error(error.message);
        });
    }
}


/***/ }),

/***/ "./src/services/auth-header.js":
/*!*************************************!*\
  !*** ./src/services/auth-header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ authHeader)
/* harmony export */ });
function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        return { 'x-access-token': user.accessToken }; // for Node.js Express back-end
    }
    else {
        return {};
    }
}


/***/ }),

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = "https://data.electionintegrityforce.com/api/auth/";
class AuthService {
    login(username, password) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "signin", {
            username,
            password
        })
            .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + "signup", {
            username,
            email,
            password
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AuthService());


/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header */ "./src/services/auth-header.js");


const API_URL = 'https://data.electionintegrityforce.com/api/test/';
class UserService {
    getPublicContent() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + 'all');
    }
    getUserBoard() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + 'user', { headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    getModeratorBoard() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + 'mod', { headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    getAdminBoard() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + 'admin', { headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserService());


/***/ }),

/***/ "./src/AppSideBar.tsx":
/*!****************************!*\
  !*** ./src/AppSideBar.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile.component */ "./src/components/profile.component.js");
/* harmony import */ var _components_MyVotingHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MyVotingHistory */ "./src/components/MyVotingHistory.tsx");
/* harmony import */ var _components_Ghostbusters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Ghostbusters */ "./src/components/Ghostbusters.tsx");
/* harmony import */ var _components_AuditMyAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AuditMyAddress */ "./src/components/AuditMyAddress.tsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/About */ "./src/components/About.tsx");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home.component */ "./src/components/home.component.js");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login.component */ "./src/components/login.component.js");
/* harmony import */ var _components_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register.component */ "./src/components/register.component.js");
/* harmony import */ var _components_Resources__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Resources */ "./src/components/Resources.tsx");
/* harmony import */ var _common_EventBus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/EventBus */ "./src/common/EventBus.js");
/* harmony import */ var _AppSidebar_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AppSidebar.css */ "./src/AppSidebar.css");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/News */ "./src/components/News.tsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Contact */ "./src/components/Contact.tsx");
/* harmony import */ var _components_ChallengeList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ChallengeList */ "./src/components/ChallengeList.tsx");



















class AppSideBar extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: null,
        };
    }
    componentDidMount() {
        const user = _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentUser();
        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_DATA_CURATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
        _common_EventBus__WEBPACK_IMPORTED_MODULE_12__["default"].on("logout", () => {
            this.logOut();
        });
    }
    componentWillUnmount() {
        _common_EventBus__WEBPACK_IMPORTED_MODULE_12__["default"].remove("logout");
    }
    logOut() {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["default"].logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }
    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", Object.assign({ id: "sidebar" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "sidebar-header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Election Integrity Force" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "EIF" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "list-unstyled components" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#homeSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-home" }), "\u00A0 Audit"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "collapse list-unstyled", id: "homeSubmenu" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/my-voting-history", className: "nav-link" }, { children: "Voting History" })) })) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#pageSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-glasses" }), "\u00A0 Reports"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "collapse list-unstyled", id: "pageSubmenu" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/ghostbusters-by-county", className: "nav-link" }, { children: "Ghostbusting Locations" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/challenge-list-by-precinct", className: "nav-link" }, { children: "Challenge List" })) }))] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/news", className: "nav-link" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-globe" }), "\u00A0 News"] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/contact", className: "nav-link" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-paper-plane" }), "\u00A0 Contact"] })) })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ id: "content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", Object.assign({ className: "navbar navbar-expand-lg navbar-light bg-light" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container-fluid" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: "button", id: "sidebarCollapse", className: "navbar-btn" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-align-left" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "btn btn-dark d-inline-block d-lg-none ml-auto", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-align-justify" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "collapse navbar-collapse", id: "navbarSupportedContent" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "nav navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/", className: "navbar-brand" }, { children: "Home" })) })), showAdminBoard && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/admin", className: "navbar-brand" }, { children: "Admin" })) }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/about", className: "navbar-brand" }, { children: "About" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/resources", className: "navbar-brand" }, { children: "Resources" })) })] })) })), currentUser ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/profile", className: "navbar-brand" }, { children: currentUser.username })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: "/login", className: "navbar-brand", onClick: this.logOut }, { children: "LogOut" })) }))] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/login", className: "navbar-brand" }, { children: "Login" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, Object.assign({ to: "/register", className: "navbar-brand" }, { children: "Sign Up" })) }))] })))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "line" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Switch, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { exact: true, path: ["/", "/home"], component: _components_home_component__WEBPACK_IMPORTED_MODULE_8__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { exact: true, path: "/login", component: _components_login_component__WEBPACK_IMPORTED_MODULE_9__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { exact: true, path: "/register", component: _components_register_component__WEBPACK_IMPORTED_MODULE_10__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { exact: true, path: "/profile", component: _components_profile_component__WEBPACK_IMPORTED_MODULE_3__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/ghostbusters-by-county", component: _components_Ghostbusters__WEBPACK_IMPORTED_MODULE_5__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/challenge-list-by-precinct", component: _components_ChallengeList__WEBPACK_IMPORTED_MODULE_17__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/my-voting-history", component: _components_MyVotingHistory__WEBPACK_IMPORTED_MODULE_4__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/audit-my-address", component: _components_AuditMyAddress__WEBPACK_IMPORTED_MODULE_6__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/about", component: _components_About__WEBPACK_IMPORTED_MODULE_7__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/resources", component: _components_Resources__WEBPACK_IMPORTED_MODULE_11__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/news", component: _components_News__WEBPACK_IMPORTED_MODULE_15__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, { path: "/contact", component: _components_Contact__WEBPACK_IMPORTED_MODULE_16__["default"] })] }) }))] }))] })));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppSideBar);


/***/ }),

/***/ "./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": () => (/* binding */ About),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const About = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: "About this website" }) }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ "./src/components/AuditMyAddress.tsx":
/*!*******************************************!*\
  !*** ./src/components/AuditMyAddress.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditMyAddress": () => (/* binding */ AuditMyAddress),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");





const AuditMyAddress = () => {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isCountyDropdownLoading, setIsCountyDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [counties, setCounties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [countyName, setCountyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Loading Counties ...");
    const [streetNumber, setStreetNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [streetName, setStreetName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [zip, setZip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [readyforSearch, setReadyForSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [registeredAddress, setRegisteredAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [registeredVoters, setRegisteredVoters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const voterColumns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
        {
            name: 'Street Address',
            selector: (row) => row.street_address,
            sortable: true,
            width: '300px'
        },
        {
            name: 'Last Name',
            selector: (row) => row.last_name,
            sortable: true,
        },
        {
            name: 'Middle Name',
            selector: (row) => row.middle_name,
            sortable: true,
        },
        {
            name: 'First Name',
            selector: (row) => row.first_name,
            sortable: true,
        },
        {
            name: 'Year of Birth',
            selector: (row) => row.year_of_birth,
            sortable: true,
        },
        {
            name: 'Mailing Address Line 1',
            selector: (row) => row.mailing_address_line_one,
            sortable: true,
            width: '250px'
        },
        {
            name: 'Mailing Address Line 2',
            selector: (row) => row.mailing_address_line_two,
            sortable: true,
            width: '250px'
        },
        {
            name: 'Mailing Address Line 3',
            selector: (row) => row.mailing_address_line_three,
            sortable: true,
            width: '250px'
        },
        {
            name: 'QVF Address Line 1 - 10 Chars',
            selector: (row) => row.address_line_1_qvf_10,
            sortable: true,
            width: '250px'
        },
    ], []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        let unmounted = false;
        setIsCountyDropdownLoading(true);
        fetch('https://data.electionintegrityforce.com/api/counties')
            //fetch('http://localhost:8081/api/counties-202205')
            .then((res) => res.json())
            .then((counties) => {
            setCounties(counties);
            setIsCountyDropdownLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    function validateCountySelection(countySelected) {
        if (countySelected == "0") {
            setReadyForSearch(false);
        }
        else {
            setReadyForSearch(true);
            setCountyName(countySelected);
        }
    }
    const submitForm = async (event) => {
        // Preventing the page from reloading
        event.preventDefault();
        setIsLoading(true);
        setResponseMessage("");
        let addressLine1 = ((streetNumber === null ? "" : streetNumber.trim()) + (streetName === null ? "" : streetName.trim())).replace(' ', '');
        const addressFirst8AndZip = (addressLine1.slice(0, 8) + (zip === null ? "" : zip.trim())).toUpperCase();
        //const resp = await axios.get(`http://localhost:8081/api/audit-your-address-202205/${countyName}/${addressFirst8AndZip}`);
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://data.electionintegrityforce.com/api/audit-your-address/${countyName}/${addressFirst8AndZip}`);
        if (resp.status === 200) {
            setResponseMessage("Success");
            setCount(resp.data.count);
            setRegisteredAddress(resp.data.registeredAddress);
            setRegisteredVoters(resp.data.registeredVoters);
        }
        else {
            setResponseMessage("Error");
        }
        setIsLoading(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], { animation: "border", variant: 'danger', role: "status" })
                                            : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Select, Object.assign({ disabled: isCountyDropdownLoading, value: countyName, required: true, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Street Number", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Control, { value: streetNumber, required: true, onChange: (e) => setStreetNumber(e.target.value), type: "text", placeholder: "Enter Street Number", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Street Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Control, { value: streetName, required: true, onChange: (e) => setStreetName(e.target.value), type: "text", placeholder: "Enter Street Name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Zip", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Control, { value: zip, required: true, maxLength: 5, onChange: (e) => setZip(e.target.value), type: "text", placeholder: "Enter Zip", className: "input" })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn", disabled: !readyforSearch }, { children: "Audit Address" })) })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [isLoading ?
                        (responseMessage === '') ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], { animation: "border", variant: 'danger', role: "status" })
                            : ""
                        : "", !isLoading ?
                        (responseMessage === 'Success') ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Text, { children: [count, " registrations found."] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { columns: voterColumns, data: registeredVoters })] })
                            : (responseMessage === 'Error') ? "Error fetching records. Please retry." : ""
                        : ""] })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuditMyAddress);


/***/ }),

/***/ "./src/components/ChallengeList.tsx":
/*!******************************************!*\
  !*** ./src/components/ChallengeList.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChallengeList": () => (/* binding */ ChallengeList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_auth_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth-header */ "./src/services/auth-header.js");









const ChallengeList = () => {
    const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userReady, setUserReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ username: "" });
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isCountyDropdownLoading, setIsCountyDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [counties, setCounties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [countyName, setCountyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Loading Counties ...");
    const [isJurisdictionDropdownLoading, setIsJurisdictionDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [jurisdictions, setJurisdictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [jurisdictionName, setJurisdictionName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select Jurisdiction --- ");
    const [isPrecinctDropdownLoading, setIsPrecinctDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [precincts, setPrecincts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [precinctName, setPrecinctName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select Precinct --- ");
    const [readyforSearch, setReadyForSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [challengeableVoters, setChallengeableVoters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hideDownloadButton, setHideDownloadButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
        {
            name: 'Error Code',
            selector: (row) => getErrors(row),
            sortable: true,
            width: '300px',
        },
        {
            name: 'Full Street Address',
            selector: (row) => row.full_street_address,
            sortable: true,
            width: '300px',
        },
        {
            name: 'Full Name',
            selector: (row) => row.full_name,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Year of Birth',
            selector: (row) => row.year_of_birth,
            sortable: true,
            width: '100px'
        },
        {
            name: 'Voter Identification Number',
            selector: (row) => row.voter_identification_number,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            width: '250px'
        },
        {
            name: 'Type',
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: 'Jurisdiction Name',
            selector: (row) => row.jurisdiction_name,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Precinct',
            selector: (row) => row.precinct,
            sortable: true,
            width: '150px'
        },
        {
            name: 'First Name',
            selector: (row) => row.first_name,
            sortable: true,
            width: '10px'
        },
        {
            name: 'Middle Name',
            selector: (row) => row.middle_name,
            sortable: true,
            width: '10px'
        },
        {
            name: 'Last Name',
            selector: (row) => row.last_name,
            sortable: true,
            width: '10px'
        },
    ], []);
    function getErrors(row) {
        var errors = "";
        if (row.type === 'Business' || row.type === 'Hotel' || row.type === 'Cemetary' || row.type === 'Empty Lot') {
            errors = "ADDRESS_ILLEGAL ";
        }
        if ((row.type === 'Apartment' || row.type === 'Trailer Park' || row.type === 'RV Park-Seasonal') && (row.extension === null || row.extension === '')) {
            errors = errors + "ADDRESS_EXTENSION ";
        }
        if (row.year_of_birth < 1912) {
            errors = errors + "AGE_OVER ";
        }
        if (row.year_of_birth > 2004) {
            errors = errors + "AGE_UNDER ";
        }
        if ((row.first_name === row.last_name) || (row.last_name === row.middle_name)) {
            errors = errors + "NAME_DUPLICATE ";
        }
        return errors;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrentUser();
        if (!currentUser) {
            setRedirect("/login");
        }
        setCurrentUser(currentUser);
        setUserReady(true);
        const abortController = new AbortController();
        setIsCountyDropdownLoading(true);
        void async function fetchCounties() {
            try {
                const url = 'https://data.electionintegrityforce.com/api/counties';
                const response = await fetch(url, { signal: abortController.signal });
                setCounties(await response.json());
                setIsCountyDropdownLoading(false);
                setIsLoading(false);
            }
            catch (error) {
                console.log('error', error);
            }
        }();
        return () => {
            abortController.abort();
        };
    }, []);
    function validateCountySelection(countySelected) {
        setPrecinctName(" --- Select Precinct --- ");
        if (countySelected == "0") {
            setReadyForSearch(false);
        }
        else {
            setCountyName(countySelected);
            fetchJurisdictions(countySelected);
        }
    }
    function fetchJurisdictions(countyName) {
        setIsJurisdictionDropdownLoading(true);
        fetch(`https://data.electionintegrityforce.com/api/jurisdictions/${countyName}`)
            //fetch(`http://localhost:8081/api/jurisdictions/${countyName}`)
            .then((res) => res.json())
            .then((jurisdictions) => {
            setJurisdictions(jurisdictions);
            setIsJurisdictionDropdownLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    function validateJurisdictionSelection(jurisdictionSelected) {
        if (jurisdictionSelected == "0") {
            setReadyForSearch(false);
        }
        else {
            setJurisdictionName(jurisdictionSelected);
            fetchPrecincts(jurisdictionSelected);
        }
    }
    function fetchPrecincts(jurisdictionName) {
        setIsPrecinctDropdownLoading(true);
        fetch(`https://data.electionintegrityforce.com/api/precincts/${countyName}/${jurisdictionName}`)
            //fetch(`http://localhost:8081/api/precincts/${countyName}/${jurisdictionName}`)
            .then((res) => res.json())
            .then((precincts) => {
            setPrecincts(precincts);
            setIsPrecinctDropdownLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    function validatePrecinctSelection(precinctSelected) {
        if (precinctSelected == "0") {
            setReadyForSearch(false);
        }
        else {
            setPrecinctName(precinctSelected);
            setReadyForSearch(true);
        }
    }
    const ExpandedComponent = () => ({ data }) => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(data, null, 2) }) }));
    };
    const submitForm = async (event) => {
        // Preventing the page from reloading
        event.preventDefault();
        setIsLoading(true);
        setResponseMessage("");
        //const resp = await axios.get(`http://localhost:8081/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: authHeader() });
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://data.electionintegrityforce.com/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() });
        if (resp.status === 200) {
            setResponseMessage("Success");
            setChallengeableVoters(resp.data);
            if (resp.data.length === 0) {
                setHideDownloadButton(true);
            }
            else {
                setHideDownloadButton(false);
            }
        }
        else {
            setResponseMessage("Error");
        }
        setIsLoading(false);
    };
    const conditionalRowStyles = [
        {
            when: columns => ((columns.extension === null || columns.extension === '') && (columns.type === 'RV Park-Seasonal' || columns.type === 'Apartment' || columns.type === 'Trailer Park')),
            style: {
                color: 'red',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: columns => (columns.type === 'Business' || columns.type === 'Hotel' || columns.type === 'Cemetary' || columns.type === 'Empty Lot'),
            style: {
                color: 'red',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: columns => (columns.year_of_birth < 1912 || columns.year_of_birth > 2004),
            style: {
                color: 'red',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        }
        /* You can also pass a callback to style for additional customization
        {
          when: row => row.email.includes('.com'),
          style: row => ({
            backgroundColor: row.phone.startsWith('9') || row.phone.startsWith('1') ? 'pink' : 'inerit',
          }),
        },*/
    ];
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isJurisdictionDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Jurisdiction", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ disabled: isJurisdictionDropdownLoading, value: jurisdictionName, onChange: (e) => validateJurisdictionSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Jurisdiction --- " })), jurisdictions.map((jurisdiction) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: jurisdiction.jurisdiction_name }, { children: jurisdiction.jurisdiction_name }), jurisdiction.jurisdiction_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isPrecinctDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Precinct", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ disabled: isPrecinctDropdownLoading, value: precinctName, onChange: (e) => validatePrecinctSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Precinct --- " })), precincts.map((precinct) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: precinct.precinct }, { children: precinct.precinct }), precinct.precinct)))] }))] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn", disabled: !readyforSearch }, { children: "Get Precinct Challenge List" })) })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [isLoading ?
                            (responseMessage === '') ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                : ""
                            : "", !isLoading ?
                            (responseMessage === 'Success') ?
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, Object.assign({ hidden: hideDownloadButton, data: challengeableVoters, filename: countyName + '-' + jurisdictionName + '-' + precinctName + '-challenge-list.csv' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ className: "button", color: "red", size: 'lg' }, { children: "Download results" })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), expandOnRowClicked: true, columns: columns, data: challengeableVoters, highlightOnHover: true, conditionalRowStyles: conditionalRowStyles, pagination: true, paginationPerPage: 10, paginationTotalRows: challengeableVoters.length, responsive: true, striped: true })] })
                                : (responseMessage === 'Error') ? "Error fetching records. Please retry." : ""
                            : ""] })] })));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChallengeList);


/***/ }),

/***/ "./src/components/Contact.tsx":
/*!************************************!*\
  !*** ./src/components/Contact.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const Contact = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: "Contact Us" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "... if you'd like to help set the truth free" })] }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ "./src/components/Ghostbusters.tsx":
/*!*****************************************!*\
  !*** ./src/components/Ghostbusters.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ghostbusters": () => (/* binding */ Ghostbusters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_auth_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth-header */ "./src/services/auth-header.js");









const Ghostbusters = () => {
    const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userReady, setUserReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ username: "" });
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isCountyDropdownLoading, setIsCountyDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [counties, setCounties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [countyName, setCountyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Loading Counties ...");
    const [readyforSearch, setReadyForSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hideDownloadButton, setHideDownloadButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
        {
            name: 'Full Street Address',
            selector: (row) => row.full_street_address,
            sortable: true,
            width: '300px'
        },
        {
            name: 'Registration Count',
            selector: (row) => row.registration_count,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Beds/Apt/Lots Qty',
            selector: (row) => row.beds_apts_lots_qty,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
            width: '250px'
        },
        {
            name: 'Type',
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: 'Jurisdiction Name',
            selector: (row) => row.jurisdiction_name,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Precinct',
            selector: (row) => row.precinct,
            sortable: true,
            width: '150px'
        }
    ], []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrentUser();
        if (!currentUser) {
            setRedirect("/login");
        }
        setCurrentUser(currentUser);
        setUserReady(true);
        const abortController = new AbortController();
        setIsCountyDropdownLoading(true);
        void async function fetchCounties() {
            try {
                const url = 'https://data.electionintegrityforce.com/api/counties';
                //const url = 'http://localhost:8081/api/counties';
                const response = await fetch(url, { signal: abortController.signal });
                setCounties(await response.json());
                setIsCountyDropdownLoading(false);
                setIsLoading(false);
            }
            catch (error) {
                console.log('error', error);
            }
        }();
        return () => {
            abortController.abort();
        };
    }, []);
    function validateCountySelection(countySelected) {
        if (countySelected == "0") {
            setReadyForSearch(false);
        }
        else {
            setReadyForSearch(true);
            setCountyName(countySelected);
        }
    }
    const ExpandedComponent = () => ({ data }) => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(data, null, 2) }) }));
    };
    const submitForm = async (event) => {
        // Preventing the page from reloading
        event.preventDefault();
        setIsLoading(true);
        setResponseMessage("");
        //const resp = await axios.get(`http://localhost:8081/api/flagged-registrations/${countyName}`);
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://data.electionintegrityforce.com/api/ghostbuster-locations/${countyName}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() });
        if (resp.status === 200) {
            setResponseMessage("Success");
            setLocations(resp.data);
            if (resp.data.length === 0) {
                setHideDownloadButton(true);
            }
            else {
                setHideDownloadButton(false);
            }
        }
        else {
            setResponseMessage("Error");
        }
        setIsLoading(false);
    };
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                            : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn", disabled: !readyforSearch }, { children: "Get Ghost Locations" })) })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [isLoading ?
                            (responseMessage === '') ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                : ""
                            : "", !isLoading ?
                            (responseMessage === 'Success') ?
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, Object.assign({ hidden: hideDownloadButton, data: locations, filename: countyName + '-flagged-addresses.csv' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ className: "button", color: "red", size: 'lg' }, { children: "Download results" })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), columns: columns, data: locations, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: locations.length })] })
                                : (responseMessage === 'Error') ? "Error fetching records. Please retry." : ""
                            : ""] })] })));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ghostbusters);


/***/ }),

/***/ "./src/components/MyVotingHistory.tsx":
/*!********************************************!*\
  !*** ./src/components/MyVotingHistory.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _VoterInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VoterInformation */ "./src/components/VoterInformation.tsx");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var _services_auth_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth-header */ "./src/services/auth-header.js");











const MyVotingHistory = () => {
    const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userReady, setUserReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ username: "" });
    const [qvfDates, setQvfDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [qvfDate, setQvfDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select QVF Date --- ");
    const [counties, setCounties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [countyName, setCountyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select County --- ");
    const [voterId, setVoterId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterLastName, setVoterLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterFirstName, setVoterFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterZip, setVoterZip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterCounty, setVoterCounty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [voterInfo, setVoterInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
        {
            name: 'Voter Identification Number',
            selector: (row) => row.voter_identification_number,
            sortable: true
        },
        {
            name: 'County Name',
            selector: (row) => row.county_name,
            sortable: true
        },
        {
            name: 'Jurisdiction Name',
            selector: (row) => row.jurisdiction_name,
            sortable: true
        },
        {
            name: 'Election Date',
            selector: (row) => row.election_date,
            sortable: true
        },
        {
            name: 'Is Absentee Vote',
            selector: (row) => row.is_absentee_voter,
            sortable: true
        },
    ], []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].getCurrentUser();
        if (!currentUser) {
            setRedirect("/login");
        }
        setCurrentUser(currentUser);
        setUserReady(true);
        let unmounted = false;
        fetch('https://data.electionintegrityforce.com/api/qvfdates')
            .then((res) => res.json())
            .then((qvfDates) => {
            setQvfDates(qvfDates);
            setQvfDate(qvfDates[0].table_name);
            setIsLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    const [voterData, setVoterData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const submitForm = async (event) => {
        // Preventing the page from reloading
        event.preventDefault();
        setIsLoading(true);
        //const urlBase = `http://localhost:8081/api/votinghistory/${qvfDate}`;
        const urlBase = `https://data.electionintegrityforce.com/api/votinghistory/${qvfDate}`;
        let urlSuffix = '';
        //const resp = await axios.get(`http://localhost:8081/api/votinghistory/${qvfDate}/${voterId}/${voterLastName}/${voterFirstName}`);
        if (voterId) {
            urlSuffix = `/voterid:${voterId}`;
        }
        else {
            if (voterCounty) {
                urlSuffix = `/voterCounty:${voterCounty}/voterZip:${voterZip}/voterLastName:${voterLastName}/voterFirstName:${voterFirstName}`;
            }
        }
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(urlBase + urlSuffix, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_7__["default"])() });
        if (resp.status === 200) {
            setResponseMessage("Success");
            //const voterInfo: VoterType = {county_name: "LIVINGSTON", last_name: "MNBC", first_name: "ABHJABD", middle_name: "K", voter_identification_number: "9420642"};
            setVoterInfo(voterInfo);
            setVoterId(voterId);
            setVoterData(resp.data);
        }
        else {
            setResponseMessage("Error!");
        }
        setIsLoading(false);
    };
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["QVF Date", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ disabled: isLoading, value: qvfDate, onChange: (e) => setQvfDate(e.currentTarget.value) }, { children: qvfDates.map((qvf) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: qvf.table_name }, { children: qvf.table_name }), qvf.table_name))) }))] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Voter Id", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, { value: voterId, onChange: (e) => setVoterId(e.target.value), type: "text", placeholder: "Enter Voter Id", className: "input" })] }) }), "--- OR ---", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Zip", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, { value: voterZip, onChange: (e) => setVoterZip(e.target.value), type: "text", placeholder: "Enter Zip", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Last Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, { value: voterLastName, onChange: (e) => setVoterLastName(e.target.value), type: "text", placeholder: "Enter Last Name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["First Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, { value: voterFirstName, onChange: (e) => setVoterFirstName(e.target.value), type: "text", placeholder: "Enter First name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, { value: voterCounty, onChange: (e) => setVoterCounty(e.target.value), type: "text", placeholder: "Enter County", className: "input" })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn" }, { children: "Get My Voting History" })) })] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isLoading ?
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({ animation: "border", variant: 'danger', role: "status" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "sr-only" }, { children: "Loading..." })) }))
                            : voterData.length > 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VoterInformation__WEBPACK_IMPORTED_MODULE_3__["default"], { stringProp: voterId }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__["default"], { columns: columns, data: voterData })] })
                                : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}) }) })] }));
    }
};
const Dropdown = ({ loading, label, value, options, onChange }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [label, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", Object.assign({ disabled: loading, value: value, onChange: onChange }, { children: options.map((option) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: option.value }, { children: option.label }), option.value))) }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyVotingHistory);


/***/ }),

/***/ "./src/components/News.tsx":
/*!*********************************!*\
  !*** ./src/components/News.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "News": () => (/* binding */ News),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const News = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: "In other news ..." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "https://rumble.com/v1ij7tl-election-decertification-incoming-thanks-to-election-integrity-force.html" })] }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);


/***/ }),

/***/ "./src/components/Resources.tsx":
/*!**************************************!*\
  !*** ./src/components/Resources.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

//import styled from 'styled-components';
/*const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; */
const Resources = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: "Web Resources" }) }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resources);


/***/ }),

/***/ "./src/components/VoterInformation.tsx":
/*!*********************************************!*\
  !*** ./src/components/VoterInformation.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VoterInformation = ({ stringProp }) => {
    const [passedInStringPropValue, setPassedInStringPropValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setPassedInStringPropValue(stringProp);
    }, [stringProp]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["Voter Identification Number: ", stringProp] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoterInformation);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AppSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppSideBar */ "./src/AppSideBar.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");






react_dom__WEBPACK_IMPORTED_MODULE_1__.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AppSideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}) }), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__.unregister();


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksU0FBUywrQkFBK0IsR0FBRyxzREFBSSxVQUFVLGtIQUFrSCxJQUFJO0FBQzVPLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbUQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNJLHlCQUF5QixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxTQUFTLDJCQUEyQixHQUFHO0FBQ3ZHLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlCO0FBQ047QUFDNUMsNEJBQTRCLFlBQVk7QUFDeEMsa0VBQWtFLCtDQUFRO0FBQzFFLElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTCxZQUFZLHVEQUFLLFVBQVUseURBQXlEO0FBQ3BGO0FBQ0EsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUNmO0FBQ1o7QUFDNEI7QUFDWDtBQUNXO0FBQ2pELDZDQUFlLENBQUMsc0RBQUksQ0FBQywyREFBYSxJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBVSxJQUFJLEdBQUc7QUFDdEUsc0RBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL0FwcFNpZGViYXIuY3NzIiwid2VicGFjazovL3dlYi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL0FwcFNpZGViYXIuY3NzP2YxYjkiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21tb24vRXZlbnRCdXMuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZVdvcmtlci5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvYXV0aC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9BcHBTaWRlQmFyLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9BYm91dC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQXVkaXRNeUFkZHJlc3MudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0NoYWxsZW5nZUxpc3QudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0dob3N0YnVzdGVycy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvTXlWb3RpbmdIaXN0b3J5LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9OZXdzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9SZXNvdXJjZXMudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL1ZvdGVySW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuICAgIERFTU8gU1RZTEVcXHJcXG4qL1xcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDYwLCAxNDcsIDIwNik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWJ0biB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xcclxcbiAgICBtYXJnaW46IDQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaSxcXHJcXG5zcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgU0lERUJBUiBTVFlMRVxcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzAyOTI5O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB7XFxyXFxuICAgIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMTIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBoNCxcXHJcXG4jc2lkZWJhci5hY3RpdmUgLkNUQXMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDEuOGVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB1bCB1bCBhIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IGF1dG87XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRlNDE0MztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gICAgY29sb3I6cmdiKDIzNSwgMjIxLCAyMjEpO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjODMwMjAxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxcclxcbmFbYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI0NCwgMjQ0KTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRjNGQ0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYVtkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxudWwgdWwgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0ZTRlNTA7XFxyXFxufVxcclxcblxcclxcbnVsLkNUQXMge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bC5DVEFzIGEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5hLmRvd25sb2FkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICM3Mzg2RDU7XFxyXFxufVxcclxcblxcclxcbmEuYXJ0aWNsZSxcXHJcXG5hLmFydGljbGU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBDT05URU5UIFNUWUxFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBNRURJQVFVRVJJRVNcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogLTgwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgICAgICB0b3A6IGF1dG87XFxyXFxuICAgICAgICBib3R0b206IDEwcHg7XFxyXFxuICAgICAgICByaWdodDogNTAlO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyLmFjdGl2ZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBoMyxcXHJcXG4gICAgI3NpZGViYXIgLkNUQXMge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgc3BhbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgdWwgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXJDb2xsYXBzZSBzcGFuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0FwcFNpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBR0Q7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBOzt1REFFdUQ7O0FBRXZEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBOzt1REFFdUQ7O0FBRXZEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1osVUFBVTtRQUNWLGtDQUFrQztRQUNsQyw4QkFBOEI7UUFDOUIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTs7UUFFSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXHJcXG4gICAgREVNTyBTVFlMRVxcclxcbiovXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFxcXCI7XFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjAsIDE0NywgMjA2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnRuIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XFxyXFxuICAgIG1hcmdpbjogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pLFxcclxcbnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBTSURFQkFSIFNUWUxFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMDI5Mjk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGg0LFxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuQ1RBcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0MTQzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMjEsIDIyMSk7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM4MzAyMDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXFxyXFxuYVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjQ0LCAyNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGM0ZDRlO1xcclxcbn1cXHJcXG5cXHJcXG5hW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB1bCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRlNGU1MDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnVsLkNUQXMgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmEuZG93bmxvYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzczODZENTtcXHJcXG59XFxyXFxuXFxyXFxuYS5hcnRpY2xlLFxcclxcbmEuYXJ0aWNsZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIENPTlRFTlQgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIE1FRElBUVVFUklFU1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRvcDogYXV0bztcXHJcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIGgzLFxcclxcbiAgICAjc2lkZWJhciAuQ1RBcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCB1bCBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBjb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxyXFxuICAgICAgbW9ub3NwYWNlO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Q7O2dCQUVZO0lBQ1osbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFO2VBQ1c7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBjb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxyXFxuICAgICAgbW9ub3NwYWNlO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwU2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcFNpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiY29uc3QgZXZlbnRCdXMgPSB7XHJcbiAgICBvbihldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4gY2FsbGJhY2soZS5kZXRhaWwpKTtcclxuICAgIH0sXHJcbiAgICBkaXNwYXRjaChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7IGRldGFpbDogZGF0YSB9KSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50QnVzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIFVzZXJTZXJ2aWNlLmdldFB1YmxpY0NvbnRlbnQoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImhlYWRlclwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImp1bWJvdHJvblwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgeyBjaGlsZHJlbjogXCJSZWxlYXNlIHYwOTA1MjAyMlwiIH0pLCBfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogXCJGZWF0dXJlcyBTdXBwb3J0ZWRcIiB9KSwgX2pzeHMoXCJ1bFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiR2hvc3RidXN0aW5nIExvY2F0aW9uIFJlcG9ydDogRG93bmxvYWQgcmVwb3J0IG9mIHN1c3BlY3QgbG9jYXRpb25zIGNhbnZhc3NlZCBhY3Jvc3MgTWljaGlnYW5cIiB9KSwgX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiTXkgVm90aW5nIEhpc3Rvcnk6IEV4YW1pbmUgeW91ciB2b3RpbmcgaGlzdG9yeSBmb3IgYW5vbWFsaWVzXCIgfSldIH0pXSB9KSkgfSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvaW5wdXRcIjtcclxuaW1wb3J0IENoZWNrQnV0dG9uIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2J1dHRvblwiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUxvZ2luID0gdGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VVc2VybmFtZSA9IHRoaXMub25DaGFuZ2VVc2VybmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VVc2VybmFtZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlTG9naW4oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybS52YWxpZGF0ZUFsbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnRuLmNvbnRleHQuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgQXV0aFNlcnZpY2UubG9naW4odGhpcy5zdGF0ZS51c2VybmFtZSwgdGhpcy5zdGF0ZS5wYXNzd29yZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9wcm9maWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNNZXNzYWdlID0gKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc01lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbC1tZC0xMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjYXJkIGNhcmQtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiB0aGlzLmhhbmRsZUxvZ2luLCByZWY6IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IFwidXNlcm5hbWVcIiB9LCB7IGNoaWxkcmVuOiBcIlVzZXJuYW1lXCIgfSkpLCBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwidXNlcm5hbWVcIiwgdmFsdWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWRdIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IFwicGFzc3dvcmRcIiB9LCB7IGNoaWxkcmVuOiBcIlBhc3N3b3JkXCIgfSkpLCBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHZhbHVlOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVBhc3N3b3JkLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkXSB9KV0gfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiLCBkaXNhYmxlZDogdGhpcy5zdGF0ZS5sb2FkaW5nIH0sIHsgY2hpbGRyZW46IFt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKF9qc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgfSkpLCBfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiBcIkxvZ2luXCIgfSldIH0pKSB9KSksIHRoaXMuc3RhdGUubWVzc2FnZSAmJiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiB0aGlzLnN0YXRlLm1lc3NhZ2UgfSkpIH0pKSksIF9qc3goQ2hlY2tCdXR0b24sIHsgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSldIH0pKSB9KSkgfSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiBudWxsLFxyXG4gICAgICAgICAgICB1c2VyUmVhZHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogeyB1c2VybmFtZTogXCJcIiB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVkaXJlY3Q6IFwiL2hvbWVcIiB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFVzZXI6IGN1cnJlbnRVc2VyLCB1c2VyUmVhZHk6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9qc3goUmVkaXJlY3QsIHsgdG86IHRoaXMuc3RhdGUucmVkaXJlY3QgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogKHRoaXMuc3RhdGUudXNlclJlYWR5KSA/XHJcbiAgICAgICAgICAgICAgICBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImhlYWRlclwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImp1bWJvdHJvblwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiaDNcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogY3VycmVudFVzZXIudXNlcm5hbWUgfSksIFwiIFByb2ZpbGVcIl0gfSkgfSkpLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJUb2tlbjpcIiB9KSwgXCIgXCIsIGN1cnJlbnRVc2VyLmFjY2Vzc1Rva2VuLnN1YnN0cmluZygwLCAyMCksIFwiIC4uLlwiLCBcIiBcIiwgY3VycmVudFVzZXIuYWNjZXNzVG9rZW4uc3Vic3RyKGN1cnJlbnRVc2VyLmFjY2Vzc1Rva2VuLmxlbmd0aCAtIDIwKV0gfSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIklkOlwiIH0pLCBcIiBcIiwgY3VycmVudFVzZXIuaWRdIH0pLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJFbWFpbDpcIiB9KSwgXCIgXCIsIGN1cnJlbnRVc2VyLmVtYWlsXSB9KSwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIkF1dGhvcml0aWVzOlwiIH0pLCBfanN4KFwidWxcIiwgeyBjaGlsZHJlbjogY3VycmVudFVzZXIucm9sZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlci5yb2xlcy5tYXAoKHJvbGUsIGluZGV4KSA9PiBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogcm9sZSB9LCBpbmRleCkpIH0pXSB9KSA6IG51bGwgfSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvaW5wdXRcIjtcclxuaW1wb3J0IENoZWNrQnV0dG9uIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSBcInZhbGlkYXRvclwiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5jb25zdCByZXF1aXJlZCA9IHZhbHVlID0+IHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBlbWFpbCA9IHZhbHVlID0+IHtcclxuICAgIGlmICghaXNFbWFpbCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFwiVGhpcyBpcyBub3QgYSB2YWxpZCBlbWFpbC5cIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCB2dXNlcm5hbWUgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyB8fCB2YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGUgdXNlcm5hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDIwIGNoYXJhY3RlcnMuXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgdnBhc3N3b3JkID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDYgfHwgdmFsdWUubGVuZ3RoID4gNDApIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFwiVGhlIHBhc3N3b3JkIG11c3QgYmUgYmV0d2VlbiA2IGFuZCA0MCBjaGFyYWN0ZXJzLlwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVnaXN0ZXIgPSB0aGlzLmhhbmRsZVJlZ2lzdGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVVzZXJuYW1lID0gdGhpcy5vbkNoYW5nZVVzZXJuYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUVtYWlsID0gdGhpcy5vbkNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhc3N3b3JkID0gdGhpcy5vbkNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VVc2VybmFtZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VFbWFpbChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VQYXNzd29yZChlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUmVnaXN0ZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZvcm0udmFsaWRhdGVBbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0J0bi5jb250ZXh0Ll9lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIEF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuc3RhdGUudXNlcm5hbWUsIHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNNZXNzYWdlID0gKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc01lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLW1kLTEyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNhcmQgY2FyZC1jb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHRoaXMuaGFuZGxlUmVnaXN0ZXIsIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbIXRoaXMuc3RhdGUuc3VjY2Vzc2Z1bCAmJiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IFwidXNlcm5hbWVcIiB9LCB7IGNoaWxkcmVuOiBcIlVzZXJuYW1lXCIgfSkpLCBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwidXNlcm5hbWVcIiwgdmFsdWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWQsIHZ1c2VybmFtZV0gfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJlbWFpbFwiIH0sIHsgY2hpbGRyZW46IFwiRW1haWxcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJlbWFpbFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5lbWFpbCwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VFbWFpbCwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZCwgZW1haWxdIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IFwicGFzc3dvcmRcIiB9LCB7IGNoaWxkcmVuOiBcIlBhc3N3b3JkXCIgfSkpLCBfanN4KElucHV0LCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHZhbHVlOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVBhc3N3b3JkLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkLCB2cGFzc3dvcmRdIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB9LCB7IGNoaWxkcmVuOiBcIlNpZ24gVXBcIiB9KSkgfSkpXSB9KSksIHRoaXMuc3RhdGUubWVzc2FnZSAmJiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IHRoaXMuc3RhdGUuc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IHRoaXMuc3RhdGUubWVzc2FnZSB9KSkgfSkpKSwgX2pzeChDaGVja0J1dHRvbiwgeyBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LCByZWY6IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCdG4gPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpIH0pKSB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoaXMgb3B0aW9uYWwgY29kZSBpcyB1c2VkIHRvIHJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIuXHJcbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxyXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcclxuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXHJcbi8vIHdpbGwgb25seSBzZWUgZGVwbG95ZWQgdXBkYXRlcyBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byBhIHBhZ2UsIGFmdGVyIGFsbCB0aGVcclxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXHJcbi8vIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cclxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xyXG4vLyBvcHQtaW4sIHJlYWQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxyXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4od2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxyXG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcclxuICAgIC8vIDEyNy4wLjAuMC84IGFyZSBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaCgvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC8pKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXHJcbiAgICAgICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChwcm9jZXNzLmVudi5QVUJMSUNfVVJMLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgICAgICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cclxuICAgICAgICAgICAgLy8gZnJvbSB3aGF0IG91ciBwYWdlIGlzIHNlcnZlZCBvbi4gVGhpcyBtaWdodCBoYXBwZW4gaWYgYSBDRE4gaXMgdXNlZCB0b1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcclxuICAgICAgICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXHJcbiAgICAgICAgICAgICAgICBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXHJcbiAgICAgICAgICAgICAgICAvLyBzZXJ2aWNlIHdvcmtlci9QV0EgZG9jdW1lbnRhdGlvbi5cclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyBub3QgbG9jYWxob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXHJcbiAgICAgICAgICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZykge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuICAgICAgICAucmVnaXN0ZXIoc3dVcmwpXHJcbiAgICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlIGFuZCB3aWxsIGJlIHVzZWQgd2hlbiBhbGwgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUocmVnaXN0cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZykge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGNhbiBiZSBmb3VuZC4gSWYgaXQgY2FuJ3QgcmVsb2FkIHRoZSBwYWdlLlxyXG4gICAgZmV0Y2goc3dVcmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7ICdTZXJ2aWNlLVdvcmtlcic6ICdzY3JpcHQnIH1cclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXHJcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0IHx8XHJcbiAgICAgICAgICAgIChjb250ZW50VHlwZSAhPSBudWxsICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJ2phdmFzY3JpcHQnKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvY2VlZCBhcyBub3JtYWwuXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGludGVybmV0IGNvbm5lY3Rpb24gZm91bmQuIEFwcCBpcyBydW5uaW5nIGluIG9mZmxpbmUgbW9kZS4nKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xyXG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeVxyXG4gICAgICAgICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aEhlYWRlcigpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgIC8vIHJldHVybiB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHVzZXIuYWNjZXNzVG9rZW4gfTsgLy8gZm9yIFNwcmluZyBCb290IGJhY2stZW5kXHJcbiAgICAgICAgcmV0dXJuIHsgJ3gtYWNjZXNzLXRva2VuJzogdXNlci5hY2Nlc3NUb2tlbiB9OyAvLyBmb3IgTm9kZS5qcyBFeHByZXNzIGJhY2stZW5kXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBBUElfVVJMID0gXCJodHRwczovL2RhdGEuZWxlY3Rpb25pbnRlZ3JpdHlmb3JjZS5jb20vYXBpL2F1dGgvXCI7XHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAucG9zdChBUElfVVJMICsgXCJzaWduaW5cIiwge1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgXCJzaWdudXBcIiwge1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSAnLi9hdXRoLWhlYWRlcic7XHJcbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9kYXRhLmVsZWN0aW9uaW50ZWdyaXR5Zm9yY2UuY29tL2FwaS90ZXN0Lyc7XHJcbmNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGdldFB1YmxpY0NvbnRlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ2FsbCcpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlckJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICd1c2VyJywgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRNb2RlcmF0b3JCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAnbW9kJywgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRBZG1pbkJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICdhZG1pbicsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCBNeVZvdGluZ0hpc3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL015Vm90aW5nSGlzdG9yeSc7XHJcbmltcG9ydCBHaG9zdGJ1c3RlcnMgZnJvbSAnLi9jb21wb25lbnRzL0dob3N0YnVzdGVycyc7XHJcbmltcG9ydCBBdWRpdE15QWRkcmVzcyBmcm9tICcuL2NvbXBvbmVudHMvQXVkaXRNeUFkZHJlc3MnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9jb21wb25lbnRzL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4vY29tcG9uZW50cy9SZXNvdXJjZXMnO1xyXG5pbXBvcnQgRXZlbnRCdXMgZnJvbSBcIi4vY29tbW9uL0V2ZW50QnVzXCI7XHJcbmltcG9ydCAnLi9BcHBTaWRlYmFyLmNzcyc7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IE5ld3MgZnJvbSAnLi9jb21wb25lbnRzL05ld3MnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdCc7XHJcbmltcG9ydCBDaGFsbGVuZ2VMaXN0IGZyb20gJy4vY29tcG9uZW50cy9DaGFsbGVuZ2VMaXN0JztcclxuY2xhc3MgQXBwU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd01vZGVyYXRvckJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0FkbWluQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgIHNob3dNb2RlcmF0b3JCb2FyZDogdXNlci5yb2xlcy5pbmNsdWRlcyhcIlJPTEVfREFUQV9DVVJBVE9SXCIpLFxyXG4gICAgICAgICAgICAgICAgc2hvd0FkbWluQm9hcmQ6IHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRXZlbnRCdXMub24oXCJsb2dvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ091dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgRXZlbnRCdXMucmVtb3ZlKFwibG9nb3V0XCIpO1xyXG4gICAgfVxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93TW9kZXJhdG9yQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93QWRtaW5Cb2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VXNlciwgc2hvd01vZGVyYXRvckJvYXJkLCBzaG93QWRtaW5Cb2FyZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid3JhcHBlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcIm5hdlwiLCBPYmplY3QuYXNzaWduKHsgaWQ6IFwic2lkZWJhclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInNpZGViYXItaGVhZGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoNFwiLCB7IGNoaWxkcmVuOiBcIkVsZWN0aW9uIEludGVncml0eSBGb3JjZVwiIH0pLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiRUlGXCIgfSldIH0pKSwgX2pzeHMoXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImxpc3QtdW5zdHlsZWQgY29tcG9uZW50c1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiI2hvbWVTdWJtZW51XCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBjbGFzc05hbWU6IFwiZHJvcGRvd24tdG9nZ2xlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1ob21lXCIgfSksIFwiXFx1MDBBMCBBdWRpdFwiXSB9KSksIF9qc3goXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxhcHNlIGxpc3QtdW5zdHlsZWRcIiwgaWQ6IFwiaG9tZVN1Ym1lbnVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9teS12b3RpbmctaGlzdG9yeVwiLCBjbGFzc05hbWU6IFwibmF2LWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBcIlZvdGluZyBIaXN0b3J5XCIgfSkpIH0pKSB9KSldIH0pLCBfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiI3BhZ2VTdWJtZW51XCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBjbGFzc05hbWU6IFwiZHJvcGRvd24tdG9nZ2xlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1nbGFzc2VzXCIgfSksIFwiXFx1MDBBMCBSZXBvcnRzXCJdIH0pKSwgX2pzeHMoXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxhcHNlIGxpc3QtdW5zdHlsZWRcIiwgaWQ6IFwicGFnZVN1Ym1lbnVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvZ2hvc3RidXN0ZXJzLWJ5LWNvdW50eVwiLCBjbGFzc05hbWU6IFwibmF2LWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBcIkdob3N0YnVzdGluZyBMb2NhdGlvbnNcIiB9KSkgfSkpLCBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9jaGFsbGVuZ2UtbGlzdC1ieS1wcmVjaW5jdFwiLCBjbGFzc05hbWU6IFwibmF2LWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBcIkNoYWxsZW5nZSBMaXN0XCIgfSkpIH0pKV0gfSkpXSB9KSwgX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IF9qc3hzKExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvbmV3c1wiLCBjbGFzc05hbWU6IFwibmF2LWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLWdsb2JlXCIgfSksIFwiXFx1MDBBMCBOZXdzXCJdIH0pKSB9KSwgX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IF9qc3hzKExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvY29udGFjdFwiLCBjbGFzc05hbWU6IFwibmF2LWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLXBhcGVyLXBsYW5lXCIgfSksIFwiXFx1MDBBMCBDb250YWN0XCJdIH0pKSB9KV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBpZDogXCJjb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJuYXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2lkZWJhckNvbGxhcHNlXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnRuXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1hbGlnbi1sZWZ0XCIgfSksIF9qc3goXCJzcGFuXCIsIHt9KV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1kYXJrIGQtaW5saW5lLWJsb2NrIGQtbGctbm9uZSBtbC1hdXRvXCIsIHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImRhdGEtdGFyZ2V0XCI6IFwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiwgXCJhcmlhLWNvbnRyb2xzXCI6IFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBcImFyaWEtbGFiZWxcIjogXCJUb2dnbGUgbmF2aWdhdGlvblwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1hbGlnbi1qdXN0aWZ5XCIgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIsIGlkOiBcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2IG5hdmJhci1uYXYgbWwtYXV0b1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiSG9tZVwiIH0pKSB9KSksIHNob3dBZG1pbkJvYXJkICYmIChfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9hZG1pblwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJBZG1pblwiIH0pKSB9KSkpLCBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9hYm91dFwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJBYm91dFwiIH0pKSB9KSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvcmVzb3VyY2VzXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIlJlc291cmNlc1wiIH0pKSB9KV0gfSkpIH0pKSwgY3VycmVudFVzZXIgPyAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvcHJvZmlsZVwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogY3VycmVudFVzZXIudXNlcm5hbWUgfSkpIH0pKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIvbG9naW5cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLCBvbkNsaWNrOiB0aGlzLmxvZ091dCB9LCB7IGNoaWxkcmVuOiBcIkxvZ091dFwiIH0pKSB9KSldIH0pKSkgOiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvbG9naW5cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiTG9naW5cIiB9KSkgfSkpLCBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9yZWdpc3RlclwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJTaWduIFVwXCIgfSkpIH0pKV0gfSkpKV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImxpbmVcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhTd2l0Y2gsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBbXCIvXCIsIFwiL2hvbWVcIl0sIGNvbXBvbmVudDogSG9tZSB9KSwgX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvbG9naW5cIiwgY29tcG9uZW50OiBMb2dpbiB9KSwgX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvcmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlciB9KSwgX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvcHJvZmlsZVwiLCBjb21wb25lbnQ6IFByb2ZpbGUgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvZ2hvc3RidXN0ZXJzLWJ5LWNvdW50eVwiLCBjb21wb25lbnQ6IEdob3N0YnVzdGVycyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9jaGFsbGVuZ2UtbGlzdC1ieS1wcmVjaW5jdFwiLCBjb21wb25lbnQ6IENoYWxsZW5nZUxpc3QgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbXktdm90aW5nLWhpc3RvcnlcIiwgY29tcG9uZW50OiBNeVZvdGluZ0hpc3RvcnkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvYXVkaXQtbXktYWRkcmVzc1wiLCBjb21wb25lbnQ6IEF1ZGl0TXlBZGRyZXNzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2Fib3V0XCIsIGNvbXBvbmVudDogQWJvdXQgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvcmVzb3VyY2VzXCIsIGNvbXBvbmVudDogUmVzb3VyY2VzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ld3NcIiwgY29tcG9uZW50OiBOZXdzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2NvbnRhY3RcIiwgY29tcG9uZW50OiBDb250YWN0IH0pXSB9KSB9KSldIH0pKV0gfSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBTaWRlQmFyO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiQWJvdXQgdGhpcyB3ZWJzaXRlXCIgfSkgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuZXhwb3J0IGNvbnN0IEF1ZGl0TXlBZGRyZXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZywgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiTG9hZGluZyBDb3VudGllcyAuLi5cIik7XHJcbiAgICBjb25zdCBbc3RyZWV0TnVtYmVyLCBzZXRTdHJlZXROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RyZWV0TmFtZSwgc2V0U3RyZWV0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWFkeWZvclNlYXJjaCwgc2V0UmVhZHlGb3JTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlTWVzc2FnZSwgc2V0UmVzcG9uc2VNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyZWRBZGRyZXNzLCBzZXRSZWdpc3RlcmVkQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlcmVkVm90ZXJzLCBzZXRSZWdpc3RlcmVkVm90ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHZvdGVyQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1N0cmVldCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5zdHJlZXRfYWRkcmVzcyxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWRkbGUgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWlkZGxlX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdZZWFyIG9mIEJpcnRoJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy55ZWFyX29mX2JpcnRoLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01haWxpbmcgQWRkcmVzcyBMaW5lIDEnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1haWxpbmdfYWRkcmVzc19saW5lX29uZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWlsaW5nIEFkZHJlc3MgTGluZSAyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5tYWlsaW5nX2FkZHJlc3NfbGluZV90d28sXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWFpbGluZyBBZGRyZXNzIExpbmUgMycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWFpbGluZ19hZGRyZXNzX2xpbmVfdGhyZWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUVZGIEFkZHJlc3MgTGluZSAxIC0gMTAgQ2hhcnMnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmFkZHJlc3NfbGluZV8xX3F2Zl8xMCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgIF0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2RhdGEuZWxlY3Rpb25pbnRlZ3JpdHlmb3JjZS5jb20vYXBpL2NvdW50aWVzJylcclxuICAgICAgICAgICAgLy9mZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS9jb3VudGllcy0yMDIyMDUnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoY291bnRpZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0Q291bnRpZXMoY291bnRpZXMpO1xyXG4gICAgICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGNvdW50eVNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKGNvdW50eVNlbGVjdGVkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgcGFnZSBmcm9tIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlwiKTtcclxuICAgICAgICBsZXQgYWRkcmVzc0xpbmUxID0gKChzdHJlZXROdW1iZXIgPT09IG51bGwgPyBcIlwiIDogc3RyZWV0TnVtYmVyLnRyaW0oKSkgKyAoc3RyZWV0TmFtZSA9PT0gbnVsbCA/IFwiXCIgOiBzdHJlZXROYW1lLnRyaW0oKSkpLnJlcGxhY2UoJyAnLCAnJyk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0ZpcnN0OEFuZFppcCA9IChhZGRyZXNzTGluZTEuc2xpY2UoMCwgOCkgKyAoemlwID09PSBudWxsID8gXCJcIiA6IHppcC50cmltKCkpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIC8vY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS9hdWRpdC15b3VyLWFkZHJlc3MtMjAyMjA1LyR7Y291bnR5TmFtZX0vJHthZGRyZXNzRmlyc3Q4QW5kWmlwfWApO1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vZGF0YS5lbGVjdGlvbmludGVncml0eWZvcmNlLmNvbS9hcGkvYXVkaXQteW91ci1hZGRyZXNzLyR7Y291bnR5TmFtZX0vJHthZGRyZXNzRmlyc3Q4QW5kWmlwfWApO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHNldENvdW50KHJlc3AuZGF0YS5jb3VudCk7XHJcbiAgICAgICAgICAgIHNldFJlZ2lzdGVyZWRBZGRyZXNzKHJlc3AuZGF0YS5yZWdpc3RlcmVkQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIHNldFJlZ2lzdGVyZWRWb3RlcnMocmVzcC5kYXRhLnJlZ2lzdGVyZWRWb3RlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoUm93LCB7IGNoaWxkcmVuOiBbX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHlcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBjb3VudHlOYW1lLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBjb3VudHkuY291bnR5X25hbWUgfSwgeyBjaGlsZHJlbjogY291bnR5LmNvdW50eV9uYW1lIH0pLCBjb3VudHkuY291bnR5X25hbWUpKSldIH0pKV0gfSldIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJTdHJlZXQgTnVtYmVyXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiBzdHJlZXROdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHNldFN0cmVldE51bWJlcihlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBTdHJlZXQgTnVtYmVyXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiU3RyZWV0IE5hbWVcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgdmFsdWU6IHN0cmVldE5hbWUsIHJlcXVpcmVkOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHNldFN0cmVldE5hbWUoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RyZWV0IE5hbWVcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJaaXBcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgdmFsdWU6IHppcCwgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNSwgb25DaGFuZ2U6IChlKSA9PiBzZXRaaXAoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWmlwXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiwgZGlzYWJsZWQ6ICFyZWFkeWZvclNlYXJjaCB9LCB7IGNoaWxkcmVuOiBcIkF1ZGl0IEFkZHJlc3NcIiB9KSkgfSldIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnJykgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiwgIWlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICdTdWNjZXNzJykgPyBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhGb3JtLlRleHQsIHsgY2hpbGRyZW46IFtjb3VudCwgXCIgcmVnaXN0cmF0aW9ucyBmb3VuZC5cIl0gfSksIF9qc3goRGF0YVRhYmxlLCB7IGNvbHVtbnM6IHZvdGVyQ29sdW1ucywgZGF0YTogcmVnaXN0ZXJlZFZvdGVycyB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ0Vycm9yJykgPyBcIkVycm9yIGZldGNoaW5nIHJlY29yZHMuIFBsZWFzZSByZXRyeS5cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXSB9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXVkaXRNeUFkZHJlc3M7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tICdyZWFjdC1jc3YnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLWhlYWRlclwiO1xyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlclJlYWR5LCBzZXRVc2VyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZywgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiTG9hZGluZyBDb3VudGllcyAuLi5cIik7XHJcbiAgICBjb25zdCBbaXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcsIHNldElzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtqdXJpc2RpY3Rpb25zLCBzZXRKdXJpc2RpY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtqdXJpc2RpY3Rpb25OYW1lLCBzZXRKdXJpc2RpY3Rpb25OYW1lXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgSnVyaXNkaWN0aW9uIC0tLSBcIik7XHJcbiAgICBjb25zdCBbaXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZywgc2V0SXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJlY2luY3RzLCBzZXRQcmVjaW5jdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ByZWNpbmN0TmFtZSwgc2V0UHJlY2luY3ROYW1lXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgUHJlY2luY3QgLS0tIFwiKTtcclxuICAgIGNvbnN0IFtyZWFkeWZvclNlYXJjaCwgc2V0UmVhZHlGb3JTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlTWVzc2FnZSwgc2V0UmVzcG9uc2VNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZWFibGVWb3RlcnMsIHNldENoYWxsZW5nZWFibGVWb3RlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hpZGVEb3dubG9hZEJ1dHRvbiwgc2V0SGlkZURvd25sb2FkQnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Vycm9yIENvZGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gZ2V0RXJyb3JzKHJvdyksXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgU3RyZWV0IEFkZHJlc3MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZnVsbF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1llYXIgb2YgQmlydGgnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnllYXJfb2ZfYmlydGgsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVm90ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy52b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUeXBlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy50eXBlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0p1cmlzZGljdGlvbiBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5qdXJpc2RpY3Rpb25fbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdQcmVjaW5jdCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cucHJlY2luY3QsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzE1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01pZGRsZSBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5taWRkbGVfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0xhc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubGFzdF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICBdLCBbXSk7XHJcbiAgICBmdW5jdGlvbiBnZXRFcnJvcnMocm93KSB7XHJcbiAgICAgICAgdmFyIGVycm9ycyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHJvdy50eXBlID09PSAnQnVzaW5lc3MnIHx8IHJvdy50eXBlID09PSAnSG90ZWwnIHx8IHJvdy50eXBlID09PSAnQ2VtZXRhcnknIHx8IHJvdy50eXBlID09PSAnRW1wdHkgTG90Jykge1xyXG4gICAgICAgICAgICBlcnJvcnMgPSBcIkFERFJFU1NfSUxMRUdBTCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChyb3cudHlwZSA9PT0gJ0FwYXJ0bWVudCcgfHwgcm93LnR5cGUgPT09ICdUcmFpbGVyIFBhcmsnIHx8IHJvdy50eXBlID09PSAnUlYgUGFyay1TZWFzb25hbCcpICYmIChyb3cuZXh0ZW5zaW9uID09PSBudWxsIHx8IHJvdy5leHRlbnNpb24gPT09ICcnKSkge1xyXG4gICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgKyBcIkFERFJFU1NfRVhURU5TSU9OIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocm93LnllYXJfb2ZfYmlydGggPCAxOTEyKSB7XHJcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyArIFwiQUdFX09WRVIgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3cueWVhcl9vZl9iaXJ0aCA+IDIwMDQpIHtcclxuICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzICsgXCJBR0VfVU5ERVIgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgocm93LmZpcnN0X25hbWUgPT09IHJvdy5sYXN0X25hbWUpIHx8IChyb3cubGFzdF9uYW1lID09PSByb3cubWlkZGxlX25hbWUpKSB7XHJcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyArIFwiTkFNRV9EVVBMSUNBVEUgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgICAgc2V0VXNlclJlYWR5KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyh0cnVlKTtcclxuICAgICAgICB2b2lkIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnRpZXMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9kYXRhLmVsZWN0aW9uaW50ZWdyaXR5Zm9yY2UuY29tL2FwaS9jb3VudGllcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudGllcyhhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBzZXRQcmVjaW5jdE5hbWUoXCIgLS0tIFNlbGVjdCBQcmVjaW5jdCAtLS0gXCIpO1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICAgICAgZmV0Y2hKdXJpc2RpY3Rpb25zKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmZXRjaEp1cmlzZGljdGlvbnMoY291bnR5TmFtZSkge1xyXG4gICAgICAgIHNldElzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL2RhdGEuZWxlY3Rpb25pbnRlZ3JpdHlmb3JjZS5jb20vYXBpL2p1cmlzZGljdGlvbnMvJHtjb3VudHlOYW1lfWApXHJcbiAgICAgICAgICAgIC8vZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGkvanVyaXNkaWN0aW9ucy8ke2NvdW50eU5hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGp1cmlzZGljdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgc2V0SnVyaXNkaWN0aW9ucyhqdXJpc2RpY3Rpb25zKTtcclxuICAgICAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihqdXJpc2RpY3Rpb25TZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChqdXJpc2RpY3Rpb25TZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRKdXJpc2RpY3Rpb25OYW1lKGp1cmlzZGljdGlvblNlbGVjdGVkKTtcclxuICAgICAgICAgICAgZmV0Y2hQcmVjaW5jdHMoanVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoUHJlY2luY3RzKGp1cmlzZGljdGlvbk5hbWUpIHtcclxuICAgICAgICBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL2RhdGEuZWxlY3Rpb25pbnRlZ3JpdHlmb3JjZS5jb20vYXBpL3ByZWNpbmN0cy8ke2NvdW50eU5hbWV9LyR7anVyaXNkaWN0aW9uTmFtZX1gKVxyXG4gICAgICAgICAgICAvL2ZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpL3ByZWNpbmN0cy8ke2NvdW50eU5hbWV9LyR7anVyaXNkaWN0aW9uTmFtZX1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocHJlY2luY3RzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByZWNpbmN0cyhwcmVjaW5jdHMpO1xyXG4gICAgICAgICAgICBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQcmVjaW5jdFNlbGVjdGlvbihwcmVjaW5jdFNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKHByZWNpbmN0U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UHJlY2luY3ROYW1lKHByZWNpbmN0U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICgpID0+ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSkgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIC8vY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS9jaGFsbGVuZ2UtbGlzdC8ke2NvdW50eU5hbWV9LyR7anVyaXNkaWN0aW9uTmFtZX0vJHtwcmVjaW5jdE5hbWV9YCwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9kYXRhLmVsZWN0aW9uaW50ZWdyaXR5Zm9yY2UuY29tL2FwaS9jaGFsbGVuZ2UtbGlzdC8ke2NvdW50eU5hbWV9LyR7anVyaXNkaWN0aW9uTmFtZX0vJHtwcmVjaW5jdE5hbWV9YCwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgc2V0Q2hhbGxlbmdlYWJsZVZvdGVycyhyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzcC5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZURvd25sb2FkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZURvd25sb2FkQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29uZGl0aW9uYWxSb3dTdHlsZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aGVuOiBjb2x1bW5zID0+ICgoY29sdW1ucy5leHRlbnNpb24gPT09IG51bGwgfHwgY29sdW1ucy5leHRlbnNpb24gPT09ICcnKSAmJiAoY29sdW1ucy50eXBlID09PSAnUlYgUGFyay1TZWFzb25hbCcgfHwgY29sdW1ucy50eXBlID09PSAnQXBhcnRtZW50JyB8fCBjb2x1bW5zLnR5cGUgPT09ICdUcmFpbGVyIFBhcmsnKSksXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdoZW46IGNvbHVtbnMgPT4gKGNvbHVtbnMudHlwZSA9PT0gJ0J1c2luZXNzJyB8fCBjb2x1bW5zLnR5cGUgPT09ICdIb3RlbCcgfHwgY29sdW1ucy50eXBlID09PSAnQ2VtZXRhcnknIHx8IGNvbHVtbnMudHlwZSA9PT0gJ0VtcHR5IExvdCcpLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aGVuOiBjb2x1bW5zID0+IChjb2x1bW5zLnllYXJfb2ZfYmlydGggPCAxOTEyIHx8IGNvbHVtbnMueWVhcl9vZl9iaXJ0aCA+IDIwMDQpLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBZb3UgY2FuIGFsc28gcGFzcyBhIGNhbGxiYWNrIHRvIHN0eWxlIGZvciBhZGRpdGlvbmFsIGN1c3RvbWl6YXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICB3aGVuOiByb3cgPT4gcm93LmVtYWlsLmluY2x1ZGVzKCcuY29tJyksXHJcbiAgICAgICAgICBzdHlsZTogcm93ID0+ICh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcm93LnBob25lLnN0YXJ0c1dpdGgoJzknKSB8fCByb3cucGhvbmUuc3RhcnRzV2l0aCgnMScpID8gJ3BpbmsnIDogJ2luZXJpdCcsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9LCovXHJcbiAgICBdO1xyXG4gICAgaWYgKHJlZGlyZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9qc3goUmVkaXJlY3QsIHsgdG86IHJlZGlyZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoUm93LCB7IGNoaWxkcmVuOiBbX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBjb3VudHkuY291bnR5X25hbWUgfSwgeyBjaGlsZHJlbjogY291bnR5LmNvdW50eV9uYW1lIH0pLCBjb3VudHkuY291bnR5X25hbWUpKSldIH0pKV0gfSldIH0pLCBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJKdXJpc2RpY3Rpb25cIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcsIHZhbHVlOiBqdXJpc2RpY3Rpb25OYW1lLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlSnVyaXNkaWN0aW9uU2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgSnVyaXNkaWN0aW9uIC0tLSBcIiB9KSksIGp1cmlzZGljdGlvbnMubWFwKChqdXJpc2RpY3Rpb24pID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZToganVyaXNkaWN0aW9uLmp1cmlzZGljdGlvbl9uYW1lIH0sIHsgY2hpbGRyZW46IGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSB9KSwganVyaXNkaWN0aW9uLmp1cmlzZGljdGlvbl9uYW1lKSkpXSB9KSldIH0pXSB9KSwgX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJQcmVjaW5jdFwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogcHJlY2luY3ROYW1lLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlUHJlY2luY3RTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBQcmVjaW5jdCAtLS0gXCIgfSkpLCBwcmVjaW5jdHMubWFwKChwcmVjaW5jdCkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBwcmVjaW5jdC5wcmVjaW5jdCB9LCB7IGNoaWxkcmVuOiBwcmVjaW5jdC5wcmVjaW5jdCB9KSwgcHJlY2luY3QucHJlY2luY3QpKSldIH0pKV0gfSldIH0pXSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQ29sLCB7IGNoaWxkcmVuOiBcIlxcdTAwQTBcIiB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgc2l6ZTogJ2xnJywgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0blwiLCBkaXNhYmxlZDogIXJlYWR5Zm9yU2VhcmNoIH0sIHsgY2hpbGRyZW46IFwiR2V0IFByZWNpbmN0IENoYWxsZW5nZSBMaXN0XCIgfSkpIH0pXSB9KSkgfSkpLCBfanN4KFwiYnJcIiwge30pLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICcnKSA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsICFpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ1N1Y2Nlc3MnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogX2pzeChDU1ZMaW5rLCBPYmplY3QuYXNzaWduKHsgaGlkZGVuOiBoaWRlRG93bmxvYWRCdXR0b24sIGRhdGE6IGNoYWxsZW5nZWFibGVWb3RlcnMsIGZpbGVuYW1lOiBjb3VudHlOYW1lICsgJy0nICsganVyaXNkaWN0aW9uTmFtZSArICctJyArIHByZWNpbmN0TmFtZSArICctY2hhbGxlbmdlLWxpc3QuY3N2JyB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidXR0b25cIiwgY29sb3I6IFwicmVkXCIsIHNpemU6ICdsZycgfSwgeyBjaGlsZHJlbjogXCJEb3dubG9hZCByZXN1bHRzXCIgfSkpIH0pKSB9KSwgX2pzeChEYXRhVGFibGUsIHsgZXhwYW5kYWJsZVJvd3M6IHRydWUsIGV4cGFuZGFibGVSb3dzQ29tcG9uZW50OiBFeHBhbmRlZENvbXBvbmVudCgpLCBleHBhbmRPblJvd0NsaWNrZWQ6IHRydWUsIGNvbHVtbnM6IGNvbHVtbnMsIGRhdGE6IGNoYWxsZW5nZWFibGVWb3RlcnMsIGhpZ2hsaWdodE9uSG92ZXI6IHRydWUsIGNvbmRpdGlvbmFsUm93U3R5bGVzOiBjb25kaXRpb25hbFJvd1N0eWxlcywgcGFnaW5hdGlvbjogdHJ1ZSwgcGFnaW5hdGlvblBlclBhZ2U6IDEwLCBwYWdpbmF0aW9uVG90YWxSb3dzOiBjaGFsbGVuZ2VhYmxlVm90ZXJzLmxlbmd0aCwgcmVzcG9uc2l2ZTogdHJ1ZSwgc3RyaXBlZDogdHJ1ZSB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZXNwb25zZU1lc3NhZ2UgPT09ICdFcnJvcicpID8gXCJFcnJvciBmZXRjaGluZyByZWNvcmRzLiBQbGVhc2UgcmV0cnkuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJdIH0pXSB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFsbGVuZ2VMaXN0O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWN0ID0gKCkgPT4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIkNvbnRhY3QgVXNcIiB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcIi4uLiBpZiB5b3UnZCBsaWtlIHRvIGhlbHAgc2V0IHRoZSB0cnV0aCBmcmVlXCIgfSldIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGgtaGVhZGVyXCI7XHJcbmV4cG9ydCBjb25zdCBHaG9zdGJ1c3RlcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3QsIHNldFJlZGlyZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSZWFkeSwgc2V0VXNlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcgQ291bnRpZXMgLi4uXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hpZGVEb3dubG9hZEJ1dHRvbiwgc2V0SGlkZURvd25sb2FkQnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgU3RyZWV0IEFkZHJlc3MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUmVnaXN0cmF0aW9uIENvdW50JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5yZWdpc3RyYXRpb25fY291bnQsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQmVkcy9BcHQvTG90cyBRdHknLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmJlZHNfYXB0c19sb3RzX3F0eSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnR5cGUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ByZWNpbmN0JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5wcmVjaW5jdCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTUwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZGF0YS5lbGVjdGlvbmludGVncml0eWZvcmNlLmNvbS9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS9jb3VudGllcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudGllcyhhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAoY291bnR5U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEV4cGFuZGVkQ29tcG9uZW50ID0gKCkgPT4gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcInByZVwiLCB7IGNoaWxkcmVuOiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KSB9KSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnRpbmcgdGhlIHBhZ2UgZnJvbSByZWxvYWRpbmdcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgLy9jb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpL2ZsYWdnZWQtcmVnaXN0cmF0aW9ucy8ke2NvdW50eU5hbWV9YCk7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9kYXRhLmVsZWN0aW9uaW50ZWdyaXR5Zm9yY2UuY29tL2FwaS9naG9zdGJ1c3Rlci1sb2NhdGlvbnMvJHtjb3VudHlOYW1lfWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHNldExvY2F0aW9ucyhyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzcC5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZURvd25sb2FkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZURvd25sb2FkQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlZGlyZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9qc3goUmVkaXJlY3QsIHsgdG86IHJlZGlyZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBjb3VudHkuY291bnR5X25hbWUgfSwgeyBjaGlsZHJlbjogY291bnR5LmNvdW50eV9uYW1lIH0pLCBjb3VudHkuY291bnR5X25hbWUpKSldIH0pKV0gfSldIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIsIGRpc2FibGVkOiAhcmVhZHlmb3JTZWFyY2ggfSwgeyBjaGlsZHJlbjogXCJHZXQgR2hvc3QgTG9jYXRpb25zXCIgfSkpIH0pXSB9KSkgfSkpLCBfanN4KFwiYnJcIiwge30pLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICcnKSA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsICFpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ1N1Y2Nlc3MnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogX2pzeChDU1ZMaW5rLCBPYmplY3QuYXNzaWduKHsgaGlkZGVuOiBoaWRlRG93bmxvYWRCdXR0b24sIGRhdGE6IGxvY2F0aW9ucywgZmlsZW5hbWU6IGNvdW50eU5hbWUgKyAnLWZsYWdnZWQtYWRkcmVzc2VzLmNzdicgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uXCIsIGNvbG9yOiBcInJlZFwiLCBzaXplOiAnbGcnIH0sIHsgY2hpbGRyZW46IFwiRG93bmxvYWQgcmVzdWx0c1wiIH0pKSB9KSkgfSksIF9qc3goRGF0YVRhYmxlLCB7IGV4cGFuZGFibGVSb3dzOiB0cnVlLCBleHBhbmRhYmxlUm93c0NvbXBvbmVudDogRXhwYW5kZWRDb21wb25lbnQoKSwgY29sdW1uczogY29sdW1ucywgZGF0YTogbG9jYXRpb25zLCBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLCBwYWdpbmF0aW9uOiB0cnVlLCBwYWdpbmF0aW9uUGVyUGFnZTogMTAsIHBhZ2luYXRpb25Ub3RhbFJvd3M6IGxvY2F0aW9ucy5sZW5ndGggfSldIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVzcG9uc2VNZXNzYWdlID09PSAnRXJyb3InKSA/IFwiRXJyb3IgZmV0Y2hpbmcgcmVjb3Jkcy4gUGxlYXNlIHJldHJ5LlwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXSB9KV0gfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgR2hvc3RidXN0ZXJzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBWb3RlckluZm9ybWF0aW9uIGZyb20gJy4vVm90ZXJJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWhlYWRlcic7XHJcbmNvbnN0IE15Vm90aW5nSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlclJlYWR5LCBzZXRVc2VyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3F2ZkRhdGVzLCBzZXRRdmZEYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcXZmRGF0ZSwgc2V0UXZmRGF0ZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IFFWRiBEYXRlIC0tLSBcIik7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIik7XHJcbiAgICBjb25zdCBbdm90ZXJJZCwgc2V0Vm90ZXJJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3Rlckxhc3ROYW1lLCBzZXRWb3Rlckxhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZvdGVyRmlyc3ROYW1lLCBzZXRWb3RlckZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3RlclppcCwgc2V0Vm90ZXJaaXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdm90ZXJDb3VudHksIHNldFZvdGVyQ291bnR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3ZvdGVySW5mbywgc2V0Vm90ZXJJbmZvXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVm90ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy52b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDb3VudHkgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY291bnR5X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdKdXJpc2RpY3Rpb24gTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuanVyaXNkaWN0aW9uX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFbGVjdGlvbiBEYXRlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5lbGVjdGlvbl9kYXRlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSXMgQWJzZW50ZWUgVm90ZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuaXNfYWJzZW50ZWVfdm90ZXIsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgIF0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICBzZXRVc2VyUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHVubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2RhdGEuZWxlY3Rpb25pbnRlZ3JpdHlmb3JjZS5jb20vYXBpL3F2ZmRhdGVzJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHF2ZkRhdGVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFF2ZkRhdGVzKHF2ZkRhdGVzKTtcclxuICAgICAgICAgICAgc2V0UXZmRGF0ZShxdmZEYXRlc1swXS50YWJsZV9uYW1lKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgW3ZvdGVyRGF0YSwgc2V0Vm90ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy9jb25zdCB1cmxCYXNlID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGkvdm90aW5naGlzdG9yeS8ke3F2ZkRhdGV9YDtcclxuICAgICAgICBjb25zdCB1cmxCYXNlID0gYGh0dHBzOi8vZGF0YS5lbGVjdGlvbmludGVncml0eWZvcmNlLmNvbS9hcGkvdm90aW5naGlzdG9yeS8ke3F2ZkRhdGV9YDtcclxuICAgICAgICBsZXQgdXJsU3VmZml4ID0gJyc7XHJcbiAgICAgICAgLy9jb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpL3ZvdGluZ2hpc3RvcnkvJHtxdmZEYXRlfS8ke3ZvdGVySWR9LyR7dm90ZXJMYXN0TmFtZX0vJHt2b3RlckZpcnN0TmFtZX1gKTtcclxuICAgICAgICBpZiAodm90ZXJJZCkge1xyXG4gICAgICAgICAgICB1cmxTdWZmaXggPSBgL3ZvdGVyaWQ6JHt2b3RlcklkfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodm90ZXJDb3VudHkpIHtcclxuICAgICAgICAgICAgICAgIHVybFN1ZmZpeCA9IGAvdm90ZXJDb3VudHk6JHt2b3RlckNvdW50eX0vdm90ZXJaaXA6JHt2b3RlclppcH0vdm90ZXJMYXN0TmFtZToke3ZvdGVyTGFzdE5hbWV9L3ZvdGVyRmlyc3ROYW1lOiR7dm90ZXJGaXJzdE5hbWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KHVybEJhc2UgKyB1cmxTdWZmaXgsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIC8vY29uc3Qgdm90ZXJJbmZvOiBWb3RlclR5cGUgPSB7Y291bnR5X25hbWU6IFwiTElWSU5HU1RPTlwiLCBsYXN0X25hbWU6IFwiTU5CQ1wiLCBmaXJzdF9uYW1lOiBcIkFCSEpBQkRcIiwgbWlkZGxlX25hbWU6IFwiS1wiLCB2b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXI6IFwiOTQyMDY0MlwifTtcclxuICAgICAgICAgICAgc2V0Vm90ZXJJbmZvKHZvdGVySW5mbyk7XHJcbiAgICAgICAgICAgIHNldFZvdGVySWQodm90ZXJJZCk7XHJcbiAgICAgICAgICAgIHNldFZvdGVyRGF0YShyZXNwLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3IhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3goRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm1Hcm91cCwgT2JqZWN0LmFzc2lnbih7IHJvbGU6IFwiZm9ybVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhSb3csIHsgY2hpbGRyZW46IFtfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJRVkYgRGF0ZVwiLCBfanN4KEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzTG9hZGluZywgdmFsdWU6IHF2ZkRhdGUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0UXZmRGF0ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IHF2ZkRhdGVzLm1hcCgocXZmKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHF2Zi50YWJsZV9uYW1lIH0sIHsgY2hpbGRyZW46IHF2Zi50YWJsZV9uYW1lIH0pLCBxdmYudGFibGVfbmFtZSkpKSB9KSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJWb3RlciBJZFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJJZCwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlcklkKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFZvdGVyIElkXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgXCItLS0gT1IgLS0tXCIsIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlppcFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJaaXAsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJaaXAoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWmlwXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiTGFzdCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB2b3Rlckxhc3ROYW1lLCBvbkNoYW5nZTogKGUpID0+IHNldFZvdGVyTGFzdE5hbWUoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTGFzdCBOYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiRmlyc3QgTmFtZVwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJGaXJzdE5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRmlyc3QgbmFtZVwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eVwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJDb3VudHksIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJDb3VudHkoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ291bnR5XCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiB9LCB7IGNoaWxkcmVuOiBcIkdldCBNeSBWb3RpbmcgSGlzdG9yeVwiIH0pKSB9KV0gfSkpIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFNwaW5uZXIsIE9iamVjdC5hc3NpZ24oeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwic3Itb25seVwiIH0sIHsgY2hpbGRyZW46IFwiTG9hZGluZy4uLlwiIH0pKSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdm90ZXJEYXRhLmxlbmd0aCA+IDAgPyBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFZvdGVySW5mb3JtYXRpb24sIHsgc3RyaW5nUHJvcDogdm90ZXJJZCB9KSwgX2pzeChEYXRhVGFibGUsIHsgY29sdW1uczogY29sdW1ucywgZGF0YTogdm90ZXJEYXRhIH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2pzeChcInNwYW5cIiwge30pIH0pIH0pXSB9KSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IERyb3Bkb3duID0gKHsgbG9hZGluZywgbGFiZWwsIHZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW2xhYmVsLCBfanN4KFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogbG9hZGluZywgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2UgfSwgeyBjaGlsZHJlbjogb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBvcHRpb24udmFsdWUgfSwgeyBjaGlsZHJlbjogb3B0aW9uLmxhYmVsIH0pLCBvcHRpb24udmFsdWUpKSkgfSkpXSB9KSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE15Vm90aW5nSGlzdG9yeTtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5leHBvcnQgY29uc3QgTmV3cyA9ICgpID0+IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJJbiBvdGhlciBuZXdzIC4uLlwiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiaHR0cHM6Ly9ydW1ibGUuY29tL3YxaWo3dGwtZWxlY3Rpb24tZGVjZXJ0aWZpY2F0aW9uLWluY29taW5nLXRoYW5rcy10by1lbGVjdGlvbi1pbnRlZ3JpdHktZm9yY2UuaHRtbFwiIH0pXSB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuLy9pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLypjb25zdCBHcmlkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDZlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDZlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI1cHgsIGF1dG8pO1xyXG5gOyAqL1xyXG5leHBvcnQgY29uc3QgUmVzb3VyY2VzID0gKCkgPT4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJXZWIgUmVzb3VyY2VzXCIgfSkgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZXM7XHJcbiIsImltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgVm90ZXJJbmZvcm1hdGlvbiA9ICh7IHN0cmluZ1Byb3AgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Bhc3NlZEluU3RyaW5nUHJvcFZhbHVlLCBzZXRQYXNzZWRJblN0cmluZ1Byb3BWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXNzZWRJblN0cmluZ1Byb3BWYWx1ZShzdHJpbmdQcm9wKTtcclxuICAgIH0sIFtzdHJpbmdQcm9wXSk7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtcIlZvdGVyIElkZW50aWZpY2F0aW9uIE51bWJlcjogXCIsIHN0cmluZ1Byb3BdIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVm90ZXJJbmZvcm1hdGlvbjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHBTaWRlQmFyIGZyb20gJy4vQXBwU2lkZUJhcic7XHJcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSBcIi4vc2VydmljZVdvcmtlclwiO1xyXG5SZWFjdERPTS5yZW5kZXIoX2pzeChCcm93c2VyUm91dGVyLCB7IGNoaWxkcmVuOiBfanN4KEFwcFNpZGVCYXIsIHt9KSB9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=