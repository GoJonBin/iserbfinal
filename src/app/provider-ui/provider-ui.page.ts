import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-provider-ui',
  templateUrl: './provider-ui.page.html',
  styleUrls: ['./provider-ui.page.scss'],
})
export class ProviderUIPage implements OnInit {

  constructor(public alertController: AlertController) { }
  Subject: any;
  showProfNava: any;
  showProfJoed: any;
  
 
 
  status = "Ready";
 userNava = {
   status:"Available",
   name:"Nava",
   statusColorNava: "color:red;"
 }
 userJoed = 
 {
    status: "Available",
    name:"Joed",
    statusColorJoed: "color:red;"
 }
  ngOnInit() {
    

  }



  showSelectedSubject(Subject)
  {
console.log(this.Subject);
   if(Subject=="Math")
   {
     this.showProfNava = true;
     this.showProfJoed = false;
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
    this.presentAlert();
  }
  hireNava()
  {
    this.presentAlert2();
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

