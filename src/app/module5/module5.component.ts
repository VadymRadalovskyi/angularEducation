import { Component } from '@angular/core';

@Component({
  selector: 'app-module5',
  templateUrl: './module5.component.html',
  styleUrls: ['./module5.component.css'],
})
export class Module5Component {
  serverElements: { type: string; name: string; content: string }[] = [
    { type: 'server', name: 'test', content: 'testServer' },
  ];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }

  odds: number[] = [];
  evens: number[] = [];
  onTimerOutput(timer: number) {
    if (timer % 2 === 0) {
      this.evens.push(timer);
    } else {
      this.odds.push(timer);
    }
  }
}
