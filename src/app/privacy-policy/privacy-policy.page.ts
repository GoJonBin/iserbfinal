import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TopupModalPage } from '../topup-modal/topup-modal.page';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  ischeckedbox:boolean=false;
  continue:boolean=false;

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  onCheckeds() {
    if(this.ischeckedbox==false){
      this.continue=true;
    }
    else{
      this.continue=false;
    }
  }

  ondismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
