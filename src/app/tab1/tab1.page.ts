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
    localStorage.setItem("categoryID","5");
    this.router.navigateByUrl('/provider-ui');
  }
  Agriculture() { 
    localStorage.setItem("category","agriculture");
    localStorage.setItem("categoryID","1");
    this.router.navigateByUrl('/provider-ui');
  }
  architecture() { 
    localStorage.setItem("category","architecture");
    localStorage.setItem("categoryID","2");
    this.router.navigateByUrl('/provider-ui');
  }
  automotive() { 
    localStorage.setItem("category","automotive");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","3");
  }
  construction() { 
    localStorage.setItem("category","construction");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","4");
  }
  electronics() { 
    localStorage.setItem("category","electronics");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","6");
  }
  garments() { 
    localStorage.setItem("category","garments");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","7");
  }
  health() { 
    localStorage.setItem("category","health");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","8");
  }
  ict() { 
    localStorage.setItem("category","ict");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","9");
  }
  languages() { 
    localStorage.setItem("category","languages");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","10");
  }
  metals() { 
    localStorage.setItem("category","metals");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","11");
  }
  tourism() { 
    localStorage.setItem("category","tourism");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","12");
  }
  others() { 
    localStorage.setItem("category","others");
    this.router.navigateByUrl('/provider-ui');
    localStorage.setItem("categoryID","13");
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
