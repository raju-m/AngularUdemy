import { Component, OnInit, DoCheck } from "@angular/core";
import { UsersService } from "./users.service";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements DoCheck {

  activeCount:number;
  inActiveCount:number;

  constructor(private counterService:CounterService) {
   
  }
  ngDoCheck(){
    this.activeCount=this.counterService.getActiveToInActive();
    this.inActiveCount=this.counterService.getInaActiveToActive();
  }
}
