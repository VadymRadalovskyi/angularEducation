import { Component } from '@angular/core';

@Component({
  selector: 'app-module2-servers',
  templateUrl: './module2-servers.component.html',
  styleUrls: ['./module2-servers.component.css'],
})
export class Module2ServersComponent {
  serverID: number = Math.trunc(Math.random() * 100);
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
