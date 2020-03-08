(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/wasm_sudoku_solver.js":
/*!************************************!*\
  !*** ../pkg/wasm_sudoku_solver.js ***!
  \************************************/
/*! exports provided: Sudoku, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sudoku\", function() { return Sudoku; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_sudoku_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_sudoku_solver_bg.wasm */ \"../pkg/wasm_sudoku_solver_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_sudoku_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_sudoku_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nclass Sudoku {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Sudoku.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_sudoku_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_sudoku_free\"](ptr);\n    }\n    /**\n    * @returns {Sudoku}\n    */\n    static new() {\n        var ret = _wasm_sudoku_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"sudoku_new\"]();\n        return Sudoku.__wrap(ret);\n    }\n    /**\n    * @returns {boolean}\n    */\n    backtrace_solve() {\n        var ret = _wasm_sudoku_solver_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"sudoku_backtrace_solve\"](this.ptr);\n        return ret !== 0;\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_sudoku_solver.js?");

/***/ }),

/***/ "../pkg/wasm_sudoku_solver_bg.wasm":
/*!*****************************************!*\
  !*** ../pkg/wasm_sudoku_solver_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_sudoku_free, sudoku_new, sudoku_backtrace_solve */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_sudoku_solver.js */ \"../pkg/wasm_sudoku_solver.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_sudoku_solver_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_sudoku_solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-sudoku-solver */ \"../pkg/wasm_sudoku_solver.js\");\n\n\nlet grid = [\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0]\n];\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);