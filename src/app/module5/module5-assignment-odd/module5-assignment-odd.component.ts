import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module5-assignment-odd',
  templateUrl: './module5-assignment-odd.component.html',
  styleUrls: ['./module5-assignment-odd.component.css'],
})
export class Module5AssignmentOddComponent {
  @Input() time!: number;
}
