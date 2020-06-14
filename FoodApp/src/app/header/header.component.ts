import { Component, Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{

    @Output() pageSelectedEvent=new EventEmitter<string>();

    onSelect(page:string){
        this.pageSelectedEvent.emit(page);
    }
}