"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/booking/page",{

/***/ "(app-pages-browser)/./components/ui/time-slot-picker.tsx":
/*!********************************************!*\
  !*** ./components/ui/time-slot-picker.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TimeSlotPicker: function() { return /* binding */ TimeSlotPicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"(app-pages-browser)/./components/ui/scroll-area.tsx\");\n/* __next_internal_client_entry_do_not_use__ TimeSlotPicker auto */ \n\n\n\nfunction TimeSlotPicker(param) {\n    let { availableSlots, selectedTime, onSelectTime } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold mb-2\",\n                children: \"Available Times\"\n            }, void 0, false, {\n                fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/ui/time-slot-picker.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            availableSlots.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500\",\n                children: \"No available times for the selected date.\"\n            }, void 0, false, {\n                fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/ui/time-slot-picker.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_3__.ScrollArea, {\n                className: \"h-[300px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 gap-2\",\n                    children: availableSlots.map((slot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: selectedTime === slot ? \"default\" : \"outline\",\n                            onClick: ()=>onSelectTime(slot),\n                            className: \"w-full border-secondary text-calendar bg-foreground\",\n                            children: slot\n                        }, slot, false, {\n                            fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/ui/time-slot-picker.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/ui/time-slot-picker.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/ui/time-slot-picker.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/firthmaneesuksri/Desktop/restaurant-museum/components/ui/time-slot-picker.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = TimeSlotPicker;\nvar _c;\n$RefreshReg$(_c, \"TimeSlotPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvdGltZS1zbG90LXBpY2tlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrQjtBQUNpQjtBQUNTO0FBUWxELFNBQVNHLGVBQWUsS0FJVDtRQUpTLEVBQzdCQyxjQUFjLEVBQ2RDLFlBQVksRUFDWkMsWUFBWSxFQUNRLEdBSlM7SUFLN0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUI7Ozs7OztZQUNsQ0osZUFBZU0sTUFBTSxLQUFLLGtCQUN6Qiw4REFBQ0M7Z0JBQUVILFdBQVU7MEJBQWdCOzs7OztxQ0FJN0IsOERBQUNOLGtFQUFVQTtnQkFBQ00sV0FBVTswQkFDcEIsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaSixlQUFlUSxHQUFHLENBQUMsQ0FBQ0MscUJBQ25CLDhEQUFDWix5REFBTUE7NEJBRUxhLFNBQVNULGlCQUFpQlEsT0FBTyxZQUFZOzRCQUM3Q0UsU0FBUyxJQUFNVCxhQUFhTzs0QkFDNUJMLFdBQVU7c0NBRVRLOzJCQUxJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXJCO0tBOUJnQlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS90aW1lLXNsb3QtcGlja2VyLnRzeD81MWU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYVwiO1xuXG5pbnRlcmZhY2UgVGltZVNsb3RQaWNrZXJQcm9wcyB7XG4gIGF2YWlsYWJsZVNsb3RzOiBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRUaW1lPzogc3RyaW5nO1xuICBvblNlbGVjdFRpbWU6ICh0aW1lOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lU2xvdFBpY2tlcih7XG4gIGF2YWlsYWJsZVNsb3RzLFxuICBzZWxlY3RlZFRpbWUsXG4gIG9uU2VsZWN0VGltZSxcbn06IFRpbWVTbG90UGlja2VyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMlwiPkF2YWlsYWJsZSBUaW1lczwvaDM+XG4gICAgICB7YXZhaWxhYmxlU2xvdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgTm8gYXZhaWxhYmxlIHRpbWVzIGZvciB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPFNjcm9sbEFyZWEgY2xhc3NOYW1lPVwiaC1bMzAwcHhdXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICB7YXZhaWxhYmxlU2xvdHMubWFwKChzbG90KSA9PiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3Nsb3R9XG4gICAgICAgICAgICAgICAgdmFyaWFudD17c2VsZWN0ZWRUaW1lID09PSBzbG90ID8gXCJkZWZhdWx0XCIgOiBcIm91dGxpbmVcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFRpbWUoc2xvdCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1zZWNvbmRhcnkgdGV4dC1jYWxlbmRhciBiZy1mb3JlZ3JvdW5kXCIgXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2xvdH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY3JvbGxBcmVhPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlNjcm9sbEFyZWEiLCJUaW1lU2xvdFBpY2tlciIsImF2YWlsYWJsZVNsb3RzIiwic2VsZWN0ZWRUaW1lIiwib25TZWxlY3RUaW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJsZW5ndGgiLCJwIiwibWFwIiwic2xvdCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/time-slot-picker.tsx\n"));

/***/ })

});