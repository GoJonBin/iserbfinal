import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.page.html',
  styleUrls: ['./chat-home.page.scss'],
})

export class ChatHomePage implements OnInit {
 email:string;
 pwd:string;
  constructor(public nav: NavController,public router: Router,public fs: AngularFirestore,public af:AngularFireAuth) { }
 
  login()
  {
    this.af.auth.signInWithEmailAndPassword(this.email,this.pwd).then(()=>{
      localStorage.setItem('userid',this.af.auth.currentUser.uid);
      this.nav.navigateRoot('/chat-room');
    }).catch(err=>{
      alert(err.message);
    })
  }

  goto_signup()
  {
    this.nav.navigateForward('/signup');
  }

  ngOnInit()
  {

  }
}