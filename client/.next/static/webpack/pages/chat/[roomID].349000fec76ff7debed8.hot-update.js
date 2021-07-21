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


  var chatContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

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
        lineNumber: 58,
        columnNumber: 9
      }, _this), chats.map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: chat.username === username ? (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().sentMsg) : (_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default().recievedMsg),
          children: [chat.msg, " ", chat.username === username ? null : ": " + chat.username]
        }, chatkey++, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(ChatRoom, "tJqi7p/1aP9nomxcLweMwkCdA90=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJuZXdNc2ciLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsImNoYXRDb250YWluZXIiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwibXNnIiwidXNlRWZmZWN0Iiwib24iLCJjaGF0SW5mbyIsImNvbnNvbGUiLCJsb2ciLCJjaGF0U3R5bGUiLCJtYXAiLCJjaGF0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBV0EsSUFBTUEsTUFBTSxHQUFHQyxvREFBRSxDQUFDLHVCQUFELENBQWpCO0FBRUEsSUFBSUMsT0FBZSxHQUFHLENBQXRCO0FBQ0EsSUFBSUMsUUFBSjtBQUNBLElBQUlDLE1BQUo7O0FBRUEsSUFBTUMsUUFBNkIsR0FBRyxTQUFoQ0EsUUFBZ0MsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUM5RDtBQUNBO0FBRjhELGtCQUc5QkMsK0NBQVEsQ0FBQyxFQUFELENBSHNCO0FBQUEsTUFHdkRDLFFBSHVEO0FBQUEsTUFHN0NDLFdBSDZDOztBQUFBLG1CQUlwQ0YsK0NBQVEsQ0FBYSxFQUFiLENBSjRCO0FBQUEsTUFJdkRHLEtBSnVEO0FBQUEsTUFJaERDLFFBSmdELGtCQU05RDtBQUNBOzs7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLDZDQUFNLENBQWlCLElBQWpCLENBQTVCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBeUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBakIsVUFBTSxDQUFDa0IsSUFBUCxDQUFZLFVBQVosRUFBd0I7QUFDdEJaLGNBQVEsRUFBRUEsUUFEWTtBQUV0QmEsU0FBRyxFQUFFVjtBQUZpQixLQUF4QjtBQUlBQyxlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0QsR0FQRDs7QUFTQVUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWIsTUFBSixFQUFZO0FBQ1ZQLFlBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQ3RCWixnQkFBUSxFQUFFQSxRQURZO0FBRXRCQyxjQUFNLEVBQUVBO0FBRmMsT0FBeEI7QUFLQVAsWUFBTSxDQUFDcUIsRUFBUCxDQUFVLFlBQVYsRUFBd0IsVUFBQ0YsR0FBRCxFQUFTO0FBQy9CUCxnQkFBUSxDQUFDLFVBQUNELEtBQUQ7QUFBQSw2S0FBZUEsS0FBZixJQUFzQjtBQUFFTCxvQkFBUSxFQUFFLEtBQVo7QUFBbUJhLGVBQUcsRUFBRUE7QUFBeEIsV0FBdEI7QUFBQSxTQUFELENBQVI7QUFDRCxPQUZEO0FBR0FuQixZQUFNLENBQUNxQixFQUFQLENBQVUsY0FBVixFQUEwQixVQUFDQyxRQUFELEVBQWM7QUFDdENDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFaO0FBQ0FDLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLDZLQUFlQSxLQUFmLElBQXNCVyxRQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BSEQ7QUFJRDtBQUNGLEdBZlEsRUFlTixDQUFDZixNQUFELENBZk0sQ0FBVDtBQWdCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFa0IsOEVBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHZCxLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1Q7QUFFRSxtQkFBUyxFQUNQQSxJQUFJLENBQUNyQixRQUFMLEtBQWtCQSxRQUFsQixHQUNJbUIsd0VBREosR0FFSUEsNEVBTFI7QUFBQSxxQkFRR0UsSUFBSSxDQUFDUixHQVJSLEVBUWEsR0FSYixFQVNHUSxJQUFJLENBQUNyQixRQUFMLEtBQWtCQSxRQUFsQixHQUE2QixJQUE3QixHQUFvQyxPQUFPcUIsSUFBSSxDQUFDckIsUUFUbkQ7QUFBQSxXQUNPSixPQUFPLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRTtBQUFNLGVBQVMsRUFBRXVCLHlFQUFqQjtBQUFxQyxjQUFRLEVBQUVWLFlBQS9DO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGFBQUssRUFBRU4sUUFGVDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNPLENBQUQsRUFBNEM7QUFDcEROLHFCQUFXLENBQUNNLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBakVEOztHQUFNeEIsUTs7S0FBQUEsUTtBQWtFTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0L1tyb29tSURdLjM0OTAwMGZlYzc2ZmY3ZGViZWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGF0U3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFJvb21Qcm9wcyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IHN0cmluZ1tdO1xyXG4gIHJvb21JRDogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XHJcbn1cclxuaW50ZXJmYWNlIENoYXRJbmZvIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIG1zZzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiKTtcclxuXHJcbmxldCBjaGF0a2V5OiBudW1iZXIgPSAwO1xyXG5sZXQgbmV3Q2hhdHM6IHN0cmluZ1tdO1xyXG5sZXQgbmV3TXNnOiBzdHJpbmc7XHJcblxyXG5jb25zdCBDaGF0Um9vbTogUmVhY3QuRkM8Um9vbVByb3BzPiA9ICh7IHVzZXJuYW1lLCByb29tSUQgfSkgPT4ge1xyXG4gIC8vICoqKlxyXG4gIC8vIFN0YXRlc1xyXG4gIGNvbnN0IFt1c2VyQ2hhdCwgc2V0VXNlckNoYXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZTxDaGF0SW5mb1tdPihbXSk7XHJcblxyXG4gIC8vICoqXHJcbiAgLy8gUmVmZXJlbmNlXHJcbiAgY29uc3QgY2hhdENvbnRhaW5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJzZW5kLW1zZ1wiLCB7XHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgbXNnOiB1c2VyQ2hhdCxcclxuICAgIH0pO1xyXG4gICAgc2V0VXNlckNoYXQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb29tSUQpIHtcclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luUm9vbVwiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHJvb21JRDogcm9vbUlELFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5vbihcImpvaW5lZFJvb21cIiwgKG1zZykgPT4ge1xyXG4gICAgICAgIHNldENoYXRzKChjaGF0cykgPT4gWy4uLmNoYXRzLCB7IHVzZXJuYW1lOiBcImJvdFwiLCBtc2c6IG1zZyB9XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJyZWNpZXZlZC1tc2dcIiwgKGNoYXRJbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhdHMpO1xyXG4gICAgICAgIHNldENoYXRzKChjaGF0cykgPT4gWy4uLmNoYXRzLCBjaGF0SW5mb10pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm9vbUlEXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaGF0U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgzPkNoYXQgQ29udGVudDwvaDM+XHJcbiAgICAgICAge2NoYXRzLm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2NoYXRrZXkrK31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBjaGF0LnVzZXJuYW1lID09PSB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgPyBjaGF0U3R5bGUuc2VudE1zZ1xyXG4gICAgICAgICAgICAgICAgOiBjaGF0U3R5bGUucmVjaWV2ZWRNc2dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hhdC5tc2d9e1wiIFwifVxyXG4gICAgICAgICAgICB7Y2hhdC51c2VybmFtZSA9PT0gdXNlcm5hbWUgPyBudWxsIDogXCI6IFwiICsgY2hhdC51c2VybmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2hhdFN0eWxlLmlucHV0Qm94fSBvblN1Ym1pdD17c3VibWl0SGFuZGxlfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyQ2hhdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlckNoYXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaGF0Um9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==