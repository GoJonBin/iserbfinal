import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import axios from 'axios';
import qs from 'qs';

declare var L: any;
var lng = 0;
var lat = 0;
var latlng = 0;
var mymap: any;
var mark1: any;
var marker;
var routeArray=new Array();
var locations = [
  ["HOTEL 101",14.535800,120.9880],
  ["SHELL RESIDENCES",14.536900, 120.986400],
  ["SM CORPORATE OFFICE",14.536400, 120.985000],
  ["HERITAGE HOTEL",14.537000, 120.993600]
  ];
  var buspin = L.icon({
    iconUrl: '/assets/icon/BUSPIN.svg',
  
    iconSize:     [50, 50], 
    shadowSize:   [50, 64], 
    popupAnchor:  [-3, -20] 
  });
@Component({
  selector: 'app-pab1',
  templateUrl: 'pab1.page.html',
  styleUrls: ['pab1.page.scss']
})

export class Pab1Page {
  data: any;
  back:boolean=true;
  selection:boolean=false;
  dynamicColor: string;
  
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    private storage: Storage,
    private route: ActivatedRoute, private router: Router) {
      this.dynamicColor = 'blue';
      
  }
 

  ionViewDidEnter() {
     this.loadmap();
     this.storage.get('session').then((val) => {
      console.log('Your age is', val);
    });
     
  }
  async afterGettingDestination(){
    if(routeArray[1].latLng==null)
    {
      console.log("Walang Laman")
    }
    else
    {
      console.log("May Laman")
    }
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then((res)=>{
      res.present();
      res.onDidDismiss().then((dis) => {
        this.findNearby();
      });
    });
  }

  push() {
    this.navCtrl.back();
  }

  async getProviderLocation(){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Location/GetServiceProvider');
      console.log(response.data[0].Latitude);
      console.log(response.data[0].Longitude);
      mark1=Leaflet.marker([response.data[0].Latitude,response.data[0].Longitude]).addTo(mymap).bindPopup("Provider");
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
      url:'http://nathdaaco123-001-site1.ctempurl.com/api/booking/AddNewBooking'
    }).then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    });
  }

  findNearby(){
      for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1],locations[i][2]],{icon:buspin})
          .bindPopup(locations[i][0])
          .addTo(mymap);
      }
      this.back=false;
      this.selection=true;
  }

  loadmap() {
    navigator.geolocation.getCurrentPosition(function(location)
    {
       mymap = Leaflet.map('map').setView([lat, lng], 18);  
       latlng = new L.LatLng(location.coords.latitude,location.coords.longitude);
       var marker = Leaflet.marker(latlng).addTo(mymap);
       Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuYmVuIiwiYSI6ImNqbnFpNWdsejAxNGczcXBsbGo0MW1yeW4ifQ.nsb3FOSvTL9LDCyKj3pfrg', {
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
      // let routingControl =  Leaflet.Routing.control({
      //   waypoints: [
      //           Leaflet.latLng(latlng)
      //    ], 
      //   routeWhileDragging: true,  
      //   geocoder: Leaflet.Control.Geocoder.nominatim(),
      //   fitSelectedRoutes:true
      // }).addTo(mymap);
      //   routeArray = routingControl.getWaypoints();
    });
   
    }
  }
