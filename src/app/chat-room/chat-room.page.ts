import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
 
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})

export class ChatRoomPage {
  text: string;
  chatRef: any;
  uid: string;
  constructor(public af: AngularFireAuth, public fs: AngularFirestore) {
  // this.uid=localStorage.getItem('userid');
this.uid="MePhone";
   this.chatRef = this.fs.collection('chats',ref=>ref.orderBy('Timestamp')).valueChanges();
  }

  send()
  {
    if(this.text != '')
    {
      this.fs.collection('chats').add(
        {
          Name: "Nath",
          Message: this.text,
          UserID: "MePhone",
          Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
      );
      this.text='';
    }
  }
 
  
}