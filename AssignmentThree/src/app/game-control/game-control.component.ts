import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  counter:number=1;
  intervalId;

  @Output() onStartClicked=new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.intervalId = setInterval(() => {
      this.onStartClicked.emit(this.counter);
      this.counter++;
    }, 1000);
  }
  onStop() {
    clearInterval(this.intervalId);
  }
}
