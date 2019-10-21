import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-driver',
  templateUrl: './provider-driver.page.html',
  styleUrls: ['./provider-driver.page.scss'],
})
export class ProviderDriverPage implements OnInit {
  showProfMath: boolean=true;

  constructor(public modalController: ModalController,public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  push(){
    this.modalController.dismiss({
      'dismissed': true
    });
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
            //this.arrayTeacher[0].status="Pending";
            this.router.navigateByUrl('/chat-room');
          }
        }
     
        ]
    });

    await alert.present();
  }


}
