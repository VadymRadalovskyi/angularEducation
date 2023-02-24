import { Component } from '@angular/core';

@Component({
  selector: 'app-module2-server',
  templateUrl: './module2-server.component.html',
  styleUrls: ['./module2-server.component.css'],
})
export class Module2ServerComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = 'TestServer';
  servers: string[] = [];
  testVer = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500);
  }
  onCreateServer() {
    if (this.serverName) {
      this.serverCreationStatus = 'Server was created! ' + this.serverName;
      this.serverCreated = true;
      this.servers.push('server');
    } else {
      this.serverCreated = false;
    }
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
