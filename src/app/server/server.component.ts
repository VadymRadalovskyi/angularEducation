import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
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
