import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import axios from 'axios';
import qs from 'qs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-topup-modal',
  templateUrl: './topup-modal.page.html',
  styleUrls: ['./topup-modal.page.scss'],
})
export class TopupModalPage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  _receiptnumber:any;
  _amount:any;
  customerid:any;
  phonenumber:any;

  constructor(navParams: NavParams,private router: Router,public modalController: ModalController,public storage:Storage) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
    });
  }

  back(){
    this.router.navigateByUrl('pabs/pabs/pab2');
  }

  async getInformation(phoneNumber:string){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo='+phoneNumber);
      
      this.customerid = response.data[0].ID;
      this.phonenumber = response.data[0].ContactNo;
    }catch(error){
      console.log(error);
    }
  }

  dismiss() {
    const data = {
      CustomerID:this.customerid,
	    PhoneNumber:this.phonenumber,
	    RefNumber:this._receiptnumber,
	    Amount:this._amount
    }

    axios({
      method:'POST',
      headers:{'content-type':'application/x-www-form-urlencoded'},
      data: qs.stringify(data),
      url:'http://nathdaaco123-001-site1.ctempurl.com/api/TopUp/AddNewTopUp'
    }).then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    });
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
