import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dynamicColor: string;
  

  
  public servicesBoolean: boolean[] = new Array(4);
  constructor(private storage: Storage,public router: Router){
    this.dynamicColor = 'blue';
  }

  education() {
    localStorage.setItem("category","education");
    this.router.navigateByUrl('/provider-ui');
  }
  Agriculture() { 
    localStorage.setItem("category","agriculture");
    this.router.navigateByUrl('/provider-ui');
  }
  architecture() { 
    localStorage.setItem("category","architecture");
    this.router.navigateByUrl('/provider-ui');
  }
  automotive() { 
    localStorage.setItem("category","automotive");
    this.router.navigateByUrl('/provider-ui');
  }
  construction() { 
    localStorage.setItem("category","construction");
    this.router.navigateByUrl('/provider-ui');
  }
  electronics() { 
    localStorage.setItem("category","electronics");
    this.router.navigateByUrl('/provider-ui');
  }
  garments() { 
    localStorage.setItem("category","garments");
    this.router.navigateByUrl('/provider-ui');
  }
  health() { 
    localStorage.setItem("category","health");
    this.router.navigateByUrl('/provider-ui');
  }
  ict() { 
    localStorage.setItem("category","ict");
    this.router.navigateByUrl('/provider-ui');
  }
  languages() { 
    localStorage.setItem("category","languages");
    this.router.navigateByUrl('/provider-ui');
  }
  metals() { 
    localStorage.setItem("category","metals");
    this.router.navigateByUrl('/provider-ui');
  }
  tourism() { 
    localStorage.setItem("category","tourism");
    this.router.navigateByUrl('/provider-ui');
  }
  others() { 
    localStorage.setItem("category","others");
    this.router.navigateByUrl('/provider-ui');
  }
  

  showHideAgriculture()
  {
    if(this.servicesBoolean[0]==true)
    {
      this.servicesBoolean[0]=false;
      this.servicesBoolean.fill(false);
    }
    else
    {
      this.servicesBoolean.fill(false);
      this.servicesBoolean[0] = !this.servicesBoolean[0];
    }

  }

  showHideArchitecture()
  {
    if(this.servicesBoolean[1]==true)
    {
      this.servicesBoolean[1]=false;
      this.servicesBoolean.fill(false);
    }
    else
    {
      this.servicesBoolean.fill(false);
      this.servicesBoolean[1] = !this.servicesBoolean[0];
    }
  }
  showHideBusiness()
  {
    if(this.servicesBoolean[2]==true)
    {
      this.servicesBoolean[2]=false;
      this.servicesBoolean.fill(false);
    }
    else
    {
      this.servicesBoolean.fill(false);
      this.servicesBoolean[2] = !this.servicesBoolean[0];
    }
  }
}
