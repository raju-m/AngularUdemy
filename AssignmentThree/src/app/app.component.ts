import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentThree';
  oddDataSource=[];
  evenDataSource=[];

  onParentStartClick(number:number){
    if(number%2==0)
    this.evenDataSource.push(number);
    else
    this.oddDataSource.push(number);
  }
}
