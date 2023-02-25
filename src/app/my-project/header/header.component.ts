import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() activeTab = new EventEmitter<string>();

  onSelect(selectedTab: string) {
    this.activeTab.emit(selectedTab);
  }
}
