import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
