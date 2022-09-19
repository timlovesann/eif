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

const API_URL = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + "/api/auth/";
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


const API_URL = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/test/';
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
        setIsCountyDropdownLoading(true);
        fetch({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/counties')
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
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/audit-your-address/${countyName}/${addressFirst8AndZip}`);
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
            name: 'Challenge Code(s)',
            selector: (row) => row.challenge_codes,
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
                const url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/counties';
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
        fetch({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/jurisdictions/${countyName}`)
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
        fetch({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/precincts/${countyName}/${jurisdictionName}`)
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
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() });
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
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, Object.assign({ hidden: hideDownloadButton, data: challengeableVoters, filename: countyName + '-' + jurisdictionName + '-' + precinctName + '-challenge-list.csv' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ className: "button", color: "red", size: 'lg' }, { children: "Download results" })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), expandOnRowClicked: true, columns: columns, data: challengeableVoters, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: challengeableVoters.length, responsive: true, striped: true })] })
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
                const url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/counties';
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
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().get({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/ghostbuster-locations/${countyName}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() });
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
        fetch({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/qvfdates')
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
        const urlBase = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/votinghistory/${qvfDate}`;
        let urlSuffix = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGdCO0FBQ2Y7QUFDWjtBQUM0QjtBQUNYO0FBQ1c7QUFDakQsNkNBQWUsQ0FBQyxzREFBSSxDQUFDLDJEQUFhLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFVLElBQUksR0FBRztBQUN0RSxzREFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZWJhci5jc3M/ZjFiOSIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbW1vbi9FdmVudEJ1cy5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlcy9hdXRoLWhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL0FwcFNpZGVCYXIudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9BdWRpdE15QWRkcmVzcy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvR2hvc3RidXN0ZXJzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9NeVZvdGluZ0hpc3RvcnkudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL05ld3MudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL1Jlc291cmNlcy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvVm90ZXJJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4gICAgREVNTyBTVFlMRVxcclxcbiovXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjAsIDE0NywgMjA2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnRuIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XFxyXFxuICAgIG1hcmdpbjogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pLFxcclxcbnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBTSURFQkFSIFNUWUxFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMDI5Mjk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGg0LFxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuQ1RBcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0MTQzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMjEsIDIyMSk7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM4MzAyMDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXFxyXFxuYVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjQ0LCAyNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGM0ZDRlO1xcclxcbn1cXHJcXG5cXHJcXG5hW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB1bCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRlNGU1MDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnVsLkNUQXMgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmEuZG93bmxvYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzczODZENTtcXHJcXG59XFxyXFxuXFxyXFxuYS5hcnRpY2xlLFxcclxcbmEuYXJ0aWNsZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIENPTlRFTlQgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIE1FRElBUVVFUklFU1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRvcDogYXV0bztcXHJcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIGgzLFxcclxcbiAgICAjc2lkZWJhciAuQ1RBcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCB1bCBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQXBwU2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFHRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixVQUFVO1FBQ1Ysa0NBQWtDO1FBQ2xDLDhCQUE4QjtRQUM5QiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBOztRQUVJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcclxcbiAgICBERU1PIFNUWUxFXFxyXFxuKi9cXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXFxcIjtcXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgMTQ3LCAyMDYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1idG4ge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxufVxcclxcblxcclxcbmksXFxyXFxuc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIFNJREVCQVIgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzNDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMwMjkyOTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgaDQsXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5DVEFzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0ZTQxNDM7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4YjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGNvbG9yOnJnYigyMzUsIDIyMSwgMjIxKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzgzMDIwMTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcXHJcXG5hW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNDQsIDI0NCk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0YzRkNGU7XFxyXFxufVxcclxcblxcclxcbmFbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbnVsIHVsIGEge1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0ZTUwO1xcclxcbn1cXHJcXG5cXHJcXG51bC5DVEFzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyBhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYS5kb3dubG9hZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjNzM4NkQ1O1xcclxcbn1cXHJcXG5cXHJcXG5hLmFydGljbGUsXFxyXFxuYS5hcnRpY2xlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgQ09OVEVOVCBTVFlMRVxcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgTUVESUFRVUVSSUVTXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgI3NpZGViYXIge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgdG9wOiBhdXRvO1xcclxcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXFxyXFxuICAgICNzaWRlYmFyIC5DVEFzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIHVsIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyQ29sbGFwc2Ugc3BhbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXHJcXG4gICAgICBcXFwiVWJ1bnR1XFxcIiwgXFxcIkNhbnRhcmVsbFxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxyXFxuICAgICAgc2Fucy1zZXJpZjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGNvZGUge1xcclxcbiAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIixcXHJcXG4gICAgICBtb25vc3BhY2U7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVDs7Z0JBRVk7SUFDWixtQ0FBbUM7SUFDbkMsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0U7ZUFDVztFQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXHJcXG4gICAgICBcXFwiVWJ1bnR1XFxcIiwgXFxcIkNhbnRhcmVsbFxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxyXFxuICAgICAgc2Fucy1zZXJpZjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGNvZGUge1xcclxcbiAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIixcXHJcXG4gICAgICBtb25vc3BhY2U7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHBTaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwU2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJjb25zdCBldmVudEJ1cyA9IHtcclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlKSA9PiBjYWxsYmFjayhlLmRldGFpbCkpO1xyXG4gICAgfSxcclxuICAgIGRpc3BhdGNoKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBkYXRhIH0pKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRCdXM7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgVXNlclNlcnZpY2UuZ2V0UHVibGljQ29udGVudCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiaGVhZGVyXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwianVtYm90cm9uXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCB7IGNoaWxkcmVuOiBcIlJlbGVhc2UgdjA5MDUyMDIyXCIgfSksIF9qc3goXCJoNFwiLCB7IGNoaWxkcmVuOiBcIkZlYXR1cmVzIFN1cHBvcnRlZFwiIH0pLCBfanN4cyhcInVsXCIsIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCJHaG9zdGJ1c3RpbmcgTG9jYXRpb24gUmVwb3J0OiBEb3dubG9hZCByZXBvcnQgb2Ygc3VzcGVjdCBsb2NhdGlvbnMgY2FudmFzc2VkIGFjcm9zcyBNaWNoaWdhblwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCJNeSBWb3RpbmcgSGlzdG9yeTogRXhhbWluZSB5b3VyIHZvdGluZyBoaXN0b3J5IGZvciBhbm9tYWxpZXNcIiB9KV0gfSldIH0pKSB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9pbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tCdXR0b24gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvYnV0dG9uXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTG9naW4gPSB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVVzZXJuYW1lID0gdGhpcy5vbkNoYW5nZVVzZXJuYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhc3N3b3JkID0gdGhpcy5vbkNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVBhc3N3b3JkKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVMb2dpbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbGlkYXRlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdG4uY29udGV4dC5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBBdXRoU2VydmljZS5sb2dpbih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2ZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc01lc3NhZ2UgPSAoZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLW1kLTEyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNhcmQgY2FyZC1jb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHRoaXMuaGFuZGxlTG9naW4sIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJ1c2VybmFtZVwiIH0sIHsgY2hpbGRyZW46IFwiVXNlcm5hbWVcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJ1c2VybmFtZVwiLCB2YWx1ZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VVc2VybmFtZSwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZF0gfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJwYXNzd29yZFwiIH0sIHsgY2hpbGRyZW46IFwiUGFzc3dvcmRcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWRdIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIsIGRpc2FibGVkOiB0aGlzLnN0YXRlLmxvYWRpbmcgfSwgeyBjaGlsZHJlbjogW3RoaXMuc3RhdGUubG9hZGluZyAmJiAoX2pzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiTG9naW5cIiB9KV0gfSkpIH0pKSwgdGhpcy5zdGF0ZS5tZXNzYWdlICYmIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IHRoaXMuc3RhdGUubWVzc2FnZSB9KSkgfSkpKSwgX2pzeChDaGVja0J1dHRvbiwgeyBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LCByZWY6IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCdG4gPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpIH0pKSB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHVzZXJSZWFkeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBcIlwiIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdDogXCIvaG9tZVwiIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VXNlcjogY3VycmVudFVzZXIsIHVzZXJSZWFkeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogdGhpcy5zdGF0ZS5yZWRpcmVjdCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiAodGhpcy5zdGF0ZS51c2VyUmVhZHkpID9cclxuICAgICAgICAgICAgICAgIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiaGVhZGVyXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwianVtYm90cm9uXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJoM1wiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBjdXJyZW50VXNlci51c2VybmFtZSB9KSwgXCIgUHJvZmlsZVwiXSB9KSB9KSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIlRva2VuOlwiIH0pLCBcIiBcIiwgY3VycmVudFVzZXIuYWNjZXNzVG9rZW4uc3Vic3RyaW5nKDAsIDIwKSwgXCIgLi4uXCIsIFwiIFwiLCBjdXJyZW50VXNlci5hY2Nlc3NUb2tlbi5zdWJzdHIoY3VycmVudFVzZXIuYWNjZXNzVG9rZW4ubGVuZ3RoIC0gMjApXSB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiSWQ6XCIgfSksIFwiIFwiLCBjdXJyZW50VXNlci5pZF0gfSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIkVtYWlsOlwiIH0pLCBcIiBcIiwgY3VycmVudFVzZXIuZW1haWxdIH0pLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiQXV0aG9yaXRpZXM6XCIgfSksIF9qc3goXCJ1bFwiLCB7IGNoaWxkcmVuOiBjdXJyZW50VXNlci5yb2xlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyLnJvbGVzLm1hcCgocm9sZSwgaW5kZXgpID0+IF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiByb2xlIH0sIGluZGV4KSkgfSldIH0pIDogbnVsbCB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9pbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tCdXR0b24gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvYnV0dG9uXCI7XHJcbmltcG9ydCB7IGlzRW1haWwgfSBmcm9tIFwidmFsaWRhdG9yXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGVtYWlsID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCFpc0VtYWlsKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsLlwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHZ1c2VybmFtZSA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzIHx8IHZhbHVlLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gMyBhbmQgMjAgY2hhcmFjdGVycy5cIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCB2cGFzc3dvcmQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgNiB8fCB2YWx1ZS5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGUgcGFzc3dvcmQgbXVzdCBiZSBiZXR3ZWVuIDYgYW5kIDQwIGNoYXJhY3RlcnMuXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZWdpc3RlciA9IHRoaXMuaGFuZGxlUmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRW1haWwgPSB0aGlzLm9uQ2hhbmdlRW1haWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZUVtYWlsKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVBhc3N3b3JkKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSZWdpc3RlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzZnVsOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybS52YWxpZGF0ZUFsbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnRuLmNvbnRleHQuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgQXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy5zdGF0ZS51c2VybmFtZSwgdGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc01lc3NhZ2UgPSAoZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbWQtMTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2FyZCBjYXJkLWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogdGhpcy5oYW5kbGVSZWdpc3RlciwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFshdGhpcy5zdGF0ZS5zdWNjZXNzZnVsICYmIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJ1c2VybmFtZVwiIH0sIHsgY2hpbGRyZW46IFwiVXNlcm5hbWVcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJ1c2VybmFtZVwiLCB2YWx1ZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VVc2VybmFtZSwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZCwgdnVzZXJuYW1lXSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcImVtYWlsXCIgfSwgeyBjaGlsZHJlbjogXCJFbWFpbFwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcImVtYWlsXCIsIHZhbHVlOiB0aGlzLnN0YXRlLmVtYWlsLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUVtYWlsLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkLCBlbWFpbF0gfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJwYXNzd29yZFwiIH0sIHsgY2hpbGRyZW46IFwiUGFzc3dvcmRcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWQsIHZwYXNzd29yZF0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBVcFwiIH0pKSB9KSldIH0pKSwgdGhpcy5zdGF0ZS5tZXNzYWdlICYmIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogdGhpcy5zdGF0ZS5zdWNjZXNzZnVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogdGhpcy5zdGF0ZS5tZXNzYWdlIH0pKSB9KSkpLCBfanN4KENoZWNrQnV0dG9uLCB7IHN0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0J0biA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSkgfSkpIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cclxuLy8gcmVnaXN0ZXIoKSBpcyBub3QgY2FsbGVkIGJ5IGRlZmF1bHQuXHJcbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xyXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2VycylcclxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxyXG4vLyBleGlzdGluZyB0YWJzIG9wZW4gb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIGNsb3NlZCwgc2luY2UgcHJldmlvdXNseSBjYWNoZWRcclxuLy8gcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxyXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBiZW5lZml0cyBvZiB0aGlzIG1vZGVsIGFuZCBpbnN0cnVjdGlvbnMgb24gaG93IHRvXHJcbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXHJcbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbih3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XHJcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxyXG4gICAgLy8gMTI3LjAuMC4wLzggYXJlIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kLykpO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoY29uZmlnKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cclxuICAgICAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xyXG4gICAgICAgICAgICAvLyBPdXIgc2VydmljZSB3b3JrZXIgd29uJ3Qgd29yayBpZiBQVUJMSUNfVVJMIGlzIG9uIGEgZGlmZmVyZW50IG9yaWdpblxyXG4gICAgICAgICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXHJcbiAgICAgICAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN3VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2VydmljZS13b3JrZXIuanNgO1xyXG4gICAgICAgICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cclxuICAgICAgICAgICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcclxuICAgICAgICAgICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG4gICAgICAgIC5yZWdpc3Rlcihzd1VybClcclxuICAgICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgdXBkYXRlZCBwcmVjYWNoZWQgY29udGVudCBoYXMgYmVlbiBmZXRjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHNlcnZpY2Ugd29ya2VyIHdpbGwgc3RpbGwgc2VydmUgdGhlIG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgdW50aWwgYWxsIGNsaWVudCB0YWJzIGFyZSBjbG9zZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBhdmFpbGFibGUgYW5kIHdpbGwgYmUgdXNlZCB3aGVuIGFsbCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJzIGZvciB0aGlzIHBhZ2UgYXJlIGNsb3NlZC4gU2VlIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXHJcbiAgICBmZXRjaChzd1VybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgJ1NlcnZpY2UtV29ya2VyJzogJ3NjcmlwdCcgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cclxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcclxuICAgICAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSkpIHtcclxuICAgICAgICAgICAgLy8gTm8gc2VydmljZSB3b3JrZXIgZm91bmQuIFByb2JhYmx5IGEgZGlmZmVyZW50IGFwcC4gUmVsb2FkIHRoZSBwYWdlLlxyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cclxuICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLicpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XHJcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5XHJcbiAgICAgICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoSGVhZGVyKCkge1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICBpZiAodXNlciAmJiB1c2VyLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdXNlci5hY2Nlc3NUb2tlbiB9OyAvLyBmb3IgU3ByaW5nIEJvb3QgYmFjay1lbmRcclxuICAgICAgICByZXR1cm4geyAneC1hY2Nlc3MtdG9rZW4nOiB1c2VyLmFjY2Vzc1Rva2VuIH07IC8vIGZvciBOb2RlLmpzIEV4cHJlc3MgYmFjay1lbmRcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBcIi9hcGkvYXV0aC9cIjtcclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KEFQSV9VUkwgKyBcInNpZ25pblwiLCB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KEFQSV9VUkwgKyBcInNpZ251cFwiLCB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tICcuL2F1dGgtaGVhZGVyJztcclxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL3Rlc3QvJztcclxuY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgZ2V0UHVibGljQ29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAnYWxsJyk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ3VzZXInLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxuICAgIGdldE1vZGVyYXRvckJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICdtb2QnLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxuICAgIGdldEFkbWluQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ2FkbWluJywgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTZXJ2aWNlKCk7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHsgTGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IE15Vm90aW5nSGlzdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvTXlWb3RpbmdIaXN0b3J5JztcclxuaW1wb3J0IEdob3N0YnVzdGVycyBmcm9tICcuL2NvbXBvbmVudHMvR2hvc3RidXN0ZXJzJztcclxuaW1wb3J0IEF1ZGl0TXlBZGRyZXNzIGZyb20gJy4vY29tcG9uZW50cy9BdWRpdE15QWRkcmVzcyc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc291cmNlcyc7XHJcbmltcG9ydCBFdmVudEJ1cyBmcm9tIFwiLi9jb21tb24vRXZlbnRCdXNcIjtcclxuaW1wb3J0ICcuL0FwcFNpZGViYXIuY3NzJztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgTmV3cyBmcm9tICcuL2NvbXBvbmVudHMvTmV3cyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0JztcclxuaW1wb3J0IENoYWxsZW5nZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL0NoYWxsZW5nZUxpc3QnO1xyXG5jbGFzcyBBcHBTaWRlQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubG9nT3V0ID0gdGhpcy5sb2dPdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93TW9kZXJhdG9yQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93QWRtaW5Cb2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB1c2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGVyYXRvckJvYXJkOiB1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9EQVRBX0NVUkFUT1JcIiksXHJcbiAgICAgICAgICAgICAgICBzaG93QWRtaW5Cb2FyZDogdXNlci5yb2xlcy5pbmNsdWRlcyhcIlJPTEVfQURNSU5cIiksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudEJ1cy5vbihcImxvZ291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nT3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBFdmVudEJ1cy5yZW1vdmUoXCJsb2dvdXRcIik7XHJcbiAgICB9XHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgQXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dNb2RlcmF0b3JCb2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dBZG1pbkJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudFVzZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRVc2VyLCBzaG93TW9kZXJhdG9yQm9hcmQsIHNob3dBZG1pbkJvYXJkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3cmFwcGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwibmF2XCIsIE9iamVjdC5hc3NpZ24oeyBpZDogXCJzaWRlYmFyXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwic2lkZWJhci1oZWFkZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IFwiRWxlY3Rpb24gSW50ZWdyaXR5IEZvcmNlXCIgfSksIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJFSUZcIiB9KV0gfSkpLCBfanN4cyhcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibGlzdC11bnN0eWxlZCBjb21wb25lbnRzXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIjaG9tZVN1Ym1lbnVcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsIGNsYXNzTmFtZTogXCJkcm9wZG93bi10b2dnbGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLWhvbWVcIiB9KSwgXCJcXHUwMEEwIEF1ZGl0XCJdIH0pKSwgX2pzeChcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGFwc2UgbGlzdC11bnN0eWxlZFwiLCBpZDogXCJob21lU3VibWVudVwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL215LXZvdGluZy1oaXN0b3J5XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFwiVm90aW5nIEhpc3RvcnlcIiB9KSkgfSkpIH0pKV0gfSksIF9qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIjcGFnZVN1Ym1lbnVcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsIGNsYXNzTmFtZTogXCJkcm9wZG93bi10b2dnbGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLWdsYXNzZXNcIiB9KSwgXCJcXHUwMEEwIFJlcG9ydHNcIl0gfSkpLCBfanN4cyhcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGFwc2UgbGlzdC11bnN0eWxlZFwiLCBpZDogXCJwYWdlU3VibWVudVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9naG9zdGJ1c3RlcnMtYnktY291bnR5XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFwiR2hvc3RidXN0aW5nIExvY2F0aW9uc1wiIH0pKSB9KSksIF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2NoYWxsZW5nZS1saXN0LWJ5LXByZWNpbmN0XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFwiQ2hhbGxlbmdlIExpc3RcIiB9KSkgfSkpXSB9KSldIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogX2pzeHMoTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9uZXdzXCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtZ2xvYmVcIiB9KSwgXCJcXHUwMEEwIE5ld3NcIl0gfSkpIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogX2pzeHMoTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9jb250YWN0XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtcGFwZXItcGxhbmVcIiB9KSwgXCJcXHUwMEEwIENvbnRhY3RcIl0gfSkpIH0pXSB9KSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiBcImNvbnRlbnRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm5hdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzaWRlYmFyQ29sbGFwc2VcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1idG5cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLWFsaWduLWxlZnRcIiB9KSwgX2pzeChcInNwYW5cIiwge30pXSB9KSksIF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidG4gYnRuLWRhcmsgZC1pbmxpbmUtYmxvY2sgZC1sZy1ub25lIG1sLWF1dG9cIiwgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIFwiZGF0YS10YXJnZXRcIjogXCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiLCBcImFyaWEtY29udHJvbHNcIjogXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIsIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLWFsaWduLWp1c3RpZnlcIiB9KSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiwgaWQ6IFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYgbmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL1wiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJIb21lXCIgfSkpIH0pKSwgc2hvd0FkbWluQm9hcmQgJiYgKF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2FkbWluXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkFkbWluXCIgfSkpIH0pKSksIF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2Fib3V0XCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkFib3V0XCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9yZXNvdXJjZXNcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiUmVzb3VyY2VzXCIgfSkpIH0pXSB9KSkgfSkpLCBjdXJyZW50VXNlciA/IChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdmJhci1uYXYgbWwtYXV0b1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9wcm9maWxlXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBjdXJyZW50VXNlci51c2VybmFtZSB9KSkgfSkpLCBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIi9sb2dpblwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIG9uQ2xpY2s6IHRoaXMubG9nT3V0IH0sIHsgY2hpbGRyZW46IFwiTG9nT3V0XCIgfSkpIH0pKV0gfSkpKSA6IChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdmJhci1uYXYgbWwtYXV0b1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9sb2dpblwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJMb2dpblwiIH0pKSB9KSksIF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL3JlZ2lzdGVyXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIlNpZ24gVXBcIiB9KSkgfSkpXSB9KSkpXSB9KSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibGluZVwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFN3aXRjaCwgeyBjaGlsZHJlbjogW19qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFtcIi9cIiwgXCIvaG9tZVwiXSwgY29tcG9uZW50OiBIb21lIH0pLCBfanN4KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBcIi9sb2dpblwiLCBjb21wb25lbnQ6IExvZ2luIH0pLCBfanN4KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBcIi9yZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyIH0pLCBfanN4KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBcIi9wcm9maWxlXCIsIGNvbXBvbmVudDogUHJvZmlsZSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9naG9zdGJ1c3RlcnMtYnktY291bnR5XCIsIGNvbXBvbmVudDogR2hvc3RidXN0ZXJzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2NoYWxsZW5nZS1saXN0LWJ5LXByZWNpbmN0XCIsIGNvbXBvbmVudDogQ2hhbGxlbmdlTGlzdCB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9teS12b3RpbmctaGlzdG9yeVwiLCBjb21wb25lbnQ6IE15Vm90aW5nSGlzdG9yeSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9hdWRpdC1teS1hZGRyZXNzXCIsIGNvbXBvbmVudDogQXVkaXRNeUFkZHJlc3MgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dCB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9yZXNvdXJjZXNcIiwgY29tcG9uZW50OiBSZXNvdXJjZXMgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbmV3c1wiLCBjb21wb25lbnQ6IE5ld3MgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvY29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3QgfSldIH0pIH0pKV0gfSkpXSB9KSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcFNpZGVCYXI7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuZXhwb3J0IGNvbnN0IEFib3V0ID0gKCkgPT4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJBYm91dCB0aGlzIHdlYnNpdGVcIiB9KSB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5leHBvcnQgY29uc3QgQXVkaXRNeUFkZHJlc3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjb3VudGllcywgc2V0Q291bnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50eU5hbWUsIHNldENvdW50eU5hbWVdID0gdXNlU3RhdGUoXCJMb2FkaW5nIENvdW50aWVzIC4uLlwiKTtcclxuICAgIGNvbnN0IFtzdHJlZXROdW1iZXIsIHNldFN0cmVldE51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdHJlZXROYW1lLCBzZXRTdHJlZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ppcCwgc2V0WmlwXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJlZEFkZHJlc3MsIHNldFJlZ2lzdGVyZWRBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyZWRWb3RlcnMsIHNldFJlZ2lzdGVyZWRWb3RlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgdm90ZXJDb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU3RyZWV0IEFkZHJlc3MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnN0cmVldF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0xhc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubGFzdF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01pZGRsZSBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5taWRkbGVfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1llYXIgb2YgQmlydGgnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnllYXJfb2ZfYmlydGgsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWFpbGluZyBBZGRyZXNzIExpbmUgMScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWFpbGluZ19hZGRyZXNzX2xpbmVfb25lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01haWxpbmcgQWRkcmVzcyBMaW5lIDInLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1haWxpbmdfYWRkcmVzc19saW5lX3R3byxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWlsaW5nIEFkZHJlc3MgTGluZSAzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5tYWlsaW5nX2FkZHJlc3NfbGluZV90aHJlZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdRVkYgQWRkcmVzcyBMaW5lIDEgLSAxMCBDaGFycycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuYWRkcmVzc19saW5lXzFfcXZmXzEwLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9jb3VudGllcycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChjb3VudGllcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb3VudGllcyhjb3VudGllcyk7XHJcbiAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAoY291bnR5U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIGxldCBhZGRyZXNzTGluZTEgPSAoKHN0cmVldE51bWJlciA9PT0gbnVsbCA/IFwiXCIgOiBzdHJlZXROdW1iZXIudHJpbSgpKSArIChzdHJlZXROYW1lID09PSBudWxsID8gXCJcIiA6IHN0cmVldE5hbWUudHJpbSgpKSkucmVwbGFjZSgnICcsICcnKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzRmlyc3Q4QW5kWmlwID0gKGFkZHJlc3NMaW5lMS5zbGljZSgwLCA4KSArICh6aXAgPT09IG51bGwgPyBcIlwiIDogemlwLnRyaW0oKSkpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9hdWRpdC15b3VyLWFkZHJlc3MvJHtjb3VudHlOYW1lfS8ke2FkZHJlc3NGaXJzdDhBbmRaaXB9YCk7XHJcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgc2V0Q291bnQocmVzcC5kYXRhLmNvdW50KTtcclxuICAgICAgICAgICAgc2V0UmVnaXN0ZXJlZEFkZHJlc3MocmVzcC5kYXRhLnJlZ2lzdGVyZWRBZGRyZXNzKTtcclxuICAgICAgICAgICAgc2V0UmVnaXN0ZXJlZFZvdGVycyhyZXNwLmRhdGEucmVnaXN0ZXJlZFZvdGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJFcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm1Hcm91cCwgT2JqZWN0LmFzc2lnbih7IHJvbGU6IFwiZm9ybVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhSb3csIHsgY2hpbGRyZW46IFtfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eVwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0NvdW50eURyb3Bkb3duTG9hZGluZywgdmFsdWU6IGNvdW50eU5hbWUsIHJlcXVpcmVkOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIiB9KSksIGNvdW50aWVzLm1hcCgoY291bnR5KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGNvdW50eS5jb3VudHlfbmFtZSB9LCB7IGNoaWxkcmVuOiBjb3VudHkuY291bnR5X25hbWUgfSksIGNvdW50eS5jb3VudHlfbmFtZSkpKV0gfSkpXSB9KV0gfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlN0cmVldCBOdW1iZXJcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgdmFsdWU6IHN0cmVldE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0U3RyZWV0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0cmVldCBOdW1iZXJcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJTdHJlZXQgTmFtZVwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogc3RyZWV0TmFtZSwgcmVxdWlyZWQ6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0U3RyZWV0TmFtZShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBTdHJlZXQgTmFtZVwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlppcFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogemlwLCByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiA1LCBvbkNoYW5nZTogKGUpID0+IHNldFppcChlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBaaXBcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pXSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQ29sLCB7IGNoaWxkcmVuOiBcIlxcdTAwQTBcIiB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgc2l6ZTogJ2xnJywgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0blwiLCBkaXNhYmxlZDogIXJlYWR5Zm9yU2VhcmNoIH0sIHsgY2hpbGRyZW46IFwiQXVkaXQgQWRkcmVzc1wiIH0pKSB9KV0gfSkpIH0pKSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW2lzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICcnKSA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLCAhaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ1N1Y2Nlc3MnKSA/IF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKEZvcm0uVGV4dCwgeyBjaGlsZHJlbjogW2NvdW50LCBcIiByZWdpc3RyYXRpb25zIGZvdW5kLlwiXSB9KSwgX2pzeChEYXRhVGFibGUsIHsgY29sdW1uczogdm90ZXJDb2x1bW5zLCBkYXRhOiByZWdpc3RlcmVkVm90ZXJzIH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVzcG9uc2VNZXNzYWdlID09PSAnRXJyb3InKSA/IFwiRXJyb3IgZmV0Y2hpbmcgcmVjb3Jkcy4gUGxlYXNlIHJldHJ5LlwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJdIH0pXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdWRpdE15QWRkcmVzcztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGgtaGVhZGVyXCI7XHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjb3VudGllcywgc2V0Q291bnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50eU5hbWUsIHNldENvdW50eU5hbWVdID0gdXNlU3RhdGUoXCJMb2FkaW5nIENvdW50aWVzIC4uLlwiKTtcclxuICAgIGNvbnN0IFtpc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZywgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbnMsIHNldEp1cmlzZGljdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbk5hbWUsIHNldEp1cmlzZGljdGlvbk5hbWVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBKdXJpc2RpY3Rpb24gLS0tIFwiKTtcclxuICAgIGNvbnN0IFtpc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nLCBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcmVjaW5jdHMsIHNldFByZWNpbmN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJlY2luY3ROYW1lLCBzZXRQcmVjaW5jdE5hbWVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBQcmVjaW5jdCAtLS0gXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlYWJsZVZvdGVycywgc2V0Q2hhbGxlbmdlYWJsZVZvdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGlkZURvd25sb2FkQnV0dG9uLCBzZXRIaWRlRG93bmxvYWRCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hhbGxlbmdlIENvZGUocyknLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmNoYWxsZW5nZV9jb2RlcyxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRnVsbCBTdHJlZXQgQWRkcmVzcycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZnVsbF9zdHJlZXRfYWRkcmVzcyxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRnVsbCBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5mdWxsX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnWWVhciBvZiBCaXJ0aCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cueWVhcl9vZl9iaXJ0aCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdWb3RlciBJZGVudGlmaWNhdGlvbiBOdW1iZXInLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnZvdGVyX2lkZW50aWZpY2F0aW9uX251bWJlcixcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnR5cGUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ByZWNpbmN0JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5wcmVjaW5jdCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWlkZGxlIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1pZGRsZV9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTGFzdCBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5sYXN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwcHgnXHJcbiAgICAgICAgfSxcclxuICAgIF0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICBzZXRVc2VyUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHZvaWQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3VudGllcygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL2NvdW50aWVzJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbCB9KTtcclxuICAgICAgICAgICAgICAgIHNldENvdW50aWVzKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihjb3VudHlTZWxlY3RlZCkge1xyXG4gICAgICAgIHNldFByZWNpbmN0TmFtZShcIiAtLS0gU2VsZWN0IFByZWNpbmN0IC0tLSBcIik7XHJcbiAgICAgICAgaWYgKGNvdW50eVNlbGVjdGVkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBmZXRjaEp1cmlzZGljdGlvbnMoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoSnVyaXNkaWN0aW9ucyhjb3VudHlOYW1lKSB7XHJcbiAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvanVyaXNkaWN0aW9ucy8ke2NvdW50eU5hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGp1cmlzZGljdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgc2V0SnVyaXNkaWN0aW9ucyhqdXJpc2RpY3Rpb25zKTtcclxuICAgICAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihqdXJpc2RpY3Rpb25TZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChqdXJpc2RpY3Rpb25TZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRKdXJpc2RpY3Rpb25OYW1lKGp1cmlzZGljdGlvblNlbGVjdGVkKTtcclxuICAgICAgICAgICAgZmV0Y2hQcmVjaW5jdHMoanVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoUHJlY2luY3RzKGp1cmlzZGljdGlvbk5hbWUpIHtcclxuICAgICAgICBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL3ByZWNpbmN0cy8ke2NvdW50eU5hbWV9LyR7anVyaXNkaWN0aW9uTmFtZX1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocHJlY2luY3RzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByZWNpbmN0cyhwcmVjaW5jdHMpO1xyXG4gICAgICAgICAgICBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVQcmVjaW5jdFNlbGVjdGlvbihwcmVjaW5jdFNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKHByZWNpbmN0U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UHJlY2luY3ROYW1lKHByZWNpbmN0U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICgpID0+ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSkgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY2hhbGxlbmdlLWxpc3QvJHtjb3VudHlOYW1lfS8ke2p1cmlzZGljdGlvbk5hbWV9LyR7cHJlY2luY3ROYW1lfWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHNldENoYWxsZW5nZWFibGVWb3RlcnMocmVzcC5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIkVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eVwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0NvdW50eURyb3Bkb3duTG9hZGluZywgdmFsdWU6IGNvdW50eU5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSwgX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiSnVyaXNkaWN0aW9uXCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCB2YWx1ZToganVyaXNkaWN0aW9uTmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIgfSkpLCBqdXJpc2RpY3Rpb25zLm1hcCgoanVyaXNkaWN0aW9uKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSB9LCB7IGNoaWxkcmVuOiBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUgfSksIGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSkpKV0gfSkpXSB9KV0gfSksIF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzUHJlY2luY3REcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiUHJlY2luY3RcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZywgdmFsdWU6IHByZWNpbmN0TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZVByZWNpbmN0U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgUHJlY2luY3QgLS0tIFwiIH0pKSwgcHJlY2luY3RzLm1hcCgocHJlY2luY3QpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogcHJlY2luY3QucHJlY2luY3QgfSwgeyBjaGlsZHJlbjogcHJlY2luY3QucHJlY2luY3QgfSksIHByZWNpbmN0LnByZWNpbmN0KSkpXSB9KSldIH0pXSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiwgZGlzYWJsZWQ6ICFyZWFkeWZvclNlYXJjaCB9LCB7IGNoaWxkcmVuOiBcIkdldCBQcmVjaW5jdCBDaGFsbGVuZ2UgTGlzdFwiIH0pKSB9KV0gfSkpIH0pKSwgX2pzeChcImJyXCIsIHt9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW2lzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnJykgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLCAhaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICdTdWNjZXNzJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2hpbGRyZW46IF9qc3goQ1NWTGluaywgT2JqZWN0LmFzc2lnbih7IGhpZGRlbjogaGlkZURvd25sb2FkQnV0dG9uLCBkYXRhOiBjaGFsbGVuZ2VhYmxlVm90ZXJzLCBmaWxlbmFtZTogY291bnR5TmFtZSArICctJyArIGp1cmlzZGljdGlvbk5hbWUgKyAnLScgKyBwcmVjaW5jdE5hbWUgKyAnLWNoYWxsZW5nZS1saXN0LmNzdicgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uXCIsIGNvbG9yOiBcInJlZFwiLCBzaXplOiAnbGcnIH0sIHsgY2hpbGRyZW46IFwiRG93bmxvYWQgcmVzdWx0c1wiIH0pKSB9KSkgfSksIF9qc3goRGF0YVRhYmxlLCB7IGV4cGFuZGFibGVSb3dzOiB0cnVlLCBleHBhbmRhYmxlUm93c0NvbXBvbmVudDogRXhwYW5kZWRDb21wb25lbnQoKSwgZXhwYW5kT25Sb3dDbGlja2VkOiB0cnVlLCBjb2x1bW5zOiBjb2x1bW5zLCBkYXRhOiBjaGFsbGVuZ2VhYmxlVm90ZXJzLCBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLCBwYWdpbmF0aW9uOiB0cnVlLCBwYWdpbmF0aW9uUGVyUGFnZTogMTAsIHBhZ2luYXRpb25Ub3RhbFJvd3M6IGNoYWxsZW5nZWFibGVWb3RlcnMubGVuZ3RoLCByZXNwb25zaXZlOiB0cnVlLCBzdHJpcGVkOiB0cnVlIH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ0Vycm9yJykgPyBcIkVycm9yIGZldGNoaW5nIHJlY29yZHMuIFBsZWFzZSByZXRyeS5cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIl0gfSldIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYWxsZW5nZUxpc3Q7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuZXhwb3J0IGNvbnN0IENvbnRhY3QgPSAoKSA9PiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiQ29udGFjdCBVc1wiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiLi4uIGlmIHlvdSdkIGxpa2UgdG8gaGVscCBzZXQgdGhlIHRydXRoIGZyZWVcIiB9KV0gfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDU1ZMaW5rIH0gZnJvbSAncmVhY3QtY3N2JztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC1oZWFkZXJcIjtcclxuZXhwb3J0IGNvbnN0IEdob3N0YnVzdGVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlclJlYWR5LCBzZXRVc2VyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZywgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiTG9hZGluZyBDb3VudGllcyAuLi5cIik7XHJcbiAgICBjb25zdCBbcmVhZHlmb3JTZWFyY2gsIHNldFJlYWR5Rm9yU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZU1lc3NhZ2UsIHNldFJlc3BvbnNlTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGlkZURvd25sb2FkQnV0dG9uLCBzZXRIaWRlRG93bmxvYWRCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRnVsbCBTdHJlZXQgQWRkcmVzcycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZnVsbF9zdHJlZXRfYWRkcmVzcyxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdSZWdpc3RyYXRpb24gQ291bnQnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnJlZ2lzdHJhdGlvbl9jb3VudCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCZWRzL0FwdC9Mb3RzIFF0eScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuYmVkc19hcHRzX2xvdHNfcXR5LFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm5hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVHlwZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudHlwZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdKdXJpc2RpY3Rpb24gTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuanVyaXNkaWN0aW9uX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUHJlY2luY3QnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnByZWNpbmN0LFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCdcclxuICAgICAgICB9XHJcbiAgICBdLCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgICAgc2V0VXNlclJlYWR5KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyh0cnVlKTtcclxuICAgICAgICB2b2lkIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnRpZXMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9jb3VudGllcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudGllcyhhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAoY291bnR5U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEV4cGFuZGVkQ29tcG9uZW50ID0gKCkgPT4gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcInByZVwiLCB7IGNoaWxkcmVuOiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KSB9KSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnRpbmcgdGhlIHBhZ2UgZnJvbSByZWxvYWRpbmdcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9naG9zdGJ1c3Rlci1sb2NhdGlvbnMvJHtjb3VudHlOYW1lfWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHNldExvY2F0aW9ucyhyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzcC5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZURvd25sb2FkQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZURvd25sb2FkQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlZGlyZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9qc3goUmVkaXJlY3QsIHsgdG86IHJlZGlyZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBjb3VudHkuY291bnR5X25hbWUgfSwgeyBjaGlsZHJlbjogY291bnR5LmNvdW50eV9uYW1lIH0pLCBjb3VudHkuY291bnR5X25hbWUpKSldIH0pKV0gfSldIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIsIGRpc2FibGVkOiAhcmVhZHlmb3JTZWFyY2ggfSwgeyBjaGlsZHJlbjogXCJHZXQgR2hvc3QgTG9jYXRpb25zXCIgfSkpIH0pXSB9KSkgfSkpLCBfanN4KFwiYnJcIiwge30pLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICcnKSA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsICFpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ1N1Y2Nlc3MnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogX2pzeChDU1ZMaW5rLCBPYmplY3QuYXNzaWduKHsgaGlkZGVuOiBoaWRlRG93bmxvYWRCdXR0b24sIGRhdGE6IGxvY2F0aW9ucywgZmlsZW5hbWU6IGNvdW50eU5hbWUgKyAnLWZsYWdnZWQtYWRkcmVzc2VzLmNzdicgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uXCIsIGNvbG9yOiBcInJlZFwiLCBzaXplOiAnbGcnIH0sIHsgY2hpbGRyZW46IFwiRG93bmxvYWQgcmVzdWx0c1wiIH0pKSB9KSkgfSksIF9qc3goRGF0YVRhYmxlLCB7IGV4cGFuZGFibGVSb3dzOiB0cnVlLCBleHBhbmRhYmxlUm93c0NvbXBvbmVudDogRXhwYW5kZWRDb21wb25lbnQoKSwgY29sdW1uczogY29sdW1ucywgZGF0YTogbG9jYXRpb25zLCBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLCBwYWdpbmF0aW9uOiB0cnVlLCBwYWdpbmF0aW9uUGVyUGFnZTogMTAsIHBhZ2luYXRpb25Ub3RhbFJvd3M6IGxvY2F0aW9ucy5sZW5ndGggfSldIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVzcG9uc2VNZXNzYWdlID09PSAnRXJyb3InKSA/IFwiRXJyb3IgZmV0Y2hpbmcgcmVjb3Jkcy4gUGxlYXNlIHJldHJ5LlwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXSB9KV0gfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgR2hvc3RidXN0ZXJzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBWb3RlckluZm9ybWF0aW9uIGZyb20gJy4vVm90ZXJJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWhlYWRlcic7XHJcbmNvbnN0IE15Vm90aW5nSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlclJlYWR5LCBzZXRVc2VyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3F2ZkRhdGVzLCBzZXRRdmZEYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcXZmRGF0ZSwgc2V0UXZmRGF0ZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IFFWRiBEYXRlIC0tLSBcIik7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIik7XHJcbiAgICBjb25zdCBbdm90ZXJJZCwgc2V0Vm90ZXJJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3Rlckxhc3ROYW1lLCBzZXRWb3Rlckxhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZvdGVyRmlyc3ROYW1lLCBzZXRWb3RlckZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3RlclppcCwgc2V0Vm90ZXJaaXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdm90ZXJDb3VudHksIHNldFZvdGVyQ291bnR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3ZvdGVySW5mbywgc2V0Vm90ZXJJbmZvXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVm90ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy52b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDb3VudHkgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY291bnR5X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdKdXJpc2RpY3Rpb24gTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuanVyaXNkaWN0aW9uX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFbGVjdGlvbiBEYXRlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5lbGVjdGlvbl9kYXRlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSXMgQWJzZW50ZWUgVm90ZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuaXNfYWJzZW50ZWVfdm90ZXIsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgIF0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICBzZXRVc2VyUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHVubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL3F2ZmRhdGVzJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHF2ZkRhdGVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFF2ZkRhdGVzKHF2ZkRhdGVzKTtcclxuICAgICAgICAgICAgc2V0UXZmRGF0ZShxdmZEYXRlc1swXS50YWJsZV9uYW1lKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgW3ZvdGVyRGF0YSwgc2V0Vm90ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdXJsQmFzZSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL3ZvdGluZ2hpc3RvcnkvJHtxdmZEYXRlfWA7XHJcbiAgICAgICAgbGV0IHVybFN1ZmZpeCA9ICcnO1xyXG4gICAgICAgIGlmICh2b3RlcklkKSB7XHJcbiAgICAgICAgICAgIHVybFN1ZmZpeCA9IGAvdm90ZXJpZDoke3ZvdGVySWR9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh2b3RlckNvdW50eSkge1xyXG4gICAgICAgICAgICAgICAgdXJsU3VmZml4ID0gYC92b3RlckNvdW50eToke3ZvdGVyQ291bnR5fS92b3RlclppcDoke3ZvdGVyWmlwfS92b3Rlckxhc3ROYW1lOiR7dm90ZXJMYXN0TmFtZX0vdm90ZXJGaXJzdE5hbWU6JHt2b3RlckZpcnN0TmFtZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQodXJsQmFzZSArIHVybFN1ZmZpeCwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgLy9jb25zdCB2b3RlckluZm86IFZvdGVyVHlwZSA9IHtjb3VudHlfbmFtZTogXCJMSVZJTkdTVE9OXCIsIGxhc3RfbmFtZTogXCJNTkJDXCIsIGZpcnN0X25hbWU6IFwiQUJISkFCRFwiLCBtaWRkbGVfbmFtZTogXCJLXCIsIHZvdGVyX2lkZW50aWZpY2F0aW9uX251bWJlcjogXCI5NDIwNjQyXCJ9O1xyXG4gICAgICAgICAgICBzZXRWb3RlckluZm8odm90ZXJJbmZvKTtcclxuICAgICAgICAgICAgc2V0Vm90ZXJJZCh2b3RlcklkKTtcclxuICAgICAgICAgICAgc2V0Vm90ZXJEYXRhKHJlc3AuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJFcnJvciFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlZGlyZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9qc3goUmVkaXJlY3QsIHsgdG86IHJlZGlyZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlFWRiBEYXRlXCIsIF9qc3goRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNMb2FkaW5nLCB2YWx1ZTogcXZmRGF0ZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRRdmZEYXRlKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogcXZmRGF0ZXMubWFwKChxdmYpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogcXZmLnRhYmxlX25hbWUgfSwgeyBjaGlsZHJlbjogcXZmLnRhYmxlX25hbWUgfSksIHF2Zi50YWJsZV9uYW1lKSkpIH0pKV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlZvdGVyIElkXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB2b3RlcklkLCBvbkNoYW5nZTogKGUpID0+IHNldFZvdGVySWQoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgVm90ZXIgSWRcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBcIi0tLSBPUiAtLS1cIiwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWmlwXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB2b3RlclppcCwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlclppcChlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBaaXBcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJMYXN0IE5hbWVcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgdmFsdWU6IHZvdGVyTGFzdE5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJMYXN0TmFtZShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBMYXN0IE5hbWVcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJGaXJzdCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB2b3RlckZpcnN0TmFtZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlckZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBGaXJzdCBuYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB2b3RlckNvdW50eSwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlckNvdW50eShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBDb3VudHlcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pXSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQ29sLCB7IGNoaWxkcmVuOiBcIlxcdTAwQTBcIiB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgc2l6ZTogJ2xnJywgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0blwiIH0sIHsgY2hpbGRyZW46IFwiR2V0IE15IFZvdGluZyBIaXN0b3J5XCIgfSkpIH0pXSB9KSkgfSkpIH0pKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goU3Bpbm5lciwgT2JqZWN0LmFzc2lnbih7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIgfSwgeyBjaGlsZHJlbjogXCJMb2FkaW5nLi4uXCIgfSkpIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2b3RlckRhdGEubGVuZ3RoID4gMCA/IF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goVm90ZXJJbmZvcm1hdGlvbiwgeyBzdHJpbmdQcm9wOiB2b3RlcklkIH0pLCBfanN4KERhdGFUYWJsZSwgeyBjb2x1bW5zOiBjb2x1bW5zLCBkYXRhOiB2b3RlckRhdGEgfSldIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfanN4KFwic3BhblwiLCB7fSkgfSkgfSldIH0pKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgRHJvcGRvd24gPSAoeyBsb2FkaW5nLCBsYWJlbCwgdmFsdWUsIG9wdGlvbnMsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIHJldHVybiAoX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbbGFiZWwsIF9qc3goXCJzZWxlY3RcIiwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBsb2FkaW5nLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBvbkNoYW5nZSB9LCB7IGNoaWxkcmVuOiBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IG9wdGlvbi52YWx1ZSB9LCB7IGNoaWxkcmVuOiBvcHRpb24ubGFiZWwgfSksIG9wdGlvbi52YWx1ZSkpKSB9KSldIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTXlWb3RpbmdIaXN0b3J5O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBOZXdzID0gKCkgPT4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIkluIG90aGVyIG5ld3MgLi4uXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogXCJodHRwczovL3J1bWJsZS5jb20vdjFpajd0bC1lbGVjdGlvbi1kZWNlcnRpZmljYXRpb24taW5jb21pbmctdGhhbmtzLXRvLWVsZWN0aW9uLWludGVncml0eS1mb3JjZS5odG1sXCIgfSldIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG4vL2ltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vKmNvbnN0IEdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogNmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjVweCwgYXV0byk7XHJcbmA7ICovXHJcbmV4cG9ydCBjb25zdCBSZXNvdXJjZXMgPSAoKSA9PiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIldlYiBSZXNvdXJjZXNcIiB9KSB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlcztcclxuIiwiaW1wb3J0IHsganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBWb3RlckluZm9ybWF0aW9uID0gKHsgc3RyaW5nUHJvcCB9KSA9PiB7XHJcbiAgICBjb25zdCBbcGFzc2VkSW5TdHJpbmdQcm9wVmFsdWUsIHNldFBhc3NlZEluU3RyaW5nUHJvcFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhc3NlZEluU3RyaW5nUHJvcFZhbHVlKHN0cmluZ1Byb3ApO1xyXG4gICAgfSwgW3N0cmluZ1Byb3BdKTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW1wiVm90ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyOiBcIiwgc3RyaW5nUHJvcF0gfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWb3RlckluZm9ybWF0aW9uO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcFNpZGVCYXIgZnJvbSAnLi9BcHBTaWRlQmFyJztcclxuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tIFwiLi9zZXJ2aWNlV29ya2VyXCI7XHJcblJlYWN0RE9NLnJlbmRlcihfanN4KEJyb3dzZXJSb3V0ZXIsIHsgY2hpbGRyZW46IF9qc3goQXBwU2lkZUJhciwge30pIH0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==