(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pab2-pab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pab2/pab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pab2/pab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color:black;\">\r\n    <ion-toolbar [color]=\"dynamicColor\">\r\n    <ion-title style=\"color: white;\">\r\n      Payment\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"bg-class\">\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle class=\"textCenter\">Your Subscription Balance</ion-card-subtitle>\r\n      <ion-card-title class=\"textBold\">{{balance}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p class=\"textCenter\">To continue enjoying your subscription</p>\r\n      <p class=\"textCenter\">Choose your preferable payment method</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-item (click)=\"presentModal()\">\r\n      <ion-icon class=\"ion-md-time\" name=\"briefcase\" slot=\"start\"></ion-icon>\r\n      <ion-label>Top-Up</ion-label>\r\n      <!-- <ion-button fill=\"outline\" slot=\"end\">View</ion-button> -->\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon class=\"ion-md-time\" name=\"card\" slot=\"start\"></ion-icon>\r\n      <ion-label>Cards</ion-label>\r\n      <!-- <ion-button fill=\"outline\" slot=\"end\">View</ion-button> -->\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon class=\"ion-md-time\" name=\"cash\" slot=\"start\"></ion-icon>\r\n      <ion-label>Cash In</ion-label>\r\n      <!-- <ion-button fill=\"outline\" slot=\"end\">View</ion-button> -->\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon class=\"ion-md-time\" name=\"medal\" slot=\"start\"></ion-icon>\r\n      <ion-label>Rewards</ion-label>\r\n      <!-- <ion-button fill=\"outline\" slot=\"end\">View</ion-button> -->\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card  class=\"welcome-height\">\r\n    <ion-item>\r\n      <ion-icon class=\"ion-md-time\" name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-label>Confirm your Identity</ion-label>\r\n      <!-- <ion-button fill=\"outline\" slot=\"end\">View</ion-button> -->\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pab2/pab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/pab2/pab2.module.ts ***!
  \*************************************/
/*! exports provided: Pab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pab2PageModule", function() { return Pab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pab2.page */ "./src/app/pab2/pab2.page.ts");







let Pab2PageModule = class Pab2PageModule {
};
Pab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _pab2_page__WEBPACK_IMPORTED_MODULE_6__["Pab2Page"] }])
        ],
        declarations: [_pab2_page__WEBPACK_IMPORTED_MODULE_6__["Pab2Page"]]
    })
], Pab2PageModule);



/***/ }),

/***/ "./src/app/pab2/pab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/pab2/pab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textCenter {\n  text-align: center;\n  color: white;\n}\n\n.textBold {\n  text-align: center;\n  font-weight: bold;\n  font-size: 30px;\n  color: black;\n}\n\n.ion-md-time {\n  color: #2989d8 !important;\n}\n\n.welcome-height {\n  height: 200px;\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFiMi9DOlxcVXNlcnNcXE1BQ1JPOC1OQVRIXFxEb2N1bWVudHNcXERlc2t0b3AgTmF0aFxcaXNlcmJmaW5hbC9zcmNcXGFwcFxccGFiMlxccGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhYjIvcGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0MseUJBQUE7QUNHRDs7QUREQTtFQUNJLGFBQUE7QUNJSjs7QURLQTtFQUNJLHFCQUFBO0VBQXVCLGlCQUFBO0VBQ3ZCLCtFQUFBO0VBQWlGLGFBQUE7RUFDakYsZ0ZBQUE7RUFBa0YsNEJBQUE7RUFDbEYsOEVBQUE7RUFBZ0YscURBQUE7QUNFcEYiLCJmaWxlIjoic3JjL2FwcC9wYWIyL3BhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRDZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4udGV4dEJvbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pb24tbWQtdGltZXtcclxuXHRjb2xvcjojMjk4OWQ4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLndlbGNvbWUtaGVpZ2h0e1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4kY29sb3JzOiAoXHJcbiAgIGJsdWU6ICAgICMzODdlZjUsXHJcbiAgIHNlY29uZGFyeTogICMzMmRiNjQsXHJcbiAgIGRhbmdlcjogICAgICNmNTNkM2QsXHJcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICBcclxuICAgZGFyazogICAgICAgICAgIzIyMiBcclxuKTtcclxuLmJnLWNsYXNze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovIH1cclxuIiwiLnRleHRDZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHRCb2xkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pb24tbWQtdGltZSB7XG4gIGNvbG9yOiAjMjk4OWQ4ICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lLWhlaWdodCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5iZy1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzI5ODlkODtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7XG4gIC8qIEZGMy42LTE1ICovXG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pab2/pab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/pab2/pab2.page.ts ***!
  \***********************************/
/*! exports provided: Pab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pab2Page", function() { return Pab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _topup_modal_topup_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topup-modal/topup-modal.page */ "./src/app/topup-modal/topup-modal.page.ts");






let Pab2Page = class Pab2Page {
    constructor(storage, modalController) {
        this.storage = storage;
        this.modalController = modalController;
        this.dynamicColor = 'blue';
    }
    ionViewDidEnter() {
        this.getCredits();
    }
    getCredits() {
        this.storage.get('session').then((val) => {
            this.getValidation(val);
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _topup_modal_topup_modal_page__WEBPACK_IMPORTED_MODULE_5__["TopupModalPage"]
            });
            return yield modal.present();
        });
    }
    getValidation(phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/Credits?ContactNo=' + phoneNumber);
                this.balance = "₱ " + response.data[0].Credit;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
Pab2Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
Pab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pab2',
        template: __webpack_require__(/*! raw-loader!./pab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/pab2/pab2.page.html"),
        styles: [__webpack_require__(/*! ./pab2.page.scss */ "./src/app/pab2/pab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], Pab2Page);



/***/ })

}]);
//# sourceMappingURL=pab2-pab2-module-es2015.js.map