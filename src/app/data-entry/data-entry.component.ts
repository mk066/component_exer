import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  data=[];
  usernameData='';
  emailData='';
  addressData='';
  stateData='';
  cityData='';
  showField: any;
  displayOutput:any;

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    if(this.usernameData=='' && this.emailData=='' && this.addressData=='' && this.stateData=='' && this.cityData==''){
      alert("Please enter details.");
    }
    else{
    this.data.push({'Username':this.usernameData, 'Email': this.emailData, 'Address': this.addressData, 'State': this.stateData, 'City': this.cityData});
    this.usernameData='';
    this.emailData='';
    this.addressData='';
    this.stateData='';
    this.cityData='';
    //console.log('hi');
    }
  }


  acceptData(event: any){
    this.showField=event;
  }
}
