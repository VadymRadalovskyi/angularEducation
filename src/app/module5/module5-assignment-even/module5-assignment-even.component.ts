import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module5-assignment-even',
  templateUrl: './module5-assignment-even.component.html',
  styleUrls: ['./module5-assignment-even.component.css'],
})
export class Module5AssignmentEvenComponent {
  @Input() time!: number;
}
