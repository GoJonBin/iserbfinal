(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transpo-transpo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transpo/transpo.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transpo/transpo.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n\r\n        <!-- <div id=\"map\" style=\"width:100%; height:100%;\"></div> -->\r\n        <div id='map'></div>\r\n        </ion-content>\r\n        <ion-footer>\r\n            <div class=\"centers\" [hidden]=\"isenabled\">\r\n                \r\n                <ion-button (click)=\"confirmBooking()\">CONFIRM</ion-button>\r\n                <ion-button color=\"danger\" (click)=\"cancelBooking()\">CANCEL</ion-button>\r\n            </div>\r\n            <ion-button [hidden]=\"isenabledbook\" color=\"success\" expand=\"block\" (click)=\"booknow()\">BOOK NOW</ion-button>\r\n            <ion-button [hidden]=\"viewDrivers\" color=\"success\" expand=\"block\" (click)=\"presentModal()\">VIEW DRIVER</ion-button>\r\n\r\n            <ion-button name=\"back\" id=\"back\" color=\"tertiary\" expand=\"block\" (click)=\"push()\">BACK</ion-button>\r\n        </ion-footer>"

/***/ }),

/***/ "./src/app/transpo/transpo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/transpo/transpo.module.ts ***!
  \*******************************************/
/*! exports provided: TranspoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranspoPageModule", function() { return TranspoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transpo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transpo.page */ "./src/app/transpo/transpo.page.ts");







var TranspoPageModule = /** @class */ (function () {
    function TranspoPageModule() {
    }
    TranspoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _transpo_page__WEBPACK_IMPORTED_MODULE_6__["TranspoPage"]
                    }
                ])
            ],
            declarations: [_transpo_page__WEBPACK_IMPORTED_MODULE_6__["TranspoPage"]]
        })
    ], TranspoPageModule);
    return TranspoPageModule;
}());



/***/ }),

/***/ "./src/app/transpo/transpo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/transpo/transpo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n#map_canvas {\n  height: 90%;\n}\n\n.address-text {\n  margin: 0%;\n  text-align: center;\n  font-size: 17px;\n  color: black;\n}\n\n.larger {\n  margin: 0%;\n  font-size: 25px;\n}\n\n.blues {\n  width: 100%;\n  margin: 0%;\n  background-color: white;\n}\n\n.centers {\n  margin: auto;\n  text-align: center;\n}\n\n.chubby {\n  font-weight: bold;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\n#map {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNwby9DOlxcVXNlcnNcXE1BQ1JPOC1OQVRIXFxEb2N1bWVudHNcXERlc2t0b3AgTmF0aFxcaXNlcmJmaW5hbC9zcmNcXGFwcFxcdHJhbnNwb1xcdHJhbnNwby5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYW5zcG8vdHJhbnNwby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNLRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0UsaUJBQUE7QUNLRjs7QURGQTtFQUNFLGdCQUFBO0FDS0Y7O0FEREU7RUFBTyxrQkFBQTtFQUFtQixNQUFBO0VBQU8sU0FBQTtFQUFVLFdBQUE7QUNRN0MiLCJmaWxlIjoic3JjL2FwcC90cmFuc3BvL3RyYW5zcG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jbWFwX2NhbnZhc3tcclxuICBoZWlnaHQ6OTAlO1xyXG59XHJcbi5hZGRyZXNzLXRleHR7XHJcbiAgbWFyZ2luOiAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ubGFyZ2Vye1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5ibHVlc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2VudGVyc3tcclxuICBtYXJnaW46YXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaHViYnl7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub1Njcm9sbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcblxyXG4gICNtYXAgeyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDoxMDAlOyB9XHJcbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmFkZHJlc3MtdGV4dCB7XG4gIG1hcmdpbjogMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sYXJnZXIge1xuICBtYXJnaW46IDAlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ibHVlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNlbnRlcnMge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNodWJieSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm9TY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/transpo/transpo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/transpo/transpo.page.ts ***!
  \*****************************************/
/*! exports provided: TranspoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranspoPage", function() { return TranspoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-routing-machine */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_control_geocoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-control-geocoder */ "./node_modules/leaflet-control-geocoder/src/index.js");
/* harmony import */ var _provider_driver_provider_driver_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider-driver/provider-driver.page */ "./src/app/provider-driver/provider-driver.page.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_9__);











var lng = 0;
var lat = 0;
var latlng = 0;
var mymap;
var mark1;
var routingControl;
var kotse = L.icon({
    iconUrl: '/assets/icon/car.png',
    iconSize: [50, 50],
    shadowSize: [50, 64],
    popupAnchor: [-3, -20]
});
var tao = L.icon({
    iconUrl: '/assets/icon/tao.jpg',
    iconSize: [50, 50],
    shadowSize: [50, 64],
    popupAnchor: [-3, -20]
});
var TranspoPage = /** @class */ (function () {
    function TranspoPage(navCtrl, nativeGeocoder, modalController) {
        this.navCtrl = navCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalController = modalController;
        this.isenabled = true;
        this.isenabledbook = false;
        this.viewDrivers = true;
    }
    TranspoPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    TranspoPage.prototype.push = function () {
        this.navCtrl.back();
    };
    TranspoPage.prototype.getProviderLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Location/GetServiceProvider')];
                    case 1:
                        response = _a.sent();
                        console.log(response.data[0].Latitude);
                        console.log(response.data[0].Longitude);
                        mark1 = leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.marker([response.data[0].Latitude, response.data[0].Longitude], { icon: kotse }).addTo(mymap).bindPopup("Provider");
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
    TranspoPage.prototype.cancel = function () {
        mymap.removeLayer(mark1);
    };
    TranspoPage.prototype.insertBooking = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    Firstname: 'Jun Ben',
                    Lastname: 'Enriquez',
                    ContactNo: '09184223552'
                };
                axios__WEBPACK_IMPORTED_MODULE_8___default()({
                    method: 'POST',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    data: qs__WEBPACK_IMPORTED_MODULE_9___default.a.stringify(data),
                    url: 'http://nathdaaco123-001-site1.ctempurl.com/api/booking/AddNewBooking'
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    TranspoPage.prototype.confirmBooking = function () {
        //this.insertBooking();
        this.isenabled = true;
        this.isenabledbook = true;
        this.viewDrivers = false;
        this.presentModal();
    };
    TranspoPage.prototype.cancelBooking = function () {
        this.isenabled = !this.isenabled;
    };
    TranspoPage.prototype.booknow = function () {
        this.isenabled = !this.isenabled;
    };
    TranspoPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _provider_driver_provider_driver_page__WEBPACK_IMPORTED_MODULE_6__["ProviderDriverPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TranspoPage.prototype.loadmap = function () {
        navigator.geolocation.getCurrentPosition(function (location) {
            mymap = leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.map('map').setView([lat, lng], 18);
            latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
            console.log(latlng);
            var list = "<dt>Name:JB Enriquez</dt>"
                + "<dt>Occupation:Driver</dt>"
                + '<a href="/chat-home">Chat</a>';
            var marker = leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.marker(latlng, { icon: kotse }).addTo(mymap).bindPopup(list);
            leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGRhYWNvNzgiLCJhIjoiY2p0ajE1dGVwMGlkMzQ5bWRhdXNzbHluMiJ9.zA0f7OVGLu_j_iQ9fetATw', {
                attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                zoom: 8,
                maxZoom: 18,
                minZoom: 4,
                minResolution: 4891.96981025128,
                maxResolution: 39135.75848201024,
                doubleClickZoom: true,
                center: latlng
            }).addTo(mymap);
            mymap.panTo(latlng);
            routingControl = leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.Routing.control({
                waypoints: [
                    leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.latLng(latlng),
                ],
                routeWhileDragging: true,
                geocoder: leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.Control.Geocoder.nominatim(),
                fitSelectedRoutes: true
            }).addTo(mymap);
            var routeArray = new Array();
            routeArray = routingControl.getWaypoints();
            if (routeArray[1].latLng == null) {
                console.log("Walang Laman");
            }
            else {
                console.log("May Laman");
            }
        });
    };
    TranspoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TranspoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transpo',
            template: __webpack_require__(/*! raw-loader!./transpo.page.html */ "./node_modules/raw-loader/index.js!./src/app/transpo/transpo.page.html"),
            styles: [__webpack_require__(/*! ./transpo.page.scss */ "./src/app/transpo/transpo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TranspoPage);
    return TranspoPage;
}());



/***/ })

}]);
//# sourceMappingURL=transpo-transpo-module-es5.js.map