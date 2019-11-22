(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-qr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/qr/qr.page.html":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/qr/qr.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Ionic 4 QR/ Barcode Scanner\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content ion-padding>\r\n\r\n    <h1>Enter Value to Create QR code</h1>\r\n    <ion-input type=\"text\" [(ngModel)]=\"encodedData\"></ion-input>\r\n  \r\n    <ion-button (click)=\"encodedText()\">\r\n      Create QR\r\n    </ion-button>\r\n\r\n  <!-- <h1>Click Button To Scan</h1>\r\n\r\n  <ion-button (click)=\"scanCode()\">\r\n    Scan Code\r\n  </ion-button>\r\n\r\n  <div *ngIf=\"scannedData\">\r\n    <p>\r\n      Scanned Code Text : <b>{{ scannedData[\"text\"] }}</b>\r\n    </p>\r\n    <p>\r\n      Scanned Code Format : <b>{{ scannedData[\"format\"] }}</b>\r\n    </p>\r\n  </div> -->\r\n\r\n \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/qr/qr.module.ts":
/*!*********************************!*\
  !*** ./src/app/qr/qr.module.ts ***!
  \*********************************/
/*! exports provided: QrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPageModule", function() { return QrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr.page */ "./src/app/qr/qr.page.ts");







const routes = [
    {
        path: '',
        component: _qr_page__WEBPACK_IMPORTED_MODULE_6__["QrPage"]
    }
];
let QrPageModule = class QrPageModule {
};
QrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_qr_page__WEBPACK_IMPORTED_MODULE_6__["QrPage"]]
    })
], QrPageModule);



/***/ }),

/***/ "./src/app/qr/qr.page.scss":
/*!*********************************!*\
  !*** ./src/app/qr/qr.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: none transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXIvQzpcXFVzZXJzXFxNQUNSTzgtTkFUSFxcRG9jdW1lbnRzXFxEZXNrdG9wIE5hdGhcXGlzZXJiZmluYWwvc3JjXFxhcHBcXHFyXFxxci5wYWdlLnNjc3MiLCJzcmMvYXBwL3FyL3FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9xci9xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/qr/qr.page.ts":
/*!*******************************!*\
  !*** ./src/app/qr/qr.page.ts ***!
  \*******************************/
/*! exports provided: QrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPage", function() { return QrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");



let QrPage = class QrPage {
    constructor(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        //Options
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
    }
    ngOnInit() {
    }
    scanCode() {
        this.barcodeScanner
            .scan()
            .then(barcodeData => {
            alert("Barcode data " + JSON.stringify(barcodeData));
            this.scannedData = barcodeData;
        })
            .catch(err => {
            console.log("Error", err);
        });
    }
    encodedText() {
        this.barcodeScanner
            .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedData)
            .then(encodedData => {
            console.log(encodedData);
            this.encodedData = encodedData;
        }, err => {
            console.log("Error occured : " + err);
        });
    }
};
QrPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] }
];
QrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qr',
        template: __webpack_require__(/*! raw-loader!./qr.page.html */ "./node_modules/raw-loader/index.js!./src/app/qr/qr.page.html"),
        styles: [__webpack_require__(/*! ./qr.page.scss */ "./src/app/qr/qr.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]])
], QrPage);



/***/ })

}]);
//# sourceMappingURL=qr-qr-module-es2015.js.map