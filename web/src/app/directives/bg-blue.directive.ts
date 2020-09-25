import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgBlue]'
})
export class BgBlueDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "blue";
    el.nativeElement.style.color = "white";
  }

}
