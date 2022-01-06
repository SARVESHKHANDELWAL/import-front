import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  LogoPath: string;
  NamePath: string;
  NotificationImg : string;  
  MessageImg : string;
  form: any = {
    category: null,
    subcategory: null,
    name: null,
    type:null,
    country: null,
    state: null,
    city: null,
    zipcode: null,
    currency: null,
    quantity: null,
    date: null
  };

  addVendor : any = {
    companyName: null,
    companyEmail: null,
    companyMobile: null,
    website: null,
    address1: null,
    address2: null,
    vendorCountry: null,
    vendorState: null,
    vendorCity: null,
    vendorZipCode: null,
    hsmItem: null,
    hsmCode: null,
    gstNumber: null,
    ieCode: null,
    bankName: null,
    bankCode: null,
    vendorName: null,
    vendorEmail: null,
    vendorMobile: null,
    gstDocument: null
  };

  constructor() {    
    // this.LogoPath = "./assets/Images/logo_icon.png"
    // this.NamePath = "./assets/Images/logo.png"
    // this.NotificationImg = "./assets/Images/headericon/notification.png";
    // this.MessageImg = "./assets/Images/headericon/message.png";
    this.LogoPath = ""
    this.NamePath = ""
    this.NotificationImg = "";
    this.MessageImg = "";
  }
  
  ngOnInit(): void {
    // const customjs = document.createElement('script');
    // customjs.src = 'assets/js/custom.js'
    // customjs.type = 'text/javascript';
    // document.getElementsByTagName('body')[0].appendChild(customjs);
  }
  
  onSubmit(){
    const { category,subcategory,name,type,state,city,zipcode,currency,quantity,date} = this.form;
    console.log(this.form);    
  }

  onSubmitVendor(){
    console.log(this.addVendor);
  }
  
  nonNeg(value : Number){
    console.log(value);
    return (value > 0);
  }
    
}
