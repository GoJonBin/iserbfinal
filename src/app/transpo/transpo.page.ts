import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { ModalController } from '@ionic/angular';
import { ProviderDriverPage } from '../provider-driver/provider-driver.page';
import { GoogleMaps, GoogleMap, Environment, Geocoder, GeocoderResult } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';

import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';


import axios from 'axios';
import qs from 'qs';


declare var L: any;
var lng = 0;
var lat = 0;
var latlng = 0;
var mymap: any;
var mark1: any;
var routingControl: any;
var kotse = L.icon({
  iconUrl: '/assets/icon/car.png',

  iconSize:     [50, 50], 
  shadowSize:   [50, 64], 
  popupAnchor:  [-3, -20] 
});

var tao = L.icon({
  iconUrl: '/assets/icon/tao.jpg',

  iconSize:     [50, 50], 
  shadowSize:   [50, 64], 
  popupAnchor:  [-3, -20] 
});


@Component({
  selector: 'app-transpo',
  templateUrl: 'transpo.page.html',
  styleUrls: ['transpo.page.scss'],
})

export class TranspoPage implements OnInit {
  map: GoogleMap;
  apikey:string="AIzaSyAax595ub9dRltgpdSB5aWPwGWjxUtMfMA";
  search_address:any;

  isenabled:boolean=true;
  isenabledbook:boolean=false;
  viewDrivers:boolean=true;
  
  constructor(private platform:Platform,public navCtrl: NavController,private nativeGeocoder: NativeGeocoder,public modalController:ModalController) {
  }
 
  async ngOnInit(){
    await this.platform.ready();
    await this.loadmap();
  }

  ionViewDidEnter() {
     this.loadmap();
  }

  push() {
    this.navCtrl.back();
  }

  async getProviderLocation(){
    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Location/GetServiceProvider');
      console.log(response.data[0].Latitude);
      console.log(response.data[0].Longitude);
      mark1=Leaflet.marker([response.data[0].Latitude,response.data[0].Longitude],{icon: kotse}).addTo(mymap).bindPopup("Provider");
    }catch(error){
      console.log(error);
    }
  }

  cancel(){
    mymap.removeLayer(mark1);
  }


  async insertBooking(){
    const data = {
      Firstname:'Jun Ben',
      Lastname:'Enriquez',
      ContactNo:'09184223552'
    }

    axios({
      method:'POST',
      headers:{'content-type':'application/x-www-form-urlencoded'},
      data: qs.stringify(data),
      url:'http://jbenriquez-001-site1.htempurl.com/api/booking/AddNewBooking'
    }).then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    });
  }

  confirmBooking(){
    //this.insertBooking();
    this.isenabled=true;
    this.isenabledbook=true;
    this.viewDrivers=false;
    this.presentModal();
  }

  cancelBooking(){
    this.isenabled=!this.isenabled;
  }

  booknow(){
    this.isenabled=!this.isenabled;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProviderDriverPage
    });
    return await modal.present();
    
  }


  searchDestination(){
    Geocoder.geocode({
      "address": this.search_address
    })
    .then((results:GeocoderResult[])=>{
      console.log(results);

      return this.map.addMarker({
        'position': results[0].position,
        'title': JSON.stringify(results[0].position)
      })
    })
    .then()
  }
  
  
  loadmap() {
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE':'',
        'API_KEY_FOR_BROWSER_DEBUG':''
      });
      this.map = GoogleMaps.create('map_canvas');
  }
  
}

