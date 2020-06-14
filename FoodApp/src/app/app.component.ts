import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodApp';
  pageName:string="recipe";

 
  onSelectedPage(page:string){
    this.pageName=page;
  }
}
