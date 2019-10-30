import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import qs from 'qs';

@Component({
  selector: 'app-provider-ui',
  templateUrl: './provider-ui.page.html',
  styleUrls: ['./provider-ui.page.scss'],
})
export class ProviderUIPage implements OnInit {
  public arrayTeacher: any=[];
  information:boolean=false;
  constructor(public alertController: AlertController, private router: Router,public storage:Storage) { }
  Subject: any;
  showProfMath: any;
  showProfJoed: any;
  fullname:string;
  seekerphonenumber:string;
  myphone:string;
  responsecode:any;
  response:any;
  transaction:any;
 
 showAlert(){
   this.information=!this.information;
 }
  ngOnInit() {
    
   
  }

  ionViewDidEnter(){
    this.getCredits();
  }

  async getProviderType(){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/ServiceType?ServiceType=5');
      console.log(response);
      for(let x = 0; x< response.data.length; x++) {
        this.arrayTeacher.push({
          'name':response.data[x].Firstname +' '+ response.data[x].Lastname,
          'rateperhour':response.data[x].RatePerHour,
          'status':response.data[x].Status,
          'Certificate1':response.data[x].Certificate1,
          'Certificate2':response.data[x].Certificate2,
          'Certificate3':response.data[x].Certificate3,
          'SerialCertificate1':response.data[x].SerialCertificate1,
          'SerialCertificate2':response.data[x].SerialCertificate2,
          'SerialCertificate3':response.data[x].SerialCertificate3,
          'Skills':response.data[x].Skills,
          'TesdaCategory':response.data[x].TesdaCategory,
          'ProfilePicture':response.data[x].ProfilePicture,
          'ContactNo':response.data[x].ContactNo,
          'Rating':response.data[x].Rating,
          'Id':response.data[x].Id});
          
      }      
      console.log(this.arrayTeacher);
    }catch(error){
      console.log(error);
    }
  }

  getCredits(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
      this.myphone=val;
      this.checkIfHasCurrentTransaction(val);
    });
  }


  async getInformation(phoneNumber:string){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo='+phoneNumber);
      
      this.fullname = response.data[0].Firstname +' '+response.data[0].Lastname;
      this.seekerphonenumber = response.data[0].ContactNo;
      console.log(this.fullname);
    }catch(error){
      console.log(error);
    }
  }

  async checkIfHasCurrentTransaction(phoneNumber:string){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Seeker/SeekerProcessCount?ContactNo='+phoneNumber);
      
      this.transaction = response.data[0].ProcessCount;
      console.log(this.transaction);
    }catch(error){
      console.log(error);
    }
  }


  showSelectedSubject(Subject)
  {
console.log(this.Subject);
   if(Subject=="Math")
   {
    this.getProviderType();
    this.showProfMath = true;
    this.showProfJoed = false;
   
   }
   else if(Subject=="English")
   {
     //this.showProfNava=false;
     this.showProfJoed=true;
     this.showProfMath = false;
     this.arrayTeacher.length=0;
   }
   else{
     //this.showProfNava=false;
     this.showProfJoed=false;
     this.showProfMath=false;
     this.arrayTeacher.length=0;
   }
  }

  hireJoed()
  {
  
  }
  hireButton(index)
  {
 this.presentAlert2(index);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'You already Hire this Provider',
      subHeader: 'wait for the approval',
      message: 'Please choose another provider to hire',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'You have an ongoing transaction',
      subHeader: 'wait until your transaction has finished/cancelled',
      message: 'Please give a feedback in your transaction',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert2(index) {
    const alert = await this.alertController.create({
      header: 'Hire this person?',
      message: 'Are you sure you want to hire this person?.',
      buttons: [
        {
          text:'NO',
          handler: ()=>{
            
          }
        },
        {
          text: 'YES',
          handler: () => {
            //this.router.navigateByUrl('/chat-room');
            console.log(this.arrayTeacher[index].Id);

            this.someFunction(index).then(
              d=>{
                this.responsecode=d;
                this.response=this.responsecode.data[0].Response;
                console.log(this.response);
                if(this.response=="400"){
                  this.presentAlert();
                }
                else if(this.transaction!="0"){
                  this.presentAlert3();
                }
                else{
                  this.arrayTeacher[0].status=='Pending'
                }
              }
            );
            
          }
        }
     
        ]
    });

    await alert.present();
  }

  someFunction(index){
    return new Promise((resolve,reject)=>{

      const data = {
        SeekerName:this.fullname,
        SeekerPhoneNumber:this.seekerphonenumber,
        ServiceChoice:"5",
        ProviderID:this.arrayTeacher[index].Id
      }
  
      axios({
        method:'POST',
        headers:{'content-type':'application/x-www-form-urlencoded'},
        data: qs.stringify(data),
        url:'http://nathdaaco123-001-site1.ctempurl.com/api/Transaction/AddNewTransaction'
      }).then(response=>{
        resolve(response);
        this.responsecode=response;
        //console.log(resolve);
      }).catch(function(error){
        //console.log(reject);
      });

    });
  }
}

