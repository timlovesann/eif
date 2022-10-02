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
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n    DEMO STYLE\r\n*/\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: rgb(60, 147, 206);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 340px;\r\n    max-width: 340px;\r\n    background: #302929;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 120px;\r\n    max-width: 120px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h4,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    -ms-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #4e4143;\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    color:rgb(235, 221, 221);\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #830201;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: rgb(255, 244, 244);\r\n    background: #4c4d4e;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #4e4e50;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.countdown-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem\r\n  }\r\n  \r\n  .countdown-container > form {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .countdown-container > form > label {\r\n    margin-right: 1rem;\r\n    margin-left: 5rem;\r\n  }\r\n  \r\n  .expired-notice {\r\n    text-align: center;\r\n    padding: 2rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    margin: 0.5rem;\r\n    background-color: #ececec;\r\n    box-shadow: 10px 10px #cfc9c9;\r\n  }\r\n  \r\n  .expired-notice > span {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    color: red;\r\n  }\r\n  \r\n  .expired-notice > p {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: right;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 2.25rem;\r\n    line-height: 1.75rem;\r\n    padding: 0.5rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    text-decoration: none;\r\n    color: #000;\r\n    background-color: #ececec;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .show-counter .countdown {\r\n    line-height: 1.25rem;\r\n    padding: 0 0.75rem 0 0.75rem;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .show-counter .countdown.danger {\r\n    color: #ff0000;\r\n  }\r\n  \r\n  .show-counter .countdown > p {\r\n    margin: 0;\r\n  }\r\n  \r\n  .show-counter .countdown > span {\r\n    text-transform: uppercase;\r\n    font-size: 1.50rem;\r\n    line-height: 2rem;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n    .show-counter .countdown > span {\r\n      font-size: 1rem;\r\n      line-height: 1rem;\r\n    }\r\n  \r\n    .show-counter .countdown-link { \r\n      font-size: 1.5rem;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/AppSidebar.css"],"names":[],"mappings":"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","sourcesContent":["/*\r\n    DEMO STYLE\r\n*/\r\n\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: rgb(60, 147, 206);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 340px;\r\n    max-width: 340px;\r\n    background: #302929;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 120px;\r\n    max-width: 120px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h4,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    -ms-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #4e4143;\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    color:rgb(235, 221, 221);\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #830201;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: rgb(255, 244, 244);\r\n    background: #4c4d4e;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #4e4e50;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.countdown-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem\r\n  }\r\n  \r\n  .countdown-container > form {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .countdown-container > form > label {\r\n    margin-right: 1rem;\r\n    margin-left: 5rem;\r\n  }\r\n  \r\n  .expired-notice {\r\n    text-align: center;\r\n    padding: 2rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    margin: 0.5rem;\r\n    background-color: #ececec;\r\n    box-shadow: 10px 10px #cfc9c9;\r\n  }\r\n  \r\n  .expired-notice > span {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    color: red;\r\n  }\r\n  \r\n  .expired-notice > p {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: right;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 2.25rem;\r\n    line-height: 1.75rem;\r\n    padding: 0.5rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    text-decoration: none;\r\n    color: #000;\r\n    background-color: #ececec;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .show-counter .countdown {\r\n    line-height: 1.25rem;\r\n    padding: 0 0.75rem 0 0.75rem;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .show-counter .countdown.danger {\r\n    color: #ff0000;\r\n  }\r\n  \r\n  .show-counter .countdown > p {\r\n    margin: 0;\r\n  }\r\n  \r\n  .show-counter .countdown > span {\r\n    text-transform: uppercase;\r\n    font-size: 1.50rem;\r\n    line-height: 2rem;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n    .show-counter .countdown > span {\r\n      font-size: 1rem;\r\n      line-height: 1rem;\r\n    }\r\n  \r\n    .show-counter .countdown-link { \r\n      font-size: 1.5rem;\r\n    }\r\n  }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".info-card {\r\n    background-color: rgb(236, 217, 167);\r\n    color: black;\r\n}\r\n.a {\r\n    color: blue;\r\n}", "",{"version":3,"sources":["webpack://./src/components/card.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,YAAY;AAChB;AACA;IACI,WAAW;AACf","sourcesContent":[".info-card {\r\n    background-color: rgb(236, 217, 167);\r\n    color: black;\r\n}\r\n.a {\r\n    color: blue;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/CountdownTimer.js":
/*!******************************************!*\
  !*** ./src/components/CountdownTimer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _DateTimeDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateTimeDisplay */ "./src/components/DateTimeDisplay.js");
/* harmony import */ var _hooks_useCountdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCountdown */ "./src/hooks/useCountdown.js");



const ExpiredNotice = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "expired-notice" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Expired!!!" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Please select a future date and time." })] })));
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "show-counter" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DateTimeDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], { value: days, type: 'Days', isDanger: days <= 3 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: ":" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DateTimeDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], { value: hours, type: 'Hours', isDanger: false }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: ":" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DateTimeDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], { value: minutes, type: 'Mins', isDanger: false }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: ":" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DateTimeDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], { value: seconds, type: 'Seconds', isDanger: false })] })));
};
const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = (0,_hooks_useCountdown__WEBPACK_IMPORTED_MODULE_2__.useCountdown)(targetDate);
    if (days + hours + minutes + seconds <= 0) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExpiredNotice, {});
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShowCounter, { days: days, hours: hours, minutes: minutes, seconds: seconds }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);


/***/ }),

/***/ "./src/components/DateTimeDisplay.js":
/*!*******************************************!*\
  !*** ./src/components/DateTimeDisplay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: isDanger ? 'countdown danger' : 'countdown' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: value }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: type })] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTimeDisplay);


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
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", Object.assign({ className: "jumbotron" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Release v10022022" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Features Supported" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Ghostbusting Location Report: Download report of suspect locations canvassed across Michigan" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "My Voting History: Examine your voting history for anomalies" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Download Voter roll File: Download jurisdiction level voter file with voting history included." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Download Voter roll File: County leads can download county level voter file with voting history included." })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Known Issues" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "If search fails or it looks like the progress spinner is stuck in a loop it is very likely that your session has timed out." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Workaround: Sign out by clicking log out at the top right and sign back in." })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Upcoming updates" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Fix known issues if they still persist" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Add password complexity and confirm password field on Sign up screen" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["Update Ghostbusting criteria to pull following criteria", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "001_EXT_NMBR_MSNG: The registration has an Index but does not have a number where other registrations with the same address include numbers or a letter as required by law " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "003_MISC_LAW: An EIF team member has identified this address as a non-residential location, Prison, RV Park-Seasonal, VirtualMailbox, All Camps-Seasonal, All Cemeteries. " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "004_ZipCode_Mismatch: Registration does not match a standard zip code provided by USPS." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "004_ZipCode_POBOX: Registration matches that of a standard zip code provided by USPS for a PO Box." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "005_REG_DATE_BKDT: New registrations are flagged when they are back-dated prior to their creation." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "007_NAME_GONE: The Name matches a name removed in the past." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "007_VoterID_GONE: The voterID matches a voterID removed in the past." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["008_NCOA_Date_JUR: The National Change of Address data indicates this individual ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("font", Object.assign({ color: "red" }, { children: "moved outside of their JURISDICTION" })), " 60 days PRIOR to voting in their former precinct."] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["008_NCOA_Date_CTY: The National Change of Address data indicates this individual ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("font", Object.assign({ color: "red" }, { children: "moved outside of their COUNTY" })), " 60 days PRIOR to voting in their former precinct."] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["008_NCOA_Date_ST: The National Change of Address data indicates this individual ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("font", Object.assign({ color: "red" }, { children: "moved outside of MICHIGAN" })), "60 days PRIOR to voting in their former precinct."] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "008_NCOA_Moved: The National Change of Address data indicates this individual recently moved." })] })] })] })] })) })) }));
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
                this.props.history.push("/home");
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

/***/ "./src/hooks/useCountdown.js":
/*!***********************************!*\
  !*** ./src/hooks/useCountdown.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCountdown": () => (/* binding */ useCountdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
    const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(countDownDate - new Date().getTime());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [countDownDate]);
    return getReturnValues(countDown);
};
const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
};



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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
/* harmony import */ var _components_DownloadsPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/DownloadsPage */ "./src/components/DownloadsPage.tsx");
/* harmony import */ var _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/CountdownTimer */ "./src/components/CountdownTimer.js");



















//import VoterData from './components/VoterData';


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
        const michiganMidtermElectionDate = new Date('2022-11-08T07:00:00-04:00').getTime();
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", Object.assign({ id: "sidebar" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "sidebar-header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Election Integrity Force" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "EIF" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "list-unstyled components" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#homeSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-user-secret" }), "\u00A0 Audit"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "collapse list-unstyled", id: "homeSubmenu" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/my-voting-history", className: "nav-link" }, { children: "Voting History" })) })) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#downloadPageSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-download" }), "\u00A0 Downloads"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "collapse list-unstyled", id: "downloadPageSubmenu" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/voter-data", className: "nav-link" }, { children: "Voter Data" })) })) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#pageSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-glasses" }), "\u00A0 Reports"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "collapse list-unstyled", id: "pageSubmenu" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/ghostbusters-by-county", className: "nav-link" }, { children: "Ghostbusting Locations" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/challenge-list", className: "nav-link" }, { children: "Challenge List" })) }))] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/contact", className: "nav-link" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-address-card" }), "\u00A0 Contact"] })) })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ id: "content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", Object.assign({ className: "navbar navbar-expand-lg navbar-light bg-light" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container-fluid" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: "button", id: "sidebarCollapse", className: "navbar-btn" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-align-left" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "btn btn-dark d-inline-block d-lg-none ml-auto", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-align-justify" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["\u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CountdownTimer__WEBPACK_IMPORTED_MODULE_19__["default"], { targetDate: michiganMidtermElectionDate })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "collapse navbar-collapse", id: "navbarSupportedContent" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "nav navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/", className: "navbar-brand" }, { children: "Home" })) })), showAdminBoard && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/admin", className: "navbar-brand" }, { children: "Admin" })) })))] })) })), currentUser ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/profile", className: "navbar-brand" }, { children: currentUser.username })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: "/login", className: "navbar-brand", onClick: this.logOut }, { children: "LogOut" })) }))] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/login", className: "navbar-brand" }, { children: "Login" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/register", className: "navbar-brand" }, { children: "Sign Up" })) }))] })))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "line" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Switch, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: ["/", "/home"], component: _components_home_component__WEBPACK_IMPORTED_MODULE_8__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: "/login", component: _components_login_component__WEBPACK_IMPORTED_MODULE_9__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: "/register", component: _components_register_component__WEBPACK_IMPORTED_MODULE_10__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: "/profile", component: _components_profile_component__WEBPACK_IMPORTED_MODULE_3__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/ghostbusters-by-county", component: _components_Ghostbusters__WEBPACK_IMPORTED_MODULE_5__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/challenge-list", component: _components_ChallengeList__WEBPACK_IMPORTED_MODULE_17__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/my-voting-history", component: _components_MyVotingHistory__WEBPACK_IMPORTED_MODULE_4__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/voter-data", component: _components_DownloadsPage__WEBPACK_IMPORTED_MODULE_18__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/audit-my-address", component: _components_AuditMyAddress__WEBPACK_IMPORTED_MODULE_6__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/about", component: _components_About__WEBPACK_IMPORTED_MODULE_7__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/resources", component: _components_Resources__WEBPACK_IMPORTED_MODULE_11__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/news", component: _components_News__WEBPACK_IMPORTED_MODULE_15__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/contact", component: _components_Contact__WEBPACK_IMPORTED_MODULE_16__["default"] })] }) }))] }))] })));
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
            setHideDownloadButton(true);
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
        })
            .catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsJurisdictionDropdownLoading(false);
        });
    }
    function validateJurisdictionSelection(jurisdictionSelected) {
        if (jurisdictionSelected == "0") {
            setReadyForSearch(false);
        }
        else {
            setReadyForSearch(true);
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
            setPrecinctName("0");
        })
            .catch((err) => {
            console.log(err);
        });
    }
    function validatePrecinctSelection(precinctSelected) {
        if (precinctSelected == "0") {
            setReadyForSearch(true);
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
        setHideDownloadButton(true);
        let challenge_list_url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/challenge-list/${countyName}/${jurisdictionName}/`;
        if (precinctName != "0") {
            challenge_list_url = challenge_list_url + `${precinctName}`;
        }
        let endpoints = [
            {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/county-summary/${countyName}`,
            {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/county-metadata/${countyName}`,
            challenge_list_url
        ];
        const countySummaryPromise = new Promise(async (resolve, reject) => {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get(endpoints[0])
                .then(resp => {
                if (resp.status === 200) {
                    setCountySummaryInfo(resp.data);
                    resolve(resp);
                }
                else {
                    reject(resp.status);
                }
            })
                .catch(error => {
                if (error.response.status === 403 || error.response.status === 401) {
                    setRedirect("/login");
                }
                reject(error.response.responseMessage);
            });
        });
        const countyMetadataPromise = new Promise(async (resolve, reject) => {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get(endpoints[1])
                .then(resp => {
                if (resp.status === 200) {
                    setCountyMetadataInfo(resp.data[0]);
                    resolve(resp);
                }
                else {
                    reject(resp.status);
                }
            })
                .catch(error => {
                if (error.response.status === 403 || error.response.status === 401) {
                    setRedirect("/login");
                }
                reject(error.response.responseMessage);
            });
        });
        const challengeListPromise = new Promise((resolve, reject) => {
            axios__WEBPACK_IMPORTED_MODULE_2___default().get(endpoints[2], { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() })
                .then(resp => {
                if (resp.status === 200) {
                    setChallengeableVoters(resp.data);
                    console.log(resp.data.length);
                    if (resp.data.length > 0) {
                        setHideDownloadButton(false);
                    }
                    resolve(resp);
                }
                else {
                    reject(resp.status);
                }
            })
                .catch(error => {
                if (error.response.status === 403 || error.response.status === 401) {
                    setRedirect("/login");
                }
                reject(error.response.responseMessage);
            });
        });
        const allPromises = Promise.allSettled([countySummaryPromise, countyMetadataPromise, challengeListPromise]);
        allPromises.then((allResults) => allResults.forEach((result) => {
            if (result.status === 'fulfilled') {
                setResponseMessage("Success");
            }
            if (result.status === 'rejected') {
                setResponseMessage(result.reason);
            }
            setIsLoading(false);
        }));
    };
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County (required)", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ required: true, disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [isJurisdictionDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Jurisdiction (required)", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ required: true, disabled: isJurisdictionDropdownLoading, value: jurisdictionName, onChange: (e) => validateJurisdictionSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Jurisdiction --- " })), jurisdictions.map((jurisdiction) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: jurisdiction.jurisdiction_name }, { children: jurisdiction.jurisdiction_name }), jurisdiction.jurisdiction_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [isPrecinctDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Precinct", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Select, Object.assign({ disabled: isPrecinctDropdownLoading, value: precinctName, onChange: (e) => validatePrecinctSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Precinct --- " })), precincts.map((precinct) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: precinct.precinct }, { children: precinct.precinct }), precinct.precinct)))] }))] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn", disabled: !readyforSearch }, { children: "Get Precinct Challenge List" })) })] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [isLoading ?
                            (responseMessage === '') ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], { animation: "border", variant: 'danger', role: "status" })
                                : ""
                            : "", !isLoading ?
                            (responseMessage === 'Success') ?
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CountyInformation__WEBPACK_IMPORTED_MODULE_7__["default"], { countySummary: countySummaryInfo, countyMetadata: countyMetadataInfo }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Latest Ghostbusting updates from 2022-09-16 have been applied." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, Object.assign({ hidden: hideDownloadButton, data: challengeableVoters, filename: countyName + '-' + jurisdictionName + '-' + precinctName + '-challenge-list.csv' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({ className: "button", color: "red", size: 'lg' }, { children: "Download results" })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), expandOnRowClicked: true, columns: columns, data: challengeableVoters, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: challengeableVoters.length, responsive: true, striped: true })] })
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ bg: "light-blue" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, Object.assign({ style: { color: "black" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Title, { children: [countySummary.county_name, " County Summary per September 2022 QVF"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Text, Object.assign({ style: { color: "black" } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({ striped: true, bordered: true, hover: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Total Registered Voter Count" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.total_registered_voter_count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Active Registered Voter Count (A)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.active_registered_voter_count })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Challenged Voter Count (CH)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.challenged_voter_count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Verify Voter Count (V)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.verify_voter_count })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Canceled Voter Count (C)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.canceled_voter_count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "Rejected Voter Count (R)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: countySummary.rejected_voter_count })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2 }, { children: "Voting System" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2 }, { children: countyMetadata.voting_system }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2 }, { children: "Keshel Heat Map Color" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({ colSpan: 2, color: countyMetadata.keshel_heatmap_color }, { children: countyMetadata.keshel_heatmap_color }))] })] }) }) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Link, Object.assign({ color: 'blue', href: countyMetadata.census_url, target: "_blank" }, { children: ["Census Source: ", countyMetadata.census_url] }))] })) })) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountyInformation);


/***/ }),

/***/ "./src/components/DownloadsPage.tsx":
/*!******************************************!*\
  !*** ./src/components/DownloadsPage.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadsPage": () => (/* binding */ DownloadsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DownloadService */ "./src/services/DownloadService.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);








const DownloadsPage = () => {
    const initialDownloadRequestState = {
        qvf: '',
        county_name: '',
        jurisdiction_name: '',
        created_at: '',
        requested_by: '',
        status: '',
        request_id: null
    };
    const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userReady, setUserReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    //const [currentUser, setCurrentUser] = useState({ username: "" });
    const [isQvfDateLoading, setIsQvfDateLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSearchLoading, setIsSearchLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [qvfDates, setQvfDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [qvfDate, setQvfDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select QVF Date --- ");
    const [isCountyDropdownLoading, setIsCountyDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [counties, setCounties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [countyName, setCountyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select County --- ");
    const [isJurisdictionDropdownLoading, setIsJurisdictionDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [jurisdictions, setJurisdictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [jurisdictionName, setJurisdictionName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select Jurisdiction --- ");
    const [jurisdictionOptional, setJurisdictionOptional] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [downloadRequest, setDownloadRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialDownloadRequestState);
    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [downloading, setDownloading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [readyforSubmit, setReadyForSubmit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [downloadRequests, setDownloadRequests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
        {
            name: 'QVF',
            selector: (row) => row.qvf,
            sortable: true,
            width: '300px',
        },
        {
            name: 'County Name',
            selector: (row) => row.county_name,
            sortable: true,
            width: '300px',
        },
        {
            name: 'Jurisdiction Name',
            selector: (row) => row.jurisdiction_name,
            sortable: true,
            width: '300px',
        },
        {
            name: 'File Generation Status',
            selector: (row) => row.status,
            sortable: true,
            width: '300px',
        },
    ], []);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDownloadRequest(Object.assign(Object.assign({}, downloadRequest), { [name]: value }));
    };
    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setDownloadRequest(Object.assign(Object.assign({}, downloadRequest), { [name]: value }));
    };
    function validateQvfSelection(qvfSelected) {
        if (qvfSelected === "") {
            console.log("Invalid qvf selected: " + qvfSelected);
        }
        else {
            setQvfDate(qvfSelected);
            setDownloadRequest(Object.assign(Object.assign({}, downloadRequest), { "qvf": qvfSelected }));
            //fetchCounties(qvfSelected);
        }
    }
    function validateCountySelection(countySelected) {
        if (countySelected === "") {
            setCountyName(countySelected);
            setReadyForSubmit(false);
        }
        else {
            setCountyName(countySelected);
            setDownloadRequest(Object.assign(Object.assign({}, downloadRequest), { "county_name": countySelected }));
            fetchJurisdictions(countySelected);
        }
    }
    function fetchJurisdictions(countyName) {
        setIsJurisdictionDropdownLoading(true);
        if (jurisdictionOptional) {
            setReadyForSubmit(true);
        }
        const url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/jurisdictions/' + countyName;
        fetch(url)
            .then((res) => res.json())
            .then((jurisdictions) => {
            setJurisdictions(jurisdictions);
        })
            .catch((err) => {
            console.log(err);
        })
            .finally(() => {
            setIsJurisdictionDropdownLoading(false);
        });
    }
    function validateJurisdictionSelection(jurisdictionSelected) {
        if (jurisdictionSelected === "") {
            if (!jurisdictionOptional) {
                console.log("Invalid jurisdiction selected: " + jurisdictionSelected);
            }
            else {
                setReadyForSubmit(true);
            }
        }
        else {
            setReadyForSubmit(true);
            setJurisdictionName(jurisdictionSelected);
            setDownloadRequest(Object.assign(Object.assign({}, downloadRequest), { "jurisdiction_name": jurisdictionSelected }));
        }
    }
    const retrieveDownloadRequests = () => {
        _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].getDownloadRequests()
            .then((response) => {
            setDownloadRequests(response.data);
            console.log(response.data);
        })
            .catch((e) => {
            console.log(e);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
        if (!currentUser) {
            setRedirect("/login");
        }
        setCurrentUser(currentUser);
        if (currentUser.roles.includes('ROLE_COUNTY-LEAD')) {
            setJurisdictionOptional(true);
        }
        setUserReady(true);
        fetch({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/qvfdates')
            .then((res) => res.json())
            .then((qvfDates) => {
            setQvfDates(qvfDates);
            setIsQvfDateLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
        _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].getDownloadRequests()
            .then((response) => {
            setDownloadRequests(response.data);
        })
            .catch(error => {
            if (error.response.status === 403 || error.response.status === 401) {
                setRedirect("/login");
            }
        });
        const abortController = new AbortController();
        void async function fetchCounties() {
            try {
                const url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/counties';
                const response = await fetch(url, { signal: abortController.signal });
                setCounties(await response.json());
                setIsCountyDropdownLoading(false);
            }
            catch (error) {
                console.log('error', error);
            }
        }();
        return () => {
            abortController.abort();
        };
    }, []);
    const saveDownloadRequest = async (event) => {
        event.preventDefault();
        _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].createDownloadRequest(downloadRequest)
            .then((response) => {
            setDownloadRequest({
                qvf: response.data.qvf,
                county_name: response.data.county_name,
                jurisdiction_name: response.data.jurisdiction_name,
                created_at: null,
                requested_by: null,
                status: null,
                request_id: null
            });
            setSubmitted(true);
        })
            .then(() => {
            _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].getDownloadRequests()
                .then((response) => {
                setDownloadRequests(response.data);
            })
                .catch(error => {
                if (error.response.status === 403 || error.response.status === 401) {
                    setRedirect("/login");
                }
            });
        })
            .catch(e => {
            if (e.response.status === 403 || e.response.status === 401) {
                setRedirect("/login");
            }
        });
    };
    function handleDownload(data) {
        setDownloading(true);
        _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].downloadFile(data)
            .then(response => new Blob([response.data]))
            .then(blob => {
            let cn = data.county_name.replaceAll(' ', '-');
            let jn = data.jurisdiction_name.replaceAll(' ', '-');
            (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(blob, data.request_id + "_" + data.qvf + "_" + cn + "_" + jn + ".csv");
        })
            .catch(error => {
            if (error.response.status === 403 || error.response.status === 401) {
                setRedirect("/login");
            }
        })
            .finally(() => {
            setDownloading(false);
        });
    }
    const ExpandedComponent = () => ({ data }) => {
        if (data.status === 'DOWNLOAD') {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(data, null, 2) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "button", onClick: () => handleDownload(data), disabled: downloading, className: "btn" }, { children: "Download" }))] }));
        }
        else {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(data, null, 2) }) }));
        }
        ;
    };
    function newDownloadRequest() {
        setDownloadRequest(initialDownloadRequestState);
        setSubmitted(false);
    }
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ onSubmit: saveDownloadRequest }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["QVF Date", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ required: true, id: "qvf", name: "qvf", disabled: isQvfDateLoading, value: qvfDate, onChange: (e) => validateQvfSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select QVF Date --- " })), qvfDates.map((qvf) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: qvf.table_name }, { children: qvf.table_name.split('_')[1] }), qvf.table_name)))] }))] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                    : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ required: true, id: "countyName", name: "countyName", disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isJurisdictionDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                    : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Jurisdiction", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ required: !jurisdictionOptional, id: "jurisdictionName", name: "jurisdictionName", disabled: isJurisdictionDropdownLoading, value: jurisdictionName, onChange: (e) => validateJurisdictionSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Jurisdiction --- " })), jurisdictions.map((jurisdiction) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: jurisdiction.jurisdiction_name }, { children: jurisdiction.jurisdiction_name }), jurisdiction.jurisdiction_name)))] }))] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fa fa-info-circle", "aria-hidden": "true" }), " Only one request is supported per visit to limit costs associated with computing workloads. Thank you for your understanding."] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "Files are generated in order of receipt at the 17th second of every minute currently. This will change to once a day to limit computing workload costs." }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "UNLIMITED DOWNLOADS" }), " are reserved for our EIF Volunteers and financial contributors."] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "submit", disabled: !readyforSubmit || submitted, className: "btn" }, { children: "I Understand. Generate File." })) })] })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Downloads Requested" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), expandOnRowClicked: true, columns: columns, data: downloadRequests, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: downloadRequests.length, responsive: true, striped: true })] }) })] })));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadsPage);


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
    const [emptyLocationDataMessage, setEmptyLocationDataMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
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
        if (countySelected === "") {
            setReadyForSearch(false);
        }
        else {
            setReadyForSearch(true);
        }
        setCountyName(countySelected);
        setLocations([]);
        setHideDownloadButton(true);
        setEmptyLocationDataMessage("");
    }
    const ExpandedComponent = () => ({ data }) => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(data, null, 2) }) }));
    };
    const submitForm = async (event) => {
        // Preventing the page from reloading
        event.preventDefault();
        setIsLoading(true);
        setResponseMessage("");
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/ghostbuster-locations/${countyName}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() })
            .then(resp => {
            if (resp.status === 200) {
                setLocations(resp.data);
                if (resp.data.length > 0) {
                    setHideDownloadButton(false);
                }
                if (resp.data.length === 0) {
                    setEmptyLocationDataMessage(`No Ghostbusting locations found for ${countyName}`);
                }
                setResponseMessage("Success");
            }
            else {
                setHideDownloadButton(true);
            }
        })
            .catch(error => {
            if (error.response.status === 403 || error.response.status === 401) {
                setRedirect("/login");
            }
        })
            .finally(() => {
            setIsLoading(false);
        });
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
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, Object.assign({ hidden: hideDownloadButton, data: locations, filename: countyName + '-flagged-addresses.csv' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ className: "button", color: "red", size: 'lg' }, { children: "Download results" })) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), columns: columns, data: locations, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: locations.length, noDataComponent: emptyLocationDataMessage })] })
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
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var _services_auth_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth-header */ "./src/services/auth-header.js");










const MyVotingHistory = () => {
    const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [summaryCallComplete, setSummaryCallComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [historyCallComplete, setHistoryCallComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userReady, setUserReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ username: "" });
    const [qvfDates, setQvfDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [qvfDate, setQvfDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select QVF --- ");
    const [isCountyDropdownLoading, setIsCountyDropdownLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [counties, setCounties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [countyName, setCountyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select County --- ");
    const [readyforSearch, setReadyForSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [voterLastName, setVoterLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterFirstName, setVoterFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterYearOfBirth, setVoterYearOfBirth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [voterZip, setVoterZip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [voterSummary, setVoterSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [voterHistory, setVoterHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [
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
            name: 'Is Absentee Voter',
            selector: (row) => row.is_absentee_voter,
            sortable: true
        },
    ], []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const currentUser = _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrentUser();
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
            setQvfDate(" --- Select QVF Date --- ");
            setIsLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
        const abortController = new AbortController();
        void async function fetchCounties() {
            try {
                const url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/counties';
                const response = await fetch(url, { signal: abortController.signal });
                setCounties(await response.json());
                setIsCountyDropdownLoading(false);
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
        setResponseMessage('');
        if (countySelected === "") {
            setReadyForSearch(false);
        }
        else {
            setCountyName(countySelected);
        }
    }
    const submitForm = async (event) => {
        // Preventing the page from reloading
        event.preventDefault();
        setIsLoading(true);
        const voterSummaryPromise = new Promise(async (resolve, reject) => {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/voter-summary/${qvfDate}/${countyName}/${voterZip}/${voterLastName}/${voterFirstName}/${voterYearOfBirth}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() })
                .then(async (resp) => {
                if (resp.status === 200) {
                    setVoterSummary(resp.data[0]);
                    if (resp.data.length === 1) {
                        await axios__WEBPACK_IMPORTED_MODULE_2___default().get({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + `/api/voter-history/${qvfDate}/${resp.data[0].voter_identification_number}`, { headers: (0,_services_auth_header__WEBPACK_IMPORTED_MODULE_6__["default"])() })
                            .then(respHistory => {
                            if (respHistory.status === 200) {
                                setVoterHistory(respHistory.data);
                            }
                        }).catch(error => {
                            console.log(error);
                            if (error.response.status === 403 || error.response.status === 401) {
                                setRedirect("/login");
                            }
                        });
                        setIsLoading(false);
                    }
                    resolve(resp);
                }
                else {
                    reject(resp.status);
                }
            })
                .catch(error => {
                if (error.response.status === 403 || error.response.status === 401) {
                    setRedirect("/login");
                }
                reject(error.response.status);
            });
        });
        const allPromises = Promise.allSettled([voterSummaryPromise]);
        allPromises.then((allResults) => allResults.forEach((result) => {
            if (result.status === 'fulfilled') {
                setResponseMessage("Success");
                setSummaryCallComplete(true);
                setHistoryCallComplete(true);
            }
            if (result.status === 'rejected') {
                setResponseMessage(result.reason);
            }
            setIsLoading(false);
        }));
    };
    if (redirect) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, { to: redirect });
    }
    else {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["QVF Date", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ disabled: isLoading, value: qvfDate, onChange: (e) => setQvfDate(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { children: " --- Select QVF --- " }), qvfDates.map((qvf) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: qvf.table_name }, { children: qvf.table_name.split('_')[1] }), qvf.table_name)))] }))] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                    : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-lg-24" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ required: true, disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] }) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "col-lg-9" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Zip", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, minLength: 5, maxLength: 5, value: voterZip, onChange: (e) => setVoterZip(e.target.value), type: "text", placeholder: "Enter Zip", className: "input" })] }) })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Last Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, minLength: 1, maxLength: 25, value: voterLastName, onChange: (e) => setVoterLastName(e.target.value), type: "text", placeholder: "Enter Last Name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["First Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, minLength: 1, maxLength: 20, value: voterFirstName, onChange: (e) => setVoterFirstName(e.target.value), type: "text", placeholder: "Enter First name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Year of Birth", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, minLength: 4, maxLength: 4, value: voterYearOfBirth, onChange: (e) => setVoterYearOfBirth(e.target.value), type: "text", placeholder: "Enter Year of Birth", className: "input" })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn" }, { children: "Get My Voting History" })) })] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isLoading ?
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({ animation: "border", variant: 'danger', role: "status" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "sr-only" }, { children: "Loading..." })) }))
                            : voterSummary ?
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({ className: "info-card" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Body, Object.assign({ style: { color: "black" } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Title, { children: voterSummary.voter_full_name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Subtitle, { children: qvfDate }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Text, Object.assign({ style: { color: "black" } }, { children: ["Registration Date: ", voterSummary.registration_date, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Voter Identification Number: ", voterSummary.voter_identification_number, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Year of birth: ", voterSummary.year_of_birth, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Address: ", voterSummary.full_address, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})] }))] })) }))
                                : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (summaryCallComplete && voterSummary === undefined) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["No record found for criteria: ", qvfDate, " ", countyName, " ", voterZip, " ", voterLastName, " ", voterFirstName, " ", voterYearOfBirth] })
                            : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isLoading ?
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({ animation: "border", variant: 'danger', role: "status" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({ className: "sr-only" }, { children: "Loading..." })) }))
                            : voterHistory.length > 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", { children: ["Voting history according to QVF ", qvfDate] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_3__["default"], { columns: columns, data: voterHistory })] })
                                : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (historyCallComplete && voterHistory.length == 0) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "No Voting history found." })
                                : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}) }) }) })] }));
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

/***/ "./src/services/DownloadService.ts":
/*!*****************************************!*\
  !*** ./src/services/DownloadService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header */ "./src/services/auth-header.js");


const API_URL = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL;
class DownloadService {
    createDownloadRequest(data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + '/api/downloads', data, { headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    getDownloadRequests() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(API_URL + '/api/downloads', { headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    downloadFile(data) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(API_URL + `/api/download-file`, data, { headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__["default"])(), responseType: 'blob' });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DownloadService());


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZWE4NDllMTg0ZjJjMWRhMzRmZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMkhBQTJIO0FBQzNIO0FBQ0EsOEVBQThFLDJDQUEyQyw0QkFBNEIsS0FBSyxXQUFXLDJDQUEyQyx5QkFBeUIseUJBQXlCLDJCQUEyQixvQkFBb0IsS0FBSyxtQ0FBbUMsdUJBQXVCLDhCQUE4Qiw2QkFBNkIsS0FBSyxpQkFBaUIsMkJBQTJCLHNDQUFzQyxxQkFBcUIseUJBQXlCLDRCQUE0QixtREFBbUQsS0FBSyxxQkFBcUIseUJBQXlCLGlDQUFpQyxxQkFBcUIsS0FBSyxlQUFlLG9CQUFvQixvQkFBb0IsdUNBQXVDLHVCQUF1QixLQUFLLG9CQUFvQiw4QkFBOEIsS0FBSyxpS0FBaUssc0JBQXNCLDZCQUE2QixLQUFLLGtCQUFrQix5QkFBeUIseUJBQXlCLDRCQUE0QixvQkFBb0IsNkJBQTZCLEtBQUsseUJBQXlCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLEtBQUssc0VBQXNFLHNCQUFzQixLQUFLLGdEQUFnRCx1QkFBdUIsS0FBSywwQkFBMEIseUJBQXlCLEtBQUssaUNBQWlDLDJCQUEyQiwyQkFBMkIsMEJBQTBCLEtBQUssbUNBQW1DLHdCQUF3Qix1QkFBdUIseUJBQXlCLDJCQUEyQixLQUFLLGlDQUFpQyxpQ0FBaUMsS0FBSyxpREFBaUQsa0JBQWtCLHFCQUFxQixtQkFBbUIsMkNBQTJDLHVDQUF1QyxtQ0FBbUMsS0FBSyxrQ0FBa0Msc0JBQXNCLDRCQUE0QixLQUFLLHlDQUF5QyxzQkFBc0IseUJBQXlCLEtBQUssZ0NBQWdDLHdCQUF3Qix5Q0FBeUMsS0FBSywwQkFBMEIsc0JBQXNCLHlCQUF5QixpQ0FBaUMsdUJBQXVCLEtBQUssZ0NBQWdDLHVCQUF1Qix5QkFBeUIsS0FBSyw0QkFBNEIsMkJBQTJCLEtBQUssK0RBQStELGtDQUFrQyw0QkFBNEIsS0FBSyxxQ0FBcUMsMkJBQTJCLEtBQUssaUNBQWlDLHVCQUF1QiwyQkFBMkIsaUJBQWlCLG9CQUFvQixvQ0FBb0MsS0FBSyxpQkFBaUIsb0NBQW9DLHNDQUFzQyw0QkFBNEIsS0FBSyxpQkFBaUIsc0JBQXNCLEtBQUssbUJBQW1CLDJCQUEyQixvQ0FBb0MsdUJBQXVCLDJCQUEyQiwyQkFBMkIsS0FBSyxvQkFBb0IseUJBQXlCLHVCQUF1QixLQUFLLHVDQUF1Qyx1Q0FBdUMsK0JBQStCLEtBQUssaUtBQWlLLG9CQUFvQixzQkFBc0IsMEJBQTBCLDZCQUE2QixLQUFLLGlMQUFpTCxrQkFBa0IsNEJBQTRCLDRCQUE0QiwrQkFBK0IsMENBQTBDLFNBQVMsaUNBQWlDLHNCQUFzQix5QkFBeUIsdUJBQXVCLCtDQUErQywyQ0FBMkMsdUNBQXVDLFNBQVMseUJBQXlCLHNDQUFzQyxTQUFTLDREQUE0RCwwQkFBMEIsU0FBUyx5Q0FBeUMsMkJBQTJCLFNBQVMsMEJBQTBCLCtCQUErQixTQUFTLCtCQUErQiw4QkFBOEIsU0FBUyw0QkFBNEIsNEJBQTRCLDJCQUEyQixTQUFTLDBCQUEwQixxQ0FBcUMsU0FBUyw0QkFBNEIsNkJBQTZCLFNBQVMsa0JBQWtCLDJCQUEyQixTQUFTLCtCQUErQiwwQkFBMEIsU0FBUyxLQUFLLDhCQUE4QixzQkFBc0IsK0JBQStCLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDZCQUE2Qix5Q0FBeUMsd0JBQXdCLE9BQU8saURBQWlELDJCQUEyQiwwQkFBMEIsT0FBTyw2QkFBNkIsMkJBQTJCLHNCQUFzQixrQ0FBa0MsK0JBQStCLHVCQUF1QixrQ0FBa0Msc0NBQXNDLE9BQU8sb0NBQW9DLDBCQUEwQiwwQkFBMEIsbUJBQW1CLE9BQU8saUNBQWlDLDBCQUEwQixPQUFPLDJCQUEyQix3QkFBd0IsT0FBTywyQkFBMkIsc0JBQXNCLDRCQUE0QiwrQkFBK0IsNEJBQTRCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLHdCQUF3QixrQ0FBa0MsK0JBQStCLDhCQUE4QixvQkFBb0Isa0NBQWtDLHlCQUF5QixPQUFPLHNDQUFzQyw2QkFBNkIscUNBQXFDLDRCQUE0QixzQkFBc0IsK0JBQStCLE9BQU8sNkNBQTZDLHVCQUF1QixPQUFPLDBDQUEwQyxrQkFBa0IsT0FBTyw2Q0FBNkMsa0NBQWtDLDJCQUEyQiwwQkFBMEIsT0FBTyx1REFBdUQseUNBQXlDLDBCQUEwQiw0QkFBNEIsU0FBUyw4Q0FBOEMsNEJBQTRCLFNBQVMsT0FBTyxPQUFPLHNGQUFzRixLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sMklBQTJJLFVBQVUsMkNBQTJDLDRCQUE0QixLQUFLLFdBQVcsMkNBQTJDLHlCQUF5Qix5QkFBeUIsMkJBQTJCLG9CQUFvQixLQUFLLG1DQUFtQyx1QkFBdUIsOEJBQThCLDZCQUE2QixLQUFLLGlCQUFpQiwyQkFBMkIsc0NBQXNDLHFCQUFxQix5QkFBeUIsNEJBQTRCLG1EQUFtRCxLQUFLLHFCQUFxQix5QkFBeUIsaUNBQWlDLHFCQUFxQixLQUFLLGVBQWUsb0JBQW9CLG9CQUFvQix1Q0FBdUMsdUJBQXVCLEtBQUssb0JBQW9CLDhCQUE4QixLQUFLLGlLQUFpSyxzQkFBc0IsNkJBQTZCLEtBQUssa0JBQWtCLHlCQUF5Qix5QkFBeUIsNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyx5QkFBeUIseUJBQXlCLHlCQUF5QiwyQkFBMkIsS0FBSyxzRUFBc0Usc0JBQXNCLEtBQUssZ0RBQWdELHVCQUF1QixLQUFLLDBCQUEwQix5QkFBeUIsS0FBSyxpQ0FBaUMsMkJBQTJCLDJCQUEyQiwwQkFBMEIsS0FBSyxtQ0FBbUMsd0JBQXdCLHVCQUF1Qix5QkFBeUIsMkJBQTJCLEtBQUssaUNBQWlDLGlDQUFpQyxLQUFLLGlEQUFpRCxrQkFBa0IscUJBQXFCLG1CQUFtQiwyQ0FBMkMsdUNBQXVDLG1DQUFtQyxLQUFLLGtDQUFrQyxzQkFBc0IsNEJBQTRCLEtBQUsseUNBQXlDLHNCQUFzQix5QkFBeUIsS0FBSyxnQ0FBZ0Msd0JBQXdCLHlDQUF5QyxLQUFLLDBCQUEwQixzQkFBc0IseUJBQXlCLGlDQUFpQyx1QkFBdUIsS0FBSyxnQ0FBZ0MsdUJBQXVCLHlCQUF5QixLQUFLLDRCQUE0QiwyQkFBMkIsS0FBSywrREFBK0Qsa0NBQWtDLDRCQUE0QixLQUFLLHFDQUFxQywyQkFBMkIsS0FBSyxpQ0FBaUMsdUJBQXVCLDJCQUEyQixpQkFBaUIsb0JBQW9CLG9DQUFvQyxLQUFLLGlCQUFpQixvQ0FBb0Msc0NBQXNDLDRCQUE0QixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxtQkFBbUIsMkJBQTJCLG9DQUFvQyx1QkFBdUIsMkJBQTJCLDJCQUEyQixLQUFLLG9CQUFvQix5QkFBeUIsdUJBQXVCLEtBQUssdUNBQXVDLHVDQUF1QywrQkFBK0IsS0FBSyxpS0FBaUssb0JBQW9CLHNCQUFzQiwwQkFBMEIsNkJBQTZCLEtBQUssaUxBQWlMLGtCQUFrQiw0QkFBNEIsNEJBQTRCLCtCQUErQiwwQ0FBMEMsU0FBUyxpQ0FBaUMsc0JBQXNCLHlCQUF5Qix1QkFBdUIsK0NBQStDLDJDQUEyQyx1Q0FBdUMsU0FBUyx5QkFBeUIsc0NBQXNDLFNBQVMsNERBQTRELDBCQUEwQixTQUFTLHlDQUF5QywyQkFBMkIsU0FBUywwQkFBMEIsK0JBQStCLFNBQVMsK0JBQStCLDhCQUE4QixTQUFTLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLFNBQVMsMEJBQTBCLHFDQUFxQyxTQUFTLDRCQUE0Qiw2QkFBNkIsU0FBUyxrQkFBa0IsMkJBQTJCLFNBQVMsK0JBQStCLDBCQUEwQixTQUFTLEtBQUssOEJBQThCLHNCQUFzQiwrQkFBK0IsOEJBQThCLGdDQUFnQyw0QkFBNEIsNkJBQTZCLHlDQUF5Qyx3QkFBd0IsT0FBTyxpREFBaUQsMkJBQTJCLDBCQUEwQixPQUFPLDZCQUE2QiwyQkFBMkIsc0JBQXNCLGtDQUFrQywrQkFBK0IsdUJBQXVCLGtDQUFrQyxzQ0FBc0MsT0FBTyxvQ0FBb0MsMEJBQTBCLDBCQUEwQixtQkFBbUIsT0FBTyxpQ0FBaUMsMEJBQTBCLE9BQU8sMkJBQTJCLHdCQUF3QixPQUFPLDJCQUEyQixzQkFBc0IsNEJBQTRCLCtCQUErQiw0QkFBNEIseUJBQXlCLDJCQUEyQiw2QkFBNkIsd0JBQXdCLGtDQUFrQywrQkFBK0IsOEJBQThCLG9CQUFvQixrQ0FBa0MseUJBQXlCLE9BQU8sc0NBQXNDLDZCQUE2QixxQ0FBcUMsNEJBQTRCLHNCQUFzQiwrQkFBK0IsT0FBTyw2Q0FBNkMsdUJBQXVCLE9BQU8sMENBQTBDLGtCQUFrQixPQUFPLDZDQUE2QyxrQ0FBa0MsMkJBQTJCLDBCQUEwQixPQUFPLHVEQUF1RCx5Q0FBeUMsMEJBQTBCLDRCQUE0QixTQUFTLDhDQUE4Qyw0QkFBNEIsU0FBUyxPQUFPLG1CQUFtQjtBQUNoemhCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHNEQUFzRCw2Q0FBNkMscUJBQXFCLEtBQUssUUFBUSxvQkFBb0IsS0FBSyxPQUFPLDBGQUEwRixZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUscUNBQXFDLDZDQUE2QyxxQkFBcUIsS0FBSyxRQUFRLG9CQUFvQixLQUFLLG1CQUFtQjtBQUMzYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0Qsa0JBQWtCLHlNQUF5TSw0Q0FBNEMsMkNBQTJDLE9BQU8sa0JBQWtCLG1HQUFtRyxPQUFPLE9BQU8sZ0ZBQWdGLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLCtCQUErQixrQkFBa0IseU1BQXlNLDRDQUE0QywyQ0FBMkMsT0FBTyxrQkFBa0IsbUdBQW1HLE9BQU8sbUJBQW1CO0FBQ3htQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSxrR0FBYyxHQUFHLGtHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLDRGQUFjLEdBQUcsNEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCN0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0RBQXdELGNBQWM7QUFDdEUsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h1QztBQUNmO0FBQ0s7QUFDckQ7QUFDQSxZQUFZLHVEQUFLLHdCQUF3Qiw2QkFBNkIsSUFBSSxXQUFXLHNEQUFJLFdBQVcsd0JBQXdCLEdBQUcsc0RBQUksUUFBUSxtREFBbUQsSUFBSTtBQUNsTTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQsWUFBWSx1REFBSyx3QkFBd0IsMkJBQTJCLElBQUksV0FBVyxzREFBSSxDQUFDLHdEQUFlLElBQUksZ0RBQWdELEdBQUcsc0RBQUksUUFBUSxlQUFlLEdBQUcsc0RBQUksQ0FBQyx3REFBZSxJQUFJLDhDQUE4QyxHQUFHLHNEQUFJLFFBQVEsZUFBZSxHQUFHLHNEQUFJLENBQUMsd0RBQWUsSUFBSSwrQ0FBK0MsR0FBRyxzREFBSSxRQUFRLGVBQWUsR0FBRyxzREFBSSxDQUFDLHdEQUFlLElBQUksa0RBQWtELElBQUk7QUFDemQ7QUFDQSwwQkFBMEIsWUFBWTtBQUN0Qyw0Q0FBNEMsaUVBQVk7QUFDeEQ7QUFDQSxlQUFlLHNEQUFJLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLGdCQUFnQiw4REFBOEQ7QUFDbEc7QUFDQTtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCaUM7QUFDL0QsMkJBQTJCLHVCQUF1QjtBQUNsRCxZQUFZLHVEQUFLLHdCQUF3Qix3REFBd0QsSUFBSSxXQUFXLHNEQUFJLFFBQVEsaUJBQWlCLEdBQUcsc0RBQUksV0FBVyxnQkFBZ0IsSUFBSTtBQUNuTDtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p1RDtBQUNwRDtBQUNpQjtBQUNwQyxtQkFBbUIsNENBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUE0QjtBQUNwQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSx3QkFBd0Isd0JBQXdCLElBQUksVUFBVSx1REFBSywyQkFBMkIsd0JBQXdCLElBQUksV0FBVyxzREFBSSxTQUFTLCtCQUErQixHQUFHLHNEQUFJLFNBQVMsZ0NBQWdDLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLFNBQVMsMEdBQTBHLEdBQUcsc0RBQUksU0FBUywwRUFBMEUsR0FBRyxzREFBSSxTQUFTLDRHQUE0RyxHQUFHLHNEQUFJLFNBQVMsdUhBQXVILElBQUksR0FBRyxzREFBSSxTQUFTLDBCQUEwQixHQUFHLHVEQUFLLFNBQVMsV0FBVyxzREFBSSxTQUFTLHlJQUF5SSxHQUFHLHNEQUFJLFNBQVMseUZBQXlGLElBQUksR0FBRyxzREFBSSxTQUFTLDhCQUE4QixHQUFHLHVEQUFLLFNBQVMsV0FBVyxzREFBSSxTQUFTLG9EQUFvRCxHQUFHLHNEQUFJLFNBQVMsa0ZBQWtGLEdBQUcsdURBQUssU0FBUyxzRUFBc0UsdURBQUssU0FBUyxXQUFXLHNEQUFJLFNBQVMseUxBQXlMLEdBQUcsc0RBQUksU0FBUyx3TEFBd0wsR0FBRyxzREFBSSxTQUFTLHFHQUFxRyxHQUFHLHNEQUFJLFNBQVMsZ0hBQWdILEdBQUcsc0RBQUksU0FBUyxnSEFBZ0gsR0FBRyxzREFBSSxTQUFTLHlFQUF5RSxHQUFHLHNEQUFJLFNBQVMsa0ZBQWtGLEdBQUcsdURBQUssU0FBUyxnR0FBZ0csc0RBQUkseUJBQXlCLGNBQWMsSUFBSSxpREFBaUQsMkRBQTJELEdBQUcsdURBQUssU0FBUyxnR0FBZ0csc0RBQUkseUJBQXlCLGNBQWMsSUFBSSwyQ0FBMkMsMkRBQTJELEdBQUcsdURBQUssU0FBUywrRkFBK0Ysc0RBQUkseUJBQXlCLGNBQWMsSUFBSSx1Q0FBdUMsMERBQTBELEdBQUcsc0RBQUksU0FBUywyR0FBMkcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDOXdHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQitEO0FBQzdCO0FBQ2E7QUFDRTtBQUNPO0FBQ0w7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQixzREFBSSx3QkFBd0IsZ0RBQWdELElBQUkscUNBQXFDO0FBQ3JJO0FBQ0E7QUFDZSxvQkFBb0IsNENBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSxvRUFBaUI7QUFDN0I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQUksd0JBQXdCLHdCQUF3QixJQUFJLFVBQVUsc0RBQUksd0JBQXdCLGtDQUFrQyxJQUFJLFVBQVUsdURBQUssQ0FBQyxvRUFBSSxrQkFBa0I7QUFDMUw7QUFDQSx1QkFBdUIsSUFBSSxXQUFXLHVEQUFLLHdCQUF3Qix5QkFBeUIsSUFBSSxXQUFXLHNEQUFJLDBCQUEwQixxQkFBcUIsSUFBSSxzQkFBc0IsSUFBSSxzREFBSSxDQUFDLHFFQUFLLElBQUksaUpBQWlKLElBQUksSUFBSSx1REFBSyx3QkFBd0IseUJBQXlCLElBQUksV0FBVyxzREFBSSwwQkFBMEIscUJBQXFCLElBQUksc0JBQXNCLElBQUksc0RBQUksQ0FBQyxxRUFBSyxJQUFJLHFKQUFxSixJQUFJLElBQUksc0RBQUksd0JBQXdCLHlCQUF5QixJQUFJLFVBQVUsdURBQUssMkJBQTJCLHNFQUFzRSxJQUFJLGtDQUFrQyxzREFBSSxXQUFXLCtDQUErQyxJQUFJLHNEQUFJLFdBQVcsbUJBQW1CLElBQUksSUFBSSwyQkFBMkIsc0RBQUksd0JBQXdCLHlCQUF5QixJQUFJLFVBQVUsc0RBQUksd0JBQXdCLGdEQUFnRCxJQUFJLDhCQUE4QixJQUFJLEtBQUssc0RBQUksQ0FBQyxzRUFBVyxJQUFJLFNBQVMsaUJBQWlCO0FBQ2x1QztBQUNBLCtCQUErQixJQUFJLElBQUksSUFBSTtBQUMzQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFK0Q7QUFDN0I7QUFDVTtBQUNPO0FBQ3BDLHNCQUFzQiw0Q0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2RUFBMEI7QUFDdEQ7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DLHdCQUF3QiwyQ0FBMkM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFJLENBQUMsc0RBQVEsSUFBSSx5QkFBeUI7QUFDN0Q7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QixnQkFBZ0Isc0RBQUksd0JBQXdCLHdCQUF3QixJQUFJO0FBQ3hFLGdCQUFnQix1REFBSyxVQUFVLFdBQVcsc0RBQUksMkJBQTJCLHdCQUF3QixJQUFJLFVBQVUsdURBQUssU0FBUyxXQUFXLHNEQUFJLGFBQWEsZ0NBQWdDLGdCQUFnQixHQUFHLElBQUksdURBQUssUUFBUSxXQUFXLHNEQUFJLGFBQWEsb0JBQW9CLHFJQUFxSSxHQUFHLHVEQUFLLFFBQVEsV0FBVyxzREFBSSxhQUFhLGlCQUFpQix5QkFBeUIsR0FBRyx1REFBSyxRQUFRLFdBQVcsc0RBQUksYUFBYSxvQkFBb0IsNEJBQTRCLEdBQUcsc0RBQUksYUFBYSwwQkFBMEIsR0FBRyxzREFBSSxTQUFTO0FBQ2xvQix1RUFBdUUsc0RBQUksU0FBUyxnQkFBZ0IsV0FBVyxJQUFJLFVBQVU7QUFDN0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrRDtBQUM3QjtBQUNhO0FBQ0U7QUFDTztBQUNwQjtBQUNlO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQUksd0JBQXdCLGdEQUFnRCxJQUFJLHFDQUFxQztBQUNySTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtEQUFPO0FBQ2hCLGdCQUFnQixzREFBSSx3QkFBd0IsZ0RBQWdELElBQUksd0NBQXdDO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLHdCQUF3QixnREFBZ0QsSUFBSSwrREFBK0Q7QUFDL0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQUksd0JBQXdCLGdEQUFnRCxJQUFJLCtEQUErRDtBQUMvSjtBQUNBO0FBQ2UsdUJBQXVCLDRDQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLHVFQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBSSx3QkFBd0Isd0JBQXdCLElBQUksVUFBVSxzREFBSSx3QkFBd0Isa0NBQWtDLElBQUksVUFBVSx1REFBSyxDQUFDLG9FQUFJLGtCQUFrQjtBQUMxTDtBQUNBLHVCQUF1QixJQUFJLHNDQUFzQyx1REFBSyxVQUFVLFdBQVcsdURBQUssd0JBQXdCLHlCQUF5QixJQUFJLFdBQVcsc0RBQUksMEJBQTBCLHFCQUFxQixJQUFJLHNCQUFzQixJQUFJLHNEQUFJLENBQUMscUVBQUssSUFBSSw0SkFBNEosSUFBSSxJQUFJLHVEQUFLLHdCQUF3Qix5QkFBeUIsSUFBSSxXQUFXLHNEQUFJLDBCQUEwQixrQkFBa0IsSUFBSSxtQkFBbUIsSUFBSSxzREFBSSxDQUFDLHFFQUFLLElBQUksK0lBQStJLElBQUksSUFBSSx1REFBSyx3QkFBd0IseUJBQXlCLElBQUksV0FBVyxzREFBSSwwQkFBMEIscUJBQXFCLElBQUksc0JBQXNCLElBQUksc0RBQUksQ0FBQyxxRUFBSyxJQUFJLGdLQUFnSyxJQUFJLElBQUksc0RBQUksd0JBQXdCLHlCQUF5QixJQUFJLFVBQVUsc0RBQUksMkJBQTJCLHdDQUF3QyxJQUFJLHFCQUFxQixJQUFJLEtBQUssMkJBQTJCLHNEQUFJLHdCQUF3Qix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLHdCQUF3QjtBQUMxMEM7QUFDQSwyRUFBMkUsSUFBSSw4QkFBOEIsSUFBSSxLQUFLLHNEQUFJLENBQUMsc0VBQVcsSUFBSSxTQUFTLGlCQUFpQjtBQUNwSztBQUNBLCtCQUErQixJQUFJLElBQUksSUFBSTtBQUMzQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGNEM7QUFDNUM7QUFDQTtBQUNBLHNDQUFzQywrQ0FBUTtBQUM5QyxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsRUFBRTtBQUNsRjtBQUNQLFFBQVEsS0FBcUUsRUFBRSxFQTBCMUU7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkhlO0FBQ2Y7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkUsaUJBQWlCLHNDQUFzQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1QwQjtBQUMxQixnQkFBZ0IsZ0VBQVc7QUFDM0I7QUFDQTtBQUNBLGVBQWUsaURBQ0U7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCUDtBQUNhO0FBQ3ZDLGdCQUFnQixnRUFBVztBQUMzQjtBQUNBO0FBQ0EsZUFBZSxnREFBUztBQUN4QjtBQUNBO0FBQ0EsZUFBZSxnREFBUyxxQkFBcUIsU0FBUyx3REFBVSxJQUFJO0FBQ3BFO0FBQ0E7QUFDQSxlQUFlLGdEQUFTLG9CQUFvQixTQUFTLHdEQUFVLElBQUk7QUFDbkU7QUFDQTtBQUNBLGVBQWUsZ0RBQVMsc0JBQXNCLFNBQVMsd0RBQVUsSUFBSTtBQUNyRTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakI4QjtBQUM3QjtBQUM0QjtBQUNQO0FBQ0Y7QUFDTTtBQUNOO0FBQ0k7QUFDbEI7QUFDUTtBQUNFO0FBQ007QUFDUjtBQUNOO0FBQ2Y7QUFDd0I7QUFDYjtBQUNNO0FBQ1k7QUFDdkQ7QUFDdUQ7QUFDRTtBQUN6RCx5QkFBeUIsNENBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEVBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxRQUFRLDREQUFXO0FBQ25CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLHNFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFrRDtBQUNsRTtBQUNBLGdCQUFnQix1REFBSyx3QkFBd0Isc0JBQXNCLElBQUksV0FBVyx1REFBSyx3QkFBd0IsZUFBZSxJQUFJLFdBQVcsdURBQUssd0JBQXdCLDZCQUE2QixJQUFJLFdBQVcsc0RBQUksU0FBUyxzQ0FBc0MsR0FBRyxzREFBSSxhQUFhLGlCQUFpQixJQUFJLElBQUksdURBQUssdUJBQXVCLHVDQUF1QyxJQUFJLFdBQVcsdURBQUssU0FBUyxXQUFXLHVEQUFLLHNCQUFzQix5R0FBeUcsSUFBSSxXQUFXLHNEQUFJLFFBQVEsaUNBQWlDLG9CQUFvQixJQUFJLHNEQUFJLHVCQUF1Qix3REFBd0QsSUFBSSxVQUFVLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLGlEQUFpRCxJQUFJLDRCQUE0QixJQUFJLElBQUksS0FBSyxHQUFHLHVEQUFLLFNBQVMsV0FBVyx1REFBSyxzQkFBc0IsaUhBQWlILElBQUksV0FBVyxzREFBSSxRQUFRLDhCQUE4Qix3QkFBd0IsSUFBSSxzREFBSSx1QkFBdUIsZ0VBQWdFLElBQUksVUFBVSxzREFBSSx1QkFBdUIsdUJBQXVCLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFJLGtCQUFrQiwwQ0FBMEMsSUFBSSx3QkFBd0IsSUFBSSxJQUFJLEtBQUssR0FBRyx1REFBSyxTQUFTLFdBQVcsdURBQUssc0JBQXNCLHlHQUF5RyxJQUFJLFdBQVcsc0RBQUksUUFBUSw2QkFBNkIsc0JBQXNCLElBQUksdURBQUssdUJBQXVCLHdEQUF3RCxJQUFJLFdBQVcsc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBSSxrQkFBa0Isc0RBQXNELElBQUksb0NBQW9DLElBQUksSUFBSSxzREFBSSx1QkFBdUIsdUJBQXVCLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFJLGtCQUFrQiw4Q0FBOEMsSUFBSSw0QkFBNEIsSUFBSSxLQUFLLEtBQUssR0FBRyxzREFBSSxTQUFTLFVBQVUsdURBQUssQ0FBQyxtREFBSSxrQkFBa0IsdUNBQXVDLElBQUksV0FBVyxzREFBSSxRQUFRLGtDQUFrQyxzQkFBc0IsSUFBSSxJQUFJLEtBQUssSUFBSSx1REFBSyx3QkFBd0IsZUFBZSxJQUFJLFdBQVcsc0RBQUksd0JBQXdCLDREQUE0RCxJQUFJLFVBQVUsdURBQUssd0JBQXdCLDhCQUE4QixJQUFJLFdBQVcsdURBQUssMkJBQTJCLGdFQUFnRSxJQUFJLFdBQVcsc0RBQUksUUFBUSxnQ0FBZ0MsR0FBRyxzREFBSSxXQUFXLElBQUksSUFBSSxzREFBSSwyQkFBMkIseVBBQXlQLElBQUksVUFBVSxzREFBSSxRQUFRLG1DQUFtQyxHQUFHLElBQUksdURBQUssVUFBVSxxQkFBcUIsc0RBQUksQ0FBQyxtRUFBYyxJQUFJLHlDQUF5QyxJQUFJLEdBQUcsc0RBQUksd0JBQXdCLHFFQUFxRSxJQUFJLFVBQVUsdURBQUssdUJBQXVCLHFDQUFxQyxJQUFJLFdBQVcsc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBSSxrQkFBa0Isb0NBQW9DLElBQUksa0JBQWtCLElBQUksdUJBQXVCLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLHlDQUF5QyxJQUFJLG1CQUFtQixJQUFJLE1BQU0sSUFBSSxtQkFBbUIsdURBQUssd0JBQXdCLGlDQUFpQyxJQUFJLFdBQVcsc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBSSxrQkFBa0IsMkNBQTJDLElBQUksZ0NBQWdDLElBQUksSUFBSSxzREFBSSx1QkFBdUIsdUJBQXVCLElBQUksVUFBVSxzREFBSSxzQkFBc0IsaUVBQWlFLElBQUksb0JBQW9CLElBQUksS0FBSyxPQUFPLHVEQUFLLHdCQUF3QixpQ0FBaUMsSUFBSSxXQUFXLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLHlDQUF5QyxJQUFJLG1CQUFtQixJQUFJLElBQUksc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBSSxrQkFBa0IsNENBQTRDLElBQUkscUJBQXFCLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxzREFBSSx3QkFBd0IsbUJBQW1CLElBQUksVUFBVSx1REFBSyxDQUFDLHFEQUFNLElBQUksV0FBVyxzREFBSSxDQUFDLG9EQUFLLElBQUksOENBQThDLGtFQUFJLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksd0NBQXdDLG1FQUFLLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksMkNBQTJDLHVFQUFRLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksMENBQTBDLHFFQUFPLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksNENBQTRDLGdFQUFZLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksb0NBQW9DLGtFQUFhLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksdUNBQXVDLG1FQUFlLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksZ0NBQWdDLGtFQUFhLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksc0NBQXNDLGtFQUFjLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksMkJBQTJCLHlEQUFLLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksK0JBQStCLDhEQUFTLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksMEJBQTBCLHlEQUFJLEVBQUUsR0FBRyxzREFBSSxDQUFDLG9EQUFLLElBQUksNkJBQTZCLDREQUFPLEVBQUUsSUFBSSxHQUFHLEtBQUssS0FBSztBQUMxOUs7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RDZDO0FBQ2hFLHFCQUFxQixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxTQUFTLGdDQUFnQyxHQUFHO0FBQ3hHLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZpRTtBQUNqQztBQUMzQjtBQUN5QjtBQUMwQjtBQUN0RTtBQUNQLHNDQUFzQywrQ0FBUTtBQUM5QyxrRUFBa0UsK0NBQVE7QUFDMUUsb0NBQW9DLCtDQUFRO0FBQzVDLHdDQUF3QywrQ0FBUTtBQUNoRCw0Q0FBNEMsK0NBQVE7QUFDcEQsd0NBQXdDLCtDQUFRO0FBQ2hELDBCQUEwQiwrQ0FBUTtBQUNsQyxnREFBZ0QsK0NBQVE7QUFDeEQsa0RBQWtELCtDQUFRO0FBQzFELHNEQUFzRCwrQ0FBUTtBQUM5RCw4QkFBOEIsK0NBQVE7QUFDdEMsb0RBQW9ELCtDQUFRO0FBQzVELHlCQUF5Qiw4Q0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQSxjQUFjLGdFQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFTLENBQUMsZ0VBQVcsaURBQWlELFdBQVcsR0FBRyxvQkFBb0I7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQUssd0JBQXdCLHdCQUF3QixJQUFJLFdBQVcsc0RBQUksQ0FBQyx1REFBSSxrQkFBa0Isc0JBQXNCLElBQUksVUFBVSx1REFBSyxDQUFDLHVEQUFTLGtCQUFrQixjQUFjLElBQUksV0FBVyx1REFBSyxDQUFDLHVEQUFHLElBQUksV0FBVyx1REFBSyxDQUFDLHVEQUFHLElBQUkscUNBQXFDLHNEQUFJLENBQUMsdURBQU8sSUFBSSx3REFBd0Q7QUFDL1Ysb0RBQW9ELHVEQUFLLFlBQVkscUJBQXFCLHVEQUFLLENBQUMsOERBQVcsa0JBQWtCLHVJQUF1SSxJQUFJLFdBQVcsc0RBQUksMkJBQTJCLFdBQVcsSUFBSSxxQ0FBcUMsOEJBQThCLHNEQUFJLDJCQUEyQiwyQkFBMkIsSUFBSSw4QkFBOEIsMkJBQTJCLEtBQUssSUFBSSxHQUFHLHNEQUFJLENBQUMsdURBQUcsSUFBSSxVQUFVLHVEQUFLLFlBQVksNEJBQTRCLHNEQUFJLENBQUMsK0RBQVksSUFBSSw2SkFBNkosSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx1REFBRyxJQUFJLFVBQVUsdURBQUssWUFBWSwwQkFBMEIsc0RBQUksQ0FBQywrREFBWSxJQUFJLHVKQUF1SixJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLHVEQUFHLElBQUksVUFBVSx1REFBSyxZQUFZLGtCQUFrQixzREFBSSxDQUFDLCtEQUFZLElBQUksK0lBQStJLElBQUksR0FBRyxJQUFJLEdBQUcsc0RBQUksQ0FBQyx1REFBRyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx1REFBRyxJQUFJLG9CQUFvQixHQUFHLEdBQUcsc0RBQUksQ0FBQyx1REFBRyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx1REFBTSxrQkFBa0IseUVBQXlFLElBQUksMkJBQTJCLElBQUksSUFBSSxJQUFJLElBQUksdURBQUssVUFBVTtBQUM5OUMsbURBQW1ELHNEQUFJLENBQUMsdURBQU8sSUFBSSx3REFBd0Q7QUFDM0g7QUFDQTtBQUNBLDBEQUEwRCx1REFBSyxDQUFDLHVEQUFTLElBQUksV0FBVyx1REFBSyxDQUFDLDREQUFTLElBQUksNENBQTRDLEdBQUcsc0RBQUksQ0FBQyxrRUFBUyxJQUFJLCtDQUErQyxJQUFJO0FBQy9OO0FBQ0EsK0JBQStCLElBQUk7QUFDbkM7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZId0Q7QUFDakM7QUFDM0I7QUFDeUI7QUFDMEI7QUFDekM7QUFDZTtBQUNQO0FBQ0s7QUFDRztBQUM3QztBQUNQLG9DQUFvQywrQ0FBUTtBQUM1QyxzQ0FBc0MsK0NBQVE7QUFDOUMsMENBQTBDLCtDQUFRLEdBQUcsY0FBYztBQUNuRSxzQ0FBc0MsK0NBQVE7QUFDOUMsa0VBQWtFLCtDQUFRO0FBQzFFLG9DQUFvQywrQ0FBUTtBQUM1Qyx3Q0FBd0MsK0NBQVE7QUFDaEQsOEVBQThFLCtDQUFRO0FBQ3RGLDhDQUE4QywrQ0FBUTtBQUN0RCxvREFBb0QsK0NBQVE7QUFDNUQsc0VBQXNFLCtDQUFRO0FBQzlFLHNDQUFzQywrQ0FBUTtBQUM5Qyw0Q0FBNEMsK0NBQVE7QUFDcEQsZ0RBQWdELCtDQUFRO0FBQ3hELGtEQUFrRCwrQ0FBUTtBQUMxRCwwREFBMEQsK0NBQVE7QUFDbEUsc0RBQXNELCtDQUFRO0FBQzlELHdEQUF3RCwrQ0FBUTtBQUNoRSx3REFBd0QsK0NBQVE7QUFDaEUsb0JBQW9CLDhDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLElBQUksZ0RBQVM7QUFDYiw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBVztBQUN2QyxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0VBQVcsNENBQTRDLFdBQVc7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXLHdDQUF3QyxXQUFXLEdBQUcsaUJBQWlCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDLGdCQUFnQixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxVQUFVLHlDQUF5QyxHQUFHO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdFQUFXLDZDQUE2QyxXQUFXLEdBQUcsaUJBQWlCO0FBQ3hIO0FBQ0EseURBQXlELGFBQWE7QUFDdEU7QUFDQTtBQUNBLFlBQVksZ0VBQVcsNkNBQTZDLFdBQVc7QUFDL0UsWUFBWSxnRUFBVyw4Q0FBOEMsV0FBVztBQUNoRjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLGtCQUFrQixnREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsWUFBWSxnREFBUyxpQkFBaUIsU0FBUyxpRUFBVSxJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxzREFBUSxJQUFJLGNBQWM7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix1REFBSyx3QkFBd0Isd0JBQXdCLElBQUksV0FBVyxzREFBSSxDQUFDLHVEQUFJLGtCQUFrQixzQkFBc0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsd0RBQVMsa0JBQWtCLGNBQWMsSUFBSSxXQUFXLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxXQUFXLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUNuVyx3REFBd0QsdURBQUssWUFBWSxnQ0FBZ0MsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IsdUlBQXVJLElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHFDQUFxQyw4QkFBOEIsc0RBQUksMkJBQTJCLDJCQUEyQixJQUFJLDhCQUE4QiwyQkFBMkIsS0FBSyxJQUFJLEdBQUcsdURBQUssQ0FBQyx3REFBRyxJQUFJLDJDQUEyQyxzREFBSSxDQUFDLHdEQUFPLElBQUksd0RBQXdEO0FBQ3RwQix3REFBd0QsdURBQUssWUFBWSxzQ0FBc0MsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IseUpBQXlKLElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLDJDQUEyQyx5Q0FBeUMsc0RBQUksMkJBQTJCLHVDQUF1QyxJQUFJLDBDQUEwQyx1Q0FBdUMsS0FBSyxJQUFJLEdBQUcsdURBQUssQ0FBQyx3REFBRyxJQUFJLHVDQUF1QyxzREFBSSxDQUFDLHdEQUFPLElBQUksd0RBQXdEO0FBQy90Qix3REFBd0QsdURBQUssWUFBWSx1QkFBdUIsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IsNkhBQTZILElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHVDQUF1QyxpQ0FBaUMsc0RBQUksMkJBQTJCLDBCQUEwQixJQUFJLDZCQUE2QiwwQkFBMEIsS0FBSyxJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFHLElBQUksb0JBQW9CLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFNLGtCQUFrQix5RUFBeUUsSUFBSSx5Q0FBeUMsSUFBSSxJQUFJLElBQUksSUFBSSxzREFBSSxTQUFTLEdBQUcsdURBQUssVUFBVTtBQUM3eEIsdURBQXVELHNEQUFJLENBQUMsd0RBQU8sSUFBSSx3REFBd0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLENBQUMsMERBQWlCLElBQUksc0VBQXNFLEdBQUcsc0RBQUksUUFBUSw0RUFBNEUsR0FBRyxzREFBSSxRQUFRLFVBQVUsc0RBQUksQ0FBQyw4Q0FBTyxrQkFBa0IsbUpBQW1KLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFNLGtCQUFrQiwrQ0FBK0MsSUFBSSw4QkFBOEIsSUFBSSxJQUFJLEdBQUcsc0RBQUksQ0FBQyxrRUFBUyxJQUFJLDhSQUE4UixJQUFJO0FBQzkzQjtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblN5RDtBQUMvRSx1QkFBdUIsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksU0FBUyx3QkFBd0IsR0FBRyxzREFBSSxVQUFVLDBEQUEwRCxJQUFJO0FBQ2hMLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YrRDtBQUMxQztBQUNPO0FBQ1g7QUFDcEI7QUFDb0I7QUFDeEMsNkJBQTZCLCtCQUErQjtBQUM1RCxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLHNDQUFzQywrQ0FBUTtBQUM5QywwQ0FBMEMsK0NBQVEsR0FBRyxjQUFjO0FBQ25FLElBQUksZ0RBQVM7QUFDYiw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSxzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxDQUFDLDREQUFJLGtCQUFrQixrQkFBa0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsaUVBQVMsa0JBQWtCLFNBQVMsa0JBQWtCLElBQUksV0FBVyx1REFBSyxDQUFDLGtFQUFVLElBQUksaUZBQWlGLEdBQUcsc0RBQUksQ0FBQyxpRUFBUyxrQkFBa0IsU0FBUyxrQkFBa0IsSUFBSSxVQUFVLHNEQUFJLENBQUMsdURBQUssa0JBQWtCLDRDQUE0QyxJQUFJLFVBQVUsc0RBQUksWUFBWSxVQUFVLHVEQUFLLFNBQVMsV0FBVyx1REFBSyxTQUFTLFdBQVcsc0RBQUksU0FBUywwQ0FBMEMsR0FBRyxzREFBSSxTQUFTLHNEQUFzRCxHQUFHLHNEQUFJLFNBQVMsK0NBQStDLEdBQUcsc0RBQUksU0FBUyx1REFBdUQsSUFBSSxHQUFHLHVEQUFLLFNBQVMsV0FBVyxzREFBSSxTQUFTLHlDQUF5QyxHQUFHLHNEQUFJLFNBQVMsZ0RBQWdELEdBQUcsc0RBQUksU0FBUyxvQ0FBb0MsR0FBRyxzREFBSSxTQUFTLDRDQUE0QyxJQUFJLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLFNBQVMsc0NBQXNDLEdBQUcsc0RBQUksU0FBUyw4Q0FBOEMsR0FBRyxzREFBSSxTQUFTLHNDQUFzQyxHQUFHLHNEQUFJLFNBQVMsOENBQThDLElBQUksR0FBRyx1REFBSyxTQUFTLFdBQVcsc0RBQUksdUJBQXVCLFlBQVksSUFBSSwyQkFBMkIsSUFBSSxzREFBSSx1QkFBdUIsWUFBWSxJQUFJLHdDQUF3QyxLQUFLLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLHVCQUF1QixZQUFZLElBQUksbUNBQW1DLElBQUksc0RBQUksdUJBQXVCLHdEQUF3RCxJQUFJLCtDQUErQyxLQUFLLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSx1REFBSyxDQUFDLGlFQUFTLGtCQUFrQixrRUFBa0UsSUFBSSwwREFBMEQsS0FBSyxJQUFJLElBQUk7QUFDMTREO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFEO0FBQ2pDO0FBQ3dCO0FBQ2pDO0FBQ2M7QUFDUDtBQUNBO0FBQ2Y7QUFDN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLDBDQUEwQywrQ0FBUTtBQUNsRCx1REFBdUQsY0FBYztBQUNyRSxvREFBb0QsK0NBQVE7QUFDNUQsa0RBQWtELCtDQUFRO0FBQzFELG9DQUFvQywrQ0FBUTtBQUM1QyxrQ0FBa0MsK0NBQVE7QUFDMUMsa0VBQWtFLCtDQUFRO0FBQzFFLG9DQUFvQywrQ0FBUTtBQUM1Qyx3Q0FBd0MsK0NBQVE7QUFDaEQsOEVBQThFLCtDQUFRO0FBQ3RGLDhDQUE4QywrQ0FBUTtBQUN0RCxvREFBb0QsK0NBQVE7QUFDNUQsNERBQTRELCtDQUFRO0FBQ3BFLGtEQUFrRCwrQ0FBUTtBQUMxRCxzQ0FBc0MsK0NBQVE7QUFDOUMsMENBQTBDLCtDQUFRO0FBQ2xELGdEQUFnRCwrQ0FBUTtBQUN4RCxvREFBb0QsK0NBQVE7QUFDNUQsb0JBQW9CLDhDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCLHlEQUF5RCxzQkFBc0IsZUFBZTtBQUM5RjtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIseURBQXlELHNCQUFzQixlQUFlO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHNCQUFzQixvQkFBb0I7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsc0JBQXNCLCtCQUErQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxzQkFBc0IsMkNBQTJDO0FBQzlIO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUZBQW1DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSUFBSSxnREFBUztBQUNiLDRCQUE0Qiw2RUFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0VBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLHFGQUFtQztBQUMzQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBVztBQUN2QyxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsdUZBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVkscUZBQW1DO0FBQy9DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOEVBQTRCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBTTtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0Esb0JBQW9CLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLFVBQVUseUNBQXlDLEdBQUcsc0RBQUksQ0FBQyx1REFBTSxrQkFBa0IsOEZBQThGLElBQUksc0JBQXNCLEtBQUs7QUFDdFE7QUFDQTtBQUNBLG9CQUFvQixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxVQUFVLHlDQUF5QyxHQUFHO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNEQUFJLENBQUMsc0RBQVEsSUFBSSxjQUFjO0FBQzlDO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQUssd0JBQXdCLHdCQUF3QixJQUFJLFdBQVcsc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsdURBQUksa0JBQWtCLCtCQUErQixJQUFJLFVBQVUsdURBQUssQ0FBQyx1REFBUyxrQkFBa0IsY0FBYyxJQUFJLFdBQVcsdURBQUssQ0FBQyx3REFBRyxJQUFJLFdBQVcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsdURBQUssWUFBWSx1QkFBdUIsdURBQUssMkJBQTJCLGtKQUFrSixJQUFJLFdBQVcsc0RBQUksMkJBQTJCLFdBQVcsSUFBSSx1Q0FBdUMsMkJBQTJCLHNEQUFJLDJCQUEyQix1QkFBdUIsSUFBSSx3Q0FBd0MsdUJBQXVCLEtBQUssR0FBRyxHQUFHLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUN2M0IsNERBQTRELHVEQUFLLFlBQVkscUJBQXFCLHVEQUFLLDJCQUEyQiw2S0FBNkssSUFBSSxXQUFXLHNEQUFJLDJCQUEyQixXQUFXLElBQUkscUNBQXFDLDZCQUE2QixzREFBSSwyQkFBMkIsMkJBQTJCLElBQUksOEJBQThCLDBCQUEwQixLQUFLLElBQUksR0FBRyx1REFBSyxDQUFDLHdEQUFHLElBQUksMkNBQTJDLHNEQUFJLENBQUMsd0RBQU8sSUFBSSx3REFBd0Q7QUFDaHJCLDREQUE0RCx1REFBSyxZQUFZLDJCQUEyQix1REFBSywyQkFBMkIsNE5BQTROLElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLDJDQUEyQyx5Q0FBeUMsc0RBQUksMkJBQTJCLHVDQUF1QyxJQUFJLDBDQUEwQyx1Q0FBdUMsS0FBSyxJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFHLElBQUksb0JBQW9CLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSx1REFBSyxDQUFDLHdEQUFHLElBQUksV0FBVyxzREFBSSxRQUFRLHVEQUF1RCxzSUFBc0ksR0FBRyxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxxS0FBcUssR0FBRyxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxXQUFXLHNEQUFJLFFBQVEsaUNBQWlDLHdFQUF3RSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx1REFBTSxrQkFBa0IsMEVBQTBFLElBQUksMENBQTBDLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSx1REFBSyxVQUFVLFdBQVcsc0RBQUksU0FBUyxHQUFHLHNEQUFJLFNBQVMsaUNBQWlDLEdBQUcsc0RBQUksQ0FBQyxrRUFBUyxJQUFJLHdSQUF3UixJQUFJLEdBQUcsSUFBSTtBQUNqakU7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UHlEO0FBQ2pDO0FBQzNCO0FBQ3lCO0FBQzBCO0FBQ3pDO0FBQ2U7QUFDUDtBQUNLO0FBQzFDO0FBQ1Asb0NBQW9DLCtDQUFRO0FBQzVDLHNDQUFzQywrQ0FBUTtBQUM5QywwQ0FBMEMsK0NBQVEsR0FBRyxjQUFjO0FBQ25FLHNDQUFzQywrQ0FBUTtBQUM5QyxrRUFBa0UsK0NBQVE7QUFDMUUsb0NBQW9DLCtDQUFRO0FBQzVDLHdDQUF3QywrQ0FBUTtBQUNoRCxnREFBZ0QsK0NBQVE7QUFDeEQsa0RBQWtELCtDQUFRO0FBQzFELHNDQUFzQywrQ0FBUTtBQUM5Qyx3REFBd0QsK0NBQVE7QUFDaEUsb0VBQW9FLCtDQUFRO0FBQzVFLG9CQUFvQiw4Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFTO0FBQ2IsNEJBQTRCLDZFQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQVc7QUFDdkMsb0RBQW9ELGdDQUFnQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0MsZ0JBQWdCLHNEQUFJLENBQUMsdURBQVMsSUFBSSxVQUFVLHNEQUFJLFVBQVUseUNBQXlDLEdBQUc7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnREFBUyxDQUFDLGdFQUFXLG9EQUFvRCxXQUFXLEtBQUssU0FBUyxpRUFBVSxJQUFJO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFdBQVc7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxzREFBUSxJQUFJLGNBQWM7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix1REFBSyx3QkFBd0Isd0JBQXdCLElBQUksV0FBVyxzREFBSSxDQUFDLHVEQUFJLGtCQUFrQixzQkFBc0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsdURBQVMsa0JBQWtCLGNBQWMsSUFBSSxXQUFXLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUNqVyxvREFBb0QsdURBQUssWUFBWSxxQkFBcUIsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IsdUhBQXVILElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHFDQUFxQyw4QkFBOEIsc0RBQUksMkJBQTJCLDJCQUEyQixJQUFJLDhCQUE4QiwyQkFBMkIsS0FBSyxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFHLElBQUksb0JBQW9CLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFNLGtCQUFrQix5RUFBeUUsSUFBSSxpQ0FBaUMsSUFBSSxJQUFJLElBQUksSUFBSSxzREFBSSxTQUFTLEdBQUcsdURBQUssVUFBVTtBQUN0d0IsdURBQXVELHNEQUFJLENBQUMsd0RBQU8sSUFBSSx3REFBd0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLFFBQVEsVUFBVSxzREFBSSxDQUFDLDhDQUFPLGtCQUFrQiw4RkFBOEYsSUFBSSxVQUFVLHNEQUFJLENBQUMsd0RBQU0sa0JBQWtCLCtDQUErQyxJQUFJLDhCQUE4QixJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLGtFQUFTLElBQUksMFBBQTBQLElBQUk7QUFDdm1CO0FBQ0EsbUNBQW1DLElBQUk7QUFDdkM7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SjBEO0FBQ2pDO0FBQzNCO0FBQ2tCO0FBQ087QUFDd0I7QUFDN0I7QUFDRjtBQUNPO0FBQ0Y7QUFDakQ7QUFDQSxvQ0FBb0MsK0NBQVE7QUFDNUMsMERBQTBELCtDQUFRO0FBQ2xFLDBEQUEwRCwrQ0FBUTtBQUNsRSxzQ0FBc0MsK0NBQVE7QUFDOUMsMENBQTBDLCtDQUFRLEdBQUcsY0FBYztBQUNuRSxvQ0FBb0MsK0NBQVE7QUFDNUMsa0NBQWtDLCtDQUFRO0FBQzFDLGtFQUFrRSwrQ0FBUTtBQUMxRSxvQ0FBb0MsK0NBQVE7QUFDNUMsd0NBQXdDLCtDQUFRO0FBQ2hELGdEQUFnRCwrQ0FBUTtBQUN4RCw4Q0FBOEMsK0NBQVE7QUFDdEQsZ0RBQWdELCtDQUFRO0FBQ3hELG9EQUFvRCwrQ0FBUTtBQUM1RCxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLDRDQUE0QywrQ0FBUTtBQUNwRCw0Q0FBNEMsK0NBQVE7QUFDcEQsa0RBQWtELCtDQUFRO0FBQzFELG9CQUFvQiw4Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLElBQUksZ0RBQVM7QUFDYiw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0VBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBVztBQUN2QyxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnREFBUyxDQUFDLGdFQUFXLDRDQUE0QyxRQUFRLEdBQUcsV0FBVyxHQUFHLFNBQVMsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLGlCQUFpQixLQUFLLFNBQVMsaUVBQVUsSUFBSTtBQUN4TTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnREFBUyxDQUFDLGdFQUFXLDRDQUE0QyxRQUFRLEdBQUcseUNBQXlDLEtBQUssU0FBUyxpRUFBVSxJQUFJO0FBQy9LO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxzREFBUSxJQUFJLGNBQWM7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix1REFBSyxDQUFDLHVEQUFTLElBQUksV0FBVyxzREFBSSx3QkFBd0Isd0JBQXdCLElBQUksVUFBVSxzREFBSSxDQUFDLHVEQUFJLGtCQUFrQixzQkFBc0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsdURBQVMsa0JBQWtCLGNBQWMsSUFBSSxXQUFXLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxXQUFXLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLFlBQVksdUJBQXVCLHVEQUFLLENBQUMsOERBQVcsa0JBQWtCLHlGQUF5RixJQUFJLFdBQVcsc0RBQUksYUFBYSxrQ0FBa0MsMEJBQTBCLHNEQUFJLDJCQUEyQix1QkFBdUIsSUFBSSx3Q0FBd0MsdUJBQXVCLEtBQUssR0FBRyxHQUFHLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUN6eEIsNERBQTRELHNEQUFJLHdCQUF3Qix3QkFBd0IsSUFBSSxVQUFVLHVEQUFLLFlBQVkscUJBQXFCLHVEQUFLLENBQUMsOERBQVcsa0JBQWtCLHVJQUF1SSxJQUFJLFdBQVcsc0RBQUksMkJBQTJCLFdBQVcsSUFBSSxxQ0FBcUMsOEJBQThCLHNEQUFJLDJCQUEyQiwyQkFBMkIsSUFBSSw4QkFBOEIsMkJBQTJCLEtBQUssR0FBRyxLQUFLLEdBQUcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsc0RBQUksd0JBQXdCLHVCQUF1QixJQUFJLFVBQVUsdURBQUssWUFBWSxrQkFBa0Isc0RBQUksQ0FBQywrREFBWSxJQUFJLHVLQUF1SyxJQUFJLEdBQUcsSUFBSSxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLFlBQVksd0JBQXdCLHNEQUFJLENBQUMsK0RBQVksSUFBSSx3TEFBd0wsSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsdURBQUssWUFBWSx5QkFBeUIsc0RBQUksQ0FBQywrREFBWSxJQUFJLDJMQUEyTCxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSx1REFBSyxZQUFZLDRCQUE0QixzREFBSSxDQUFDLCtEQUFZLElBQUksaU1BQWlNLElBQUksR0FBRyxJQUFJLEdBQUcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx3REFBRyxJQUFJLG9CQUFvQixHQUFHLEdBQUcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsc0RBQUksQ0FBQywrREFBTSxrQkFBa0IsOENBQThDLElBQUksbUNBQW1DLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxzREFBSSxTQUFTLEdBQUcsc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsdURBQVMsSUFBSTtBQUNsZ0UsNEJBQTRCLHNEQUFJLENBQUMsd0RBQU8sa0JBQWtCLHdEQUF3RCxJQUFJLFVBQVUsc0RBQUkseUJBQXlCLHNCQUFzQixJQUFJLHdCQUF3QixJQUFJO0FBQ25OO0FBQ0EsZ0NBQWdDLHNEQUFJLENBQUMsd0RBQUksa0JBQWtCLHdCQUF3QixJQUFJLFVBQVUsdURBQUssQ0FBQyw2REFBUyxrQkFBa0IsU0FBUyxrQkFBa0IsSUFBSSxXQUFXLHNEQUFJLENBQUMsOERBQVUsSUFBSSx3Q0FBd0MsR0FBRyxzREFBSSxDQUFDLGlFQUFhLElBQUksbUJBQW1CLEdBQUcsdURBQUssQ0FBQyw2REFBUyxrQkFBa0IsU0FBUyxrQkFBa0IsSUFBSSxrRUFBa0Usc0RBQUksU0FBUyw4RUFBOEUsc0RBQUksU0FBUyxrREFBa0Qsc0RBQUksU0FBUywyQ0FBMkMsc0RBQUksU0FBUyxJQUFJLEtBQUssSUFBSTtBQUNwb0Isa0NBQWtDLHNEQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsdURBQVMsSUFBSSxnRUFBZ0UsdURBQUssV0FBVyx1SkFBdUo7QUFDM1UsOEJBQThCLHNEQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsdURBQVMsSUFBSTtBQUNoRyw0QkFBNEIsc0RBQUksQ0FBQyx3REFBTyxrQkFBa0Isd0RBQXdELElBQUksVUFBVSxzREFBSSx5QkFBeUIsc0JBQXNCLElBQUksd0JBQXdCLElBQUk7QUFDbk4sd0RBQXdELHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHVEQUFLLFNBQVMseURBQXlELEdBQUcsc0RBQUksQ0FBQyxrRUFBUyxJQUFJLHNDQUFzQyxJQUFJO0FBQzVOLGtDQUFrQyxzREFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLHNEQUFJLFVBQVUsVUFBVSxzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxDQUFDLHVEQUFTLElBQUksOERBQThELHNEQUFJLFdBQVcsc0NBQXNDO0FBQ25QLGtDQUFrQyxzREFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFDOUQ7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQsWUFBWSx1REFBSyxZQUFZLGtCQUFrQixzREFBSSwyQkFBMkIscURBQXFELElBQUksbUNBQW1DLHNEQUFJLDJCQUEyQixxQkFBcUIsSUFBSSx3QkFBd0Isb0JBQW9CLEtBQUs7QUFDblI7QUFDQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEt1RDtBQUMvRSxvQkFBb0IsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksU0FBUywrQkFBK0IsR0FBRyxzREFBSSxVQUFVLGtIQUFrSCxJQUFJO0FBQzVPLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbUQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNJLHlCQUF5QixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxTQUFTLDJCQUEyQixHQUFHO0FBQ3ZHLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnVCO0FBQ2Y7QUFDWjtBQUM0QjtBQUNYO0FBQ1c7QUFDakQsNkNBQWUsQ0FBQyxzREFBSSxDQUFDLDJEQUFhLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFVLElBQUksR0FBRztBQUN0RSxzREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BFO0FBQ2E7QUFDdkMsZ0JBQWdCLGdFQUFXO0FBQzNCO0FBQ0E7QUFDQSxlQUFlLGlEQUFVLHFDQUFxQyxTQUFTLHdEQUFVLElBQUk7QUFDckY7QUFDQTtBQUNBLGVBQWUsZ0RBQVMsK0JBQStCLFNBQVMsd0RBQVUsSUFBSTtBQUM5RTtBQUNBO0FBQ0EsZUFBZSxpREFBVSx5Q0FBeUMsU0FBUyx3REFBVSwwQkFBMEI7QUFDL0c7QUFDQTtBQUNBLGlFQUFlLHFCQUFxQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL0FwcFNpZGViYXIuY3NzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL2NhcmQuY3NzIiwid2VicGFjazovL3dlYi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL0FwcFNpZGViYXIuY3NzP2YxYjkiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvY2FyZC5jc3M/Njg4MSIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbW1vbi9FdmVudEJ1cy5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd25UaW1lci5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9EYXRlVGltZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvaG9va3MvdXNlQ291bnRkb3duLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlcy9hdXRoLWhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL0FwcFNpZGVCYXIudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9BdWRpdE15QWRkcmVzcy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQ291bnR5SW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0Rvd25sb2Fkc1BhZ2UudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0dob3N0YnVzdGVycy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvTXlWb3RpbmdIaXN0b3J5LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9OZXdzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9SZXNvdXJjZXMudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VzL0Rvd25sb2FkU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4gICAgREVNTyBTVFlMRVxcclxcbiovXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjAsIDE0NywgMjA2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnRuIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XFxyXFxuICAgIG1hcmdpbjogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pLFxcclxcbnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBTSURFQkFSIFNUWUxFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMDI5Mjk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGg0LFxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuQ1RBcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0MTQzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMjEsIDIyMSk7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM4MzAyMDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXFxyXFxuYVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjQ0LCAyNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGM0ZDRlO1xcclxcbn1cXHJcXG5cXHJcXG5hW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB1bCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRlNGU1MDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnVsLkNUQXMgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmEuZG93bmxvYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzczODZENTtcXHJcXG59XFxyXFxuXFxyXFxuYS5hcnRpY2xlLFxcclxcbmEuYXJ0aWNsZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIENPTlRFTlQgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIE1FRElBUVVFUklFU1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRvcDogYXV0bztcXHJcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIGgzLFxcclxcbiAgICAjc2lkZWJhciAuQ1RBcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCB1bCBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgPiBmb3JtID4gbGFiZWwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXhwaXJlZC1ub3RpY2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2NmYzljOTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmV4cGlyZWQtbm90aWNlID4gc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmV4cGlyZWQtbm90aWNlID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwLjc1cmVtIDAgMC43NXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNob3ctY291bnRlciAuY291bnRkb3duLmRhbmdlciB7XFxyXFxuICAgIGNvbG9yOiAjZmYwMDAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24gPiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24gPiBzcGFuIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjUwcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24gPiBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24tbGluayB7IFxcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0FwcFNpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBR0Q7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFlB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QUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXHJcXG4gICAgREVNTyBTVFlMRVxcclxcbiovXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFxcXCI7XFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjAsIDE0NywgMjA2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnRuIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XFxyXFxuICAgIG1hcmdpbjogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pLFxcclxcbnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAgICBTSURFQkFSIFNUWUxFXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIG1pbi13aWR0aDogMzQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMDI5Mjk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGg0LFxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuQ1RBcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIHVsIHVsIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICByaWdodDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0MTQzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgc3Ryb25nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMjEsIDIyMSk7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM4MzAyMDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXFxyXFxuYVthcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIl0ge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjQ0LCAyNDQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGM0ZDRlO1xcclxcbn1cXHJcXG5cXHJcXG5hW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB1bCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRlNGU1MDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnVsLkNUQXMgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmEuZG93bmxvYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzczODZENTtcXHJcXG59XFxyXFxuXFxyXFxuYS5hcnRpY2xlLFxcclxcbmEuYXJ0aWNsZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIENPTlRFTlQgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIE1FRElBUVVFUklFU1xcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRvcDogYXV0bztcXHJcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIGgzLFxcclxcbiAgICAjc2lkZWJhciAuQ1RBcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCB1bCBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIGkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyID4gZm9ybSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgPiBmb3JtID4gbGFiZWwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXhwaXJlZC1ub3RpY2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIG1hcmdpbjogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2NmYzljOTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmV4cGlyZWQtbm90aWNlID4gc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmV4cGlyZWQtbm90aWNlID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwLjc1cmVtIDAgMC43NXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNob3ctY291bnRlciAuY291bnRkb3duLmRhbmdlciB7XFxyXFxuICAgIGNvbG9yOiAjZmYwMDAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24gPiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24gPiBzcGFuIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjUwcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24gPiBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24tbGluayB7IFxcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZm8tY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIxNywgMTY3KTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uYSB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm8tY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIxNywgMTY3KTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uYSB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBjb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxyXFxuICAgICAgbW9ub3NwYWNlO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Q7O2dCQUVZO0lBQ1osbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFO2VBQ1c7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxyXFxuICAgICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcclxcbiAgICAgIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBjb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxyXFxuICAgICAgbW9ub3NwYWNlO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwU2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcFNpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IGV2ZW50QnVzID0ge1xyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGUpID0+IGNhbGxiYWNrKGUuZGV0YWlsKSk7XHJcbiAgICB9LFxyXG4gICAgZGlzcGF0Y2goZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGRhdGEgfSkpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZShldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBldmVudEJ1cztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IERhdGVUaW1lRGlzcGxheSBmcm9tICcuL0RhdGVUaW1lRGlzcGxheSc7XHJcbmltcG9ydCB7IHVzZUNvdW50ZG93biB9IGZyb20gJy4uL2hvb2tzL3VzZUNvdW50ZG93bic7XHJcbmNvbnN0IEV4cGlyZWROb3RpY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZXhwaXJlZC1ub3RpY2VcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogXCJFeHBpcmVkISEhXCIgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiUGxlYXNlIHNlbGVjdCBhIGZ1dHVyZSBkYXRlIGFuZCB0aW1lLlwiIH0pXSB9KSkpO1xyXG59O1xyXG5jb25zdCBTaG93Q291bnRlciA9ICh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pID0+IHtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJzaG93LWNvdW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChEYXRlVGltZURpc3BsYXksIHsgdmFsdWU6IGRheXMsIHR5cGU6ICdEYXlzJywgaXNEYW5nZXI6IGRheXMgPD0gMyB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCI6XCIgfSksIF9qc3goRGF0ZVRpbWVEaXNwbGF5LCB7IHZhbHVlOiBob3VycywgdHlwZTogJ0hvdXJzJywgaXNEYW5nZXI6IGZhbHNlIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIjpcIiB9KSwgX2pzeChEYXRlVGltZURpc3BsYXksIHsgdmFsdWU6IG1pbnV0ZXMsIHR5cGU6ICdNaW5zJywgaXNEYW5nZXI6IGZhbHNlIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIjpcIiB9KSwgX2pzeChEYXRlVGltZURpc3BsYXksIHsgdmFsdWU6IHNlY29uZHMsIHR5cGU6ICdTZWNvbmRzJywgaXNEYW5nZXI6IGZhbHNlIH0pXSB9KSkpO1xyXG59O1xyXG5jb25zdCBDb3VudGRvd25UaW1lciA9ICh7IHRhcmdldERhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzXSA9IHVzZUNvdW50ZG93bih0YXJnZXREYXRlKTtcclxuICAgIGlmIChkYXlzICsgaG91cnMgKyBtaW51dGVzICsgc2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIF9qc3goRXhwaXJlZE5vdGljZSwge30pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFNob3dDb3VudGVyLCB7IGRheXM6IGRheXMsIGhvdXJzOiBob3VycywgbWludXRlczogbWludXRlcywgc2Vjb25kczogc2Vjb25kcyB9KSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5jb25zdCBEYXRlVGltZURpc3BsYXkgPSAoeyB2YWx1ZSwgdHlwZSwgaXNEYW5nZXIgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBpc0RhbmdlciA/ICdjb3VudGRvd24gZGFuZ2VyJyA6ICdjb3VudGRvd24nIH0sIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiB2YWx1ZSB9KSwgX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogdHlwZSB9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVEaXNwbGF5O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgVXNlclNlcnZpY2UuZ2V0UHVibGljQ29udGVudCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImhlYWRlclwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImp1bWJvdHJvblwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgeyBjaGlsZHJlbjogXCJSZWxlYXNlIHYxMDAyMjAyMlwiIH0pLCBfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogXCJGZWF0dXJlcyBTdXBwb3J0ZWRcIiB9KSwgX2pzeHMoXCJ1bFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiR2hvc3RidXN0aW5nIExvY2F0aW9uIFJlcG9ydDogRG93bmxvYWQgcmVwb3J0IG9mIHN1c3BlY3QgbG9jYXRpb25zIGNhbnZhc3NlZCBhY3Jvc3MgTWljaGlnYW5cIiB9KSwgX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiTXkgVm90aW5nIEhpc3Rvcnk6IEV4YW1pbmUgeW91ciB2b3RpbmcgaGlzdG9yeSBmb3IgYW5vbWFsaWVzXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIkRvd25sb2FkIFZvdGVyIHJvbGwgRmlsZTogRG93bmxvYWQganVyaXNkaWN0aW9uIGxldmVsIHZvdGVyIGZpbGUgd2l0aCB2b3RpbmcgaGlzdG9yeSBpbmNsdWRlZC5cIiB9KSwgX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiRG93bmxvYWQgVm90ZXIgcm9sbCBGaWxlOiBDb3VudHkgbGVhZHMgY2FuIGRvd25sb2FkIGNvdW50eSBsZXZlbCB2b3RlciBmaWxlIHdpdGggdm90aW5nIGhpc3RvcnkgaW5jbHVkZWQuXCIgfSldIH0pLCBfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogXCJLbm93biBJc3N1ZXNcIiB9KSwgX2pzeHMoXCJ1bFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiSWYgc2VhcmNoIGZhaWxzIG9yIGl0IGxvb2tzIGxpa2UgdGhlIHByb2dyZXNzIHNwaW5uZXIgaXMgc3R1Y2sgaW4gYSBsb29wIGl0IGlzIHZlcnkgbGlrZWx5IHRoYXQgeW91ciBzZXNzaW9uIGhhcyB0aW1lZCBvdXQuXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIldvcmthcm91bmQ6IFNpZ24gb3V0IGJ5IGNsaWNraW5nIGxvZyBvdXQgYXQgdGhlIHRvcCByaWdodCBhbmQgc2lnbiBiYWNrIGluLlwiIH0pXSB9KSwgX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IFwiVXBjb21pbmcgdXBkYXRlc1wiIH0pLCBfanN4cyhcInVsXCIsIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCJGaXgga25vd24gaXNzdWVzIGlmIHRoZXkgc3RpbGwgcGVyc2lzdFwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCJBZGQgcGFzc3dvcmQgY29tcGxleGl0eSBhbmQgY29uZmlybSBwYXNzd29yZCBmaWVsZCBvbiBTaWduIHVwIHNjcmVlblwiIH0pLCBfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtcIlVwZGF0ZSBHaG9zdGJ1c3RpbmcgY3JpdGVyaWEgdG8gcHVsbCBmb2xsb3dpbmcgY3JpdGVyaWFcIiwgX2pzeHMoXCJ1bFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IFwiMDAxX0VYVF9OTUJSX01TTkc6IFRoZSByZWdpc3RyYXRpb24gaGFzIGFuIEluZGV4IGJ1dCBkb2VzIG5vdCBoYXZlIGEgbnVtYmVyIHdoZXJlIG90aGVyIHJlZ2lzdHJhdGlvbnMgd2l0aCB0aGUgc2FtZSBhZGRyZXNzIGluY2x1ZGUgbnVtYmVycyBvciBhIGxldHRlciBhcyByZXF1aXJlZCBieSBsYXcgXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIjAwM19NSVNDX0xBVzogQW4gRUlGIHRlYW0gbWVtYmVyIGhhcyBpZGVudGlmaWVkIHRoaXMgYWRkcmVzcyBhcyBhIG5vbi1yZXNpZGVudGlhbCBsb2NhdGlvbiwgUHJpc29uLCBSViBQYXJrLVNlYXNvbmFsLCBWaXJ0dWFsTWFpbGJveCwgQWxsIENhbXBzLVNlYXNvbmFsLCBBbGwgQ2VtZXRlcmllcy4gXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIjAwNF9aaXBDb2RlX01pc21hdGNoOiBSZWdpc3RyYXRpb24gZG9lcyBub3QgbWF0Y2ggYSBzdGFuZGFyZCB6aXAgY29kZSBwcm92aWRlZCBieSBVU1BTLlwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCIwMDRfWmlwQ29kZV9QT0JPWDogUmVnaXN0cmF0aW9uIG1hdGNoZXMgdGhhdCBvZiBhIHN0YW5kYXJkIHppcCBjb2RlIHByb3ZpZGVkIGJ5IFVTUFMgZm9yIGEgUE8gQm94LlwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCIwMDVfUkVHX0RBVEVfQktEVDogTmV3IHJlZ2lzdHJhdGlvbnMgYXJlIGZsYWdnZWQgd2hlbiB0aGV5IGFyZSBiYWNrLWRhdGVkIHByaW9yIHRvIHRoZWlyIGNyZWF0aW9uLlwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCIwMDdfTkFNRV9HT05FOiBUaGUgTmFtZSBtYXRjaGVzIGEgbmFtZSByZW1vdmVkIGluIHRoZSBwYXN0LlwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCIwMDdfVm90ZXJJRF9HT05FOiBUaGUgdm90ZXJJRCBtYXRjaGVzIGEgdm90ZXJJRCByZW1vdmVkIGluIHRoZSBwYXN0LlwiIH0pLCBfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtcIjAwOF9OQ09BX0RhdGVfSlVSOiBUaGUgTmF0aW9uYWwgQ2hhbmdlIG9mIEFkZHJlc3MgZGF0YSBpbmRpY2F0ZXMgdGhpcyBpbmRpdmlkdWFsIFwiLCBfanN4KFwiZm9udFwiLCBPYmplY3QuYXNzaWduKHsgY29sb3I6IFwicmVkXCIgfSwgeyBjaGlsZHJlbjogXCJtb3ZlZCBvdXRzaWRlIG9mIHRoZWlyIEpVUklTRElDVElPTlwiIH0pKSwgXCIgNjAgZGF5cyBQUklPUiB0byB2b3RpbmcgaW4gdGhlaXIgZm9ybWVyIHByZWNpbmN0LlwiXSB9KSwgX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbXCIwMDhfTkNPQV9EYXRlX0NUWTogVGhlIE5hdGlvbmFsIENoYW5nZSBvZiBBZGRyZXNzIGRhdGEgaW5kaWNhdGVzIHRoaXMgaW5kaXZpZHVhbCBcIiwgX2pzeChcImZvbnRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcInJlZFwiIH0sIHsgY2hpbGRyZW46IFwibW92ZWQgb3V0c2lkZSBvZiB0aGVpciBDT1VOVFlcIiB9KSksIFwiIDYwIGRheXMgUFJJT1IgdG8gdm90aW5nIGluIHRoZWlyIGZvcm1lciBwcmVjaW5jdC5cIl0gfSksIF9qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW1wiMDA4X05DT0FfRGF0ZV9TVDogVGhlIE5hdGlvbmFsIENoYW5nZSBvZiBBZGRyZXNzIGRhdGEgaW5kaWNhdGVzIHRoaXMgaW5kaXZpZHVhbCBcIiwgX2pzeChcImZvbnRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiBcInJlZFwiIH0sIHsgY2hpbGRyZW46IFwibW92ZWQgb3V0c2lkZSBvZiBNSUNISUdBTlwiIH0pKSwgXCI2MCBkYXlzIFBSSU9SIHRvIHZvdGluZyBpbiB0aGVpciBmb3JtZXIgcHJlY2luY3QuXCJdIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCIwMDhfTkNPQV9Nb3ZlZDogVGhlIE5hdGlvbmFsIENoYW5nZSBvZiBBZGRyZXNzIGRhdGEgaW5kaWNhdGVzIHRoaXMgaW5kaXZpZHVhbCByZWNlbnRseSBtb3ZlZC5cIiB9KV0gfSldIH0pXSB9KV0gfSkpIH0pKSB9KSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVMb2dpbiA9IHRoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUxvZ2luKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZvcm0udmFsaWRhdGVBbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0J0bi5jb250ZXh0Ll9lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuc3RhdGUudXNlcm5hbWUsIHRoaXMuc3RhdGUucGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbWQtMTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2FyZCBjYXJkLWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogdGhpcy5oYW5kbGVMb2dpbiwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInVzZXJuYW1lXCIgfSwgeyBjaGlsZHJlbjogXCJVc2VybmFtZVwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcInVzZXJuYW1lXCIsIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJuYW1lLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVVzZXJuYW1lLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkXSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInBhc3N3b3JkXCIgfSwgeyBjaGlsZHJlbjogXCJQYXNzd29yZFwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJwYXNzd29yZFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5wYXNzd29yZCwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VQYXNzd29yZCwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZF0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiwgZGlzYWJsZWQ6IHRoaXMuc3RhdGUubG9hZGluZyB9LCB7IGNoaWxkcmVuOiBbdGhpcy5zdGF0ZS5sb2FkaW5nICYmIChfanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiIH0pKSwgX2pzeChcInNwYW5cIiwgeyBjaGlsZHJlbjogXCJMb2dpblwiIH0pXSB9KSkgfSkpLCB0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogdGhpcy5zdGF0ZS5tZXNzYWdlIH0pKSB9KSkpLCBfanN4KENoZWNrQnV0dG9uLCB7IHN0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0J0biA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSkgfSkpIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDogbnVsbCxcclxuICAgICAgICAgICAgdXNlclJlYWR5OiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudFVzZXI6IHsgdXNlcm5hbWU6IFwiXCIgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiBcIi9ob21lXCIgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlciwgdXNlclJlYWR5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiB0aGlzLnN0YXRlLnJlZGlyZWN0IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46ICh0aGlzLnN0YXRlLnVzZXJSZWFkeSkgP1xyXG4gICAgICAgICAgICAgICAgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJoZWFkZXJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJqdW1ib3Ryb25cIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImgzXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IGN1cnJlbnRVc2VyLnVzZXJuYW1lIH0pLCBcIiBQcm9maWxlXCJdIH0pIH0pKSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiVG9rZW46XCIgfSksIFwiIFwiLCBjdXJyZW50VXNlci5hY2Nlc3NUb2tlbi5zdWJzdHJpbmcoMCwgMjApLCBcIiAuLi5cIiwgXCIgXCIsIGN1cnJlbnRVc2VyLmFjY2Vzc1Rva2VuLnN1YnN0cihjdXJyZW50VXNlci5hY2Nlc3NUb2tlbi5sZW5ndGggLSAyMCldIH0pLCBfanN4cyhcInBcIiwgeyBjaGlsZHJlbjogW19qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJJZDpcIiB9KSwgXCIgXCIsIGN1cnJlbnRVc2VyLmlkXSB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiRW1haWw6XCIgfSksIFwiIFwiLCBjdXJyZW50VXNlci5lbWFpbF0gfSksIF9qc3goXCJzdHJvbmdcIiwgeyBjaGlsZHJlbjogXCJBdXRob3JpdGllczpcIiB9KSwgX2pzeChcInVsXCIsIHsgY2hpbGRyZW46IGN1cnJlbnRVc2VyLnJvbGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXIucm9sZXMubWFwKChyb2xlLCBpbmRleCkgPT4gX2pzeChcImxpXCIsIHsgY2hpbGRyZW46IHJvbGUgfSwgaW5kZXgpKSB9KV0gfSkgOiBudWxsIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuaW1wb3J0IHsgaXNFbWFpbCB9IGZyb20gXCJ2YWxpZGF0b3JcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuY29uc3QgcmVxdWlyZWQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgZW1haWwgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAoIWlzRW1haWwodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwuXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgdnVzZXJuYW1lID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMgfHwgdmFsdWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IFwiVGhlIHVzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiAzIGFuZCAyMCBjaGFyYWN0ZXJzLlwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHZwYXNzd29yZCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCA2IHx8IHZhbHVlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoZSBwYXNzd29yZCBtdXN0IGJlIGJldHdlZW4gNiBhbmQgNDAgY2hhcmFjdGVycy5cIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlZ2lzdGVyID0gdGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VVc2VybmFtZSA9IHRoaXMub25DaGFuZ2VVc2VybmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VFbWFpbCA9IHRoaXMub25DaGFuZ2VFbWFpbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlRW1haWwoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVJlZ2lzdGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbGlkYXRlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdG4uY29udGV4dC5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBBdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzTWVzc2FnZSA9IChlcnJvci5yZXNwb25zZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbC1tZC0xMlwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjYXJkIGNhcmQtY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiB0aGlzLmhhbmRsZVJlZ2lzdGVyLCByZWY6IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSwgeyBjaGlsZHJlbjogWyF0aGlzLnN0YXRlLnN1Y2Nlc3NmdWwgJiYgKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInVzZXJuYW1lXCIgfSwgeyBjaGlsZHJlbjogXCJVc2VybmFtZVwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcInVzZXJuYW1lXCIsIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJuYW1lLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVVzZXJuYW1lLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkLCB2dXNlcm5hbWVdIH0pXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGFiZWxcIiwgT2JqZWN0LmFzc2lnbih7IGh0bWxGb3I6IFwiZW1haWxcIiB9LCB7IGNoaWxkcmVuOiBcIkVtYWlsXCIgfSkpLCBfanN4KElucHV0LCB7IHR5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwiZW1haWxcIiwgdmFsdWU6IHRoaXMuc3RhdGUuZW1haWwsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlRW1haWwsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWQsIGVtYWlsXSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcInBhc3N3b3JkXCIgfSwgeyBjaGlsZHJlbjogXCJQYXNzd29yZFwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJwYXNzd29yZFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5wYXNzd29yZCwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VQYXNzd29yZCwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZCwgdnBhc3N3b3JkXSB9KV0gfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgfSwgeyBjaGlsZHJlbjogXCJTaWduIFVwXCIgfSkpIH0pKV0gfSkpLCB0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiB0aGlzLnN0YXRlLnN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiB0aGlzLnN0YXRlLm1lc3NhZ2UgfSkpIH0pKSksIF9qc3goQ2hlY2tCdXR0b24sIHsgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQnRuID0gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSldIH0pKSB9KSkgfSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCB1c2VDb3VudGRvd24gPSAodGFyZ2V0RGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHRhcmdldERhdGUpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IFtjb3VudERvd24sIHNldENvdW50RG93bl0gPSB1c2VTdGF0ZShjb3VudERvd25EYXRlIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q291bnREb3duKGNvdW50RG93bkRhdGUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgW2NvdW50RG93bkRhdGVdKTtcclxuICAgIHJldHVybiBnZXRSZXR1cm5WYWx1ZXMoY291bnREb3duKTtcclxufTtcclxuY29uc3QgZ2V0UmV0dXJuVmFsdWVzID0gKGNvdW50RG93bikgPT4ge1xyXG4gICAgLy8gY2FsY3VsYXRlIHRpbWUgbGVmdFxyXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoY291bnREb3duIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoY291bnREb3duICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGNvdW50RG93biAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGNvdW50RG93biAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgcmV0dXJuIFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc107XHJcbn07XHJcbmV4cG9ydCB7IHVzZUNvdW50ZG93biB9O1xyXG4iLCIvLyBUaGlzIG9wdGlvbmFsIGNvZGUgaXMgdXNlZCB0byByZWdpc3RlciBhIHNlcnZpY2Ugd29ya2VyLlxyXG4vLyByZWdpc3RlcigpIGlzIG5vdCBjYWxsZWQgYnkgZGVmYXVsdC5cclxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXHJcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxyXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gYSBwYWdlLCBhZnRlciBhbGwgdGhlXHJcbi8vIGV4aXN0aW5nIHRhYnMgb3BlbiBvbiB0aGUgcGFnZSBoYXZlIGJlZW4gY2xvc2VkLCBzaW5jZSBwcmV2aW91c2x5IGNhY2hlZFxyXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXHJcbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cclxuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcclxuY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcclxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XHJcbiAgICAvLyAxMjcuMC4wLjAvOCBhcmUgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvKSk7XHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAvLyBUaGUgVVJMIGNvbnN0cnVjdG9yIGlzIGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFNXLlxyXG4gICAgICAgIGNvbnN0IHB1YmxpY1VybCA9IG5ldyBVUkwocHJvY2Vzcy5lbnYuUFVCTElDX1VSTCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmIChwdWJsaWNVcmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICAgICAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXHJcbiAgICAgICAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cclxuICAgICAgICAgICAgLy8gc2VydmUgYXNzZXRzOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2NyZWF0ZS1yZWFjdC1hcHAvaXNzdWVzLzIzNzRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XHJcbiAgICAgICAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBydW5uaW5nIG9uIGxvY2FsaG9zdC4gTGV0J3MgY2hlY2sgaWYgYSBzZXJ2aWNlIHdvcmtlciBzdGlsbCBleGlzdHMgb3Igbm90LlxyXG4gICAgICAgICAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgc29tZSBhZGRpdGlvbmFsIGxvZ2dpbmcgdG8gbG9jYWxob3N0LCBwb2ludGluZyBkZXZlbG9wZXJzIHRvIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyB3ZWIgYXBwIGlzIGJlaW5nIHNlcnZlZCBjYWNoZS1maXJzdCBieSBhIHNlcnZpY2UgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd3b3JrZXIuIFRvIGxlYXJuIG1vcmUsIHZpc2l0IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcbiAgICAgICAgLnJlZ2lzdGVyKHN3VXJsKVxyXG4gICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcclxuICAgICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGUgcHJldmlvdXMgc2VydmljZSB3b3JrZXIgd2lsbCBzdGlsbCBzZXJ2ZSB0aGUgb2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudCB1bnRpbCBhbGwgY2xpZW50IHRhYnMgYXJlIGNsb3NlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYnMgZm9yIHRoaXMgcGFnZSBhcmUgY2xvc2VkLiBTZWUgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cclxuICAgIGZldGNoKHN3VXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyAnU2VydmljZS1Xb3JrZXInOiAnc2NyaXB0JyB9XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxyXG4gICAgICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKSkge1xyXG4gICAgICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxyXG4gICAgICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJyk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcclxuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHlcclxuICAgICAgICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhIZWFkZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgIGlmICh1c2VyICYmIHVzZXIuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAvLyByZXR1cm4geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB1c2VyLmFjY2Vzc1Rva2VuIH07IC8vIGZvciBTcHJpbmcgQm9vdCBiYWNrLWVuZFxyXG4gICAgICAgIHJldHVybiB7ICd4LWFjY2Vzcy10b2tlbic6IHVzZXIuYWNjZXNzVG9rZW4gfTsgLy8gZm9yIE5vZGUuanMgRXhwcmVzcyBiYWNrLWVuZFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIFwiL2FwaS9hdXRoL1wiO1xyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoQVBJX1VSTCArIFwic2lnbmluXCIsIHtcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlcih1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoQVBJX1VSTCArIFwic2lnbnVwXCIsIHtcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4vYXV0aC1oZWFkZXInO1xyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvdGVzdC8nO1xyXG5jbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBnZXRQdWJsaWNDb250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICdhbGwnKTtcclxuICAgIH1cclxuICAgIGdldFVzZXJCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAndXNlcicsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0TW9kZXJhdG9yQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ21vZCcsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QWRtaW5Cb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAnYWRtaW4nLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclNlcnZpY2UoKTtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTXlWb3RpbmdIaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9NeVZvdGluZ0hpc3RvcnknO1xyXG5pbXBvcnQgR2hvc3RidXN0ZXJzIGZyb20gJy4vY29tcG9uZW50cy9HaG9zdGJ1c3RlcnMnO1xyXG5pbXBvcnQgQXVkaXRNeUFkZHJlc3MgZnJvbSAnLi9jb21wb25lbnRzL0F1ZGl0TXlBZGRyZXNzJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tICcuL2NvbXBvbmVudHMvUmVzb3VyY2VzJztcclxuaW1wb3J0IEV2ZW50QnVzIGZyb20gXCIuL2NvbW1vbi9FdmVudEJ1c1wiO1xyXG5pbXBvcnQgJy4vQXBwU2lkZWJhci5jc3MnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBOZXdzIGZyb20gJy4vY29tcG9uZW50cy9OZXdzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3QnO1xyXG5pbXBvcnQgQ2hhbGxlbmdlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbGxlbmdlTGlzdCc7XHJcbi8vaW1wb3J0IFZvdGVyRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvVm90ZXJEYXRhJztcclxuaW1wb3J0IERvd25sb2Fkc1BhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0Rvd25sb2Fkc1BhZ2UnO1xyXG5pbXBvcnQgQ291bnRkb3duVGltZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyJztcclxuY2xhc3MgQXBwU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd01vZGVyYXRvckJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0FkbWluQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgIHNob3dNb2RlcmF0b3JCb2FyZDogdXNlci5yb2xlcy5pbmNsdWRlcyhcIlJPTEVfREFUQV9DVVJBVE9SXCIpLFxyXG4gICAgICAgICAgICAgICAgc2hvd0FkbWluQm9hcmQ6IHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRXZlbnRCdXMub24oXCJsb2dvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ091dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgRXZlbnRCdXMucmVtb3ZlKFwibG9nb3V0XCIpO1xyXG4gICAgfVxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93TW9kZXJhdG9yQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93QWRtaW5Cb2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VXNlciwgc2hvd01vZGVyYXRvckJvYXJkLCBzaG93QWRtaW5Cb2FyZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBtaWNoaWdhbk1pZHRlcm1FbGVjdGlvbkRhdGUgPSBuZXcgRGF0ZSgnMjAyMi0xMS0wOFQwNzowMDowMC0wNDowMCcpLmdldFRpbWUoKTtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid3JhcHBlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcIm5hdlwiLCBPYmplY3QuYXNzaWduKHsgaWQ6IFwic2lkZWJhclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInNpZGViYXItaGVhZGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJoNFwiLCB7IGNoaWxkcmVuOiBcIkVsZWN0aW9uIEludGVncml0eSBGb3JjZVwiIH0pLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiRUlGXCIgfSldIH0pKSwgX2pzeHMoXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImxpc3QtdW5zdHlsZWQgY29tcG9uZW50c1wiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiI2hvbWVTdWJtZW51XCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBjbGFzc05hbWU6IFwiZHJvcGRvd24tdG9nZ2xlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS11c2VyLXNlY3JldFwiIH0pLCBcIlxcdTAwQTAgQXVkaXRcIl0gfSkpLCBfanN4KFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBsaXN0LXVuc3R5bGVkXCIsIGlkOiBcImhvbWVTdWJtZW51XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvbXktdm90aW5nLWhpc3RvcnlcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJWb3RpbmcgSGlzdG9yeVwiIH0pKSB9KSkgfSkpXSB9KSwgX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNkb3dubG9hZFBhZ2VTdWJtZW51XCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBjbGFzc05hbWU6IFwiZHJvcGRvd24tdG9nZ2xlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1kb3dubG9hZFwiIH0pLCBcIlxcdTAwQTAgRG93bmxvYWRzXCJdIH0pKSwgX2pzeChcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGFwc2UgbGlzdC11bnN0eWxlZFwiLCBpZDogXCJkb3dubG9hZFBhZ2VTdWJtZW51XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvdm90ZXItZGF0YVwiLCBjbGFzc05hbWU6IFwibmF2LWxpbmtcIiB9LCB7IGNoaWxkcmVuOiBcIlZvdGVyIERhdGFcIiB9KSkgfSkpIH0pKV0gfSksIF9qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIjcGFnZVN1Ym1lbnVcIiwgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsIGNsYXNzTmFtZTogXCJkcm9wZG93bi10b2dnbGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLWdsYXNzZXNcIiB9KSwgXCJcXHUwMEEwIFJlcG9ydHNcIl0gfSkpLCBfanN4cyhcInVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sbGFwc2UgbGlzdC11bnN0eWxlZFwiLCBpZDogXCJwYWdlU3VibWVudVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9naG9zdGJ1c3RlcnMtYnktY291bnR5XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFwiR2hvc3RidXN0aW5nIExvY2F0aW9uc1wiIH0pKSB9KSksIF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2NoYWxsZW5nZS1saXN0XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFwiQ2hhbGxlbmdlIExpc3RcIiB9KSkgfSkpXSB9KSldIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogX2pzeHMoTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9jb250YWN0XCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtYWRkcmVzcy1jYXJkXCIgfSksIFwiXFx1MDBBMCBDb250YWN0XCJdIH0pKSB9KV0gfSkpXSB9KSksIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBpZDogXCJjb250ZW50XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJuYXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2lkZWJhckNvbGxhcHNlXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnRuXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1hbGlnbi1sZWZ0XCIgfSksIF9qc3goXCJzcGFuXCIsIHt9KV0gfSkpLCBfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1kYXJrIGQtaW5saW5lLWJsb2NrIGQtbGctbm9uZSBtbC1hdXRvXCIsIHR5cGU6IFwiYnV0dG9uXCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImRhdGEtdGFyZ2V0XCI6IFwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiwgXCJhcmlhLWNvbnRyb2xzXCI6IFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBcImFyaWEtbGFiZWxcIjogXCJUb2dnbGUgbmF2aWdhdGlvblwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1hbGlnbi1qdXN0aWZ5XCIgfSkgfSkpLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbXCJcXHUwMEEwXCIsIF9qc3goQ291bnRkb3duVGltZXIsIHsgdGFyZ2V0RGF0ZTogbWljaGlnYW5NaWR0ZXJtRWxlY3Rpb25EYXRlIH0pXSB9KSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLCBpZDogXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJ1bFwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkhvbWVcIiB9KSkgfSkpLCBzaG93QWRtaW5Cb2FyZCAmJiAoX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvYWRtaW5cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiQWRtaW5cIiB9KSkgfSkpKV0gfSkpIH0pKSwgY3VycmVudFVzZXIgPyAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvcHJvZmlsZVwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogY3VycmVudFVzZXIudXNlcm5hbWUgfSkpIH0pKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYVwiLCBPYmplY3QuYXNzaWduKHsgaHJlZjogXCIvbG9naW5cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiLCBvbkNsaWNrOiB0aGlzLmxvZ091dCB9LCB7IGNoaWxkcmVuOiBcIkxvZ091dFwiIH0pKSB9KSldIH0pKSkgOiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvbG9naW5cIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiTG9naW5cIiB9KSkgfSkpLCBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi9yZWdpc3RlclwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJTaWduIFVwXCIgfSkpIH0pKV0gfSkpKV0gfSkpIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImxpbmVcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhTd2l0Y2gsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiBbXCIvXCIsIFwiL2hvbWVcIl0sIGNvbXBvbmVudDogSG9tZSB9KSwgX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvbG9naW5cIiwgY29tcG9uZW50OiBMb2dpbiB9KSwgX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvcmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlciB9KSwgX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvcHJvZmlsZVwiLCBjb21wb25lbnQ6IFByb2ZpbGUgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvZ2hvc3RidXN0ZXJzLWJ5LWNvdW50eVwiLCBjb21wb25lbnQ6IEdob3N0YnVzdGVycyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9jaGFsbGVuZ2UtbGlzdFwiLCBjb21wb25lbnQ6IENoYWxsZW5nZUxpc3QgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvbXktdm90aW5nLWhpc3RvcnlcIiwgY29tcG9uZW50OiBNeVZvdGluZ0hpc3RvcnkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvdm90ZXItZGF0YVwiLCBjb21wb25lbnQ6IERvd25sb2Fkc1BhZ2UgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvYXVkaXQtbXktYWRkcmVzc1wiLCBjb21wb25lbnQ6IEF1ZGl0TXlBZGRyZXNzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2Fib3V0XCIsIGNvbXBvbmVudDogQWJvdXQgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvcmVzb3VyY2VzXCIsIGNvbXBvbmVudDogUmVzb3VyY2VzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL25ld3NcIiwgY29tcG9uZW50OiBOZXdzIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2NvbnRhY3RcIiwgY29tcG9uZW50OiBDb250YWN0IH0pXSB9KSB9KSldIH0pKV0gfSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBTaWRlQmFyO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiQWJvdXQgdGhpcyB3ZWJzaXRlXCIgfSkgfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuZXhwb3J0IGNvbnN0IEF1ZGl0TXlBZGRyZXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZywgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiTG9hZGluZyBDb3VudGllcyAuLi5cIik7XHJcbiAgICBjb25zdCBbc3RyZWV0TnVtYmVyLCBzZXRTdHJlZXROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RyZWV0TmFtZSwgc2V0U3RyZWV0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWFkeWZvclNlYXJjaCwgc2V0UmVhZHlGb3JTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlTWVzc2FnZSwgc2V0UmVzcG9uc2VNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyZWRBZGRyZXNzLCBzZXRSZWdpc3RlcmVkQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlcmVkVm90ZXJzLCBzZXRSZWdpc3RlcmVkVm90ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHZvdGVyQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1N0cmVldCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5zdHJlZXRfYWRkcmVzcyxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWRkbGUgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWlkZGxlX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdZZWFyIG9mIEJpcnRoJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy55ZWFyX29mX2JpcnRoLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01haWxpbmcgQWRkcmVzcyBMaW5lIDEnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1haWxpbmdfYWRkcmVzc19saW5lX29uZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWlsaW5nIEFkZHJlc3MgTGluZSAyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5tYWlsaW5nX2FkZHJlc3NfbGluZV90d28sXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWFpbGluZyBBZGRyZXNzIExpbmUgMycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWFpbGluZ19hZGRyZXNzX2xpbmVfdGhyZWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUVZGIEFkZHJlc3MgTGluZSAxIC0gMTAgQ2hhcnMnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmFkZHJlc3NfbGluZV8xX3F2Zl8xMCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgIF0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoY291bnRpZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0Q291bnRpZXMoY291bnRpZXMpO1xyXG4gICAgICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGNvdW50eVNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKGNvdW50eVNlbGVjdGVkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgcGFnZSBmcm9tIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlwiKTtcclxuICAgICAgICBsZXQgYWRkcmVzc0xpbmUxID0gKChzdHJlZXROdW1iZXIgPT09IG51bGwgPyBcIlwiIDogc3RyZWV0TnVtYmVyLnRyaW0oKSkgKyAoc3RyZWV0TmFtZSA9PT0gbnVsbCA/IFwiXCIgOiBzdHJlZXROYW1lLnRyaW0oKSkpLnJlcGxhY2UoJyAnLCAnJyk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0ZpcnN0OEFuZFppcCA9IChhZGRyZXNzTGluZTEuc2xpY2UoMCwgOCkgKyAoemlwID09PSBudWxsID8gXCJcIiA6IHppcC50cmltKCkpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvYXVkaXQteW91ci1hZGRyZXNzLyR7Y291bnR5TmFtZX0vJHthZGRyZXNzRmlyc3Q4QW5kWmlwfWApO1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHNldENvdW50KHJlc3AuZGF0YS5jb3VudCk7XHJcbiAgICAgICAgICAgIHNldFJlZ2lzdGVyZWRBZGRyZXNzKHJlc3AuZGF0YS5yZWdpc3RlcmVkQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIHNldFJlZ2lzdGVyZWRWb3RlcnMocmVzcC5kYXRhLnJlZ2lzdGVyZWRWb3RlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiRXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoUm93LCB7IGNoaWxkcmVuOiBbX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHlcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBjb3VudHlOYW1lLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBjb3VudHkuY291bnR5X25hbWUgfSwgeyBjaGlsZHJlbjogY291bnR5LmNvdW50eV9uYW1lIH0pLCBjb3VudHkuY291bnR5X25hbWUpKSldIH0pKV0gfSldIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJTdHJlZXQgTnVtYmVyXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiBzdHJlZXROdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHNldFN0cmVldE51bWJlcihlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBTdHJlZXQgTnVtYmVyXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiU3RyZWV0IE5hbWVcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgdmFsdWU6IHN0cmVldE5hbWUsIHJlcXVpcmVkOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHNldFN0cmVldE5hbWUoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RyZWV0IE5hbWVcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJaaXBcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgdmFsdWU6IHppcCwgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogNSwgb25DaGFuZ2U6IChlKSA9PiBzZXRaaXAoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWmlwXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiwgZGlzYWJsZWQ6ICFyZWFkeWZvclNlYXJjaCB9LCB7IGNoaWxkcmVuOiBcIkF1ZGl0IEFkZHJlc3NcIiB9KSkgfSldIH0pKSB9KSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnJykgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiwgIWlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICdTdWNjZXNzJykgPyBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhGb3JtLlRleHQsIHsgY2hpbGRyZW46IFtjb3VudCwgXCIgcmVnaXN0cmF0aW9ucyBmb3VuZC5cIl0gfSksIF9qc3goRGF0YVRhYmxlLCB7IGNvbHVtbnM6IHZvdGVyQ29sdW1ucywgZGF0YTogcmVnaXN0ZXJlZFZvdGVycyB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ0Vycm9yJykgPyBcIkVycm9yIGZldGNoaW5nIHJlY29yZHMuIFBsZWFzZSByZXRyeS5cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXSB9KV0gfSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXVkaXRNeUFkZHJlc3M7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tICdyZWFjdC1jc3YnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLWhlYWRlclwiO1xyXG5pbXBvcnQgQ291bnR5SW5mb3JtYXRpb24gZnJvbSBcIi4vQ291bnR5SW5mb3JtYXRpb25cIjtcclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3QsIHNldFJlZGlyZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSZWFkeSwgc2V0VXNlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcgQ291bnRpZXMgLi4uXCIpO1xyXG4gICAgY29uc3QgW2lzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCBzZXRJc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbanVyaXNkaWN0aW9ucywgc2V0SnVyaXNkaWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbanVyaXNkaWN0aW9uTmFtZSwgc2V0SnVyaXNkaWN0aW9uTmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIpO1xyXG4gICAgY29uc3QgW2lzUHJlY2luY3REcm9wZG93bkxvYWRpbmcsIHNldElzUHJlY2luY3REcm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ByZWNpbmN0cywgc2V0UHJlY2luY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwcmVjaW5jdE5hbWUsIHNldFByZWNpbmN0TmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IFByZWNpbmN0IC0tLSBcIik7XHJcbiAgICBjb25zdCBbcmVhZHlmb3JTZWFyY2gsIHNldFJlYWR5Rm9yU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZU1lc3NhZ2UsIHNldFJlc3BvbnNlTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VhYmxlVm90ZXJzLCBzZXRDaGFsbGVuZ2VhYmxlVm90ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlTdW1tYXJ5SW5mbywgc2V0Q291bnR5U3VtbWFyeUluZm9dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudHlNZXRhZGF0YUluZm8sIHNldENvdW50eU1ldGFkYXRhSW5mb10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2hpZGVEb3dubG9hZEJ1dHRvbiwgc2V0SGlkZURvd25sb2FkQnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0NoYWxsZW5nZSBDb2RlKHMpJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5jaGFsbGVuZ2VfY29kZXMsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgU3RyZWV0IEFkZHJlc3MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZnVsbF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1llYXIgb2YgQmlydGgnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnllYXJfb2ZfYmlydGgsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVm90ZXIgSWRlbnRpZmljYXRpb24gTnVtYmVyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy52b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUeXBlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy50eXBlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0p1cmlzZGljdGlvbiBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5qdXJpc2RpY3Rpb25fbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdQcmVjaW5jdCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cucHJlY2luY3QsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzE1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01pZGRsZSBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5taWRkbGVfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0xhc3QgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubGFzdF9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICBdLCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgICAgc2V0VXNlclJlYWR5KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyh0cnVlKTtcclxuICAgICAgICB2b2lkIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnRpZXMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9jb3VudGllcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudGllcyhhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBzZXRQcmVjaW5jdE5hbWUoXCIgLS0tIFNlbGVjdCBQcmVjaW5jdCAtLS0gXCIpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZSgnJyk7XHJcbiAgICAgICAgc2V0Q291bnR5U3VtbWFyeUluZm8obnVsbCk7XHJcbiAgICAgICAgc2V0Q291bnR5TWV0YWRhdGFJbmZvKG51bGwpO1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBmZXRjaEp1cmlzZGljdGlvbnMoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoSnVyaXNkaWN0aW9ucyhjb3VudHlOYW1lKSB7XHJcbiAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvanVyaXNkaWN0aW9ucy8ke2NvdW50eU5hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGp1cmlzZGljdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgc2V0SnVyaXNkaWN0aW9ucyhqdXJpc2RpY3Rpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihqdXJpc2RpY3Rpb25TZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChqdXJpc2RpY3Rpb25TZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0SnVyaXNkaWN0aW9uTmFtZShqdXJpc2RpY3Rpb25TZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGZldGNoUHJlY2luY3RzKGp1cmlzZGljdGlvblNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmZXRjaFByZWNpbmN0cyhqdXJpc2RpY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgc2V0SXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9wcmVjaW5jdHMvJHtjb3VudHlOYW1lfS8ke2p1cmlzZGljdGlvbk5hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHByZWNpbmN0cykgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcmVjaW5jdHMocHJlY2luY3RzKTtcclxuICAgICAgICAgICAgc2V0SXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFByZWNpbmN0TmFtZShcIjBcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUHJlY2luY3RTZWxlY3Rpb24ocHJlY2luY3RTZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChwcmVjaW5jdFNlbGVjdGVkID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UHJlY2luY3ROYW1lKHByZWNpbmN0U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICgpID0+ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSkgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICBsZXQgY2hhbGxlbmdlX2xpc3RfdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY2hhbGxlbmdlLWxpc3QvJHtjb3VudHlOYW1lfS8ke2p1cmlzZGljdGlvbk5hbWV9L2A7XHJcbiAgICAgICAgaWYgKHByZWNpbmN0TmFtZSAhPSBcIjBcIikge1xyXG4gICAgICAgICAgICBjaGFsbGVuZ2VfbGlzdF91cmwgPSBjaGFsbGVuZ2VfbGlzdF91cmwgKyBgJHtwcmVjaW5jdE5hbWV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZHBvaW50cyA9IFtcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvY291bnR5LXN1bW1hcnkvJHtjb3VudHlOYW1lfWAsXHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2NvdW50eS1tZXRhZGF0YS8ke2NvdW50eU5hbWV9YCxcclxuICAgICAgICAgICAgY2hhbGxlbmdlX2xpc3RfdXJsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBjb3VudHlTdW1tYXJ5UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGVuZHBvaW50c1swXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3VudHlTdW1tYXJ5SW5mbyhyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyB8fCBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLnJlc3BvbnNlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvdW50eU1ldGFkYXRhUHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGVuZHBvaW50c1sxXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3VudHlNZXRhZGF0YUluZm8ocmVzcC5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3Auc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5yZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2VMaXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGVuZHBvaW50c1syXSwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGFsbGVuZ2VhYmxlVm90ZXJzKHJlc3AuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyB8fCBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLnJlc3BvbnNlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gUHJvbWlzZS5hbGxTZXR0bGVkKFtjb3VudHlTdW1tYXJ5UHJvbWlzZSwgY291bnR5TWV0YWRhdGFQcm9taXNlLCBjaGFsbGVuZ2VMaXN0UHJvbWlzZV0pO1xyXG4gICAgICAgIGFsbFByb21pc2VzLnRoZW4oKGFsbFJlc3VsdHMpID0+IGFsbFJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3JlamVjdGVkJykge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eSAocmVxdWlyZWQpXCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgcmVxdWlyZWQ6IHRydWUsIGRpc2FibGVkOiBpc0NvdW50eURyb3Bkb3duTG9hZGluZywgdmFsdWU6IGNvdW50eU5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSwgX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiSnVyaXNkaWN0aW9uIChyZXF1aXJlZClcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyByZXF1aXJlZDogdHJ1ZSwgZGlzYWJsZWQ6IGlzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCB2YWx1ZToganVyaXNkaWN0aW9uTmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIgfSkpLCBqdXJpc2RpY3Rpb25zLm1hcCgoanVyaXNkaWN0aW9uKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSB9LCB7IGNoaWxkcmVuOiBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUgfSksIGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSkpKV0gfSkpXSB9KV0gfSksIF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzUHJlY2luY3REcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiUHJlY2luY3RcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNQcmVjaW5jdERyb3Bkb3duTG9hZGluZywgdmFsdWU6IHByZWNpbmN0TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZVByZWNpbmN0U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgUHJlY2luY3QgLS0tIFwiIH0pKSwgcHJlY2luY3RzLm1hcCgocHJlY2luY3QpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogcHJlY2luY3QucHJlY2luY3QgfSwgeyBjaGlsZHJlbjogcHJlY2luY3QucHJlY2luY3QgfSksIHByZWNpbmN0LnByZWNpbmN0KSkpXSB9KSldIH0pXSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiwgZGlzYWJsZWQ6ICFyZWFkeWZvclNlYXJjaCB9LCB7IGNoaWxkcmVuOiBcIkdldCBQcmVjaW5jdCBDaGFsbGVuZ2UgTGlzdFwiIH0pKSB9KV0gfSkpIH0pKSwgX2pzeChcImJyXCIsIHt9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW2lzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnJykgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLCAhaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICdTdWNjZXNzJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQ291bnR5SW5mb3JtYXRpb24sIHsgY291bnR5U3VtbWFyeTogY291bnR5U3VtbWFyeUluZm8sIGNvdW50eU1ldGFkYXRhOiBjb3VudHlNZXRhZGF0YUluZm8gfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiTGF0ZXN0IEdob3N0YnVzdGluZyB1cGRhdGVzIGZyb20gMjAyMi0wOS0xNiBoYXZlIGJlZW4gYXBwbGllZC5cIiB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogX2pzeChDU1ZMaW5rLCBPYmplY3QuYXNzaWduKHsgaGlkZGVuOiBoaWRlRG93bmxvYWRCdXR0b24sIGRhdGE6IGNoYWxsZW5nZWFibGVWb3RlcnMsIGZpbGVuYW1lOiBjb3VudHlOYW1lICsgJy0nICsganVyaXNkaWN0aW9uTmFtZSArICctJyArIHByZWNpbmN0TmFtZSArICctY2hhbGxlbmdlLWxpc3QuY3N2JyB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidXR0b25cIiwgY29sb3I6IFwicmVkXCIsIHNpemU6ICdsZycgfSwgeyBjaGlsZHJlbjogXCJEb3dubG9hZCByZXN1bHRzXCIgfSkpIH0pKSB9KSwgX2pzeChEYXRhVGFibGUsIHsgZXhwYW5kYWJsZVJvd3M6IHRydWUsIGV4cGFuZGFibGVSb3dzQ29tcG9uZW50OiBFeHBhbmRlZENvbXBvbmVudCgpLCBleHBhbmRPblJvd0NsaWNrZWQ6IHRydWUsIGNvbHVtbnM6IGNvbHVtbnMsIGRhdGE6IGNoYWxsZW5nZWFibGVWb3RlcnMsIGhpZ2hsaWdodE9uSG92ZXI6IHRydWUsIHBhZ2luYXRpb246IHRydWUsIHBhZ2luYXRpb25QZXJQYWdlOiAxMCwgcGFnaW5hdGlvblRvdGFsUm93czogY2hhbGxlbmdlYWJsZVZvdGVycy5sZW5ndGgsIHJlc3BvbnNpdmU6IHRydWUsIHN0cmlwZWQ6IHRydWUgfSldIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVzcG9uc2VNZXNzYWdlID09PSAnRXJyb3InKSA/IFwiRXJyb3IgZmV0Y2hpbmcgcmVjb3Jkcy4gUGxlYXNlIHJldHJ5LlwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXSB9KV0gfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhbGxlbmdlTGlzdDtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5leHBvcnQgY29uc3QgQ29udGFjdCA9ICgpID0+IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJDb250YWN0IFVzXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogXCIuLi4gaWYgeW91J2QgbGlrZSB0byBoZWxwIHNldCB0aGUgdHJ1dGggZnJlZVwiIH0pXSB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImltcG9ydCB7IGpzeHMgYXMgX2pzeHMsIGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBcIi4vY2FyZC5jc3NcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5jb25zdCBDb3VudHlJbmZvcm1hdGlvbiA9ICh7IGNvdW50eVN1bW1hcnksIGNvdW50eU1ldGFkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJSZWFkeSwgc2V0VXNlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICBzZXRVc2VyUmVhZHkodHJ1ZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KENhcmQsIE9iamVjdC5hc3NpZ24oeyBiZzogXCJsaWdodC1ibHVlXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZC5Cb2R5LCBPYmplY3QuYXNzaWduKHsgc3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhDYXJkLlRpdGxlLCB7IGNoaWxkcmVuOiBbY291bnR5U3VtbWFyeS5jb3VudHlfbmFtZSwgXCIgQ291bnR5IFN1bW1hcnkgcGVyIFNlcHRlbWJlciAyMDIyIFFWRlwiXSB9KSwgX2pzeChDYXJkLlRleHQsIE9iamVjdC5hc3NpZ24oeyBzdHlsZTogeyBjb2xvcjogXCJibGFja1wiIH0gfSwgeyBjaGlsZHJlbjogX2pzeChUYWJsZSwgT2JqZWN0LmFzc2lnbih7IHN0cmlwZWQ6IHRydWUsIGJvcmRlcmVkOiB0cnVlLCBob3ZlcjogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4KFwidGJvZHlcIiwgeyBjaGlsZHJlbjogX2pzeHMoXCJ0ZFwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJ0clwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiVG90YWwgUmVnaXN0ZXJlZCBWb3RlciBDb3VudFwiIH0pLCBfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogY291bnR5U3VtbWFyeS50b3RhbF9yZWdpc3RlcmVkX3ZvdGVyX2NvdW50IH0pLCBfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogXCJBY3RpdmUgUmVnaXN0ZXJlZCBWb3RlciBDb3VudCAoQSlcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkuYWN0aXZlX3JlZ2lzdGVyZWRfdm90ZXJfY291bnQgfSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogXCJDaGFsbGVuZ2VkIFZvdGVyIENvdW50IChDSClcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkuY2hhbGxlbmdlZF92b3Rlcl9jb3VudCB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiVmVyaWZ5IFZvdGVyIENvdW50IChWKVwiIH0pLCBfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogY291bnR5U3VtbWFyeS52ZXJpZnlfdm90ZXJfY291bnQgfSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogXCJDYW5jZWxlZCBWb3RlciBDb3VudCAoQylcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkuY2FuY2VsZWRfdm90ZXJfY291bnQgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBcIlJlamVjdGVkIFZvdGVyIENvdW50IChSKVwiIH0pLCBfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogY291bnR5U3VtbWFyeS5yZWplY3RlZF92b3Rlcl9jb3VudCB9KV0gfSksIF9qc3hzKFwidHJcIiwgeyBjaGlsZHJlbjogW19qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHsgY29sU3BhbjogMiB9LCB7IGNoaWxkcmVuOiBcIlZvdGluZyBTeXN0ZW1cIiB9KSksIF9qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHsgY29sU3BhbjogMiB9LCB7IGNoaWxkcmVuOiBjb3VudHlNZXRhZGF0YS52b3Rpbmdfc3lzdGVtIH0pKV0gfSksIF9qc3hzKFwidHJcIiwgeyBjaGlsZHJlbjogW19qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHsgY29sU3BhbjogMiB9LCB7IGNoaWxkcmVuOiBcIktlc2hlbCBIZWF0IE1hcCBDb2xvclwiIH0pKSwgX2pzeChcInRkXCIsIE9iamVjdC5hc3NpZ24oeyBjb2xTcGFuOiAyLCBjb2xvcjogY291bnR5TWV0YWRhdGEua2VzaGVsX2hlYXRtYXBfY29sb3IgfSwgeyBjaGlsZHJlbjogY291bnR5TWV0YWRhdGEua2VzaGVsX2hlYXRtYXBfY29sb3IgfSkpXSB9KV0gfSkgfSkgfSkpIH0pKSwgX2pzeHMoQ2FyZC5MaW5rLCBPYmplY3QuYXNzaWduKHsgY29sb3I6ICdibHVlJywgaHJlZjogY291bnR5TWV0YWRhdGEuY2Vuc3VzX3VybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sIHsgY2hpbGRyZW46IFtcIkNlbnN1cyBTb3VyY2U6IFwiLCBjb3VudHlNZXRhZGF0YS5jZW5zdXNfdXJsXSB9KSldIH0pKSB9KSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb3VudHlJbmZvcm1hdGlvbjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgRG93bmxvYWRTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9Eb3dubG9hZFNlcnZpY2VcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmV4cG9ydCBjb25zdCBEb3dubG9hZHNQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbERvd25sb2FkUmVxdWVzdFN0YXRlID0ge1xyXG4gICAgICAgIHF2ZjogJycsXHJcbiAgICAgICAgY291bnR5X25hbWU6ICcnLFxyXG4gICAgICAgIGp1cmlzZGljdGlvbl9uYW1lOiAnJyxcclxuICAgICAgICBjcmVhdGVkX2F0OiAnJyxcclxuICAgICAgICByZXF1ZXN0ZWRfYnk6ICcnLFxyXG4gICAgICAgIHN0YXR1czogJycsXHJcbiAgICAgICAgcmVxdWVzdF9pZDogbnVsbFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFtyZWRpcmVjdCwgc2V0UmVkaXJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlclJlYWR5LCBzZXRVc2VyUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy9jb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbaXNRdmZEYXRlTG9hZGluZywgc2V0SXNRdmZEYXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTZWFyY2hMb2FkaW5nLCBzZXRJc1NlYXJjaExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3F2ZkRhdGVzLCBzZXRRdmZEYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcXZmRGF0ZSwgc2V0UXZmRGF0ZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IFFWRiBEYXRlIC0tLSBcIik7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIpO1xyXG4gICAgY29uc3QgW2lzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCBzZXRJc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbanVyaXNkaWN0aW9ucywgc2V0SnVyaXNkaWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbanVyaXNkaWN0aW9uTmFtZSwgc2V0SnVyaXNkaWN0aW9uTmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIpO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbk9wdGlvbmFsLCBzZXRKdXJpc2RpY3Rpb25PcHRpb25hbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZG93bmxvYWRSZXF1ZXN0LCBzZXREb3dubG9hZFJlcXVlc3RdID0gdXNlU3RhdGUoaW5pdGlhbERvd25sb2FkUmVxdWVzdFN0YXRlKTtcclxuICAgIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZG93bmxvYWRpbmcsIHNldERvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWFkeWZvclN1Ym1pdCwgc2V0UmVhZHlGb3JTdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Rvd25sb2FkUmVxdWVzdHMsIHNldERvd25sb2FkUmVxdWVzdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1FWRicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cucXZmLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDb3VudHkgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY291bnR5X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0p1cmlzZGljdGlvbiBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5qdXJpc2RpY3Rpb25fbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlsZSBHZW5lcmF0aW9uIFN0YXR1cycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuc3RhdHVzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHNldERvd25sb2FkUmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRvd25sb2FkUmVxdWVzdCksIHsgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHNldERvd25sb2FkUmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRvd25sb2FkUmVxdWVzdCksIHsgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVRdmZTZWxlY3Rpb24ocXZmU2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAocXZmU2VsZWN0ZWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHF2ZiBzZWxlY3RlZDogXCIgKyBxdmZTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRRdmZEYXRlKHF2ZlNlbGVjdGVkKTtcclxuICAgICAgICAgICAgc2V0RG93bmxvYWRSZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZG93bmxvYWRSZXF1ZXN0KSwgeyBcInF2ZlwiOiBxdmZTZWxlY3RlZCB9KSk7XHJcbiAgICAgICAgICAgIC8vZmV0Y2hDb3VudGllcyhxdmZTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAoY291bnR5U2VsZWN0ZWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0Q291bnR5TmFtZShjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU3VibWl0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkb3dubG9hZFJlcXVlc3QpLCB7IFwiY291bnR5X25hbWVcIjogY291bnR5U2VsZWN0ZWQgfSkpO1xyXG4gICAgICAgICAgICBmZXRjaEp1cmlzZGljdGlvbnMoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoSnVyaXNkaWN0aW9ucyhjb3VudHlOYW1lKSB7XHJcbiAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgaWYgKGp1cmlzZGljdGlvbk9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU3VibWl0KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9qdXJpc2RpY3Rpb25zLycgKyBjb3VudHlOYW1lO1xyXG4gICAgICAgIGZldGNoKHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGp1cmlzZGljdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgc2V0SnVyaXNkaWN0aW9ucyhqdXJpc2RpY3Rpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVKdXJpc2RpY3Rpb25TZWxlY3Rpb24oanVyaXNkaWN0aW9uU2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAoanVyaXNkaWN0aW9uU2VsZWN0ZWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFqdXJpc2RpY3Rpb25PcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGp1cmlzZGljdGlvbiBzZWxlY3RlZDogXCIgKyBqdXJpc2RpY3Rpb25TZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZWFkeUZvclN1Ym1pdCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTdWJtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEp1cmlzZGljdGlvbk5hbWUoanVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkb3dubG9hZFJlcXVlc3QpLCB7IFwianVyaXNkaWN0aW9uX25hbWVcIjoganVyaXNkaWN0aW9uU2VsZWN0ZWQgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJldHJpZXZlRG93bmxvYWRSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICBEb3dubG9hZFNlcnZpY2UuZ2V0RG93bmxvYWRSZXF1ZXN0cygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9DT1VOVFktTEVBRCcpKSB7XHJcbiAgICAgICAgICAgIHNldEp1cmlzZGljdGlvbk9wdGlvbmFsKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRVc2VyUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvcXZmZGF0ZXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocXZmRGF0ZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0UXZmRGF0ZXMocXZmRGF0ZXMpO1xyXG4gICAgICAgICAgICBzZXRJc1F2ZkRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIERvd25sb2FkU2VydmljZS5nZXREb3dubG9hZFJlcXVlc3RzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERvd25sb2FkUmVxdWVzdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzIHx8IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICB2b2lkIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnRpZXMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9jb3VudGllcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudGllcyhhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzYXZlRG93bmxvYWRSZXF1ZXN0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBEb3dubG9hZFNlcnZpY2UuY3JlYXRlRG93bmxvYWRSZXF1ZXN0KGRvd25sb2FkUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERvd25sb2FkUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBxdmY6IHJlc3BvbnNlLmRhdGEucXZmLFxyXG4gICAgICAgICAgICAgICAgY291bnR5X25hbWU6IHJlc3BvbnNlLmRhdGEuY291bnR5X25hbWUsXHJcbiAgICAgICAgICAgICAgICBqdXJpc2RpY3Rpb25fbmFtZTogcmVzcG9uc2UuZGF0YS5qdXJpc2RpY3Rpb25fbmFtZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRfYnk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0X2lkOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBEb3dubG9hZFNlcnZpY2UuZ2V0RG93bmxvYWRSZXF1ZXN0cygpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERvd25sb2FkUmVxdWVzdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzIHx8IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEb3dubG9hZChkYXRhKSB7XHJcbiAgICAgICAgc2V0RG93bmxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgRG93bmxvYWRTZXJ2aWNlLmRvd25sb2FkRmlsZShkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKVxyXG4gICAgICAgICAgICAudGhlbihibG9iID0+IHtcclxuICAgICAgICAgICAgbGV0IGNuID0gZGF0YS5jb3VudHlfbmFtZS5yZXBsYWNlQWxsKCcgJywgJy0nKTtcclxuICAgICAgICAgICAgbGV0IGpuID0gZGF0YS5qdXJpc2RpY3Rpb25fbmFtZS5yZXBsYWNlQWxsKCcgJywgJy0nKTtcclxuICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGRhdGEucmVxdWVzdF9pZCArIFwiX1wiICsgZGF0YS5xdmYgKyBcIl9cIiArIGNuICsgXCJfXCIgKyBqbiArIFwiLmNzdlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICgpID0+ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ0RPV05MT0FEJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSksIF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gaGFuZGxlRG93bmxvYWQoZGF0YSksIGRpc2FibGVkOiBkb3dubG9hZGluZywgY2xhc3NOYW1lOiBcImJ0blwiIH0sIHsgY2hpbGRyZW46IFwiRG93bmxvYWRcIiB9KSldIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSkgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gbmV3RG93bmxvYWRSZXF1ZXN0KCkge1xyXG4gICAgICAgIHNldERvd25sb2FkUmVxdWVzdChpbml0aWFsRG93bmxvYWRSZXF1ZXN0U3RhdGUpO1xyXG4gICAgICAgIHNldFN1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogcmVkaXJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHNhdmVEb3dubG9hZFJlcXVlc3QgfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlFWRiBEYXRlXCIsIF9qc3hzKFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyByZXF1aXJlZDogdHJ1ZSwgaWQ6IFwicXZmXCIsIG5hbWU6IFwicXZmXCIsIGRpc2FibGVkOiBpc1F2ZkRhdGVMb2FkaW5nLCB2YWx1ZTogcXZmRGF0ZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZVF2ZlNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IFFWRiBEYXRlIC0tLSBcIiB9KSksIHF2ZkRhdGVzLm1hcCgocXZmKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHF2Zi50YWJsZV9uYW1lIH0sIHsgY2hpbGRyZW46IHF2Zi50YWJsZV9uYW1lLnNwbGl0KCdfJylbMV0gfSksIHF2Zi50YWJsZV9uYW1lKSkpXSB9KSldIH0pIH0pLCBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyByZXF1aXJlZDogdHJ1ZSwgaWQ6IFwiY291bnR5TmFtZVwiLCBuYW1lOiBcImNvdW50eU5hbWVcIiwgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGNvdW50eS5jb3VudHlfbmFtZSB9LCB7IGNoaWxkcmVuOiBjb3VudHkuY291bnR5X25hbWUgfSksIGNvdW50eS5jb3VudHlfbmFtZSkpXSB9KSldIH0pXSB9KSwgX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkp1cmlzZGljdGlvblwiLCBfanN4cyhcInNlbGVjdFwiLCBPYmplY3QuYXNzaWduKHsgcmVxdWlyZWQ6ICFqdXJpc2RpY3Rpb25PcHRpb25hbCwgaWQ6IFwianVyaXNkaWN0aW9uTmFtZVwiLCBuYW1lOiBcImp1cmlzZGljdGlvbk5hbWVcIiwgZGlzYWJsZWQ6IGlzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCB2YWx1ZToganVyaXNkaWN0aW9uTmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIgfSkpLCBqdXJpc2RpY3Rpb25zLm1hcCgoanVyaXNkaWN0aW9uKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSB9LCB7IGNoaWxkcmVuOiBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUgfSksIGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSkpKV0gfSkpXSB9KV0gfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbX2pzeChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmEgZmEtaW5mby1jaXJjbGVcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgXCIgT25seSBvbmUgcmVxdWVzdCBpcyBzdXBwb3J0ZWQgcGVyIHZpc2l0IHRvIGxpbWl0IGNvc3RzIGFzc29jaWF0ZWQgd2l0aCBjb21wdXRpbmcgd29ya2xvYWRzLiBUaGFuayB5b3UgZm9yIHlvdXIgdW5kZXJzdGFuZGluZy5cIl0gfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJGaWxlcyBhcmUgZ2VuZXJhdGVkIGluIG9yZGVyIG9mIHJlY2VpcHQgYXQgdGhlIDE3dGggc2Vjb25kIG9mIGV2ZXJ5IG1pbnV0ZSBjdXJyZW50bHkuIFRoaXMgd2lsbCBjaGFuZ2UgdG8gb25jZSBhIGRheSB0byBsaW1pdCBjb21wdXRpbmcgd29ya2xvYWQgY29zdHMuXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtfanN4KFwiYlwiLCB7IGNoaWxkcmVuOiBcIlVOTElNSVRFRCBET1dOTE9BRFNcIiB9KSwgXCIgYXJlIHJlc2VydmVkIGZvciBvdXIgRUlGIFZvbHVudGVlcnMgYW5kIGZpbmFuY2lhbCBjb250cmlidXRvcnMuXCJdIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIXJlYWR5Zm9yU3VibWl0IHx8IHN1Ym1pdHRlZCwgY2xhc3NOYW1lOiBcImJ0blwiIH0sIHsgY2hpbGRyZW46IFwiSSBVbmRlcnN0YW5kLiBHZW5lcmF0ZSBGaWxlLlwiIH0pKSB9KV0gfSkpIH0pKSB9KSwgX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiYnJcIiwge30pLCBfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogXCJEb3dubG9hZHMgUmVxdWVzdGVkXCIgfSksIF9qc3goRGF0YVRhYmxlLCB7IGV4cGFuZGFibGVSb3dzOiB0cnVlLCBleHBhbmRhYmxlUm93c0NvbXBvbmVudDogRXhwYW5kZWRDb21wb25lbnQoKSwgZXhwYW5kT25Sb3dDbGlja2VkOiB0cnVlLCBjb2x1bW5zOiBjb2x1bW5zLCBkYXRhOiBkb3dubG9hZFJlcXVlc3RzLCBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLCBwYWdpbmF0aW9uOiB0cnVlLCBwYWdpbmF0aW9uUGVyUGFnZTogMTAsIHBhZ2luYXRpb25Ub3RhbFJvd3M6IGRvd25sb2FkUmVxdWVzdHMubGVuZ3RoLCByZXNwb25zaXZlOiB0cnVlLCBzdHJpcGVkOiB0cnVlIH0pXSB9KSB9KV0gfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRzUGFnZTtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGgtaGVhZGVyXCI7XHJcbmV4cG9ydCBjb25zdCBHaG9zdGJ1c3RlcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3QsIHNldFJlZGlyZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSZWFkeSwgc2V0VXNlclJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcgQ291bnRpZXMgLi4uXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2hpZGVEb3dubG9hZEJ1dHRvbiwgc2V0SGlkZURvd25sb2FkQnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2VtcHR5TG9jYXRpb25EYXRhTWVzc2FnZSwgc2V0RW1wdHlMb2NhdGlvbkRhdGFNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Z1bGwgU3RyZWV0IEFkZHJlc3MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUmVnaXN0cmF0aW9uIENvdW50JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5yZWdpc3RyYXRpb25fY291bnQsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQmVkcy9BcHQvTG90cyBRdHknLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmJlZHNfYXB0c19sb3RzX3F0eSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1R5cGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnR5cGUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ByZWNpbmN0JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5wcmVjaW5jdCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTUwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q291bnRpZXMoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGNvdW50eVNlbGVjdGVkKSB7XHJcbiAgICAgICAgaWYgKGNvdW50eVNlbGVjdGVkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICBzZXRMb2NhdGlvbnMoW10pO1xyXG4gICAgICAgIHNldEhpZGVEb3dubG9hZEJ1dHRvbih0cnVlKTtcclxuICAgICAgICBzZXRFbXB0eUxvY2F0aW9uRGF0YU1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICgpID0+ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikgfSkgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9naG9zdGJ1c3Rlci1sb2NhdGlvbnMvJHtjb3VudHlOYW1lfWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9jYXRpb25zKHJlc3AuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFbXB0eUxvY2F0aW9uRGF0YU1lc3NhZ2UoYE5vIEdob3N0YnVzdGluZyBsb2NhdGlvbnMgZm91bmQgZm9yICR7Y291bnR5TmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkNvdW50eVwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0NvdW50eURyb3Bkb3duTG9hZGluZywgdmFsdWU6IGNvdW50eU5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQ29sLCB7IGNoaWxkcmVuOiBcIlxcdTAwQTBcIiB9KSB9KSwgX2pzeChSb3csIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgc2l6ZTogJ2xnJywgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0blwiLCBkaXNhYmxlZDogIXJlYWR5Zm9yU2VhcmNoIH0sIHsgY2hpbGRyZW46IFwiR2V0IEdob3N0IExvY2F0aW9uc1wiIH0pKSB9KV0gfSkpIH0pKSwgX2pzeChcImJyXCIsIHt9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW2lzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnJykgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLCAhaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZU1lc3NhZ2UgPT09ICdTdWNjZXNzJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2hpbGRyZW46IF9qc3goQ1NWTGluaywgT2JqZWN0LmFzc2lnbih7IGhpZGRlbjogaGlkZURvd25sb2FkQnV0dG9uLCBkYXRhOiBsb2NhdGlvbnMsIGZpbGVuYW1lOiBjb3VudHlOYW1lICsgJy1mbGFnZ2VkLWFkZHJlc3Nlcy5jc3YnIH0sIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ1dHRvblwiLCBjb2xvcjogXCJyZWRcIiwgc2l6ZTogJ2xnJyB9LCB7IGNoaWxkcmVuOiBcIkRvd25sb2FkIHJlc3VsdHNcIiB9KSkgfSkpIH0pLCBfanN4KERhdGFUYWJsZSwgeyBleHBhbmRhYmxlUm93czogdHJ1ZSwgZXhwYW5kYWJsZVJvd3NDb21wb25lbnQ6IEV4cGFuZGVkQ29tcG9uZW50KCksIGNvbHVtbnM6IGNvbHVtbnMsIGRhdGE6IGxvY2F0aW9ucywgaGlnaGxpZ2h0T25Ib3ZlcjogdHJ1ZSwgcGFnaW5hdGlvbjogdHJ1ZSwgcGFnaW5hdGlvblBlclBhZ2U6IDEwLCBwYWdpbmF0aW9uVG90YWxSb3dzOiBsb2NhdGlvbnMubGVuZ3RoLCBub0RhdGFDb21wb25lbnQ6IGVtcHR5TG9jYXRpb25EYXRhTWVzc2FnZSB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZXNwb25zZU1lc3NhZ2UgPT09ICdFcnJvcicpID8gXCJFcnJvciBmZXRjaGluZyByZWNvcmRzLiBQbGVhc2UgcmV0cnkuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJdIH0pXSB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHaG9zdGJ1c3RlcnM7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmQsIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtaGVhZGVyJztcclxuY29uc3QgTXlWb3RpbmdIaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdW1tYXJ5Q2FsbENvbXBsZXRlLCBzZXRTdW1tYXJ5Q2FsbENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoaXN0b3J5Q2FsbENvbXBsZXRlLCBzZXRIaXN0b3J5Q2FsbENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbcXZmRGF0ZXMsIHNldFF2ZkRhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtxdmZEYXRlLCBzZXRRdmZEYXRlXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgUVZGIC0tLSBcIik7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdm90ZXJMYXN0TmFtZSwgc2V0Vm90ZXJMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3RlckZpcnN0TmFtZSwgc2V0Vm90ZXJGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdm90ZXJZZWFyT2ZCaXJ0aCwgc2V0Vm90ZXJZZWFyT2ZCaXJ0aF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3RlclppcCwgc2V0Vm90ZXJaaXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbdm90ZXJTdW1tYXJ5LCBzZXRWb3RlclN1bW1hcnldID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt2b3Rlckhpc3RvcnksIHNldFZvdGVySGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ291bnR5IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmNvdW50eV9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRWxlY3Rpb24gRGF0ZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZWxlY3Rpb25fZGF0ZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0lzIEFic2VudGVlIFZvdGVyJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5pc19hYnNlbnRlZV92b3RlcixcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBsZXQgdW5tb3VudGVkID0gZmFsc2U7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvcXZmZGF0ZXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocXZmRGF0ZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0UXZmRGF0ZXMocXZmRGF0ZXMpO1xyXG4gICAgICAgICAgICBzZXRRdmZEYXRlKFwiIC0tLSBTZWxlY3QgUVZGIERhdGUgLS0tIFwiKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICB2b2lkIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnRpZXMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9jb3VudGllcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudGllcyhhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihjb3VudHlTZWxlY3RlZCkge1xyXG4gICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZSgnJyk7XHJcbiAgICAgICAgaWYgKGNvdW50eVNlbGVjdGVkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU2VhcmNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qgdm90ZXJTdW1tYXJ5UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL3ZvdGVyLXN1bW1hcnkvJHtxdmZEYXRlfS8ke2NvdW50eU5hbWV9LyR7dm90ZXJaaXB9LyR7dm90ZXJMYXN0TmFtZX0vJHt2b3RlckZpcnN0TmFtZX0vJHt2b3RlclllYXJPZkJpcnRofWAsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWb3RlclN1bW1hcnkocmVzcC5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvdm90ZXItaGlzdG9yeS8ke3F2ZkRhdGV9LyR7cmVzcC5kYXRhWzBdLnZvdGVyX2lkZW50aWZpY2F0aW9uX251bWJlcn1gLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcEhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BIaXN0b3J5LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Vm90ZXJIaXN0b3J5KHJlc3BIaXN0b3J5LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyB8fCBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gUHJvbWlzZS5hbGxTZXR0bGVkKFt2b3RlclN1bW1hcnlQcm9taXNlXSk7XHJcbiAgICAgICAgYWxsUHJvbWlzZXMudGhlbigoYWxsUmVzdWx0cykgPT4gYWxsUmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3VtbWFyeUNhbGxDb21wbGV0ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEhpc3RvcnlDYWxsQ29tcGxldGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogcmVkaXJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoUm93LCB7IGNoaWxkcmVuOiBbX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiUVZGIERhdGVcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNMb2FkaW5nLCB2YWx1ZTogcXZmRGF0ZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRRdmZEYXRlKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBRVkYgLS0tIFwiIH0pLCBxdmZEYXRlcy5tYXAoKHF2ZikgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBxdmYudGFibGVfbmFtZSB9LCB7IGNoaWxkcmVuOiBxdmYudGFibGVfbmFtZS5zcGxpdCgnXycpWzFdIH0pLCBxdmYudGFibGVfbmFtZSkpKV0gfSkpXSB9KSB9KSwgX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLWxnLTI0XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHlcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyByZXF1aXJlZDogdHJ1ZSwgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIgfSkpLCBjb3VudGllcy5tYXAoKGNvdW50eSkgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBjb3VudHkuY291bnR5X25hbWUgfSwgeyBjaGlsZHJlbjogY291bnR5LmNvdW50eV9uYW1lIH0pLCBjb3VudHkuY291bnR5X25hbWUpKSldIH0pKV0gfSkgfSkpXSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbGctOVwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWmlwXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDUsIG1heExlbmd0aDogNSwgdmFsdWU6IHZvdGVyWmlwLCBvbkNoYW5nZTogKGUpID0+IHNldFZvdGVyWmlwKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFppcFwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSkpIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJMYXN0IE5hbWVcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogMSwgbWF4TGVuZ3RoOiAyNSwgdmFsdWU6IHZvdGVyTGFzdE5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJMYXN0TmFtZShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBMYXN0IE5hbWVcIiwgY2xhc3NOYW1lOiBcImlucHV0XCIgfSldIH0pIH0pLCBfanN4KENvbCwgeyBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJGaXJzdCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDEsIG1heExlbmd0aDogMjAsIHZhbHVlOiB2b3RlckZpcnN0TmFtZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlckZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBGaXJzdCBuYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWWVhciBvZiBCaXJ0aFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyByZXF1aXJlZDogdHJ1ZSwgbWluTGVuZ3RoOiA0LCBtYXhMZW5ndGg6IDQsIHZhbHVlOiB2b3RlclllYXJPZkJpcnRoLCBvbkNoYW5nZTogKGUpID0+IHNldFZvdGVyWWVhck9mQmlydGgoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWWVhciBvZiBCaXJ0aFwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIgfSwgeyBjaGlsZHJlbjogXCJHZXQgTXkgVm90aW5nIEhpc3RvcnlcIiB9KSkgfSldIH0pKSB9KSkgfSkpLCBfanN4KFwiYnJcIiwge30pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChTcGlubmVyLCBPYmplY3QuYXNzaWduKHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInNyLW9ubHlcIiB9LCB7IGNoaWxkcmVuOiBcIkxvYWRpbmcuLi5cIiB9KSkgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZvdGVyU3VtbWFyeSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChDYXJkLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImluZm8tY2FyZFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKENhcmQuQm9keSwgT2JqZWN0LmFzc2lnbih7IHN0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChDYXJkLlRpdGxlLCB7IGNoaWxkcmVuOiB2b3RlclN1bW1hcnkudm90ZXJfZnVsbF9uYW1lIH0pLCBfanN4KENhcmQuU3VidGl0bGUsIHsgY2hpbGRyZW46IHF2ZkRhdGUgfSksIF9qc3hzKENhcmQuVGV4dCwgT2JqZWN0LmFzc2lnbih7IHN0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSB9LCB7IGNoaWxkcmVuOiBbXCJSZWdpc3RyYXRpb24gRGF0ZTogXCIsIHZvdGVyU3VtbWFyeS5yZWdpc3RyYXRpb25fZGF0ZSwgX2pzeChcImJyXCIsIHt9KSwgXCJWb3RlciBJZGVudGlmaWNhdGlvbiBOdW1iZXI6IFwiLCB2b3RlclN1bW1hcnkudm90ZXJfaWRlbnRpZmljYXRpb25fbnVtYmVyLCBfanN4KFwiYnJcIiwge30pLCBcIlllYXIgb2YgYmlydGg6IFwiLCB2b3RlclN1bW1hcnkueWVhcl9vZl9iaXJ0aCwgX2pzeChcImJyXCIsIHt9KSwgXCJBZGRyZXNzOiBcIiwgdm90ZXJTdW1tYXJ5LmZ1bGxfYWRkcmVzcywgX2pzeChcImJyXCIsIHt9KV0gfSkpXSB9KSkgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfanN4KFwic3BhblwiLCB7fSkgfSkgfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IChzdW1tYXJ5Q2FsbENvbXBsZXRlICYmIHZvdGVyU3VtbWFyeSA9PT0gdW5kZWZpbmVkKSA/IF9qc3hzKFwic3BhblwiLCB7IGNoaWxkcmVuOiBbXCJObyByZWNvcmQgZm91bmQgZm9yIGNyaXRlcmlhOiBcIiwgcXZmRGF0ZSwgXCIgXCIsIGNvdW50eU5hbWUsIFwiIFwiLCB2b3RlclppcCwgXCIgXCIsIHZvdGVyTGFzdE5hbWUsIFwiIFwiLCB2b3RlckZpcnN0TmFtZSwgXCIgXCIsIHZvdGVyWWVhck9mQmlydGhdIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9qc3goXCJzcGFuXCIsIHt9KSB9KSB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goU3Bpbm5lciwgT2JqZWN0LmFzc2lnbih7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInNwYW5cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIgfSwgeyBjaGlsZHJlbjogXCJMb2FkaW5nLi4uXCIgfSkpIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2b3Rlckhpc3RvcnkubGVuZ3RoID4gMCA/IF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFwiaDRcIiwgeyBjaGlsZHJlbjogW1wiVm90aW5nIGhpc3RvcnkgYWNjb3JkaW5nIHRvIFFWRiBcIiwgcXZmRGF0ZV0gfSksIF9qc3goRGF0YVRhYmxlLCB7IGNvbHVtbnM6IGNvbHVtbnMsIGRhdGE6IHZvdGVySGlzdG9yeSB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9qc3goXCJzcGFuXCIsIHt9KSB9KSB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IChoaXN0b3J5Q2FsbENvbXBsZXRlICYmIHZvdGVySGlzdG9yeS5sZW5ndGggPT0gMCkgPyBfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiBcIk5vIFZvdGluZyBoaXN0b3J5IGZvdW5kLlwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfanN4KFwic3BhblwiLCB7fSkgfSkgfSkgfSldIH0pKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgRHJvcGRvd24gPSAoeyBsb2FkaW5nLCBsYWJlbCwgdmFsdWUsIG9wdGlvbnMsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIHJldHVybiAoX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbbGFiZWwsIF9qc3goXCJzZWxlY3RcIiwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBsb2FkaW5nLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBvbkNoYW5nZSB9LCB7IGNoaWxkcmVuOiBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IG9wdGlvbi52YWx1ZSB9LCB7IGNoaWxkcmVuOiBvcHRpb24ubGFiZWwgfSksIG9wdGlvbi52YWx1ZSkpKSB9KSldIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTXlWb3RpbmdIaXN0b3J5O1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmV4cG9ydCBjb25zdCBOZXdzID0gKCkgPT4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIkluIG90aGVyIG5ld3MgLi4uXCIgfSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogXCJodHRwczovL3J1bWJsZS5jb20vdjFpajd0bC1lbGVjdGlvbi1kZWNlcnRpZmljYXRpb24taW5jb21pbmctdGhhbmtzLXRvLWVsZWN0aW9uLWludGVncml0eS1mb3JjZS5odG1sXCIgfSldIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG4vL2ltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vKmNvbnN0IEdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogNmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjVweCwgYXV0byk7XHJcbmA7ICovXHJcbmV4cG9ydCBjb25zdCBSZXNvdXJjZXMgPSAoKSA9PiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIldlYiBSZXNvdXJjZXNcIiB9KSB9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlcztcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcHBTaWRlQmFyIGZyb20gJy4vQXBwU2lkZUJhcic7XHJcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSBcIi4vc2VydmljZVdvcmtlclwiO1xyXG5SZWFjdERPTS5yZW5kZXIoX2pzeChCcm93c2VyUm91dGVyLCB7IGNoaWxkcmVuOiBfanN4KEFwcFNpZGVCYXIsIHt9KSB9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tIFwiLi9hdXRoLWhlYWRlclwiO1xyXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMO1xyXG5jbGFzcyBEb3dubG9hZFNlcnZpY2Uge1xyXG4gICAgY3JlYXRlRG93bmxvYWRSZXF1ZXN0KGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgJy9hcGkvZG93bmxvYWRzJywgZGF0YSwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICB9XHJcbiAgICBnZXREb3dubG9hZFJlcXVlc3RzKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICcvYXBpL2Rvd25sb2FkcycsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pO1xyXG4gICAgfVxyXG4gICAgZG93bmxvYWRGaWxlKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgYC9hcGkvZG93bmxvYWQtZmlsZWAsIGRhdGEsIHsgaGVhZGVyczogYXV0aEhlYWRlcigpLCByZXNwb25zZVR5cGU6ICdibG9iJyB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRG93bmxvYWRTZXJ2aWNlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==