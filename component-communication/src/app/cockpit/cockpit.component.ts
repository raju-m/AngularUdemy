import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,SimpleChanges,
} from '@angular/core';
import { ServerData, IServerData } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  serverName: string = '';
  serverContent: string = '';
  @Output() serverCreated = new EventEmitter<IServerData>();
  @Output() blueprintCreated = new EventEmitter<IServerData>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  addServer(htmlInput: HTMLInputElement) {
    this.serverCreated.emit(
      new ServerData(
        htmlInput.value,
        this.serverContentInput.nativeElement.value,
        'server'
      )
    );
  }

  addServerBlueprint(htmlInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      new ServerData(
        htmlInput.value,
        this.serverContentInput.nativeElement.value,
        'blueprint'
      )
    );
  }
}
