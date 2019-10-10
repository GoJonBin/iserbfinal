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
  constructor(public alertController: AlertController, private router: Router) { }
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

