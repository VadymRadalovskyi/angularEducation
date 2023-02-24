import { Component, Output, EventEmitter } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-module5-assignment-game-control',
  templateUrl: './module5-assignment-game-control.component.html',
  styleUrls: ['./module5-assignment-game-control.component.css'],
})
export class Module5AssignmentGameControlComponent {
  // timerValue: number = 0;
  @Output() timerValueOutput = new EventEmitter<number>();
  timer: any;
  lastTimerNumber = 0;

  onStartGame() {
    this.timer = setInterval(() => {
      this.lastTimerNumber++;
      this.timerValueOutput.emit(this.lastTimerNumber);
    }, 1000);
  }
  onStopGame() {
    clearInterval(this.timer);
  }
}
