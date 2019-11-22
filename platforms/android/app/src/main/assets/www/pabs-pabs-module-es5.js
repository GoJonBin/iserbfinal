(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pabs-pabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pabs/pabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pabs/pabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"pab1\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"pab2\">\r\n      <ion-icon name=\"cash\"></ion-icon>\r\n      <ion-label>Payment</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"pab3\">\r\n      <ion-icon name=\"contact\"></ion-icon>\r\n      <ion-label>User</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/pabs/pabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/pabs/pabs.module.ts ***!
  \*************************************/
/*! exports provided: PabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PabsPageModule", function() { return PabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pabs.router.module */ "./src/app/pabs/pabs.router.module.ts");
/* harmony import */ var _pabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pabs.page */ "./src/app/pabs/pabs.page.ts");







var PabsPageModule = /** @class */ (function () {
    function PabsPageModule() {
    }
    PabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _pabs_router_module__WEBPACK_IMPORTED_MODULE_5__["PabsPageRoutingModule"]
            ],
            declarations: [_pabs_page__WEBPACK_IMPORTED_MODULE_6__["PabsPage"]]
        })
    ], PabsPageModule);
    return PabsPageModule;
}());



/***/ }),

/***/ "./src/app/pabs/pabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/pabs/pabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhYnMvcGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pabs/pabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/pabs/pabs.page.ts ***!
  \***********************************/
/*! exports provided: PabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PabsPage", function() { return PabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PabsPage = /** @class */ (function () {
    function PabsPage() {
    }
    PabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pabs',
            template: __webpack_require__(/*! raw-loader!./pabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pabs/pabs.page.html"),
            styles: [__webpack_require__(/*! ./pabs.page.scss */ "./src/app/pabs/pabs.page.scss")]
        })
    ], PabsPage);
    return PabsPage;
}());



/***/ }),

/***/ "./src/app/pabs/pabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/pabs/pabs.router.module.ts ***!
  \********************************************/
/*! exports provided: PabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PabsPageRoutingModule", function() { return PabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pabs.page */ "./src/app/pabs/pabs.page.ts");




var routes = [
    {
        path: 'pabs',
        component: _pabs_page__WEBPACK_IMPORTED_MODULE_3__["PabsPage"],
        children: [
            {
                path: 'pab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../pab1/pab1.module#Pab1PageModule'
                    }
                ]
            },
            {
                path: 'pab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../pab2/pab2.module#Pab2PageModule'
                    }
                ]
            },
            {
                path: 'pab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../pab3/pab3.module#Pab3PageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/pabs/pab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/pabs/pabs/pab1',
        pathMatch: 'full'
    }
];
var PabsPageRoutingModule = /** @class */ (function () {
    function PabsPageRoutingModule() {
    }
    PabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PabsPageRoutingModule);
    return PabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pabs-pabs-module-es5.js.map