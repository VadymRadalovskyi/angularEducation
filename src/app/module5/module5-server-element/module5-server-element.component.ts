import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-module5-server-element',
  templateUrl: './module5-server-element.component.html',
  styleUrls: ['./module5-server-element.component.css'],
})
export class Module5ServerElementComponent {
  // @Input('srvElement') element!: {
  //   type: string;
  //   name: string;
  //   content: string;
  // };
  @Input() name!: string;
  @ViewChild('heading', { static: true }) header!: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph!: ElementRef;
}
