import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
// import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  constructor(
    // private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    //private googlePlus: GooglePlus
  ) { }

  user: any;
  userReady: boolean = false;

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

}
