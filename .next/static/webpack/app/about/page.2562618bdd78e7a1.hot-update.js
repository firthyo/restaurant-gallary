"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n\n\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-primary sticky top-0 z-50 border-b border-primary-foreground/10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-2xl font-serif italic text-white\",\n                        children: \"Museum Restaurant\"\n                    }, void 0, false, {\n                        fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"hidden md:flex space-x-6 text-blue-500\",\n                        children: [\n                            \"Home\",\n                            \"Menu\",\n                            \"Recipes\",\n                            \"Chef's Table\",\n                            \"About\",\n                            \"Contact\"\n                        ].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: item.toLowerCase() === \"home\" ? \"/\" : \"/\".concat(item.toLowerCase().replace(\"'\", \"\").replace(\" \", \"-\")),\n                                    className: \"text-white hover:text-secondary transition-colors\",\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, item, false, {\n                                fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        asChild: true,\n                        variant: \"outline\",\n                        className: \"hidden md:inline-flex border-white text-white hover:bg-white hover:text-primary\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/booking\",\n                            children: \"Make a Reservation\"\n                        }, void 0, false, {\n                            fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: \"md:hidden\",\n                        variant: \"ghost\",\n                        size: \"icon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6 text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: 2,\n                                d: \"M4 6h16M4 12h16m-7 6h7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/Header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDbUI7QUFFaEQsTUFBTUUsU0FBUztJQUNiLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDSixrREFBSUE7d0JBQUNPLE1BQUs7d0JBQUlILFdBQVU7a0NBQXdDOzs7Ozs7a0NBR2pFLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FDWDs0QkFDQzs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTt5QkFDRCxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MscUJBQ0wsOERBQUNDOzBDQUNDLDRFQUFDWCxrREFBSUE7b0NBQ0hPLE1BQ0VHLEtBQUtFLFdBQVcsT0FBTyxTQUNuQixNQUNBLElBR3FCLE9BSGpCRixLQUNERSxXQUFXLEdBQ1hDLE9BQU8sQ0FBQyxLQUFLLElBQ2JBLE9BQU8sQ0FBQyxLQUFLO29DQUV0QlQsV0FBVTs4Q0FFVE07Ozs7OzsrQkFaSUE7Ozs7Ozs7Ozs7a0NBaUJiLDhEQUFDVCx5REFBTUE7d0JBQ0xhLE9BQU87d0JBQ1BDLFNBQVE7d0JBQ1JYLFdBQVU7a0NBRVYsNEVBQUNKLGtEQUFJQTs0QkFBQ08sTUFBSztzQ0FBVzs7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDTix5REFBTUE7d0JBQUNHLFdBQVU7d0JBQVlXLFNBQVE7d0JBQVFDLE1BQUs7a0NBQ2pELDRFQUFDQzs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsU0FBUTs0QkFDUkMsUUFBTzs0QkFDUGpCLFdBQVU7c0NBRVYsNEVBQUNrQjtnQ0FDQ0MsZUFBYztnQ0FDZEMsZ0JBQWU7Z0NBQ2ZDLGFBQWE7Z0NBQ2JDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxCO0tBN0RNeEI7QUErRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBzdGlja3kgdG9wLTAgei01MCBib3JkZXItYiBib3JkZXItcHJpbWFyeS1mb3JlZ3JvdW5kLzEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZXJpZiBpdGFsaWMgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgTXVzZXVtIFJlc3RhdXJhbnRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHNwYWNlLXgtNiB0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICBcIkhvbWVcIixcbiAgICAgICAgICAgICAgXCJNZW51XCIsXG4gICAgICAgICAgICAgIFwiUmVjaXBlc1wiLFxuICAgICAgICAgICAgICBcIkNoZWYncyBUYWJsZVwiLFxuICAgICAgICAgICAgICBcIkFib3V0XCIsXG4gICAgICAgICAgICAgIFwiQ29udGFjdFwiLFxuICAgICAgICAgICAgXS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvTG93ZXJDYXNlKCkgPT09IFwiaG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIi9cIlxuICAgICAgICAgICAgICAgICAgICAgIDogYC8ke2l0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCInXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiIFwiLCBcIi1cIil9YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXNlY29uZGFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXggYm9yZGVyLXdoaXRlIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tpbmdcIj5NYWtlIGEgUmVzZXJ2YXRpb248L0xpbms+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiaWNvblwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZtLTcgNmg3XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJCdXR0b24iLCJIZWFkZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiLCJocmVmIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJhc0NoaWxkIiwidmFyaWFudCIsInNpemUiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.tsx\n"));

/***/ })

});