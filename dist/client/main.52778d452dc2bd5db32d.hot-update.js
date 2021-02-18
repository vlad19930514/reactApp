/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateskillbox_app"]("main",{

/***/ "./src/shared/CommentDorm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentDorm/CommentForm.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar commentContext_1 = __webpack_require__(/*! ../Content/commentContext */ \"./src/shared/Content/commentContext.ts\");\nfunction CommentForm() {\n    var _a = react_1.useContext(commentContext_1.commentContext), value = _a.value, onChange = _a.onChange;\n    function handleChange(event) {\n        onChange(event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(value);\n    }\n    return (react_1.default.createElement(\"form\", { onSubmit: handleSubmit },\n        react_1.default.createElement(\"textarea\", { value: value, onChange: handleChange }),\n        react_1.default.createElement(\"button\", { type: \"submit\" }, \"\\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.default = CommentForm;\n\n\n//# sourceURL=webpack://skillbox_app/./src/shared/CommentDorm/CommentForm.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e47683db9bc612526a36")
/******/ 	})();
/******/ 	
/******/ }
);