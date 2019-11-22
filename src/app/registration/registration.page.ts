import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {DatePicker} from '@ionic-native/date-picker/ngx';
import axios from 'axios';
import qs from 'qs';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  
  regAs: any;
  registrationbutton:boolean=false;
  policybutton:boolean=true;

  currentIDPhoto: any;
  currentIDHandheld: any;
  validFirstName;validLastName;validStreet;validBarangay;validUnit;validCity: boolean = false;
  providerInfo: boolean = false;
  nameAgree;streetAgree: boolean = false;
  
  public loginForm: FormGroup;
  _gender;_birthdate;_phonenumber;numberChecker;_ids1;_ids2;_services;
  _firstname;_lastname;_middlename;_unitname;_streetname;_barangayname;_cityname;
  _subcategory;_specific;
  constructor(private datePicker: DatePicker,private camera: Camera,public formBuilder: FormBuilder,public router: Router,
    public alertController: AlertController,public toastController: ToastController,public modalController:ModalController,
    private storage: Storage)  {
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


  async sendOTP(phones) {
    localStorage.setItem('OTP', Math.floor(1000 + Math.random() * 9000).toString());

    // var link = 'https://stioasys.com/sendSMS.php';
    // var myData = JSON.stringify({OTP: localStorage.getItem('OTP')});
    // this.http.post(link, myData)
    // .subscribe(data => {
    // this.data.response = data["_body"]; 
    //  }, error => {
    // console.log("Oooops!");
    // });

    try{
      const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/SendOTP/ByNumber?ContactNo='+phones+'&Otp='+localStorage.getItem('OTP'));
      console.log(response);  
    }catch(error){
      console.log(error);
    }

  }

  onRegister() {
    this.checkName();
    this.checkAddress();
    var dateFormat = this._birthdate.split('T')[0]; 
    console.log(dateFormat);

    this.storage.set('customertype', this.regAs);
    this.storage.set('session', this._phonenumber);

     if(this.regAs=="2")
     {
       if(this._firstname!=""||this._lastname!=""||this._phonenumber!=""||this._birthdate!=""||this.regAs!=""||this._gender!=""
       ||this._unitname!=""||this._streetname!=""||this._barangayname!=""||this._cityname!="")
       {

       this.getValidation().then((data)=>{
        let res = data;
        console.log(res);
        if(res=="0"){
          const data = 
          {
            Firstname:this._firstname,
            Middlename:this._middlename,
            Lastname:this._lastname,
            ContactNo:this._phonenumber,
            Birthday:dateFormat,
            CustomerTypeId:this.regAs,
            Gender:this._gender,
            CompleteAddress:this._unitname+" "+this._streetname+","+this._barangayname+","+this._cityname,
            Attachment1:this._ids1,
            Attachment2:this._ids2,
            JobMainCategoryId:this._services,
            JobSubCategoryId:this._subcategory,
            Skills:this._specific
          }
  
          axios({
            method:'POST',
            headers:{'content-type':'application/x-www-form-urlencoded'},
            data: qs.stringify(data),
            url:'http://jbenriquez-001-site1.htempurl.com/api/Registration/AddCustomerProvider'
          }).then(function(response){
            console.log(response.data);
            //this.router.navigateByUrl('/otp');
            this.sendOTP(this._phonenumber);
          }).catch(function(error){
            console.log(error);
          });
  
          
            //this.router.navigateByUrl('/otp');
          
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
          console.log(res);

          if(res=="0"){
            const dataSeeKer = 
        {
          Firstname:this._firstname,
          Lastname:this._lastname,
          Middlename:this._middlename,
          ContactNo:this._phonenumber,
          Birthday:dateFormat,
          CustomerTypeId:this.regAs,
          Gender:this._gender,
          CompleteAddress:this._unitname+" "+this._streetname+","+this._barangayname+","+this._cityname
        }

        axios({
          method:'POST',
          headers:{'content-type':'application/x-www-form-urlencoded'},
          data: qs.stringify(dataSeeKer),
          url:'http://jbenriquez-001-site1.htempurl.com/api/Registration/AddCustomerSeeker'
        }).then(function(response){
          console.log(response.data);
          this.sendOTP(this._phonenumber);
        }).catch(function(error){
          console.log(error);
        });

        

        //this.router.navigateByUrl('/otp');
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
    const response = await axios.get('http://jbenriquez-001-site1.htempurl.com/api/Login/GetCustomer?ContactNo='+this._phonenumber);
    let valid = response.data[0].UserExists;
    
    console.log(valid);
    return valid;
  }catch(error){
    console.log(error);
  }
}

async presentModal() {
  const modal = await this.modalController.create({
    component: PrivacyPolicyPage,
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });
  this.registrationbutton=true;
  this.policybutton=false;
  return await modal.present();
  
}


}
