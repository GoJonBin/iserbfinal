import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import qs from 'qs';
import axios from 'axios';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeker-list',
  templateUrl: './seeker-list.page.html',
  styleUrls: ['./seeker-list.page.scss'],
})
export class SeekerListPage implements OnInit {
  public arraySeeker: any=[];
  acceptDisable:boolean=false;
  balance:any;
  status:any;

  constructor(public storage:Storage,public modalController: ModalController,public alertController: AlertController,
    private router:Router) { }
  
  providerid:any;

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
      this.getValidation(val);
      this.providerid=val;
    });
  }


  async getInformation(id:any){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Location/GetServiceSeeker?ProviderPhoneNumber='+id);
      for(let x = 0; x< response.data.length; x++) {
        this.arraySeeker.push({
          'fullname':response.data[x].SeekerName,
          'contactno':response.data[x].ContactNo,
          'address':response.data[x].Address,
          'latitude':response.data[x].Latitude,
          'longitude':response.data[x].Longitude,
          'profilepicture':response.data[x].ProfilePicture});
          
      }
    }catch(error){
      console.log(error);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'You Cannot Accept more than one job',
      subHeader: 'Finish your first Transaction',
      message: 'Try it again later',
      buttons: ['OK']
    });

    await alert.present();
  }

  dismiss(index){
    if(this.status=='Busy'){
      this.presentAlert();
    }
    else if(this.status=='Online'){
      const data = {
        SeekerPhone:this.arraySeeker[index].contactno,
        ProviderPhone:this.providerid
      }
  
      axios({
        method:'POST',
        headers:{'content-type':'application/x-www-form-urlencoded'},
        data: qs.stringify(data),
        url:'http://jbenriquez-001-site1.htempurl.com/api/Provider/AcceptSeeker'
      }).then(response=>{
        this.modalController.dismiss({
          'dismissed': true
        });
        this.router.navigateByUrl('/chat-room');
      }).catch(function(error){
        
      });
    }
    
  }

  async getValidation(phoneNumber:string){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Provider/Credits?ContactNo='+phoneNumber);
      this.balance = response.data[0].Credit;
      this.status = response.data[0].Status;
      if(this.balance>=10){
        this.acceptDisable=false;
      }
      else{
        this.acceptDisable=true;
      }
    }catch(error){
      console.log(error);
    }
  }

}
