(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color:black;\">\r\n    <ion-toolbar [color]=\"dynamicColor\">\r\n    <ion-title style=\"color: white;\">\r\n      Home\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-class\">\r\n    <ion-card class=\"welcome-card\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle style=\"color:white;\">Get Started\r\n            <ion-img src=\"/assets/img/logo.png\" style=\"width:30%; height: 30%; overflow: visible; float: right;\">\r\n            </ion-img></ion-card-subtitle>\r\n        <ion-card-title>Welcome to iSerb </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p style=\"color:white;\">Now that your account has been created, you'll want to start out to use our features and components. Check out some of the services we offer below for next steps.</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-item href=\"\" (click)=\"showHideAgriculture()\">\r\n          <ion-icon class=\"ion-md-time\" name=\"leaf\" slot=\"start\"></ion-icon>\r\n          <ion-label>Agriculture</ion-label>\r\n        </ion-item>\r\n        <ion-card class=\"welcome-card\" *ngIf=\"servicesBoolean[0]\" >\r\n            <ion-card-content>\r\n              <p>Browse services regarding Agriculture such as Crop Harvesting etc.</p>\r\n              <ion-button color=\"primary\" fill=\"outline\" style=\"width:100%\">Browse</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n    \r\n        <ion-item class=\"ion-itemlist\" href=\"\" (click)=\"showHideArchitecture()\">    \r\n          <ion-icon class=\"ion-md-time\" name=\"logo-designernews\" slot=\"start\"></ion-icon>\r\n          <ion-label>Architecture and Design</ion-label>\r\n        </ion-item>\r\n        <ion-card style=\"background-color: white;\" class=\"welcome-card\" *ngIf=\"servicesBoolean[1]\">\r\n            <ion-card-content>\r\n              <p style=\"color:white;\">Browse services regarding Architecture and Design such as Building Infrastractures etc.</p>\r\n              <ion-button color=\"primary\" fill=\"outline\" style=\"width:100%\">Browse</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n    \r\n        <ion-item href=\"\" (click)=\"showHideBusiness()\">\r\n          <ion-icon class=\"ion-md-time\" name=\"briefcase\" slot=\"start\"></ion-icon>\r\n          <ion-label>Business</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item href=\"\">\r\n            <ion-icon class=\"ion-md-time\" slot=\"start\" name=\"flask\"></ion-icon>\r\n            <ion-label>Health Sciences</ion-label>\r\n          </ion-item>\r\n          <ion-item href=\"/provider-ui\">\r\n            <ion-icon class=\"ion-md-time\" slot=\"start\" name=\"school\"></ion-icon>\r\n            <ion-label>Education</ion-label>\r\n          </ion-item>\r\n          <ion-item href=\"\">\r\n            <ion-icon class=\"ion-md-time\" slot=\"start\" name=\"construct\"></ion-icon>\r\n            <ion-label>Engineering</ion-label>\r\n          </ion-item>\r\n          <ion-item href=\"\">\r\n            <ion-icon class=\"ion-md-time\" slot=\"start\" name=\"people\"></ion-icon>\r\n            <ion-label>Family and Consumer Care</ion-label>\r\n          </ion-item>\r\n          <ion-item href=\"/transpo\">\r\n            <ion-icon class=\"ion-md-time\" slot=\"start\" name=\"car\"></ion-icon>\r\n            <ion-label>Transportation</ion-label>\r\n          </ion-item>\r\n          <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\r\n            <ion-icon class=\"ion-md-time\" slot=\"start\" name=\"build\"></ion-icon>\r\n            <ion-label>Other Errands</ion-label>\r\n          </ion-item>\r\n      </ion-card>\r\n      <!-- <ion-card class=\"welcome-height\">\r\n        <ion-item>\r\n          <ion-icon class=\"ion-md-time\" name=\"person\" slot=\"start\"></ion-icon>\r\n          <ion-label>Confirm your Identity</ion-label>\r\n          \r\n        </ion-item>\r\n      </ion-card> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n  color: white;\n}\n\n.textCenter {\n  text-align: center;\n  color: white;\n}\n\n.textBold {\n  text-align: center;\n  font-weight: bold;\n  font-size: 30px;\n  color: black;\n}\n\n.ion-md-time {\n  color: #2989d8 !important;\n}\n\n.welcome-height {\n  height: 200px;\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXE1BQ1JPOC1OQVRIXFxEb2N1bWVudHNcXERlc2t0b3AgTmF0aFxcaXNlcmJmaW5hbC9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNBLHlCQUFBO0FDRUE7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FETUE7RUFDRSxxQkFBQTtFQUF1QixpQkFBQTtFQUN2QiwrRUFBQTtFQUFpRixhQUFBO0VBQ2pGLGdGQUFBO0VBQWtGLDRCQUFBO0VBQ2xGLDhFQUFBO0VBQWdGLHFEQUFBO0FDQ2xGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuLnRleHRDZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi50ZXh0Qm9sZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5pb24tbWQtdGltZXtcclxuY29sb3I6IzI5ODlkOCAhaW1wb3J0YW50O1xyXG59XHJcbi53ZWxjb21lLWhlaWdodHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiRjb2xvcnM6IChcclxuIGJsdWU6ICAgICMzODdlZjUsXHJcbiBzZWNvbmRhcnk6ICAjMzJkYjY0LFxyXG4gZGFuZ2VyOiAgICAgI2Y1M2QzZCxcclxuIGxpZ2h0OiAgICAgICNmNGY0ZjQsICBcclxuIGRhcms6ICAgICAgICAgICMyMjIgXHJcbik7XHJcbi5iZy1jbGFzc3tcclxuICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi8gfVxyXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0Q2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0Qm9sZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW9uLW1kLXRpbWUge1xuICBjb2xvcjogIzI5ODlkOCAhaW1wb3J0YW50O1xufVxuXG4ud2VsY29tZS1oZWlnaHQge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uYmctY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7XG4gIC8qIE9sZCBicm93c2VycyAqL1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsICMyMDdjY2EgNTElLCAjN2RiOWU4IDEwMCUpO1xuICAvKiBGRjMuNi0xNSAqL1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.servicesBoolean = new Array(4);
        this.dynamicColor = 'blue';
    }
    Tab1Page.prototype.showHideAgriculture = function () {
        if (this.servicesBoolean[0] == true) {
            this.servicesBoolean[0] = false;
            this.servicesBoolean.fill(false);
        }
        else {
            this.servicesBoolean.fill(false);
            this.servicesBoolean[0] = !this.servicesBoolean[0];
        }
    };
    Tab1Page.prototype.showHideArchitecture = function () {
        if (this.servicesBoolean[1] == true) {
            this.servicesBoolean[1] = false;
            this.servicesBoolean.fill(false);
        }
        else {
            this.servicesBoolean.fill(false);
            this.servicesBoolean[1] = !this.servicesBoolean[0];
        }
    };
    Tab1Page.prototype.showHideBusiness = function () {
        if (this.servicesBoolean[2] == true) {
            this.servicesBoolean[2] = false;
            this.servicesBoolean.fill(false);
        }
        else {
            this.servicesBoolean.fill(false);
            this.servicesBoolean[2] = !this.servicesBoolean[0];
        }
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map