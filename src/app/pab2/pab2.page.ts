import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import qs from 'qs';


@Component({
  selector: 'app-pab2',
  templateUrl: 'pab2.page.html',
  styleUrls: ['pab2.page.scss']
})
export class Pab2Page {
  dynamicColor: string;
  balance:any;
  constructor(public storage:Storage){
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
  

  async getValidation(phoneNumber:string){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/Credits?ContactNo='+phoneNumber);
      this.balance = "₱ "+response.data[0].Credit;
    }catch(error){
      console.log(error);
    }
  }
  
}
