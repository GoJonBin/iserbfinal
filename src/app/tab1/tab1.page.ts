import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public servicesBoolean: boolean[] = new Array(4);
  

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
