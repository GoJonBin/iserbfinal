(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-web-chat-web-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-web/chat-web.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-web/chat-web.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>\r\n        Chat Room\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n   \r\n  <ion-content>\r\n  <div class=\"chat\" *ngFor=\"let chat of chatRef | async\">\r\n\r\n    <div class=\"me\" *ngIf=\"uid== chat.UserID\">\r\n      {{chat.Message}}\r\n    </div>\r\n    <div class=\"you\" *ngIf=\"uid != chat.UserID\">\r\n      <span class=\"name\">\r\n        {{chat.Name}}\r\n      </span><br>\r\n      {{chat.Message}}\r\n    </div>\r\n  </div>\r\n   \r\n  </ion-content>\r\n   <ion-footer>\r\n     <ion-item>\r\n       <ion-input placeholder=\"Type...\" [(ngModel)]=\"text\"></ion-input>\r\n     <ion-button (click)=\"send()\" fill=\"clear\" icon-only slot=\"end\">\r\n       <ion-icon name=\"send\"></ion-icon>\r\n     </ion-button>\r\n      </ion-item>\r\n   </ion-footer>\r\n  "

/***/ }),

/***/ "./src/app/chat-web/chat-web.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-web/chat-web.module.ts ***!
  \*********************************************/
/*! exports provided: ChatWebPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWebPageModule", function() { return ChatWebPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_web_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-web.page */ "./src/app/chat-web/chat-web.page.ts");







const routes = [
    {
        path: '',
        component: _chat_web_page__WEBPACK_IMPORTED_MODULE_6__["ChatWebPage"]
    }
];
let ChatWebPageModule = class ChatWebPageModule {
};
ChatWebPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_web_page__WEBPACK_IMPORTED_MODULE_6__["ChatWebPage"]]
    })
], ChatWebPageModule);



/***/ }),

/***/ "./src/app/chat-web/chat-web.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chat-web/chat-web.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.chat .me {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 0;\n  background: #32db64;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .you {\n  position: relative;\n  margin: 15px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 15px 0;\n  background: rgba(50, 219, 100, 0.5);\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .you .name {\n  font-size: small;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC13ZWIvQzpcXFVzZXJzXFxNQUNSTzgtTkFUSFxcRG9jdW1lbnRzXFxEZXNrdG9wIE5hdGhcXGlzZXJiZmluYWwvc3JjXFxhcHBcXGNoYXQtd2ViXFxjaGF0LXdlYi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtd2ViL2NoYXQtd2ViLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKO0FEQ0k7RUFFSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURFUTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtd2ViL2NoYXQtd2ViLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0XHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLm1lXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCA1cHggMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIHBhZGRpbmc6NnB4IDEwcHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMmRiNjQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuICAgIC55b3VcclxuICAgIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MCwyMTksMTAwLDAuNSk7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAubmFtZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59IiwiLmNoYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNoYXQgLm1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHggNXB4IDBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA2cHggMTBweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwO1xuICBiYWNrZ3JvdW5kOiAjMzJkYjY0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5jaGF0IC55b3Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTVweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMDtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgMjE5LCAxMDAsIDAuNSk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLmNoYXQgLnlvdSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-web/chat-web.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chat-web/chat-web.page.ts ***!
  \*******************************************/
/*! exports provided: ChatWebPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWebPage", function() { return ChatWebPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ChatWebPage = class ChatWebPage {
    constructor(af, fs, navCtrl) {
        this.af = af;
        this.fs = fs;
        this.navCtrl = navCtrl;
        this.uid = localStorage.getItem('userid');
        this.uid = ('gab');
        this.chatRef = this.fs.collection('chats', ref => ref.orderBy('Timestamp')).valueChanges();
    }
    send() {
        if (this.text != '') {
            this.fs.collection('chats').add({
                Name: "MNL48",
                Message: this.text,
                UserID: this.uid,
                Timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp(),
            });
            this.text = '';
        }
    }
    backBtn() {
        this.navCtrl.back();
    }
};
ChatWebPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ChatWebPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-web',
        template: __webpack_require__(/*! raw-loader!./chat-web.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-web/chat-web.page.html"),
        styles: [__webpack_require__(/*! ./chat-web.page.scss */ "./src/app/chat-web/chat-web.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], ChatWebPage);



/***/ })

}]);
//# sourceMappingURL=chat-web-chat-web-module-es2015.js.map