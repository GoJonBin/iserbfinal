import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import qs from 'qs';
// import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-pab3',
  templateUrl: 'pab3.page.html',
  styleUrls: ['pab3.page.scss']
})
export class Pab3Page implements OnInit{
  dynamicColor: string;
  status:any;
  fullname:string;
  constructor(
    // private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    public storage:Storage
    //private googlePlus: GooglePlus
  ) { this.dynamicColor = 'blue';}

  user: any;
  userReady: boolean = false;
  hideOnline: boolean =false;
  hideOffline: boolean =false;
  hideBusy:boolean=false;

  logouts(){
    this.router.navigateByUrl('/home');
  }

  async ngOnInit() {
    // const loading = await this.loadingController.create({
    //   message: 'Please wait...'
    // });
    //  await loading.present();
    //  this.nativeStorage.getItem('facebook_user')
    // .then(data => {
    //   this.user = {
    //     name: data.name,
    //     email: data.email,
    //     picture: data.picture
    //   };
    //   loading.dismiss();
    //   this.userReady = true;
    // }, error =>{
    //   console.log(error);
    //   loading.dismiss();
    // });
  }

  // doFbLogout(){
  //   this.fb.logout()
  //   .then(res => {
  //     //user logged out so we will remove him from the NativeStorage
  //     this.nativeStorage.remove('facebook_user');
  //     this.router.navigate(["/"]);
  //   }, err => {
  //     console.log(err);
  //   });
  // }

 /* doGoogleLogout(){
    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('google_user');
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    });
  }*/

  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getValidation(val);
      this.getInformation(val);
    });
  }


  async getInformation(phoneNumber:string){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo='+phoneNumber);
      
      this.fullname = response.data[0].Firstname +' '+response.data[0].Lastname;
    }catch(error){
      console.log(error);
    }
  }

  async getValidation(phoneNumber:string){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Provider/Credits?ContactNo='+phoneNumber);
      
      this.status = response.data[0].Status;
      if(this.status=="Online"){
        this.hideOnline=true;
        this.hideOffline=false;
        this.hideBusy=false;
      }
      else if(this.status=="Offline"){
        this.hideOnline=false;
        this.hideOffline=true;
        this.hideBusy=false;
      }
      else{
        this.hideOnline=false;
        this.hideOffline=false;
        this.hideBusy=true;
      }
      
    }catch(error){
      console.log(error);
    }
  }

}
