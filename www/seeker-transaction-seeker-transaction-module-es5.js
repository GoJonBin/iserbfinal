(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seeker-transaction-seeker-transaction-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/seeker-transaction/seeker-transaction.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/seeker-transaction/seeker-transaction.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Current Transaction</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item [hidden]=\"TransactionInfo\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{profilepic}}\">\r\n        </ion-avatar>\r\n        <p>Service Provider:<ion-icon name=\"person\"></ion-icon> {{fullname}}</p>\r\n        <p>Contact No: <ion-icon name=\"call\"></ion-icon> {{contactno}}</p>\r\n        <p>Occupation: <ion-icon name=\"school\"></ion-icon> {{skills}}</p>\r\n        <p>Location: <ion-icon name=\"pin\"></ion-icon> {{address}}</p>\r\n        <ion-label position=\"floating\" >Feedback</ion-label>\r\n        <ion-textarea [(ngModel)]=\"_Feedback\" color=\"dark\" inputmode=\"text\" type=\"text\"></ion-textarea>\r\n        <ion-select placeholder=\"Rate\" interface=\"action-sheet\" [(ngModel)]=\"_Rate\" (ionChange)=\"showSelectedSubject(Rate)\">\r\n            <ion-select-option value=\"1\">\r\n              1 star\r\n            </ion-select-option>\r\n            <ion-select-option value=\"2\">\r\n              2 star\r\n            </ion-select-option>\r\n            <ion-select-option value=\"3\">\r\n              3 star\r\n            </ion-select-option>\r\n            <ion-select-option value=\"4\">\r\n              4 star\r\n            </ion-select-option>\r\n            <ion-select-option value=\"5\">\r\n                5 star\r\n              </ion-select-option>\r\n          </ion-select>\r\n        <ion-button (click)=\"closingOut()\">Close Out</ion-button>\r\n      </ion-item>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/seeker-transaction/seeker-transaction.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/seeker-transaction/seeker-transaction.module.ts ***!
  \*****************************************************************/
/*! exports provided: SeekerTransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekerTransactionPageModule", function() { return SeekerTransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seeker_transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seeker-transaction.page */ "./src/app/seeker-transaction/seeker-transaction.page.ts");







var routes = [
    {
        path: '',
        component: _seeker_transaction_page__WEBPACK_IMPORTED_MODULE_6__["SeekerTransactionPage"]
    }
];
var SeekerTransactionPageModule = /** @class */ (function () {
    function SeekerTransactionPageModule() {
    }
    SeekerTransactionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_seeker_transaction_page__WEBPACK_IMPORTED_MODULE_6__["SeekerTransactionPage"]]
        })
    ], SeekerTransactionPageModule);
    return SeekerTransactionPageModule;
}());



/***/ }),

/***/ "./src/app/seeker-transaction/seeker-transaction.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/seeker-transaction/seeker-transaction.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci10cmFuc2FjdGlvbi9zZWVrZXItdHJhbnNhY3Rpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/seeker-transaction/seeker-transaction.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/seeker-transaction/seeker-transaction.page.ts ***!
  \***************************************************************/
/*! exports provided: SeekerTransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekerTransactionPage", function() { return SeekerTransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SeekerTransactionPage = /** @class */ (function () {
    function SeekerTransactionPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    SeekerTransactionPage.prototype.ngOnInit = function () {
    };
    SeekerTransactionPage.prototype.ionViewDidEnter = function () {
        this.getCredits();
    };
    SeekerTransactionPage.prototype.getCredits = function () {
        var _this = this;
        this.storage.get('session').then(function (val) {
            _this.getInformation(val);
            _this.seekerphone = val;
        });
    };
    SeekerTransactionPage.prototype.getInformation = function (phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Seeker/ProviderInformation?ContactNo=' + phoneNumber)];
                    case 1:
                        response = _a.sent();
                        this.firstname = response.data[0].Firstname;
                        this.fullname = response.data[0].Firstname + ' ' + response.data[0].Lastname;
                        this.contactno = response.data[0].ContactNo;
                        this.address = response.data[0].Address;
                        this.profilepic = response.data[0].ProfilePicture;
                        this.skills = response.data[0].Skills;
                        console.log(this.firstname);
                        if (this.firstname == 'None') {
                            this.TransactionInfo = true;
                        }
                        else {
                            this.TransactionInfo = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SeekerTransactionPage.prototype.closingOut = function () {
        var data = {
            SeekerPhoneNumber: this.seekerphone,
            Rate: this._Rate,
            Feedback: this._Feedback,
            ProviderPhoneNumber: this.contactno
        };
        axios__WEBPACK_IMPORTED_MODULE_3___default()({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs__WEBPACK_IMPORTED_MODULE_4___default.a.stringify(data),
            url: 'http://nathdaaco123-001-site1.ctempurl.com/api/Seeker/CloseOutTransaction'
        }).then(function (response) {
            console.log(response.data);
            this.router.navigateByUrl('/tabs');
        }).catch(function (error) {
            console.log(error);
        });
    };
    SeekerTransactionPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SeekerTransactionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seeker-transaction',
            template: __webpack_require__(/*! raw-loader!./seeker-transaction.page.html */ "./node_modules/raw-loader/index.js!./src/app/seeker-transaction/seeker-transaction.page.html"),
            styles: [__webpack_require__(/*! ./seeker-transaction.page.scss */ "./src/app/seeker-transaction/seeker-transaction.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SeekerTransactionPage);
    return SeekerTransactionPage;
}());



/***/ })

}]);
//# sourceMappingURL=seeker-transaction-seeker-transaction-module-es5.js.map