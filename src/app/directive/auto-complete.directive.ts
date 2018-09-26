import { Directive ,Input , OnInit , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective implements OnInit{
  @Input('inputValue') inputValue: string;

  constructor(private el: ElementRef) { }
  
  ngOnInit(){
    // console.log(this.inputValue);
  }

  @HostListener('click' , ['$event.target']) onClick(value) {
    console.log('value is' , this.inputValue);
  }
}
