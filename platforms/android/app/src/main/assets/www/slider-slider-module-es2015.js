(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider-slider-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/slider/slider.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slider/slider.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content bg-class\" padding>\r\n \r\n      <ion-slides  style=\"height: 100%\">\r\n        <ion-slide>\r\n            <!-- <img id='gear' src='assets/img/gear1.png'>\r\n            <img id='gear2' src='assets/img/gear1.png'>\r\n            <img id='gear3' src='assets/img/gear1.png'>\r\n           -->\r\n            <img src=\"assets/img/logo.png\">\r\n          <h2 style=\"font-family: 'Trebuchet MS'; \">Welcome to <b>iSerb</b></h2>\r\n          <p style=\" font-family: 'Trebuchet MS'; \"><b>iSerb </b>app helps you find a service you need near you!</p>\r\n          <div style=\"position: absolute; width: 100%; bottom:0;\">\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n          </div>\r\n\r\n     \r\n        </ion-slide>\r\n        \r\n        <ion-slide>\r\n            <img src=\"assets/img/slide-2.png\">\r\n          <h2 style=\" font-family: 'Trebuchet MS';\">Easy</h2>\r\n          <p style=\" font-family: 'Trebuchet MS';\"><b>iSerb</b> is easy to use. Find services that you need in just few clicks!\r\n            <div style=\"position: absolute;\r\n            width:100%;\r\n            bottom:0;\">\r\n            <ion-icon name=\"radio-button-on\"></ion-icon>\r\n            <ion-icon name=\"radio-button-on\"></ion-icon>\r\n            <ion-icon name=\"radio-button-off\"></ion-icon>\r\n            <ion-icon name=\"radio-button-off\"></ion-icon>\r\n            <ion-icon name=\"radio-button-off\"></ion-icon>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide>\r\n            <img src=\"assets/img/slide-3.png\">\r\n          <h2 style=\" font-family: 'Trebuchet MS';\">Fast</h2>\r\n          <p style=\" font-family: 'Trebuchet MS';\"><b>iSerb</b> provides fast service. Get the service you need in no time!</p>\r\n          <div style=\"position: absolute;\r\n          width:100%;\r\n          bottom:0;\">\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n        </div>\r\n\r\n        </ion-slide>\r\n        <ion-slide>\r\n            <img src=\"assets/img/reliable.png\">\r\n          <h2 style=\" font-family: 'Trebuchet MS';\">Reliable</h2>\r\n          <p style=\" font-family: 'Trebuchet MS';\"><b>iSerb</b> provides reliable service. Get the service you need from the best people in your area!</p>\r\n          <div style=\"position: absolute;\r\n          width:100%;\r\n          bottom:0;\">\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-off\"></ion-icon>\r\n        </div>\r\n        </ion-slide>\r\n\r\n        <ion-slide>\r\n            <img src=\"assets/img/ready.png\">\r\n          <h2 style=\" font-family: 'Trebuchet MS';\">Ready to Use?</h2>\r\n          <ion-button  href=\"/home\" color=\"success\">Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\r\n          <div style=\"position: absolute;\r\n          width:100%;\r\n          bottom:0;\">\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon name=\"radio-button-on\"></ion-icon>\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n\r\n    </ion-content>\r\n   \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/slider/slider.module.ts":
/*!*****************************************!*\
  !*** ./src/app/slider/slider.module.ts ***!
  \*****************************************/
/*! exports provided: SliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageModule", function() { return SliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.page */ "./src/app/slider/slider.page.ts");







const routes = [
    {
        path: '',
        component: _slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]
    }
];
let SliderPageModule = class SliderPageModule {
};
SliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_slider_page__WEBPACK_IMPORTED_MODULE_6__["SliderPage"]]
    })
], SliderPageModule);



/***/ }),

/***/ "./src/app/slider/slider.page.scss":
/*!*****************************************!*\
  !*** ./src/app/slider/slider.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL0M6XFxVc2Vyc1xcTUFDUk84LU5BVEhcXERvY3VtZW50c1xcRGVza3RvcCBOYXRoXFxpc2VyYmZpbmFsL3NyY1xcYXBwXFxzbGlkZXJcXHNsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NsaWRlci9zbGlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0ZBQUE7RUFBa0YsNEJBQUE7QUNDcEY7O0FERUU7RUFDRSxxQkFBQTtFQUF1QixpQkFBQTtFQUN2QiwrRUFBQTtFQUFpRixhQUFBO0VBQ2pGLGdGQUFBO0VBQWtGLDRCQUFBO0VBQ2xGLDhFQUFBO0VBQWdGLHFEQUFBO0FDS3BGOztBREZFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ0tKOztBRERFO0VBQ0UsY0FBQTtBQ0lKOztBRERFO0VBQ0Usa0JBQUE7QUNJSjs7QURERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVyL3NsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgIFxyXG59XHJcbiAgLmJnLWNsYXNze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwgIzIwN2NjYSA1MSUsICM3ZGI5ZTggMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovIH1cclxuICBcclxuICBcclxuICA6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZSA+IGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZSA+IGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7ICBcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAzNnB4IDA7XHJcbiAgfVxyXG5cclxuXHJcbi8vICAgI2dlYXJ7XHJcbi8vICAgICBhbmltYXRpb24tbmFtZTogY2t3O1xyXG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuLy8gICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4vLyAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gfVxyXG4vLyAjZ2VhcjJ7XHJcbi8vICAgICBhbmltYXRpb24tbmFtZTogY2N3O1xyXG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuLy8gICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4vLyAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuLy8gICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuLy8gfVxyXG4vLyAjZ2VhcjN7XHJcbi8vICAgYW5pbWF0aW9uLW5hbWU6IGNjdztcclxuLy8gICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4vLyAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4vLyAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbi8vICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbi8vIH1cclxuLy8gQGtleWZyYW1lcyBja3cge1xyXG4vLyAgICAgMCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgMTAwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBAa2V5ZnJhbWVzIGNjdyB7XHJcbi8vICAgICAwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICAgIH1cclxuLy8gICAgIDEwMCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbiAgIiwiLmxvZ2luLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbn1cblxuLmJnLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjk4OWQ4O1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCAjMjA3Y2NhIDUxJSwgIzdkYjllOCAxMDAlKTtcbiAgLyogRkYzLjYtMTUgKi9cbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCMyMDdjY2EgNTElLCM3ZGI5ZTggMTAwJSk7XG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG59XG5cbjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2xpZGUgPiBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuaW9uLXNsaWRlID4gaW1nIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzNnB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/slider/slider.page.ts":
/*!***************************************!*\
  !*** ./src/app/slider/slider.page.ts ***!
  \***************************************/
/*! exports provided: SliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPage", function() { return SliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderPage = class SliderPage {
    constructor() { }
    ngOnInit() {
    }
};
SliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.page.html */ "./node_modules/raw-loader/index.js!./src/app/slider/slider.page.html"),
        styles: [__webpack_require__(/*! ./slider.page.scss */ "./src/app/slider/slider.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SliderPage);



/***/ })

}]);
//# sourceMappingURL=slider-slider-module-es2015.js.map