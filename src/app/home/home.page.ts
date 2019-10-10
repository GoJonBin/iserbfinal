import { Component, OnInit } from '@angular/core';

//import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import axios from 'axios';
import qs from 'qs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage 

//implements OnInit 
{
  public showPass:string = "lock";
  public typeNgPass: string = "password";
  _checkPhone:any;
  // FB_APP_ID: number = 2392489640796829;
  constructor(
    // private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    public toastController: ToastController
  
  ) { }

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

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  showPassword()
  {
    if(this.showPass=="lock")
      {
        this.showPass="unlock"; 
        this.typeNgPass="text";
      }
      else
      {
        this.showPass="lock";
        this.typeNgPass="password";
      }
  }

  async loginSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Login Success !',
      duration: 2000
    });
    toast.present();
  }

  async loginFailedToast() {
    const toast = await this.toastController.create({
      message: 'Phone Number is not yet Registered',
      duration: 2000
    });
    toast.present();
  }

  async loginErrorToast() {
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2000
    });
    toast.present();
  }

  async getValidation(){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Login/GetCustomer?ContactNo='+this._checkPhone);
      let valid = response.data[0].UserExists;
      if(valid=="1"){
        this.router.navigateByUrl('/tabs');
      }
      else if(valid=="0"){
        this.loginFailedToast();
      }
      else {
        this.router.navigateByUrl('/serviceprovider');
      }
      
    }catch(error){
      console.log(error);
    }
  }

}
