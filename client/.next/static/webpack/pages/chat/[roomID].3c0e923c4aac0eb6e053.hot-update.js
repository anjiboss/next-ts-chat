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
        lineNumber: 52,
        columnNumber: 9
      }, _this), chats.map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: chat.msg
        }, chatkey++, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
        lineNumber: 59,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJuZXdNc2ciLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsInN1Ym1pdEhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJtc2ciLCJ1c2VFZmZlY3QiLCJvbiIsImNoYXRJbmZvIiwiY29uc29sZSIsImxvZyIsImNoYXRTdHlsZSIsIm1hcCIsImNoYXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFZQSxJQUFNQSxNQUFNLEdBQUdDLG9EQUFFLENBQUMsdUJBQUQsQ0FBakI7QUFFQSxJQUFJQyxPQUFlLEdBQUcsQ0FBdEI7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsTUFBSjs7QUFFQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQzlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEc0I7QUFBQSxNQUN2REMsUUFEdUQ7QUFBQSxNQUM3Q0MsV0FENkM7O0FBQUEsbUJBRXBDRiwrQ0FBUSxDQUFhLEVBQWIsQ0FGNEI7QUFBQSxNQUV2REcsS0FGdUQ7QUFBQSxNQUVoREMsUUFGZ0Q7O0FBRzlELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBeUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBZixVQUFNLENBQUNnQixJQUFQLENBQVksVUFBWixFQUF3QjtBQUN0QlYsY0FBUSxFQUFFQSxRQURZO0FBRXRCVyxTQUFHLEVBQUVSO0FBRmlCLEtBQXhCO0FBSUFDLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDRCxHQVBEOztBQVNBUSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxNQUFKLEVBQVk7QUFDVlAsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLFVBQVosRUFBd0I7QUFDdEJWLGdCQUFRLEVBQUVBLFFBRFk7QUFFdEJDLGNBQU0sRUFBRUE7QUFGYyxPQUF4QjtBQUtBUCxZQUFNLENBQUNtQixFQUFQLENBQVUsWUFBVixFQUF3QixVQUFDRixHQUFELEVBQVM7QUFDL0JMLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLDZLQUFlQSxLQUFmLElBQXNCO0FBQUVMLG9CQUFRLEVBQUUsS0FBWjtBQUFtQlcsZUFBRyxFQUFFQTtBQUF4QixXQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHQWpCLFlBQU0sQ0FBQ21CLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUN0Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQUMsZ0JBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsNktBQWVBLEtBQWYsSUFBc0JTLFFBQXRCO0FBQUEsU0FBRCxDQUFSO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0FmUSxFQWVOLENBQUNiLE1BQUQsQ0FmTSxDQUFUO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVnQiw4RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdaLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFBLG9CQUFzQkEsSUFBSSxDQUFDUjtBQUEzQixXQUFVZixPQUFPLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFRRTtBQUFNLGVBQVMsRUFBRXFCLHlFQUFqQjtBQUFxQyxjQUFRLEVBQUVWLFlBQS9DO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGFBQUssRUFBRUosUUFGVDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNLLENBQUQsRUFBNEM7QUFDcERKLHFCQUFXLENBQUNJLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FoREQ7O0dBQU10QixROztLQUFBQSxRO0FBaUROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQvW3Jvb21JRF0uM2MwZTkyM2M0YWFjMGViNmUwNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGF0U3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jaGF0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgUm9vbVByb3BzIHtcclxuICB1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgc3RyaW5nW107XHJcbiAgcm9vbUlEOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcclxufVxyXG5pbnRlcmZhY2UgQ2hhdEluZm8ge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIpO1xyXG5cclxubGV0IGNoYXRrZXk6IG51bWJlciA9IDA7XHJcbmxldCBuZXdDaGF0czogc3RyaW5nW107XHJcbmxldCBuZXdNc2c6IHN0cmluZztcclxuXHJcbmNvbnN0IENoYXRSb29tOiBSZWFjdC5GQzxSb29tUHJvcHM+ID0gKHsgdXNlcm5hbWUsIHJvb21JRCB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJDaGF0LCBzZXRVc2VyQ2hhdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlPENoYXRJbmZvW10+KFtdKTtcclxuICBjb25zdCBzdWJtaXRIYW5kbGUgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNvY2tldC5lbWl0KFwic2VuZC1tc2dcIiwge1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIG1zZzogdXNlckNoYXQsXHJcbiAgICB9KTtcclxuICAgIHNldFVzZXJDaGF0KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm9vbUlEKSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pblJvb21cIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICByb29tSUQ6IHJvb21JRCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQub24oXCJqb2luZWRSb29tXCIsIChtc2cpID0+IHtcclxuICAgICAgICBzZXRDaGF0cygoY2hhdHMpID0+IFsuLi5jaGF0cywgeyB1c2VybmFtZTogXCJib3RcIiwgbXNnOiBtc2cgfV0pO1xyXG4gICAgICB9KTtcclxuICAgICAgc29ja2V0Lm9uKFwicmVjaWV2ZWQtbXNnXCIsIChjaGF0SW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXRzKTtcclxuICAgICAgICBzZXRDaGF0cygoY2hhdHMpID0+IFsuLi5jaGF0cywgY2hhdEluZm9dKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3Jvb21JRF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hhdFN0eWxlLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgIDxoMz5DaGF0IENvbnRlbnQ8L2gzPlxyXG4gICAgICAgIHtjaGF0cy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtjaGF0a2V5Kyt9PntjaGF0Lm1zZ308L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NoYXRTdHlsZS5pbnB1dEJveH0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17dXNlckNoYXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJDaGF0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFJvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=