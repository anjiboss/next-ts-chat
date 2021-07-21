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
          children: chat
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJuZXdNc2ciLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsInN1Ym1pdEhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJtc2ciLCJ1c2VFZmZlY3QiLCJvbiIsImNoYXRJbmZvIiwiY29uc29sZSIsImxvZyIsImNoYXRTdHlsZSIsIm1hcCIsImNoYXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFZQSxJQUFNQSxNQUFNLEdBQUdDLG9EQUFFLENBQUMsdUJBQUQsQ0FBakI7QUFFQSxJQUFJQyxPQUFlLEdBQUcsQ0FBdEI7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsTUFBSjs7QUFFQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQzlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEc0I7QUFBQSxNQUN2REMsUUFEdUQ7QUFBQSxNQUM3Q0MsV0FENkM7O0FBQUEsbUJBRXBDRiwrQ0FBUSxDQUFhLEVBQWIsQ0FGNEI7QUFBQSxNQUV2REcsS0FGdUQ7QUFBQSxNQUVoREMsUUFGZ0Q7O0FBRzlELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBeUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBZixVQUFNLENBQUNnQixJQUFQLENBQVksVUFBWixFQUF3QjtBQUN0QlYsY0FBUSxFQUFFQSxRQURZO0FBRXRCVyxTQUFHLEVBQUVSO0FBRmlCLEtBQXhCO0FBSUFDLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDRCxHQVBEOztBQVNBUSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJWCxNQUFKLEVBQVk7QUFDVlAsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLFVBQVosRUFBd0I7QUFDdEJWLGdCQUFRLEVBQUVBLFFBRFk7QUFFdEJDLGNBQU0sRUFBRUE7QUFGYyxPQUF4QjtBQUtBUCxZQUFNLENBQUNtQixFQUFQLENBQVUsWUFBVixFQUF3QixVQUFDRixHQUFELEVBQVM7QUFDL0JMLGdCQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLDZLQUFlQSxLQUFmLElBQXNCO0FBQUVMLG9CQUFRLEVBQUUsS0FBWjtBQUFtQlcsZUFBRyxFQUFFQTtBQUF4QixXQUF0QjtBQUFBLFNBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHQWpCLFlBQU0sQ0FBQ21CLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLFFBQUQsRUFBYztBQUN0Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQUMsZ0JBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsNktBQWVBLEtBQWYsSUFBc0JTLFFBQXRCO0FBQUEsU0FBRCxDQUFSO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0FmUSxFQWVOLENBQUNiLE1BQUQsQ0FmTSxDQUFUO0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVnQiw4RUFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdaLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFBLG9CQUFzQkE7QUFBdEIsV0FBVXZCLE9BQU8sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFO0FBQU0sZUFBUyxFQUFFcUIseUVBQWpCO0FBQXFDLGNBQVEsRUFBRVYsWUFBL0M7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsYUFBSyxFQUFFSixRQUZUO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRCxFQUE0QztBQUNwREoscUJBQVcsQ0FBQ0ksQ0FBQyxDQUFDWSxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQWhERDs7R0FBTXRCLFE7O0tBQUFBLFE7QUFpRE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC9bcm9vbUlEXS43MzNjNmNiMWZjMWUzY2E2OTg0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNoYXRTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2NoYXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmludGVyZmFjZSBSb29tUHJvcHMge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBzdHJpbmdbXTtcclxuICByb29tSUQ6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xyXG59XHJcbmludGVyZmFjZSBDaGF0SW5mbyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIik7XHJcblxyXG5sZXQgY2hhdGtleTogbnVtYmVyID0gMDtcclxubGV0IG5ld0NoYXRzOiBzdHJpbmdbXTtcclxubGV0IG5ld01zZzogc3RyaW5nO1xyXG5cclxuY29uc3QgQ2hhdFJvb206IFJlYWN0LkZDPFJvb21Qcm9wcz4gPSAoeyB1c2VybmFtZSwgcm9vbUlEIH0pID0+IHtcclxuICBjb25zdCBbdXNlckNoYXQsIHNldFVzZXJDaGF0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGU8Q2hhdEluZm9bXT4oW10pO1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJzZW5kLW1zZ1wiLCB7XHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgbXNnOiB1c2VyQ2hhdCxcclxuICAgIH0pO1xyXG4gICAgc2V0VXNlckNoYXQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb29tSUQpIHtcclxuICAgICAgc29ja2V0LmVtaXQoXCJqb2luUm9vbVwiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHJvb21JRDogcm9vbUlELFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5vbihcImpvaW5lZFJvb21cIiwgKG1zZykgPT4ge1xyXG4gICAgICAgIHNldENoYXRzKChjaGF0cykgPT4gWy4uLmNoYXRzLCB7IHVzZXJuYW1lOiBcImJvdFwiLCBtc2c6IG1zZyB9XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJyZWNpZXZlZC1tc2dcIiwgKGNoYXRJbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhdHMpO1xyXG4gICAgICAgIHNldENoYXRzKChjaGF0cykgPT4gWy4uLmNoYXRzLCBjaGF0SW5mb10pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm9vbUlEXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaGF0U3R5bGUuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgzPkNoYXQgQ29udGVudDwvaDM+XHJcbiAgICAgICAge2NoYXRzLm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2NoYXRrZXkrK30+e2NoYXR9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjaGF0U3R5bGUuaW5wdXRCb3h9IG9uU3VibWl0PXtzdWJtaXRIYW5kbGV9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJDaGF0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyQ2hhdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9