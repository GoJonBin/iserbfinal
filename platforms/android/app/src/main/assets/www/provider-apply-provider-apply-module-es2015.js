(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provider-apply-provider-apply-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/provider-apply/provider-apply.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/provider-apply/provider-apply.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>provider-apply</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/img/joed.jpeg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Name: Joed Lopez</h2>\r\n          <h3>Looking for: Teacher</h3>\r\n          <h3>Offer:<ion-icon name=\"cash\"></ion-icon> P10,000</h3>\r\n          <p>Location: <ion-icon name=\"pin\"></ion-icon>Malabon City</p>\r\n          \r\n          <ion-button >Apply</ion-button>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/provider-apply/provider-apply.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/provider-apply/provider-apply.module.ts ***!
  \*********************************************************/
/*! exports provided: ProviderApplyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderApplyPageModule", function() { return ProviderApplyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_apply_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider-apply.page */ "./src/app/provider-apply/provider-apply.page.ts");







const routes = [
    {
        path: '',
        component: _provider_apply_page__WEBPACK_IMPORTED_MODULE_6__["ProviderApplyPage"]
    }
];
let ProviderApplyPageModule = class ProviderApplyPageModule {
};
ProviderApplyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_provider_apply_page__WEBPACK_IMPORTED_MODULE_6__["ProviderApplyPage"]]
    })
], ProviderApplyPageModule);



/***/ }),

/***/ "./src/app/provider-apply/provider-apply.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/provider-apply/provider-apply.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyLWFwcGx5L3Byb3ZpZGVyLWFwcGx5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/provider-apply/provider-apply.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/provider-apply/provider-apply.page.ts ***!
  \*******************************************************/
/*! exports provided: ProviderApplyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderApplyPage", function() { return ProviderApplyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProviderApplyPage = class ProviderApplyPage {
    constructor() { }
    ngOnInit() {
    }
};
ProviderApplyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider-apply',
        template: __webpack_require__(/*! raw-loader!./provider-apply.page.html */ "./node_modules/raw-loader/index.js!./src/app/provider-apply/provider-apply.page.html"),
        styles: [__webpack_require__(/*! ./provider-apply.page.scss */ "./src/app/provider-apply/provider-apply.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProviderApplyPage);



/***/ })

}]);
//# sourceMappingURL=provider-apply-provider-apply-module-es2015.js.map