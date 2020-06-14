import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  inactiveUsers=[];

  constructor(private usersService:UsersService){
    this.inactiveUsers=this.usersService.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
