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

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _wordList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordList.js */ \"./src/wordList.js\");\n\r\n\r\nlet currentPlayer = 1;\r\nlet currentWordIndex = 0;\r\n\r\nfunction startGame() {\r\n  const app = document.getElementById('app');\r\n  app.innerHTML = '';\r\n\r\n  const title = document.createElement('h2');\r\n  title.textContent = 'BuilDANDAN プロトタイプ';\r\n\r\n  const info = document.createElement('p');\r\n  info.textContent = `プレイヤー ${currentPlayer} のターンです。`;\r\n\r\n  const wordDisplay = document.createElement('p');\r\n  wordDisplay.textContent = `単語: ${_wordList_js__WEBPACK_IMPORTED_MODULE_0__.wordList[currentWordIndex].word}`;\r\n\r\n  const correctButton = document.createElement('button');\r\n  correctButton.textContent = '正しい';\r\n  correctButton.addEventListener('click', () => handleAnswer(true));\r\n\r\n  const incorrectButton = document.createElement('button');\r\n  incorrectButton.textContent = '誤り';\r\n  incorrectButton.addEventListener('click', () => handleAnswer(false));\r\n\r\n  app.appendChild(title);\r\n  app.appendChild(info);\r\n  app.appendChild(wordDisplay);\r\n  app.appendChild(correctButton);\r\n  app.appendChild(incorrectButton);\r\n}\r\n\r\nfunction handleAnswer(answer) {\r\n  const isCorrect = _wordList_js__WEBPACK_IMPORTED_MODULE_0__.wordList[currentWordIndex].correct === answer;\r\n  alert(isCorrect ? '正解です！' : '不正解です。');\r\n\r\n  currentWordIndex = (currentWordIndex + 1) % _wordList_js__WEBPACK_IMPORTED_MODULE_0__.wordList.length;\r\n  currentPlayer = currentPlayer === 1 ? 2 : 1;\r\n  startGame();\r\n}\r\n\n\n//# sourceURL=webpack://buildandan-proto-no1/./src/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic.js */ \"./src/gameLogic.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\r\n});\r\n\n\n//# sourceURL=webpack://buildandan-proto-no1/./src/index.js?");

/***/ }),

/***/ "./src/wordList.js":
/*!*************************!*\
  !*** ./src/wordList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wordList: () => (/* binding */ wordList)\n/* harmony export */ });\nconst wordList = [\r\n    { word: 'apple', correct: true },\r\n    { word: 'applle', correct: false },\r\n    { word: 'banana', correct: true },\r\n    { word: 'bananna', correct: false },\r\n    { word: 'cherry', correct: true },\r\n    { word: 'chery', correct: false },\r\n    // 他の単語を追加できます\r\n  ];\r\n  \n\n//# sourceURL=webpack://buildandan-proto-no1/./src/wordList.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;