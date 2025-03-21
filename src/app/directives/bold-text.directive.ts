import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldText]'
})
export class BoldTextDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
