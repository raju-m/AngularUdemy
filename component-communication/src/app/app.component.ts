import { Component, Input } from '@angular/core';
import { ServerData, IServerData } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  serverElements:ServerData[]=[
   new ServerData('Test server', 'this is a sample data', 'server')
  ];

  title = 'component-communication';

  onServerAdded(serverData:IServerData){
   this.serverElements.push(new ServerData(serverData.name,serverData.content,serverData.type));
  }
  onBlueprintAdded(blueprintData:IServerData){
    this.serverElements.push(new ServerData(blueprintData.name,blueprintData.content,blueprintData.type));
  }
}

