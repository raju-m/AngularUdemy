import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { ServerData } from '../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})


export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit {
  @Input() modelType:ServerData;
  @ContentChild('contentParagraph') paragraph:ElementRef
  @ContentChild('MySampleElement') sampleContent:ElementRef;

  constructor() {
    console.log('constructor called');
  }
  
  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
ngDoCheck(){
  console.log('ngDoCheck called');
}

ngAfterContentInit(){
  console.log(" this paragraph"+this.paragraph.nativeElement.textContent);
  console.log(" this paragraph"+this.sampleContent.nativeElement.textContent);
}

  ngOnInit(): void {
    console.log('ngOnInit called');
    //console.log(" this paragraph"+this.paragraph.nativeElement.textContent);
  }

}
