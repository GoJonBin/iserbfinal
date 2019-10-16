import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-provider-driver',
  templateUrl: './provider-driver.page.html',
  styleUrls: ['./provider-driver.page.scss'],
})
export class ProviderDriverPage implements OnInit {
  showProfMath: boolean=true;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  push(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
