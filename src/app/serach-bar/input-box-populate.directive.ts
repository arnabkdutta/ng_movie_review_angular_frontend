import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputBoxPopulate]'
})
export class InputBoxPopulateDirective implements OnInit{
  @Input() name: string;
  constructor(elem: ElementRef, renderer: Renderer2) {
    
   }

   ngOnInit(){
    console.log("input-box keys  : ", this.name);
   }

}
