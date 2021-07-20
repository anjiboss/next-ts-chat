/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[roomID]",{

/***/ "./Components/ChatRoom.tsx":
/*!*********************************!*\
  !*** ./Components/ChatRoom.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_anji_testData_next_ts_chat_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/chat.module.css */ \"./styles/chat.module.css\");\n/* harmony import */ var _styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/wrapper.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/anji/testData/next-ts-chat/client/Components/ChatRoom.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:5000\");\nvar chatkey = 0;\nvar newChats;\nvar newMsg;\n\nvar ChatRoom = function ChatRoom(_ref) {\n  _s();\n\n  var username = _ref.username,\n      roomID = _ref.roomID;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      userChat = _useState[0],\n      setUserChat = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      chats = _useState2[0],\n      setChats = _useState2[1];\n\n  var submitHandle = function submitHandle(e) {\n    e.preventDefault();\n    socket.emit(\"send-msg\", {\n      username: username,\n      msg: userChat\n    });\n    setUserChat(\"\");\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (roomID) {\n      socket.emit(\"joinRoom\", {\n        username: username,\n        roomID: roomID\n      });\n      socket.on(\"joinedRoom\", function (msg) {\n        setChats(function (chats) {\n          return [].concat((0,_home_anji_testData_next_ts_chat_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chats), [msg]);\n        });\n      });\n      socket.on(\"recieved-msg\", function (_ref2) {\n        var username = _ref2.username,\n            msg = _ref2.msg;\n        console.log(chats);\n        newMsg = username + \": \" + msg;\n        setChats(function (chats) {\n          return [].concat((0,_home_anji_testData_next_ts_chat_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chats), [newMsg]);\n        });\n      });\n    }\n  }, [roomID]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Chat Content\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), chats.map(function (chat) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: chat\n        }, chatkey++, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),\n      onSubmit: submitHandle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: userChat,\n        onChange: function onChange(e) {\n          setUserChat(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChatRoom, \"2Jl0Cl2JCsyl2iOk+PfAgrZXXpQ=\");\n\n_c = ChatRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatRoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatRoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3g/Yjk0MyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImNoYXRrZXkiLCJuZXdDaGF0cyIsIm5ld01zZyIsIkNoYXRSb29tIiwidXNlcm5hbWUiLCJyb29tSUQiLCJ1c2VTdGF0ZSIsInVzZXJDaGF0Iiwic2V0VXNlckNoYXQiLCJjaGF0cyIsInNldENoYXRzIiwic3VibWl0SGFuZGxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1pdCIsIm1zZyIsInVzZUVmZmVjdCIsIm9uIiwiY29uc29sZSIsImxvZyIsImNoYXRTdHlsZSIsIm1hcCIsImNoYXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxNQUFNLEdBQUdDLG9EQUFFLENBQUMsdUJBQUQsQ0FBakI7QUFFQSxJQUFJQyxPQUFlLEdBQUcsQ0FBdEI7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsTUFBSjs7QUFFQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQzlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEc0I7QUFBQSxNQUN2REMsUUFEdUQ7QUFBQSxNQUM3Q0MsV0FENkM7O0FBQUEsbUJBRXBDRiwrQ0FBUSxDQUFXLEVBQVgsQ0FGNEI7QUFBQSxNQUV2REcsS0FGdUQ7QUFBQSxNQUVoREMsUUFGZ0Q7O0FBRzlELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBeUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBZixVQUFNLENBQUNnQixJQUFQLENBQVksVUFBWixFQUF3QjtBQUN0QlYsY0FBUSxFQUFFQSxRQURZO0FBRXRCVyxTQUFHLEVBQUVSO0FBRmlCLEtBQXhCO0FBSUFDLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDRCxHQVBEOztBQVNBUSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxNQUFKLEVBQVk7QUFDVlAsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLFVBQVosRUFBd0I7QUFDdEJWLGdCQUFRLEVBQUVBLFFBRFk7QUFFdEJDLGNBQU0sRUFBRUE7QUFGYyxPQUF4QjtBQUtBUCxZQUFNLENBQUNtQixFQUFQLENBQVUsWUFBVixFQUF3QixVQUFDRixHQUFELEVBQVM7QUFDL0JMLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLHFLQUFlQSxLQUFmLElBQXNCTSxHQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHQWpCLFlBQU0sQ0FBQ21CLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLGlCQUF1QjtBQUFBLFlBQXBCYixRQUFvQixTQUFwQkEsUUFBb0I7QUFBQSxZQUFWVyxHQUFVLFNBQVZBLEdBQVU7QUFDL0NHLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0FQLGNBQU0sR0FBR0UsUUFBUSxHQUFHLElBQVgsR0FBa0JXLEdBQTNCO0FBQ0FMLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLHFLQUFlQSxLQUFmLElBQXNCUCxNQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BSkQ7QUFLRDtBQUNGLEdBaEJRLEVBZ0JOLENBQUNHLE1BQUQsQ0FoQk0sQ0FBVDtBQWlCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFZSw4RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdYLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFBLG9CQUFzQkE7QUFBdEIsV0FBVXRCLE9BQU8sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFO0FBQU0sZUFBUyxFQUFFb0IseUVBQWpCO0FBQXFDLGNBQVEsRUFBRVQsWUFBL0M7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsYUFBSyxFQUFFSixRQUZUO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRCxFQUE0QztBQUNwREoscUJBQVcsQ0FBQ0ksQ0FBQyxDQUFDVyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQWpERDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFrRE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL0NoYXRSb29tLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hhdFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvY2hhdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmludGVyZmFjZSBSb29tUHJvcHMge1xuICB1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgc3RyaW5nW107XG4gIHJvb21JRDogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIpO1xuXG5sZXQgY2hhdGtleTogbnVtYmVyID0gMDtcbmxldCBuZXdDaGF0czogc3RyaW5nW107XG5sZXQgbmV3TXNnOiBzdHJpbmc7XG5cbmNvbnN0IENoYXRSb29tOiBSZWFjdC5GQzxSb29tUHJvcHM+ID0gKHsgdXNlcm5hbWUsIHJvb21JRCB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyQ2hhdCwgc2V0VXNlckNoYXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3Qgc3VibWl0SGFuZGxlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5lbWl0KFwic2VuZC1tc2dcIiwge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgbXNnOiB1c2VyQ2hhdCxcbiAgICB9KTtcbiAgICBzZXRVc2VyQ2hhdChcIlwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb29tSUQpIHtcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pblJvb21cIiwge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHJvb21JRDogcm9vbUlELFxuICAgICAgfSk7XG5cbiAgICAgIHNvY2tldC5vbihcImpvaW5lZFJvb21cIiwgKG1zZykgPT4ge1xuICAgICAgICBzZXRDaGF0cygoY2hhdHMpID0+IFsuLi5jaGF0cywgbXNnXSk7XG4gICAgICB9KTtcbiAgICAgIHNvY2tldC5vbihcInJlY2lldmVkLW1zZ1wiLCAoeyB1c2VybmFtZSwgbXNnIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhdHMpO1xuICAgICAgICBuZXdNc2cgPSB1c2VybmFtZSArIFwiOiBcIiArIG1zZztcbiAgICAgICAgc2V0Q2hhdHMoKGNoYXRzKSA9PiBbLi4uY2hhdHMsIG5ld01zZ10pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm9vbUlEXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaGF0U3R5bGUuY2hhdENvbnRhaW5lcn0+XG4gICAgICAgIDxoMz5DaGF0IENvbnRlbnQ8L2gzPlxuICAgICAgICB7Y2hhdHMubWFwKChjaGF0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NoYXRrZXkrK30+e2NoYXR9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2hhdFN0eWxlLmlucHV0Qm94fSBvblN1Ym1pdD17c3VibWl0SGFuZGxlfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt1c2VyQ2hhdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VyQ2hhdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGF0Um9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/ChatRoom.tsx\n");

/***/ })

});