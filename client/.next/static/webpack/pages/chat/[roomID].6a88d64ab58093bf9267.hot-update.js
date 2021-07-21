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


  var chatRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var submitHandle = function submitHandle(e) {
    e.preventDefault();
    socket.emit("send-msg", {
      username: username,
      msg: userChat
    });
    setUserChat("");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chats]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: chatRef,
      className: (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chat Content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), chats.map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: chat.username === username ? (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().sentMsg) : (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().recievedMsg),
          children: [chat.msg, " ", chat.username === username ? null : ": " + chat.username]
        }, chatkey++, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(ChatRoom, "+Oqhb0kbCnbKnoa/Aih0ZKGH1KI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJuZXdNc2ciLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsImNoYXRSZWYiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwibXNnIiwidXNlRWZmZWN0Iiwib24iLCJjaGF0SW5mbyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2hhdFN0eWxlIiwibWFwIiwiY2hhdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdBLElBQU1BLE1BQU0sR0FBR0Msb0RBQUUsQ0FBQyx1QkFBRCxDQUFqQjtBQUVBLElBQUlDLE9BQWUsR0FBRyxDQUF0QjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxNQUFKOztBQUVBLElBQU1DLFFBQTZCLEdBQUcsU0FBaENBLFFBQWdDLE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDOUQ7QUFDQTtBQUY4RCxrQkFHOUJDLCtDQUFRLENBQUMsRUFBRCxDQUhzQjtBQUFBLE1BR3ZEQyxRQUh1RDtBQUFBLE1BRzdDQyxXQUg2Qzs7QUFBQSxtQkFJcENGLCtDQUFRLENBQWEsRUFBYixDQUo0QjtBQUFBLE1BSXZERyxLQUp1RDtBQUFBLE1BSWhEQyxRQUpnRCxrQkFNOUQ7QUFDQTs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxFQUF0Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQXlDO0FBQzVEQSxLQUFDLENBQUNDLGNBQUY7QUFDQWpCLFVBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQ3RCWixjQUFRLEVBQUVBLFFBRFk7QUFFdEJhLFNBQUcsRUFBRVY7QUFGaUIsS0FBeEI7QUFJQUMsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEdBUEQ7O0FBU0FVLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUliLE1BQUosRUFBWTtBQUNWUCxZQUFNLENBQUNrQixJQUFQLENBQVksVUFBWixFQUF3QjtBQUN0QlosZ0JBQVEsRUFBRUEsUUFEWTtBQUV0QkMsY0FBTSxFQUFFQTtBQUZjLE9BQXhCO0FBS0FQLFlBQU0sQ0FBQ3FCLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFVBQUNGLEdBQUQsRUFBUztBQUMvQlAsZ0JBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsNktBQWVBLEtBQWYsSUFBc0I7QUFBRUwsb0JBQVEsRUFBRSxLQUFaO0FBQW1CYSxlQUFHLEVBQUVBO0FBQXhCLFdBQXRCO0FBQUEsU0FBRCxDQUFSO0FBQ0QsT0FGRDtBQUdBbkIsWUFBTSxDQUFDcUIsRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBWjtBQUNBQyxnQkFBUSxDQUFDLFVBQUNELEtBQUQ7QUFBQSw2S0FBZUEsS0FBZixJQUFzQlcsUUFBdEI7QUFBQSxTQUFELENBQVI7QUFDRCxPQUhEO0FBSUQ7QUFDRixHQWZRLEVBZU4sQ0FBQ2YsTUFBRCxDQWZNLENBQVQ7QUFnQkFhLGtEQUFTLENBQUMsWUFBTTtBQUNkUCxXQUFPLENBQUNZLE9BQVIsQ0FBZ0JDLFNBQWhCLEdBQTRCYixPQUFPLENBQUNZLE9BQVIsQ0FBZ0JFLFlBQTVDO0FBQ0QsR0FGUSxFQUVOLENBQUNoQixLQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVFLE9BQVY7QUFBbUIsZUFBUyxFQUFFZSw4RUFBOUI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdqQixLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBRUUsbUJBQVMsRUFDUEEsSUFBSSxDQUFDeEIsUUFBTCxLQUFrQkEsUUFBbEIsR0FDSXNCLHdFQURKLEdBRUlBLDRFQUxSO0FBQUEscUJBUUdFLElBQUksQ0FBQ1gsR0FSUixFQVFhLEdBUmIsRUFTR1csSUFBSSxDQUFDeEIsUUFBTCxLQUFrQkEsUUFBbEIsR0FBNkIsSUFBN0IsR0FBb0MsT0FBT3dCLElBQUksQ0FBQ3hCLFFBVG5EO0FBQUEsV0FDT0osT0FBTyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkU7QUFBTSxlQUFTLEVBQUUwQix5RUFBakI7QUFBcUMsY0FBUSxFQUFFYixZQUEvQztBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUVOLFFBRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDTyxDQUFELEVBQTRDO0FBQ3BETixxQkFBVyxDQUFDTSxDQUFDLENBQUNlLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXBFRDs7R0FBTTNCLFE7O0tBQUFBLFE7QUFxRU4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC9bcm9vbUlEXS42YTg4ZDY0YWI1ODA5M2JmOTI2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2hhdFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvY2hhdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcbmludGVyZmFjZSBSb29tUHJvcHMge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBzdHJpbmdbXTtcclxuICByb29tSUQ6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xyXG59XHJcbmludGVyZmFjZSBDaGF0SW5mbyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIik7XHJcblxyXG5sZXQgY2hhdGtleTogbnVtYmVyID0gMDtcclxubGV0IG5ld0NoYXRzOiBzdHJpbmdbXTtcclxubGV0IG5ld01zZzogc3RyaW5nO1xyXG5cclxuY29uc3QgQ2hhdFJvb206IFJlYWN0LkZDPFJvb21Qcm9wcz4gPSAoeyB1c2VybmFtZSwgcm9vbUlEIH0pID0+IHtcclxuICAvLyAqKipcclxuICAvLyBTdGF0ZXNcclxuICBjb25zdCBbdXNlckNoYXQsIHNldFVzZXJDaGF0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGU8Q2hhdEluZm9bXT4oW10pO1xyXG5cclxuICAvLyAqKlxyXG4gIC8vIFJlZmVyZW5jZVxyXG4gIGNvbnN0IGNoYXRSZWYgPSB1c2VSZWYoKSBhcyBNdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdChcInNlbmQtbXNnXCIsIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBtc2c6IHVzZXJDaGF0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRVc2VyQ2hhdChcIlwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvb21JRCkge1xyXG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5Sb29tXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcm9vbUlEOiByb29tSUQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0Lm9uKFwiam9pbmVkUm9vbVwiLCAobXNnKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hhdHMoKGNoYXRzKSA9PiBbLi4uY2hhdHMsIHsgdXNlcm5hbWU6IFwiYm90XCIsIG1zZzogbXNnIH1dKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNvY2tldC5vbihcInJlY2lldmVkLW1zZ1wiLCAoY2hhdEluZm8pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGF0cyk7XHJcbiAgICAgICAgc2V0Q2hhdHMoKGNoYXRzKSA9PiBbLi4uY2hhdHMsIGNoYXRJbmZvXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb29tSURdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hhdFJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXRSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgfSwgW2NoYXRzXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgcmVmPXtjaGF0UmVmfSBjbGFzc05hbWU9e2NoYXRTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICA8aDM+Q2hhdCBDb250ZW50PC9oMz5cclxuICAgICAgICB7Y2hhdHMubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17Y2hhdGtleSsrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIGNoYXQudXNlcm5hbWUgPT09IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICA/IGNoYXRTdHlsZS5zZW50TXNnXHJcbiAgICAgICAgICAgICAgICA6IGNoYXRTdHlsZS5yZWNpZXZlZE1zZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGF0Lm1zZ317XCIgXCJ9XHJcbiAgICAgICAgICAgIHtjaGF0LnVzZXJuYW1lID09PSB1c2VybmFtZSA/IG51bGwgOiBcIjogXCIgKyBjaGF0LnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjaGF0U3R5bGUuaW5wdXRCb3h9IG9uU3VibWl0PXtzdWJtaXRIYW5kbGV9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJDaGF0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyQ2hhdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9