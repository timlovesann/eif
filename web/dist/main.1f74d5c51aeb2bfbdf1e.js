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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/card.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/card.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info-card {\r\n    background-color: darkgoldenrod;\r\n    color: black;\r\n}\r\n.a {\r\n    color: blue;\r\n}", "",{"version":3,"sources":["webpack://./src/components/card.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,YAAY;AAChB;AACA;IACI,WAAW;AACf","sourcesContent":[".info-card {\r\n    background-color: darkgoldenrod;\r\n    color: black;\r\n}\r\n.a {\r\n    color: blue;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/card.css":
/*!*********************************!*\
  !*** ./src/components/card.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./card.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_auth_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth-header */ "./src/services/auth-header.js");
/* harmony import */ var _CountyInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CountyInformation */ "./src/components/CountyInformation.tsx");










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
    const [countySummaryInfo, setCountySummaryInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [countyMetadataInfo, setCountyMetadataInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
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
        setResponseMessage('');
        setCountySummaryInfo(null);
        setCountyMetadataInfo(null);
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
        let endpoints = [
            {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/county-summary/${countyName}`,
            {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/county-metadata/${countyName}`,
            {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`
        ];
        Promise.all(endpoints.map((endpoint) => axios__WEBPACK_IMPORTED_MODULE_2___default().get(endpoint, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() }))).then(([{ data: countySummaryInfo }, { data: countyMetadataInfo }, { data: challengeableVoters }]) => {
            console.log(countySummaryInfo);
            countySummaryInfo.county_name = countyName;
            //const countyInfo: CountySummary = {county_name: "LIVINGSTON", total_registered_voters: 18282, active_registered_voters: 18000};
            setCountySummaryInfo(countySummaryInfo);
            setCountyMetadataInfo(countyMetadataInfo[0]);
            console.log(countyMetadataInfo[0]);
            setChallengeableVoters(challengeableVoters);
            setResponseMessage("Success");
            setIsLoading(false);
            if (challengeableVoters.length === 0) {
                setHideDownloadButton(true);
            }
            else {
                setHideDownloadButton(false);
            }
        });
        /*Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: user}, {data: repos}, {data: followers}, {data: followings}] )=> {
          setFollowers(followers)
          setFollowing(followings)
        });*/
        /*axios.all([
          axios.get(process.env.REACT_API_BASE_URL + `/api/county-summary/${countyName}`),
          axios.get(process.env.REACT_API_BASE_URL + `/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: authHeader() }),
    
        ])
        .then(axios.spread((countySummaryInfoResp, challengeableVotersResp) => {
          setFilterData
          countySummaryInfo: countySummaryInfoResp.data,
          challengeableVoters: challengeableVotersResp.data
        }));*/
        /*const resp = await axios.get(process.env.REACT_API_BASE_URL + `/api/challenge-list/${countyName}/${jurisdictionName}/${precinctName}`, { headers: authHeader() });
        if(resp.status === 200) {
          setResponseMessage("Success");
          setChallengeableVoters(resp.data);
          if(resp.data.length === 0) {
            setHideDownloadButton(true);
          } else {
            setHideDownloadButton(false);
          }
        } else {
          setResponseMessage("Error");
        }
        setIsLoading(false);
        try {
          const url = process.env.REACT_API_BASE_URL + `/api/county-summary/${countyName}`;
          const respCountySummary = await axios.get(url);
          setCountySummaryInfo(respCountySummary.data);
          setIsLoading(false);
        } catch (error) {
          console.log('error', error);
        }   */
    };
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [isJurisdictionDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Jurisdiction", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ disabled: isJurisdictionDropdownLoading, value: jurisdictionName, onChange: (e) => validateJurisdictionSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Jurisdiction --- " })), jurisdictions.map((jurisdiction) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: jurisdiction.jurisdiction_name }, { children: jurisdiction.jurisdiction_name }), jurisdiction.jurisdiction_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [isPrecinctDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Precinct", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ disabled: isPrecinctDropdownLoading, value: precinctName, onChange: (e) => validatePrecinctSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Precinct --- " })), precincts.map((precinct) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: precinct.precinct }, { children: precinct.precinct }), precinct.precinct)))] }))] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn", disabled: !readyforSearch }, { children: "Get Precinct Challenge List" })) })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [isLoading ?
                            (responseMessage === '') ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                : ""
                            : "", !isLoading ?
                            (responseMessage === 'Success') ?
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CountyInformation__WEBPACK_IMPORTED_MODULE_7__["default"], { countySummary: countySummaryInfo, countyMetadata: countyMetadataInfo }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, Object.assign({ hidden: hideDownloadButton, data: challengeableVoters, filename: countyName + '-' + jurisdictionName + '-' + precinctName + '-challenge-list.csv' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({ className: "button", color: "red", size: 'lg' }, { children: "Download results" })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), expandOnRowClicked: true, columns: columns, data: challengeableVoters, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: challengeableVoters.length, responsive: true, striped: true })] })
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

/***/ "./src/components/CountyInformation.tsx":
/*!**********************************************!*\
  !*** ./src/components/CountyInformation.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.css */ "./src/components/card.css");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");






const CountyInformation = ({ countySummary, countyMetadata }) => {
    const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userReady, setUserReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ username: "" });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentUser();
        if (!currentUser) {
            setRedirect("/login");
        }
        setCurrentUser(currentUser);
        setUserReady(true);
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ className: "card" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, Object.assign({ style: { color: "black" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Title, { children: [countySummary.county_name, " County Summary per September 2022 QVF"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Text, Object.assign({ style: { color: "black" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({ striped: true, bordered: true, hover: true }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Total Registered Voter Count" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.total_registered_voter_count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Active Registered Voter Count (A)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.active_registered_voter_count })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Challenged Voter Count (CH)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.challenged_voter_count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Verify Voter Count (V)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.verify_voter_count })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Canceled Voter Count (C)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.canceled_voter_count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Rejected Voter Count (R)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.rejected_voter_count })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2 }, { children: "Voting System" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2 }, { children: countyMetadata.voting_system }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2 }, { children: "Keshel Heat Map Color" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2, color: countyMetadata.keshel_heatmap_color }, { children: countyMetadata.keshel_heatmap_color }))] })] })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Link, Object.assign({ href: countyMetadata.census_url, target: "_blank" }, { children: "Census Source" }))] })) })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountyInformation);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkJBQTJCLHFCQUFxQixJQUFJLHdCQUF3QixvQkFBb0IsS0FBSztBQUNuUjtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSHVEO0FBQy9FLG9CQUFvQix1REFBSyxDQUFDLHVEQUFTLElBQUksV0FBVyxzREFBSSxTQUFTLCtCQUErQixHQUFHLHNEQUFJLFVBQVUsa0hBQWtILElBQUk7QUFDNU8saUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZtRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0kseUJBQXlCLHNEQUFJLENBQUMsdURBQVMsSUFBSSxVQUFVLHNEQUFJLFNBQVMsMkJBQTJCLEdBQUc7QUFDdkcsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUI7QUFDTjtBQUM1Qyw0QkFBNEIsWUFBWTtBQUN4QyxrRUFBa0UsK0NBQVE7QUFDMUUsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMLFlBQVksdURBQUssVUFBVSx5REFBeUQ7QUFDcEY7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGdCO0FBQ2Y7QUFDWjtBQUM0QjtBQUNYO0FBQ1c7QUFDakQsNkNBQWUsQ0FBQyxzREFBSSxDQUFDLDJEQUFhLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFVLElBQUksR0FBRztBQUN0RSxzREFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvY2FyZC5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZWJhci5jc3M/ZjFiOSIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9jYXJkLmNzcz82ODgxIiwid2VicGFjazovL3dlYi8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tbW9uL0V2ZW50QnVzLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VzL2F1dGgtaGVhZGVyLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0F1ZGl0TXlBZGRyZXNzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9DaGFsbGVuZ2VMaXN0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9Db250YWN0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9Db3VudHlJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvR2hvc3RidXN0ZXJzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9NeVZvdGluZ0hpc3RvcnkudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL05ld3MudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL1Jlc291cmNlcy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvVm90ZXJJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4gICAgREVNTyBTVFlMRVxcclxcbiovXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjAsIDE0NywgMjA2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnRuIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XFxyXFxuICAgIG1hcmdpbjogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pLFxcclxcbnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBTSURFQkFSIFNUWUxFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMDI5Mjk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGg0LFxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuQ1RBcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0MTQzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMjEsIDIyMSk7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM4MzAyMDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXFxyXFxuYVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjQ0LCAyNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGM0ZDRlO1xcclxcbn1cXHJcXG5cXHJcXG5hW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB1bCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRlNGU1MDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnVsLkNUQXMgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmEuZG93bmxvYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzczODZENTtcXHJcXG59XFxyXFxuXFxyXFxuYS5hcnRpY2xlLFxcclxcbmEuYXJ0aWNsZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIENPTlRFTlQgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIE1FRElBUVVFUklFU1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRvcDogYXV0bztcXHJcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIGgzLFxcclxcbiAgICAjc2lkZWJhciAuQ1RBcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCB1bCBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQXBwU2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFHRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixVQUFVO1FBQ1Ysa0NBQWtDO1FBQ2xDLDhCQUE4QjtRQUM5QiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBOztRQUVJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcclxcbiAgICBERU1PIFNUWUxFXFxyXFxuKi9cXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXFxcIjtcXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgMTQ3LCAyMDYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1idG4ge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxufVxcclxcblxcclxcbmksXFxyXFxuc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIFNJREVCQVIgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzNDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMwMjkyOTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgaDQsXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5DVEFzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0ZTQxNDM7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4YjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGNvbG9yOnJnYigyMzUsIDIyMSwgMjIxKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzgzMDIwMTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcXHJcXG5hW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNDQsIDI0NCk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0YzRkNGU7XFxyXFxufVxcclxcblxcclxcbmFbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbnVsIHVsIGEge1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0ZTUwO1xcclxcbn1cXHJcXG5cXHJcXG51bC5DVEFzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyBhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYS5kb3dubG9hZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjNzM4NkQ1O1xcclxcbn1cXHJcXG5cXHJcXG5hLmFydGljbGUsXFxyXFxuYS5hcnRpY2xlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgQ09OVEVOVCBTVFlMRVxcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgTUVESUFRVUVSSUVTXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgI3NpZGViYXIge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgdG9wOiBhdXRvO1xcclxcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXFxyXFxuICAgICNzaWRlYmFyIC5DVEFzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIHVsIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyQ29sbGFwc2Ugc3BhbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5hIHtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5mby1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uYSB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBjb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxyXFxuICAgICAgbW9ub3NwYWNlO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Q7O2dCQUVZO0lBQ1osbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFO2VBQ1c7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBjb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxyXFxuICAgICAgbW9ub3NwYWNlO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwU2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcFNpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IGV2ZW50QnVzID0ge1xyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGUpID0+IGNhbGxiYWNrKGUuZGV0YWlsKSk7XHJcbiAgICB9LFxyXG4gICAgZGlzcGF0Y2goZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGRhdGEgfSkpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZShldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBldmVudEJ1cztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBVc2VyU2VydmljZS5nZXRQdWJsaWNDb250ZW50KCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJoZWFkZXJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJqdW1ib3Ryb25cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IFwiUmVsZWFzZSB2MDkwNTIwMjJcIiB9KSwgX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IFwiRmVhdHVyZXMgU3VwcG9ydGVkXCIgfSksIF9qc3hzKFwidWxcIiwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIkdob3N0YnVzdGluZyBMb2NhdGlvbiBSZXBvcnQ6IERvd25sb2FkIHJlcG9ydCBvZiBzdXNwZWN0IGxvY2F0aW9ucyBjYW52YXNzZWQgYWNyb3NzIE1pY2hpZ2FuXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIk15IFZvdGluZyBIaXN0b3J5OiBFeGFtaW5lIHlvdXIgdm90aW5nIGhpc3RvcnkgZm9yIGFub21hbGllc1wiIH0pXSB9KV0gfSkpIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVMb2dpbiA9IHRoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUxvZ2luKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZvcm0udmFsaWRhdGVBbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0J0bi5jb250ZXh0Ll9lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuc3RhdGUudXNlcm5hbWUsIHRoaXMuc3RhdGUucGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbWQtMTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2FyZCBjYXJkLWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogdGhpcy5oYW5kbGVMb2dpbiwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInVzZXJuYW1lXCIgfSwgeyBjaGlsZHJlbjogXCJVc2VybmFtZVwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcInVzZXJuYW1lXCIsIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJuYW1lLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVVzZXJuYW1lLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkXSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInBhc3N3b3JkXCIgfSwgeyBjaGlsZHJlbjogXCJQYXNzd29yZFwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJwYXNzd29yZFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5wYXNzd29yZCwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VQYXNzd29yZCwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZF0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUubG9hZGluZyB9LCB7IGNoaWxkcmVuOiBbdGhpcy5zdGF0ZS5sb2FkaW5nICYmIChfanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiIH0pKSwgX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogXCJMb2dpblwiIH0pXSB9KSkgfSkpLCB0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogdGhpcy5zdGF0ZS5tZXNzYWdlIH0pKSB9KSkpLCBfanN4KENoZWNrQnV0dG9uLCB7IHN0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0J0biA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSkgfSkpIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDogbnVsbCxcclxuICAgICAgICAgICAgdXNlclJlYWR5OiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IFwiXCIgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiBcIi9ob21lXCIgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlciwgdXNlclJlYWR5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiB0aGlzLnN0YXRlLnJlZGlyZWN0IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46ICh0aGlzLnN0YXRlLnVzZXJSZWFkeSkgP1xyXG4gICAgICAgICAgICAgICAgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJoZWFkZXJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJqdW1ib3Ryb25cIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImgzXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IGN1cnJlbnRVc2VyLnVzZXJuYW1lIH0pLCBcIiBQcm9maWxlXCJdIH0pIH0pKSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiVG9rZW46XCIgfSksIFwiIFwiLCBjdXJyZW50VXNlci5hY2Nlc3NUb2tlbi5zdWJzdHJpbmcoMCwgMjApLCBcIiAuLi5cIiwgXCIgXCIsIGN1cnJlbnRVc2VyLmFjY2Vzc1Rva2VuLnN1YnN0cihjdXJyZW50VXNlci5hY2Nlc3NUb2tlbi5sZW5ndGggLSAyMCldIH0pLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJJZDpcIiB9KSwgXCIgXCIsIGN1cnJlbnRVc2VyLmlkXSB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiRW1haWw6XCIgfSksIFwiIFwiLCBjdXJyZW50VXNlci5lbWFpbF0gfSksIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJBdXRob3JpdGllczpcIiB9KSwgX2pzeChcInVsXCIsIHsgY2hpbGRyZW46IGN1cnJlbnRVc2VyLnJvbGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXIucm9sZXMubWFwKChyb2xlLCBpbmRleCkgPT4gX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IHJvbGUgfSwgaW5kZXgpKSB9KV0gfSkgOiBudWxsIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IHsgaXNFbWFpbCB9IGZyb20gXCJ2YWxpZGF0b3JcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgZW1haWwgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIWlzRW1haWwodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwuXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgdnVzZXJuYW1lID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMgfHwgdmFsdWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFwiVGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiAzIGFuZCAyMCBjaGFyYWN0ZXJzLlwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHZwYXNzd29yZCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCA2IHx8IHZhbHVlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoZSBwYXNzd29yZCBtdXN0IGJlIGJldHdlZW4gNiBhbmQgNDAgY2hhcmFjdGVycy5cIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlZ2lzdGVyID0gdGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VVc2VybmFtZSA9IHRoaXMub25DaGFuZ2VVc2VybmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VFbWFpbCA9IHRoaXMub25DaGFuZ2VFbWFpbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlRW1haWwoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVJlZ2lzdGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbGlkYXRlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdG4uY29udGV4dC5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBBdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbC1tZC0xMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjYXJkIGNhcmQtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiB0aGlzLmhhbmRsZVJlZ2lzdGVyLCByZWY6IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogWyF0aGlzLnN0YXRlLnN1Y2Nlc3NmdWwgJiYgKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInVzZXJuYW1lXCIgfSwgeyBjaGlsZHJlbjogXCJVc2VybmFtZVwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcInVzZXJuYW1lXCIsIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJuYW1lLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVVzZXJuYW1lLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkLCB2dXNlcm5hbWVdIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IFwiZW1haWxcIiB9LCB7IGNoaWxkcmVuOiBcIkVtYWlsXCIgfSkpLCBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwiZW1haWxcIiwgdmFsdWU6IHRoaXMuc3RhdGUuZW1haWwsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlRW1haWwsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWQsIGVtYWlsXSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInBhc3N3b3JkXCIgfSwgeyBjaGlsZHJlbjogXCJQYXNzd29yZFwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJwYXNzd29yZFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5wYXNzd29yZCwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VQYXNzd29yZCwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZCwgdnBhc3N3b3JkXSB9KV0gfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgfSwgeyBjaGlsZHJlbjogXCJTaWduIFVwXCIgfSkpIH0pKV0gfSkpLCB0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiB0aGlzLnN0YXRlLnN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiB0aGlzLnN0YXRlLm1lc3NhZ2UgfSkpIH0pKSksIF9qc3goQ2hlY2tCdXR0b24sIHsgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSldIH0pKSB9KSkgfSkpKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGlzIG9wdGlvbmFsIGNvZGUgaXMgdXNlZCB0byByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyLlxyXG4vLyByZWdpc3RlcigpIGlzIG5vdCBjYWxsZWQgYnkgZGVmYXVsdC5cclxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXHJcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxyXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gYSBwYWdlLCBhZnRlciBhbGwgdGhlXHJcbi8vIGV4aXN0aW5nIHRhYnMgb3BlbiBvbiB0aGUgcGFnZSBoYXZlIGJlZW4gY2xvc2VkLCBzaW5jZSBwcmV2aW91c2x5IGNhY2hlZFxyXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXHJcbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cclxuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcclxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcclxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XHJcbiAgICAvLyAxMjcuMC4wLjAvOCBhcmUgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvKSk7XHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAvLyBUaGUgVVJMIGNvbnN0cnVjdG9yIGlzIGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFNXLlxyXG4gICAgICAgIGNvbnN0IHB1YmxpY1VybCA9IG5ldyBVUkwocHJvY2Vzcy5lbnYuUFVCTElDX1VSTCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmIChwdWJsaWNVcmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICAgICAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXHJcbiAgICAgICAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cclxuICAgICAgICAgICAgLy8gc2VydmUgYXNzZXRzOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2NyZWF0ZS1yZWFjdC1hcHAvaXNzdWVzLzIzNzRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XHJcbiAgICAgICAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBydW5uaW5nIG9uIGxvY2FsaG9zdC4gTGV0J3MgY2hlY2sgaWYgYSBzZXJ2aWNlIHdvcmtlciBzdGlsbCBleGlzdHMgb3Igbm90LlxyXG4gICAgICAgICAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgc29tZSBhZGRpdGlvbmFsIGxvZ2dpbmcgdG8gbG9jYWxob3N0LCBwb2ludGluZyBkZXZlbG9wZXJzIHRvIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyB3ZWIgYXBwIGlzIGJlaW5nIHNlcnZlZCBjYWNoZS1maXJzdCBieSBhIHNlcnZpY2UgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrZXIuIFRvIGxlYXJuIG1vcmUsIHZpc2l0IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcbiAgICAgICAgLnJlZ2lzdGVyKHN3VXJsKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcclxuICAgICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cclxuICAgIGZldGNoKHN3VXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyAnU2VydmljZS1Xb3JrZXInOiAnc2NyaXB0JyB9XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxyXG4gICAgICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKSkge1xyXG4gICAgICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxyXG4gICAgICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJyk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcclxuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHlcclxuICAgICAgICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhIZWFkZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgIGlmICh1c2VyICYmIHVzZXIuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAvLyByZXR1cm4geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB1c2VyLmFjY2Vzc1Rva2VuIH07IC8vIGZvciBTcHJpbmcgQm9vdCBiYWNrLWVuZFxyXG4gICAgICAgIHJldHVybiB7ICd4LWFjY2Vzcy10b2tlbic6IHVzZXIuYWNjZXNzVG9rZW4gfTsgLy8gZm9yIE5vZGUuanMgRXhwcmVzcyBiYWNrLWVuZFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIFwiL2FwaS9hdXRoL1wiO1xyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoQVBJX1VSTCArIFwic2lnbmluXCIsIHtcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlcih1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoQVBJX1VSTCArIFwic2lnbnVwXCIsIHtcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4vYXV0aC1oZWFkZXInO1xyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvdGVzdC8nO1xyXG5jbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBnZXRQdWJsaWNDb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICdhbGwnKTtcclxuICAgIH1cclxuICAgIGdldFVzZXJCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAndXNlcicsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0TW9kZXJhdG9yQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ21vZCcsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QWRtaW5Cb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAnYWRtaW4nLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKTtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTXlWb3RpbmdIaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9NeVZvdGluZ0hpc3RvcnknO1xyXG5pbXBvcnQgR2hvc3RidXN0ZXJzIGZyb20gJy4vY29tcG9uZW50cy9HaG9zdGJ1c3RlcnMnO1xyXG5pbXBvcnQgQXVkaXRNeUFkZHJlc3MgZnJvbSAnLi9jb21wb25lbnRzL0F1ZGl0TXlBZGRyZXNzJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tICcuL2NvbXBvbmVudHMvUmVzb3VyY2VzJztcclxuaW1wb3J0IEV2ZW50QnVzIGZyb20gXCIuL2NvbW1vbi9FdmVudEJ1c1wiO1xyXG5pbXBvcnQgJy4vQXBwU2lkZWJhci5jc3MnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBOZXdzIGZyb20gJy4vY29tcG9uZW50cy9OZXdzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3QnO1xyXG5pbXBvcnQgQ2hhbGxlbmdlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbGxlbmdlTGlzdCc7XHJcbmNsYXNzIEFwcFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dNb2RlcmF0b3JCb2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dBZG1pbkJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudFVzZXI6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgICAgICBzaG93TW9kZXJhdG9yQm9hcmQ6IHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0RBVEFfQ1VSQVRPUlwiKSxcclxuICAgICAgICAgICAgICAgIHNob3dBZG1pbkJvYXJkOiB1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50QnVzLm9uKFwibG9nb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dPdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIEV2ZW50QnVzLnJlbW92ZShcImxvZ291dFwiKTtcclxuICAgIH1cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICBBdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd01vZGVyYXRvckJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0FkbWluQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIHNob3dNb2RlcmF0b3JCb2FyZCwgc2hvd0FkbWluQm9hcmQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJuYXZcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiBcInNpZGViYXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJzaWRlYmFyLWhlYWRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogXCJFbGVjdGlvbiBJbnRlZ3JpdHkgRm9yY2VcIiB9KSwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIkVJRlwiIH0pXSB9KSksIF9qc3hzKFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJsaXN0LXVuc3R5bGVkIGNvbXBvbmVudHNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNob21lU3VibWVudVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtaG9tZVwiIH0pLCBcIlxcdTAwQTAgQXVkaXRcIl0gfSkpLCBfanN4KFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBsaXN0LXVuc3R5bGVkXCIsIGlkOiBcImhvbWVTdWJtZW51XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvbXktdm90aW5nLWhpc3RvcnlcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJWb3RpbmcgSGlzdG9yeVwiIH0pKSB9KSkgfSkpXSB9KSwgX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNwYWdlU3VibWVudVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtZ2xhc3Nlc1wiIH0pLCBcIlxcdTAwQTAgUmVwb3J0c1wiXSB9KSksIF9qc3hzKFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBsaXN0LXVuc3R5bGVkXCIsIGlkOiBcInBhZ2VTdWJtZW51XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2dob3N0YnVzdGVycy1ieS1jb3VudHlcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJHaG9zdGJ1c3RpbmcgTG9jYXRpb25zXCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvY2hhbGxlbmdlLWxpc3QtYnktcHJlY2luY3RcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJDaGFsbGVuZ2UgTGlzdFwiIH0pKSB9KSldIH0pKV0gfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBfanN4cyhMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL25ld3NcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1nbG9iZVwiIH0pLCBcIlxcdTAwQTAgTmV3c1wiXSB9KSkgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBfanN4cyhMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2NvbnRhY3RcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1wYXBlci1wbGFuZVwiIH0pLCBcIlxcdTAwQTAgQ29udGFjdFwiXSB9KSkgfSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgaWQ6IFwiY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibmF2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXItZmx1aWRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNpZGViYXJDb2xsYXBzZVwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJ0blwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtYWxpZ24tbGVmdFwiIH0pLCBfanN4KFwic3BhblwiLCB7fSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tZGFyayBkLWlubGluZS1ibG9jayBkLWxnLW5vbmUgbWwtYXV0b1wiLCB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIsIFwiYXJpYS1jb250cm9sc1wiOiBcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgXCJhcmlhLWxhYmVsXCI6IFwiVG9nZ2xlIG5hdmlnYXRpb25cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtYWxpZ24tanVzdGlmeVwiIH0pIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLCBpZDogXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkhvbWVcIiB9KSkgfSkpLCBzaG93QWRtaW5Cb2FyZCAmJiAoX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvYWRtaW5cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiQWRtaW5cIiB9KSkgfSkpKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvYWJvdXRcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiQWJvdXRcIiB9KSkgfSkpLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL3Jlc291cmNlc1wiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJSZXNvdXJjZXNcIiB9KSkgfSldIH0pKSB9KSksIGN1cnJlbnRVc2VyID8gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL3Byb2ZpbGVcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IGN1cnJlbnRVc2VyLnVzZXJuYW1lIH0pKSB9KSksIF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiL2xvZ2luXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiwgb25DbGljazogdGhpcy5sb2dPdXQgfSwgeyBjaGlsZHJlbjogXCJMb2dPdXRcIiB9KSkgfSkpXSB9KSkpIDogKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2xvZ2luXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkxvZ2luXCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvcmVnaXN0ZXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBVcFwiIH0pKSB9KSldIH0pKSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJsaW5lXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoU3dpdGNoLCB7IGNoaWxkcmVuOiBbX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogW1wiL1wiLCBcIi9ob21lXCJdLCBjb21wb25lbnQ6IEhvbWUgfSksIF9qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL2xvZ2luXCIsIGNvbXBvbmVudDogTG9naW4gfSksIF9qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3JlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXIgfSksIF9qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3Byb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2dob3N0YnVzdGVycy1ieS1jb3VudHlcIiwgY29tcG9uZW50OiBHaG9zdGJ1c3RlcnMgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvY2hhbGxlbmdlLWxpc3QtYnktcHJlY2luY3RcIiwgY29tcG9uZW50OiBDaGFsbGVuZ2VMaXN0IH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL215LXZvdGluZy1oaXN0b3J5XCIsIGNvbXBvbmVudDogTXlWb3RpbmdIaXN0b3J5IH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2F1ZGl0LW15LWFkZHJlc3NcIiwgY29tcG9uZW50OiBBdWRpdE15QWRkcmVzcyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9hYm91dFwiLCBjb21wb25lbnQ6IEFib3V0IH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3Jlc291cmNlc1wiLCBjb21wb25lbnQ6IFJlc291cmNlcyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXdzXCIsIGNvbXBvbmVudDogTmV3cyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9jb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdCB9KV0gfSkgfSkpXSB9KSldIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwU2lkZUJhcjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5leHBvcnQgY29uc3QgQWJvdXQgPSAoKSA9PiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIkFib3V0IHRoaXMgd2Vic2l0ZVwiIH0pIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmV4cG9ydCBjb25zdCBBdWRpdE15QWRkcmVzcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcgQ291bnRpZXMgLi4uXCIpO1xyXG4gICAgY29uc3QgW3N0cmVldE51bWJlciwgc2V0U3RyZWV0TnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0cmVldE5hbWUsIHNldFN0cmVldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbemlwLCBzZXRaaXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVhZHlmb3JTZWFyY2gsIHNldFJlYWR5Rm9yU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZU1lc3NhZ2UsIHNldFJlc3BvbnNlTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlcmVkQWRkcmVzcywgc2V0UmVnaXN0ZXJlZEFkZHJlc3NdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJlZFZvdGVycywgc2V0UmVnaXN0ZXJlZFZvdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB2b3RlckNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTdHJlZXQgQWRkcmVzcycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTGFzdCBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5sYXN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWlkZGxlIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1pZGRsZV9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnWWVhciBvZiBCaXJ0aCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cueWVhcl9vZl9iaXJ0aCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWlsaW5nIEFkZHJlc3MgTGluZSAxJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5tYWlsaW5nX2FkZHJlc3NfbGluZV9vbmUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWFpbGluZyBBZGRyZXNzIExpbmUgMicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWFpbGluZ19hZGRyZXNzX2xpbmVfdHdvLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01haWxpbmcgQWRkcmVzcyBMaW5lIDMnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1haWxpbmdfYWRkcmVzc19saW5lX3RocmVlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1FWRiBBZGRyZXNzIExpbmUgMSAtIDEwIENoYXJzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5hZGRyZXNzX2xpbmVfMV9xdmZfMTAsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICBdLCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL2NvdW50aWVzJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGNvdW50aWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvdW50aWVzKGNvdW50aWVzKTtcclxuICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihjb3VudHlTZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0Q291bnR5TmFtZShjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnRpbmcgdGhlIHBhZ2UgZnJvbSByZWxvYWRpbmdcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgbGV0IGFkZHJlc3NMaW5lMSA9ICgoc3RyZWV0TnVtYmVyID09PSBudWxsID8gXCJcIiA6IHN0cmVldE51bWJlci50cmltKCkpICsgKHN0cmVldE5hbWUgPT09IG51bGwgPyBcIlwiIDogc3RyZWV0TmFtZS50cmltKCkpKS5yZXBsYWNlKCcgJywgJycpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NGaXJzdDhBbmRaaXAgPSAoYWRkcmVzc0xpbmUxLnNsaWNlKDAsIDgpICsgKHppcCA9PT0gbnVsbCA/IFwiXCIgOiB6aXAudHJpbSgpKSkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2F1ZGl0LXlvdXItYWRkcmVzcy8ke2NvdW50eU5hbWV9LyR7YWRkcmVzc0ZpcnN0OEFuZFppcH1gKTtcclxuICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBzZXRDb3VudChyZXNwLmRhdGEuY291bnQpO1xyXG4gICAgICAgICAgICBzZXRSZWdpc3RlcmVkQWRkcmVzcyhyZXNwLmRhdGEucmVnaXN0ZXJlZEFkZHJlc3MpO1xyXG4gICAgICAgICAgICBzZXRSZWdpc3RlcmVkVm90ZXJzKHJlc3AuZGF0YS5yZWdpc3RlcmVkVm90ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIkVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgcmVxdWlyZWQ6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiU3RyZWV0IE51bWJlclwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogc3RyZWV0TnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRTdHJlZXROdW1iZXIoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RyZWV0IE51bWJlclwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlN0cmVldCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiBzdHJlZXROYW1lLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRTdHJlZXROYW1lKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0cmVldCBOYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWmlwXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB6aXAsIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0WmlwKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFppcFwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIsIGRpc2FibGVkOiAhcmVhZHlmb3JTZWFyY2ggfSwgeyBjaGlsZHJlbjogXCJBdWRpdCBBZGRyZXNzXCIgfSkpIH0pXSB9KSkgfSkpLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJycpID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsICFpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnU3VjY2VzcycpID8gX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoRm9ybS5UZXh0LCB7IGNoaWxkcmVuOiBbY291bnQsIFwiIHJlZ2lzdHJhdGlvbnMgZm91bmQuXCJdIH0pLCBfanN4KERhdGFUYWJsZSwgeyBjb2x1bW5zOiB2b3RlckNvbHVtbnMsIGRhdGE6IHJlZ2lzdGVyZWRWb3RlcnMgfSldIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZXNwb25zZU1lc3NhZ2UgPT09ICdFcnJvcicpID8gXCJFcnJvciBmZXRjaGluZyByZWNvcmRzLiBQbGVhc2UgcmV0cnkuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIl0gfSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGl0TXlBZGRyZXNzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDU1ZMaW5rIH0gZnJvbSAncmVhY3QtY3N2JztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC1oZWFkZXJcIjtcclxuaW1wb3J0IENvdW50eUluZm9ybWF0aW9uIGZyb20gXCIuL0NvdW50eUluZm9ybWF0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjb3VudGllcywgc2V0Q291bnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50eU5hbWUsIHNldENvdW50eU5hbWVdID0gdXNlU3RhdGUoXCJMb2FkaW5nIENvdW50aWVzIC4uLlwiKTtcclxuICAgIGNvbnN0IFtpc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZywgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbnMsIHNldEp1cmlzZGljdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbk5hbWUsIHNldEp1cmlzZGljdGlvbk5hbWVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBKdXJpc2RpY3Rpb24gLS0tIFwiKTtcclxuICAgIGNvbnN0IFtpc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nLCBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcmVjaW5jdHMsIHNldFByZWNpbmN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJlY2luY3ROYW1lLCBzZXRQcmVjaW5jdE5hbWVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBQcmVjaW5jdCAtLS0gXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlYWJsZVZvdGVycywgc2V0Q2hhbGxlbmdlYWJsZVZvdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5U3VtbWFyeUluZm8sIHNldENvdW50eVN1bW1hcnlJbmZvXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnR5TWV0YWRhdGFJbmZvLCBzZXRDb3VudHlNZXRhZGF0YUluZm9dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtoaWRlRG93bmxvYWRCdXR0b24sIHNldEhpZGVEb3dubG9hZEJ1dHRvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGFsbGVuZ2UgQ29kZShzKScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY2hhbGxlbmdlX2NvZGVzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGdWxsIFN0cmVldCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5mdWxsX3N0cmVldF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGdWxsIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdZZWFyIG9mIEJpcnRoJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy55ZWFyX29mX2JpcnRoLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ZvdGVyIElkZW50aWZpY2F0aW9uIE51bWJlcicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudm90ZXJfaWRlbnRpZmljYXRpb25fbnVtYmVyLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm5hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVHlwZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudHlwZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdKdXJpc2RpY3Rpb24gTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuanVyaXNkaWN0aW9uX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUHJlY2luY3QnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnByZWNpbmN0LFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWRkbGUgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWlkZGxlX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCdcclxuICAgICAgICB9LFxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q291bnRpZXMoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGNvdW50eVNlbGVjdGVkKSB7XHJcbiAgICAgICAgc2V0UHJlY2luY3ROYW1lKFwiIC0tLSBTZWxlY3QgUHJlY2luY3QgLS0tIFwiKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoJycpO1xyXG4gICAgICAgIHNldENvdW50eVN1bW1hcnlJbmZvKG51bGwpO1xyXG4gICAgICAgIHNldENvdW50eU1ldGFkYXRhSW5mbyhudWxsKTtcclxuICAgICAgICBpZiAoY291bnR5U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q291bnR5TmFtZShjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGZldGNoSnVyaXNkaWN0aW9ucyhjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmV0Y2hKdXJpc2RpY3Rpb25zKGNvdW50eU5hbWUpIHtcclxuICAgICAgICBzZXRJc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9qdXJpc2RpY3Rpb25zLyR7Y291bnR5TmFtZX1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoanVyaXNkaWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBzZXRKdXJpc2RpY3Rpb25zKGp1cmlzZGljdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRJc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlSnVyaXNkaWN0aW9uU2VsZWN0aW9uKGp1cmlzZGljdGlvblNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKGp1cmlzZGljdGlvblNlbGVjdGVkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEp1cmlzZGljdGlvbk5hbWUoanVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBmZXRjaFByZWNpbmN0cyhqdXJpc2RpY3Rpb25TZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmV0Y2hQcmVjaW5jdHMoanVyaXNkaWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHNldElzUHJlY2luY3REcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvcHJlY2luY3RzLyR7Y291bnR5TmFtZX0vJHtqdXJpc2RpY3Rpb25OYW1lfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChwcmVjaW5jdHMpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJlY2luY3RzKHByZWNpbmN0cyk7XHJcbiAgICAgICAgICAgIHNldElzUHJlY2luY3REcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVByZWNpbmN0U2VsZWN0aW9uKHByZWNpbmN0U2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAocHJlY2luY3RTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQcmVjaW5jdE5hbWUocHJlY2luY3RTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IEV4cGFuZGVkQ29tcG9uZW50ID0gKCkgPT4gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcInByZVwiLCB7IGNoaWxkcmVuOiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KSB9KSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnRpbmcgdGhlIHBhZ2UgZnJvbSByZWxvYWRpbmdcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgbGV0IGVuZHBvaW50cyA9IFtcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY291bnR5LXN1bW1hcnkvJHtjb3VudHlOYW1lfWAsXHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2NvdW50eS1tZXRhZGF0YS8ke2NvdW50eU5hbWV9YCxcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY2hhbGxlbmdlLWxpc3QvJHtjb3VudHlOYW1lfS8ke2p1cmlzZGljdGlvbk5hbWV9LyR7cHJlY2luY3ROYW1lfWBcclxuICAgICAgICBdO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGVuZHBvaW50cy5tYXAoKGVuZHBvaW50KSA9PiBheGlvcy5nZXQoZW5kcG9pbnQsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pKSkudGhlbigoW3sgZGF0YTogY291bnR5U3VtbWFyeUluZm8gfSwgeyBkYXRhOiBjb3VudHlNZXRhZGF0YUluZm8gfSwgeyBkYXRhOiBjaGFsbGVuZ2VhYmxlVm90ZXJzIH1dKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50eVN1bW1hcnlJbmZvKTtcclxuICAgICAgICAgICAgY291bnR5U3VtbWFyeUluZm8uY291bnR5X25hbWUgPSBjb3VudHlOYW1lO1xyXG4gICAgICAgICAgICAvL2NvbnN0IGNvdW50eUluZm86IENvdW50eVN1bW1hcnkgPSB7Y291bnR5X25hbWU6IFwiTElWSU5HU1RPTlwiLCB0b3RhbF9yZWdpc3RlcmVkX3ZvdGVyczogMTgyODIsIGFjdGl2ZV9yZWdpc3RlcmVkX3ZvdGVyczogMTgwMDB9O1xyXG4gICAgICAgICAgICBzZXRDb3VudHlTdW1tYXJ5SW5mbyhjb3VudHlTdW1tYXJ5SW5mbyk7XHJcbiAgICAgICAgICAgIHNldENvdW50eU1ldGFkYXRhSW5mbyhjb3VudHlNZXRhZGF0YUluZm9bMF0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudHlNZXRhZGF0YUluZm9bMF0pO1xyXG4gICAgICAgICAgICBzZXRDaGFsbGVuZ2VhYmxlVm90ZXJzKGNoYWxsZW5nZWFibGVWb3RlcnMpO1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoY2hhbGxlbmdlYWJsZVZvdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKlByb21pc2UuYWxsKGVuZHBvaW50cy5tYXAoKGVuZHBvaW50KSA9PiBheGlvcy5nZXQoZW5kcG9pbnQpKSkudGhlbigoW3tkYXRhOiB1c2VyfSwge2RhdGE6IHJlcG9zfSwge2RhdGE6IGZvbGxvd2Vyc30sIHtkYXRhOiBmb2xsb3dpbmdzfV0gKT0+IHtcclxuICAgICAgICAgIHNldEZvbGxvd2Vycyhmb2xsb3dlcnMpXHJcbiAgICAgICAgICBzZXRGb2xsb3dpbmcoZm9sbG93aW5ncylcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIC8qYXhpb3MuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9jb3VudHktc3VtbWFyeS8ke2NvdW50eU5hbWV9YCksXHJcbiAgICAgICAgICBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY2hhbGxlbmdlLWxpc3QvJHtjb3VudHlOYW1lfS8ke2p1cmlzZGljdGlvbk5hbWV9LyR7cHJlY2luY3ROYW1lfWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pLFxyXG4gICAgXHJcbiAgICAgICAgXSlcclxuICAgICAgICAudGhlbihheGlvcy5zcHJlYWQoKGNvdW50eVN1bW1hcnlJbmZvUmVzcCwgY2hhbGxlbmdlYWJsZVZvdGVyc1Jlc3ApID0+IHtcclxuICAgICAgICAgIHNldEZpbHRlckRhdGFcclxuICAgICAgICAgIGNvdW50eVN1bW1hcnlJbmZvOiBjb3VudHlTdW1tYXJ5SW5mb1Jlc3AuZGF0YSxcclxuICAgICAgICAgIGNoYWxsZW5nZWFibGVWb3RlcnM6IGNoYWxsZW5nZWFibGVWb3RlcnNSZXNwLmRhdGFcclxuICAgICAgICB9KSk7Ki9cclxuICAgICAgICAvKmNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY2hhbGxlbmdlLWxpc3QvJHtjb3VudHlOYW1lfS8ke2p1cmlzZGljdGlvbk5hbWV9LyR7cHJlY2luY3ROYW1lfWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgICAgIGlmKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICBzZXRDaGFsbGVuZ2VhYmxlVm90ZXJzKHJlc3AuZGF0YSk7XHJcbiAgICAgICAgICBpZihyZXNwLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIkVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9jb3VudHktc3VtbWFyeS8ke2NvdW50eU5hbWV9YDtcclxuICAgICAgICAgIGNvbnN0IHJlc3BDb3VudHlTdW1tYXJ5ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICBzZXRDb3VudHlTdW1tYXJ5SW5mbyhyZXNwQ291bnR5U3VtbWFyeS5kYXRhKTtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9ICAgKi9cclxuICAgIH07XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogcmVkaXJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm1Hcm91cCwgT2JqZWN0LmFzc2lnbih7IHJvbGU6IFwiZm9ybVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhSb3csIHsgY2hpbGRyZW46IFtfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHlcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBjb3VudHlOYW1lLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIiB9KSksIGNvdW50aWVzLm1hcCgoY291bnR5KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGNvdW50eS5jb3VudHlfbmFtZSB9LCB7IGNoaWxkcmVuOiBjb3VudHkuY291bnR5X25hbWUgfSksIGNvdW50eS5jb3VudHlfbmFtZSkpKV0gfSkpXSB9KV0gfSksIF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkp1cmlzZGljdGlvblwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZywgdmFsdWU6IGp1cmlzZGljdGlvbk5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVKdXJpc2RpY3Rpb25TZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBKdXJpc2RpY3Rpb24gLS0tIFwiIH0pKSwganVyaXNkaWN0aW9ucy5tYXAoKGp1cmlzZGljdGlvbikgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUgfSwgeyBjaGlsZHJlbjoganVyaXNkaWN0aW9uLmp1cmlzZGljdGlvbl9uYW1lIH0pLCBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUpKSldIH0pKV0gfSldIH0pLCBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlByZWNpbmN0XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzUHJlY2luY3REcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBwcmVjaW5jdE5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVQcmVjaW5jdFNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IFByZWNpbmN0IC0tLSBcIiB9KSksIHByZWNpbmN0cy5tYXAoKHByZWNpbmN0KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHByZWNpbmN0LnByZWNpbmN0IH0sIHsgY2hpbGRyZW46IHByZWNpbmN0LnByZWNpbmN0IH0pLCBwcmVjaW5jdC5wcmVjaW5jdCkpKV0gfSkpXSB9KV0gfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIsIGRpc2FibGVkOiAhcmVhZHlmb3JTZWFyY2ggfSwgeyBjaGlsZHJlbjogXCJHZXQgUHJlY2luY3QgQ2hhbGxlbmdlIExpc3RcIiB9KSkgfSldIH0pKSB9KSksIF9qc3goXCJiclwiLCB7fSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJycpID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiwgIWlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnU3VjY2VzcycpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KENvdW50eUluZm9ybWF0aW9uLCB7IGNvdW50eVN1bW1hcnk6IGNvdW50eVN1bW1hcnlJbmZvLCBjb3VudHlNZXRhZGF0YTogY291bnR5TWV0YWRhdGFJbmZvIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBfanN4KENTVkxpbmssIE9iamVjdC5hc3NpZ24oeyBoaWRkZW46IGhpZGVEb3dubG9hZEJ1dHRvbiwgZGF0YTogY2hhbGxlbmdlYWJsZVZvdGVycywgZmlsZW5hbWU6IGNvdW50eU5hbWUgKyAnLScgKyBqdXJpc2RpY3Rpb25OYW1lICsgJy0nICsgcHJlY2luY3ROYW1lICsgJy1jaGFsbGVuZ2UtbGlzdC5jc3YnIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvblwiLCBjb2xvcjogXCJyZWRcIiwgc2l6ZTogJ2xnJyB9LCB7IGNoaWxkcmVuOiBcIkRvd25sb2FkIHJlc3VsdHNcIiB9KSkgfSkpIH0pLCBfanN4KERhdGFUYWJsZSwgeyBleHBhbmRhYmxlUm93czogdHJ1ZSwgZXhwYW5kYWJsZVJvd3NDb21wb25lbnQ6IEV4cGFuZGVkQ29tcG9uZW50KCksIGV4cGFuZE9uUm93Q2xpY2tlZDogdHJ1ZSwgY29sdW1uczogY29sdW1ucywgZGF0YTogY2hhbGxlbmdlYWJsZVZvdGVycywgaGlnaGxpZ2h0T25Ib3ZlcjogdHJ1ZSwgcGFnaW5hdGlvbjogdHJ1ZSwgcGFnaW5hdGlvblBlclBhZ2U6IDEwLCBwYWdpbmF0aW9uVG90YWxSb3dzOiBjaGFsbGVuZ2VhYmxlVm90ZXJzLmxlbmd0aCwgcmVzcG9uc2l2ZTogdHJ1ZSwgc3RyaXBlZDogdHJ1ZSB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZXNwb25zZU1lc3NhZ2UgPT09ICdFcnJvcicpID8gXCJFcnJvciBmZXRjaGluZyByZWNvcmRzLiBQbGVhc2UgcmV0cnkuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJdIH0pXSB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGFsbGVuZ2VMaXN0O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWN0ID0gKCkgPT4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIkNvbnRhY3QgVXNcIiB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcIi4uLiBpZiB5b3UnZCBsaWtlIHRvIGhlbHAgc2V0IHRoZSB0cnV0aCBmcmVlXCIgfSldIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiaW1wb3J0IHsganN4cyBhcyBfanN4cywganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFwiLi9jYXJkLmNzc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmNvbnN0IENvdW50eUluZm9ybWF0aW9uID0gKHsgY291bnR5U3VtbWFyeSwgY291bnR5TWV0YWRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlclJlYWR5LCBzZXRVc2VyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goQ2FyZCwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjYXJkXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZC5Cb2R5LCBPYmplY3QuYXNzaWduKHsgc3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhDYXJkLlRpdGxlLCB7IGNoaWxkcmVuOiBbY291bnR5U3VtbWFyeS5jb3VudHlfbmFtZSwgXCIgQ291bnR5IFN1bW1hcnkgcGVyIFNlcHRlbWJlciAyMDIyIFFWRlwiXSB9KSwgX2pzeChDYXJkLlRleHQsIE9iamVjdC5hc3NpZ24oeyBzdHlsZTogeyBjb2xvcjogXCJibGFja1wiIH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGUsIE9iamVjdC5hc3NpZ24oeyBzdHJpcGVkOiB0cnVlLCBib3JkZXJlZDogdHJ1ZSwgaG92ZXI6IHRydWUgfSwgeyBjaGlsZHJlbjogW19qc3goXCJ0aGVhZFwiLCB7fSksIF9qc3hzKFwidGJvZHlcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwidHJcIiwgeyBjaGlsZHJlbjogW19qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBcIlRvdGFsIFJlZ2lzdGVyZWQgVm90ZXIgQ291bnRcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkudG90YWxfcmVnaXN0ZXJlZF92b3Rlcl9jb3VudCB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiQWN0aXZlIFJlZ2lzdGVyZWQgVm90ZXIgQ291bnQgKEEpXCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBjb3VudHlTdW1tYXJ5LmFjdGl2ZV9yZWdpc3RlcmVkX3ZvdGVyX2NvdW50IH0pXSB9KSwgX2pzeHMoXCJ0clwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiQ2hhbGxlbmdlZCBWb3RlciBDb3VudCAoQ0gpXCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBjb3VudHlTdW1tYXJ5LmNoYWxsZW5nZWRfdm90ZXJfY291bnQgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBcIlZlcmlmeSBWb3RlciBDb3VudCAoVilcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkudmVyaWZ5X3ZvdGVyX2NvdW50IH0pXSB9KSwgX2pzeHMoXCJ0clwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiQ2FuY2VsZWQgVm90ZXIgQ291bnQgKEMpXCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBjb3VudHlTdW1tYXJ5LmNhbmNlbGVkX3ZvdGVyX2NvdW50IH0pLCBfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogXCJSZWplY3RlZCBWb3RlciBDb3VudCAoUilcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkucmVqZWN0ZWRfdm90ZXJfY291bnQgfSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDIgfSwgeyBjaGlsZHJlbjogXCJWb3RpbmcgU3lzdGVtXCIgfSkpLCBfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDIgfSwgeyBjaGlsZHJlbjogY291bnR5TWV0YWRhdGEudm90aW5nX3N5c3RlbSB9KSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDIgfSwgeyBjaGlsZHJlbjogXCJLZXNoZWwgSGVhdCBNYXAgQ29sb3JcIiB9KSksIF9qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHsgY29sU3BhbjogMiwgY29sb3I6IGNvdW50eU1ldGFkYXRhLmtlc2hlbF9oZWF0bWFwX2NvbG9yIH0sIHsgY2hpbGRyZW46IGNvdW50eU1ldGFkYXRhLmtlc2hlbF9oZWF0bWFwX2NvbG9yIH0pKV0gfSldIH0pXSB9KSkgfSkpLCBfanN4KENhcmQuTGluaywgT2JqZWN0LmFzc2lnbih7IGhyZWY6IGNvdW50eU1ldGFkYXRhLmNlbnN1c191cmwsIHRhcmdldDogXCJfYmxhbmtcIiB9LCB7IGNoaWxkcmVuOiBcIkNlbnN1cyBTb3VyY2VcIiB9KSldIH0pKSB9KSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb3VudHlJbmZvcm1hdGlvbjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGgtaGVhZGVyXCI7XHJcbmV4cG9ydCBjb25zdCBHaG9zdGJ1c3RlcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3QsIHNldFJlZGlyZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSZWFkeSwgc2V0VXNlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcgQ291bnRpZXMgLi4uXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hpZGVEb3dubG9hZEJ1dHRvbiwgc2V0SGlkZURvd25sb2FkQnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgU3RyZWV0IEFkZHJlc3MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUmVnaXN0cmF0aW9uIENvdW50JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5yZWdpc3RyYXRpb25fY291bnQsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQmVkcy9BcHQvTG90cyBRdHknLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmJlZHNfYXB0c19sb3RzX3F0eSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnR5cGUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ByZWNpbmN0JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5wcmVjaW5jdCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTUwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q291bnRpZXMoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGNvdW50eVNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKGNvdW50eVNlbGVjdGVkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICgpID0+ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSkgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvZ2hvc3RidXN0ZXItbG9jYXRpb25zLyR7Y291bnR5TmFtZX1gLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBzZXRMb2NhdGlvbnMocmVzcC5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIkVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eVwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0NvdW50eURyb3Bkb3duTG9hZGluZywgdmFsdWU6IGNvdW50eU5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQ29sLCB7IGNoaWxkcmVuOiBcIlxcdTAwQTBcIiB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgc2l6ZTogJ2xnJywgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0blwiLCBkaXNhYmxlZDogIXJlYWR5Zm9yU2VhcmNoIH0sIHsgY2hpbGRyZW46IFwiR2V0IEdob3N0IExvY2F0aW9uc1wiIH0pKSB9KV0gfSkpIH0pKSwgX2pzeChcImJyXCIsIHt9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW2lzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnJykgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLCAhaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICdTdWNjZXNzJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2hpbGRyZW46IF9qc3goQ1NWTGluaywgT2JqZWN0LmFzc2lnbih7IGhpZGRlbjogaGlkZURvd25sb2FkQnV0dG9uLCBkYXRhOiBsb2NhdGlvbnMsIGZpbGVuYW1lOiBjb3VudHlOYW1lICsgJy1mbGFnZ2VkLWFkZHJlc3Nlcy5jc3YnIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvblwiLCBjb2xvcjogXCJyZWRcIiwgc2l6ZTogJ2xnJyB9LCB7IGNoaWxkcmVuOiBcIkRvd25sb2FkIHJlc3VsdHNcIiB9KSkgfSkpIH0pLCBfanN4KERhdGFUYWJsZSwgeyBleHBhbmRhYmxlUm93czogdHJ1ZSwgZXhwYW5kYWJsZVJvd3NDb21wb25lbnQ6IEV4cGFuZGVkQ29tcG9uZW50KCksIGNvbHVtbnM6IGNvbHVtbnMsIGRhdGE6IGxvY2F0aW9ucywgaGlnaGxpZ2h0T25Ib3ZlcjogdHJ1ZSwgcGFnaW5hdGlvbjogdHJ1ZSwgcGFnaW5hdGlvblBlclBhZ2U6IDEwLCBwYWdpbmF0aW9uVG90YWxSb3dzOiBsb2NhdGlvbnMubGVuZ3RoIH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ0Vycm9yJykgPyBcIkVycm9yIGZldGNoaW5nIHJlY29yZHMuIFBsZWFzZSByZXRyeS5cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIl0gfSldIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEdob3N0YnVzdGVycztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgVm90ZXJJbmZvcm1hdGlvbiBmcm9tICcuL1ZvdGVySW5mb3JtYXRpb24nO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSAnLi4vc2VydmljZXMvYXV0aC1oZWFkZXInO1xyXG5jb25zdCBNeVZvdGluZ0hpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3QsIHNldFJlZGlyZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSZWFkeSwgc2V0VXNlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtxdmZEYXRlcywgc2V0UXZmRGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3F2ZkRhdGUsIHNldFF2ZkRhdGVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBRVkYgRGF0ZSAtLS0gXCIpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIpO1xyXG4gICAgY29uc3QgW3ZvdGVySWQsIHNldFZvdGVySWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdm90ZXJMYXN0TmFtZSwgc2V0Vm90ZXJMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3RlckZpcnN0TmFtZSwgc2V0Vm90ZXJGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdm90ZXJaaXAsIHNldFZvdGVyWmlwXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZvdGVyQ291bnR5LCBzZXRWb3RlckNvdW50eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt2b3RlckluZm8sIHNldFZvdGVySW5mb10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlTWVzc2FnZSwgc2V0UmVzcG9uc2VNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ZvdGVyIElkZW50aWZpY2F0aW9uIE51bWJlcicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudm90ZXJfaWRlbnRpZmljYXRpb25fbnVtYmVyLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ291bnR5IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmNvdW50eV9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRWxlY3Rpb24gRGF0ZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZWxlY3Rpb25fZGF0ZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0lzIEFic2VudGVlIFZvdGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmlzX2Fic2VudGVlX3ZvdGVyLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICBdLCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgICAgc2V0VXNlclJlYWR5KHRydWUpO1xyXG4gICAgICAgIGxldCB1bm1vdW50ZWQgPSBmYWxzZTtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9xdmZkYXRlcycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChxdmZEYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRRdmZEYXRlcyhxdmZEYXRlcyk7XHJcbiAgICAgICAgICAgIHNldFF2ZkRhdGUocXZmRGF0ZXNbMF0udGFibGVfbmFtZSk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IFt2b3RlckRhdGEsIHNldFZvdGVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgcGFnZSBmcm9tIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHVybEJhc2UgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS92b3RpbmdoaXN0b3J5LyR7cXZmRGF0ZX1gO1xyXG4gICAgICAgIGxldCB1cmxTdWZmaXggPSAnJztcclxuICAgICAgICBpZiAodm90ZXJJZCkge1xyXG4gICAgICAgICAgICB1cmxTdWZmaXggPSBgL3ZvdGVyaWQ6JHt2b3RlcklkfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodm90ZXJDb3VudHkpIHtcclxuICAgICAgICAgICAgICAgIHVybFN1ZmZpeCA9IGAvdm90ZXJDb3VudHk6JHt2b3RlckNvdW50eX0vdm90ZXJaaXA6JHt2b3RlclppcH0vdm90ZXJMYXN0TmFtZToke3ZvdGVyTGFzdE5hbWV9L3ZvdGVyRmlyc3ROYW1lOiR7dm90ZXJGaXJzdE5hbWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KHVybEJhc2UgKyB1cmxTdWZmaXgsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIC8vY29uc3Qgdm90ZXJJbmZvOiBWb3RlclR5cGUgPSB7Y291bnR5X25hbWU6IFwiTElWSU5HU1RPTlwiLCBsYXN0X25hbWU6IFwiTU5CQ1wiLCBmaXJzdF9uYW1lOiBcIkFCSEpBQkRcIiwgbWlkZGxlX25hbWU6IFwiS1wiLCB2b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXI6IFwiOTQyMDY0MlwifTtcclxuICAgICAgICAgICAgc2V0Vm90ZXJJbmZvKHZvdGVySW5mbyk7XHJcbiAgICAgICAgICAgIHNldFZvdGVySWQodm90ZXJJZCk7XHJcbiAgICAgICAgICAgIHNldFZvdGVyRGF0YShyZXNwLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3IhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3goRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm1Hcm91cCwgT2JqZWN0LmFzc2lnbih7IHJvbGU6IFwiZm9ybVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhSb3csIHsgY2hpbGRyZW46IFtfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJRVkYgRGF0ZVwiLCBfanN4KEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzTG9hZGluZywgdmFsdWU6IHF2ZkRhdGUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0UXZmRGF0ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IHF2ZkRhdGVzLm1hcCgocXZmKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHF2Zi50YWJsZV9uYW1lIH0sIHsgY2hpbGRyZW46IHF2Zi50YWJsZV9uYW1lIH0pLCBxdmYudGFibGVfbmFtZSkpKSB9KSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJWb3RlciBJZFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJJZCwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlcklkKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFZvdGVyIElkXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgXCItLS0gT1IgLS0tXCIsIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlppcFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJaaXAsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJaaXAoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWmlwXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiTGFzdCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB2b3Rlckxhc3ROYW1lLCBvbkNoYW5nZTogKGUpID0+IHNldFZvdGVyTGFzdE5hbWUoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTGFzdCBOYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiRmlyc3QgTmFtZVwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJGaXJzdE5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgRmlyc3QgbmFtZVwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eVwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogdm90ZXJDb3VudHksIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJDb3VudHkoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgQ291bnR5XCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiB9LCB7IGNoaWxkcmVuOiBcIkdldCBNeSBWb3RpbmcgSGlzdG9yeVwiIH0pKSB9KV0gfSkpIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFNwaW5uZXIsIE9iamVjdC5hc3NpZ24oeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwic3Itb25seVwiIH0sIHsgY2hpbGRyZW46IFwiTG9hZGluZy4uLlwiIH0pKSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdm90ZXJEYXRhLmxlbmd0aCA+IDAgPyBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFZvdGVySW5mb3JtYXRpb24sIHsgc3RyaW5nUHJvcDogdm90ZXJJZCB9KSwgX2pzeChEYXRhVGFibGUsIHsgY29sdW1uczogY29sdW1ucywgZGF0YTogdm90ZXJEYXRhIH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2pzeChcInNwYW5cIiwge30pIH0pIH0pXSB9KSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IERyb3Bkb3duID0gKHsgbG9hZGluZywgbGFiZWwsIHZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW2xhYmVsLCBfanN4KFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogbG9hZGluZywgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2UgfSwgeyBjaGlsZHJlbjogb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBvcHRpb24udmFsdWUgfSwgeyBjaGlsZHJlbjogb3B0aW9uLmxhYmVsIH0pLCBvcHRpb24udmFsdWUpKSkgfSkpXSB9KSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE15Vm90aW5nSGlzdG9yeTtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5leHBvcnQgY29uc3QgTmV3cyA9ICgpID0+IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJJbiBvdGhlciBuZXdzIC4uLlwiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiaHR0cHM6Ly9ydW1ibGUuY29tL3YxaWo3dGwtZWxlY3Rpb24tZGVjZXJ0aWZpY2F0aW9uLWluY29taW5nLXRoYW5rcy10by1lbGVjdGlvbi1pbnRlZ3JpdHktZm9yY2UuaHRtbFwiIH0pXSB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuLy9pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLypjb25zdCBHcmlkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDZlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDZlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI1cHgsIGF1dG8pO1xyXG5gOyAqL1xyXG5leHBvcnQgY29uc3QgUmVzb3VyY2VzID0gKCkgPT4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJXZWIgUmVzb3VyY2VzXCIgfSkgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZXM7XHJcbiIsImltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgVm90ZXJJbmZvcm1hdGlvbiA9ICh7IHN0cmluZ1Byb3AgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Bhc3NlZEluU3RyaW5nUHJvcFZhbHVlLCBzZXRQYXNzZWRJblN0cmluZ1Byb3BWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXNzZWRJblN0cmluZ1Byb3BWYWx1ZShzdHJpbmdQcm9wKTtcclxuICAgIH0sIFtzdHJpbmdQcm9wXSk7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtcIlZvdGVyIElkZW50aWZpY2F0aW9uIE51bWJlcjogXCIsIHN0cmluZ1Byb3BdIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVm90ZXJJbmZvcm1hdGlvbjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHBTaWRlQmFyIGZyb20gJy4vQXBwU2lkZUJhcic7XHJcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSBcIi4vc2VydmljZVdvcmtlclwiO1xyXG5SZWFjdERPTS5yZW5kZXIoX2pzeChCcm93c2VyUm91dGVyLCB7IGNoaWxkcmVuOiBfanN4KEFwcFNpZGVCYXIsIHt9KSB9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=