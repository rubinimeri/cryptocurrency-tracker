/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Header */

.header {
    width: 100%;
    min-height: 13vh;
    background-color: #fff;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 0.7rem;
}

nav {
    width: 100%;
    max-width: 1200px;
}

.top-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    border-bottom: 1px solid #EFF2F5;
    padding: 10px 0;
}

.top-nav div {
    align-self: center;
}

.logo-container {
    margin-right: auto;
}

.logo-container, img {
    max-width: 200px;
    
}

.top-nav svg {
    vertical-align: middle;
}

.dark {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.dark svg {
    height: 20px;
    width: 20px;
}

.select-container {
    display: flex;
    height: 100%;
}

.select-container svg {
    margin-bottom: 4px;
}

.select-box {
    border: none;
    appearance: none;
    outline: none;
    width: 100%;
    background-color: white;
    font-weight: 700;
    padding: 0 4px;
    cursor: pointer;
}

.search-container {
    display: flex;
    align-items: center;
    padding: 7px 12px;
    gap: 7px;
    background-color: #EFF2F5;
    color: #A6B0C3;
    border-radius: 8px;
}

.search-container input {
    outline: none;
    border: none;
    font-size: 100%;
    background-color: #EFF2F5;
    color: #000000;
    font-weight: 700;
    font-size: 13px;
}
.search-container input::placeholder {
    color: #A6B0C3;
}

.search-container svg {
    fill: #A6B0C3;
    vertical-align: middle;
    width: 14px;
    height: 14px;
}

.hamburger svg {
    cursor: pointer;
    width: 28px;
    height: 28px;
    display: none;
}

.bottom-nav{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 1px solid#EFF2F5;
    padding-bottom: 11px;
}

.bottom-nav div {
    font-size: 14px;
    border-right: 2px solid gray;
    flex-grow: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 4px;
}
.bottom-nav div a {
    flex-grow: 1;
    padding: 8px 0;
}

.bottom-nav div:hover {
    color: #3861E7;
    border-right:2px solid#3861E7;
}

.bottom-nav a:hover {
    color: #3861E7;
}

.bottom-nav .login-register:hover {
    border: none;
}
.bottom-nav .register:hover {
    color: white;
    opacity: 0.9;
}
.bottom-nav .login:hover {
    opacity: 0.8;
}

.bottom-nav .login-register {
    border: none;
    margin-left: 30%;
}

.login,
.register {
    flex-grow: 1;
}

.register {
    background-color: #3861E7;
    color: white;
    border-radius: 8px;
    font-weight: 700;
}

.login {
    border: 1px solid #3861E7;
    border-radius: 8px;
    color: #3861E7;
}

@media only screen and (max-width: 900px) {
    .hamburger svg{
        display: block;
    }
    .bottom-nav {
        display: none;
    }
    
    .header {
        min-height: 8vh;
    }
    .bottom-nav {
        height: 100%;
        position: absolute;
        top: 8vh;
        left: 0;
        right: 0;
        width: 100vw;
        height: 350px;
        background: white;
        transition: 0.2s;
        flex-direction: column;
        padding: 2rem;
    }
    .bottom-nav.active {
        display: flex;
    }

    .bottom-nav div {
        border-bottom: 1px solid #EFF2F5;
        border-right: none;
        text-align: left;
        justify-self: center;
        display: flex;
        cursor: pointer;
        padding-bottom: 0.8rem;
        
    }
    .bottom-nav div a {
        align-self: flex-end;
    }
    .login-register a{
        text-align: center;
    }
    .bottom-nav .login-register {
        border: none;
        margin: 0;
    }

    .select-container {
        height: auto;
        justify-content: flex-start;
    }
    .select-box {
        width: auto;
    }

    .bottom-nav .search-container {
        padding: 8px 12px;
        cursor: text;
    }

    .bottom-nav .search-container:hover,
    .bottom-nav .select-container:hover {
        border-right: none;
    }

    .search-container input {
        width: 100%;
        padding-bottom: 0;
        font-size: 100%;
        size: 100%;
    }

    .search-container input::placeholder {
        font-size: 15px;
    }

    .search-container svg {
        width: 18px;
        height: 18px;
        margin-right: 3px;
    }

}`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"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","sourcesContent":["/* Header */\n\n.header {\n    width: 100%;\n    min-height: 13vh;\n    background-color: #fff;\n    padding: 0 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    gap: 0.7rem;\n}\n\nnav {\n    width: 100%;\n    max-width: 1200px;\n}\n\n.top-nav {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    border-bottom: 1px solid #EFF2F5;\n    padding: 10px 0;\n}\n\n.top-nav div {\n    align-self: center;\n}\n\n.logo-container {\n    margin-right: auto;\n}\n\n.logo-container, img {\n    max-width: 200px;\n    \n}\n\n.top-nav svg {\n    vertical-align: middle;\n}\n\n.dark {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.dark svg {\n    height: 20px;\n    width: 20px;\n}\n\n.select-container {\n    display: flex;\n    height: 100%;\n}\n\n.select-container svg {\n    margin-bottom: 4px;\n}\n\n.select-box {\n    border: none;\n    appearance: none;\n    outline: none;\n    width: 100%;\n    background-color: white;\n    font-weight: 700;\n    padding: 0 4px;\n    cursor: pointer;\n}\n\n.search-container {\n    display: flex;\n    align-items: center;\n    padding: 7px 12px;\n    gap: 7px;\n    background-color: #EFF2F5;\n    color: #A6B0C3;\n    border-radius: 8px;\n}\n\n.search-container input {\n    outline: none;\n    border: none;\n    font-size: 100%;\n    background-color: #EFF2F5;\n    color: #000000;\n    font-weight: 700;\n    font-size: 13px;\n}\n.search-container input::placeholder {\n    color: #A6B0C3;\n}\n\n.search-container svg {\n    fill: #A6B0C3;\n    vertical-align: middle;\n    width: 14px;\n    height: 14px;\n}\n\n.hamburger svg {\n    cursor: pointer;\n    width: 28px;\n    height: 28px;\n    display: none;\n}\n\n.bottom-nav{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    border-bottom: 1px solid#EFF2F5;\n    padding-bottom: 11px;\n}\n\n.bottom-nav div {\n    font-size: 14px;\n    border-right: 2px solid gray;\n    flex-grow: 1;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n.bottom-nav div a {\n    flex-grow: 1;\n    padding: 8px 0;\n}\n\n.bottom-nav div:hover {\n    color: #3861E7;\n    border-right:2px solid#3861E7;\n}\n\n.bottom-nav a:hover {\n    color: #3861E7;\n}\n\n.bottom-nav .login-register:hover {\n    border: none;\n}\n.bottom-nav .register:hover {\n    color: white;\n    opacity: 0.9;\n}\n.bottom-nav .login:hover {\n    opacity: 0.8;\n}\n\n.bottom-nav .login-register {\n    border: none;\n    margin-left: 30%;\n}\n\n.login,\n.register {\n    flex-grow: 1;\n}\n\n.register {\n    background-color: #3861E7;\n    color: white;\n    border-radius: 8px;\n    font-weight: 700;\n}\n\n.login {\n    border: 1px solid #3861E7;\n    border-radius: 8px;\n    color: #3861E7;\n}\n\n@media only screen and (max-width: 900px) {\n    .hamburger svg{\n        display: block;\n    }\n    .bottom-nav {\n        display: none;\n    }\n    \n    .header {\n        min-height: 8vh;\n    }\n    .bottom-nav {\n        height: 100%;\n        position: absolute;\n        top: 8vh;\n        left: 0;\n        right: 0;\n        width: 100vw;\n        height: 350px;\n        background: white;\n        transition: 0.2s;\n        flex-direction: column;\n        padding: 2rem;\n    }\n    .bottom-nav.active {\n        display: flex;\n    }\n\n    .bottom-nav div {\n        border-bottom: 1px solid #EFF2F5;\n        border-right: none;\n        text-align: left;\n        justify-self: center;\n        display: flex;\n        cursor: pointer;\n        padding-bottom: 0.8rem;\n        \n    }\n    .bottom-nav div a {\n        align-self: flex-end;\n    }\n    .login-register a{\n        text-align: center;\n    }\n    .bottom-nav .login-register {\n        border: none;\n        margin: 0;\n    }\n\n    .select-container {\n        height: auto;\n        justify-content: flex-start;\n    }\n    .select-box {\n        width: auto;\n    }\n\n    .bottom-nav .search-container {\n        padding: 8px 12px;\n        cursor: text;\n    }\n\n    .bottom-nav .search-container:hover,\n    .bottom-nav .select-container:hover {\n        border-right: none;\n    }\n\n    .search-container input {\n        width: 100%;\n        padding-bottom: 0;\n        font-size: 100%;\n        size: 100%;\n    }\n\n    .search-container input::placeholder {\n        font-size: 15px;\n    }\n\n    .search-container svg {\n        width: 18px;\n        height: 18px;\n        margin-right: 3px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Nunito:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* border: 1px solid black; */
}

html, body {
    height: 100%;
    width: 100%;
}

body {
    font-family: 'Nunito', sans-serif;
    /* background-color: #f4f4f4; */
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
    font-weight: 700;
}

/* Container */

.container {
    display: grid;
    place-content: center;
    gap: 3rem;
    padding: 2rem;
}

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AACA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iCAAiC;IACjC,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;AACpB;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,qBAAqB;IACrB,SAAS;IACT,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Nunito:wght@400;500;600;700&display=swap');\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    /* border: 1px solid black; */\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    font-family: 'Nunito', sans-serif;\n    /* background-color: #f4f4f4; */\n}\n\nh1, h2, h3 {\n    font-family: 'Montserrat', sans-serif;\n}\n\nul {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: black;\n    font-weight: 700;\n}\n\n/* Container */\n\n.container {\n    display: grid;\n    place-content: center;\n    gap: 3rem;\n    padding: 2rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveSearchSelect: () => (/* binding */ moveSearchSelect),
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
// Show hamburger menu
function showMenu() {
    // When DOM content is loaded, add an event listener to
    // hamburger menu, when clicked toggle .active class
    document.addEventListener("DOMContentLoaded", () => {
    // Get hamburger-menu
    const hamburgerMenu = document.querySelector(".hamburger");
    hamburgerMenu.addEventListener("click", () => {
        // Get bottom nav bar
        const bottomNav = document.querySelector(".bottom-nav");
        bottomNav.classList.toggle("active")
    })
})
}

// Move search bar and currency selector to
// hamburger menu when screen is <= 900
function moveSearchSelect() {
    // Select bottom and top navbars
    const topNav = document.querySelector(".top-nav");
    const bottomNav = document.querySelector(".bottom-nav");
    // Select search and select
    const searchContainer = document.querySelector(".search-container");
    const selectContainer = document.querySelector(".select-container");

    // If window width is <= 900
    if(window.innerWidth <= 900) {
        bottomNav.append(selectContainer, searchContainer);
    } else {
        topNav.append(selectContainer, searchContainer);
    }
}



/***/ }),

/***/ "./src/assets/logo-dark.png":
/*!**********************************!*\
  !*** ./src/assets/logo-dark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82ce140b93c72bd10f68.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_logo_dark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo-dark.png */ "./src/assets/logo-dark.png");
/* harmony import */ var _display_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-controller.js */ "./src/display-controller.js");





(0,_display_controller_js__WEBPACK_IMPORTED_MODULE_3__.showMenu)();
(0,_display_controller_js__WEBPACK_IMPORTED_MODULE_3__.moveSearchSelect)();
window.addEventListener("resize", _display_controller_js__WEBPACK_IMPORTED_MODULE_3__.moveSearchSelect);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyw4RkFBOEYsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8s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QUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNEO0FBQ0k7QUFDc0M7O0FBRXJFLGdFQUFRO0FBQ1Isd0VBQWdCO0FBQ2hCLGtDQUFrQyxvRUFBZ0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvLi9zcmMvc3R5bGVzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzP2U2OGIiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyLy4vc3JjL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NyeXB0b2N1cnJlbmN5LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3J5cHRvY3VycmVuY3ktdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jcnlwdG9jdXJyZW5jeS10cmFja2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBIZWFkZXIgKi9cblxuLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBnYXA6IDAuN3JlbTtcbn1cblxubmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuLnRvcC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjJGNTtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi50b3AtbmF2IGRpdiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvZ28tY29udGFpbmVyLCBpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgXG59XG5cbi50b3AtbmF2IHN2ZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRhcmsge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhcmsgc3ZnIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5zZWxlY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNlbGVjdC1jb250YWluZXIgc3ZnIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zZWxlY3QtYm94IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogMCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDdweCAxMnB4O1xuICAgIGdhcDogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRjU7XG4gICAgY29sb3I6ICNBNkIwQzM7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRjU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQTZCMEMzO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBzdmcge1xuICAgIGZpbGw6ICNBNkIwQzM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5oYW1idXJnZXIgc3ZnIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ib3R0b20tbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCNFRkYyRjU7XG4gICAgcGFkZGluZy1ib3R0b206IDExcHg7XG59XG5cbi5ib3R0b20tbmF2IGRpdiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyYXk7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNHB4O1xufVxuLmJvdHRvbS1uYXYgZGl2IGEge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmJvdHRvbS1uYXYgZGl2OmhvdmVyIHtcbiAgICBjb2xvcjogIzM4NjFFNztcbiAgICBib3JkZXItcmlnaHQ6MnB4IHNvbGlkIzM4NjFFNztcbn1cblxuLmJvdHRvbS1uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICMzODYxRTc7XG59XG5cbi5ib3R0b20tbmF2IC5sb2dpbi1yZWdpc3Rlcjpob3ZlciB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmJvdHRvbS1uYXYgLnJlZ2lzdGVyOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC45O1xufVxuLmJvdHRvbS1uYXYgLmxvZ2luOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5ib3R0b20tbmF2IC5sb2dpbi1yZWdpc3RlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi5sb2dpbixcbi5yZWdpc3RlciB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ucmVnaXN0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODYxRTc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODYxRTc7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiAjMzg2MUU3O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgLmhhbWJ1cmdlciBzdmd7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYm90dG9tLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA4dmg7XG4gICAgfVxuICAgIC5ib3R0b20tbmF2IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOHZoO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICB9XG4gICAgLmJvdHRvbS1uYXYuYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuYm90dG9tLW5hdiBkaXYge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjJGNTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xuICAgICAgICBcbiAgICB9XG4gICAgLmJvdHRvbS1uYXYgZGl2IGEge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmxvZ2luLXJlZ2lzdGVyIGF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmJvdHRvbS1uYXYgLmxvZ2luLXJlZ2lzdGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLnNlbGVjdC1ib3gge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAuYm90dG9tLW5hdiAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgfVxuXG4gICAgLmJvdHRvbS1uYXYgLnNlYXJjaC1jb250YWluZXI6aG92ZXIsXG4gICAgLmJvdHRvbS1uYXYgLnNlbGVjdC1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgc2l6ZTogMTAwJTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1jb250YWluZXIgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVzs7QUFFWDtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixPQUFPO1FBQ1AsUUFBUTtRQUNSLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsZUFBZTtRQUNmLHNCQUFzQjs7SUFFMUI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtRQUNaLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7O0lBRUE7O1FBRUksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGdhcDogMC43cmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi50b3AtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZGMkY1O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi50b3AtbmF2IGRpdiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIsIGltZyB7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIFxcbn1cXG5cXG4udG9wLW5hdiBzdmcge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZGFyayB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRhcmsgc3ZnIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnNlbGVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWxlY3QtY29udGFpbmVyIHN2ZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLnNlbGVjdC1ib3gge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMCA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA3cHggMTJweDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRjU7XFxuICAgIGNvbG9yOiAjQTZCMEMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRjU7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjQTZCMEMzO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciBzdmcge1xcbiAgICBmaWxsOiAjQTZCMEMzO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHN2ZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvdHRvbS1uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCNFRkYyRjU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xcbn1cXG5cXG4uYm90dG9tLW5hdiBkaXYge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyYXk7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcbi5ib3R0b20tbmF2IGRpdiBhIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiA4cHggMDtcXG59XFxuXFxuLmJvdHRvbS1uYXYgZGl2OmhvdmVyIHtcXG4gICAgY29sb3I6ICMzODYxRTc7XFxuICAgIGJvcmRlci1yaWdodDoycHggc29saWQjMzg2MUU3O1xcbn1cXG5cXG4uYm90dG9tLW5hdiBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICMzODYxRTc7XFxufVxcblxcbi5ib3R0b20tbmF2IC5sb2dpbi1yZWdpc3Rlcjpob3ZlciB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLmJvdHRvbS1uYXYgLnJlZ2lzdGVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcbi5ib3R0b20tbmF2IC5sb2dpbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmJvdHRvbS1uYXYgLmxvZ2luLXJlZ2lzdGVyIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG5cXG4ubG9naW4sXFxuLnJlZ2lzdGVyIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucmVnaXN0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2MUU3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmxvZ2luIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjFFNztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogIzM4NjFFNztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAuaGFtYnVyZ2VyIHN2Z3tcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5ib3R0b20tbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgbWluLWhlaWdodDogOHZoO1xcbiAgICB9XFxuICAgIC5ib3R0b20tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogOHZoO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICB9XFxuICAgIC5ib3R0b20tbmF2LmFjdGl2ZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5ib3R0b20tbmF2IGRpdiB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjJGNTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLmJvdHRvbS1uYXYgZGl2IGEge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG4gICAgLmxvZ2luLXJlZ2lzdGVyIGF7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmJvdHRvbS1uYXYgLmxvZ2luLXJlZ2lzdGVyIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gICAgLnNlbGVjdC1ib3gge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmJvdHRvbS1uYXYgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLmJvdHRvbS1uYXYgLnNlYXJjaC1jb250YWluZXI6aG92ZXIsXFxuICAgIC5ib3R0b20tbmF2IC5zZWxlY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAgICAgc2l6ZTogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5zZWFyY2gtY29udGFpbmVyIHN2ZyB7XFxuICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgIGhlaWdodDogMThweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA3MDAmZmFtaWx5PU51bml0bzp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7ICovXG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi8qIENvbnRhaW5lciAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDNyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsU0FBUztJQUNULGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDcwMCZmYW1pbHk9TnVuaXRvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDsgKi9cXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBDb250YWluZXIgKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFNob3cgaGFtYnVyZ2VyIG1lbnVcbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICAvLyBXaGVuIERPTSBjb250ZW50IGlzIGxvYWRlZCwgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvXG4gICAgLy8gaGFtYnVyZ2VyIG1lbnUsIHdoZW4gY2xpY2tlZCB0b2dnbGUgLmFjdGl2ZSBjbGFzc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBHZXQgaGFtYnVyZ2VyLW1lbnVcbiAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG4gICAgaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBHZXQgYm90dG9tIG5hdiBiYXJcbiAgICAgICAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tbmF2XCIpO1xuICAgICAgICBib3R0b21OYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH0pXG59KVxufVxuXG4vLyBNb3ZlIHNlYXJjaCBiYXIgYW5kIGN1cnJlbmN5IHNlbGVjdG9yIHRvXG4vLyBoYW1idXJnZXIgbWVudSB3aGVuIHNjcmVlbiBpcyA8PSA5MDBcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlU2VhcmNoU2VsZWN0KCkge1xuICAgIC8vIFNlbGVjdCBib3R0b20gYW5kIHRvcCBuYXZiYXJzXG4gICAgY29uc3QgdG9wTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtbmF2XCIpO1xuICAgIGNvbnN0IGJvdHRvbU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLW5hdlwiKTtcbiAgICAvLyBTZWxlY3Qgc2VhcmNoIGFuZCBzZWxlY3RcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1jb250YWluZXJcIik7XG4gICAgY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtY29udGFpbmVyXCIpO1xuXG4gICAgLy8gSWYgd2luZG93IHdpZHRoIGlzIDw9IDkwMFxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDkwMCkge1xuICAgICAgICBib3R0b21OYXYuYXBwZW5kKHNlbGVjdENvbnRhaW5lciwgc2VhcmNoQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b3BOYXYuYXBwZW5kKHNlbGVjdENvbnRhaW5lciwgc2VhcmNoQ29udGFpbmVyKTtcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9oZWFkZXIuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vYXNzZXRzL2xvZ28tZGFyay5wbmcnXG5pbXBvcnQgeyBzaG93TWVudSwgbW92ZVNlYXJjaFNlbGVjdCB9IGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyLmpzJztcblxuc2hvd01lbnUoKTtcbm1vdmVTZWFyY2hTZWxlY3QoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG1vdmVTZWFyY2hTZWxlY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==