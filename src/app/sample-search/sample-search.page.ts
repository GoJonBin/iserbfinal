import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-search',
  templateUrl: './sample-search.page.html',
  styleUrls: ['./sample-search.page.scss'],
})
export class SampleSearchPage implements OnInit {
  isItemAvailable:boolean=false;
  items:any;
  
  constructor() { }

  ngOnInit() {
  }

  initializeItems(){ 
    this.items = ["Ram","gopi", "dravid"]; 
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  

}
