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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Character = /*#__PURE__*/_createClass(function Character(name, type) {\n  _classCallCheck(this, Character);\n  var validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];\n  if (typeof name !== 'string' || name.length < 2 || name.length > 10) {\n    throw new Error('Name must be a string with 2 to 10 characters');\n  }\n  if (!validTypes.includes(type)) {\n    throw new Error('Invalid character type');\n  }\n  this.name = name;\n  this.type = type;\n  this.health = 100;\n  this.level = 1;\n  // Attack and defence will be set by subclasses\n  this.attack = undefined;\n  this.defence = undefined;\n});\n\nvar Bowman = /*#__PURE__*/function (_Character) {\n  _inherits(Bowman, _Character);\n  function Bowman(name) {\n    var _this;\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bowman';\n    _classCallCheck(this, Bowman);\n    _this = _callSuper(this, Bowman, [name, type]);\n    _this.attack = 25;\n    _this.defence = 25;\n    return _this;\n  }\n  return _createClass(Bowman);\n}(Character);\nvar Swordsman = /*#__PURE__*/function (_Character2) {\n  _inherits(Swordsman, _Character2);\n  function Swordsman(name) {\n    var _this2;\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Swordsman';\n    _classCallCheck(this, Swordsman);\n    _this2 = _callSuper(this, Swordsman, [name, type]);\n    _this2.attack = 40;\n    _this2.defence = 10;\n    return _this2;\n  }\n  return _createClass(Swordsman);\n}(Character);\nvar Magician = /*#__PURE__*/function (_Character3) {\n  _inherits(Magician, _Character3);\n  function Magician(name) {\n    var _this3;\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Magician';\n    _classCallCheck(this, Magician);\n    _this3 = _callSuper(this, Magician, [name, type]);\n    _this3.attack = 10;\n    _this3.defence = 40;\n    return _this3;\n  }\n  return _createClass(Magician);\n}(Character);\nvar Daemon = /*#__PURE__*/function (_Character4) {\n  _inherits(Daemon, _Character4);\n  function Daemon(name) {\n    var _this4;\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Daemon';\n    _classCallCheck(this, Daemon);\n    _this4 = _callSuper(this, Daemon, [name, type]);\n    _this4.attack = 10;\n    _this4.defence = 40;\n    return _this4;\n  }\n  return _createClass(Daemon);\n}(Character);\nvar Undead = /*#__PURE__*/function (_Character5) {\n  _inherits(Undead, _Character5);\n  function Undead(name) {\n    var _this5;\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Undead';\n    _classCallCheck(this, Undead);\n    _this5 = _callSuper(this, Undead, [name, type]);\n    _this5.attack = 25;\n    _this5.defence = 25;\n    return _this5;\n  }\n  return _createClass(Undead);\n}(Character);\nvar Zombie = /*#__PURE__*/function (_Character6) {\n  _inherits(Zombie, _Character6);\n  function Zombie(name) {\n    var _this6;\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Zombie';\n    _classCallCheck(this, Zombie);\n    _this6 = _callSuper(this, Zombie, [name, type]);\n    _this6.attack = 40;\n    _this6.defence = 10;\n    return _this6;\n  }\n  return _createClass(Zombie);\n}(Character);\n\n//# sourceURL=webpack://ajs-05/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;