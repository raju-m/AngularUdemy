import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers=false;
  serverCreated:boolean=false;
  serverCreationStatus="No server was created";
  serverName='Test Server';

  servers=['Test Server 1','Test Server 2'];

  constructor() {
    setTimeout(()=>{this.allowNewServers=true;},2000);

  }
  

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server was created...!! Name is"+this.serverName;

  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
    
  }
}
