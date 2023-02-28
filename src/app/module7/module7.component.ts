import { Component } from '@angular/core';

@Component({
  selector: 'app-module7',
  templateUrl: './module7.component.html',
  styleUrls: ['./module7.component.css'],
})
export class Module7Component {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4];
  onlyOdd = false;
  value = 'bla-bla';
}
