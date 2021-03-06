webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DroneState.js":
/*!**********************************!*\
  !*** ./components/DroneState.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ "./socket.js");

var _jsxFileName = "/Users/JayArteficio/Desktop/Tello/2nd attempt/telloV2/FRONTEND/components/DroneState.js";


 // import Battery from '../Battery';
// import Tilt from '../Tilt';

function useDroneState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      droneState = _useState2[0],
      updateDroneState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('yo'); // console.log(droneState);

    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].on('dronestate', updateDroneState);
  }, []);
  return droneState;
}

function useSocket() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('DISCONNECTED'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      status = _useState4[0],
      updateStatus = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].on('status', updateStatus);
  }, []);
  return status;
}

var DroneState = function DroneState() {
  var status = useSocket();
  var droneState = useDroneState([]);
  console.log(droneState);
  console.log(droneState);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Status: ", status), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Drone State: ", droneState));
};

/* harmony default export */ __webpack_exports__["default"] = (DroneState);

/***/ })

})
//# sourceMappingURL=index.js.0be3e26398689b8227f4.hot-update.js.map