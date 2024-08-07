"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5635);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5182);





const PageIntro = ({ eyebrow, title, children, centered = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("mt-24 sm:mt-32 lg:mt-40", centered && "text-center"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block font-display text-base font-semibold text-neutral-950",
                            children: eyebrow
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: " - "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl", centered && "mx-auto"),
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("mt-6 max-w-3xl text-xl text-neutral-600", centered && "mx-auto"),
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageIntro);


/***/ })

};
;