import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client : any = {
    companyName: null,
    companyEmail: null,
    companyMobile: null,
    website: null,
    country: null,
    state: null,
    city: null,
    zipCode: null,
    name: null,
    email: null,
    mobile: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClient(){
    console.log(this.client);
  }

}
