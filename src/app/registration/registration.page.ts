import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {DatePicker} from '@ionic-native/date-picker/ngx';
import axios from 'axios';
import qs from 'qs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  
  regAs: any;

  currentIDPhoto: any;
  currentIDHandheld: any;
  validFirstName;validLastName;validStreet;validBarangay;validUnit;validCity: boolean = false;
  providerInfo: boolean = false;
  nameAgree;streetAgree: boolean = false;
  
  public loginForm: FormGroup;
  _gender;_birthdate;_phonenumber;numberChecker;_ids1;_ids2;_services;
  _firstname;_lastname;_middlename;_unitname;_streetname;_barangayname;_cityname;
  constructor(private datePicker: DatePicker,private camera: Camera,public formBuilder: FormBuilder,public router: Router,
    public alertController: AlertController,public toastController: ToastController)  {
   }


   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please check Error!.',
      buttons: ['OK']
    });

    await alert.present();
  }

   takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData1) => {
      this.currentIDPhoto = 'data:image/jpeg;base64,' + imageData1;
    }, (err) => {
    
      console.log("Camera issue:" + err);
    });
  }

  takePicture2() {
    const options2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options2).then((imageData2) => {
      this.currentIDHandheld = 'data:image/jpeg;base64,' + imageData2;
    }, (err) => {
    
      console.log("Camera issue:" + err);
    });
  }
  


  ngOnInit() {
    this.currentIDPhoto = '/assets/img/idPhoto.png';
    this.currentIDHandheld = '/assets/img/idPhoto.png';
  }


  async loginErrorToast(messages:string) {
    const toast = await this.toastController.create({
      message: messages,
      duration: 2000
    });
    toast.present();
  }

  onRegister() {
    this.checkName();
    this.checkAddress();

     if(this.regAs=="2")
     {
       if(this._firstname!=""||this._lastname!=""||this._phonenumber!=""||this._birthdate!=""||this.regAs!=""||this._gender!=""
       ||this._unitname!=""||this._streetname!=""||this._barangayname!=""||this._cityname!="")
       {

       this.getValidation().then((data)=>{
        let res = data;
        if(res=="0"){

        
          const data = 
          {
            Firstname:this._firstname,
            Lastname:this._lastname,
            ContactNo:this._phonenumber,
            Birthday:this._birthdate,
            CustomerType:this.regAs,
            Gender:this._gender,
            Address:this._unitname+" "+this._streetname+","+this._barangayname+","+this._cityname,
            Attachment1:this._ids1,
            Attachment2:this._ids2,
            ServiceType:this._services
          }
  
          axios({
            method:'POST',
            headers:{'content-type':'application/x-www-form-urlencoded'},
            data: qs.stringify(data),
            url:'http://nathdaaco123-001-site1.ctempurl.com/api/Registration/AddCustomer'
          }).then(function(response){
            console.log(response.data);
        
          }).catch(function(error){
            console.log(error);
          });
  
          
            this.router.navigateByUrl('/serviceprovider');
          
         }
         else{
           this.loginErrorToast('Use Another Phone Number !');
         }

       });
        
      }
      else{
        this.loginErrorToast('Please Fill All Fields !');
      }
    }
    else if (this.regAs=="1")
    {
      if(this._firstname!=""||this._lastname!=""||this._phonenumber!=""||this._birthdate!=""||this.regAs!=""||this._gender!=""
       ||this._unitname!=""||this._streetname!=""||this._barangayname!=""||this._cityname!="")
       {

        this.getValidation().then((data)=>{
          let res =data;

          if(res=="0"){
            const dataSeeKer = 
        {
          Firstname:this._firstname,
          Lastname:this._lastname,
          ContactNo:this._phonenumber,
          Birthday:this._birthdate,
          CustomerType:this.regAs,
          Gender:this._gender,
          Address:this._unitname+" "+this._streetname+","+this._barangayname+","+this._cityname
        }

        axios({
          method:'POST',
          headers:{'content-type':'application/x-www-form-urlencoded'},
          data: qs.stringify(dataSeeKer),
          url:'http://nathdaaco123-001-site1.ctempurl.com/api/Registration/AddCustomerSeeker'
        }).then(function(response){
          console.log(response.data);
      
        }).catch(function(error){
          console.log(error);
        });

        this.router.navigateByUrl('/tabs');
          }
          else{
            this.loginErrorToast('Use Another Phone Number !');
          }
        
      
      });
    }
  }else{
    this.loginErrorToast('Please Fill All Fields !');
  }

}

showSelectValue(regAs)
{
  if(regAs=="2")
  {
    console.log("Provider");
    this.providerInfo = true;
  }
  else{
    console.log("Seeker");
    this.providerInfo = false;
  }
}

checkName()
{
  if(!/[a-zA-Z]+$/.test(this._firstname)){
    this.validFirstName = true;
    this.nameAgree = false;
   }
   if(!/[a-zA-Z]+$/.test(this._lastname)){
     this.validLastName = true;
     this.nameAgree = false;
   }

   if(/[a-zA-Z]+$/.test(this._firstname)&&/[a-zA-Z]+$/.test(this._lastname)){
     this.nameAgree = true;
   }
}

checkAddress()
{
  if((/^ *$/.test(this._streetname))){
    this.validStreet = true;
    this.streetAgree = false;
  }
  
  if((/^ *$/.test(this._barangayname))){
    this.validBarangay = true;
    this.streetAgree = false;
  }
  if(/^ *$/.test(this._unitname)){
    this.validUnit = true;
    this.streetAgree = false;
  }
  if(/^ *$/.test(this._cityname))
  {
    this.validCity = true;
    this.streetAgree = false;
  }
  if(!/^ *$/.test(this._streetname)&&!/^ *$/.test(this._unitname)&&!/^ *$/.test(this._barangayname)&&!/^ *$/.test(this._cityname)){
    this.streetAgree = true;
  }
}
onClickFirstName(){
  this.validFirstName = false;
}
onClickLastName(){
  this.validLastName = false;
}
onClickStreet()
{
  this.validStreet= false;
}
onClickBarangay()
{
  this.validBarangay= false;
}
onClickHouseNo()
{
  this.validUnit= false;
}
onClickCity()
{
  this.validCity= false;
}

async getValidation(){
  try{
    const response = await axios.get('http://nathdaaco123-001-site1.ctempurl.com/api/Login/GetCustomer?ContactNo='+this._phonenumber);
    let valid = response.data[0].UserExists;
    return valid;
    
  }catch(error){
    console.log(error);
  }
}


}
