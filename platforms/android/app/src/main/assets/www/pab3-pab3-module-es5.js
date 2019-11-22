(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pab3-pab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pab3/pab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pab3/pab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color:black;\">\r\n    <ion-toolbar [color]=\"dynamicColor\">\r\n    <ion-title style=\"color: white;\">\r\n      User Account\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"bg-class\" padding>\r\n    <ion-avatar>\r\n        <img src=\"/assets/images/profilepic.jpg\" style=\"width:100%; height: 100%;\">\r\n      </ion-avatar>\r\n      <ion-label>{{fullname}}</ion-label>\r\n    <div *ngIf=\"hideOnline\">\r\n      <ion-chip>\r\n        <ion-avatar>\r\n          <img src=\"/assets/images/online.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>Online</ion-label>\r\n      </ion-chip>\r\n    </div>\r\n    <div *ngIf=\"hideOffline\">\r\n      <ion-chip>\r\n        <ion-avatar>\r\n          <img src=\"/assets/images/offline.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>Offline</ion-label>\r\n      </ion-chip>\r\n    </div>\r\n    <div *ngIf=\"hideBusy\">\r\n      <ion-chip>\r\n        <ion-avatar>\r\n            <img src=\"/assets/images/busy.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>Busy</ion-label>\r\n      </ion-chip>\r\n    </div>\r\n      \r\n  <ion-card class=\"welcome-card\">\r\n  <ion-item href=\"/chat-room\">\r\n    <ion-icon class=\"ion-md-time\" name=\"chatbubbles\" slot=\"start\"></ion-icon>\r\n    <ion-label>Messages</ion-label>     \r\n  </ion-item>\r\n    \r\n  <ion-item href=\"/settings-provider\">\r\n    <ion-icon class=\"ion-md-time\" name=\"settings\" slot=\"start\"></ion-icon>\r\n    <ion-label>Settings</ion-label>     \r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"logouts()\">\r\n    <ion-icon class=\"ion-md-time\" name=\"log-out\" slot=\"start\"></ion-icon>\r\n  <ion-label>Log out</ion-label>\r\n  </ion-item>\r\n\r\n</ion-card>\r\n</ion-content>\r\n\r\n\r\n  <!-- <ion-item>\r\n    <ion-icon name=\"card\" slot=\"start\"></ion-icon>\r\n    <ion-label>Cards</ion-label>\r\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\r\n    <ion-label>Cash In</ion-label>\r\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name=\"medal\" slot=\"start\"></ion-icon>\r\n    <ion-label>Rewards</ion-label>\r\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n  </ion-item> -->\r\n\r\n\r\n\r\n    <ion-content *ngIf='userReady'>\r\n        <ion-card>\r\n          <ion-img [src]=\"user.picture\"></ion-img>\r\n          <ion-card-header>\r\n            <ion-card-title>{{user.name}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <p>{{user.email}}</p>\r\n          </ion-card-content>\r\n          <!--<ion-button expand=\"block\" (click)=\"doFbLogout()\">Log Out FB</ion-button>\r\n          <ion-button expand=\"block\" (click)=\"doGoogleLogout()\">Log Out Google</ion-button>-->\r\n        </ion-card>\r\n        <ion-card class=\"welcome-card\">\r\n          <ion-item>\r\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n            <ion-label>Messages</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\" class=\"textBold\">></ion-button>\r\n          </ion-item>\r\n      \r\n          <ion-item>\r\n            <ion-icon name=\"cog\" slot=\"start\"></ion-icon>\r\n            <ion-label>Settings</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\" class=\"textBold\">></ion-button>\r\n          </ion-item>\r\n    \r\n        </ion-card>\r\n\r\n        <ion-card class=\"welcome-card\">\r\n          <ion-item (click)=\"doFbLogout()\">\r\n            <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n            <ion-label>Logout</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\" class=\"textBold\" routerLink=\"/\">-></ion-button>\r\n          </ion-item>\r\n          </ion-card>\r\n      </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pab3/pab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/pab3/pab3.module.ts ***!
  \*************************************/
/*! exports provided: Pab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pab3PageModule", function() { return Pab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pab3.page */ "./src/app/pab3/pab3.page.ts");







var Pab3PageModule = /** @class */ (function () {
    function Pab3PageModule() {
    }
    Pab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _pab3_page__WEBPACK_IMPORTED_MODULE_6__["Pab3Page"] }])
            ],
            declarations: [_pab3_page__WEBPACK_IMPORTED_MODULE_6__["Pab3Page"]]
        })
    ], Pab3PageModule);
    return Pab3PageModule;
}());



/***/ }),

/***/ "./src/app/pab3/pab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/pab3/pab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textBold {\n  font-weight: bold;\n}\n\n.ion-md-time {\n  color: #2989d8 !important;\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFiMy9DOlxcVXNlcnNcXE1BQ1JPOC1OQVRIXFxEb2N1bWVudHNcXERlc2t0b3AgTmF0aFxcaXNlcmJmaW5hbC9zcmNcXGFwcFxccGFiM1xccGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhYjMvcGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0MseUJBQUE7QUNFRDs7QURPQTtFQUNJLHFCQUFBO0VBQXVCLGlCQUFBO0VBQ3ZCLCtFQUFBO0VBQWlGLGFBQUE7RUFDakYsZ0ZBQUE7RUFBa0YsNEJBQUE7RUFDbEYsOEVBQUE7RUFBZ0YscURBQUE7QUNBcEYiLCJmaWxlIjoic3JjL2FwcC9wYWIzL3BhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRCb2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmlvbi1tZC10aW1le1xyXG5cdGNvbG9yOiMyOTg5ZDggIWltcG9ydGFudDtcclxufVxyXG4kY29sb3JzOiAoXHJcbiAgIGJsdWU6ICAgICMzODdlZjUsXHJcbiAgIHNlY29uZGFyeTogICMzMmRiNjQsXHJcbiAgIGRhbmdlcjogICAgICNmNTNkM2QsXHJcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICBcclxuICAgZGFyazogICAgICAgICAgIzIyMiBcclxuKTtcclxuLmJnLWNsYXNze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovIH1cclxuIiwiLnRleHRCb2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pb24tbWQtdGltZSB7XG4gIGNvbG9yOiAjMjk4OWQ4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzI5ODlkODtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7XG4gIC8qIEZGMy42LTE1ICovXG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pab3/pab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/pab3/pab3.page.ts ***!
  \***********************************/
/*! exports provided: Pab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pab3Page", function() { return Pab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);







// import { Facebook } from '@ionic-native/facebook/ngx';
var Pab3Page = /** @class */ (function () {
    function Pab3Page(
    // private fb: Facebook,
    nativeStorage, loadingController, router, storage
    //private googlePlus: GooglePlus
    ) {
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.router = router;
        this.storage = storage;
        this.userReady = false;
        this.hideOnline = false;
        this.hideOffline = false;
        this.hideBusy = false;
        this.dynamicColor = 'blue';
    }
    Pab3Page.prototype.logouts = function () {
        this.router.navigateByUrl('/home');
    };
    Pab3Page.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // doFbLogout(){
    //   this.fb.logout()
    //   .then(res => {
    //     //user logged out so we will remove him from the NativeStorage
    //     this.nativeStorage.remove('facebook_user');
    //     this.router.navigate(["/"]);
    //   }, err => {
    //     console.log(err);
    //   });
    // }
    /* doGoogleLogout(){
       this.googlePlus.logout()
       .then(res => {
         //user logged out so we will remove him from the NativeStorage
         this.nativeStorage.remove('google_user');
         this.router.navigate(["/login"]);
       }, err => {
         console.log(err);
       });
     }*/
    Pab3Page.prototype.ionViewDidEnter = function () {
        this.getCredits();
    };
    Pab3Page.prototype.getCredits = function () {
        var _this = this;
        this.storage.get('session').then(function (val) {
            _this.getValidation(val);
            _this.getInformation(val);
        });
    };
    Pab3Page.prototype.getInformation = function (phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo=' + phoneNumber)];
                    case 1:
                        response = _a.sent();
                        this.fullname = response.data[0].Firstname + ' ' + response.data[0].Lastname;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Pab3Page.prototype.getValidation = function (phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/Credits?ContactNo=' + phoneNumber)];
                    case 1:
                        response = _a.sent();
                        this.status = response.data[0].Status;
                        if (this.status == "Online") {
                            this.hideOnline = true;
                            this.hideOffline = false;
                            this.hideBusy = false;
                        }
                        else if (this.status == "Offline") {
                            this.hideOnline = false;
                            this.hideOffline = true;
                            this.hideBusy = false;
                        }
                        else {
                            this.hideOnline = false;
                            this.hideOffline = false;
                            this.hideBusy = true;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Pab3Page.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    Pab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pab3',
            template: __webpack_require__(/*! raw-loader!./pab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/pab3/pab3.page.html"),
            styles: [__webpack_require__(/*! ./pab3.page.scss */ "./src/app/pab3/pab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
            //private googlePlus: GooglePlus
        ])
    ], Pab3Page);
    return Pab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=pab3-pab3-module-es5.js.map