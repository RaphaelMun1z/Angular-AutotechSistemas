import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-use-cases-section',
  imports: [CommonModule],
  templateUrl: './use-cases-section.html',
  styleUrl: './use-cases-section.css',
})
export class UseCasesSection {
  activeTab: string = 'oficina';

  setTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
