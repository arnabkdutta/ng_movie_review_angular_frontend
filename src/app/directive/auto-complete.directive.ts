import { Directive, Input, OnInit, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective implements OnInit {
  @Input('inputValue') inputValue: string;
  private element: HTMLInputElement;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.element = el.nativeElement;
    // console.log(el);
   }

  ngOnInit() {
    console.log('element' , this.element.textContent);
  }

  //clickMe() {
  // @HostListener('click') myClick() {
  //   // console.log('value is', this.inputValue);
  //   return this.inputValue;
  // }
  //}

  getValue(value){
    console.log('value is' , value);
  }


}
