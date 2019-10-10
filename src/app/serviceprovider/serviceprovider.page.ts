import { Component, OnInit } from '@angular/core';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { MenuController } from '@ionic/angular';

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
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.page.html',
  styleUrls: ['./serviceprovider.page.scss'],
})
export class ServiceproviderPage  {
  map: any;

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ionViewDidEnter() {
    //this.loadmap();
 }

 

 async getProviderLocation(){
   try{
     const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Location/GetServiceProvider');
     console.log(response.data[0].Latitude);
     console.log(response.data[0].Longitude);
     mark1=Leaflet.marker([response.data[0].Latitude,response.data[0].Longitude],{icon: kotse}).addTo(mymap).bindPopup("Provider");
   }catch(error){
     console.log(error);
   }
 }

 loadmap() {

     navigator.geolocation.getCurrentPosition(function(location)
     {

     mymap = Leaflet.map('map').setView([lat, lng], 18);  
    latlng = new L.LatLng(location.coords.latitude,location.coords.longitude);
      console.log(latlng);
   var list = "<dt>Name:JB Enriquez</dt>"
         + "<dt>Occupation:Driver</dt>"
         + '<a href="/chat-home">Chat</a>';
      var marker = Leaflet.marker(latlng,{icon: kotse}).addTo(mymap).bindPopup(list);
      Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF0aGRhYWNvNzgiLCJhIjoiY2p0ajE1dGVwMGlkMzQ5bWRhdXNzbHluMiJ9.zA0f7OVGLu_j_iQ9fetATw', {
         attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',  
       zoom: 8,
      maxZoom: 18,
      minZoom: 4,
      minResolution: 4891.96981025128,
       maxResolution: 39135.75848201024,
       doubleClickZoom: true,
       center: latlng
       }).addTo(mymap);
      mymap.panTo(latlng);
       
       
    });
    
   }

}
