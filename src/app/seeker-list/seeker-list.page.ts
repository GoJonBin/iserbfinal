import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import qs from 'qs';
import axios from 'axios';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-seeker-list',
  templateUrl: './seeker-list.page.html',
  styleUrls: ['./seeker-list.page.scss'],
})
export class SeekerListPage implements OnInit {
  public arraySeeker: any=[];

  constructor(public storage:Storage,public modalController: ModalController) { }
  
  providerid:any;

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
      this.providerid=val;
    });
  }


  async getInformation(id:any){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Location/GetServiceSeeker?ProviderPhoneNumber='+id);
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

  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
