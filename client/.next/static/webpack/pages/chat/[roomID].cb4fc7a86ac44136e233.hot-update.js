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
/* harmony import */ var _home_anjiboss_data_typeScript_chat01_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/chat.module.css */ "./styles/chat.module.css");
/* harmony import */ var _styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/anjiboss/data/typeScript/chat01/client/Components/ChatRoom.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)("http://localhost:5000");
var chatkey = 0;
var newChats;

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
    socket.emit("send-msg", userChat);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (roomID) {
      socket.emit("joinRoom", roomID);
      socket.on("joinedRoom", function (msg) {
        setChats([].concat((0,_home_anjiboss_data_typeScript_chat01_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chats), [msg]));
      });
      socket.on("recieved-msg", function (newMsg) {
        console.log(chats);
        setChats(function (chats) {
          return [].concat((0,_home_anjiboss_data_typeScript_chat01_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chats), [newMsg]);
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
        lineNumber: 40,
        columnNumber: 9
      }, _this), chats.map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: chat
        }, chatkey++, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGF0Um9vbS50c3giXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJjaGF0a2V5IiwibmV3Q2hhdHMiLCJDaGF0Um9vbSIsInVzZXJuYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJ1c2VyQ2hhdCIsInNldFVzZXJDaGF0IiwiY2hhdHMiLCJzZXRDaGF0cyIsInN1Ym1pdEhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJ1c2VFZmZlY3QiLCJvbiIsIm1zZyIsIm5ld01zZyIsImNvbnNvbGUiLCJsb2ciLCJjaGF0U3R5bGUiLCJtYXAiLCJjaGF0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUUEsSUFBTUEsTUFBTSxHQUFHQyxvREFBRSxDQUFDLHVCQUFELENBQWpCO0FBRUEsSUFBSUMsT0FBZSxHQUFHLENBQXRCO0FBQ0EsSUFBSUMsUUFBSjs7QUFFQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQzlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEc0I7QUFBQSxNQUN2REMsUUFEdUQ7QUFBQSxNQUM3Q0MsV0FENkM7O0FBQUEsbUJBRXBDRiwrQ0FBUSxDQUFXLEVBQVgsQ0FGNEI7QUFBQSxNQUV2REcsS0FGdUQ7QUFBQSxNQUVoREMsUUFGZ0Q7O0FBRzlELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBeUM7QUFDNURBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBZCxVQUFNLENBQUNlLElBQVAsQ0FBWSxVQUFaLEVBQXdCUCxRQUF4QjtBQUNELEdBSEQ7O0FBS0FRLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlWLE1BQUosRUFBWTtBQUNWTixZQUFNLENBQUNlLElBQVAsQ0FBWSxVQUFaLEVBQXdCVCxNQUF4QjtBQUVBTixZQUFNLENBQUNpQixFQUFQLENBQVUsWUFBVixFQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0JQLGdCQUFRLDRLQUFLRCxLQUFMLElBQVlRLEdBQVosR0FBUjtBQUNELE9BRkQ7QUFHQWxCLFlBQU0sQ0FBQ2lCLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNFLE1BQUQsRUFBWTtBQUNwQ0MsZUFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQUMsZ0JBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsNExBQWVBLEtBQWYsSUFBc0JTLE1BQXRCO0FBQUEsU0FBRCxDQUFSO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0FaUSxFQVlOLENBQUNiLE1BQUQsQ0FaTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRWdCLDhFQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1osS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBQUEsb0JBQXNCQTtBQUF0QixXQUFVdEIsT0FBTyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUU7QUFBTSxlQUFTLEVBQUVvQix5RUFBakI7QUFBcUMsY0FBUSxFQUFFVixZQUEvQztBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUVKLFFBRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDSyxDQUFELEVBQTRDO0FBQ3BESixxQkFBVyxDQUFDSSxDQUFDLENBQUNZLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBekNEOztHQUFNdEIsUTs7S0FBQUEsUTtBQTBDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0L1tyb29tSURdLmNiNGZjN2E4NmFjNDQxMzZlMjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoYXRTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2NoYXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbnRlcmZhY2UgUm9vbVByb3BzIHtcbiAgdXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IHN0cmluZ1tdO1xuICByb29tSUQ6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiKTtcblxubGV0IGNoYXRrZXk6IG51bWJlciA9IDA7XG5sZXQgbmV3Q2hhdHM6IHN0cmluZ1tdO1xuXG5jb25zdCBDaGF0Um9vbTogUmVhY3QuRkM8Um9vbVByb3BzPiA9ICh7IHVzZXJuYW1lLCByb29tSUQgfSkgPT4ge1xuICBjb25zdCBbdXNlckNoYXQsIHNldFVzZXJDaGF0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2hhdHMsIHNldENoYXRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuZW1pdChcInNlbmQtbXNnXCIsIHVzZXJDaGF0KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb29tSUQpIHtcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pblJvb21cIiwgcm9vbUlEKTtcblxuICAgICAgc29ja2V0Lm9uKFwiam9pbmVkUm9vbVwiLCAobXNnKSA9PiB7XG4gICAgICAgIHNldENoYXRzKFsuLi5jaGF0cywgbXNnXSk7XG4gICAgICB9KTtcbiAgICAgIHNvY2tldC5vbihcInJlY2lldmVkLW1zZ1wiLCAobmV3TXNnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXRzKTtcbiAgICAgICAgc2V0Q2hhdHMoKGNoYXRzKSA9PiBbLi4uY2hhdHMsIG5ld01zZ10pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm9vbUlEXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaGF0U3R5bGUuY2hhdENvbnRhaW5lcn0+XG4gICAgICAgIDxoMz5DaGF0IENvbnRlbnQ8L2gzPlxuICAgICAgICB7Y2hhdHMubWFwKChjaGF0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NoYXRrZXkrK30+e2NoYXR9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2hhdFN0eWxlLmlucHV0Qm94fSBvblN1Ym1pdD17c3VibWl0SGFuZGxlfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt1c2VyQ2hhdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VyQ2hhdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGF0Um9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=