import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName: string;
  isServerCreated = false;
  serverStatus = 'online';

  constructor() {
    this.serverName = '';
  }

  handleServerChange(): void {
    this.isServerCreated = true;
  }

  getColor(): string {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
