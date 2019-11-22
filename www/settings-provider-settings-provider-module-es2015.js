(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-provider-settings-provider-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings-provider/settings-provider.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings-provider/settings-provider.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: black; color: white; padding-bottom: 1%; padding-top: 1%;\">\r\n  <ion-row>\r\n       <ion-button (click)=\"back()\" fill=\"clear\" style=\"color: white;\">\r\n            <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n        </ion-button>\r\n      <ion-title style=\"margin: auto;\">Your Professional Profile</ion-title>\r\n  </ion-row>\r\n  </ion-header>\r\n<ion-content class=\"login-content bg-class\" padding>\r\n    \r\n    <ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n      <ion-card-content style=\"color: black\">\r\n     <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n       Full Name\r\n     </ion-card-title>\r\n     \r\n  <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\" >First Name</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_firstname\" ></ion-input>\r\n  </ion-item>\r\n  <p style=\"color:red; margin-top:1%;\" *ngIf=\"validFirstName\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter A Valid Name!</p>\r\n  <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\">Last Name</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_lastname\" ></ion-input>\r\n  </ion-item>\r\n  <p style=\"color:red; margin-top:1%;\" *ngIf=\"validLastName\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter A Valid Name!</p>\r\n  \r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<!-- Address -->\r\n<ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n    <ion-card-content style=\"color: black\">\r\n   <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n     Address\r\n   </ion-card-title>\r\n<ion-item>\r\n    <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_address\" ></ion-input>\r\n</ion-item>\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<!-- Others -->\r\n<ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n  <ion-card-content style=\"color: black\">\r\n <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n  Others\r\n </ion-card-title>\r\n <!-- <ion-item>\r\n    <ion-label>Gender</ion-label>\r\n    <ion-select value=\"notifications\" interface=\"action-sheet\" [(ngModel)]=\"_gender\">\r\n      <ion-select-option value=\"Male\">Male</ion-select-option>\r\n      <ion-select-option value=\"Female\">Female</ion-select-option>\r\n    </ion-select>\r\n  </ion-item> -->\r\n  <ion-item>\r\n      <ion-label>Birthdate</ion-label>\r\n      <ion-datetime displayFormat=\"MMM/DD/YYYY\" placeholder=\"Select Date\" [(ngModel)]=\"_birthdate\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Phone Number:</ion-label>\r\n        <ion-input inputmode=\"number\" maxLength=\"11\" style=\"text-align: right\" [(ngModel)]=\"_phonenumber\" >\r\n        </ion-input>\r\n    </ion-item>\r\n\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n    <ion-card-content style=\"color: black\">\r\n   <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n    Expertise\r\n   </ion-card-title>\r\n   <!-- <ion-item>\r\n      <ion-label>Gender</ion-label>\r\n      <ion-select value=\"notifications\" interface=\"action-sheet\" [(ngModel)]=\"_gender\">\r\n        <ion-select-option value=\"Male\">Male</ion-select-option>\r\n        <ion-select-option value=\"Female\">Female</ion-select-option>\r\n      </ion-select>\r\n    </ion-item> -->\r\n    <ion-item>\r\n        <ion-label>Fields</ion-label>\r\n        <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" style=\"text-align: right\" [(ngModel)]=\"_skills\" >\r\n          </ion-input>\r\n      </ion-item>\r\n     \r\n  \r\n  </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card style=\"margin-left: 2px; background-color: white;\" >\r\n      <ion-card-content style=\"color: black\">\r\n      <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n        Certificates\r\n      </ion-card-title>\r\n      <ion-item>\r\n        <ion-label>Attachment 1:</ion-label>\r\n        <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" style=\"text-align: right\" [(ngModel)]=\"_skills\" >\r\n          </ion-input>\r\n        \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"dark\">Serial Number</ion-label>\r\n        <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\"></ion-input>\r\n      </ion-item>\r\n          \r\n            <ion-item>\r\n       Primary Attachment\r\n      <ion-img [src]=\"currentIDPhoto\" *ngIf=\"currentIDPhoto\" (click)=\"takePicture()\" style=\"margin-left: auto;\">\r\n      </ion-img>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Attachment 2:</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" style=\"text-align: right\" [(ngModel)]=\"_skills\" >\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\">Serial Number</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n     Secondary Attachment\r\n      <ion-img [src]=\"currentIDHandheld\" *ngIf=\"currentIDHandheld\" (click)=\"takePicture2()\" style=\"margin: auto;\">\r\n      </ion-img>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label>Attachment 3:</ion-label>\r\n        <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" style=\"text-align: right\" [(ngModel)]=\"_skills\" >\r\n          </ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"dark\">Serial Number</ion-label>\r\n        <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n       Tertiary Attachment\r\n        <ion-img [src]=\"currentIDHandheld\" *ngIf=\"currentIDHandheld\" (click)=\"takePicture2()\" style=\"margin: auto;\">\r\n        </ion-img>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  \r\n    </ion-card>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button class=\"log-google-button\" color=\"danger\" expand=\"block\" (click)=\"onUpdate()\">\r\n        SAVE PROFILE\r\n        <ion-icon name=\"arrow-round-forward\" style=\"position: absolute; right: 5%;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/settings-provider/settings-provider.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings-provider/settings-provider.module.ts ***!
  \***************************************************************/
/*! exports provided: SettingsProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsProviderPageModule", function() { return SettingsProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-provider.page */ "./src/app/settings-provider/settings-provider.page.ts");







const routes = [
    {
        path: '',
        component: _settings_provider_page__WEBPACK_IMPORTED_MODULE_6__["SettingsProviderPage"]
    }
];
let SettingsProviderPageModule = class SettingsProviderPageModule {
};
SettingsProviderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_provider_page__WEBPACK_IMPORTED_MODULE_6__["SettingsProviderPage"]]
    })
], SettingsProviderPageModule);



/***/ }),

/***/ "./src/app/settings-provider/settings-provider.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/settings-provider/settings-provider.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\nlabel#rounded {\n  border-radius: 15px;\n}\n\ndiv#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center;\n  font-family: \"Trebuchet MS\";\n}\n\n.description2 {\n  color: black;\n  font-size: 18px;\n  font-family: \"Trebuchet MS\";\n  text-align: center;\n}\n\n.log-fb-button {\n  margin-top: 40px;\n  font-weight: bold;\n}\n\n.log-google-button {\n  margin-top: 0px;\n  font-weight: bold;\n}\n\nion-input input {\n  text-align: right;\n}\n\nion-input input ::-webkit-input-placeholder {\n  text-align: right;\n}\n\nion-img {\n  height: 150px;\n  width: 150px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MtcHJvdmlkZXIvQzpcXFVzZXJzXFxNQUNSTzgtTkFUSFxcRG9jdW1lbnRzXFxEZXNrdG9wIE5hdGhcXGlzZXJiZmluYWwvc3JjXFxhcHBcXHNldHRpbmdzLXByb3ZpZGVyXFxzZXR0aW5ncy1wcm92aWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzLXByb3ZpZGVyL3NldHRpbmdzLXByb3ZpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0VBQWtGLDRCQUFBO0FDRXRGOztBRENJO0VBQ0UscUJBQUE7RUFBdUIsaUJBQUE7RUFDdkIsK0VBQUE7RUFBaUYsYUFBQTtFQUNqRixnRkFBQTtFQUFrRiw0QkFBQTtFQUNsRiw4RUFBQTtFQUFnRixxREFBQTtBQ010Rjs7QURMSTtFQUNFLG1CQUFBO0FDUU47O0FETEk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1FOOztBREhNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNNUjs7QURITTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ01SOztBREhNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDTVI7O0FESE07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDTVI7O0FESk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNPUjs7QURIUTtFQUNFLGlCQUFBO0FDTVY7O0FETFU7RUFDRSxpQkFBQTtBQ09aOztBREhNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTVIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy1wcm92aWRlci9zZXR0aW5ncy1wcm92aWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgIFxyXG4gIH1cclxuICAgIC5iZy1jbGFzc3tcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCAjMjA3Y2NhIDUxJSwgIzdkYjllOCAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovIH1cclxuICAgIGxhYmVsI3JvdW5kZWR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTVweDsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdiNjb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRlc2NyaXB0aW9uMiB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmxvZy1mYi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZy1nb29nbGUtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAiLCIubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xufVxuXG4uYmctY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7XG4gIC8qIE9sZCBicm93c2VycyAqL1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsICMyMDdjY2EgNTElLCAjN2RiOWU4IDEwMCUpO1xuICAvKiBGRjMuNi0xNSAqL1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbn1cblxubGFiZWwjcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmRpdiNjb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cblxuLmRlc2NyaXB0aW9uMiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nLWZiLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWdvb2dsZS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taW5wdXQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1pbnB1dCBpbnB1dCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings-provider/settings-provider.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/settings-provider/settings-provider.page.ts ***!
  \*************************************************************/
/*! exports provided: SettingsProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsProviderPage", function() { return SettingsProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);






let SettingsProviderPage = class SettingsProviderPage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        this.currentIDPhoto = '/assets/img/idPhoto.png';
        this.currentIDHandheld = '/assets/img/idPhoto.png';
    }
    back() {
        this.router.navigateByUrl('/pabs/pabs/pab3');
    }
    ionViewDidEnter() {
        this.getCredits();
    }
    getCredits() {
        this.storage.get('session').then((val) => {
            this.getInformation(val);
        });
    }
    getInformation(phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo=' + phoneNumber);
                this._id = response.data[0].ID;
                this._firstname = response.data[0].Firstname;
                this._lastname = response.data[0].Lastname;
                this._address = response.data[0].Address;
                this._phonenumber = response.data[0].ContactNo;
                this._skills = response.data[0].Skills;
                this._birthdate = response.data[0].Birthday;
                console.log(this._id);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    onUpdate() {
        const data = {
            ID: this._id,
            Firstname: this._firstname,
            Lastname: this._lastname,
            ContactNo: this._phonenumber,
            Address: this._address,
            Skills: this._skills,
            Birthday: this._birthdate
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(data),
            url: 'http://nathdaaco123-001-site1.ctempurl.com/api/Provider/UpdateProfile'
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
};
SettingsProviderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
SettingsProviderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-provider',
        template: __webpack_require__(/*! raw-loader!./settings-provider.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings-provider/settings-provider.page.html"),
        styles: [__webpack_require__(/*! ./settings-provider.page.scss */ "./src/app/settings-provider/settings-provider.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], SettingsProviderPage);



/***/ })

}]);
//# sourceMappingURL=settings-provider-settings-provider-module-es2015.js.map