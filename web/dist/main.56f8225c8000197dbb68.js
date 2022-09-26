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
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n    DEMO STYLE\r\n*/\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: rgb(60, 147, 206);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 340px;\r\n    max-width: 340px;\r\n    background: #302929;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 120px;\r\n    max-width: 120px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h4,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    -ms-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #4e4143;\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    color:rgb(235, 221, 221);\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #830201;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: rgb(255, 244, 244);\r\n    background: #4c4d4e;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #4e4e50;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.countdown-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem\r\n  }\r\n  \r\n  .countdown-container > form {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .countdown-container > form > label {\r\n    margin-right: 1rem;\r\n    margin-left: 5rem;\r\n  }\r\n  \r\n  .expired-notice {\r\n    text-align: center;\r\n    padding: 2rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    margin: 0.5rem;\r\n    background-color: #ececec;\r\n    box-shadow: 10px 10px #cfc9c9;\r\n  }\r\n  \r\n  .expired-notice > span {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    color: red;\r\n  }\r\n  \r\n  .expired-notice > p {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: right;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 2.25rem;\r\n    line-height: 1.75rem;\r\n    padding: 0.5rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    text-decoration: none;\r\n    color: #000;\r\n    background-color: #ececec;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .show-counter .countdown {\r\n    line-height: 1.25rem;\r\n    padding: 0 0.75rem 0 0.75rem;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .show-counter .countdown.danger {\r\n    color: #ff0000;\r\n  }\r\n  \r\n  .show-counter .countdown > p {\r\n    margin: 0;\r\n  }\r\n  \r\n  .show-counter .countdown > span {\r\n    text-transform: uppercase;\r\n    font-size: 1.50rem;\r\n    line-height: 2rem;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n    .show-counter .countdown > span {\r\n      font-size: 1rem;\r\n      line-height: 1rem;\r\n    }\r\n  \r\n    .show-counter .countdown-link { \r\n      font-size: 1.5rem;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/AppSidebar.css"],"names":[],"mappings":"AAAA;;CAEC;AAGD;IACI,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;;;IAGI,cAAc;IACd,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;;uDAEuD;;AAEvD;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,UAAU;IACV,kCAAkC;IAClC,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;;uDAEuD;;AAEvD;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;;uDAEuD;;AAEvD;IACI;QACI,eAAe;QACf,eAAe;QACf,kBAAkB;QAClB,6BAA6B;IACjC;IACA;QACI,SAAS;QACT,YAAY;QACZ,UAAU;QACV,kCAAkC;QAClC,8BAA8B;QAC9B,0BAA0B;IAC9B;IACA;QACI,yBAAyB;IAC7B;IACA;;QAEI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB;EACF;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,cAAc;IACd,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;IACX,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,oBAAoB;IACpB,4BAA4B;IAC5B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE;MACE,eAAe;MACf,iBAAiB;IACnB;;IAEA;MACE,iBAAiB;IACnB;EACF","sourcesContent":["/*\r\n    DEMO STYLE\r\n*/\r\n\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: rgb(60, 147, 206);\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 340px;\r\n    max-width: 340px;\r\n    background: #302929;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    min-width: 120px;\r\n    max-width: 120px;\r\n    text-align: center;\r\n}\r\n\r\n#sidebar.active .sidebar-header h4,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    -ms-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #4e4143;\r\n}\r\n\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    color:rgb(235, 221, 221);\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #830201;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: rgb(255, 244, 244);\r\n    background: #4c4d4e;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #4e4e50;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.countdown-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem\r\n  }\r\n  \r\n  .countdown-container > form {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .countdown-container > form > label {\r\n    margin-right: 1rem;\r\n    margin-left: 5rem;\r\n  }\r\n  \r\n  .expired-notice {\r\n    text-align: center;\r\n    padding: 2rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    margin: 0.5rem;\r\n    background-color: #ececec;\r\n    box-shadow: 10px 10px #cfc9c9;\r\n  }\r\n  \r\n  .expired-notice > span {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    color: red;\r\n  }\r\n  \r\n  .expired-notice > p {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .show-counter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: right;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    font-size: 2.25rem;\r\n    line-height: 1.75rem;\r\n    padding: 0.5rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.25rem;\r\n    text-decoration: none;\r\n    color: #000;\r\n    background-color: #ececec;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .show-counter .countdown {\r\n    line-height: 1.25rem;\r\n    padding: 0 0.75rem 0 0.75rem;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .show-counter .countdown.danger {\r\n    color: #ff0000;\r\n  }\r\n  \r\n  .show-counter .countdown > p {\r\n    margin: 0;\r\n  }\r\n  \r\n  .show-counter .countdown > span {\r\n    text-transform: uppercase;\r\n    font-size: 1.50rem;\r\n    line-height: 2rem;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n    .show-counter .countdown > span {\r\n      font-size: 1rem;\r\n      line-height: 1rem;\r\n    }\r\n  \r\n    .show-counter .countdown-link { \r\n      font-size: 1.5rem;\r\n    }\r\n  }"],"sourceRoot":""}]);
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
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", Object.assign({ className: "jumbotron" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Release v09232022" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Features Supported" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Ghostbusting Location Report: Download report of suspect locations canvassed across Michigan" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "My Voting History: Examine your voting history for anomalies" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Known Issues" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Search results page loads blank sometimes" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "If search fails or it looks like the progress spinner is stuck in a loop it is very likely that your session has timed out." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Workaround: Sign out by clicking log out at the top right and sign back in." })] })] })) })) }));
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
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", Object.assign({ id: "sidebar" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "sidebar-header" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Election Integrity Force" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "EIF" })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "list-unstyled components" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#homeSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-home" }), "\u00A0 Audit"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "collapse list-unstyled", id: "homeSubmenu" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/my-voting-history", className: "nav-link" }, { children: "Voting History" })) })) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#downloadPageSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-glasses" }), "\u00A0 Downloads"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "collapse list-unstyled", id: "downloadPageSubmenu" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/voter-data", className: "nav-link" }, { children: "Voter Data" })) })) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", Object.assign({ href: "#pageSubmenu", "data-toggle": "collapse", "aria-expanded": "false", className: "dropdown-toggle" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-glasses" }), "\u00A0 Reports"] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "collapse list-unstyled", id: "pageSubmenu" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/ghostbusters-by-county", className: "nav-link" }, { children: "Ghostbusting Locations" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/challenge-list", className: "nav-link" }, { children: "Challenge List" })) }))] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/contact", className: "nav-link" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-paper-plane" }), "\u00A0 Contact"] })) })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ id: "content" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", Object.assign({ className: "navbar navbar-expand-lg navbar-light bg-light" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container-fluid" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", Object.assign({ type: "button", id: "sidebarCollapse", className: "navbar-btn" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-align-left" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "btn btn-dark d-inline-block d-lg-none ml-auto", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: "fas fa-align-justify" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["\u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CountdownTimer__WEBPACK_IMPORTED_MODULE_19__["default"], { targetDate: michiganMidtermElectionDate })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "collapse navbar-collapse", id: "navbarSupportedContent" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ className: "nav navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/", className: "navbar-brand" }, { children: "Home" })) })), showAdminBoard && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/admin", className: "navbar-brand" }, { children: "Admin" })) })))] })) })), currentUser ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/profile", className: "navbar-brand" }, { children: currentUser.username })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({ href: "/login", className: "navbar-brand", onClick: this.logOut }, { children: "LogOut" })) }))] }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "navbar-nav ml-auto" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/login", className: "navbar-brand" }, { children: "Login" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", Object.assign({ className: "nav-item" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, Object.assign({ to: "/register", className: "navbar-brand" }, { children: "Sign Up" })) }))] })))] })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "line" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Switch, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: ["/", "/home"], component: _components_home_component__WEBPACK_IMPORTED_MODULE_8__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: "/login", component: _components_login_component__WEBPACK_IMPORTED_MODULE_9__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: "/register", component: _components_register_component__WEBPACK_IMPORTED_MODULE_10__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { exact: true, path: "/profile", component: _components_profile_component__WEBPACK_IMPORTED_MODULE_3__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/ghostbusters-by-county", component: _components_Ghostbusters__WEBPACK_IMPORTED_MODULE_5__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/challenge-list", component: _components_ChallengeList__WEBPACK_IMPORTED_MODULE_17__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/my-voting-history", component: _components_MyVotingHistory__WEBPACK_IMPORTED_MODULE_4__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/voter-data", component: _components_DownloadsPage__WEBPACK_IMPORTED_MODULE_18__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/audit-my-address", component: _components_AuditMyAddress__WEBPACK_IMPORTED_MODULE_6__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/about", component: _components_About__WEBPACK_IMPORTED_MODULE_7__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/resources", component: _components_Resources__WEBPACK_IMPORTED_MODULE_11__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/news", component: _components_News__WEBPACK_IMPORTED_MODULE_15__["default"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Route, { path: "/contact", component: _components_Contact__WEBPACK_IMPORTED_MODULE_16__["default"] })] }) }))] }))] })));
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
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
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ username: "" });
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
    const [downloadRequest, setDownloadRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialDownloadRequestState);
    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [requestId, setRequestId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
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
        console.log("qvfSelected: " + qvfSelected);
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
        console.log("countySelected: " + countySelected);
        if (countySelected === "") {
            console.log("Invalid county selected: " + countySelected);
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
        console.log("calling jurisdiction api");
        const url = {"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/jurisdictions/' + countyName;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((jurisdictions) => {
            setJurisdictions(jurisdictions);
        })
            .catch((err) => {
            console.log(err);
        });
        setIsJurisdictionDropdownLoading(false);
    }
    function validateJurisdictionSelection(jurisdictionSelected) {
        console.log("jurisdictionSelected: " + jurisdictionSelected);
        if (jurisdictionSelected === "") {
            console.log("Invalid jurisdiction selected: " + jurisdictionSelected);
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
        setUserReady(true);
        let unmounted = false;
        fetch({"REACT_API_BASE_URL":"https://data.electionintegrityforce.com"}.REACT_API_BASE_URL + '/api/qvfdates')
            .then((res) => res.json())
            .then((qvfDates) => {
            setQvfDates(qvfDates);
            setQvfDate(qvfDates[0].table_name);
            setIsQvfDateLoading(false);
        })
            .catch((err) => {
            console.log(err);
        });
        _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].getDownloadRequests()
            .then((response) => {
            console.log(response.data);
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
    function saveDownloadRequest() {
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
            setRequestId(response.data.request_id);
            setSubmitted(true);
        })
            .then(() => {
            _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].getDownloadRequests()
                .then((response) => {
                console.log(response.data);
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
    }
    function handleDownload(data) {
        _services_DownloadService__WEBPACK_IMPORTED_MODULE_2__["default"].downloadFile(data)
            .then(response => new Blob([response.data]))
            .then(blob => {
            let cn = data.county_name.replaceAll(' ', '-');
            let jn = data.jurisdiction_name.replaceAll(' ', '-');
            (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(blob, data.request_id + "_" + data.qvf + "_" + cn + "_" + jn + ".csv");
        })
            .catch(error => {
            console.log(error);
            if (error.response.status === 403 || error.response.status === 401) {
                setRedirect("/login");
            }
        });
    }
    const ExpandedComponent = () => ({ data }) => {
        if (data.status === 'DOWNLOAD') {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(data, null, 2) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "button", onClick: () => handleDownload(data), className: "btn" }, { children: "Download" }))] }));
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
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "container" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "QVF Date" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", Object.assign({ required: true, id: "qvf", name: "qvf", disabled: isQvfDateLoading, value: qvfDate, onChange: (e) => validateQvfSelection(e.currentTarget.value) }, { children: qvfDates.map((qvf) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: qvf.table_name }, { children: qvf.table_name.split('_')[1] }), qvf.table_name))) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { animation: "border", variant: 'danger', role: "status" })
                                            : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ required: true, id: "countyName", name: "countyName", disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], { children: [isJurisdictionDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { animation: "border", variant: 'danger', role: "status" })
                                            : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Jurisdiction", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", Object.assign({ required: true, id: "jurisdictionName", name: "jurisdictionName", disabled: isJurisdictionDropdownLoading, value: jurisdictionName, onChange: (e) => validateJurisdictionSelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select Jurisdiction --- " })), jurisdictions.map((jurisdiction) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: jurisdiction.jurisdiction_name }, { children: jurisdiction.jurisdiction_name }), jurisdiction.jurisdiction_name)))] }))] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ type: "button", onClick: saveDownloadRequest, disabled: !readyforSubmit, className: "btn" }, { children: "Generate File" })) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Downloads Requested" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_table_component__WEBPACK_IMPORTED_MODULE_4__["default"], { expandableRows: true, expandableRowsComponent: ExpandedComponent(), expandOnRowClicked: true, columns: columns, data: downloadRequests, highlightOnHover: true, pagination: true, paginationPerPage: 10, paginationTotalRows: downloadRequests.length, responsive: true, striped: true })] }) })] })));
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
    const [qvfDate, setQvfDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(" --- Select QVF Date --- ");
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
            setQvfDate(qvfDates[0].table_name);
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
        if (countySelected == "0") {
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
                    console.log(resp.data);
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
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: "container" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ onSubmit: submitForm }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ role: "form" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["QVF Date", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ disabled: isLoading, value: qvfDate, onChange: (e) => setQvfDate(e.currentTarget.value) }, { children: qvfDates.map((qvf) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: qvf.table_name }, { children: qvf.table_name.split('_')[1] }), qvf.table_name))) }))] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [isCountyDropdownLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], { animation: "border", variant: 'danger', role: "status" })
                                                    : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["County", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Select, Object.assign({ required: true, disabled: isCountyDropdownLoading, value: countyName, onChange: (e) => validateCountySelection(e.currentTarget.value) }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: "" }, { children: " --- Select County --- " })), counties.map((county) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: county.county_name }, { children: county.county_name }), county.county_name)))] }))] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Zip", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, value: voterZip, onChange: (e) => setVoterZip(e.target.value), type: "text", placeholder: "Enter Zip", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Last Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, value: voterLastName, onChange: (e) => setVoterLastName(e.target.value), type: "text", placeholder: "Enter Last Name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["First Name", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, value: voterFirstName, onChange: (e) => setVoterFirstName(e.target.value), type: "text", placeholder: "Enter First name", className: "input" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Year of Birth", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Control, { required: true, value: voterYearOfBirth, onChange: (e) => setVoterYearOfBirth(e.target.value), type: "text", placeholder: "Enter Year of Birth", className: "input" })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], { children: "\u00A0" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({ size: 'lg', type: "submit", className: "btn" }, { children: "Get My Voting History" })) })] })) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: isLoading ?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NmY4MjI1YzgwMDAxOTdkYmI2OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMkhBQTJIO0FBQzNIO0FBQ0EsOEVBQThFLDJDQUEyQyw0QkFBNEIsS0FBSyxXQUFXLDJDQUEyQyx5QkFBeUIseUJBQXlCLDJCQUEyQixvQkFBb0IsS0FBSyxtQ0FBbUMsdUJBQXVCLDhCQUE4Qiw2QkFBNkIsS0FBSyxpQkFBaUIsMkJBQTJCLHNDQUFzQyxxQkFBcUIseUJBQXlCLDRCQUE0QixtREFBbUQsS0FBSyxxQkFBcUIseUJBQXlCLGlDQUFpQyxxQkFBcUIsS0FBSyxlQUFlLG9CQUFvQixvQkFBb0IsdUNBQXVDLHVCQUF1QixLQUFLLG9CQUFvQiw4QkFBOEIsS0FBSyxpS0FBaUssc0JBQXNCLDZCQUE2QixLQUFLLGtCQUFrQix5QkFBeUIseUJBQXlCLDRCQUE0QixvQkFBb0IsNkJBQTZCLEtBQUsseUJBQXlCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLEtBQUssc0VBQXNFLHNCQUFzQixLQUFLLGdEQUFnRCx1QkFBdUIsS0FBSywwQkFBMEIseUJBQXlCLEtBQUssaUNBQWlDLDJCQUEyQiwyQkFBMkIsMEJBQTBCLEtBQUssbUNBQW1DLHdCQUF3Qix1QkFBdUIseUJBQXlCLDJCQUEyQixLQUFLLGlDQUFpQyxpQ0FBaUMsS0FBSyxpREFBaUQsa0JBQWtCLHFCQUFxQixtQkFBbUIsMkNBQTJDLHVDQUF1QyxtQ0FBbUMsS0FBSyxrQ0FBa0Msc0JBQXNCLDRCQUE0QixLQUFLLHlDQUF5QyxzQkFBc0IseUJBQXlCLEtBQUssZ0NBQWdDLHdCQUF3Qix5Q0FBeUMsS0FBSywwQkFBMEIsc0JBQXNCLHlCQUF5QixpQ0FBaUMsdUJBQXVCLEtBQUssZ0NBQWdDLHVCQUF1Qix5QkFBeUIsS0FBSyw0QkFBNEIsMkJBQTJCLEtBQUssK0RBQStELGtDQUFrQyw0QkFBNEIsS0FBSyxxQ0FBcUMsMkJBQTJCLEtBQUssaUNBQWlDLHVCQUF1QiwyQkFBMkIsaUJBQWlCLG9CQUFvQixvQ0FBb0MsS0FBSyxpQkFBaUIsb0NBQW9DLHNDQUFzQyw0QkFBNEIsS0FBSyxpQkFBaUIsc0JBQXNCLEtBQUssbUJBQW1CLDJCQUEyQixvQ0FBb0MsdUJBQXVCLDJCQUEyQiwyQkFBMkIsS0FBSyxvQkFBb0IseUJBQXlCLHVCQUF1QixLQUFLLHVDQUF1Qyx1Q0FBdUMsK0JBQStCLEtBQUssaUtBQWlLLG9CQUFvQixzQkFBc0IsMEJBQTBCLDZCQUE2QixLQUFLLGlMQUFpTCxrQkFBa0IsNEJBQTRCLDRCQUE0QiwrQkFBK0IsMENBQTBDLFNBQVMsaUNBQWlDLHNCQUFzQix5QkFBeUIsdUJBQXVCLCtDQUErQywyQ0FBMkMsdUNBQXVDLFNBQVMseUJBQXlCLHNDQUFzQyxTQUFTLDREQUE0RCwwQkFBMEIsU0FBUyx5Q0FBeUMsMkJBQTJCLFNBQVMsMEJBQTBCLCtCQUErQixTQUFTLCtCQUErQiw4QkFBOEIsU0FBUyw0QkFBNEIsNEJBQTRCLDJCQUEyQixTQUFTLDBCQUEwQixxQ0FBcUMsU0FBUyw0QkFBNEIsNkJBQTZCLFNBQVMsa0JBQWtCLDJCQUEyQixTQUFTLCtCQUErQiwwQkFBMEIsU0FBUyxLQUFLLDhCQUE4QixzQkFBc0IsK0JBQStCLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDZCQUE2Qix5Q0FBeUMsd0JBQXdCLE9BQU8saURBQWlELDJCQUEyQiwwQkFBMEIsT0FBTyw2QkFBNkIsMkJBQTJCLHNCQUFzQixrQ0FBa0MsK0JBQStCLHVCQUF1QixrQ0FBa0Msc0NBQXNDLE9BQU8sb0NBQW9DLDBCQUEwQiwwQkFBMEIsbUJBQW1CLE9BQU8saUNBQWlDLDBCQUEwQixPQUFPLDJCQUEyQix3QkFBd0IsT0FBTywyQkFBMkIsc0JBQXNCLDRCQUE0QiwrQkFBK0IsNEJBQTRCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLHdCQUF3QixrQ0FBa0MsK0JBQStCLDhCQUE4QixvQkFBb0Isa0NBQWtDLHlCQUF5QixPQUFPLHNDQUFzQyw2QkFBNkIscUNBQXFDLDRCQUE0QixzQkFBc0IsK0JBQStCLE9BQU8sNkNBQTZDLHVCQUF1QixPQUFPLDBDQUEwQyxrQkFBa0IsT0FBTyw2Q0FBNkMsa0NBQWtDLDJCQUEyQiwwQkFBMEIsT0FBTyx1REFBdUQseUNBQXlDLDBCQUEwQiw0QkFBNEIsU0FBUyw4Q0FBOEMsNEJBQTRCLFNBQVMsT0FBTyxPQUFPLHNGQUFzRixLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sMklBQTJJLFVBQVUsMkNBQTJDLDRCQUE0QixLQUFLLFdBQVcsMkNBQTJDLHlCQUF5Qix5QkFBeUIsMkJBQTJCLG9CQUFvQixLQUFLLG1DQUFtQyx1QkFBdUIsOEJBQThCLDZCQUE2QixLQUFLLGlCQUFpQiwyQkFBMkIsc0NBQXNDLHFCQUFxQix5QkFBeUIsNEJBQTRCLG1EQUFtRCxLQUFLLHFCQUFxQix5QkFBeUIsaUNBQWlDLHFCQUFxQixLQUFLLGVBQWUsb0JBQW9CLG9CQUFvQix1Q0FBdUMsdUJBQXVCLEtBQUssb0JBQW9CLDhCQUE4QixLQUFLLGlLQUFpSyxzQkFBc0IsNkJBQTZCLEtBQUssa0JBQWtCLHlCQUF5Qix5QkFBeUIsNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyx5QkFBeUIseUJBQXlCLHlCQUF5QiwyQkFBMkIsS0FBSyxzRUFBc0Usc0JBQXNCLEtBQUssZ0RBQWdELHVCQUF1QixLQUFLLDBCQUEwQix5QkFBeUIsS0FBSyxpQ0FBaUMsMkJBQTJCLDJCQUEyQiwwQkFBMEIsS0FBSyxtQ0FBbUMsd0JBQXdCLHVCQUF1Qix5QkFBeUIsMkJBQTJCLEtBQUssaUNBQWlDLGlDQUFpQyxLQUFLLGlEQUFpRCxrQkFBa0IscUJBQXFCLG1CQUFtQiwyQ0FBMkMsdUNBQXVDLG1DQUFtQyxLQUFLLGtDQUFrQyxzQkFBc0IsNEJBQTRCLEtBQUsseUNBQXlDLHNCQUFzQix5QkFBeUIsS0FBSyxnQ0FBZ0Msd0JBQXdCLHlDQUF5QyxLQUFLLDBCQUEwQixzQkFBc0IseUJBQXlCLGlDQUFpQyx1QkFBdUIsS0FBSyxnQ0FBZ0MsdUJBQXVCLHlCQUF5QixLQUFLLDRCQUE0QiwyQkFBMkIsS0FBSywrREFBK0Qsa0NBQWtDLDRCQUE0QixLQUFLLHFDQUFxQywyQkFBMkIsS0FBSyxpQ0FBaUMsdUJBQXVCLDJCQUEyQixpQkFBaUIsb0JBQW9CLG9DQUFvQyxLQUFLLGlCQUFpQixvQ0FBb0Msc0NBQXNDLDRCQUE0QixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxtQkFBbUIsMkJBQTJCLG9DQUFvQyx1QkFBdUIsMkJBQTJCLDJCQUEyQixLQUFLLG9CQUFvQix5QkFBeUIsdUJBQXVCLEtBQUssdUNBQXVDLHVDQUF1QywrQkFBK0IsS0FBSyxpS0FBaUssb0JBQW9CLHNCQUFzQiwwQkFBMEIsNkJBQTZCLEtBQUssaUxBQWlMLGtCQUFrQiw0QkFBNEIsNEJBQTRCLCtCQUErQiwwQ0FBMEMsU0FBUyxpQ0FBaUMsc0JBQXNCLHlCQUF5Qix1QkFBdUIsK0NBQStDLDJDQUEyQyx1Q0FBdUMsU0FBUyx5QkFBeUIsc0NBQXNDLFNBQVMsNERBQTRELDBCQUEwQixTQUFTLHlDQUF5QywyQkFBMkIsU0FBUywwQkFBMEIsK0JBQStCLFNBQVMsK0JBQStCLDhCQUE4QixTQUFTLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLFNBQVMsMEJBQTBCLHFDQUFxQyxTQUFTLDRCQUE0Qiw2QkFBNkIsU0FBUyxrQkFBa0IsMkJBQTJCLFNBQVMsK0JBQStCLDBCQUEwQixTQUFTLEtBQUssOEJBQThCLHNCQUFzQiwrQkFBK0IsOEJBQThCLGdDQUFnQyw0QkFBNEIsNkJBQTZCLHlDQUF5Qyx3QkFBd0IsT0FBTyxpREFBaUQsMkJBQTJCLDBCQUEwQixPQUFPLDZCQUE2QiwyQkFBMkIsc0JBQXNCLGtDQUFrQywrQkFBK0IsdUJBQXVCLGtDQUFrQyxzQ0FBc0MsT0FBTyxvQ0FBb0MsMEJBQTBCLDBCQUEwQixtQkFBbUIsT0FBTyxpQ0FBaUMsMEJBQTBCLE9BQU8sMkJBQTJCLHdCQUF3QixPQUFPLDJCQUEyQixzQkFBc0IsNEJBQTRCLCtCQUErQiw0QkFBNEIseUJBQXlCLDJCQUEyQiw2QkFBNkIsd0JBQXdCLGtDQUFrQywrQkFBK0IsOEJBQThCLG9CQUFvQixrQ0FBa0MseUJBQXlCLE9BQU8sc0NBQXNDLDZCQUE2QixxQ0FBcUMsNEJBQTRCLHNCQUFzQiwrQkFBK0IsT0FBTyw2Q0FBNkMsdUJBQXVCLE9BQU8sMENBQTBDLGtCQUFrQixPQUFPLDZDQUE2QyxrQ0FBa0MsMkJBQTJCLDBCQUEwQixPQUFPLHVEQUF1RCx5Q0FBeUMsMEJBQTBCLDRCQUE0QixTQUFTLDhDQUE4Qyw0QkFBNEIsU0FBUyxPQUFPLG1CQUFtQjtBQUNoemhCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHNEQUFzRCx3Q0FBd0MscUJBQXFCLEtBQUssUUFBUSxvQkFBb0IsS0FBSyxPQUFPLDBGQUEwRixZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUscUNBQXFDLHdDQUF3QyxxQkFBcUIsS0FBSyxRQUFRLG9CQUFvQixLQUFLLG1CQUFtQjtBQUNqYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0Qsa0JBQWtCLHlNQUF5TSw0Q0FBNEMsMkNBQTJDLE9BQU8sa0JBQWtCLG1HQUFtRyxPQUFPLE9BQU8sZ0ZBQWdGLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLCtCQUErQixrQkFBa0IseU1BQXlNLDRDQUE0QywyQ0FBMkMsT0FBTyxrQkFBa0IsbUdBQW1HLE9BQU8sbUJBQW1CO0FBQ3htQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSxrR0FBYyxHQUFHLGtHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLDRGQUFjLEdBQUcsNEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCN0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0RBQXdELGNBQWM7QUFDdEUsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h1QztBQUNmO0FBQ0s7QUFDckQ7QUFDQSxZQUFZLHVEQUFLLHdCQUF3Qiw2QkFBNkIsSUFBSSxXQUFXLHNEQUFJLFdBQVcsd0JBQXdCLEdBQUcsc0RBQUksUUFBUSxtREFBbUQsSUFBSTtBQUNsTTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQsWUFBWSx1REFBSyx3QkFBd0IsMkJBQTJCLElBQUksV0FBVyxzREFBSSxDQUFDLHdEQUFlLElBQUksZ0RBQWdELEdBQUcsc0RBQUksUUFBUSxlQUFlLEdBQUcsc0RBQUksQ0FBQyx3REFBZSxJQUFJLDhDQUE4QyxHQUFHLHNEQUFJLFFBQVEsZUFBZSxHQUFHLHNEQUFJLENBQUMsd0RBQWUsSUFBSSwrQ0FBK0MsR0FBRyxzREFBSSxRQUFRLGVBQWUsR0FBRyxzREFBSSxDQUFDLHdEQUFlLElBQUksa0RBQWtELElBQUk7QUFDemQ7QUFDQSwwQkFBMEIsWUFBWTtBQUN0Qyw0Q0FBNEMsaUVBQVk7QUFDeEQ7QUFDQSxlQUFlLHNEQUFJLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLGdCQUFnQiw4REFBOEQ7QUFDbEc7QUFDQTtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCaUM7QUFDL0QsMkJBQTJCLHVCQUF1QjtBQUNsRCxZQUFZLHVEQUFLLHdCQUF3Qix3REFBd0QsSUFBSSxXQUFXLHNEQUFJLFFBQVEsaUJBQWlCLEdBQUcsc0RBQUksV0FBVyxnQkFBZ0IsSUFBSTtBQUNuTDtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p1RDtBQUNwRDtBQUNpQjtBQUNwQyxtQkFBbUIsNENBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUE0QjtBQUNwQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSx3QkFBd0Isd0JBQXdCLElBQUksVUFBVSx1REFBSywyQkFBMkIsd0JBQXdCLElBQUksV0FBVyxzREFBSSxTQUFTLCtCQUErQixHQUFHLHNEQUFJLFNBQVMsZ0NBQWdDLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLFNBQVMsMEdBQTBHLEdBQUcsc0RBQUksU0FBUywwRUFBMEUsSUFBSSxHQUFHLHNEQUFJLFNBQVMsMEJBQTBCLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLFNBQVMsdURBQXVELEdBQUcsc0RBQUksU0FBUyx5SUFBeUksR0FBRyxzREFBSSxTQUFTLHlGQUF5RixJQUFJLElBQUksSUFBSSxJQUFJO0FBQzk1QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUIrRDtBQUM3QjtBQUNhO0FBQ0U7QUFDTztBQUNMO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQUksd0JBQXdCLGdEQUFnRCxJQUFJLHFDQUFxQztBQUNySTtBQUNBO0FBQ2Usb0JBQW9CLDRDQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVksb0VBQWlCO0FBQzdCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLHdCQUF3Qix3QkFBd0IsSUFBSSxVQUFVLHNEQUFJLHdCQUF3QixrQ0FBa0MsSUFBSSxVQUFVLHVEQUFLLENBQUMsb0VBQUksa0JBQWtCO0FBQzFMO0FBQ0EsdUJBQXVCLElBQUksV0FBVyx1REFBSyx3QkFBd0IseUJBQXlCLElBQUksV0FBVyxzREFBSSwwQkFBMEIscUJBQXFCLElBQUksc0JBQXNCLElBQUksc0RBQUksQ0FBQyxxRUFBSyxJQUFJLGlKQUFpSixJQUFJLElBQUksdURBQUssd0JBQXdCLHlCQUF5QixJQUFJLFdBQVcsc0RBQUksMEJBQTBCLHFCQUFxQixJQUFJLHNCQUFzQixJQUFJLHNEQUFJLENBQUMscUVBQUssSUFBSSxxSkFBcUosSUFBSSxJQUFJLHNEQUFJLHdCQUF3Qix5QkFBeUIsSUFBSSxVQUFVLHVEQUFLLDJCQUEyQixzRUFBc0UsSUFBSSxrQ0FBa0Msc0RBQUksV0FBVywrQ0FBK0MsSUFBSSxzREFBSSxXQUFXLG1CQUFtQixJQUFJLElBQUksMkJBQTJCLHNEQUFJLHdCQUF3Qix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLHdCQUF3QixnREFBZ0QsSUFBSSw4QkFBOEIsSUFBSSxLQUFLLHNEQUFJLENBQUMsc0VBQVcsSUFBSSxTQUFTLGlCQUFpQjtBQUNsdUM7QUFDQSwrQkFBK0IsSUFBSSxJQUFJLElBQUk7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RStEO0FBQzdCO0FBQ1U7QUFDTztBQUNwQyxzQkFBc0IsNENBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQyx3QkFBd0IsMkNBQTJDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBSSxDQUFDLHNEQUFRLElBQUkseUJBQXlCO0FBQzdEO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIsZ0JBQWdCLHNEQUFJLHdCQUF3Qix3QkFBd0IsSUFBSTtBQUN4RSxnQkFBZ0IsdURBQUssVUFBVSxXQUFXLHNEQUFJLDJCQUEyQix3QkFBd0IsSUFBSSxVQUFVLHVEQUFLLFNBQVMsV0FBVyxzREFBSSxhQUFhLGdDQUFnQyxnQkFBZ0IsR0FBRyxJQUFJLHVEQUFLLFFBQVEsV0FBVyxzREFBSSxhQUFhLG9CQUFvQixxSUFBcUksR0FBRyx1REFBSyxRQUFRLFdBQVcsc0RBQUksYUFBYSxpQkFBaUIseUJBQXlCLEdBQUcsdURBQUssUUFBUSxXQUFXLHNEQUFJLGFBQWEsb0JBQW9CLDRCQUE0QixHQUFHLHNEQUFJLGFBQWEsMEJBQTBCLEdBQUcsc0RBQUksU0FBUztBQUNsb0IsdUVBQXVFLHNEQUFJLFNBQVMsZ0JBQWdCLFdBQVcsSUFBSSxVQUFVO0FBQzdIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCK0Q7QUFDN0I7QUFDYTtBQUNFO0FBQ087QUFDcEI7QUFDZTtBQUNuRDtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLHdCQUF3QixnREFBZ0QsSUFBSSxxQ0FBcUM7QUFDckk7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrREFBTztBQUNoQixnQkFBZ0Isc0RBQUksd0JBQXdCLGdEQUFnRCxJQUFJLHdDQUF3QztBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBSSx3QkFBd0IsZ0RBQWdELElBQUksK0RBQStEO0FBQy9KO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFJLHdCQUF3QixnREFBZ0QsSUFBSSwrREFBK0Q7QUFDL0o7QUFDQTtBQUNlLHVCQUF1Qiw0Q0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSx1RUFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQUksd0JBQXdCLHdCQUF3QixJQUFJLFVBQVUsc0RBQUksd0JBQXdCLGtDQUFrQyxJQUFJLFVBQVUsdURBQUssQ0FBQyxvRUFBSSxrQkFBa0I7QUFDMUw7QUFDQSx1QkFBdUIsSUFBSSxzQ0FBc0MsdURBQUssVUFBVSxXQUFXLHVEQUFLLHdCQUF3Qix5QkFBeUIsSUFBSSxXQUFXLHNEQUFJLDBCQUEwQixxQkFBcUIsSUFBSSxzQkFBc0IsSUFBSSxzREFBSSxDQUFDLHFFQUFLLElBQUksNEpBQTRKLElBQUksSUFBSSx1REFBSyx3QkFBd0IseUJBQXlCLElBQUksV0FBVyxzREFBSSwwQkFBMEIsa0JBQWtCLElBQUksbUJBQW1CLElBQUksc0RBQUksQ0FBQyxxRUFBSyxJQUFJLCtJQUErSSxJQUFJLElBQUksdURBQUssd0JBQXdCLHlCQUF5QixJQUFJLFdBQVcsc0RBQUksMEJBQTBCLHFCQUFxQixJQUFJLHNCQUFzQixJQUFJLHNEQUFJLENBQUMscUVBQUssSUFBSSxnS0FBZ0ssSUFBSSxJQUFJLHNEQUFJLHdCQUF3Qix5QkFBeUIsSUFBSSxVQUFVLHNEQUFJLDJCQUEyQix3Q0FBd0MsSUFBSSxxQkFBcUIsSUFBSSxLQUFLLDJCQUEyQixzREFBSSx3QkFBd0IseUJBQXlCLElBQUksVUFBVSxzREFBSSx3QkFBd0I7QUFDMTBDO0FBQ0EsMkVBQTJFLElBQUksOEJBQThCLElBQUksS0FBSyxzREFBSSxDQUFDLHNFQUFXLElBQUksU0FBUyxpQkFBaUI7QUFDcEs7QUFDQSwrQkFBK0IsSUFBSSxJQUFJLElBQUk7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RjRDO0FBQzVDO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQVE7QUFDOUMsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLEVBQUU7QUFDbEY7QUFDUCxRQUFRLEtBQXFFLEVBQUUsRUEwQjFFO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIZTtBQUNmO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQStDO0FBQ25FLGlCQUFpQixzQ0FBc0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUMEI7QUFDMUIsZ0JBQWdCLGdFQUFXO0FBQzNCO0FBQ0E7QUFDQSxlQUFlLGlEQUNFO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlA7QUFDYTtBQUN2QyxnQkFBZ0IsZ0VBQVc7QUFDM0I7QUFDQTtBQUNBLGVBQWUsZ0RBQVM7QUFDeEI7QUFDQTtBQUNBLGVBQWUsZ0RBQVMscUJBQXFCLFNBQVMsd0RBQVUsSUFBSTtBQUNwRTtBQUNBO0FBQ0EsZUFBZSxnREFBUyxvQkFBb0IsU0FBUyx3REFBVSxJQUFJO0FBQ25FO0FBQ0E7QUFDQSxlQUFlLGdEQUFTLHNCQUFzQixTQUFTLHdEQUFVLElBQUk7QUFDckU7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCOEI7QUFDN0I7QUFDNEI7QUFDUDtBQUNGO0FBQ007QUFDTjtBQUNJO0FBQ2xCO0FBQ1E7QUFDRTtBQUNNO0FBQ1I7QUFDTjtBQUNmO0FBQ3dCO0FBQ2I7QUFDTTtBQUNZO0FBQ3ZEO0FBQ3VEO0FBQ0U7QUFDekQseUJBQXlCLDRDQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhFQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsUUFBUSw0REFBVztBQUNuQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxnRUFBZTtBQUN2QjtBQUNBO0FBQ0EsUUFBUSxzRUFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixrREFBa0Q7QUFDbEU7QUFDQSxnQkFBZ0IsdURBQUssd0JBQXdCLHNCQUFzQixJQUFJLFdBQVcsdURBQUssd0JBQXdCLGVBQWUsSUFBSSxXQUFXLHVEQUFLLHdCQUF3Qiw2QkFBNkIsSUFBSSxXQUFXLHNEQUFJLFNBQVMsc0NBQXNDLEdBQUcsc0RBQUksYUFBYSxpQkFBaUIsSUFBSSxJQUFJLHVEQUFLLHVCQUF1Qix1Q0FBdUMsSUFBSSxXQUFXLHVEQUFLLFNBQVMsV0FBVyx1REFBSyxzQkFBc0IseUdBQXlHLElBQUksV0FBVyxzREFBSSxRQUFRLDBCQUEwQixvQkFBb0IsSUFBSSxzREFBSSx1QkFBdUIsd0RBQXdELElBQUksVUFBVSxzREFBSSx1QkFBdUIsdUJBQXVCLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFJLGtCQUFrQixpREFBaUQsSUFBSSw0QkFBNEIsSUFBSSxJQUFJLEtBQUssR0FBRyx1REFBSyxTQUFTLFdBQVcsdURBQUssc0JBQXNCLGlIQUFpSCxJQUFJLFdBQVcsc0RBQUksUUFBUSw2QkFBNkIsd0JBQXdCLElBQUksc0RBQUksdUJBQXVCLGdFQUFnRSxJQUFJLFVBQVUsc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBSSxrQkFBa0IsMENBQTBDLElBQUksd0JBQXdCLElBQUksSUFBSSxLQUFLLEdBQUcsdURBQUssU0FBUyxXQUFXLHVEQUFLLHNCQUFzQix5R0FBeUcsSUFBSSxXQUFXLHNEQUFJLFFBQVEsNkJBQTZCLHNCQUFzQixJQUFJLHVEQUFLLHVCQUF1Qix3REFBd0QsSUFBSSxXQUFXLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLHNEQUFzRCxJQUFJLG9DQUFvQyxJQUFJLElBQUksc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksQ0FBQyxtREFBSSxrQkFBa0IsOENBQThDLElBQUksNEJBQTRCLElBQUksS0FBSyxLQUFLLEdBQUcsc0RBQUksU0FBUyxVQUFVLHVEQUFLLENBQUMsbURBQUksa0JBQWtCLHVDQUF1QyxJQUFJLFdBQVcsc0RBQUksUUFBUSxpQ0FBaUMsc0JBQXNCLElBQUksSUFBSSxLQUFLLElBQUksdURBQUssd0JBQXdCLGVBQWUsSUFBSSxXQUFXLHNEQUFJLHdCQUF3Qiw0REFBNEQsSUFBSSxVQUFVLHVEQUFLLHdCQUF3Qiw4QkFBOEIsSUFBSSxXQUFXLHVEQUFLLDJCQUEyQixnRUFBZ0UsSUFBSSxXQUFXLHNEQUFJLFFBQVEsZ0NBQWdDLEdBQUcsc0RBQUksV0FBVyxJQUFJLElBQUksc0RBQUksMkJBQTJCLHlQQUF5UCxJQUFJLFVBQVUsc0RBQUksUUFBUSxtQ0FBbUMsR0FBRyxJQUFJLHVEQUFLLFVBQVUscUJBQXFCLHNEQUFJLENBQUMsbUVBQWMsSUFBSSx5Q0FBeUMsSUFBSSxHQUFHLHNEQUFJLHdCQUF3QixxRUFBcUUsSUFBSSxVQUFVLHVEQUFLLHVCQUF1QixxQ0FBcUMsSUFBSSxXQUFXLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLG9DQUFvQyxJQUFJLGtCQUFrQixJQUFJLHVCQUF1QixzREFBSSx1QkFBdUIsdUJBQXVCLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFJLGtCQUFrQix5Q0FBeUMsSUFBSSxtQkFBbUIsSUFBSSxNQUFNLElBQUksbUJBQW1CLHVEQUFLLHdCQUF3QixpQ0FBaUMsSUFBSSxXQUFXLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLDJDQUEyQyxJQUFJLGdDQUFnQyxJQUFJLElBQUksc0RBQUksdUJBQXVCLHVCQUF1QixJQUFJLFVBQVUsc0RBQUksc0JBQXNCLGlFQUFpRSxJQUFJLG9CQUFvQixJQUFJLEtBQUssT0FBTyx1REFBSyx3QkFBd0IsaUNBQWlDLElBQUksV0FBVyxzREFBSSx1QkFBdUIsdUJBQXVCLElBQUksVUFBVSxzREFBSSxDQUFDLG1EQUFJLGtCQUFrQix5Q0FBeUMsSUFBSSxtQkFBbUIsSUFBSSxJQUFJLHNEQUFJLHVCQUF1Qix1QkFBdUIsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQUksa0JBQWtCLDRDQUE0QyxJQUFJLHFCQUFxQixJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksc0RBQUksd0JBQXdCLG1CQUFtQixJQUFJLFVBQVUsdURBQUssQ0FBQyxxREFBTSxJQUFJLFdBQVcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDhDQUE4QyxrRUFBSSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLHdDQUF3QyxtRUFBSyxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDJDQUEyQyx1RUFBUSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDBDQUEwQyxxRUFBTyxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDRDQUE0QyxnRUFBWSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLG9DQUFvQyxrRUFBYSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLHVDQUF1QyxtRUFBZSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLGdDQUFnQyxrRUFBYSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLHNDQUFzQyxrRUFBYyxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDJCQUEyQix5REFBSyxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLCtCQUErQiw4REFBUyxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDBCQUEwQix5REFBSSxFQUFFLEdBQUcsc0RBQUksQ0FBQyxvREFBSyxJQUFJLDZCQUE2Qiw0REFBTyxFQUFFLElBQUksR0FBRyxLQUFLLEtBQUs7QUFDajlLO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUQ2QztBQUNoRSxxQkFBcUIsc0RBQUksQ0FBQyx1REFBUyxJQUFJLFVBQVUsc0RBQUksU0FBUyxnQ0FBZ0MsR0FBRztBQUN4RyxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUU7QUFDakM7QUFDM0I7QUFDeUI7QUFDMEI7QUFDdEU7QUFDUCxzQ0FBc0MsK0NBQVE7QUFDOUMsa0VBQWtFLCtDQUFRO0FBQzFFLG9DQUFvQywrQ0FBUTtBQUM1Qyx3Q0FBd0MsK0NBQVE7QUFDaEQsNENBQTRDLCtDQUFRO0FBQ3BELHdDQUF3QywrQ0FBUTtBQUNoRCwwQkFBMEIsK0NBQVE7QUFDbEMsZ0RBQWdELCtDQUFRO0FBQ3hELGtEQUFrRCwrQ0FBUTtBQUMxRCxzREFBc0QsK0NBQVE7QUFDOUQsOEJBQThCLCtDQUFRO0FBQ3RDLG9EQUFvRCwrQ0FBUTtBQUM1RCx5QkFBeUIsOENBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSUFBSSxnREFBUztBQUNiO0FBQ0EsY0FBYyxnRUFBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBUyxDQUFDLGdFQUFXLGlEQUFpRCxXQUFXLEdBQUcsb0JBQW9CO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLHdCQUF3Qix3QkFBd0IsSUFBSSxXQUFXLHNEQUFJLENBQUMsdURBQUksa0JBQWtCLHNCQUFzQixJQUFJLFVBQVUsdURBQUssQ0FBQyx1REFBUyxrQkFBa0IsY0FBYyxJQUFJLFdBQVcsdURBQUssQ0FBQyx1REFBRyxJQUFJLFdBQVcsdURBQUssQ0FBQyx1REFBRyxJQUFJLHFDQUFxQyxzREFBSSxDQUFDLHVEQUFPLElBQUksd0RBQXdEO0FBQy9WLG9EQUFvRCx1REFBSyxZQUFZLHFCQUFxQix1REFBSyxDQUFDLDhEQUFXLGtCQUFrQix1SUFBdUksSUFBSSxXQUFXLHNEQUFJLDJCQUEyQixXQUFXLElBQUkscUNBQXFDLDhCQUE4QixzREFBSSwyQkFBMkIsMkJBQTJCLElBQUksOEJBQThCLDJCQUEyQixLQUFLLElBQUksR0FBRyxzREFBSSxDQUFDLHVEQUFHLElBQUksVUFBVSx1REFBSyxZQUFZLDRCQUE0QixzREFBSSxDQUFDLCtEQUFZLElBQUksNkpBQTZKLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsdURBQUcsSUFBSSxVQUFVLHVEQUFLLFlBQVksMEJBQTBCLHNEQUFJLENBQUMsK0RBQVksSUFBSSx1SkFBdUosSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx1REFBRyxJQUFJLFVBQVUsdURBQUssWUFBWSxrQkFBa0Isc0RBQUksQ0FBQywrREFBWSxJQUFJLCtJQUErSSxJQUFJLEdBQUcsSUFBSSxHQUFHLHNEQUFJLENBQUMsdURBQUcsSUFBSSxVQUFVLHNEQUFJLENBQUMsdURBQUcsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLHNEQUFJLENBQUMsdURBQUcsSUFBSSxVQUFVLHNEQUFJLENBQUMsdURBQU0sa0JBQWtCLHlFQUF5RSxJQUFJLDJCQUEyQixJQUFJLElBQUksSUFBSSxJQUFJLHVEQUFLLFVBQVU7QUFDOTlDLG1EQUFtRCxzREFBSSxDQUFDLHVEQUFPLElBQUksd0RBQXdEO0FBQzNIO0FBQ0E7QUFDQSwwREFBMEQsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsdURBQUssQ0FBQyw0REFBUyxJQUFJLDRDQUE0QyxHQUFHLHNEQUFJLENBQUMsa0VBQVMsSUFBSSwrQ0FBK0MsSUFBSTtBQUMvTjtBQUNBLCtCQUErQixJQUFJO0FBQ25DO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SHdEO0FBQ2pDO0FBQzNCO0FBQ3lCO0FBQzBCO0FBQ3pDO0FBQ2U7QUFDUDtBQUNLO0FBQ0c7QUFDN0M7QUFDUCxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLDBDQUEwQywrQ0FBUSxHQUFHLGNBQWM7QUFDbkUsc0NBQXNDLCtDQUFRO0FBQzlDLGtFQUFrRSwrQ0FBUTtBQUMxRSxvQ0FBb0MsK0NBQVE7QUFDNUMsd0NBQXdDLCtDQUFRO0FBQ2hELDhFQUE4RSwrQ0FBUTtBQUN0Riw4Q0FBOEMsK0NBQVE7QUFDdEQsb0RBQW9ELCtDQUFRO0FBQzVELHNFQUFzRSwrQ0FBUTtBQUM5RSxzQ0FBc0MsK0NBQVE7QUFDOUMsNENBQTRDLCtDQUFRO0FBQ3BELGdEQUFnRCwrQ0FBUTtBQUN4RCxrREFBa0QsK0NBQVE7QUFDMUQsMERBQTBELCtDQUFRO0FBQ2xFLHNEQUFzRCwrQ0FBUTtBQUM5RCx3REFBd0QsK0NBQVE7QUFDaEUsd0RBQXdELCtDQUFRO0FBQ2hFLG9CQUFvQiw4Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxJQUFJLGdEQUFTO0FBQ2IsNEJBQTRCLDZFQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQVc7QUFDdkMsb0RBQW9ELGdDQUFnQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXLDRDQUE0QyxXQUFXO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXLHdDQUF3QyxXQUFXLEdBQUcsaUJBQWlCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDLGdCQUFnQixzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxVQUFVLHlDQUF5QyxHQUFHO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdFQUFXLDZDQUE2QyxXQUFXLEdBQUcsaUJBQWlCO0FBQ3hIO0FBQ0EseURBQXlELGFBQWE7QUFDdEU7QUFDQTtBQUNBLFlBQVksZ0VBQVcsNkNBQTZDLFdBQVc7QUFDL0UsWUFBWSxnRUFBVyw4Q0FBOEMsV0FBVztBQUNoRjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLGtCQUFrQixnREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsWUFBWSxnREFBUyxpQkFBaUIsU0FBUyxpRUFBVSxJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxzREFBUSxJQUFJLGNBQWM7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix1REFBSyx3QkFBd0Isd0JBQXdCLElBQUksV0FBVyxzREFBSSxDQUFDLHVEQUFJLGtCQUFrQixzQkFBc0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsd0RBQVMsa0JBQWtCLGNBQWMsSUFBSSxXQUFXLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxXQUFXLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUNuVyx3REFBd0QsdURBQUssWUFBWSxnQ0FBZ0MsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IsdUlBQXVJLElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHFDQUFxQyw4QkFBOEIsc0RBQUksMkJBQTJCLDJCQUEyQixJQUFJLDhCQUE4QiwyQkFBMkIsS0FBSyxJQUFJLEdBQUcsdURBQUssQ0FBQyx3REFBRyxJQUFJLDJDQUEyQyxzREFBSSxDQUFDLHdEQUFPLElBQUksd0RBQXdEO0FBQ3RwQix3REFBd0QsdURBQUssWUFBWSxzQ0FBc0MsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IseUpBQXlKLElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLDJDQUEyQyx5Q0FBeUMsc0RBQUksMkJBQTJCLHVDQUF1QyxJQUFJLDBDQUEwQyx1Q0FBdUMsS0FBSyxJQUFJLEdBQUcsdURBQUssQ0FBQyx3REFBRyxJQUFJLHVDQUF1QyxzREFBSSxDQUFDLHdEQUFPLElBQUksd0RBQXdEO0FBQy90Qix3REFBd0QsdURBQUssWUFBWSx1QkFBdUIsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IsNkhBQTZILElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHVDQUF1QyxpQ0FBaUMsc0RBQUksMkJBQTJCLDBCQUEwQixJQUFJLDZCQUE2QiwwQkFBMEIsS0FBSyxJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFHLElBQUksb0JBQW9CLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFNLGtCQUFrQix5RUFBeUUsSUFBSSx5Q0FBeUMsSUFBSSxJQUFJLElBQUksSUFBSSxzREFBSSxTQUFTLEdBQUcsdURBQUssVUFBVTtBQUM3eEIsdURBQXVELHNEQUFJLENBQUMsd0RBQU8sSUFBSSx3REFBd0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLENBQUMsMERBQWlCLElBQUksc0VBQXNFLEdBQUcsc0RBQUksUUFBUSw0RUFBNEUsR0FBRyxzREFBSSxRQUFRLFVBQVUsc0RBQUksQ0FBQyw4Q0FBTyxrQkFBa0IsbUpBQW1KLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFNLGtCQUFrQiwrQ0FBK0MsSUFBSSw4QkFBOEIsSUFBSSxJQUFJLEdBQUcsc0RBQUksQ0FBQyxrRUFBUyxJQUFJLDhSQUE4UixJQUFJO0FBQzkzQjtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFN5RDtBQUMvRSx1QkFBdUIsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksU0FBUyx3QkFBd0IsR0FBRyxzREFBSSxVQUFVLDBEQUEwRCxJQUFJO0FBQ2hMLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YrRDtBQUMxQztBQUNPO0FBQ1g7QUFDcEI7QUFDb0I7QUFDeEMsNkJBQTZCLCtCQUErQjtBQUM1RCxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLHNDQUFzQywrQ0FBUTtBQUM5QywwQ0FBMEMsK0NBQVEsR0FBRyxjQUFjO0FBQ25FLElBQUksZ0RBQVM7QUFDYiw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSxzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSxzREFBSSxDQUFDLDREQUFJLGtCQUFrQixrQkFBa0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsaUVBQVMsa0JBQWtCLFNBQVMsa0JBQWtCLElBQUksV0FBVyx1REFBSyxDQUFDLGtFQUFVLElBQUksaUZBQWlGLEdBQUcsc0RBQUksQ0FBQyxpRUFBUyxrQkFBa0IsU0FBUyxrQkFBa0IsSUFBSSxVQUFVLHNEQUFJLENBQUMsdURBQUssa0JBQWtCLDRDQUE0QyxJQUFJLFVBQVUsc0RBQUksWUFBWSxVQUFVLHVEQUFLLFNBQVMsV0FBVyx1REFBSyxTQUFTLFdBQVcsc0RBQUksU0FBUywwQ0FBMEMsR0FBRyxzREFBSSxTQUFTLHNEQUFzRCxHQUFHLHNEQUFJLFNBQVMsK0NBQStDLEdBQUcsc0RBQUksU0FBUyx1REFBdUQsSUFBSSxHQUFHLHVEQUFLLFNBQVMsV0FBVyxzREFBSSxTQUFTLHlDQUF5QyxHQUFHLHNEQUFJLFNBQVMsZ0RBQWdELEdBQUcsc0RBQUksU0FBUyxvQ0FBb0MsR0FBRyxzREFBSSxTQUFTLDRDQUE0QyxJQUFJLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLFNBQVMsc0NBQXNDLEdBQUcsc0RBQUksU0FBUyw4Q0FBOEMsR0FBRyxzREFBSSxTQUFTLHNDQUFzQyxHQUFHLHNEQUFJLFNBQVMsOENBQThDLElBQUksR0FBRyx1REFBSyxTQUFTLFdBQVcsc0RBQUksdUJBQXVCLFlBQVksSUFBSSwyQkFBMkIsSUFBSSxzREFBSSx1QkFBdUIsWUFBWSxJQUFJLHdDQUF3QyxLQUFLLEdBQUcsdURBQUssU0FBUyxXQUFXLHNEQUFJLHVCQUF1QixZQUFZLElBQUksbUNBQW1DLElBQUksc0RBQUksdUJBQXVCLHdEQUF3RCxJQUFJLCtDQUErQyxLQUFLLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSx1REFBSyxDQUFDLGlFQUFTLGtCQUFrQixrRUFBa0UsSUFBSSwwREFBMEQsS0FBSyxJQUFJLElBQUk7QUFDMTREO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJxRDtBQUNqQztBQUNPO0FBQ2hCO0FBQ2M7QUFDUDtBQUNBO0FBQ2Y7QUFDN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLDBDQUEwQywrQ0FBUSxHQUFHLGNBQWM7QUFDbkUsb0RBQW9ELCtDQUFRO0FBQzVELGtEQUFrRCwrQ0FBUTtBQUMxRCxvQ0FBb0MsK0NBQVE7QUFDNUMsa0NBQWtDLCtDQUFRO0FBQzFDLGtFQUFrRSwrQ0FBUTtBQUMxRSxvQ0FBb0MsK0NBQVE7QUFDNUMsd0NBQXdDLCtDQUFRO0FBQ2hELDhFQUE4RSwrQ0FBUTtBQUN0Riw4Q0FBOEMsK0NBQVE7QUFDdEQsb0RBQW9ELCtDQUFRO0FBQzVELGtEQUFrRCwrQ0FBUTtBQUMxRCxzQ0FBc0MsK0NBQVE7QUFDOUMsc0NBQXNDLCtDQUFRO0FBQzlDLGdEQUFnRCwrQ0FBUTtBQUN4RCxvREFBb0QsK0NBQVE7QUFDNUQsb0JBQW9CLDhDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCLHlEQUF5RCxzQkFBc0IsZUFBZTtBQUM5RjtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIseURBQXlELHNCQUFzQixlQUFlO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsc0JBQXNCLG9CQUFvQjtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsc0JBQXNCLCtCQUErQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHNCQUFzQiwyQ0FBMkM7QUFDOUg7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRkFBbUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxJQUFJLGdEQUFTO0FBQ2IsNEJBQTRCLDZFQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLHFGQUFtQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFXO0FBQ3ZDLG9EQUFvRCxnQ0FBZ0M7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsdUZBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSxxRkFBbUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSw4RUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFNO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQSxvQkFBb0IsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksVUFBVSx5Q0FBeUMsR0FBRyxzREFBSSxDQUFDLHVEQUFNLGtCQUFrQix1RUFBdUUsSUFBSSxzQkFBc0IsS0FBSztBQUMvTztBQUNBO0FBQ0Esb0JBQW9CLHNEQUFJLENBQUMsdURBQVMsSUFBSSxVQUFVLHNEQUFJLFVBQVUseUNBQXlDLEdBQUc7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxzREFBUSxJQUFJLGNBQWM7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix1REFBSyx3QkFBd0Isd0JBQXdCLElBQUksV0FBVyx1REFBSyxVQUFVLFdBQVcsdURBQUssQ0FBQyx1REFBRyxJQUFJLFdBQVcsdURBQUssQ0FBQyx1REFBRyxJQUFJLFdBQVcsc0RBQUksWUFBWSxzQkFBc0IsR0FBRyxzREFBSSwyQkFBMkIsa0pBQWtKLElBQUksaUNBQWlDLHNEQUFJLDJCQUEyQix1QkFBdUIsSUFBSSx3Q0FBd0Msc0JBQXNCLEtBQUssR0FBRyx1REFBSyxDQUFDLHVEQUFHLElBQUkscUNBQXFDLHNEQUFJLENBQUMsd0RBQU8sSUFBSSx3REFBd0Q7QUFDdnBCLG9EQUFvRCx1REFBSyxZQUFZLHFCQUFxQix1REFBSywyQkFBMkIsNktBQTZLLElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHFDQUFxQyw4QkFBOEIsc0RBQUksMkJBQTJCLDJCQUEyQixJQUFJLDhCQUE4QiwyQkFBMkIsS0FBSyxJQUFJLEdBQUcsdURBQUssQ0FBQyx1REFBRyxJQUFJLDJDQUEyQyxzREFBSSxDQUFDLHdEQUFPLElBQUksd0RBQXdEO0FBQzFxQixvREFBb0QsdURBQUssWUFBWSwyQkFBMkIsdURBQUssMkJBQTJCLDJNQUEyTSxJQUFJLFdBQVcsc0RBQUksMkJBQTJCLFdBQVcsSUFBSSwyQ0FBMkMseUNBQXlDLHNEQUFJLDJCQUEyQix1Q0FBdUMsSUFBSSwwQ0FBMEMsdUNBQXVDLEtBQUssSUFBSSxJQUFJLEdBQUcsc0RBQUksQ0FBQyx1REFBRyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx1REFBRyxJQUFJLG9CQUFvQixHQUFHLEdBQUcsc0RBQUksQ0FBQyx1REFBRyxJQUFJLFVBQVUsc0RBQUksMkJBQTJCLDJGQUEyRixJQUFJLDJCQUEyQixJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLHVEQUFTLElBQUksVUFBVSx1REFBSyxVQUFVLFdBQVcsc0RBQUksU0FBUyxHQUFHLHNEQUFJLFNBQVMsaUNBQWlDLEdBQUcsc0RBQUksQ0FBQyxrRUFBUyxJQUFJLHdSQUF3UixJQUFJLEdBQUcsSUFBSTtBQUN6eUM7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUHlEO0FBQ2pDO0FBQzNCO0FBQ3lCO0FBQzBCO0FBQ3pDO0FBQ2U7QUFDUDtBQUNLO0FBQzFDO0FBQ1Asb0NBQW9DLCtDQUFRO0FBQzVDLHNDQUFzQywrQ0FBUTtBQUM5QywwQ0FBMEMsK0NBQVEsR0FBRyxjQUFjO0FBQ25FLHNDQUFzQywrQ0FBUTtBQUM5QyxrRUFBa0UsK0NBQVE7QUFDMUUsb0NBQW9DLCtDQUFRO0FBQzVDLHdDQUF3QywrQ0FBUTtBQUNoRCxnREFBZ0QsK0NBQVE7QUFDeEQsa0RBQWtELCtDQUFRO0FBQzFELHNDQUFzQywrQ0FBUTtBQUM5Qyx3REFBd0QsK0NBQVE7QUFDaEUsb0JBQW9CLDhDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYiw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBVztBQUN2QyxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3QyxnQkFBZ0Isc0RBQUksQ0FBQyx1REFBUyxJQUFJLFVBQVUsc0RBQUksVUFBVSx5Q0FBeUMsR0FBRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQVMsQ0FBQyxnRUFBVyxvREFBb0QsV0FBVyxLQUFLLFNBQVMsaUVBQVUsSUFBSTtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxzREFBUSxJQUFJLGNBQWM7QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix1REFBSyx3QkFBd0Isd0JBQXdCLElBQUksV0FBVyxzREFBSSxDQUFDLHVEQUFJLGtCQUFrQixzQkFBc0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsdURBQVMsa0JBQWtCLGNBQWMsSUFBSSxXQUFXLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUNqVyxvREFBb0QsdURBQUssWUFBWSxxQkFBcUIsdURBQUssQ0FBQyw4REFBVyxrQkFBa0IsdUhBQXVILElBQUksV0FBVyxzREFBSSwyQkFBMkIsV0FBVyxJQUFJLHFDQUFxQyw4QkFBOEIsc0RBQUksMkJBQTJCLDJCQUEyQixJQUFJLDhCQUE4QiwyQkFBMkIsS0FBSyxJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFHLElBQUksb0JBQW9CLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFNLGtCQUFrQix5RUFBeUUsSUFBSSxpQ0FBaUMsSUFBSSxJQUFJLElBQUksSUFBSSxzREFBSSxTQUFTLEdBQUcsdURBQUssVUFBVTtBQUN0d0IsdURBQXVELHNEQUFJLENBQUMsd0RBQU8sSUFBSSx3REFBd0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLFFBQVEsVUFBVSxzREFBSSxDQUFDLDhDQUFPLGtCQUFrQiw4RkFBOEYsSUFBSSxVQUFVLHNEQUFJLENBQUMsd0RBQU0sa0JBQWtCLCtDQUErQyxJQUFJLDhCQUE4QixJQUFJLElBQUksR0FBRyxzREFBSSxDQUFDLGtFQUFTLElBQUksK01BQStNLElBQUk7QUFDNWpCO0FBQ0EsbUNBQW1DLElBQUk7QUFDdkM7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6STBEO0FBQ2pDO0FBQzNCO0FBQ2tCO0FBQ087QUFDd0I7QUFDN0I7QUFDRjtBQUNPO0FBQ0Y7QUFDakQ7QUFDQSxvQ0FBb0MsK0NBQVE7QUFDNUMsMERBQTBELCtDQUFRO0FBQ2xFLDBEQUEwRCwrQ0FBUTtBQUNsRSxzQ0FBc0MsK0NBQVE7QUFDOUMsMENBQTBDLCtDQUFRLEdBQUcsY0FBYztBQUNuRSxvQ0FBb0MsK0NBQVE7QUFDNUMsa0NBQWtDLCtDQUFRO0FBQzFDLGtFQUFrRSwrQ0FBUTtBQUMxRSxvQ0FBb0MsK0NBQVE7QUFDNUMsd0NBQXdDLCtDQUFRO0FBQ2hELGdEQUFnRCwrQ0FBUTtBQUN4RCw4Q0FBOEMsK0NBQVE7QUFDdEQsZ0RBQWdELCtDQUFRO0FBQ3hELG9EQUFvRCwrQ0FBUTtBQUM1RCxvQ0FBb0MsK0NBQVE7QUFDNUMsc0NBQXNDLCtDQUFRO0FBQzlDLDRDQUE0QywrQ0FBUTtBQUNwRCw0Q0FBNEMsK0NBQVE7QUFDcEQsa0RBQWtELCtDQUFRO0FBQzFELG9CQUFvQiw4Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLElBQUksZ0RBQVM7QUFDYiw0QkFBNEIsNkVBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0VBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBVztBQUN2QyxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnREFBUyxDQUFDLGdFQUFXLDRDQUE0QyxRQUFRLEdBQUcsV0FBVyxHQUFHLFNBQVMsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLGlCQUFpQixLQUFLLFNBQVMsaUVBQVUsSUFBSTtBQUN4TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFTLENBQUMsZ0VBQVcsNENBQTRDLFFBQVEsR0FBRyx5Q0FBeUMsS0FBSyxTQUFTLGlFQUFVLElBQUk7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSxzREFBSSxDQUFDLHNEQUFRLElBQUksY0FBYztBQUM5QztBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLHdCQUF3Qix3QkFBd0IsSUFBSSxVQUFVLHNEQUFJLENBQUMsdURBQUksa0JBQWtCLHNCQUFzQixJQUFJLFVBQVUsdURBQUssQ0FBQyx1REFBUyxrQkFBa0IsY0FBYyxJQUFJLFdBQVcsdURBQUssQ0FBQyx3REFBRyxJQUFJLFdBQVcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsdURBQUssWUFBWSx1QkFBdUIsc0RBQUksQ0FBQyw4REFBVyxrQkFBa0IseUZBQXlGLElBQUksaUNBQWlDLHNEQUFJLDJCQUEyQix1QkFBdUIsSUFBSSx3Q0FBd0Msc0JBQXNCLEtBQUssR0FBRyxHQUFHLHVEQUFLLENBQUMsd0RBQUcsSUFBSSxxQ0FBcUMsc0RBQUksQ0FBQyx3REFBTyxJQUFJLHdEQUF3RDtBQUNodUIsNERBQTRELHVEQUFLLFlBQVkscUJBQXFCLHVEQUFLLENBQUMsOERBQVcsa0JBQWtCLHVJQUF1SSxJQUFJLFdBQVcsc0RBQUksMkJBQTJCLFdBQVcsSUFBSSxxQ0FBcUMsOEJBQThCLHNEQUFJLDJCQUEyQiwyQkFBMkIsSUFBSSw4QkFBOEIsMkJBQTJCLEtBQUssSUFBSSxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLFlBQVksa0JBQWtCLHNEQUFJLENBQUMsK0RBQVksSUFBSSwySUFBMkksSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyx3REFBRyxJQUFJLFVBQVUsdURBQUssWUFBWSx3QkFBd0Isc0RBQUksQ0FBQywrREFBWSxJQUFJLDJKQUEySixJQUFJLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSx1REFBSyxZQUFZLHlCQUF5QixzREFBSSxDQUFDLCtEQUFZLElBQUksOEpBQThKLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsd0RBQUcsSUFBSSxVQUFVLHVEQUFLLFlBQVksNEJBQTRCLHNEQUFJLENBQUMsK0RBQVksSUFBSSxxS0FBcUssSUFBSSxHQUFHLElBQUksR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLHdEQUFHLElBQUksb0JBQW9CLEdBQUcsR0FBRyxzREFBSSxDQUFDLHdEQUFHLElBQUksVUFBVSxzREFBSSxDQUFDLCtEQUFNLGtCQUFrQiw4Q0FBOEMsSUFBSSxtQ0FBbUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLHNEQUFJLFNBQVMsR0FBRyxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyx1REFBUyxJQUFJO0FBQ3J3RCw0QkFBNEIsc0RBQUksQ0FBQyx3REFBTyxrQkFBa0Isd0RBQXdELElBQUksVUFBVSxzREFBSSx5QkFBeUIsc0JBQXNCLElBQUksd0JBQXdCLElBQUk7QUFDbk47QUFDQSxnQ0FBZ0Msc0RBQUksQ0FBQyx3REFBSSxrQkFBa0Isd0JBQXdCLElBQUksVUFBVSx1REFBSyxDQUFDLDZEQUFTLGtCQUFrQixTQUFTLGtCQUFrQixJQUFJLFdBQVcsc0RBQUksQ0FBQyw4REFBVSxJQUFJLHdDQUF3QyxHQUFHLHNEQUFJLENBQUMsaUVBQWEsSUFBSSxtQkFBbUIsR0FBRyx1REFBSyxDQUFDLDZEQUFTLGtCQUFrQixTQUFTLGtCQUFrQixJQUFJLGtFQUFrRSxzREFBSSxTQUFTLDhFQUE4RSxzREFBSSxTQUFTLGtEQUFrRCxzREFBSSxTQUFTLDJDQUEyQyxzREFBSSxTQUFTLElBQUksS0FBSyxJQUFJO0FBQ3BvQixrQ0FBa0Msc0RBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyx1REFBUyxJQUFJLGdFQUFnRSx1REFBSyxXQUFXLHVKQUF1SjtBQUMzVSw4QkFBOEIsc0RBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxzREFBSSxVQUFVLFVBQVUsc0RBQUksQ0FBQyx1REFBUyxJQUFJO0FBQ2hHLDRCQUE0QixzREFBSSxDQUFDLHdEQUFPLGtCQUFrQix3REFBd0QsSUFBSSxVQUFVLHNEQUFJLHlCQUF5QixzQkFBc0IsSUFBSSx3QkFBd0IsSUFBSTtBQUNuTix3REFBd0QsdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsdURBQUssU0FBUyx5REFBeUQsR0FBRyxzREFBSSxDQUFDLGtFQUFTLElBQUksc0NBQXNDLElBQUk7QUFDNU4sa0NBQWtDLHNEQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsc0RBQUksVUFBVSxVQUFVLHNEQUFJLENBQUMsdURBQVMsSUFBSSxVQUFVLHNEQUFJLENBQUMsdURBQVMsSUFBSSw4REFBOEQsc0RBQUksV0FBVyxzQ0FBc0M7QUFDblAsa0NBQWtDLHNEQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUM5RDtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RCxZQUFZLHVEQUFLLFlBQVksa0JBQWtCLHNEQUFJLDJCQUEyQixxREFBcUQsSUFBSSxtQ0FBbUMsc0RBQUksMkJBQTJCLHFCQUFxQixJQUFJLHdCQUF3QixvQkFBb0IsS0FBSztBQUNuUjtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS3VEO0FBQy9FLG9CQUFvQix1REFBSyxDQUFDLHVEQUFTLElBQUksV0FBVyxzREFBSSxTQUFTLCtCQUErQixHQUFHLHNEQUFJLFVBQVUsa0hBQWtILElBQUk7QUFDNU8saUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZtRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0kseUJBQXlCLHNEQUFJLENBQUMsdURBQVMsSUFBSSxVQUFVLHNEQUFJLFNBQVMsMkJBQTJCLEdBQUc7QUFDdkcsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadUI7QUFDZjtBQUNaO0FBQzRCO0FBQ1g7QUFDVztBQUNqRCw2Q0FBZSxDQUFDLHNEQUFJLENBQUMsMkRBQWEsSUFBSSxVQUFVLHNEQUFJLENBQUMsbURBQVUsSUFBSSxHQUFHO0FBQ3RFLHNEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEU7QUFDYTtBQUN2QyxnQkFBZ0IsZ0VBQVc7QUFDM0I7QUFDQTtBQUNBLGVBQWUsaURBQVUscUNBQXFDLFNBQVMsd0RBQVUsSUFBSTtBQUNyRjtBQUNBO0FBQ0EsZUFBZSxnREFBUywrQkFBK0IsU0FBUyx3REFBVSxJQUFJO0FBQzlFO0FBQ0E7QUFDQSxlQUFlLGlEQUFVLHlDQUF5QyxTQUFTLHdEQUFVLDBCQUEwQjtBQUMvRztBQUNBO0FBQ0EsaUVBQWUscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvY2FyZC5jc3MiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZWJhci5jc3M/ZjFiOSIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9jYXJkLmNzcz82ODgxIiwid2VicGFjazovL3dlYi8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tbW9uL0V2ZW50QnVzLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93blRpbWVyLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0RhdGVUaW1lRGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9ob29rcy91c2VDb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VzL2F1dGgtaGVhZGVyLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvQXBwU2lkZUJhci50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL0F1ZGl0TXlBZGRyZXNzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9DaGFsbGVuZ2VMaXN0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9Db250YWN0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9Db3VudHlJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvRG93bmxvYWRzUGFnZS50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2NvbXBvbmVudHMvR2hvc3RidXN0ZXJzLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY29tcG9uZW50cy9NeVZvdGluZ0hpc3RvcnkudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL05ld3MudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9jb21wb25lbnRzL1Jlc291cmNlcy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvRG93bmxvYWRTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcclxcbiAgICBERU1PIFNUWUxFXFxyXFxuKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgMTQ3LCAyMDYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1idG4ge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxufVxcclxcblxcclxcbmksXFxyXFxuc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIFNJREVCQVIgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzNDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMwMjkyOTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgaDQsXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5DVEFzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0ZTQxNDM7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4YjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGNvbG9yOnJnYigyMzUsIDIyMSwgMjIxKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzgzMDIwMTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcXHJcXG5hW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNDQsIDI0NCk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0YzRkNGU7XFxyXFxufVxcclxcblxcclxcbmFbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbnVsIHVsIGEge1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0ZTUwO1xcclxcbn1cXHJcXG5cXHJcXG51bC5DVEFzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyBhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYS5kb3dubG9hZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjNzM4NkQ1O1xcclxcbn1cXHJcXG5cXHJcXG5hLmFydGljbGUsXFxyXFxuYS5hcnRpY2xlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgQ09OVEVOVCBTVFlMRVxcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgTUVESUFRVUVSSUVTXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgI3NpZGViYXIge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgdG9wOiBhdXRvO1xcclxcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXFxyXFxuICAgICNzaWRlYmFyIC5DVEFzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIHVsIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyQ29sbGFwc2Ugc3BhbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgPiBmb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciA+IGZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5leHBpcmVkLW5vdGljZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAjY2ZjOWM5O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXhwaXJlZC1ub3RpY2UgPiBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXhwaXJlZC1ub3RpY2UgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW0gMCAwLjc1cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24uZGFuZ2VyIHtcXHJcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biA+IHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biA+IHNwYW4ge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNTByZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biA+IHNwYW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93bi1saW5rIHsgXFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQXBwU2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFHRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JB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QW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcclxcbiAgICBERU1PIFNUWUxFXFxyXFxuKi9cXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXFxcIjtcXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgMTQ3LCAyMDYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1idG4ge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxyXFxufVxcclxcblxcclxcbmksXFxyXFxuc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICAgIFNJREVCQVIgU1RZTEVcXHJcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzNDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMwMjkyOTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSAuc2lkZWJhci1oZWFkZXIgaDQsXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5DVEFzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIuYWN0aXZlIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0ZTQxNDM7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4YjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGNvbG9yOnJnYigyMzUsIDIyMSwgMjIxKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzgzMDIwMTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcXHJcXG5hW2FyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNDQsIDI0NCk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0YzRkNGU7XFxyXFxufVxcclxcblxcclxcbmFbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbnVsIHVsIGEge1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGU0ZTUwO1xcclxcbn1cXHJcXG5cXHJcXG51bC5DVEFzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwuQ1RBcyBhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYS5kb3dubG9hZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjNzM4NkQ1O1xcclxcbn1cXHJcXG5cXHJcXG5hLmFydGljbGUsXFxyXFxuYS5hcnRpY2xlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgQ09OVEVOVCBTVFlMRVxcclxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gICAgTUVESUFRVUVSSUVTXFxyXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgI3NpZGViYXIge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgdG9wOiBhdXRvO1xcclxcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXFxyXFxuICAgICNzaWRlYmFyIC5DVEFzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB1bCBsaSBhIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIHVsIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyQ29sbGFwc2Ugc3BhbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgPiBmb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciA+IGZvcm0gPiBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5leHBpcmVkLW5vdGljZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAjY2ZjOWM5O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXhwaXJlZC1ub3RpY2UgPiBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXhwaXJlZC1ub3RpY2UgPiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW0gMCAwLjc1cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1jb3VudGVyIC5jb3VudGRvd24uZGFuZ2VyIHtcXHJcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biA+IHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biA+IHNwYW4ge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDEuNTByZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93biA+IHNwYW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5zaG93LWNvdW50ZXIgLmNvdW50ZG93bi1saW5rIHsgXFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mby1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uYSB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm8tY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLmEge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLFxcclxcbiAgICAgIFxcXCJVYnVudHVcXFwiLCBcXFwiQ2FudGFyZWxsXFxcIiwgXFxcIkZpcmEgU2Fuc1xcXCIsIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgICBzYW5zLXNlcmlmO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgY29kZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLFxcclxcbiAgICAgIG1vbm9zcGFjZTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNUOztnQkFFWTtJQUNaLG1DQUFtQztJQUNuQyxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRTtlQUNXO0VBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLFxcclxcbiAgICAgIFxcXCJVYnVudHVcXFwiLCBcXFwiQ2FudGFyZWxsXFxcIiwgXFxcIkZpcmEgU2Fuc1xcXCIsIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgICBzYW5zLXNlcmlmO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgY29kZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLFxcclxcbiAgICAgIG1vbm9zcGFjZTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcFNpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHBTaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJjb25zdCBldmVudEJ1cyA9IHtcclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlKSA9PiBjYWxsYmFjayhlLmRldGFpbCkpO1xyXG4gICAgfSxcclxuICAgIGRpc3BhdGNoKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBkYXRhIH0pKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRCdXM7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBEYXRlVGltZURpc3BsYXkgZnJvbSAnLi9EYXRlVGltZURpc3BsYXknO1xyXG5pbXBvcnQgeyB1c2VDb3VudGRvd24gfSBmcm9tICcuLi9ob29rcy91c2VDb3VudGRvd24nO1xyXG5jb25zdCBFeHBpcmVkTm90aWNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImV4cGlyZWQtbm90aWNlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiRXhwaXJlZCEhIVwiIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIlBsZWFzZSBzZWxlY3QgYSBmdXR1cmUgZGF0ZSBhbmQgdGltZS5cIiB9KV0gfSkpKTtcclxufTtcclxuY29uc3QgU2hvd0NvdW50ZXIgPSAoeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwic2hvdy1jb3VudGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRGF0ZVRpbWVEaXNwbGF5LCB7IHZhbHVlOiBkYXlzLCB0eXBlOiAnRGF5cycsIGlzRGFuZ2VyOiBkYXlzIDw9IDMgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiOlwiIH0pLCBfanN4KERhdGVUaW1lRGlzcGxheSwgeyB2YWx1ZTogaG91cnMsIHR5cGU6ICdIb3VycycsIGlzRGFuZ2VyOiBmYWxzZSB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCI6XCIgfSksIF9qc3goRGF0ZVRpbWVEaXNwbGF5LCB7IHZhbHVlOiBtaW51dGVzLCB0eXBlOiAnTWlucycsIGlzRGFuZ2VyOiBmYWxzZSB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCI6XCIgfSksIF9qc3goRGF0ZVRpbWVEaXNwbGF5LCB7IHZhbHVlOiBzZWNvbmRzLCB0eXBlOiAnU2Vjb25kcycsIGlzRGFuZ2VyOiBmYWxzZSB9KV0gfSkpKTtcclxufTtcclxuY29uc3QgQ291bnRkb3duVGltZXIgPSAoeyB0YXJnZXREYXRlIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kc10gPSB1c2VDb3VudGRvd24odGFyZ2V0RGF0ZSk7XHJcbiAgICBpZiAoZGF5cyArIGhvdXJzICsgbWludXRlcyArIHNlY29uZHMgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KEV4cGlyZWROb3RpY2UsIHt9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChTaG93Q291bnRlciwgeyBkYXlzOiBkYXlzLCBob3VyczogaG91cnMsIG1pbnV0ZXM6IG1pbnV0ZXMsIHNlY29uZHM6IHNlY29uZHMgfSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuY29uc3QgRGF0ZVRpbWVEaXNwbGF5ID0gKHsgdmFsdWUsIHR5cGUsIGlzRGFuZ2VyIH0pID0+IHtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogaXNEYW5nZXIgPyAnY291bnRkb3duIGRhbmdlcicgOiAnY291bnRkb3duJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogdmFsdWUgfSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IHR5cGUgfSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lRGlzcGxheTtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIFVzZXJTZXJ2aWNlLmdldFB1YmxpY0NvbnRlbnQoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJoZWFkZXJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJqdW1ib3Ryb25cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IFwiUmVsZWFzZSB2MDkyMzIwMjJcIiB9KSwgX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IFwiRmVhdHVyZXMgU3VwcG9ydGVkXCIgfSksIF9qc3hzKFwidWxcIiwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIkdob3N0YnVzdGluZyBMb2NhdGlvbiBSZXBvcnQ6IERvd25sb2FkIHJlcG9ydCBvZiBzdXNwZWN0IGxvY2F0aW9ucyBjYW52YXNzZWQgYWNyb3NzIE1pY2hpZ2FuXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIk15IFZvdGluZyBIaXN0b3J5OiBFeGFtaW5lIHlvdXIgdm90aW5nIGhpc3RvcnkgZm9yIGFub21hbGllc1wiIH0pXSB9KSwgX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IFwiS25vd24gSXNzdWVzXCIgfSksIF9qc3hzKFwidWxcIiwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIlNlYXJjaCByZXN1bHRzIHBhZ2UgbG9hZHMgYmxhbmsgc29tZXRpbWVzXCIgfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBcIklmIHNlYXJjaCBmYWlscyBvciBpdCBsb29rcyBsaWtlIHRoZSBwcm9ncmVzcyBzcGlubmVyIGlzIHN0dWNrIGluIGEgbG9vcCBpdCBpcyB2ZXJ5IGxpa2VseSB0aGF0IHlvdXIgc2Vzc2lvbiBoYXMgdGltZWQgb3V0LlwiIH0pLCBfanN4KFwibGlcIiwgeyBjaGlsZHJlbjogXCJXb3JrYXJvdW5kOiBTaWduIG91dCBieSBjbGlja2luZyBsb2cgb3V0IGF0IHRoZSB0b3AgcmlnaHQgYW5kIHNpZ24gYmFjayBpbi5cIiB9KV0gfSldIH0pKSB9KSkgfSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9pbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tCdXR0b24gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvYnV0dG9uXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTG9naW4gPSB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVVzZXJuYW1lID0gdGhpcy5vbkNoYW5nZVVzZXJuYW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhc3N3b3JkID0gdGhpcy5vbkNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVBhc3N3b3JkKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVMb2dpbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbGlkYXRlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdG4uY29udGV4dC5fZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBBdXRoU2VydmljZS5sb2dpbih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2hvbWVcIik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc01lc3NhZ2UgPSAoZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29sLW1kLTEyXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImNhcmQgY2FyZC1jb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHRoaXMuaGFuZGxlTG9naW4sIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJ1c2VybmFtZVwiIH0sIHsgY2hpbGRyZW46IFwiVXNlcm5hbWVcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJ1c2VybmFtZVwiLCB2YWx1ZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VVc2VybmFtZSwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZF0gfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJwYXNzd29yZFwiIH0sIHsgY2hpbGRyZW46IFwiUGFzc3dvcmRcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWRdIH0pXSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIsIGRpc2FibGVkOiB0aGlzLnN0YXRlLmxvYWRpbmcgfSwgeyBjaGlsZHJlbjogW3RoaXMuc3RhdGUubG9hZGluZyAmJiAoX2pzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiB9KSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiTG9naW5cIiB9KV0gfSkpIH0pKSwgdGhpcy5zdGF0ZS5tZXNzYWdlICYmIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgcm9sZTogXCJhbGVydFwiIH0sIHsgY2hpbGRyZW46IHRoaXMuc3RhdGUubWVzc2FnZSB9KSkgfSkpKSwgX2pzeChDaGVja0J1dHRvbiwgeyBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LCByZWY6IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCdG4gPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KV0gfSkpIH0pKSB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHVzZXJSZWFkeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7IHVzZXJuYW1lOiBcIlwiIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdDogXCIvaG9tZVwiIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VXNlcjogY3VycmVudFVzZXIsIHVzZXJSZWFkeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogdGhpcy5zdGF0ZS5yZWRpcmVjdCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiAodGhpcy5zdGF0ZS51c2VyUmVhZHkpID9cclxuICAgICAgICAgICAgICAgIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KFwiaGVhZGVyXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwianVtYm90cm9uXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJoM1wiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBjdXJyZW50VXNlci51c2VybmFtZSB9KSwgXCIgUHJvZmlsZVwiXSB9KSB9KSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIlRva2VuOlwiIH0pLCBcIiBcIiwgY3VycmVudFVzZXIuYWNjZXNzVG9rZW4uc3Vic3RyaW5nKDAsIDIwKSwgXCIgLi4uXCIsIFwiIFwiLCBjdXJyZW50VXNlci5hY2Nlc3NUb2tlbi5zdWJzdHIoY3VycmVudFVzZXIuYWNjZXNzVG9rZW4ubGVuZ3RoIC0gMjApXSB9KSwgX2pzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiSWQ6XCIgfSksIFwiIFwiLCBjdXJyZW50VXNlci5pZF0gfSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIkVtYWlsOlwiIH0pLCBcIiBcIiwgY3VycmVudFVzZXIuZW1haWxdIH0pLCBfanN4KFwic3Ryb25nXCIsIHsgY2hpbGRyZW46IFwiQXV0aG9yaXRpZXM6XCIgfSksIF9qc3goXCJ1bFwiLCB7IGNoaWxkcmVuOiBjdXJyZW50VXNlci5yb2xlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyLnJvbGVzLm1hcCgocm9sZSwgaW5kZXgpID0+IF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiByb2xlIH0sIGluZGV4KSkgfSldIH0pIDogbnVsbCB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9pbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tCdXR0b24gZnJvbSBcInJlYWN0LXZhbGlkYXRpb24vYnVpbGQvYnV0dG9uXCI7XHJcbmltcG9ydCB7IGlzRW1haWwgfSBmcm9tIFwidmFsaWRhdG9yXCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIVwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGVtYWlsID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCFpc0VtYWlsKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsLlwiIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHZ1c2VybmFtZSA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCAzIHx8IHZhbHVlLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIHJvbGU6IFwiYWxlcnRcIiB9LCB7IGNoaWxkcmVuOiBcIlRoZSB1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gMyBhbmQgMjAgY2hhcmFjdGVycy5cIiB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCB2cGFzc3dvcmQgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgNiB8fCB2YWx1ZS5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogXCJUaGUgcGFzc3dvcmQgbXVzdCBiZSBiZXR3ZWVuIDYgYW5kIDQwIGNoYXJhY3RlcnMuXCIgfSkpKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZWdpc3RlciA9IHRoaXMuaGFuZGxlUmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUgPSB0aGlzLm9uQ2hhbmdlVXNlcm5hbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRW1haWwgPSB0aGlzLm9uQ2hhbmdlRW1haWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQgPSB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVVzZXJuYW1lKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZUVtYWlsKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVBhc3N3b3JkKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSZWdpc3RlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzZnVsOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybS52YWxpZGF0ZUFsbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnRuLmNvbnRleHQuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgQXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy5zdGF0ZS51c2VybmFtZSwgdGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc01lc3NhZ2UgPSAoZXJyb3IucmVzcG9uc2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2wtbWQtMTJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY2FyZCBjYXJkLWNvbnRhaW5lclwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogdGhpcy5oYW5kbGVSZWdpc3RlciwgcmVmOiBjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFshdGhpcy5zdGF0ZS5zdWNjZXNzZnVsICYmIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJ1c2VybmFtZVwiIH0sIHsgY2hpbGRyZW46IFwiVXNlcm5hbWVcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgbmFtZTogXCJ1c2VybmFtZVwiLCB2YWx1ZTogdGhpcy5zdGF0ZS51c2VybmFtZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VVc2VybmFtZSwgdmFsaWRhdGlvbnM6IFtyZXF1aXJlZCwgdnVzZXJuYW1lXSB9KV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBodG1sRm9yOiBcImVtYWlsXCIgfSwgeyBjaGlsZHJlbjogXCJFbWFpbFwiIH0pKSwgX2pzeChJbnB1dCwgeyB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBuYW1lOiBcImVtYWlsXCIsIHZhbHVlOiB0aGlzLnN0YXRlLmVtYWlsLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUVtYWlsLCB2YWxpZGF0aW9uczogW3JlcXVpcmVkLCBlbWFpbF0gfSldIH0pKSwgX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCBPYmplY3QuYXNzaWduKHsgaHRtbEZvcjogXCJwYXNzd29yZFwiIH0sIHsgY2hpbGRyZW46IFwiUGFzc3dvcmRcIiB9KSksIF9qc3goSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlUGFzc3dvcmQsIHZhbGlkYXRpb25zOiBbcmVxdWlyZWQsIHZwYXNzd29yZF0gfSldIH0pKSwgX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBVcFwiIH0pKSB9KSldIH0pKSwgdGhpcy5zdGF0ZS5tZXNzYWdlICYmIChfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogdGhpcy5zdGF0ZS5zdWNjZXNzZnVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhbGVydCBhbGVydC1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogdGhpcy5zdGF0ZS5tZXNzYWdlIH0pKSB9KSkpLCBfanN4KENoZWNrQnV0dG9uLCB7IHN0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sIHJlZjogYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0J0biA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSkgfSkpIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgdXNlQ291bnRkb3duID0gKHRhcmdldERhdGUpID0+IHtcclxuICAgIGNvbnN0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSh0YXJnZXREYXRlKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBbY291bnREb3duLCBzZXRDb3VudERvd25dID0gdXNlU3RhdGUoY291bnREb3duRGF0ZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvdW50RG93bihjb3VudERvd25EYXRlIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIFtjb3VudERvd25EYXRlXSk7XHJcbiAgICByZXR1cm4gZ2V0UmV0dXJuVmFsdWVzKGNvdW50RG93bik7XHJcbn07XHJcbmNvbnN0IGdldFJldHVyblZhbHVlcyA9IChjb3VudERvd24pID0+IHtcclxuICAgIC8vIGNhbGN1bGF0ZSB0aW1lIGxlZnRcclxuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGNvdW50RG93biAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGNvdW50RG93biAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChjb3VudERvd24gJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChjb3VudERvd24gJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgIHJldHVybiBbZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdO1xyXG59O1xyXG5leHBvcnQgeyB1c2VDb3VudGRvd24gfTtcclxuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cclxuLy8gcmVnaXN0ZXIoKSBpcyBub3QgY2FsbGVkIGJ5IGRlZmF1bHQuXHJcbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xyXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2VycylcclxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxyXG4vLyBleGlzdGluZyB0YWJzIG9wZW4gb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIGNsb3NlZCwgc2luY2UgcHJldmlvdXNseSBjYWNoZWRcclxuLy8gcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxyXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBiZW5lZml0cyBvZiB0aGlzIG1vZGVsIGFuZCBpbnN0cnVjdGlvbnMgb24gaG93IHRvXHJcbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXHJcbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbih3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XHJcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxyXG4gICAgLy8gMTI3LjAuMC4wLzggYXJlIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kLykpO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoY29uZmlnKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cclxuICAgICAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xyXG4gICAgICAgICAgICAvLyBPdXIgc2VydmljZSB3b3JrZXIgd29uJ3Qgd29yayBpZiBQVUJMSUNfVVJMIGlzIG9uIGEgZGlmZmVyZW50IG9yaWdpblxyXG4gICAgICAgICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXHJcbiAgICAgICAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN3VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2VydmljZS13b3JrZXIuanNgO1xyXG4gICAgICAgICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cclxuICAgICAgICAgICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcclxuICAgICAgICAgICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG4gICAgICAgIC5yZWdpc3Rlcihzd1VybClcclxuICAgICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgdXBkYXRlZCBwcmVjYWNoZWQgY29udGVudCBoYXMgYmVlbiBmZXRjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHNlcnZpY2Ugd29ya2VyIHdpbGwgc3RpbGwgc2VydmUgdGhlIG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgdW50aWwgYWxsIGNsaWVudCB0YWJzIGFyZSBjbG9zZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBhdmFpbGFibGUgYW5kIHdpbGwgYmUgdXNlZCB3aGVuIGFsbCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJzIGZvciB0aGlzIHBhZ2UgYXJlIGNsb3NlZC4gU2VlIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBldmVyeXRoaW5nIGhhcyBiZWVuIHByZWNhY2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uU3VjY2VzcyhyZWdpc3RyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCwgY29uZmlnKSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXHJcbiAgICBmZXRjaChzd1VybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgJ1NlcnZpY2UtV29ya2VyJzogJ3NjcmlwdCcgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cclxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcclxuICAgICAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSkpIHtcclxuICAgICAgICAgICAgLy8gTm8gc2VydmljZSB3b3JrZXIgZm91bmQuIFByb2JhYmx5IGEgZGlmZmVyZW50IGFwcC4gUmVsb2FkIHRoZSBwYWdlLlxyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cclxuICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLicpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XHJcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5XHJcbiAgICAgICAgICAgIC50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoSGVhZGVyKCkge1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICBpZiAodXNlciAmJiB1c2VyLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdXNlci5hY2Nlc3NUb2tlbiB9OyAvLyBmb3IgU3ByaW5nIEJvb3QgYmFjay1lbmRcclxuICAgICAgICByZXR1cm4geyAneC1hY2Nlc3MtdG9rZW4nOiB1c2VyLmFjY2Vzc1Rva2VuIH07IC8vIGZvciBOb2RlLmpzIEV4cHJlc3MgYmFjay1lbmRcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBcIi9hcGkvYXV0aC9cIjtcclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KEFQSV9VUkwgKyBcInNpZ25pblwiLCB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KEFQSV9VUkwgKyBcInNpZ251cFwiLCB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tICcuL2F1dGgtaGVhZGVyJztcclxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL3Rlc3QvJztcclxuY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgZ2V0UHVibGljQ29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KEFQSV9VUkwgKyAnYWxsJyk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ3VzZXInLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxuICAgIGdldE1vZGVyYXRvckJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoQVBJX1VSTCArICdtb2QnLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxuICAgIGdldEFkbWluQm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJ2FkbWluJywgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTZXJ2aWNlKCk7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHsgTGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IE15Vm90aW5nSGlzdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvTXlWb3RpbmdIaXN0b3J5JztcclxuaW1wb3J0IEdob3N0YnVzdGVycyBmcm9tICcuL2NvbXBvbmVudHMvR2hvc3RidXN0ZXJzJztcclxuaW1wb3J0IEF1ZGl0TXlBZGRyZXNzIGZyb20gJy4vY29tcG9uZW50cy9BdWRpdE15QWRkcmVzcyc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvcmVnaXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc291cmNlcyc7XHJcbmltcG9ydCBFdmVudEJ1cyBmcm9tIFwiLi9jb21tb24vRXZlbnRCdXNcIjtcclxuaW1wb3J0ICcuL0FwcFNpZGViYXIuY3NzJztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgTmV3cyBmcm9tICcuL2NvbXBvbmVudHMvTmV3cyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0JztcclxuaW1wb3J0IENoYWxsZW5nZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL0NoYWxsZW5nZUxpc3QnO1xyXG4vL2ltcG9ydCBWb3RlckRhdGEgZnJvbSAnLi9jb21wb25lbnRzL1ZvdGVyRGF0YSc7XHJcbmltcG9ydCBEb3dubG9hZHNQYWdlIGZyb20gJy4vY29tcG9uZW50cy9Eb3dubG9hZHNQYWdlJztcclxuaW1wb3J0IENvdW50ZG93blRpbWVyIGZyb20gJy4vY29tcG9uZW50cy9Db3VudGRvd25UaW1lcic7XHJcbmNsYXNzIEFwcFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dNb2RlcmF0b3JCb2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dBZG1pbkJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudFVzZXI6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgICAgICBzaG93TW9kZXJhdG9yQm9hcmQ6IHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0RBVEFfQ1VSQVRPUlwiKSxcclxuICAgICAgICAgICAgICAgIHNob3dBZG1pbkJvYXJkOiB1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50QnVzLm9uKFwibG9nb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dPdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIEV2ZW50QnVzLnJlbW92ZShcImxvZ291dFwiKTtcclxuICAgIH1cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICBBdXRoU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd01vZGVyYXRvckJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0FkbWluQm9hcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIHNob3dNb2RlcmF0b3JCb2FyZCwgc2hvd0FkbWluQm9hcmQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbWljaGlnYW5NaWR0ZXJtRWxlY3Rpb25EYXRlID0gbmV3IERhdGUoJzIwMjItMTEtMDhUMDc6MDA6MDAtMDQ6MDAnKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJuYXZcIiwgT2JqZWN0LmFzc2lnbih7IGlkOiBcInNpZGViYXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJzaWRlYmFyLWhlYWRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDRcIiwgeyBjaGlsZHJlbjogXCJFbGVjdGlvbiBJbnRlZ3JpdHkgRm9yY2VcIiB9KSwgX2pzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBcIkVJRlwiIH0pXSB9KSksIF9qc3hzKFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJsaXN0LXVuc3R5bGVkIGNvbXBvbmVudHNcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNob21lU3VibWVudVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtaG9tZVwiIH0pLCBcIlxcdTAwQTAgQXVkaXRcIl0gfSkpLCBfanN4KFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBsaXN0LXVuc3R5bGVkXCIsIGlkOiBcImhvbWVTdWJtZW51XCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvbXktdm90aW5nLWhpc3RvcnlcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJWb3RpbmcgSGlzdG9yeVwiIH0pKSB9KSkgfSkpXSB9KSwgX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNkb3dubG9hZFBhZ2VTdWJtZW51XCIsIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLCBjbGFzc05hbWU6IFwiZHJvcGRvd24tdG9nZ2xlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1nbGFzc2VzXCIgfSksIFwiXFx1MDBBMCBEb3dubG9hZHNcIl0gfSkpLCBfanN4KFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBsaXN0LXVuc3R5bGVkXCIsIGlkOiBcImRvd25sb2FkUGFnZVN1Ym1lbnVcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwibGlcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiIH0sIHsgY2hpbGRyZW46IF9qc3goTGluaywgT2JqZWN0LmFzc2lnbih7IHRvOiBcIi92b3Rlci1kYXRhXCIsIGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0sIHsgY2hpbGRyZW46IFwiVm90ZXIgRGF0YVwiIH0pKSB9KSkgfSkpXSB9KSwgX2pzeHMoXCJsaVwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhXCIsIE9iamVjdC5hc3NpZ24oeyBocmVmOiBcIiNwYWdlU3VibWVudVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtZ2xhc3Nlc1wiIH0pLCBcIlxcdTAwQTAgUmVwb3J0c1wiXSB9KSksIF9qc3hzKFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBsaXN0LXVuc3R5bGVkXCIsIGlkOiBcInBhZ2VTdWJtZW51XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2dob3N0YnVzdGVycy1ieS1jb3VudHlcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJHaG9zdGJ1c3RpbmcgTG9jYXRpb25zXCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvY2hhbGxlbmdlLWxpc3RcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogXCJDaGFsbGVuZ2UgTGlzdFwiIH0pKSB9KSldIH0pKV0gfSksIF9qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiBfanN4cyhMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2NvbnRhY3RcIiwgY2xhc3NOYW1lOiBcIm5hdi1saW5rXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhcyBmYS1wYXBlci1wbGFuZVwiIH0pLCBcIlxcdTAwQTAgQ29udGFjdFwiXSB9KSkgfSldIH0pKV0gfSkpLCBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgaWQ6IFwiY29udGVudFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwibmF2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXItZmx1aWRcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNpZGViYXJDb2xsYXBzZVwiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJ0blwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtYWxpZ24tbGVmdFwiIH0pLCBfanN4KFwic3BhblwiLCB7fSldIH0pKSwgX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcImJ0biBidG4tZGFyayBkLWlubGluZS1ibG9jayBkLWxnLW5vbmUgbWwtYXV0b1wiLCB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIsIFwiYXJpYS1jb250cm9sc1wiOiBcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIiwgXCJhcmlhLWxhYmVsXCI6IFwiVG9nZ2xlIG5hdmlnYXRpb25cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtYWxpZ24tanVzdGlmeVwiIH0pIH0pKSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW1wiXFx1MDBBMFwiLCBfanN4KENvdW50ZG93blRpbWVyLCB7IHRhcmdldERhdGU6IG1pY2hpZ2FuTWlkdGVybUVsZWN0aW9uRGF0ZSB9KV0gfSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiwgaWQ6IFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKFwidWxcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJuYXYgbmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL1wiLCBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIgfSwgeyBjaGlsZHJlbjogXCJIb21lXCIgfSkpIH0pKSwgc2hvd0FkbWluQm9hcmQgJiYgKF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2FkbWluXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkFkbWluXCIgfSkpIH0pKSldIH0pKSB9KSksIGN1cnJlbnRVc2VyID8gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL3Byb2ZpbGVcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IGN1cnJlbnRVc2VyLnVzZXJuYW1lIH0pKSB9KSksIF9qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImFcIiwgT2JqZWN0LmFzc2lnbih7IGhyZWY6IFwiL2xvZ2luXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiwgb25DbGljazogdGhpcy5sb2dPdXQgfSwgeyBjaGlsZHJlbjogXCJMb2dPdXRcIiB9KSkgfSkpXSB9KSkpIDogKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJsaVwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm5hdi1pdGVtXCIgfSwgeyBjaGlsZHJlbjogX2pzeChMaW5rLCBPYmplY3QuYXNzaWduKHsgdG86IFwiL2xvZ2luXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItYnJhbmRcIiB9LCB7IGNoaWxkcmVuOiBcIkxvZ2luXCIgfSkpIH0pKSwgX2pzeChcImxpXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9LCB7IGNoaWxkcmVuOiBfanN4KExpbmssIE9iamVjdC5hc3NpZ24oeyB0bzogXCIvcmVnaXN0ZXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhci1icmFuZFwiIH0sIHsgY2hpbGRyZW46IFwiU2lnbiBVcFwiIH0pKSB9KSldIH0pKSldIH0pKSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJsaW5lXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoU3dpdGNoLCB7IGNoaWxkcmVuOiBbX2pzeChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogW1wiL1wiLCBcIi9ob21lXCJdLCBjb21wb25lbnQ6IEhvbWUgfSksIF9qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL2xvZ2luXCIsIGNvbXBvbmVudDogTG9naW4gfSksIF9qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3JlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXIgfSksIF9qc3goUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3Byb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2dob3N0YnVzdGVycy1ieS1jb3VudHlcIiwgY29tcG9uZW50OiBHaG9zdGJ1c3RlcnMgfSksIF9qc3goUm91dGUsIHsgcGF0aDogXCIvY2hhbGxlbmdlLWxpc3RcIiwgY29tcG9uZW50OiBDaGFsbGVuZ2VMaXN0IH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL215LXZvdGluZy1oaXN0b3J5XCIsIGNvbXBvbmVudDogTXlWb3RpbmdIaXN0b3J5IH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3ZvdGVyLWRhdGFcIiwgY29tcG9uZW50OiBEb3dubG9hZHNQYWdlIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL2F1ZGl0LW15LWFkZHJlc3NcIiwgY29tcG9uZW50OiBBdWRpdE15QWRkcmVzcyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9hYm91dFwiLCBjb21wb25lbnQ6IEFib3V0IH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFwiL3Jlc291cmNlc1wiLCBjb21wb25lbnQ6IFJlc291cmNlcyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9uZXdzXCIsIGNvbXBvbmVudDogTmV3cyB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBcIi9jb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdCB9KV0gfSkgfSkpXSB9KSldIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwU2lkZUJhcjtcclxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5leHBvcnQgY29uc3QgQWJvdXQgPSAoKSA9PiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIkFib3V0IHRoaXMgd2Vic2l0ZVwiIH0pIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmV4cG9ydCBjb25zdCBBdWRpdE15QWRkcmVzcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcgQ291bnRpZXMgLi4uXCIpO1xyXG4gICAgY29uc3QgW3N0cmVldE51bWJlciwgc2V0U3RyZWV0TnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0cmVldE5hbWUsIHNldFN0cmVldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbemlwLCBzZXRaaXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVhZHlmb3JTZWFyY2gsIHNldFJlYWR5Rm9yU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZU1lc3NhZ2UsIHNldFJlc3BvbnNlTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlcmVkQWRkcmVzcywgc2V0UmVnaXN0ZXJlZEFkZHJlc3NdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJlZFZvdGVycywgc2V0UmVnaXN0ZXJlZFZvdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB2b3RlckNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTdHJlZXQgQWRkcmVzcycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuc3RyZWV0X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTGFzdCBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5sYXN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWlkZGxlIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1pZGRsZV9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnWWVhciBvZiBCaXJ0aCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cueWVhcl9vZl9iaXJ0aCxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNYWlsaW5nIEFkZHJlc3MgTGluZSAxJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5tYWlsaW5nX2FkZHJlc3NfbGluZV9vbmUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWFpbGluZyBBZGRyZXNzIExpbmUgMicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWFpbGluZ19hZGRyZXNzX2xpbmVfdHdvLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ01haWxpbmcgQWRkcmVzcyBMaW5lIDMnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm1haWxpbmdfYWRkcmVzc19saW5lX3RocmVlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1FWRiBBZGRyZXNzIExpbmUgMSAtIDEwIENoYXJzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5hZGRyZXNzX2xpbmVfMV9xdmZfMTAsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICBdLCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL2NvdW50aWVzJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGNvdW50aWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvdW50aWVzKGNvdW50aWVzKTtcclxuICAgICAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihjb3VudHlTZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0Q291bnR5TmFtZShjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnRpbmcgdGhlIHBhZ2UgZnJvbSByZWxvYWRpbmdcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgbGV0IGFkZHJlc3NMaW5lMSA9ICgoc3RyZWV0TnVtYmVyID09PSBudWxsID8gXCJcIiA6IHN0cmVldE51bWJlci50cmltKCkpICsgKHN0cmVldE5hbWUgPT09IG51bGwgPyBcIlwiIDogc3RyZWV0TmFtZS50cmltKCkpKS5yZXBsYWNlKCcgJywgJycpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NGaXJzdDhBbmRaaXAgPSAoYWRkcmVzc0xpbmUxLnNsaWNlKDAsIDgpICsgKHppcCA9PT0gbnVsbCA/IFwiXCIgOiB6aXAudHJpbSgpKSkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2F1ZGl0LXlvdXItYWRkcmVzcy8ke2NvdW50eU5hbWV9LyR7YWRkcmVzc0ZpcnN0OEFuZFppcH1gKTtcclxuICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBzZXRDb3VudChyZXNwLmRhdGEuY291bnQpO1xyXG4gICAgICAgICAgICBzZXRSZWdpc3RlcmVkQWRkcmVzcyhyZXNwLmRhdGEucmVnaXN0ZXJlZEFkZHJlc3MpO1xyXG4gICAgICAgICAgICBzZXRSZWdpc3RlcmVkVm90ZXJzKHJlc3AuZGF0YS5yZWdpc3RlcmVkVm90ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIkVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChGb3JtLCBPYmplY3QuYXNzaWduKHsgb25TdWJtaXQ6IHN1Ym1pdEZvcm0gfSwgeyBjaGlsZHJlbjogX2pzeHMoRm9ybUdyb3VwLCBPYmplY3QuYXNzaWduKHsgcm9sZTogXCJmb3JtXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCB2YWx1ZTogY291bnR5TmFtZSwgcmVxdWlyZWQ6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiU3RyZWV0IE51bWJlclwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyB2YWx1ZTogc3RyZWV0TnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRTdHJlZXROdW1iZXIoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgU3RyZWV0IE51bWJlclwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlN0cmVldCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiBzdHJlZXROYW1lLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRTdHJlZXROYW1lKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFN0cmVldCBOYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWmlwXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHZhbHVlOiB6aXAsIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0WmlwKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIFppcFwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIsIGRpc2FibGVkOiAhcmVhZHlmb3JTZWFyY2ggfSwgeyBjaGlsZHJlbjogXCJBdWRpdCBBZGRyZXNzXCIgfSkpIH0pXSB9KSkgfSkpLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbaXNMb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJycpID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsICFpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnU3VjY2VzcycpID8gX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoRm9ybS5UZXh0LCB7IGNoaWxkcmVuOiBbY291bnQsIFwiIHJlZ2lzdHJhdGlvbnMgZm91bmQuXCJdIH0pLCBfanN4KERhdGFUYWJsZSwgeyBjb2x1bW5zOiB2b3RlckNvbHVtbnMsIGRhdGE6IHJlZ2lzdGVyZWRWb3RlcnMgfSldIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZXNwb25zZU1lc3NhZ2UgPT09ICdFcnJvcicpID8gXCJFcnJvciBmZXRjaGluZyByZWNvcmRzLiBQbGVhc2UgcmV0cnkuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIl0gfSldIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGl0TXlBZGRyZXNzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ3JlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDU1ZMaW5rIH0gZnJvbSAncmVhY3QtY3N2JztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC1oZWFkZXJcIjtcclxuaW1wb3J0IENvdW50eUluZm9ybWF0aW9uIGZyb20gXCIuL0NvdW50eUluZm9ybWF0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjb3VudGllcywgc2V0Q291bnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50eU5hbWUsIHNldENvdW50eU5hbWVdID0gdXNlU3RhdGUoXCJMb2FkaW5nIENvdW50aWVzIC4uLlwiKTtcclxuICAgIGNvbnN0IFtpc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZywgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbnMsIHNldEp1cmlzZGljdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2p1cmlzZGljdGlvbk5hbWUsIHNldEp1cmlzZGljdGlvbk5hbWVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBKdXJpc2RpY3Rpb24gLS0tIFwiKTtcclxuICAgIGNvbnN0IFtpc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nLCBzZXRJc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcmVjaW5jdHMsIHNldFByZWNpbmN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJlY2luY3ROYW1lLCBzZXRQcmVjaW5jdE5hbWVdID0gdXNlU3RhdGUoXCIgLS0tIFNlbGVjdCBQcmVjaW5jdCAtLS0gXCIpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU2VhcmNoLCBzZXRSZWFkeUZvclNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlYWJsZVZvdGVycywgc2V0Q2hhbGxlbmdlYWJsZVZvdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5U3VtbWFyeUluZm8sIHNldENvdW50eVN1bW1hcnlJbmZvXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY291bnR5TWV0YWRhdGFJbmZvLCBzZXRDb3VudHlNZXRhZGF0YUluZm9dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtoaWRlRG93bmxvYWRCdXR0b24sIHNldEhpZGVEb3dubG9hZEJ1dHRvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGFsbGVuZ2UgQ29kZShzKScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY2hhbGxlbmdlX2NvZGVzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGdWxsIFN0cmVldCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5mdWxsX3N0cmVldF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGdWxsIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZ1bGxfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdZZWFyIG9mIEJpcnRoJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy55ZWFyX29mX2JpcnRoLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ZvdGVyIElkZW50aWZpY2F0aW9uIE51bWJlcicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudm90ZXJfaWRlbnRpZmljYXRpb25fbnVtYmVyLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lm5hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzI1MHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVHlwZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudHlwZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdKdXJpc2RpY3Rpb24gTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuanVyaXNkaWN0aW9uX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUHJlY2luY3QnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnByZWNpbmN0LFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNaWRkbGUgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubWlkZGxlX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCdcclxuICAgICAgICB9LFxyXG4gICAgXSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q291bnRpZXMoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGNvdW50eVNlbGVjdGVkKSB7XHJcbiAgICAgICAgc2V0UHJlY2luY3ROYW1lKFwiIC0tLSBTZWxlY3QgUHJlY2luY3QgLS0tIFwiKTtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoJycpO1xyXG4gICAgICAgIHNldENvdW50eVN1bW1hcnlJbmZvKG51bGwpO1xyXG4gICAgICAgIHNldENvdW50eU1ldGFkYXRhSW5mbyhudWxsKTtcclxuICAgICAgICBpZiAoY291bnR5U2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICAgICAgZmV0Y2hKdXJpc2RpY3Rpb25zKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmZXRjaEp1cmlzZGljdGlvbnMoY291bnR5TmFtZSkge1xyXG4gICAgICAgIHNldElzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2p1cmlzZGljdGlvbnMvJHtjb3VudHlOYW1lfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChqdXJpc2RpY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEp1cmlzZGljdGlvbnMoanVyaXNkaWN0aW9ucyk7XHJcbiAgICAgICAgICAgIHNldElzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVKdXJpc2RpY3Rpb25TZWxlY3Rpb24oanVyaXNkaWN0aW9uU2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAoanVyaXNkaWN0aW9uU2VsZWN0ZWQgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEp1cmlzZGljdGlvbk5hbWUoanVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBmZXRjaFByZWNpbmN0cyhqdXJpc2RpY3Rpb25TZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmV0Y2hQcmVjaW5jdHMoanVyaXNkaWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHNldElzUHJlY2luY3REcm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvcHJlY2luY3RzLyR7Y291bnR5TmFtZX0vJHtqdXJpc2RpY3Rpb25OYW1lfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChwcmVjaW5jdHMpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJlY2luY3RzKHByZWNpbmN0cyk7XHJcbiAgICAgICAgICAgIHNldElzUHJlY2luY3REcm9wZG93bkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRQcmVjaW5jdE5hbWUoXCIwXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVByZWNpbmN0U2VsZWN0aW9uKHByZWNpbmN0U2VsZWN0ZWQpIHtcclxuICAgICAgICBpZiAocHJlY2luY3RTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFByZWNpbmN0TmFtZShwcmVjaW5jdFNlbGVjdGVkKTtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTZWFyY2godHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgRXhwYW5kZWRDb21wb25lbnQgPSAoKSA9PiAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwicHJlXCIsIHsgY2hpbGRyZW46IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpIH0pIH0pKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgcGFnZSBmcm9tIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlwiKTtcclxuICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgbGV0IGNoYWxsZW5nZV9saXN0X3VybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2NoYWxsZW5nZS1saXN0LyR7Y291bnR5TmFtZX0vJHtqdXJpc2RpY3Rpb25OYW1lfS9gO1xyXG4gICAgICAgIGlmIChwcmVjaW5jdE5hbWUgIT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgY2hhbGxlbmdlX2xpc3RfdXJsID0gY2hhbGxlbmdlX2xpc3RfdXJsICsgYCR7cHJlY2luY3ROYW1lfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbmRwb2ludHMgPSBbXHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2NvdW50eS1zdW1tYXJ5LyR7Y291bnR5TmFtZX1gLFxyXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS9jb3VudHktbWV0YWRhdGEvJHtjb3VudHlOYW1lfWAsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZV9saXN0X3VybFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgY291bnR5U3VtbWFyeVByb21pc2UgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChlbmRwb2ludHNbMF0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnR5U3VtbWFyeUluZm8ocmVzcC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3Auc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5yZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb3VudHlNZXRhZGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChlbmRwb2ludHNbMV0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnR5TWV0YWRhdGFJbmZvKHJlc3AuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzIHx8IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UucmVzcG9uc2VNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlTGlzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChlbmRwb2ludHNbMl0sIHsgaGVhZGVyczogYXV0aEhlYWRlcigpIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbGxlbmdlYWJsZVZvdGVycyhyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3Auc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5yZXNwb25zZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhbGxQcm9taXNlcyA9IFByb21pc2UuYWxsU2V0dGxlZChbY291bnR5U3VtbWFyeVByb21pc2UsIGNvdW50eU1ldGFkYXRhUHJvbWlzZSwgY2hhbGxlbmdlTGlzdFByb21pc2VdKTtcclxuICAgICAgICBhbGxQcm9taXNlcy50aGVuKChhbGxSZXN1bHRzKSA9PiBhbGxSZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogcmVkaXJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm1Hcm91cCwgT2JqZWN0LmFzc2lnbih7IHJvbGU6IFwiZm9ybVwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhSb3csIHsgY2hpbGRyZW46IFtfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHkgKHJlcXVpcmVkKVwiLCBfanN4cyhGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IHJlcXVpcmVkOiB0cnVlLCBkaXNhYmxlZDogaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBjb3VudHlOYW1lLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIiB9KSksIGNvdW50aWVzLm1hcCgoY291bnR5KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGNvdW50eS5jb3VudHlfbmFtZSB9LCB7IGNoaWxkcmVuOiBjb3VudHkuY291bnR5X25hbWUgfSksIGNvdW50eS5jb3VudHlfbmFtZSkpKV0gfSkpXSB9KV0gfSksIF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkp1cmlzZGljdGlvbiAocmVxdWlyZWQpXCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgcmVxdWlyZWQ6IHRydWUsIGRpc2FibGVkOiBpc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZywgdmFsdWU6IGp1cmlzZGljdGlvbk5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVKdXJpc2RpY3Rpb25TZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBKdXJpc2RpY3Rpb24gLS0tIFwiIH0pKSwganVyaXNkaWN0aW9ucy5tYXAoKGp1cmlzZGljdGlvbikgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUgfSwgeyBjaGlsZHJlbjoganVyaXNkaWN0aW9uLmp1cmlzZGljdGlvbl9uYW1lIH0pLCBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUpKSldIH0pKV0gfSldIH0pLCBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc1ByZWNpbmN0RHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLCBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIlByZWNpbmN0XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGlzUHJlY2luY3REcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBwcmVjaW5jdE5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVQcmVjaW5jdFNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IFByZWNpbmN0IC0tLSBcIiB9KSksIHByZWNpbmN0cy5tYXAoKHByZWNpbmN0KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IHByZWNpbmN0LnByZWNpbmN0IH0sIHsgY2hpbGRyZW46IHByZWNpbmN0LnByZWNpbmN0IH0pLCBwcmVjaW5jdC5wcmVjaW5jdCkpKV0gfSkpXSB9KV0gfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBzaXplOiAnbGcnLCB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuXCIsIGRpc2FibGVkOiAhcmVhZHlmb3JTZWFyY2ggfSwgeyBjaGlsZHJlbjogXCJHZXQgUHJlY2luY3QgQ2hhbGxlbmdlIExpc3RcIiB9KSkgfSldIH0pKSB9KSksIF9qc3goXCJiclwiLCB7fSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJycpID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiwgIWlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnU3VjY2VzcycpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KENvdW50eUluZm9ybWF0aW9uLCB7IGNvdW50eVN1bW1hcnk6IGNvdW50eVN1bW1hcnlJbmZvLCBjb3VudHlNZXRhZGF0YTogY291bnR5TWV0YWRhdGFJbmZvIH0pLCBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIkxhdGVzdCBHaG9zdGJ1c3RpbmcgdXBkYXRlcyBmcm9tIDIwMjItMDktMTYgaGF2ZSBiZWVuIGFwcGxpZWQuXCIgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IF9qc3goQ1NWTGluaywgT2JqZWN0LmFzc2lnbih7IGhpZGRlbjogaGlkZURvd25sb2FkQnV0dG9uLCBkYXRhOiBjaGFsbGVuZ2VhYmxlVm90ZXJzLCBmaWxlbmFtZTogY291bnR5TmFtZSArICctJyArIGp1cmlzZGljdGlvbk5hbWUgKyAnLScgKyBwcmVjaW5jdE5hbWUgKyAnLWNoYWxsZW5nZS1saXN0LmNzdicgfSwgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYnV0dG9uXCIsIGNvbG9yOiBcInJlZFwiLCBzaXplOiAnbGcnIH0sIHsgY2hpbGRyZW46IFwiRG93bmxvYWQgcmVzdWx0c1wiIH0pKSB9KSkgfSksIF9qc3goRGF0YVRhYmxlLCB7IGV4cGFuZGFibGVSb3dzOiB0cnVlLCBleHBhbmRhYmxlUm93c0NvbXBvbmVudDogRXhwYW5kZWRDb21wb25lbnQoKSwgZXhwYW5kT25Sb3dDbGlja2VkOiB0cnVlLCBjb2x1bW5zOiBjb2x1bW5zLCBkYXRhOiBjaGFsbGVuZ2VhYmxlVm90ZXJzLCBoaWdobGlnaHRPbkhvdmVyOiB0cnVlLCBwYWdpbmF0aW9uOiB0cnVlLCBwYWdpbmF0aW9uUGVyUGFnZTogMTAsIHBhZ2luYXRpb25Ub3RhbFJvd3M6IGNoYWxsZW5nZWFibGVWb3RlcnMubGVuZ3RoLCByZXNwb25zaXZlOiB0cnVlLCBzdHJpcGVkOiB0cnVlIH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlc3BvbnNlTWVzc2FnZSA9PT0gJ0Vycm9yJykgPyBcIkVycm9yIGZldGNoaW5nIHJlY29yZHMuIFBsZWFzZSByZXRyeS5cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIl0gfSldIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYWxsZW5nZUxpc3Q7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuZXhwb3J0IGNvbnN0IENvbnRhY3QgPSAoKSA9PiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiQ29udGFjdCBVc1wiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiLi4uIGlmIHlvdSdkIGxpa2UgdG8gaGVscCBzZXQgdGhlIHRydXRoIGZyZWVcIiB9KV0gfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgeyBqc3hzIGFzIF9qc3hzLCBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgXCIuL2NhcmQuY3NzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY29uc3QgQ291bnR5SW5mb3JtYXRpb24gPSAoeyBjb3VudHlTdW1tYXJ5LCBjb3VudHlNZXRhZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3QsIHNldFJlZGlyZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgICAgc2V0VXNlclJlYWR5KHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChDYXJkLCBPYmplY3QuYXNzaWduKHsgYmc6IFwibGlnaHQtYmx1ZVwiIH0sIHsgY2hpbGRyZW46IF9qc3hzKENhcmQuQm9keSwgT2JqZWN0LmFzc2lnbih7IHN0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoQ2FyZC5UaXRsZSwgeyBjaGlsZHJlbjogW2NvdW50eVN1bW1hcnkuY291bnR5X25hbWUsIFwiIENvdW50eSBTdW1tYXJ5IHBlciBTZXB0ZW1iZXIgMjAyMiBRVkZcIl0gfSksIF9qc3goQ2FyZC5UZXh0LCBPYmplY3QuYXNzaWduKHsgc3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9IH0sIHsgY2hpbGRyZW46IF9qc3goVGFibGUsIE9iamVjdC5hc3NpZ24oeyBzdHJpcGVkOiB0cnVlLCBib3JkZXJlZDogdHJ1ZSwgaG92ZXI6IHRydWUgfSwgeyBjaGlsZHJlbjogX2pzeChcInRib2R5XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwidGRcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwidHJcIiwgeyBjaGlsZHJlbjogW19qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBcIlRvdGFsIFJlZ2lzdGVyZWQgVm90ZXIgQ291bnRcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkudG90YWxfcmVnaXN0ZXJlZF92b3Rlcl9jb3VudCB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiQWN0aXZlIFJlZ2lzdGVyZWQgVm90ZXIgQ291bnQgKEEpXCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBjb3VudHlTdW1tYXJ5LmFjdGl2ZV9yZWdpc3RlcmVkX3ZvdGVyX2NvdW50IH0pXSB9KSwgX2pzeHMoXCJ0clwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiQ2hhbGxlbmdlZCBWb3RlciBDb3VudCAoQ0gpXCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBjb3VudHlTdW1tYXJ5LmNoYWxsZW5nZWRfdm90ZXJfY291bnQgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBcIlZlcmlmeSBWb3RlciBDb3VudCAoVilcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkudmVyaWZ5X3ZvdGVyX2NvdW50IH0pXSB9KSwgX2pzeHMoXCJ0clwiLCB7IGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IFwiQ2FuY2VsZWQgVm90ZXIgQ291bnQgKEMpXCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNoaWxkcmVuOiBjb3VudHlTdW1tYXJ5LmNhbmNlbGVkX3ZvdGVyX2NvdW50IH0pLCBfanN4KFwidGRcIiwgeyBjaGlsZHJlbjogXCJSZWplY3RlZCBWb3RlciBDb3VudCAoUilcIiB9KSwgX2pzeChcInRkXCIsIHsgY2hpbGRyZW46IGNvdW50eVN1bW1hcnkucmVqZWN0ZWRfdm90ZXJfY291bnQgfSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDIgfSwgeyBjaGlsZHJlbjogXCJWb3RpbmcgU3lzdGVtXCIgfSkpLCBfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDIgfSwgeyBjaGlsZHJlbjogY291bnR5TWV0YWRhdGEudm90aW5nX3N5c3RlbSB9KSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgT2JqZWN0LmFzc2lnbih7IGNvbFNwYW46IDIgfSwgeyBjaGlsZHJlbjogXCJLZXNoZWwgSGVhdCBNYXAgQ29sb3JcIiB9KSksIF9qc3goXCJ0ZFwiLCBPYmplY3QuYXNzaWduKHsgY29sU3BhbjogMiwgY29sb3I6IGNvdW50eU1ldGFkYXRhLmtlc2hlbF9oZWF0bWFwX2NvbG9yIH0sIHsgY2hpbGRyZW46IGNvdW50eU1ldGFkYXRhLmtlc2hlbF9oZWF0bWFwX2NvbG9yIH0pKV0gfSldIH0pIH0pIH0pKSB9KSksIF9qc3hzKENhcmQuTGluaywgT2JqZWN0LmFzc2lnbih7IGNvbG9yOiAnYmx1ZScsIGhyZWY6IGNvdW50eU1ldGFkYXRhLmNlbnN1c191cmwsIHRhcmdldDogXCJfYmxhbmtcIiB9LCB7IGNoaWxkcmVuOiBbXCJDZW5zdXMgU291cmNlOiBcIiwgY291bnR5TWV0YWRhdGEuY2Vuc3VzX3VybF0gfSkpXSB9KSkgfSkpIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ291bnR5SW5mb3JtYXRpb247XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBEb3dubG9hZFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL0Rvd25sb2FkU2VydmljZVwiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuZXhwb3J0IGNvbnN0IERvd25sb2Fkc1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsRG93bmxvYWRSZXF1ZXN0U3RhdGUgPSB7XHJcbiAgICAgICAgcXZmOiAnJyxcclxuICAgICAgICBjb3VudHlfbmFtZTogJycsXHJcbiAgICAgICAganVyaXNkaWN0aW9uX25hbWU6ICcnLFxyXG4gICAgICAgIGNyZWF0ZWRfYXQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RlZF9ieTogJycsXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICByZXF1ZXN0X2lkOiBudWxsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbaXNRdmZEYXRlTG9hZGluZywgc2V0SXNRdmZEYXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTZWFyY2hMb2FkaW5nLCBzZXRJc1NlYXJjaExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3F2ZkRhdGVzLCBzZXRRdmZEYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcXZmRGF0ZSwgc2V0UXZmRGF0ZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IFFWRiBEYXRlIC0tLSBcIik7XHJcbiAgICBjb25zdCBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NvdW50aWVzLCBzZXRDb3VudGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnR5TmFtZSwgc2V0Q291bnR5TmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IENvdW50eSAtLS0gXCIpO1xyXG4gICAgY29uc3QgW2lzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCBzZXRJc0p1cmlzZGljdGlvbkRyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbanVyaXNkaWN0aW9ucywgc2V0SnVyaXNkaWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbanVyaXNkaWN0aW9uTmFtZSwgc2V0SnVyaXNkaWN0aW9uTmFtZV0gPSB1c2VTdGF0ZShcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIpO1xyXG4gICAgY29uc3QgW2Rvd25sb2FkUmVxdWVzdCwgc2V0RG93bmxvYWRSZXF1ZXN0XSA9IHVzZVN0YXRlKGluaXRpYWxEb3dubG9hZFJlcXVlc3RTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RJZCwgc2V0UmVxdWVzdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3JlYWR5Zm9yU3VibWl0LCBzZXRSZWFkeUZvclN1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZG93bmxvYWRSZXF1ZXN0cywgc2V0RG93bmxvYWRSZXF1ZXN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUVZGJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5xdmYsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0NvdW50eSBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5jb3VudHlfbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVyaXNkaWN0aW9uIE5hbWUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93Lmp1cmlzZGljdGlvbl9uYW1lLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaWxlIEdlbmVyYXRpb24gU3RhdHVzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgXSwgW10pO1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgc2V0RG93bmxvYWRSZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZG93bmxvYWRSZXF1ZXN0KSwgeyBbbmFtZV06IHZhbHVlIH0pKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgc2V0RG93bmxvYWRSZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZG93bmxvYWRSZXF1ZXN0KSwgeyBbbmFtZV06IHZhbHVlIH0pKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVF2ZlNlbGVjdGlvbihxdmZTZWxlY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXZmU2VsZWN0ZWQ6IFwiICsgcXZmU2VsZWN0ZWQpO1xyXG4gICAgICAgIGlmIChxdmZTZWxlY3RlZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgcXZmIHNlbGVjdGVkOiBcIiArIHF2ZlNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFF2ZkRhdGUocXZmU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkb3dubG9hZFJlcXVlc3QpLCB7IFwicXZmXCI6IHF2ZlNlbGVjdGVkIH0pKTtcclxuICAgICAgICAgICAgLy9mZXRjaENvdW50aWVzKHF2ZlNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihjb3VudHlTZWxlY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bnR5U2VsZWN0ZWQ6IFwiICsgY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgY291bnR5IHNlbGVjdGVkOiBcIiArIGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICAgICAgc2V0Q291bnR5TmFtZShjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHNldFJlYWR5Rm9yU3VibWl0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50eU5hbWUoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkb3dubG9hZFJlcXVlc3QpLCB7IFwiY291bnR5X25hbWVcIjogY291bnR5U2VsZWN0ZWQgfSkpO1xyXG4gICAgICAgICAgICBmZXRjaEp1cmlzZGljdGlvbnMoY291bnR5U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoSnVyaXNkaWN0aW9ucyhjb3VudHlOYW1lKSB7XHJcbiAgICAgICAgc2V0SXNKdXJpc2RpY3Rpb25Ecm9wZG93bkxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGp1cmlzZGljdGlvbiBhcGlcIik7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvanVyaXNkaWN0aW9ucy8nICsgY291bnR5TmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIGZldGNoKHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGp1cmlzZGljdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgc2V0SnVyaXNkaWN0aW9ucyhqdXJpc2RpY3Rpb25zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldElzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlSnVyaXNkaWN0aW9uU2VsZWN0aW9uKGp1cmlzZGljdGlvblNlbGVjdGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJqdXJpc2RpY3Rpb25TZWxlY3RlZDogXCIgKyBqdXJpc2RpY3Rpb25TZWxlY3RlZCk7XHJcbiAgICAgICAgaWYgKGp1cmlzZGljdGlvblNlbGVjdGVkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBqdXJpc2RpY3Rpb24gc2VsZWN0ZWQ6IFwiICsganVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVhZHlGb3JTdWJtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEp1cmlzZGljdGlvbk5hbWUoanVyaXNkaWN0aW9uU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkb3dubG9hZFJlcXVlc3QpLCB7IFwianVyaXNkaWN0aW9uX25hbWVcIjoganVyaXNkaWN0aW9uU2VsZWN0ZWQgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJldHJpZXZlRG93bmxvYWRSZXF1ZXN0cyA9ICgpID0+IHtcclxuICAgICAgICBEb3dubG9hZFNlcnZpY2UuZ2V0RG93bmxvYWRSZXF1ZXN0cygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHNldFVzZXJSZWFkeSh0cnVlKTtcclxuICAgICAgICBsZXQgdW5tb3VudGVkID0gZmFsc2U7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvcXZmZGF0ZXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocXZmRGF0ZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0UXZmRGF0ZXMocXZmRGF0ZXMpO1xyXG4gICAgICAgICAgICBzZXRRdmZEYXRlKHF2ZkRhdGVzWzBdLnRhYmxlX25hbWUpO1xyXG4gICAgICAgICAgICBzZXRJc1F2ZkRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIERvd25sb2FkU2VydmljZS5nZXREb3dubG9hZFJlcXVlc3RzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXREb3dubG9hZFJlcXVlc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyB8fCBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q291bnRpZXMoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gc2F2ZURvd25sb2FkUmVxdWVzdCgpIHtcclxuICAgICAgICBEb3dubG9hZFNlcnZpY2UuY3JlYXRlRG93bmxvYWRSZXF1ZXN0KGRvd25sb2FkUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERvd25sb2FkUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBxdmY6IHJlc3BvbnNlLmRhdGEucXZmLFxyXG4gICAgICAgICAgICAgICAgY291bnR5X25hbWU6IHJlc3BvbnNlLmRhdGEuY291bnR5X25hbWUsXHJcbiAgICAgICAgICAgICAgICBqdXJpc2RpY3Rpb25fbmFtZTogcmVzcG9uc2UuZGF0YS5qdXJpc2RpY3Rpb25fbmFtZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRfYnk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0X2lkOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0SWQocmVzcG9uc2UuZGF0YS5yZXF1ZXN0X2lkKTtcclxuICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgRG93bmxvYWRTZXJ2aWNlLmdldERvd25sb2FkUmVxdWVzdHMoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldERvd25sb2FkUmVxdWVzdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzIHx8IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURvd25sb2FkKGRhdGEpIHtcclxuICAgICAgICBEb3dubG9hZFNlcnZpY2UuZG93bmxvYWRGaWxlKGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpXHJcbiAgICAgICAgICAgIC50aGVuKGJsb2IgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY24gPSBkYXRhLmNvdW50eV9uYW1lLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xyXG4gICAgICAgICAgICBsZXQgam4gPSBkYXRhLmp1cmlzZGljdGlvbl9uYW1lLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xyXG4gICAgICAgICAgICBzYXZlQXMoYmxvYiwgZGF0YS5yZXF1ZXN0X2lkICsgXCJfXCIgKyBkYXRhLnF2ZiArIFwiX1wiICsgY24gKyBcIl9cIiArIGpuICsgXCIuY3N2XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzIHx8IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgRXhwYW5kZWRDb21wb25lbnQgPSAoKSA9PiAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdET1dOTE9BRCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwicHJlXCIsIHsgY2hpbGRyZW46IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpIH0pLCBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IGhhbmRsZURvd25sb2FkKGRhdGEpLCBjbGFzc05hbWU6IFwiYnRuXCIgfSwgeyBjaGlsZHJlbjogXCJEb3dubG9hZFwiIH0pKV0gfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcInByZVwiLCB7IGNoaWxkcmVuOiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBuZXdEb3dubG9hZFJlcXVlc3QoKSB7XHJcbiAgICAgICAgc2V0RG93bmxvYWRSZXF1ZXN0KGluaXRpYWxEb3dubG9hZFJlcXVlc3RTdGF0ZSk7XHJcbiAgICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChyZWRpcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBfanN4KFJlZGlyZWN0LCB7IHRvOiByZWRpcmVjdCB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKFJvdywgeyBjaGlsZHJlbjogW19qc3hzKENvbCwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBcIlFWRiBEYXRlXCIgfSksIF9qc3goXCJzZWxlY3RcIiwgT2JqZWN0LmFzc2lnbih7IHJlcXVpcmVkOiB0cnVlLCBpZDogXCJxdmZcIiwgbmFtZTogXCJxdmZcIiwgZGlzYWJsZWQ6IGlzUXZmRGF0ZUxvYWRpbmcsIHZhbHVlOiBxdmZEYXRlLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlUXZmU2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogcXZmRGF0ZXMubWFwKChxdmYpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogcXZmLnRhYmxlX25hbWUgfSwgeyBjaGlsZHJlbjogcXZmLnRhYmxlX25hbWUuc3BsaXQoJ18nKVsxXSB9KSwgcXZmLnRhYmxlX25hbWUpKSkgfSkpXSB9KSwgX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHlcIiwgX2pzeHMoXCJzZWxlY3RcIiwgT2JqZWN0LmFzc2lnbih7IHJlcXVpcmVkOiB0cnVlLCBpZDogXCJjb3VudHlOYW1lXCIsIG5hbWU6IFwiY291bnR5TmFtZVwiLCBkaXNhYmxlZDogaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBjb3VudHlOYW1lLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIiB9KSksIGNvdW50aWVzLm1hcCgoY291bnR5KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGNvdW50eS5jb3VudHlfbmFtZSB9LCB7IGNoaWxkcmVuOiBjb3VudHkuY291bnR5X25hbWUgfSksIGNvdW50eS5jb3VudHlfbmFtZSkpKV0gfSkpXSB9KV0gfSksIF9qc3hzKENvbCwgeyBjaGlsZHJlbjogW2lzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiSnVyaXNkaWN0aW9uXCIsIF9qc3hzKFwic2VsZWN0XCIsIE9iamVjdC5hc3NpZ24oeyByZXF1aXJlZDogdHJ1ZSwgaWQ6IFwianVyaXNkaWN0aW9uTmFtZVwiLCBuYW1lOiBcImp1cmlzZGljdGlvbk5hbWVcIiwgZGlzYWJsZWQ6IGlzSnVyaXNkaWN0aW9uRHJvcGRvd25Mb2FkaW5nLCB2YWx1ZToganVyaXNkaWN0aW9uTmFtZSwgb25DaGFuZ2U6IChlKSA9PiB2YWxpZGF0ZUp1cmlzZGljdGlvblNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpIH0sIHsgY2hpbGRyZW46IFtfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogXCJcIiB9LCB7IGNoaWxkcmVuOiBcIiAtLS0gU2VsZWN0IEp1cmlzZGljdGlvbiAtLS0gXCIgfSkpLCBqdXJpc2RpY3Rpb25zLm1hcCgoanVyaXNkaWN0aW9uKSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSB9LCB7IGNoaWxkcmVuOiBqdXJpc2RpY3Rpb24uanVyaXNkaWN0aW9uX25hbWUgfSksIGp1cmlzZGljdGlvbi5qdXJpc2RpY3Rpb25fbmFtZSkpKV0gfSkpXSB9KV0gfSldIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChDb2wsIHsgY2hpbGRyZW46IFwiXFx1MDBBMFwiIH0pIH0pLCBfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogc2F2ZURvd25sb2FkUmVxdWVzdCwgZGlzYWJsZWQ6ICFyZWFkeWZvclN1Ym1pdCwgY2xhc3NOYW1lOiBcImJ0blwiIH0sIHsgY2hpbGRyZW46IFwiR2VuZXJhdGUgRmlsZVwiIH0pKSB9KV0gfSksIF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImJyXCIsIHt9KSwgX2pzeChcImg0XCIsIHsgY2hpbGRyZW46IFwiRG93bmxvYWRzIFJlcXVlc3RlZFwiIH0pLCBfanN4KERhdGFUYWJsZSwgeyBleHBhbmRhYmxlUm93czogdHJ1ZSwgZXhwYW5kYWJsZVJvd3NDb21wb25lbnQ6IEV4cGFuZGVkQ29tcG9uZW50KCksIGV4cGFuZE9uUm93Q2xpY2tlZDogdHJ1ZSwgY29sdW1uczogY29sdW1ucywgZGF0YTogZG93bmxvYWRSZXF1ZXN0cywgaGlnaGxpZ2h0T25Ib3ZlcjogdHJ1ZSwgcGFnaW5hdGlvbjogdHJ1ZSwgcGFnaW5hdGlvblBlclBhZ2U6IDEwLCBwYWdpbmF0aW9uVG90YWxSb3dzOiBkb3dubG9hZFJlcXVlc3RzLmxlbmd0aCwgcmVzcG9uc2l2ZTogdHJ1ZSwgc3RyaXBlZDogdHJ1ZSB9KV0gfSkgfSldIH0pKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERvd25sb2Fkc1BhZ2U7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tICdyZWFjdC1jc3YnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLWhlYWRlclwiO1xyXG5leHBvcnQgY29uc3QgR2hvc3RidXN0ZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQ291bnR5RHJvcGRvd25Mb2FkaW5nLCBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtjb3VudGllcywgc2V0Q291bnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NvdW50eU5hbWUsIHNldENvdW50eU5hbWVdID0gdXNlU3RhdGUoXCJMb2FkaW5nIENvdW50aWVzIC4uLlwiKTtcclxuICAgIGNvbnN0IFtyZWFkeWZvclNlYXJjaCwgc2V0UmVhZHlGb3JTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlTWVzc2FnZSwgc2V0UmVzcG9uc2VNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtoaWRlRG93bmxvYWRCdXR0b24sIHNldEhpZGVEb3dubG9hZEJ1dHRvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGdWxsIFN0cmVldCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5mdWxsX3N0cmVldF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1JlZ2lzdHJhdGlvbiBDb3VudCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cucmVnaXN0cmF0aW9uX2NvdW50LFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0JlZHMvQXB0L0xvdHMgUXR5JyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5iZWRzX2FwdHNfbG90c19xdHksXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cubmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUeXBlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy50eXBlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0p1cmlzZGljdGlvbiBOYW1lJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5qdXJpc2RpY3Rpb25fbmFtZSxcclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjAwcHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdQcmVjaW5jdCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cucHJlY2luY3QsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDogJzE1MHB4J1xyXG4gICAgICAgIH1cclxuICAgIF0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBBdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgICAgc2V0UmVkaXJlY3QoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICBzZXRVc2VyUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHZvaWQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3VudGllcygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArICcvYXBpL2NvdW50aWVzJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbCB9KTtcclxuICAgICAgICAgICAgICAgIHNldENvdW50aWVzKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0NvdW50eURyb3Bkb3duTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNvdW50eVNlbGVjdGlvbihjb3VudHlTZWxlY3RlZCkge1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0Q291bnR5TmFtZShjb3VudHlTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgRXhwYW5kZWRDb21wb25lbnQgPSAoKSA9PiAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KFwicHJlXCIsIHsgY2hpbGRyZW46IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpIH0pIH0pKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgcGFnZSBmcm9tIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShcIlwiKTtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQSV9CQVNFX1VSTCArIGAvYXBpL2dob3N0YnVzdGVyLWxvY2F0aW9ucy8ke2NvdW50eU5hbWV9YCwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgc2V0TG9jYXRpb25zKHJlc3AuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlRG93bmxvYWRCdXR0b24oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJFcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogcmVkaXJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRm9ybSwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0sIHsgY2hpbGRyZW46IF9qc3hzKEZvcm1Hcm91cCwgT2JqZWN0LmFzc2lnbih7IHJvbGU6IFwiZm9ybVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFJvdywgeyBjaGlsZHJlbjogX2pzeHMoQ29sLCB7IGNoaWxkcmVuOiBbaXNDb3VudHlEcm9wZG93bkxvYWRpbmcgPyBfanN4KFNwaW5uZXIsIHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCwgX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbXCJDb3VudHlcIiwgX2pzeHMoRm9ybS5TZWxlY3QsIE9iamVjdC5hc3NpZ24oeyBkaXNhYmxlZDogaXNDb3VudHlEcm9wZG93bkxvYWRpbmcsIHZhbHVlOiBjb3VudHlOYW1lLCBvbkNoYW5nZTogKGUpID0+IHZhbGlkYXRlQ291bnR5U2VsZWN0aW9uKGUuY3VycmVudFRhcmdldC52YWx1ZSkgfSwgeyBjaGlsZHJlbjogW19qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBcIlwiIH0sIHsgY2hpbGRyZW46IFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIiB9KSksIGNvdW50aWVzLm1hcCgoY291bnR5KSA9PiAoX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IGNvdW50eS5jb3VudHlfbmFtZSB9LCB7IGNoaWxkcmVuOiBjb3VudHkuY291bnR5X25hbWUgfSksIGNvdW50eS5jb3VudHlfbmFtZSkpKV0gfSkpXSB9KV0gfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiwgZGlzYWJsZWQ6ICFyZWFkeWZvclNlYXJjaCB9LCB7IGNoaWxkcmVuOiBcIkdldCBHaG9zdCBMb2NhdGlvbnNcIiB9KSkgfSldIH0pKSB9KSksIF9qc3goXCJiclwiLCB7fSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlTWVzc2FnZSA9PT0gJycpID8gX2pzeChTcGlubmVyLCB7IGFuaW1hdGlvbjogXCJib3JkZXJcIiwgdmFyaWFudDogJ2RhbmdlcicsIHJvbGU6IFwic3RhdHVzXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiwgIWlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VNZXNzYWdlID09PSAnU3VjY2VzcycpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBfanN4KENTVkxpbmssIE9iamVjdC5hc3NpZ24oeyBoaWRkZW46IGhpZGVEb3dubG9hZEJ1dHRvbiwgZGF0YTogbG9jYXRpb25zLCBmaWxlbmFtZTogY291bnR5TmFtZSArICctZmxhZ2dlZC1hZGRyZXNzZXMuY3N2JyB9LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJidXR0b25cIiwgY29sb3I6IFwicmVkXCIsIHNpemU6ICdsZycgfSwgeyBjaGlsZHJlbjogXCJEb3dubG9hZCByZXN1bHRzXCIgfSkpIH0pKSB9KSwgX2pzeChEYXRhVGFibGUsIHsgZXhwYW5kYWJsZVJvd3M6IHRydWUsIGV4cGFuZGFibGVSb3dzQ29tcG9uZW50OiBFeHBhbmRlZENvbXBvbmVudCgpLCBjb2x1bW5zOiBjb2x1bW5zLCBkYXRhOiBsb2NhdGlvbnMsIGhpZ2hsaWdodE9uSG92ZXI6IHRydWUsIHBhZ2luYXRpb246IHRydWUsIHBhZ2luYXRpb25QZXJQYWdlOiAxMCwgcGFnaW5hdGlvblRvdGFsUm93czogbG9jYXRpb25zLmxlbmd0aCB9KV0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZXNwb25zZU1lc3NhZ2UgPT09ICdFcnJvcicpID8gXCJFcnJvciBmZXRjaGluZyByZWNvcmRzLiBQbGVhc2UgcmV0cnkuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJdIH0pXSB9KSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHaG9zdGJ1c3RlcnM7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmQsIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBSb3csIFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtaGVhZGVyJztcclxuY29uc3QgTXlWb3RpbmdIaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdW1tYXJ5Q2FsbENvbXBsZXRlLCBzZXRTdW1tYXJ5Q2FsbENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoaXN0b3J5Q2FsbENvbXBsZXRlLCBzZXRIaXN0b3J5Q2FsbENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyUmVhZHksIHNldFVzZXJSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIgfSk7XHJcbiAgICBjb25zdCBbcXZmRGF0ZXMsIHNldFF2ZkRhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtxdmZEYXRlLCBzZXRRdmZEYXRlXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgUVZGIERhdGUgLS0tIFwiKTtcclxuICAgIGNvbnN0IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZywgc2V0SXNDb3VudHlEcm9wZG93bkxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY291bnRpZXMsIHNldENvdW50aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjb3VudHlOYW1lLCBzZXRDb3VudHlOYW1lXSA9IHVzZVN0YXRlKFwiIC0tLSBTZWxlY3QgQ291bnR5IC0tLSBcIik7XHJcbiAgICBjb25zdCBbcmVhZHlmb3JTZWFyY2gsIHNldFJlYWR5Rm9yU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2b3Rlckxhc3ROYW1lLCBzZXRWb3Rlckxhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZvdGVyRmlyc3ROYW1lLCBzZXRWb3RlckZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt2b3RlclllYXJPZkJpcnRoLCBzZXRWb3RlclllYXJPZkJpcnRoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ZvdGVyWmlwLCBzZXRWb3RlclppcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt2b3RlclN1bW1hcnksIHNldFZvdGVyU3VtbWFyeV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3ZvdGVySGlzdG9yeSwgc2V0Vm90ZXJIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtyZXNwb25zZU1lc3NhZ2UsIHNldFJlc3BvbnNlTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDb3VudHkgTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY291bnR5X25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdKdXJpc2RpY3Rpb24gTmFtZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuanVyaXNkaWN0aW9uX25hbWUsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFbGVjdGlvbiBEYXRlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5lbGVjdGlvbl9kYXRlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSXMgQWJzZW50ZWUgVm90ZXInLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmlzX2Fic2VudGVlX3ZvdGVyLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICBdLCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgICAgc2V0VXNlclJlYWR5KHRydWUpO1xyXG4gICAgICAgIGxldCB1bm1vdW50ZWQgPSBmYWxzZTtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyAnL2FwaS9xdmZkYXRlcycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChxdmZEYXRlcykgPT4ge1xyXG4gICAgICAgICAgICBzZXRRdmZEYXRlcyhxdmZEYXRlcyk7XHJcbiAgICAgICAgICAgIHNldFF2ZkRhdGUocXZmRGF0ZXNbMF0udGFibGVfbmFtZSk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdm9pZCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50aWVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgJy9hcGkvY291bnRpZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q291bnRpZXMoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHNldElzQ291bnR5RHJvcGRvd25Mb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oY291bnR5U2VsZWN0ZWQpIHtcclxuICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoJycpO1xyXG4gICAgICAgIGlmIChjb3VudHlTZWxlY3RlZCA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzZXRSZWFkeUZvclNlYXJjaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDb3VudHlOYW1lKGNvdW50eVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgcGFnZSBmcm9tIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHZvdGVyU3VtbWFyeVByb21pc2UgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkwgKyBgL2FwaS92b3Rlci1zdW1tYXJ5LyR7cXZmRGF0ZX0vJHtjb3VudHlOYW1lfS8ke3ZvdGVyWmlwfS8ke3ZvdGVyTGFzdE5hbWV9LyR7dm90ZXJGaXJzdE5hbWV9LyR7dm90ZXJZZWFyT2ZCaXJ0aH1gLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Vm90ZXJTdW1tYXJ5KHJlc3AuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBJX0JBU0VfVVJMICsgYC9hcGkvdm90ZXItaGlzdG9yeS8ke3F2ZkRhdGV9LyR7cmVzcC5kYXRhWzBdLnZvdGVyX2lkZW50aWZpY2F0aW9uX251bWJlcn1gLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcEhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BIaXN0b3J5LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Vm90ZXJIaXN0b3J5KHJlc3BIaXN0b3J5LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgfHwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRpcmVjdChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcC5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMyB8fCBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlZGlyZWN0KFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFsbFByb21pc2VzID0gUHJvbWlzZS5hbGxTZXR0bGVkKFt2b3RlclN1bW1hcnlQcm9taXNlXSk7XHJcbiAgICAgICAgYWxsUHJvbWlzZXMudGhlbigoYWxsUmVzdWx0cykgPT4gYWxsUmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3VtbWFyeUNhbGxDb21wbGV0ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEhpc3RvcnlDYWxsQ29tcGxldGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICByZXR1cm4gX2pzeChSZWRpcmVjdCwgeyB0bzogcmVkaXJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEZvcm0sIE9iamVjdC5hc3NpZ24oeyBvblN1Ym1pdDogc3VibWl0Rm9ybSB9LCB7IGNoaWxkcmVuOiBfanN4cyhGb3JtR3JvdXAsIE9iamVjdC5hc3NpZ24oeyByb2xlOiBcImZvcm1cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoUm93LCB7IGNoaWxkcmVuOiBbX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiUVZGIERhdGVcIiwgX2pzeChGb3JtLlNlbGVjdCwgT2JqZWN0LmFzc2lnbih7IGRpc2FibGVkOiBpc0xvYWRpbmcsIHZhbHVlOiBxdmZEYXRlLCBvbkNoYW5nZTogKGUpID0+IHNldFF2ZkRhdGUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBxdmZEYXRlcy5tYXAoKHF2ZikgPT4gKF9qc3goXCJvcHRpb25cIiwgT2JqZWN0LmFzc2lnbih7IHZhbHVlOiBxdmYudGFibGVfbmFtZSB9LCB7IGNoaWxkcmVuOiBxdmYudGFibGVfbmFtZS5zcGxpdCgnXycpWzFdIH0pLCBxdmYudGFibGVfbmFtZSkpKSB9KSldIH0pIH0pLCBfanN4cyhDb2wsIHsgY2hpbGRyZW46IFtpc0NvdW50eURyb3Bkb3duTG9hZGluZyA/IF9qc3goU3Bpbm5lciwgeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsIF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiQ291bnR5XCIsIF9qc3hzKEZvcm0uU2VsZWN0LCBPYmplY3QuYXNzaWduKHsgcmVxdWlyZWQ6IHRydWUsIGRpc2FibGVkOiBpc0NvdW50eURyb3Bkb3duTG9hZGluZywgdmFsdWU6IGNvdW50eU5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gdmFsaWRhdGVDb3VudHlTZWxlY3Rpb24oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcIm9wdGlvblwiLCBPYmplY3QuYXNzaWduKHsgdmFsdWU6IFwiXCIgfSwgeyBjaGlsZHJlbjogXCIgLS0tIFNlbGVjdCBDb3VudHkgLS0tIFwiIH0pKSwgY291bnRpZXMubWFwKChjb3VudHkpID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogY291bnR5LmNvdW50eV9uYW1lIH0sIHsgY2hpbGRyZW46IGNvdW50eS5jb3VudHlfbmFtZSB9KSwgY291bnR5LmNvdW50eV9uYW1lKSkpXSB9KSldIH0pXSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWmlwXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHJlcXVpcmVkOiB0cnVlLCB2YWx1ZTogdm90ZXJaaXAsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJaaXAoZS50YXJnZXQudmFsdWUpLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgWmlwXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiTGFzdCBOYW1lXCIsIF9qc3goRm9ybS5Db250cm9sLCB7IHJlcXVpcmVkOiB0cnVlLCB2YWx1ZTogdm90ZXJMYXN0TmFtZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3Rlckxhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKSwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIExhc3QgTmFtZVwiLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KV0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtcIkZpcnN0IE5hbWVcIiwgX2pzeChGb3JtLkNvbnRyb2wsIHsgcmVxdWlyZWQ6IHRydWUsIHZhbHVlOiB2b3RlckZpcnN0TmFtZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRWb3RlckZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBGaXJzdCBuYW1lXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KSwgX2pzeChDb2wsIHsgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjaGlsZHJlbjogW1wiWWVhciBvZiBCaXJ0aFwiLCBfanN4KEZvcm0uQ29udHJvbCwgeyByZXF1aXJlZDogdHJ1ZSwgdmFsdWU6IHZvdGVyWWVhck9mQmlydGgsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Vm90ZXJZZWFyT2ZCaXJ0aChlLnRhcmdldC52YWx1ZSksIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFbnRlciBZZWFyIG9mIEJpcnRoXCIsIGNsYXNzTmFtZTogXCJpbnB1dFwiIH0pXSB9KSB9KV0gfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KENvbCwgeyBjaGlsZHJlbjogXCJcXHUwMEEwXCIgfSkgfSksIF9qc3goUm93LCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IHNpemU6ICdsZycsIHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG5cIiB9LCB7IGNoaWxkcmVuOiBcIkdldCBNeSBWb3RpbmcgSGlzdG9yeVwiIH0pKSB9KV0gfSkpIH0pKSB9KSksIF9qc3goXCJiclwiLCB7fSksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IGlzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFNwaW5uZXIsIE9iamVjdC5hc3NpZ24oeyBhbmltYXRpb246IFwiYm9yZGVyXCIsIHZhcmlhbnQ6ICdkYW5nZXInLCByb2xlOiBcInN0YXR1c1wiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwic3Itb25seVwiIH0sIHsgY2hpbGRyZW46IFwiTG9hZGluZy4uLlwiIH0pKSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdm90ZXJTdW1tYXJ5ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KENhcmQsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiaW5mby1jYXJkXCIgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZC5Cb2R5LCBPYmplY3QuYXNzaWduKHsgc3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9IH0sIHsgY2hpbGRyZW46IFtfanN4KENhcmQuVGl0bGUsIHsgY2hpbGRyZW46IHZvdGVyU3VtbWFyeS52b3Rlcl9mdWxsX25hbWUgfSksIF9qc3goQ2FyZC5TdWJ0aXRsZSwgeyBjaGlsZHJlbjogcXZmRGF0ZSB9KSwgX2pzeHMoQ2FyZC5UZXh0LCBPYmplY3QuYXNzaWduKHsgc3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9IH0sIHsgY2hpbGRyZW46IFtcIlJlZ2lzdHJhdGlvbiBEYXRlOiBcIiwgdm90ZXJTdW1tYXJ5LnJlZ2lzdHJhdGlvbl9kYXRlLCBfanN4KFwiYnJcIiwge30pLCBcIlZvdGVyIElkZW50aWZpY2F0aW9uIE51bWJlcjogXCIsIHZvdGVyU3VtbWFyeS52b3Rlcl9pZGVudGlmaWNhdGlvbl9udW1iZXIsIF9qc3goXCJiclwiLCB7fSksIFwiWWVhciBvZiBiaXJ0aDogXCIsIHZvdGVyU3VtbWFyeS55ZWFyX29mX2JpcnRoLCBfanN4KFwiYnJcIiwge30pLCBcIkFkZHJlc3M6IFwiLCB2b3RlclN1bW1hcnkuZnVsbF9hZGRyZXNzLCBfanN4KFwiYnJcIiwge30pXSB9KSldIH0pKSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9qc3goXCJzcGFuXCIsIHt9KSB9KSB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogKHN1bW1hcnlDYWxsQ29tcGxldGUgJiYgdm90ZXJTdW1tYXJ5ID09PSB1bmRlZmluZWQpID8gX2pzeHMoXCJzcGFuXCIsIHsgY2hpbGRyZW46IFtcIk5vIHJlY29yZCBmb3VuZCBmb3IgY3JpdGVyaWE6IFwiLCBxdmZEYXRlLCBcIiBcIiwgY291bnR5TmFtZSwgXCIgXCIsIHZvdGVyWmlwLCBcIiBcIiwgdm90ZXJMYXN0TmFtZSwgXCIgXCIsIHZvdGVyRmlyc3ROYW1lLCBcIiBcIiwgdm90ZXJZZWFyT2ZCaXJ0aF0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2pzeChcInNwYW5cIiwge30pIH0pIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChTcGlubmVyLCBPYmplY3QuYXNzaWduKHsgYW5pbWF0aW9uOiBcImJvcmRlclwiLCB2YXJpYW50OiAnZGFuZ2VyJywgcm9sZTogXCJzdGF0dXNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInNyLW9ubHlcIiB9LCB7IGNoaWxkcmVuOiBcIkxvYWRpbmcuLi5cIiB9KSkgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZvdGVySGlzdG9yeS5sZW5ndGggPiAwID8gX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJoNFwiLCB7IGNoaWxkcmVuOiBbXCJWb3RpbmcgaGlzdG9yeSBhY2NvcmRpbmcgdG8gUVZGIFwiLCBxdmZEYXRlXSB9KSwgX2pzeChEYXRhVGFibGUsIHsgY29sdW1uczogY29sdW1ucywgZGF0YTogdm90ZXJIaXN0b3J5IH0pXSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2pzeChcInNwYW5cIiwge30pIH0pIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogKGhpc3RvcnlDYWxsQ29tcGxldGUgJiYgdm90ZXJIaXN0b3J5Lmxlbmd0aCA9PSAwKSA/IF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiTm8gVm90aW5nIGhpc3RvcnkgZm91bmQuXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9qc3goXCJzcGFuXCIsIHt9KSB9KSB9KSB9KV0gfSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBEcm9wZG93biA9ICh7IGxvYWRpbmcsIGxhYmVsLCB2YWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChfanN4cyhcImxhYmVsXCIsIHsgY2hpbGRyZW46IFtsYWJlbCwgX2pzeChcInNlbGVjdFwiLCBPYmplY3QuYXNzaWduKHsgZGlzYWJsZWQ6IGxvYWRpbmcsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlIH0sIHsgY2hpbGRyZW46IG9wdGlvbnMubWFwKChvcHRpb24pID0+IChfanN4KFwib3B0aW9uXCIsIE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogb3B0aW9uLnZhbHVlIH0sIHsgY2hpbGRyZW46IG9wdGlvbi5sYWJlbCB9KSwgb3B0aW9uLnZhbHVlKSkpIH0pKV0gfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNeVZvdGluZ0hpc3Rvcnk7XHJcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuZXhwb3J0IGNvbnN0IE5ld3MgPSAoKSA9PiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiSW4gb3RoZXIgbmV3cyAuLi5cIiB9KSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcImh0dHBzOi8vcnVtYmxlLmNvbS92MWlqN3RsLWVsZWN0aW9uLWRlY2VydGlmaWNhdGlvbi1pbmNvbWluZy10aGFua3MtdG8tZWxlY3Rpb24taW50ZWdyaXR5LWZvcmNlLmh0bWxcIiB9KV0gfSkpO1xyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbi8vaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8qY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA2ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA2ZW07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNXB4LCBhdXRvKTtcclxuYDsgKi9cclxuZXhwb3J0IGNvbnN0IFJlc291cmNlcyA9ICgpID0+IChfanN4KF9GcmFnbWVudCwgeyBjaGlsZHJlbjogX2pzeChcImgxXCIsIHsgY2hpbGRyZW46IFwiV2ViIFJlc291cmNlc1wiIH0pIH0pKTtcclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzO1xyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcFNpZGVCYXIgZnJvbSAnLi9BcHBTaWRlQmFyJztcclxuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tIFwiLi9zZXJ2aWNlV29ya2VyXCI7XHJcblJlYWN0RE9NLnJlbmRlcihfanN4KEJyb3dzZXJSb3V0ZXIsIHsgY2hpbGRyZW46IF9qc3goQXBwU2lkZUJhciwge30pIH0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gXCIuL2F1dGgtaGVhZGVyXCI7XHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUElfQkFTRV9VUkw7XHJcbmNsYXNzIERvd25sb2FkU2VydmljZSB7XHJcbiAgICBjcmVhdGVEb3dubG9hZFJlcXVlc3QoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KEFQSV9VUkwgKyAnL2FwaS9kb3dubG9hZHMnLCBkYXRhLCB7IGhlYWRlcnM6IGF1dGhIZWFkZXIoKSB9KTtcclxuICAgIH1cclxuICAgIGdldERvd25sb2FkUmVxdWVzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChBUElfVVJMICsgJy9hcGkvZG93bmxvYWRzJywgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCkgfSk7XHJcbiAgICB9XHJcbiAgICBkb3dubG9hZEZpbGUoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KEFQSV9VUkwgKyBgL2FwaS9kb3dubG9hZC1maWxlYCwgZGF0YSwgeyBoZWFkZXJzOiBhdXRoSGVhZGVyKCksIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEb3dubG9hZFNlcnZpY2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9