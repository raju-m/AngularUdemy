import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {

  constructor() { }
  paragraphVisibility:boolean=false;
  counter=0;
  clickCounter=[];

  ngOnInit(): void {
  }
  
  toggleParagraphVisility(){
    this.paragraphVisibility=!this.paragraphVisibility;
    this.counter=this.counter+1;
    this.clickCounter.push(this.counter);
  }
}
