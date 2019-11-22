import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import qs from 'qs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeker-transaction',
  templateUrl: './seeker-transaction.page.html',
  styleUrls: ['./seeker-transaction.page.scss'],
})
export class SeekerTransactionPage implements OnInit {

  constructor(public storage:Storage,public router: Router) { }
  fullname:any;
  contactno:any;
  address:any;
  profilepic:any;
  skills:any;
  _Feedback;_Rate;
  seekerphone:any;
  TransactionInfo:any;
  firstname:any;

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getCredits();
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
      this.seekerphone=val;
    });
  }

  async getInformation(phoneNumber:string){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Seeker/ProviderInformation?ContactNo='+phoneNumber);
      this.firstname = response.data[0].Firstname;
      this.fullname = response.data[0].Firstname +' '+response.data[0].Lastname;
      this.contactno = response.data[0].ContactNo;
      this.address = response.data[0].Address;
      this.profilepic = response.data[0].ProfilePicture;
      this.skills= response.data[0].Skills;
      console.log(this.firstname);
      if(this.firstname=='None'){
        this.TransactionInfo=true;
      }
      else{
        this.TransactionInfo=false;
      }
    }catch(error){
      console.log(error);
    }
  }

  closingOut(){
    const data = 
          {
            SeekerPhoneNumber:this.seekerphone,
            Rate:this._Rate,
            Feedback:this._Feedback,
            ProviderPhoneNumber:this.contactno
          }
  
          axios({
            method:'POST',
            headers:{'content-type':'application/x-www-form-urlencoded'},
            data: qs.stringify(data),
            url:'http://jbenriquez-001-site1.htempurl.com/api/Seeker/CloseOutTransaction'
          }).then(function(response){
            console.log(response.data);
            this.router.navigateByUrl('/tabs');
        
          }).catch(function(error){
            console.log(error);
          });
  }

}
