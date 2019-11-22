import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router ,NavigationExtras } from '@angular/router';
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
{
  public showPass:string = "lock";
  public typeNgPass: string = "password";
  _checkPhone:any;
  
  constructor(
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    public toastController: ToastController,
    private storage: Storage
  
  ) { }

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
      //this.router.navigateByUrl('/transpo');
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Login/GetCustomer?ContactNo='+this._checkPhone);
      let valid = response.data[0].UserExists;
      this.storage.set('session', this._checkPhone);
      console.log(response.data[0].UserExists);
      if(valid=="1"){
        this.router.navigateByUrl('/tabs');
      }
      else if(valid=="0"){
        this.loginFailedToast();
      }
      else {
        
        this.router.navigateByUrl('/pabs');
      }
      
    }catch(error){
      console.log(error);
    }
  }

}
