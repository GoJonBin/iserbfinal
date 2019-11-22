(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: black; color: white; padding-bottom: 1%; padding-top: 1%;\">\r\n  <ion-row>\r\n       <ion-button fill=\"clear\" style=\"color: white;\">\r\n            <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n        </ion-button>\r\n      <ion-title style=\"margin: auto;\">Registration</ion-title>\r\n  </ion-row>\r\n  </ion-header>\r\n<ion-content class=\"login-content bg-class\" padding>\r\n    \r\n    <ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n      <ion-card-content style=\"color: black\">\r\n     <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n       Full Name\r\n     </ion-card-title>\r\n     \r\n  <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\" >First Name</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_firstname\" (click)=\"onClickFirstName()\" ></ion-input>\r\n  </ion-item>\r\n  <p style=\"color:red; margin-top:1%;\" *ngIf=\"validFirstName\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter A Valid Name!</p>\r\n  <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\">Last Name</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_lastname\" (click)=\"onClickLastName()\" ></ion-input>\r\n  </ion-item>\r\n  <p style=\"color:red; margin-top:1%;\" *ngIf=\"validLastName\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter A Valid Name!</p>\r\n  <ion-item >\r\n      <ion-label position=\"floating\" color=\"dark\">Middle Name</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_middlename\"></ion-input>\r\n  </ion-item>\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<!-- Address -->\r\n<ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n    <ion-card-content style=\"color: black\">\r\n   <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n     Address\r\n   </ion-card-title>\r\n<ion-item>\r\n    <ion-label position=\"floating\" color=\"dark\" >Street</ion-label>\r\n    <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_streetname\" (click)=\"onClickStreet()\" ></ion-input>\r\n</ion-item>\r\n<p style=\"color:red; margin-top:1%;\" *ngIf=\"validStreet\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter Street Name!</p>\r\n<ion-item>\r\n    <ion-label position=\"floating\" color=\"dark\">Barangay</ion-label>\r\n    <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_barangayname\" (click)=\"onClickBarangay()\"></ion-input>\r\n</ion-item>\r\n<p style=\"color:red; margin-top:1%;\" *ngIf=\"validBarangay\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter Barangay Name!</p>\r\n\r\n<ion-item >\r\n    <ion-label position=\"floating\" color=\"dark\">House/Unit No.</ion-label>\r\n    <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_unitname\" (click)=\"onClickHouseNo()\" ></ion-input>\r\n</ion-item>\r\n<p style=\"color:red; margin-top:1%;\" *ngIf=\"validUnit\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter House No.!</p>\r\n\r\n<ion-item >\r\n    <ion-label position=\"floating\" color=\"dark\">City</ion-label>\r\n    <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" [(ngModel)]=\"_cityname\" (click)=\"onClickCity()\" ></ion-input>\r\n</ion-item>\r\n<p style=\"color:red; margin-top:1%;\" *ngIf=\"validCity\"> <ion-icon name=\"information-circle-outline\"></ion-icon> Please Enter City!</p>\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<!-- Others -->\r\n<ion-card style=\"margin-left: 2px; background-color: white;\"> \r\n  <ion-card-content style=\"color: black\">\r\n <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n  Others\r\n </ion-card-title>\r\n <ion-item>\r\n    <ion-label>Gender</ion-label>\r\n    <ion-select value=\"notifications\" interface=\"action-sheet\" [(ngModel)]=\"_gender\">\r\n      <ion-select-option value=\"Male\">Male</ion-select-option>\r\n      <ion-select-option value=\"Female\">Female</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-label>Birthdate</ion-label>\r\n      <ion-datetime displayFormat=\"MMM/DD/YYYY\" placeholder=\"Select Date\" [(ngModel)]=\"_birthdate\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Phone Number:</ion-label>\r\n    \r\n        \r\n    \r\n        <ion-input inputmode=\"number\" maxLength=\"11\" style=\"text-align: right\" [(ngModel)]=\"_phonenumber\">\r\n          \r\n        </ion-input>\r\n      \r\n      \r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label>Register as:</ion-label>\r\n        <ion-select value=\"notifications\" interface=\"action-sheet\" [(ngModel)]=\"regAs\" (ionChange)=\"showSelectValue(regAs)\">\r\n          <ion-select-option value=\"1\" name=\"\">Seeker</ion-select-option>\r\n          <ion-select-option value=\"2\">Provider</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n</ion-card-content>\r\n</ion-card>\r\n<!-- \r\nProvider Details -->\r\n<ion-card style=\"margin-left: 2px; background-color: white;\" *ngIf=\"providerInfo\">\r\n    <ion-card-content style=\"color: black\">\r\n    <ion-card-title style=\"padding-top: 1%; padding-bottom: 1%;\">\r\n      ID\r\n    </ion-card-title>\r\n    <ion-item>\r\n      <ion-label>ID Type</ion-label>\r\n      <ion-select placeholder=\"Select One\" [(ngModel)]=\"_ids1\">\r\n        <ion-select-option value=\"SSS\">SSS</ion-select-option>\r\n        <ion-select-option value=\"TIN\">TIN ID</ion-select-option>\r\n        <ion-select-option value=\"DL\">Driver's License</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\">ID Number</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\"></ion-input>\r\n    </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\" color=\"dark\">Expiry Date</ion-label>\r\n            <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n     Primary ID\r\n    <ion-img [src]=\"currentIDPhoto\" *ngIf=\"currentIDPhoto\" (click)=\"takePicture()\" style=\"margin-left: auto;\">\r\n    </ion-img>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>ID Type</ion-label>\r\n    <ion-select placeholder=\"Select One\" [(ngModel)]=\"_ids2\">\r\n      <ion-select-option value=\"barangay\">Barangay ID</ion-select-option>\r\n      <ion-select-option value=\"police ID\">POLICE ID</ion-select-option>\r\n      <ion-select-option value=\"postalID\">Postal ID</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" color=\"dark\">ID Number</ion-label>\r\n    <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n   Secondary ID\r\n    <ion-img [src]=\"currentIDHandheld\" *ngIf=\"currentIDHandheld\" (click)=\"takePicture2()\" style=\"margin: auto;\">\r\n    </ion-img>\r\n  </ion-item>\r\n  </ion-card-content>\r\n  <ion-item>\r\n      <ion-label position=\"floating\" color=\"dark\">Service to be provided:</ion-label>\r\n      <ion-select placeholder=\"Select One\" [(ngModel)]=\"_services\">\r\n          <!-- <ion-select-option value=\"1\">Agriculture</ion-select-option>\r\n          <ion-select-option value=\"2\">Architecture and Design</ion-select-option>\r\n          <ion-select-option value=\"3\">Business</ion-select-option>\r\n          <ion-select-option value=\"4\">Health Sciences</ion-select-option> -->\r\n          <ion-select-option value=\"5\">Education</ion-select-option>\r\n          <!-- <ion-select-option value=\"6\">Family and Consumer Care</ion-select-option> -->\r\n          <ion-select-option value=\"7\">Transportation</ion-select-option>\r\n          <!-- <ion-select-option value=\"8\">Other Errands</ion-select-option> -->\r\n        </ion-select>\r\n        <ion-label position=\"floating\" color=\"dark\">Specific Service(please specify):</ion-label>\r\n      <ion-input type=\"text\" [required]=\"true\" color=\"dark\" inputmode=\"text\" ></ion-input>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <button *ngIf=\"policybutton\" style=\"background-color:#7db9e8;color: blue;font-weight: bold;font:30px;\" (click)=\"presentModal()\" clear>Read Privacy Policy</button>\r\n\r\n  <!--HANG-->\r\n  <div>\r\n  <ion-row *ngIf=\"registrationbutton\">\r\n    <ion-col>\r\n      <ion-button class=\"log-google-button\" color=\"danger\" expand=\"block\" (click)=\"onRegister()\">\r\n        Register\r\n        <ion-icon name=\"arrow-round-forward\" style=\"position: absolute; right: 5%;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");







var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]
    }
];
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\nlabel#rounded {\n  border-radius: 15px;\n}\n\ndiv#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center;\n  font-family: \"Trebuchet MS\";\n}\n\n.description2 {\n  color: black;\n  font-size: 18px;\n  font-family: \"Trebuchet MS\";\n  text-align: center;\n}\n\n.log-fb-button {\n  margin-top: 40px;\n  font-weight: bold;\n}\n\n.log-google-button {\n  margin-top: 0px;\n  font-weight: bold;\n}\n\nion-input input {\n  text-align: right;\n}\n\nion-input input ::-webkit-input-placeholder {\n  text-align: right;\n}\n\nion-img {\n  height: 150px;\n  width: 150px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0M6XFxVc2Vyc1xcTUFDUk84LU5BVEhcXERvY3VtZW50c1xcRGVza3RvcCBOYXRoXFxpc2VyYmZpbmFsL3NyY1xcYXBwXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0ZBQUE7RUFBa0YsNEJBQUE7QUNFcEY7O0FEQ0U7RUFDRSxxQkFBQTtFQUF1QixpQkFBQTtFQUN2QiwrRUFBQTtFQUFpRixhQUFBO0VBQ2pGLGdGQUFBO0VBQWtGLDRCQUFBO0VBQ2xGLDhFQUFBO0VBQWdGLHFEQUFBO0FDTXBGOztBRExFO0VBQ0UsbUJBQUE7QUNRSjs7QURMRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FESEk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ01OOztBREhJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDTU47O0FESEk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNNTjs7QURISTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNNTjs7QURKSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ09OOztBREhNO0VBQ0UsaUJBQUE7QUNNUjs7QURMUTtFQUNFLGlCQUFBO0FDT1Y7O0FESEk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNNTiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgIFxyXG59XHJcbiAgLmJnLWNsYXNze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovIH1cclxuICBsYWJlbCNyb3VuZGVke1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4OyBcclxuICB9XHJcbiAgXHJcbiAgZGl2I2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDphdXRvOyBcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUyc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbjIge1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9nLWZiLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmxvZy1nb29nbGUtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24taW1ne1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgIiwiLmxvZ2luLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbn1cblxuLmJnLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4O1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCAjMjA3Y2NhIDUxJSwgIzdkYjllOCAxMDAlKTtcbiAgLyogRkYzLjYtMTUgKi9cbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7XG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG59XG5cbmxhYmVsI3JvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5kaXYjY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG59XG5cbi5kZXNjcmlwdGlvbjIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZy1mYi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZy1nb29nbGUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWlucHV0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5pb24taW5wdXQgaW5wdXQgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");












var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(datePicker, camera, formBuilder, router, alertController, toastController, modalController) {
        this.datePicker = datePicker;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.registrationbutton = false;
        this.policybutton = true;
        this.validCity = false;
        this.providerInfo = false;
        this.streetAgree = false;
    }
    RegistrationPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: 'Please check Error!.',
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
    RegistrationPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData1) {
            _this.currentIDPhoto = 'data:image/jpeg;base64,' + imageData1;
        }, function (err) {
            console.log("Camera issue:" + err);
        });
    };
    RegistrationPage.prototype.takePicture2 = function () {
        var _this = this;
        var options2 = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options2).then(function (imageData2) {
            _this.currentIDHandheld = 'data:image/jpeg;base64,' + imageData2;
        }, function (err) {
            console.log("Camera issue:" + err);
        });
    };
    RegistrationPage.prototype.ngOnInit = function () {
        this.currentIDPhoto = '/assets/img/idPhoto.png';
        this.currentIDHandheld = '/assets/img/idPhoto.png';
    };
    RegistrationPage.prototype.loginErrorToast = function (messages) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: messages,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.onRegister = function () {
        var _this = this;
        this.checkName();
        this.checkAddress();
        if (this.regAs == "2") {
            if (this._firstname != "" || this._lastname != "" || this._phonenumber != "" || this._birthdate != "" || this.regAs != "" || this._gender != ""
                || this._unitname != "" || this._streetname != "" || this._barangayname != "" || this._cityname != "") {
                this.getValidation().then(function (data) {
                    var res = data;
                    if (res == "0") {
                        var data_1 = {
                            Firstname: _this._firstname,
                            Lastname: _this._lastname,
                            ContactNo: _this._phonenumber,
                            Birthday: _this._birthdate,
                            CustomerType: _this.regAs,
                            Gender: _this._gender,
                            Address: _this._unitname + " " + _this._streetname + "," + _this._barangayname + "," + _this._cityname,
                            Attachment1: _this._ids1,
                            Attachment2: _this._ids2,
                            ServiceType: _this._services
                        };
                        axios__WEBPACK_IMPORTED_MODULE_7___default()({
                            method: 'POST',
                            headers: { 'content-type': 'application/x-www-form-urlencoded' },
                            data: qs__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(data_1),
                            url: 'http://nathdaaco123-001-site1.ctempurl.com/api/Registration/AddCustomer'
                        }).then(function (response) {
                            console.log(response.data);
                        }).catch(function (error) {
                            console.log(error);
                        });
                        _this.router.navigateByUrl('/pabs');
                    }
                    else {
                        _this.loginErrorToast('Use Another Phone Number !');
                    }
                });
            }
            else {
                this.loginErrorToast('Please Fill All Fields !');
            }
        }
        else if (this.regAs == "1") {
            if (this._firstname != "" || this._lastname != "" || this._phonenumber != "" || this._birthdate != "" || this.regAs != "" || this._gender != ""
                || this._unitname != "" || this._streetname != "" || this._barangayname != "" || this._cityname != "") {
                this.getValidation().then(function (data) {
                    var res = data;
                    if (res == "0") {
                        var dataSeeKer = {
                            Firstname: _this._firstname,
                            Lastname: _this._lastname,
                            ContactNo: _this._phonenumber,
                            Birthday: _this._birthdate,
                            CustomerType: _this.regAs,
                            Gender: _this._gender,
                            Address: _this._unitname + " " + _this._streetname + "," + _this._barangayname + "," + _this._cityname
                        };
                        axios__WEBPACK_IMPORTED_MODULE_7___default()({
                            method: 'POST',
                            headers: { 'content-type': 'application/x-www-form-urlencoded' },
                            data: qs__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(dataSeeKer),
                            url: 'http://nathdaaco123-001-site1.ctempurl.com/api/Registration/AddCustomerSeeker'
                        }).then(function (response) {
                            console.log(response.data);
                        }).catch(function (error) {
                            console.log(error);
                        });
                        _this.router.navigateByUrl('/tabs');
                    }
                    else {
                        _this.loginErrorToast('Use Another Phone Number !');
                    }
                });
            }
        }
        else {
            this.loginErrorToast('Please Fill All Fields !');
        }
    };
    RegistrationPage.prototype.showSelectValue = function (regAs) {
        if (regAs == "2") {
            console.log("Provider");
            this.providerInfo = true;
        }
        else {
            console.log("Seeker");
            this.providerInfo = false;
        }
    };
    RegistrationPage.prototype.checkName = function () {
        if (!/[a-zA-Z]+$/.test(this._firstname)) {
            this.validFirstName = true;
            this.nameAgree = false;
        }
        if (!/[a-zA-Z]+$/.test(this._lastname)) {
            this.validLastName = true;
            this.nameAgree = false;
        }
        if (/[a-zA-Z]+$/.test(this._firstname) && /[a-zA-Z]+$/.test(this._lastname)) {
            this.nameAgree = true;
        }
    };
    RegistrationPage.prototype.checkAddress = function () {
        if ((/^ *$/.test(this._streetname))) {
            this.validStreet = true;
            this.streetAgree = false;
        }
        if ((/^ *$/.test(this._barangayname))) {
            this.validBarangay = true;
            this.streetAgree = false;
        }
        if (/^ *$/.test(this._unitname)) {
            this.validUnit = true;
            this.streetAgree = false;
        }
        if (/^ *$/.test(this._cityname)) {
            this.validCity = true;
            this.streetAgree = false;
        }
        if (!/^ *$/.test(this._streetname) && !/^ *$/.test(this._unitname) && !/^ *$/.test(this._barangayname) && !/^ *$/.test(this._cityname)) {
            this.streetAgree = true;
        }
    };
    RegistrationPage.prototype.onClickFirstName = function () {
        this.validFirstName = false;
    };
    RegistrationPage.prototype.onClickLastName = function () {
        this.validLastName = false;
    };
    RegistrationPage.prototype.onClickStreet = function () {
        this.validStreet = false;
    };
    RegistrationPage.prototype.onClickBarangay = function () {
        this.validBarangay = false;
    };
    RegistrationPage.prototype.onClickHouseNo = function () {
        this.validUnit = false;
    };
    RegistrationPage.prototype.onClickCity = function () {
        this.validCity = false;
    };
    RegistrationPage.prototype.getValidation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, valid, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Login/GetCustomer?ContactNo=' + this._phonenumber)];
                    case 1:
                        response = _a.sent();
                        valid = response.data[0].UserExists;
                        return [2 /*return*/, valid];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyPage"],
                            componentProps: {
                                'firstName': 'Douglas',
                                'lastName': 'Adams',
                                'middleInitial': 'N'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        this.registrationbutton = true;
                        this.policybutton = false;
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegistrationPage.ctorParameters = function () { return [
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.page.html"),
            styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/registration/registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es5.js.map