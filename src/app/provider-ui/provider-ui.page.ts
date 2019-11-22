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
  isItemAvailable:boolean=false;
  items:any;
  

  initializeItems(){ 
    if(localStorage.getItem("category")=="agriculture") {
      this.items = [
        "Agricultural Crops Production"
        ,"Animal Production (Poultry-Chicken)"
        ,"Grains Production (Rice-Corn)"
        ,"Handle Breeders Leading to Animal Production (Swine)"
        ,"Handle Farrowing Sows and Suckling’s Leading to Animal Production (Swine)"
        ,"Maintain Healthy Animal Environment Leading to Animal Production (Swine)"
        ,"Organic Agriculture Production"
        ,"Perform Nursery Operations (Leading to Agricultural Crops Production)"
        ,"Plant Crops (Leading to Agricultural Crops Production)"
        ,"Prepare land for Agricultural Crop Production (Leading to Agricultural Crops Production)"
        ,"Produce Finishers Leading to Animal Production (Swine)"];
    }
    else if(localStorage.getItem("category")=="architecture") {
  
      this.items= [
        "Building Plan/ Technical Drafting"
        ,"Interior/ Exterior Design"];
      }
      else if(localStorage.getItem("category")=="automotive") {
        this.items= [
        ,"Automotive Servicing"
        ,"Driving"
        ,"Motorcycle/Small Engine Servicing"
      ];
      }
      else if(localStorage.getItem("category")=="construction") {
        
        this.items= [
       
        "Carpentry"
        ,"Construction Painting"
        ,"Heavy Equipment Operation (Wheel Loader)"
        ,"HEO (Bulldozer)"
        ,"Masonry"
        ,"Plumbing"
        ,"PV Systems Installation"
        ,"Shielded Metal Arc Welding (SMAW)"
        ,"Technical Drafting"
        ,"Tile Setting"
        ,"Welding"
      ];
      }
      else if(localStorage.getItem("category")=="education") {
        
        this.items= [
        "Academic Tutor"
        ,"Musical Instruments Coach"
        ,"Sports Coach"
        ,"Voice Coach"];
      }
      else if(localStorage.getItem("category")=="electronics") {
        
        this.items= [
          "Electrical Installation and Maintenance"
          ,"Electronics Products Assembly and Servicing"
          ,"Mechatronics Servicing"];
      }
      else if(localStorage.getItem("category")=="garments") {
        
        this.items= [
          "Dressmaking"
        ,"Other garments"];
      }
      else if(localStorage.getItem("category")=="health") {
        
        this.items= [
          "Beauty Care Services (Nail Care)"
          ,"Caregiving" 
          ,"Central Sterile Service"
          ,"Emergency Medical Services"
          ,"Hair and Makeup Stylist"
          ,"Hair care services (barber)"
          ,"Health Care Services"
          ,"Hilot/ Wellness Massage"
          ,"Massage Therapy"
          ,"Medical Transcription"
          ,"Ophthalmic Lens Services"
          ,"Pharmacy Services"];
      }
      else if(localStorage.getItem("category")=="ict") {
        
        this.items= [
          "Administrative Support & Data encoding"
          ,"Computer Systems Servicing"
          ,"Contact Center Services"
          ,"Creative Web Design"
          ,"Personal/ Virtual Assistance"];
      }
      else if(localStorage.getItem("category")=="languages") {
        
        this.items= [
          "Basic Japanese Language"
          ,"Basic Spanish Language for Different Vocation"
          ,"English Language Proficiency"
          ,"ESL - Intensive English Course"
          ,"Japanese Language, Japanese Culture and Work Ethics Nihongo"
          ,"Other languages"];
      }
      else if(localStorage.getItem("category")=="metals") {
        
        this.items= [
          "Air Duct Services"
        ,"Auto Engine Rebuilding "
        ,"Automotive Body Painting Finishing"
        ,"Automotive Body Repairing"
        ,"Shielded Metal Arc Welding (SMAW)"
        ,"Flux Cored Arc Welding (FCAW)"
        ,"Gas Tungsten Arc Welding (GTAW)"];
      }
      else if(localStorage.getItem("category")=="tourism") {
        
        this.items= [
          "Bread and Pastry Production"
          ,"Cookery, Food and Beverage Services"
          ,"Events Management Services"
          ,"Food Processing"
          ,"Front Office Services"
          ,"Housekeeping"
          ,"Tourism Promotion Services"
          ,"Waiters, Bartenders and Food Handling"];
      }
      else if(localStorage.getItem("category")=="others") {
        
        this.items= [
        "Artist, Commercial Models"
        ,"Bills Payments, Cash Collection and Banking"
        ,"Bookkeeping Services"
        ,"Car Drivers, Truck Drivers and Bikers"
        ,"Caretaker Services"
        ,"Delivery, Relocation and Logistics"
        ,"Domestic Works"
        ,"Funeral Services"
        ,"Janitorial Housekeeping"
        ,"Marketing and Sales Support"
        ,"Messenger errands"
        ,"Packing and Sorting"
        ,"Security Services"
        ,"Septic tank siphoning"
        ,"Shoe maker Services"
        ,"Technical Maintenance Services"
        ,"Videographers, Photographers, Post production"
        ,"Wedding Planners"
        ]; 
      }
      
    }
 
  
 
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
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Provider/ServiceType?ServiceType=5');
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
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Registration/GetCustomerByPhoneNumber?ContactNo='+phoneNumber);
      
      this.fullname = response.data[0].Firstname +' '+response.data[0].Lastname;
      this.seekerphonenumber = response.data[0].ContactNo;
      console.log(this.fullname);
    }catch(error){
      console.log(error);
    }
  }

  async checkIfHasCurrentTransaction(phoneNumber:string){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Seeker/SeekerProcessCount?ContactNo='+phoneNumber);
      
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
        url:'http://jbenriquez-001-site1.htempurl.com/api/Transaction/AddNewTransaction'
      }).then(response=>{
        resolve(response);
        this.responsecode=response;
        //console.log(resolve);
      }).catch(function(error){
        //console.log(reject);
      });

    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}

