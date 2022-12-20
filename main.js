/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const dataGithub = __webpack_require__(/*! ../repos.json */ \"./repos.json\");\nconsole.log(dataGithub);\nlet filterList = [];\nfor (const project of dataGithub) {\n  if (!project.private) {\n    filterList.push(...project.topics);\n  }\n}\nfilterList = [...new Set(filterList)];\nconst filters = document.querySelector('#portfolio-flters');\nfilterList.forEach(filter => filters.insertAdjacentHTML(\"beforeend\", `<li data-filter=\".filter-${filter}\">${filter}</li>`));\nconst projects = document.querySelector('#project-list');\nfor (const project of dataGithub) {\n  if (!project.private) {\n    const filter = project.topics.reduce((before, current) => {\n      return before + ' filter-' + current;\n    }, '');\n    projects.insertAdjacentHTML(\"beforeend\", `\n          <div class=\"col-lg-4 col-md-6 portfolio-item ${filter}\">\n            <div class=\"portfolio-wrap\">\n              <img src=\"assets/img/portfolio/portfolio-1.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"portfolio-links\">\n                <a href=\"assets/img/portfolio/portfolio-1.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox\" title=\"${project.name}\"><i class=\"bx bx-plus\"></i></a>\n                <a href=\"portfolio-details.html\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n              </div>\n            </div>\n          </div>`);\n  }\n}\nconsole.log('filterList', filterList);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./repos.json":
/*!********************!*\
  !*** ./repos.json ***!
  \********************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"message\":\"Bad credentials\",\"documentation_url\":\"https://docs.github.com/rest\"}');\n\n//# sourceURL=webpack://my-webpack-project/./repos.json?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;