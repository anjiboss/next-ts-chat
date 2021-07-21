self["webpackHotUpdate_N_E"]("pages/chat/[roomID]",{

/***/ "./Components/ChatRoom.tsx":
/*!*********************************!*\
  !*** ./Components/ChatRoom.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_IT_223_STU_009_node_next_ts_chat_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/chat.module.css */ "./styles/chat.module.css");
/* harmony import */ var _styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\IT-223-STU-009\\node\\next-ts-chat\\client\\Components\\ChatRoom.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)("http://localhost:5000");
var chatkey = 0;
var newChats;
var newMsg;

var ChatRoom = function ChatRoom(_ref) {
  _s();

  var username = _ref.username,
      roomID = _ref.roomID;

  // ***
  // States
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      userChat = _useState[0],
      setUserChat = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      chats = _useState2[0],
      setChats = _useState2[1]; // **
  // Reference


  var chatRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var submitHandle = function submitHandle(e) {
    e.preventDefault();
    socket.emit("send-msg", {
      username: username,
      msg: userChat
    });
    setUserChat("");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(chatRef.current);

    if (roomID) {
      socket.emit("joinRoom", {
        username: username,
        roomID: roomID
      });
      socket.on("joinedRoom", function (msg) {
        setChats(function (chats) {
          return [].concat((0,C_Users_IT_223_STU_009_node_next_ts_chat_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chats), [{
            username: "bot",
            msg: msg
          }]);
        });
      });
      socket.on("recieved-msg", function (chatInfo) {
        console.log(chats);
        setChats(function (chats) {
          return [].concat((0,C_Users_IT_223_STU_009_node_next_ts_chat_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chats), [chatInfo]);
        });
      });
    }
  }, [roomID]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: chatRef,
      className: (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chat Content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), chats.map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: chat.username === username ? (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().sentMsg) : (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().recievedMsg),
          children: [chat.msg, " ", chat.username === username ? null : ": " + chat.username]
        }, chatkey++, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
      onSubmit: submitHandle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        value: userChat,
        onChange: function onChange(e) {
          setUserChat(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(ChatRoom, "JDhZWl9GVJF3t1SEmzpDGQjP6UQ=");

_c = ChatRoom;
/* harmony default export */ __webpack_exports__["default"] = (ChatRoom);

var _c;

$RefreshReg$(_c, "ChatRoom");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJuZXdNc2ciLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsImNoYXRSZWYiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwibXNnIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJvbiIsImNoYXRJbmZvIiwiY2hhdFN0eWxlIiwibWFwIiwiY2hhdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdBLElBQU1BLE1BQU0sR0FBR0Msb0RBQUUsQ0FBQyx1QkFBRCxDQUFqQjtBQUVBLElBQUlDLE9BQWUsR0FBRyxDQUF0QjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxNQUFKOztBQUVBLElBQU1DLFFBQTZCLEdBQUcsU0FBaENBLFFBQWdDLE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDOUQ7QUFDQTtBQUY4RCxrQkFHOUJDLCtDQUFRLENBQUMsRUFBRCxDQUhzQjtBQUFBLE1BR3ZEQyxRQUh1RDtBQUFBLE1BRzdDQyxXQUg2Qzs7QUFBQSxtQkFJcENGLCtDQUFRLENBQWEsRUFBYixDQUo0QjtBQUFBLE1BSXZERyxLQUp1RDtBQUFBLE1BSWhEQyxRQUpnRCxrQkFNOUQ7QUFDQTs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQXlDO0FBQzVEQSxLQUFDLENBQUNDLGNBQUY7QUFDQWpCLFVBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQ3RCWixjQUFRLEVBQUVBLFFBRFk7QUFFdEJhLFNBQUcsRUFBRVY7QUFGaUIsS0FBeEI7QUFJQUMsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEdBUEQ7O0FBU0FVLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsT0FBTyxDQUFDVSxPQUFwQjs7QUFDQSxRQUFJaEIsTUFBSixFQUFZO0FBQ1ZQLFlBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQ3RCWixnQkFBUSxFQUFFQSxRQURZO0FBRXRCQyxjQUFNLEVBQUVBO0FBRmMsT0FBeEI7QUFLQVAsWUFBTSxDQUFDd0IsRUFBUCxDQUFVLFlBQVYsRUFBd0IsVUFBQ0wsR0FBRCxFQUFTO0FBQy9CUCxnQkFBUSxDQUFDLFVBQUNELEtBQUQ7QUFBQSw2S0FBZUEsS0FBZixJQUFzQjtBQUFFTCxvQkFBUSxFQUFFLEtBQVo7QUFBbUJhLGVBQUcsRUFBRUE7QUFBeEIsV0FBdEI7QUFBQSxTQUFELENBQVI7QUFDRCxPQUZEO0FBR0FuQixZQUFNLENBQUN3QixFQUFQLENBQVUsY0FBVixFQUEwQixVQUFDQyxRQUFELEVBQWM7QUFDdENKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0FDLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLDZLQUFlQSxLQUFmLElBQXNCYyxRQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BSEQ7QUFJRDtBQUNGLEdBaEJRLEVBZ0JOLENBQUNsQixNQUFELENBaEJNLENBQVQ7QUFpQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRU0sT0FBVjtBQUFtQixlQUFTLEVBQUVhLDhFQUE5QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR2YsS0FBSyxDQUFDZ0IsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUVFLG1CQUFTLEVBQ1BBLElBQUksQ0FBQ3RCLFFBQUwsS0FBa0JBLFFBQWxCLEdBQ0lvQix3RUFESixHQUVJQSw0RUFMUjtBQUFBLHFCQVFHRSxJQUFJLENBQUNULEdBUlIsRUFRYSxHQVJiLEVBU0dTLElBQUksQ0FBQ3RCLFFBQUwsS0FBa0JBLFFBQWxCLEdBQTZCLElBQTdCLEdBQW9DLE9BQU9zQixJQUFJLENBQUN0QixRQVRuRDtBQUFBLFdBQ09KLE9BQU8sRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBa0JFO0FBQU0sZUFBUyxFQUFFd0IseUVBQWpCO0FBQXFDLGNBQVEsRUFBRVgsWUFBL0M7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsYUFBSyxFQUFFTixRQUZUO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ08sQ0FBRCxFQUE0QztBQUNwRE4scUJBQVcsQ0FBQ00sQ0FBQyxDQUFDYSxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FsRUQ7O0dBQU16QixROztLQUFBQSxRO0FBbUVOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQvW3Jvb21JRF0uNmU2YTc5MTAzNjNjNjRkOTc1MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNoYXRTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2NoYXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgUm9vbVByb3BzIHtcclxuICB1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgc3RyaW5nW107XHJcbiAgcm9vbUlEOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcclxufVxyXG5pbnRlcmZhY2UgQ2hhdEluZm8ge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIpO1xyXG5cclxubGV0IGNoYXRrZXk6IG51bWJlciA9IDA7XHJcbmxldCBuZXdDaGF0czogc3RyaW5nW107XHJcbmxldCBuZXdNc2c6IHN0cmluZztcclxuXHJcbmNvbnN0IENoYXRSb29tOiBSZWFjdC5GQzxSb29tUHJvcHM+ID0gKHsgdXNlcm5hbWUsIHJvb21JRCB9KSA9PiB7XHJcbiAgLy8gKioqXHJcbiAgLy8gU3RhdGVzXHJcbiAgY29uc3QgW3VzZXJDaGF0LCBzZXRVc2VyQ2hhdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlPENoYXRJbmZvW10+KFtdKTtcclxuXHJcbiAgLy8gKipcclxuICAvLyBSZWZlcmVuY2VcclxuICBjb25zdCBjaGF0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdChcInNlbmQtbXNnXCIsIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBtc2c6IHVzZXJDaGF0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRVc2VyQ2hhdChcIlwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY2hhdFJlZi5jdXJyZW50KTtcclxuICAgIGlmIChyb29tSUQpIHtcclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luUm9vbVwiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHJvb21JRDogcm9vbUlELFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5vbihcImpvaW5lZFJvb21cIiwgKG1zZykgPT4ge1xyXG4gICAgICAgIHNldENoYXRzKChjaGF0cykgPT4gWy4uLmNoYXRzLCB7IHVzZXJuYW1lOiBcImJvdFwiLCBtc2c6IG1zZyB9XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJyZWNpZXZlZC1tc2dcIiwgKGNoYXRJbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhdHMpO1xyXG4gICAgICAgIHNldENoYXRzKChjaGF0cykgPT4gWy4uLmNoYXRzLCBjaGF0SW5mb10pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm9vbUlEXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgcmVmPXtjaGF0UmVmfSBjbGFzc05hbWU9e2NoYXRTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICA8aDM+Q2hhdCBDb250ZW50PC9oMz5cclxuICAgICAgICB7Y2hhdHMubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17Y2hhdGtleSsrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIGNoYXQudXNlcm5hbWUgPT09IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICA/IGNoYXRTdHlsZS5zZW50TXNnXHJcbiAgICAgICAgICAgICAgICA6IGNoYXRTdHlsZS5yZWNpZXZlZE1zZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGF0Lm1zZ317XCIgXCJ9XHJcbiAgICAgICAgICAgIHtjaGF0LnVzZXJuYW1lID09PSB1c2VybmFtZSA/IG51bGwgOiBcIjogXCIgKyBjaGF0LnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjaGF0U3R5bGUuaW5wdXRCb3h9IG9uU3VibWl0PXtzdWJtaXRIYW5kbGV9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJDaGF0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyQ2hhdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9