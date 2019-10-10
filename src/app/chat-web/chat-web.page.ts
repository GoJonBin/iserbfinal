import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-chat-web',
  templateUrl: './chat-web.page.html',
  styleUrls: ['./chat-web.page.scss'],
})

export class ChatWebPage {
  text: string;
  chatRef: any;
  uid: string;
  constructor(public af: AngularFireAuth, public fs: AngularFirestore,public navCtrl: NavController) {
  this.uid=localStorage.getItem('userid');
 this.uid=('gab');
   this.chatRef = this.fs.collection('chats',ref=>ref.orderBy('Timestamp')).valueChanges();
  }

  send()
  {
    if(this.text != '')
    {
      this.fs.collection('chats').add(
        {
          Name: "MNL48",
          Message: this.text,
          UserID: this.uid,
          Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
      );
      this.text='';
    }
  }

  backBtn()
  {
    this.navCtrl.back();
  }
 
  
}