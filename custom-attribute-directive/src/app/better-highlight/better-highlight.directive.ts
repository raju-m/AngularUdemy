import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

@Input() defaultColor:string='transparent';
@Input() highlightColor:string='blue';

  @HostBinding('style.backgroundColor') backgroundColor:string;



  ngOnInit(){
    this.backgroundColor=this.defaultColor;
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseenter') mouseover(evenData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elementRef.nativeElement,'cursor','pointer');
    //this.backgroundColor='red';
    this.backgroundColor=this.highlightColor;

  }
  @HostListener('mouseleave') mouseleave(evenData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    //this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;
  }
}
