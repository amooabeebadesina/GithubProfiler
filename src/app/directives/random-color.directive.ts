import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.assignColor();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  assignColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.getRandomColor());
  }

}
