import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appModule7BasicHighlight]',
})
export class Module7BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
