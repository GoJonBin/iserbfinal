(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-room-chat-room-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-room/chat-room.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-room/chat-room.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>\r\n        Chat Room\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n   \r\n  <ion-content>\r\n  <div class=\"chat\" *ngFor=\"let chat of chatRef | async\">\r\n\r\n    <div class=\"me\" *ngIf=\"uid== chat.UserID\">\r\n      {{chat.Message}}\r\n    </div>\r\n    <div class=\"you\" *ngIf=\"uid != chat.UserID\">\r\n      <span class=\"name\">\r\n        {{chat.Name}}\r\n      </span><br>\r\n      {{chat.Message}}\r\n    </div>\r\n  </div>\r\n   \r\n  </ion-content>\r\n   <ion-footer>\r\n     <ion-item>\r\n       <ion-input placeholder=\"Type...\" [(ngModel)]=\"text\"></ion-input>\r\n     <ion-button (click)=\"send()\" fill=\"clear\" icon-only slot=\"end\">\r\n       <ion-icon name=\"send\"></ion-icon>\r\n     </ion-button>\r\n      </ion-item>\r\n   </ion-footer>\r\n  "

/***/ }),

/***/ "./src/app/chat-room/chat-room.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-room/chat-room.module.ts ***!
  \***********************************************/
/*! exports provided: ChatRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-room.page */ "./src/app/chat-room/chat-room.page.ts");







var routes = [
    {
        path: '',
        component: _chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }
];
var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]]
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());



/***/ }),

/***/ "./src/app/chat-room/chat-room.page.scss":
/*!***********************************************!*\
  !*** ./src/app/chat-room/chat-room.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.chat .me {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 0;\n  background: #32db64;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .you {\n  position: relative;\n  margin: 15px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 15px 0;\n  background: rgba(50, 219, 100, 0.5);\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat .you .name {\n  font-size: small;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yb29tL0M6XFxVc2Vyc1xcTUFDUk84LU5BVEhcXERvY3VtZW50c1xcRGVza3RvcCBOYXRoXFxpc2VyYmZpbmFsL3NyY1xcYXBwXFxjaGF0LXJvb21cXGNoYXQtcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUo7QURDSTtFQUVJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREVRO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5tZVxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDIwcHggNXB4IDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICBwYWRkaW5nOjZweCAxMHB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzJkYjY0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcbiAgICAueW91XHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsMjE5LDEwMCwwLjUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgLm5hbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufSIsIi5jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jaGF0IC5tZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IDVweCAwcHg7XG4gIG1heC13aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMDtcbiAgYmFja2dyb3VuZDogIzMyZGI2NDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uY2hhdCAueW91IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDE1cHg7XG4gIG1heC13aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA2cHggMTBweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTAsIDIxOSwgMTAwLCAwLjUpO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5jaGF0IC55b3UgLm5hbWUge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat-room/chat-room.page.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-room/chat-room.page.ts ***!
  \*********************************************/
/*! exports provided: ChatRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function() { return ChatRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(af, fs) {
        this.af = af;
        this.fs = fs;
        // this.uid=localStorage.getItem('userid');
        this.uid = "MePhone";
        this.chatRef = this.fs.collection('chats', function (ref) { return ref.orderBy('Timestamp'); }).valueChanges();
    }
    ChatRoomPage.prototype.send = function () {
        if (this.text != '') {
            this.fs.collection('chats').add({
                Name: "Nath",
                Message: this.text,
                UserID: "MePhone",
                Timestamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp(),
            });
            this.text = '';
        }
    };
    ChatRoomPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! raw-loader!./chat-room.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-room/chat-room.page.html"),
            styles: [__webpack_require__(/*! ./chat-room.page.scss */ "./src/app/chat-room/chat-room.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ChatRoomPage);
    return ChatRoomPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-room-chat-room-module-es5.js.map