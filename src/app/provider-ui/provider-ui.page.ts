import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-provider-ui',
  templateUrl: './provider-ui.page.html',
  styleUrls: ['./provider-ui.page.scss'],
})
export class ProviderUIPage implements OnInit {
  public arrayTeacher: any=[];
  constructor(public alertController: AlertController) { }
  Subject: any;
  showProfMath: any;
  showProfJoed: any;
  
 
 
 
  ngOnInit() {
    
   
  }

  async getProviderType(){
    try{
      const response = await axios.get(' http://nathdaaco123-001-site1.ctempurl.com/api/Provider/ServiceType?ServiceType=5');
      console.log(response);
      for(let x = 0; x< response.data.length; x++) {
        this.arrayTeacher.push({'name':response.data[x].Firstname +' '+ response.data[x].Lastname,'rate':response.data[x].Rate,'status':response.data[x].Status});
      }      
      console.log(this.arrayTeacher);
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
   
   }
   else if(Subject=="English")
   {
     this.showProfNava=false;
     this.showProfJoed=true;
   }
   else{
     this.showProfNava=false;
     this.showProfJoed=false;
   }
  }

  hireJoed()
  {
  
  }
  hireNava()
  {
 
  }
 
  async presentAlert() {
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
            this.userJoed.status="Pending";
            this.userJoed.statusColorJoed="color:red;";
          }
        }
   
        ]
    });

    await alert.present();
  }

  async presentAlert2() {
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
            this.userNava.status="Pending";
            this.userNava.statusColorNava="color:red";
          }
        }
     
        ]
    });

    await alert.present();
  }
  }

