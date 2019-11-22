(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/otp/otp.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/otp/otp.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content bg-class\" padding>\n  <ion-row>\n    <ion-col>\n      <ion-img src=\"/assets/img/logo.png\" style=\"height: 150px; width:150px; margin:auto;\"></ion-img>\n      <p class=\"description2\" style=\"color: white\">Integrated Service Expert Reservation and Booking Application</p>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin:auto\">\n  <ion-img src=\"/assets/img/icon1.png\" style=\"height: 50px; width:50px; margin:auto\"></ion-img>\n  <ion-img src=\"/assets/img/icon2.png\" style=\"height: 46px; width:46px;margin:auto\"></ion-img>\n  <ion-img src=\"/assets/img/icon3.png\" style=\"height: 44px; width:44px; margin:auto\"></ion-img>\n  <ion-img src=\"/assets/img/icon4.png\" style=\"height: 38px; width:38px;margin:auto\"></ion-img>\n  <ion-img src=\"/assets/img/icon5.png\" style=\"height: 38px; width:38px; margin:auto\"></ion-img>\n  <ion-img src=\"/assets/img/icon6.png\" style=\"height: 38px; width:38px; margin:auto\"></ion-img>\n</ion-row>\n<br/>\n  <p class=\"description2\">Enter Verification Code Sent To Your Phone</p>\n  <br>\n  <ion-card style=\"background-color: white;\">\n    <ion-card-content style=\"padding: 2%\">\n  <ion-item style=\"border-radius: 15px;\">\n    <ion-label position=\"floating\" >Code</ion-label>\n  \n      <ion-input color=\"dark\" [(ngModel)]=\"_checkCode\" inputmode=\"numeric\" maxlength=\"4\" type=\"tel\"><ion-icon name=\"contact\" style=\"position: absolute; right:1%;\"></ion-icon></ion-input>\n    <!-- <ion-button routerLink=\"/registration\"><ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button> -->\n  </ion-item>\n  <ion-row>\n    <ion-col>\n        <ion-button color=\"tertiary\" (click)=\"sendOTP()\" expand=\"block\">SEND OTP</ion-button>\n      <ion-button color=\"tertiary\" (click)=\"oneTimePassword()\" expand=\"block\">LOGIN</ion-button>\n    </ion-col>\n  </ion-row>\n\n     \n\n  </ion-card-content>\n</ion-card>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/otp/otp.module.ts":
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "./src/app/otp/otp.page.ts");







var routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]
    }
];
var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
        })
    ], OtpPageModule);
    return OtpPageModule;
}());



/***/ }),

/***/ "./src/app/otp/otp.page.scss":
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\nlabel#rounded {\n  border-radius: 15px;\n}\n\ndiv#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center;\n  font-family: \"Trebuchet MS\";\n}\n\n.description2 {\n  color: black;\n  font-size: 18px;\n  font-family: \"Trebuchet MS\";\n  text-align: center;\n}\n\n.log-register-button {\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n.log-fb-button {\n  margin-top: 40px;\n  font-weight: bold;\n}\n\n.log-google-button {\n  margin-top: 0px;\n  font-weight: bold;\n}\n\nion-input input {\n  text-align: right;\n}\n\nion-input input ::-webkit-input-placeholder {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwL0M6XFxVc2Vyc1xcTUFDUk84LU5BVEhcXERvY3VtZW50c1xcRGVza3RvcCBOYXRoXFxpc2VyYmZpbmFsL3NyY1xcYXBwXFxvdHBcXG90cC5wYWdlLnNjc3MiLCJzcmMvYXBwL290cC9vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0ZBQUE7RUFBa0YsNEJBQUE7QUNFdEY7O0FEQ0k7RUFDRSxxQkFBQTtFQUF1QixpQkFBQTtFQUN2QiwrRUFBQTtFQUFpRixhQUFBO0VBQ2pGLGdGQUFBO0VBQWtGLDRCQUFBO0VBQ2xGLDhFQUFBO0VBQWdGLHFEQUFBO0FDTXRGOztBREhFO0VBQ0UsbUJBQUE7QUNNSjs7QURIRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FEREk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0lOOztBRERJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDSU47O0FEREk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNJTjs7QURESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURGSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0tOOztBRERNO0VBQ0UsaUJBQUE7QUNJUjs7QURIUTtFQUNFLGlCQUFBO0FDS1YiLCJmaWxlIjoic3JjL2FwcC9vdHAvb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgXHJcbiAgfVxyXG4gICAgLmJnLWNsYXNze1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsICMyMDdjY2EgNTElLCAjN2RiOWU4IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi8gfVxyXG4gICAgXHJcbiAgXHJcbiAgbGFiZWwjcm91bmRlZHtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDsgXHJcbiAgfVxyXG4gIFxyXG4gIGRpdiNjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAgIC5sb2dvIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGVzY3JpcHRpb24yIHtcclxuICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUyc7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZy1yZWdpc3Rlci1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICBcclxuICAgIC5sb2ctZmItYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAubG9nLWdvb2dsZS1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBcclxuICAgICIsIi5sb2dpbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7XG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG59XG5cbi5iZy1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzI5ODlkODtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7XG4gIC8qIEZGMy42LTE1ICovXG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xufVxuXG5sYWJlbCNyb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuZGl2I2NvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xufVxuXG4uZGVzY3JpcHRpb24yIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2ctcmVnaXN0ZXItYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2ctZmItYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2ctZ29vZ2xlLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pbnB1dCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuaW9uLWlucHV0IGlucHV0IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/otp/otp.page.ts":
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var OtpPage = /** @class */ (function () {
    function OtpPage(nativeStorage, alertController, httpClient, http, storage) {
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.httpClient = httpClient;
        this.http = http;
        this.storage = storage;
        this.data = {};
    }
    OtpPage.prototype.ngOnInit = function () {
    };
    OtpPage.prototype.sendOTP = function () {
        var _this = this;
        localStorage.setItem('OTP', Math.floor(1000 + Math.random() * 9000).toString());
        var link = 'https://stioasys.com/sendSMS.php';
        var myData = JSON.stringify({ OTP: localStorage.getItem('OTP'), NUMBER: localStorage.getItem('phoneNum') });
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.data.response = data["_body"];
        }, function (error) {
            console.log("Oooops!");
        });
    };
    OtpPage.prototype.oneTimePassword = function () {
        if (this._checkCode == localStorage.getItem('OTP')) {
            this.loginAlert();
        }
        else {
            this.failedAlert();
        }
    };
    OtpPage.prototype.loginAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Login Success!',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtpPage.prototype.failedAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'OTP WRONG!',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtpPage.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    OtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! raw-loader!./otp.page.html */ "./node_modules/raw-loader/index.js!./src/app/otp/otp.page.html"),
            styles: [__webpack_require__(/*! ./otp.page.scss */ "./src/app/otp/otp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], OtpPage);
    return OtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=otp-otp-module-es5.js.map