import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-ui',
  templateUrl: './provider-ui.page.html',
  styleUrls: ['./provider-ui.page.scss'],
})
export class ProviderUIPage implements OnInit {
  public arrayTeacher: any=[];
  information:boolean=false;
  constructor(public alertController: AlertController, private router: Router) { }
  Subject: any;
  showProfMath: any;
  showProfJoed: any;
  
 
 
 showAlert(){
   this.information=!this.information;
 }
  ngOnInit() {
    
   
  }

  async getProviderType(){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/ServiceType?ServiceType=5');
      console.log(response);
      for(let x = 0; x< response.data.length; x++) {
        this.arrayTeacher.push({'name':response.data[x].Firstname +' '+ response.data[x].Lastname,'rateperhour':response.data[x].RatePerHour,'status':response.data[x].Status,
        'Certificate1':response.data[x].Certificate1,'Certificate2':response.data[x].Certificate2,'Certificate3':response.data[x].Certificate3,
        'SerialCertificate1':response.data[x].SerialCertificate1,'SerialCertificate2':response.data[x].SerialCertificate2,'SerialCertificate3':response.data[x].SerialCertificate3,
        'Skills':response.data[x].Skills,'TesdaCategory':response.data[x].TesdaCategory,'ProfilePicture':response.data[x].ProfilePicture,
        'ContactNo':response.data[x].ContactNo,'Rating':response.data[x].Rating});
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
     //this.showProfNava=false;
     this.showProfJoed=true;
   }
   else{
     //this.showProfNava=false;
     this.showProfJoed=false;
   }
  }

  hireJoed()
  {
  
  }
  hireButton()
  {
 this.presentAlert2();
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
            this.arrayTeacher[0].status="Pending";
            this.router.navigateByUrl('/chat-room');
          }
        }
     
        ]
    });

    await alert.present();
  }
  }

