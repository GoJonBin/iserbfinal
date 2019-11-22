(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provider-ui-provider-ui-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/provider-ui/provider-ui.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/provider-ui/provider-ui.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    :root {\r\n      --ion-safe-area-top: 20px;\r\n      --ion-safe-area-bottom: 22px;\r\n    }\r\n  </style>\r\n<ion-header translucent>\r\n    <ion-toolbar>\r\n      <ion-title>Education</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content fullscreen>\r\n    <ion-list>\r\n      <ion-list-header>\r\n        List Of Providers\r\n      </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>\r\n        Select Subject\r\n      </ion-label>\r\n      <ion-select placeholder=\"Subject\" interface=\"action-sheet\" [(ngModel)]=\"Subject\" (ionChange)=\"showSelectedSubject(Subject)\">\r\n        <ion-select-option value=\"Math\">\r\n          Math\r\n        </ion-select-option>\r\n        <ion-select-option value=\"English\">\r\n          English\r\n        </ion-select-option>\r\n        <ion-select-option value=\"Filipino\">\r\n          Filipino\r\n        </ion-select-option>\r\n        <ion-select-option value=\"Makabayan\">\r\n          Makabayan\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div *ngIf=\"showProfMath\">\r\n\r\n      <ion-item *ngFor=\"let teacher of arrayTeacher; let idx = index;\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{arrayTeacher[idx].ProfilePicture}}\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Name: {{arrayTeacher[idx].name}}</h2>\r\n          <h3>Hourly Rate:<ion-icon name=\"cash\"></ion-icon> {{arrayTeacher[idx].rateperhour}} </h3>\r\n          <p>Rating: <ion-icon *ngFor=\"let count of arrayTeacher\" name=\"star\"></ion-icon></p>\r\n        <button style=\"background-color:white;color: blue\" (click)=\"showAlert()\" clear>More Info</button>\r\n        <div *ngIf=\"information\">\r\n          <p>Contact : {{arrayTeacher[idx].ContactNo}}</p>\r\n          <p>{{arrayTeacher[idx].Certificate1}} - {{arrayTeacher[idx].SerialCertificate1}}</p>\r\n          <p>{{arrayTeacher[idx].Certificate2}} - {{arrayTeacher[idx].SerialCertificate2}}</p>\r\n          <p>{{arrayTeacher[idx].Certificate3}} - {{arrayTeacher[idx].SerialCertificate3}}</p>\r\n          <p> Tesda Category - {{arrayTeacher[idx].TesdaCategory}}</p>\r\n          <p> Expertise - {{arrayTeacher[idx].Skills}}</p>\r\n        </div>\r\n        <p>Status: </p><p style=\"color:red\" *ngIf=\"arrayTeacher[idx].status=='Busy'\">{{arrayTeacher[idx].status}}</p>\r\n        <p style=\"color:red\" *ngIf=\"arrayTeacher[idx].status=='Pending'\">{{arrayTeacher[idx].status}}</p>\r\n        <p style=\"color:green\" *ngIf=\"arrayTeacher[idx].status == 'Online'\">{{arrayTeacher[idx].status}}</p>\r\n        <ion-button *ngIf=\"arrayTeacher[idx].status=='Online'\" (click)=\"hireButton(idx)\">Hire</ion-button>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </div>\r\n    <div *ngIf=\"showProfJoed\">\r\n      <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/img/joed.jpeg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Name: Joed Lopez</h2>\r\n            <h3>Occupation: Teacher</h3>\r\n            <h3>Rate:<ion-icon name=\"cash\"></ion-icon> P10,000</h3>\r\n            <p>Rating: <ion-icon name=\"star\"></ion-icon><ion-icon name=\"star-outline\"></ion-icon><ion-icon name=\"star-outline\"></ion-icon><ion-icon name=\"star-outline\"></ion-icon><ion-icon name=\"star-outline\"></ion-icon></p>\r\n            <p style=\"color: blue\" (click)=\"showAlert()\">More Info</p>\r\n            <!-- <p>Status: </p><p style=\"color:red\" *ngIf=\"arrayTeacher[idx].status=='Busy'\">{{arrayTeacher[idx].status}}</p>\r\n            <p style=\"color:red\" *ngIf=\"arrayTeacher[idx].status=='Pending'\">{{arrayTeacher[idx].status}}</p>\r\n            <p style=\"color:green\" *ngIf=\"arrayTeacher[idx].status == 'Online'\">{{arrayTeacher[idx].status}}</p>\r\n            <ion-button *ngIf=\"arrayTeacher[idx].status=='Online'\" (click)=\"hireButton(idx)\">Hire</ion-button> -->\r\n            <ion-button (click)=\"hireJoed()\">Hire</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n        </div>\r\n    </ion-list>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/provider-ui/provider-ui.module.ts":
/*!***************************************************!*\
  !*** ./src/app/provider-ui/provider-ui.module.ts ***!
  \***************************************************/
/*! exports provided: ProviderUIPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderUIPageModule", function() { return ProviderUIPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_ui_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider-ui.page */ "./src/app/provider-ui/provider-ui.page.ts");







const routes = [
    {
        path: '',
        component: _provider_ui_page__WEBPACK_IMPORTED_MODULE_6__["ProviderUIPage"]
    }
];
let ProviderUIPageModule = class ProviderUIPageModule {
};
ProviderUIPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_provider_ui_page__WEBPACK_IMPORTED_MODULE_6__["ProviderUIPage"]]
    })
], ProviderUIPageModule);



/***/ }),

/***/ "./src/app/provider-ui/provider-ui.page.scss":
/*!***************************************************!*\
  !*** ./src/app/provider-ui/provider-ui.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\nlabel#rounded {\n  border-radius: 15px;\n}\n\ndiv#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center;\n  font-family: \"Trebuchet MS\";\n}\n\n.description2 {\n  color: black;\n  font-size: 18px;\n  font-family: \"Trebuchet MS\";\n  text-align: center;\n}\n\n.log-fb-button {\n  margin-top: 40px;\n  font-weight: bold;\n}\n\n.log-google-button {\n  margin-top: 0px;\n  font-weight: bold;\n}\n\nion-input input {\n  text-align: right;\n}\n\nion-input input ::-webkit-input-placeholder {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXItdWkvQzpcXFVzZXJzXFxNQUNSTzgtTkFUSFxcRG9jdW1lbnRzXFxEZXNrdG9wIE5hdGhcXGlzZXJiZmluYWwvc3JjXFxhcHBcXHByb3ZpZGVyLXVpXFxwcm92aWRlci11aS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb3ZpZGVyLXVpL3Byb3ZpZGVyLXVpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0VBQWtGLDRCQUFBO0FDRXRGOztBRENJO0VBQ0UscUJBQUE7RUFBdUIsaUJBQUE7RUFDdkIsK0VBQUE7RUFBaUYsYUFBQTtFQUNqRixnRkFBQTtFQUFrRiw0QkFBQTtFQUNsRiw4RUFBQTtFQUFnRixxREFBQTtBQ010Rjs7QURIRTtFQUNFLG1CQUFBO0FDTUo7O0FESEU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01KOztBRERJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURESTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0lOOztBRERJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDSU47O0FEREk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDSU47O0FERkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNLTjs7QURETTtFQUNFLGlCQUFBO0FDSVI7O0FESFE7RUFDRSxpQkFBQTtBQ0tWIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXItdWkvcHJvdmlkZXItdWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICBcclxuICB9XHJcbiAgICAuYmctY2xhc3N7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzI5ODlkODsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqLyB9XHJcbiAgICBcclxuICBcclxuICBsYWJlbCNyb3VuZGVke1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4OyBcclxuICB9XHJcbiAgXHJcbiAgZGl2I2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDphdXRvOyBcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUyc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbjIge1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nLWZiLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmxvZy1nb29nbGUtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAiLCIubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xufVxuXG4uYmctY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7XG4gIC8qIE9sZCBicm93c2VycyAqL1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsICMyMDdjY2EgNTElLCAjN2RiOWU4IDEwMCUpO1xuICAvKiBGRjMuNi0xNSAqL1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbn1cblxubGFiZWwjcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmRpdiNjb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cblxuLmRlc2NyaXB0aW9uMiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nLWZiLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWdvb2dsZS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taW5wdXQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1pbnB1dCBpbnB1dCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/provider-ui/provider-ui.page.ts":
/*!*************************************************!*\
  !*** ./src/app/provider-ui/provider-ui.page.ts ***!
  \*************************************************/
/*! exports provided: ProviderUIPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderUIPage", function() { return ProviderUIPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);







let ProviderUIPage = class ProviderUIPage {
    constructor(alertController, router, storage) {
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.arrayTeacher = [];
        this.information = false;
    }
    showAlert() {
        this.information = !this.information;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getCredits();
    }
    getProviderType() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/ServiceType?ServiceType=5');
                console.log(response);
                for (let x = 0; x < response.data.length; x++) {
                    this.arrayTeacher.push({
                        'name': response.data[x].Firstname + ' ' + response.data[x].Lastname,
                        'rateperhour': response.data[x].RatePerHour,
                        'status': response.data[x].Status,
                        'Certificate1': response.data[x].Certificate1,
                        'Certificate2': response.data[x].Certificate2,
                        'Certificate3': response.data[x].Certificate3,
                        'SerialCertificate1': response.data[x].SerialCertificate1,
                        'SerialCertificate2': response.data[x].SerialCertificate2,
                        'SerialCertificate3': response.data[x].SerialCertificate3,
                        'Skills': response.data[x].Skills,
                        'TesdaCategory': response.data[x].TesdaCategory,
                        'ProfilePicture': response.data[x].ProfilePicture,
                        'ContactNo': response.data[x].ContactNo,
                        'Rating': response.data[x].Rating,
                        'Id': response.data[x].Id
                    });
                }
                console.log(this.arrayTeacher);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCredits() {
        this.storage.get('session').then((val) => {
            this.getInformation(val);
            this.myphone = val;
            this.checkIfHasCurrentTransaction(val);
        });
    }
    getInformation(phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo=' + phoneNumber);
                this.fullname = response.data[0].Firstname + ' ' + response.data[0].Lastname;
                this.seekerphonenumber = response.data[0].ContactNo;
                console.log(this.fullname);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    checkIfHasCurrentTransaction(phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Seeker/SeekerProcessCount?ContactNo=' + phoneNumber);
                this.transaction = response.data[0].ProcessCount;
                console.log(this.transaction);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    showSelectedSubject(Subject) {
        console.log(this.Subject);
        if (Subject == "Math") {
            this.getProviderType();
            this.showProfMath = true;
            this.showProfJoed = false;
        }
        else if (Subject == "English") {
            //this.showProfNava=false;
            this.showProfJoed = true;
            this.showProfMath = false;
            this.arrayTeacher.length = 0;
        }
        else {
            //this.showProfNava=false;
            this.showProfJoed = false;
            this.showProfMath = false;
            this.arrayTeacher.length = 0;
        }
    }
    hireJoed() {
    }
    hireButton(index) {
        this.presentAlert2(index);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'You already Hire this Provider',
                subHeader: 'wait for the approval',
                message: 'Please choose another provider to hire',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlert3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'You have an ongoing transaction',
                subHeader: 'wait until your transaction has finished/cancelled',
                message: 'Please give a feedback in your transaction',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlert2(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Hire this person?',
                message: 'Are you sure you want to hire this person?.',
                buttons: [
                    {
                        text: 'NO',
                        handler: () => {
                        }
                    },
                    {
                        text: 'YES',
                        handler: () => {
                            //this.router.navigateByUrl('/chat-room');
                            console.log(this.arrayTeacher[index].Id);
                            this.someFunction(index).then(d => {
                                this.responsecode = d;
                                this.response = this.responsecode.data[0].Response;
                                console.log(this.response);
                                if (this.response == "400") {
                                    this.presentAlert();
                                }
                                else if (this.transaction != "0") {
                                    this.presentAlert3();
                                }
                                else {
                                    this.arrayTeacher[0].status == 'Pending';
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    someFunction(index) {
        return new Promise((resolve, reject) => {
            const data = {
                SeekerName: this.fullname,
                SeekerPhoneNumber: this.seekerphonenumber,
                ServiceChoice: "5",
                ProviderID: this.arrayTeacher[index].Id
            };
            axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(data),
                url: 'http://nathdaaco123-001-site1.ctempurl.com/api/Transaction/AddNewTransaction'
            }).then(response => {
                resolve(response);
                this.responsecode = response;
                //console.log(resolve);
            }).catch(function (error) {
                //console.log(reject);
            });
        });
    }
};
ProviderUIPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ProviderUIPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider-ui',
        template: __webpack_require__(/*! raw-loader!./provider-ui.page.html */ "./node_modules/raw-loader/index.js!./src/app/provider-ui/provider-ui.page.html"),
        styles: [__webpack_require__(/*! ./provider-ui.page.scss */ "./src/app/provider-ui/provider-ui.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], ProviderUIPage);



/***/ })

}]);
//# sourceMappingURL=provider-ui-provider-ui-module-es2015.js.map