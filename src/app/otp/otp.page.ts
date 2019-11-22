import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import axios from 'axios';
import qs from 'qs';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  data:any = {};
  _phonenumber:any;
  _checkCode:any;
  constructor(
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    public httpClient: HttpClient,
    private http: Http,
    private storage: Storage) { }
    
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.storage.get('session').then((val) => {
     this._phonenumber='63'+val;
   });
   if(this._phonenumber!=""){
     console.log("WALANG LAMAN ANG PHONE");
   }
   else{
     console.log("MAY LAMAN ANG PHONE");
   }
   //this.sendOTP();
 }

  async sendOTP() {
    localStorage.setItem('OTP', Math.floor(1000 + Math.random() * 9000).toString());

    // var link = 'https://stioasys.com/sendSMS.php';
    // var myData = JSON.stringify({OTP: localStorage.getItem('OTP')});
    // this.http.post(link, myData)
    // .subscribe(data => {
    // this.data.response = data["_body"]; 
    //  }, error => {
    // console.log("Oooops!");
    // });

    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/SendOTP/ByNumber?ContactNo='+this._phonenumber+'&Otp='+localStorage.getItem('OTP'));
      console.log(response); 
      console.log(this._phonenumber);   
    }catch(error){
      console.log(error);
    }

  }
  
  oneTimePassword() {
    if(this._checkCode == localStorage.getItem('OTP')) {
        this.loginAlert();
    } 
    else {
      this.failedAlert();
    }
}

async loginAlert() {
  const alert = await this.alertController.create({
     message: 'Login Success!',
     buttons: ['OK']
   });
   

  await alert.present();
}
async failedAlert() {
  const alert = await this.alertController.create({
     message: 'OTP WRONG!',
     buttons: ['OK']
   });
   

  await alert.present();
}

}