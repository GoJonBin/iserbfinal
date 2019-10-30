import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import axios from 'axios';
import qs from 'qs';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ModalController } from '@ionic/angular';
import { SeekerListPage } from '../seeker-list/seeker-list.page';


declare var L: any;
var lng = 0;
var lat = 0;
var latlng = 0;
var mymap: any;
var mark1: any;
var marker;
var routeArray=new Array();
var locations = [
  ["SEEKER 1",14.5376816,120.9798211],
  ["SEEKER 2",14.540566, 120.9803733],
  ["SEEKER 3",14.5414682, 120.9797863],
  ["SEEKER 4",14.5394722, 120.9804113]
  ];
  var tao = L.icon({
    iconUrl: '/assets/icon/tao.jpg',
  
    iconSize:     [50, 50], 
    shadowSize:   [50, 64], 
    popupAnchor:  [-3, -20] 
  });
@Component({
  selector: 'app-pab1',
  templateUrl: 'pab1.page.html',
  styleUrls: ['pab1.page.scss']
})

export class Pab1Page implements OnInit{
  data: any;
  back:boolean=true;
  balance:any;
  selection:boolean=false;
  dynamicColor: string;
  ischecked:boolean=false;
  enablednotification:boolean=true;
  disableNearby:boolean=false;
  public arraySeeker: any=[];
  ifseekername:string;
  seekerApplybutton:any;
  providerstatus:any;
  
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController,
    private localNotifications: LocalNotifications,
    private storage: Storage,
    private route: ActivatedRoute, private router: Router,public modalController:ModalController) {
      this.dynamicColor = 'blue';
      
  }
 
  ngOnInit(){
    this.storage.get('session').then((val) => {
      this.getInformation(val);
      this.getValidation(val);
    });
  }

  ionViewDidEnter() {
     this.loadmap();
     
     this.storage.get('session').then((val) => {
      this.getInformation(val);
      this.getValidation(val);
    });
     
  }

  jobOfferNotif(){
    this.localNotifications.schedule({
      title: 'Someone is hiring you',
      text: 'Accept Job ?',
      actions: [
          { id: 'yes', title: 'Yes'  } ,
          { id: 'no',  title: 'No' }
      ]
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

  findNearby(){
      for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1],locations[i][2]],{icon:tao})
          .bindPopup(locations[i][0]+this.seekerApplybutton)
          .addTo(mymap);
      }
      this.back=false;
      this.selection=true;
  }

  async getInformation(id:any){
    try{
      const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/SeekerCounts?ContactNo='+id);
      for(let x = 0; x< response.data.length; x++) {
        this.arraySeeker.push({
          'seekercounts':response.data[x].SeekerCounts
          });
          this.ifseekername = this.arraySeeker[1].seekercounts;
          console.log(this.ifseekername);
          
          if(this.ifseekername=='0'){
            this.enablednotification=true;
          }
          else{
            this.enablednotification=false;
            this.jobOfferNotif();
          }
          
      }
    }catch(error){
      console.log(error);
    }
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

    async presentModal() {
      const modal = await this.modalController.create({
        component: SeekerListPage
      });
      return await modal.present();
    }

    async getValidation(phoneNumber:string){
      try{
        const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Provider/Credits?ContactNo='+phoneNumber);
        this.balance = response.data[0].Credit;
        this.providerstatus = response.data[0].Status;
        if(this.balance>=10 && this.providerstatus=='Online'){
          //this.disableNearby=false;
          this.enablednotification=false;
          this.seekerApplybutton='<br><ion-button color="tertiary" href="./provider-apply" style="height:30px;width:50px;">APPLY</ion-button><br>';
        }
        else if(this.balance>=10 && this.providerstatus=='Busy'){
          //this.disableNearby=false;
          //this.enablednotification=false;
          this.enablednotification=true;
          this.seekerApplybutton='<br><ion-button color="dark" style="height:30px;width:50px;background-color:gray;">APPLY</ion-button><br>';
        }
        else{
          //this.disableNearby=true;
          this.enablednotification=true;
          this.seekerApplybutton='<br><ion-button color="dark" style="height:30px;width:50px;background-color:gray;">APPLY</ion-button><br>';
        }
      }catch(error){
        console.log(error);
      }
    }
  }
