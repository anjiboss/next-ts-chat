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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      userChat = _useState[0],
      setUserChat = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      chats = _useState2[0],
      setChats = _useState2[1];

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Chat Content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), chats.map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: chat.msg
        }, chatkey++, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(ChatRoom, "2Jl0Cl2JCsyl2iOk+PfAgrZXXpQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJuZXdNc2ciLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsInN1Ym1pdEhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJtc2ciLCJ1c2VFZmZlY3QiLCJvbiIsImNoYXRJbmZvIiwiY29uc29sZSIsImxvZyIsImNoYXRTdHlsZSIsIm1hcCIsImNoYXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQSxJQUFNQSxNQUFNLEdBQUdDLG9EQUFFLENBQUMsdUJBQUQsQ0FBakI7QUFFQSxJQUFJQyxPQUFlLEdBQUcsQ0FBdEI7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsTUFBSjs7QUFFQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQzlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEc0I7QUFBQSxNQUN2REMsUUFEdUQ7QUFBQSxNQUM3Q0MsV0FENkM7O0FBQUEsbUJBRXBDRiwrQ0FBUSxDQUFhLEVBQWIsQ0FGNEI7QUFBQSxNQUV2REcsS0FGdUQ7QUFBQSxNQUVoREMsUUFGZ0Q7O0FBRzlELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBeUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBZixVQUFNLENBQUNnQixJQUFQLENBQVksVUFBWixFQUF3QjtBQUN0QlYsY0FBUSxFQUFFQSxRQURZO0FBRXRCVyxTQUFHLEVBQUVSO0FBRmlCLEtBQXhCO0FBSUFDLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDRCxHQVBEOztBQVNBUSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxNQUFKLEVBQVk7QUFDVlAsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLFVBQVosRUFBd0I7QUFDdEJWLGdCQUFRLEVBQUVBLFFBRFk7QUFFdEJDLGNBQU0sRUFBRUE7QUFGYyxPQUF4QjtBQUtBUCxZQUFNLENBQUNtQixFQUFQLENBQVUsWUFBVixFQUF3QixVQUFDRixHQUFELEVBQVM7QUFDL0JMLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLDZLQUFlQSxLQUFmLElBQXNCO0FBQUVMLG9CQUFRLEVBQUUsS0FBWjtBQUFtQlcsZUFBRyxFQUFFQTtBQUF4QixXQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHQWpCLFlBQU0sQ0FBQ21CLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUN0Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQUMsZ0JBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsNktBQWVBLEtBQWYsSUFBc0JTLFFBQXRCO0FBQUEsU0FBRCxDQUFSO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0FmUSxFQWVOLENBQUNiLE1BQUQsQ0FmTSxDQUFUO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVnQiw4RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdaLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFBLG9CQUFzQkEsSUFBSSxDQUFDUjtBQUEzQixXQUFVZixPQUFPLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFRRTtBQUFNLGVBQVMsRUFBRXFCLHlFQUFqQjtBQUFxQyxjQUFRLEVBQUVWLFlBQS9DO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGFBQUssRUFBRUosUUFGVDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNLLENBQUQsRUFBNEM7QUFDcERKLHFCQUFXLENBQUNJLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FoREQ7O0dBQU10QixROztLQUFBQSxRO0FBaUROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQvW3Jvb21JRF0uOTc0NDY3NjA5MmY2YTdiMTJmNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGF0U3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFJvb21Qcm9wcyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IHN0cmluZ1tdO1xyXG4gIHJvb21JRDogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XHJcbn1cclxuaW50ZXJmYWNlIENoYXRJbmZvIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIG1zZzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiKTtcclxuXHJcbmxldCBjaGF0a2V5OiBudW1iZXIgPSAwO1xyXG5sZXQgbmV3Q2hhdHM6IHN0cmluZ1tdO1xyXG5sZXQgbmV3TXNnOiBzdHJpbmc7XHJcblxyXG5jb25zdCBDaGF0Um9vbTogUmVhY3QuRkM8Um9vbVByb3BzPiA9ICh7IHVzZXJuYW1lLCByb29tSUQgfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyQ2hhdCwgc2V0VXNlckNoYXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZTxDaGF0SW5mb1tdPihbXSk7XHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdChcInNlbmQtbXNnXCIsIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBtc2c6IHVzZXJDaGF0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRVc2VyQ2hhdChcIlwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvb21JRCkge1xyXG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5Sb29tXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcm9vbUlEOiByb29tSUQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0Lm9uKFwiam9pbmVkUm9vbVwiLCAobXNnKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hhdHMoKGNoYXRzKSA9PiBbLi4uY2hhdHMsIHsgdXNlcm5hbWU6IFwiYm90XCIsIG1zZzogbXNnIH1dKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNvY2tldC5vbihcInJlY2lldmVkLW1zZ1wiLCAoY2hhdEluZm8pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGF0cyk7XHJcbiAgICAgICAgc2V0Q2hhdHMoKGNoYXRzKSA9PiBbLi4uY2hhdHMsIGNoYXRJbmZvXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb29tSURdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NoYXRTdHlsZS5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICA8aDM+Q2hhdCBDb250ZW50PC9oMz5cclxuICAgICAgICB7Y2hhdHMubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17Y2hhdGtleSsrfT57Y2hhdC5tc2d9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjaGF0U3R5bGUuaW5wdXRCb3h9IG9uU3VibWl0PXtzdWJtaXRIYW5kbGV9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJDaGF0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyQ2hhdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9