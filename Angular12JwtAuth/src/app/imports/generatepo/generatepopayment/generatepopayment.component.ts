import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-generatepopayment',
  templateUrl: './generatepopayment.component.html',
  styleUrls: ['./generatepopayment.component.css']
})
export class GeneratepopaymentComponent implements OnInit {

  editor: any;
  text = "";
  isPaymentTerms = true;

  constructor() { }
  ngOnInit(): void {
    this.editor = new Editor();
  }

  togglePaymentTerms(){
    this.isPaymentTerms = true;    
  }

  togglePaymentMilestone(){
    this.isPaymentTerms = false;
  }


}
