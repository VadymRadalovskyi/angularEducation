import { Component } from '@angular/core';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css'],
})
export class MyProjectComponent {
  activeTab: string = 'recipesTab';
  onChangeActiveTab(activeTab: string) {
    this.activeTab = activeTab;
  }
}
