import { Component } from '@angular/core';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css'],
})
export class Module2Component {
  // Task 1
  // username: string = '';
  // Task 2
  detailsDisplayed: boolean = false;
  displayButtonLog: Date[] = [];
  onDisplayDetails(event: Event) {
    this.detailsDisplayed = !this.detailsDisplayed;
    if (this.detailsDisplayed === true) {
      this.displayButtonLog.push(new Date());
    }
  }
}
