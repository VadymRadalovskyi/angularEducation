import {
  Directive,
  OnInit,
  Renderer2,
  Input,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';
import { defaultModifiers } from '@popperjs/core/lib/popper-lite';

@Directive({
  selector: '[appModule7BetterHighlight]',
})
export class Module7BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostListener('mouseover') mouseover() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
