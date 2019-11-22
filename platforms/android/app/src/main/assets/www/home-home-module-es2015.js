(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content bg-class\" padding>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-img src=\"/assets/img/coc.png\" style=\"height: 150px; width:150px; margin:auto;\"></ion-img>\r\n      <p class=\"description2\" style=\"color: white\">Clash Of Codes</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row style=\"margin:auto\">\r\n  <ion-img src=\"/assets/img/icon1.png\" style=\"height: 50px; width:50px; margin:auto\"></ion-img>\r\n  <ion-img src=\"/assets/img/icon2.png\" style=\"height: 46px; width:46px;margin:auto\"></ion-img>\r\n  <ion-img src=\"/assets/img/icon3.png\" style=\"height: 44px; width:44px; margin:auto\"></ion-img>\r\n  <ion-img src=\"/assets/img/icon4.png\" style=\"height: 38px; width:38px;margin:auto\"></ion-img>\r\n  <ion-img src=\"/assets/img/icon5.png\" style=\"height: 38px; width:38px; margin:auto\"></ion-img>\r\n  <ion-img src=\"/assets/img/icon6.png\" style=\"height: 38px; width:38px; margin:auto\"></ion-img>\r\n</ion-row> -->\r\n<br/>\r\n  <p class=\"description2\">Use your mobile number to continue</p>\r\n  <br>\r\n  <ion-card style=\"background-color: white;\">\r\n    <ion-card-content style=\"padding: 2%\">\r\n  <ion-item style=\"border-radius: 15px;\">\r\n    <ion-label position=\"floating\" >Phone Number</ion-label>\r\n  \r\n      <ion-input color=\"dark\" [(ngModel)]=\"_checkPhone\" inputmode=\"numeric\" maxlength=\"11\" type=\"tel\"><ion-icon name=\"contact\" style=\"position: absolute; right:1%;\"></ion-icon></ion-input>\r\n    <!-- <ion-button routerLink=\"/registration\"><ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button> -->\r\n  </ion-item>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button color=\"tertiary\" (click)=\"getValidation()\" expand=\"block\">LOGIN</ion-button>\r\n       <ion-button class=\"log-register-button\" color=\"primary\" expand=\"block\" routerLink=\"/registration\">\r\n        REGISTER\r\n      </ion-button> \r\n    </ion-col>\r\n  </ion-row>\r\n\r\n     \r\n\r\n  </ion-card-content>\r\n</ion-card>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button class=\"log-fb-button\" color=\"primary\" expand=\"block\" routerLink=\"/registration\">\r\n        LOG IN WITH FACEBOOK\r\n        <ion-icon name=\"logo-facebook\" style=\"margin-left: 10px\"></ion-icon>\r\n      </ion-button> \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button class=\"log-google-button\" color=\"danger\" expand=\"block\" >\r\n        LOG IN WITH GOOGLE\r\n        <ion-icon name=\"logo-googleplus\" style=\"margin-left: 10px\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n}\n\n.bg-class {\n  --background: #2989d8;\n  /* Old browsers */\n  --background: -moz-linear-gradient(top, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n  /* FF3.6-15 */\n  --background: -webkit-linear-gradient(top, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  --background: linear-gradient(to bottom, #2989d8 50%,#207cca 51%,#7db9e8 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n}\n\nlabel#rounded {\n  border-radius: 15px;\n}\n\ndiv#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center;\n  font-family: \"Trebuchet MS\";\n}\n\n.description2 {\n  color: black;\n  font-size: 18px;\n  font-family: \"Trebuchet MS\";\n  text-align: center;\n}\n\n.log-register-button {\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n.log-fb-button {\n  margin-top: 40px;\n  font-weight: bold;\n}\n\n.log-google-button {\n  margin-top: 0px;\n  font-weight: bold;\n}\n\nion-input input {\n  text-align: right;\n}\n\nion-input input ::-webkit-input-placeholder {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE1BQ1JPOC1OQVRIXFxEb2N1bWVudHNcXERlc2t0b3AgTmF0aFxcaXNlcmJmaW5hbC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnRkFBQTtFQUFrRiw0QkFBQTtBQ0VwRjs7QURDRTtFQUNFLHFCQUFBO0VBQXVCLGlCQUFBO0VBQ3ZCLCtFQUFBO0VBQWlGLGFBQUE7RUFDakYsZ0ZBQUE7RUFBa0YsNEJBQUE7RUFDbEYsOEVBQUE7RUFBZ0YscURBQUE7QUNNcEY7O0FESEE7RUFDRSxtQkFBQTtBQ01GOztBREhBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURERTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNJSjs7QURERTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDS0o7O0FEREk7RUFDRSxpQkFBQTtBQ0lOOztBREhNO0VBQ0UsaUJBQUE7QUNLUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgXHJcbn1cclxuICAuYmctY2xhc3N7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMyOTg5ZDggNTAlLCAjMjA3Y2NhIDUxJSwgIzdkYjllOCAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi8gfVxyXG4gIFxyXG5cclxubGFiZWwjcm91bmRlZHtcclxuICBib3JkZXItcmFkaXVzOjE1cHg7IFxyXG59XHJcblxyXG5kaXYjY29udGFpbmVye1xyXG4gIHdpZHRoOiAzMDBweDsgXHJcbiAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxufVxyXG5cclxuXHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb24yIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUyc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2ctcmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5sb2ctZmItYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmxvZy1nb29nbGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAgXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIGlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAiLCIubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xufVxuXG4uYmctY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyOTg5ZDg7XG4gIC8qIE9sZCBicm93c2VycyAqL1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsICMyMDdjY2EgNTElLCAjN2RiOWU4IDEwMCUpO1xuICAvKiBGRjMuNi0xNSAqL1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzI5ODlkOCA1MCUsIzIwN2NjYSA1MSUsIzdkYjllOCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjk4OWQ4IDUwJSwjMjA3Y2NhIDUxJSwjN2RiOWU4IDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbn1cblxubGFiZWwjcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmRpdiNjb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cblxuLmRlc2NyaXB0aW9uMiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nLXJlZ2lzdGVyLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWZiLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWdvb2dsZS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taW5wdXQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1pbnB1dCBpbnB1dCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



//import { GooglePlus } from '@ionic-native/google-plus/ngx';





let HomePage = class HomePage {
    // FB_APP_ID: number = 2392489640796829;
    constructor(
    // private fb: Facebook,
    nativeStorage, loadingController, router, platform, alertController, toastController, storage) {
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.toastController = toastController;
        this.storage = storage;
        this.showPass = "lock";
        this.typeNgPass = "password";
    }
    //ngOnInit() {
    //}
    // async doFbLogin(){
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...'
    //   });
    //   this.presentLoading(loading);
    //   //the permissions your facebook app needs from the user
    //   const permissions = ["public_profile", "email"];
    //   this.fb.login(permissions)
    //   .then(response => {
    //     let userId = response.authResponse.userID;
    //     //Getting name and email properties
    //     //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions
    //     this.fb.api("/me?fields=name,email", permissions)
    //     .then(user => {
    //       user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
    //       //now we have the users info, let's save it in the NativeStorage
    //       this.nativeStorage.setItem('facebook_user',
    //       {
    //         name: user.name,
    //         email: user.email,
    //         picture: user.picture
    //       })
    //       .then(() => {
    //         this.router.navigate(["/tabs"]);
    //         loading.dismiss();
    //       }, error => {
    //         console.log(error);
    //         loading.dismiss();
    //       })
    //     })
    //   }, error =>{
    //     console.log(error);
    //     if(!this.platform.is('cordova')){
    //       this.presentAlert();
    //     }
    //     loading.dismiss();
    //   });
    // }
    /*async doGoogleLogin(){
      const loading = await this.loadingController.create({
        message: 'Please wait...'
      });
      this.presentLoading(loading);
      this.googlePlus.login({
        'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '929905253697-l0v0q72ifi24pnfcr7tafui574qu2br5.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        })
        .then(user => {
          loading.dismiss();
          //save user data on the native storage
          this.nativeStorage.setItem('google_user', {
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          })
          .then(() => {
             this.router.navigate(["/user"]);
             //loading.dismiss();
          }, (error) => {
            console.log(error);
            //loading.dismiss();
          })
          loading.dismiss();
        }, err => {
          console.log(err);
          if(!this.platform.is('cordova')){
            this.presentAlert();
          }
          loading.dismiss();
        })
    }*/
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    showPassword() {
        if (this.showPass == "lock") {
            this.showPass = "unlock";
            this.typeNgPass = "text";
        }
        else {
            this.showPass = "lock";
            this.typeNgPass = "password";
        }
    }
    loginSuccessToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Login Success !',
                duration: 2000
            });
            toast.present();
        });
    }
    loginFailedToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Phone Number is not yet Registered',
                duration: 2000
            });
            toast.present();
        });
    }
    loginErrorToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Error',
                duration: 2000
            });
            toast.present();
        });
    }
    getValidation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://nathdaaco123-001-site1.ctempurl.com/api/Login/GetCustomer?ContactNo=' + this._checkPhone);
                let valid = response.data[0].UserExists;
                this.storage.set('session', this._checkPhone);
                if (valid == "1") {
                    this.router.navigateByUrl('/tabs');
                }
                else if (valid == "0") {
                    this.loginFailedToast();
                }
                else {
                    this.router.navigateByUrl('/pabs');
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map