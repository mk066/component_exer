import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  @Input() displayOutput:any;
  @Output() showField=new EventEmitter();
  value='';
  hideTable=true;

  constructor() { }

  ngOnInit(): void {
  }
  
  verify(){
    this.showField.emit(this.value);
    this.hideTable=!this.hideTable;
    this.hideTable=false;
  }

}
