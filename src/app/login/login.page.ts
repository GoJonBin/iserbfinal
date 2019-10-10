import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import qs from 'qs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  _checkPhone:any;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
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

  async getValidation(){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Login/GetCustomer?ContactNo='+this._checkPhone);
      console.log(response.data[0].UserExists);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

}
