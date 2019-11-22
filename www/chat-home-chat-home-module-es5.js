(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-home-chat-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-home/chat-home.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-home/chat-home.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>\r\n        Chat Login\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n   \r\n  <ion-content padding>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">\r\n        Email\r\n      </ion-label>\r\n      <ion-input [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">\r\n    Password\r\n  </ion-label>\r\n  <ion-input [(ngModel)]=\"pwd\" type=\"password\"></ion-input>\r\n</ion-item>\r\n<br>\r\n<div text-center>\r\n  <ion-button (click)=\"login()\">\r\n    Login\r\n  </ion-button>\r\n  </div>\r\n  <br><br><br>\r\n  <div text-center>\r\n    <b>or</b>\r\n    <br>\r\n    <ion-button (click)=\"goto_signup()\" fill=\"clear\">Signup</ion-button>\r\n  </div>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/chat-home/chat-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-home/chat-home.module.ts ***!
  \***********************************************/
/*! exports provided: ChatHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHomePageModule", function() { return ChatHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-home.page */ "./src/app/chat-home/chat-home.page.ts");







var routes = [
    {
        path: '',
        component: _chat_home_page__WEBPACK_IMPORTED_MODULE_6__["ChatHomePage"]
    }
];
var ChatHomePageModule = /** @class */ (function () {
    function ChatHomePageModule() {
    }
    ChatHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_home_page__WEBPACK_IMPORTED_MODULE_6__["ChatHomePage"]]
        })
    ], ChatHomePageModule);
    return ChatHomePageModule;
}());



/***/ }),

/***/ "./src/app/chat-home/chat-home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/chat-home/chat-home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtaG9tZS9jaGF0LWhvbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat-home/chat-home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-home/chat-home.page.ts ***!
  \*********************************************/
/*! exports provided: ChatHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHomePage", function() { return ChatHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var ChatHomePage = /** @class */ (function () {
    function ChatHomePage(nav, router, fs, af) {
        this.nav = nav;
        this.router = router;
        this.fs = fs;
        this.af = af;
    }
    ChatHomePage.prototype.login = function () {
        var _this = this;
        this.af.auth.signInWithEmailAndPassword(this.email, this.pwd).then(function () {
            localStorage.setItem('userid', _this.af.auth.currentUser.uid);
            _this.nav.navigateRoot('/chat-room');
        }).catch(function (err) {
            alert(err.message);
        });
    };
    ChatHomePage.prototype.goto_signup = function () {
        this.nav.navigateForward('/signup');
    };
    ChatHomePage.prototype.ngOnInit = function () {
    };
    ChatHomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
    ]; };
    ChatHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-home',
            template: __webpack_require__(/*! raw-loader!./chat-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-home/chat-home.page.html"),
            styles: [__webpack_require__(/*! ./chat-home.page.scss */ "./src/app/chat-home/chat-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], ChatHomePage);
    return ChatHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-home-chat-home-module-es5.js.map