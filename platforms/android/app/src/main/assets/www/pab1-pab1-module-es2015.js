(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pab1-pab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pab1/pab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pab1/pab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color:black;\">\r\n    <ion-toolbar [color]=\"dynamicColor\">\r\n    <ion-title style=\"color: white;\">\r\n      Home\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-class\">\r\n  <div id='map'></div>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"seekers\" [hidden]=\"enablednotification\">\r\n    <ion-button id=\"button1\" (click)=\"presentModal()\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-badge id=\"badge1\" color=\"danger\">1</ion-badge>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"centers\">\r\n    <ion-toggle color=\"success\" [disabled]=\"disableNearby\" [(ngModel)]=\"ischecked\" (click)=\"presentLoadingWithOptions()\"></ion-toggle>\r\n  </div>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pab1/pab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/pab1/pab1.module.ts ***!
  \*************************************/
/*! exports provided: Pab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pab1PageModule", function() { return Pab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pab1.page */ "./src/app/pab1/pab1.page.ts");







let Pab1PageModule = class Pab1PageModule {
};
Pab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _pab1_page__WEBPACK_IMPORTED_MODULE_6__["Pab1Page"] }])
        ],
        declarations: [_pab1_page__WEBPACK_IMPORTED_MODULE_6__["Pab1Page"]]
    })
], Pab1PageModule);



/***/ }),

/***/ "./src/app/pab1/pab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/pab1/pab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n#button1 {\n  position: relative;\n  width: 42px;\n  top: 1px;\n  right: 1px;\n  overflow: visible !important;\n}\n\n#badge1 {\n  background-color: red;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  border-radius: 100%;\n}\n\n.seekers {\n  margin-left: 1%;\n  float: left;\n}\n\n.centers {\n  margin: auto;\n  text-align: center;\n}\n\n.login-content {\n  --background: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.bg-class {\n  height: 100%;\n  background: #673AB7;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left bottom, left top, from(#fdcbf1), color-stop(1%, #fdcbf1), to(#e6dee9));\n  background: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n#map {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFiMS9DOlxcVXNlcnNcXE1BQ1JPOC1OQVRIXFxEb2N1bWVudHNcXERlc2t0b3AgTmF0aFxcaXNlcmJmaW5hbC9zcmNcXGFwcFxccGFiMVxccGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhYjEvcGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FDRUY7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsMkVBQUE7RUFBNkUscUVBQUE7QUNLL0U7O0FERkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFBc0IsOEJBQUE7RUFDOEQsK0JBQUE7RUFDcEYsZ0hBQUE7RUFBQSx5RUFBQTtFQUEyRSxxRUFBQTtBQ1EvRTs7QURHQTtFQUNFLGtCQUFBO0VBQW1CLE1BQUE7RUFBTyxTQUFBO0VBQVUsV0FBQTtBQ0d0QyIsImZpbGUiOiJzcmMvYXBwL3BhYjEvcGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jYnV0dG9uMSB7ICAgICAgICAgICAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIHRvcDoxcHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4jYmFkZ2UxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTNweDtcclxuICByaWdodDogLTNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbi5zZWVrZXJze1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2VudGVyc3tcclxuICBtYXJnaW46YXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmRjYmYxIDAlLCAjZmRjYmYxIDElLCAjZTZkZWU5IDEwMCUpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG59XHJcbiAgLmJnLWNsYXNze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzY3M0FCNzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZkY2JmMSAwJSwgI2ZkY2JmMSAxJSwgI2U2ZGVlOSAxMDAlKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmRjYmYxIDAlLCAjZmRjYmYxIDElLCAjZTZkZWU5IDEwMCUpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxOTdkZWcsIHJnYmEoMTAwLDEwMCwxMDAsMSkgMCUsIHJnYmEoNjMsNjMsNjMsMSkgMTMuNSUsIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLCByZ2JhKDAsMCwwLDEpIDEwMCUpICFpbXBvcnRhbnRcclxufVxyXG4kY29sb3JzOiAoXHJcbiAgIGJsdWU6ICAgICMzODdlZjUsXHJcbiAgIHNlY29uZGFyeTogICMzMmRiNjQsXHJcbiAgIGRhbmdlcjogICAgICNmNTNkM2QsXHJcbiAgIGxpZ2h0OiAgICAgICNmNGY0ZjQsICBcclxuICAgZGFyazogICAgICAgICAgIzIyMiBcclxuKTtcclxuXHJcbiNtYXAgeyBcclxuICBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDoxMDAlOyBcclxufSIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNidXR0b24xIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDJweDtcbiAgdG9wOiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbiNiYWRnZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnNlZWtlcnMge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2VudGVycyB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZkY2JmMSAwJSwgI2ZkY2JmMSAxJSwgI2U2ZGVlOSAxMDAlKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4uYmctY2xhc3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM2NzNBQjc7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmRjYmYxIDAlLCAjZmRjYmYxIDElLCAjZTZkZWU5IDEwMCUpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmRjYmYxIDAlLCAjZmRjYmYxIDElLCAjZTZkZWU5IDEwMCUpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbiNtYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pab1/pab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/pab1/pab1.page.ts ***!
  \***********************************/
/*! exports provided: Pab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pab1Page", function() { return Pab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet-routing-machine */ "./node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_control_geocoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet-control-geocoder */ "./node_modules/leaflet-control-geocoder/src/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _seeker_list_seeker_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../seeker-list/seeker-list.page */ "./src/app/seeker-list/seeker-list.page.ts");












var lng = 0;
var lat = 0;
var latlng = 0;
var mymap;
var mark1;
var marker;
var routeArray = new Array();
var locations = [
    ["SEEKER 1", 14.5376816, 120.9798211],
    ["SEEKER 2", 14.540566, 120.9803733],
    ["SEEKER 3", 14.5414682, 120.9797863],
    ["SEEKER 4", 14.5394722, 120.9804113]
];
var tao = L.icon({
    iconUrl: '/assets/icon/tao.jpg',
    iconSize: [50, 50],
    shadowSize: [50, 64],
    popupAnchor: [-3, -20]
});
let Pab1Page = class Pab1Page {
    constructor(navCtrl, loadingController, localNotifications, storage, route, router, modalController) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.localNotifications = localNotifications;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.back = true;
        this.selection = false;
        this.ischecked = false;
        this.enablednotification = true;
        this.disableNearby = false;
        this.arraySeeker = [];
        this.dynamicColor = 'blue';
    }
    ngOnInit() {
        this.storage.get('session').then((val) => {
            this.getInformation(val);
            this.getValidation(val);
        });
    }
    ionViewDidEnter() {
        this.loadmap();
        this.storage.get('session').then((val) => {
            this.getInformation(val);
            this.getValidation(val);
        });
    }
    jobOfferNotif() {
        this.localNotifications.schedule({
            title: 'Someone is hiring you',
            text: 'Accept Job ?',
            actions: [
                { id: 'yes', title: 'Yes' },
                { id: 'no', title: 'No' }
            ]
        });
    }
    afterGettingDestination() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (routeArray[1].latLng == null) {
                console.log("Walang Laman");
            }
            else {
                console.log("May Laman");
            }
        });
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 2000,
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                    this.findNearby();
                });
            });
        });
    }
    push() {
        this.navCtrl.back();
    }
    getProviderLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Location/GetServiceProvider');
                console.log(response.data[0].Latitude);
                console.log(response.data[0].Longitude);
                mark1 = leaflet__WEBPACK_IMPORTED_MODULE_5___default.a.marker([response.data[0].Latitude, response.data[0].Longitude]).addTo(mymap).bindPopup("Provider");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    cancel() {
        mymap.removeLayer(mark1);
    }
    findNearby() {
        for (var i = 0; i < locations.length; i++) {
            marker = new L.marker([locations[i][1], locations[i][2]], { icon: tao })
                .bindPopup(locations[i][0] + this.seekerApplybutton)
                .addTo(mymap);
        }
        this.back = false;
        this.selection = true;
    }
    getInformation(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/SeekerCounts?ContactNo=' + id);
                for (let x = 0; x < response.data.length; x++) {
                    this.arraySeeker.push({
                        'seekercounts': response.data[x].SeekerCounts
                    });
                    this.ifseekername = this.arraySeeker[1].seekercounts;
                    console.log(this.ifseekername);
                    if (this.ifseekername == '0') {
                        this.enablednotification = true;
                    }
                    else {
                        this.enablednotification = false;
                        this.jobOfferNotif();
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loadmap() {
        navigator.geolocation.getCurrentPosition(function (location) {
            mymap = leaflet__WEBPACK_IMPORTED_MODULE_5___default.a.map('map').setView([lat, lng], 18);
            latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
            var marker = leaflet__WEBPACK_IMPORTED_MODULE_5___default.a.marker(latlng).addTo(mymap);
            leaflet__WEBPACK_IMPORTED_MODULE_5___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuYmVuIiwiYSI6ImNqbnFpNWdsejAxNGczcXBsbGo0MW1yeW4ifQ.nsb3FOSvTL9LDCyKj3pfrg', {
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
            // let routingControl =  Leaflet.Routing.control({
            //   waypoints: [
            //           Leaflet.latLng(latlng)
            //    ], 
            //   routeWhileDragging: true,  
            //   geocoder: Leaflet.Control.Geocoder.nominatim(),
            //   fitSelectedRoutes:true
            // }).addTo(mymap);
            //   routeArray = routingControl.getWaypoints();
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _seeker_list_seeker_list_page__WEBPACK_IMPORTED_MODULE_10__["SeekerListPage"]
            });
            return yield modal.present();
        });
    }
    getValidation(phoneNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/Credits?ContactNo=' + phoneNumber);
                this.balance = response.data[0].Credit;
                this.providerstatus = response.data[0].Status;
                if (this.balance >= 10 && this.providerstatus == 'Online') {
                    //this.disableNearby=false;
                    this.enablednotification = false;
                    this.seekerApplybutton = '<br><ion-button color="tertiary" href="./provider-apply" style="height:30px;width:50px;">APPLY</ion-button><br>';
                }
                else if (this.balance >= 10 && this.providerstatus == 'Busy') {
                    //this.disableNearby=false;
                    //this.enablednotification=false;
                    this.enablednotification = true;
                    this.seekerApplybutton = '<br><ion-button color="dark" style="height:30px;width:50px;background-color:gray;">APPLY</ion-button><br>';
                }
                else {
                    //this.disableNearby=true;
                    this.enablednotification = true;
                    this.seekerApplybutton = '<br><ion-button color="dark" style="height:30px;width:50px;background-color:gray;">APPLY</ion-button><br>';
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
Pab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
Pab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pab1',
        template: __webpack_require__(/*! raw-loader!./pab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pab1/pab1.page.html"),
        styles: [__webpack_require__(/*! ./pab1.page.scss */ "./src/app/pab1/pab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], Pab1Page);



/***/ })

}]);
//# sourceMappingURL=pab1-pab1-module-es2015.js.map