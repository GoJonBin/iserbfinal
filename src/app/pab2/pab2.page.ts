import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import qs from 'qs';
import { ModalController } from '@ionic/angular';
import { TopupModalPage } from '../topup-modal/topup-modal.page';


@Component({
  selector: 'app-pab2',
  templateUrl: 'pab2.page.html',
  styleUrls: ['pab2.page.scss']
})
export class Pab2Page {
  dynamicColor: string;
  balance:any;
  constructor(public storage:Storage,
    public modalController: ModalController){
    this.dynamicColor = 'blue';

  }

  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getValidation(val);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TopupModalPage
    });
    return await modal.present();
  }
  

  async getValidation(phoneNumber:string){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/Credits?ContactNo='+phoneNumber);
      this.balance = "₱ "+response.data[0].Credit;
    }catch(error){
      console.log(error);
    }
  }
  
}
