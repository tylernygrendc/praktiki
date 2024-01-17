/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/_ui.js":
/*!************************!*\
  !*** ./scripts/_ui.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoResizeTextArea: () => (/* binding */ autoResizeTextArea),\n/* harmony export */   enableNavigation: () => (/* binding */ enableNavigation),\n/* harmony export */   enableTabs: () => (/* binding */ enableTabs)\n/* harmony export */ });\nfunction autoResizeTextArea(){\n    document.querySelectorAll(\"textarea\").forEach(textarea => {\n\n        const fontSize = Number(window.getComputedStyle(textarea)\n                .getPropertyValue(\"font-size\").split(\"p\")[0]);\n        const initialInputHeight = Number(window.getComputedStyle(textarea)\n                .getPropertyValue(\"height\").split(\"p\")[0]);\n        let newLines = 0;\n\n        textarea.style.height = `${ initialInputHeight }px`;\n\n        textarea.addEventListener(\"keydown\", function (e){\n            let contentWidth = textarea.value.length * 0.625 * fontSize;\n            let containerWidth = Number(window.getComputedStyle(textarea)\n                .getPropertyValue(\"width\").split(\"p\")[0]);\n\n            if(e.key === \"Enter\") newLines +=1;\n            let spaceUsed = newLines + contentWidth / containerWidth;\n            let contentHeight = Math.ceil(spaceUsed) * 1.5 * fontSize;\n\n            if(textarea.style.height.split(\"p\")[0] < contentHeight){\n                textarea.style.height = `${ contentHeight }px`;\n            }\n        });\n\n        textarea.parentElement.addEventListener(\"mouseover\", function(e){\n            const bottomBorder = this.getBoundingClientRect().bottom;\n            if(e.clientY >= bottomBorder - 32) this.style.cursor = \"ns-resize\";\n            else this.style.cursor = \"default\";\n        });\n        textarea.parentElement.addEventListener(\"mousedown\", function(e){\n            const bottomBorder = this.getBoundingClientRect().bottom;\n            if(e.clientY >= bottomBorder - 32){\n                const container = this;\n                const controller = new AbortController();\n                window.addEventListener(\"mousemove\", function(mouse){\n                    const initialHeight = Number(window.getComputedStyle(textarea)\n                        .getPropertyValue(\"height\").split(\"p\")[0]);\n                    window.requestAnimationFrame(() => {\n                        container.style.cursor = \"grab\";\n                        textarea.style.height = `${ mouse.movementY + initialHeight }px`;\n                    });\n                }, { signal: controller.signal });\n                window.addEventListener(\"mouseup\", function(e){\n                    container.style.cursor = \"default\";\n                    controller.abort();\n                }, { signal: controller.signal });\n            }\n        });\n    });\n}\nfunction enableTabs(){\n    document.querySelectorAll(\".tabs\").forEach(element => {\n        element.querySelectorAll(\".tab\").forEach((tab, i) => {\n            tab.addEventListener(\"click\", function(e) {\n                e.preventDefault();\n                let tabpanel = element.querySelectorAll(\".tabpanel\");\n                element.querySelectorAll(\".tab\").forEach((tab, j) => {\n\n                    if(i === j) {\n                        tab.classList.add(\"tab--active\");\n                        tabpanel[j].classList.remove(\"tabpanel--inactive\");\n                    }\n                    else { \n                        tab.classList.remove(\"tab--active\");\n                        tabpanel[j].classList.add(\"tabpanel--inactive\");\n                    }\n                });\n            });\n        });\n    });\n}\n\nfunction enableNavigation(){\n    document.querySelectorAll(\".navigation\").forEach(element => {\n        element.querySelectorAll(\".navigation-item\").forEach((item, i) => {\n            item.addEventListener(\"click\", function(e) {\n                e.preventDefault();\n                let layout = document.querySelectorAll(\".layout\");\n                element.querySelectorAll(\".navigation-item\").forEach((item, j) => {\n                    if(i === j) {\n                        item.classList.add(\"navigation-item--active\");\n                        layout[j].classList.add(\"layout--active\");\n                    }\n                    else { \n                        item.classList.remove(\"navigation-item--active\");\n                        layout[j].classList.remove(\"layout--active\");\n                    }\n                });\n            });\n        });\n    });\n}\n\n//# sourceURL=webpack://functions/./scripts/_ui.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ui.js */ \"./scripts/_ui.js\");\n\n\nwindow.addEventListener(\"load\", () => {\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.autoResizeTextArea)();\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.enableNavigation)();\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.enableTabs)();\n})\n\n//# sourceURL=webpack://functions/./scripts/main.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;