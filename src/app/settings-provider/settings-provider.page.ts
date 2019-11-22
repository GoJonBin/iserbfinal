import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import qs from 'qs';

@Component({
  selector: 'app-settings-provider',
  templateUrl: './settings-provider.page.html',
  styleUrls: ['./settings-provider.page.scss'],
})
export class SettingsProviderPage implements OnInit {
  _firstname:string;
  _lastname:string;
  _phonenumber:string;
  _address:string;
  _skills:string;
  _birthdate:string;
  _id:string;
  currentIDPhoto: any;
  currentIDHandheld: any;

  constructor(private router:Router,public storage:Storage) { }

  ngOnInit() {
    this.currentIDPhoto = '/assets/img/idPhoto.png';
    this.currentIDHandheld = '/assets/img/idPhoto.png';
  }
  back(){
    this.router.navigateByUrl('/pabs/pabs/pab3');
  }

  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
    });
  }

  async getInformation(phoneNumber:string){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo='+phoneNumber);
      this._id = response.data[0].ID;
      this._firstname = response.data[0].Firstname; 
      this._lastname = response.data[0].Lastname;
      this._address = response.data[0].Address;
      this._phonenumber = response.data[0].ContactNo;
      this._skills = response.data[0].Skills;
      this._birthdate = response.data[0].Birthday;
      console.log(this._id);
    }catch(error){
      console.log(error);
    }
  }


  onUpdate(){
    const data = {
      ID:this._id,
      Firstname:this._firstname,
	    Lastname:this._lastname,
	    ContactNo:this._phonenumber,
      Address:this._address,
      Skills:this._skills,
      Birthday:this._birthdate
    }

    axios({
      method:'POST',
      headers:{'content-type':'application/x-www-form-urlencoded'},
      data: qs.stringify(data),
      url:'http://jbenriquez-001-site1.htempurl.com/api/Provider/UpdateProfile'
    }).then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    });
  }

}
