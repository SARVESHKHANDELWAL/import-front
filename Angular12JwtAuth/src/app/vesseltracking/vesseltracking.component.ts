import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-vesseltracking',
  templateUrl: './vesseltracking.component.html',
  styleUrls: ['./vesseltracking.component.css']
})
export class VesseltrackingComponent implements OnInit {

  onSubmit(data : any){
    console.log(data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
