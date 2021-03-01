/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateskillbox_app"]("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\"));\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\"));\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\"));\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\"));\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ./shared/Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\nvar TokenContext_1 = __webpack_require__(/*! ./shared/context/TokenContext */ \"./src/shared/context/TokenContext.ts\");\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\nvar commentContext_1 = __webpack_require__(/*! ./shared/Content/commentContext */ \"./src/shared/Content/commentContext.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar initialState = {\n    commentText: 'adsfsvsa'\n};\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    return state;\n};\nvar store = redux_1.createStore(rootReducer, redux_devtools_extension_1.composeWithDevTools());\nfunction AppComponent() {\n    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];\n    var token = useToken_1.useToken()[0];\n    var CommentProvider = commentContext_1.commentContext.Provider;\n    var TokenContextProvider = TokenContext_1.TokenContext.Provider;\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(CommentProvider, { value: { value: commentValue,\n                onChange: setCommentValue } },\n            react_1.default.createElement(TokenContextProvider, { value: token },\n                react_1.default.createElement(userContext_1.UserContextProvider, null,\n                    react_1.default.createElement(Layout_1.default, null,\n                        react_1.default.createElement(Header_1.default, null),\n                        react_1.default.createElement(Content_1.default, null,\n                            react_1.default.createElement(CardsList_1.default, null)),\n                        react_1.default.createElement(\"br\", null),\n                        react_1.default.createElement(Dropdown_1.default, { button: react_1.default.createElement(\"button\", null, \"Test\") },\n                            react_1.default.createElement(\"ul\", null,\n                                react_1.default.createElement(\"li\", null, \"1\")))))))));\n}\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack://skillbox_app/./src/App.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b2d7036349b2d92d3ceb")
/******/ 	})();
/******/ 	
/******/ }
);