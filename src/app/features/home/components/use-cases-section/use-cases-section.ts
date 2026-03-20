import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DemoPreview } from '../demo-preview/demo-preview';

@Component({
  selector: 'app-use-cases-section',
  imports: [CommonModule, DemoPreview],
  templateUrl: './use-cases-section.html',
  styleUrl: './use-cases-section.css',
})
export class UseCasesSection implements OnInit, OnDestroy {
  activeTab: string = 'oficina';
  progress: number = 0;

  readonly tabs = ['oficina', 'concessionaria', 'autopecas', 'estetica'];
  readonly tabDuration = 6000;
  readonly tickInterval = 50;

  private intervalId: any = null;
  private isPaused = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startProgress();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  setTab(tabId: string): void {
    this.activeTab = tabId;
    this.progress = 0;
    this.restartProgress();
  }

  onMouseEnter(): void {
    this.isPaused = true;
  }

  onMouseLeave(): void {
    this.isPaused = false;
  }

  private startProgress(): void {
    const increment = (this.tickInterval / this.tabDuration) * 100;

    this.intervalId = setInterval(() => {
      if (this.isPaused) return;

      this.progress += increment;

      if (this.progress >= 100) {
        this.progress = 0;
        this.advanceTab();
      }

      this.cdr.markForCheck();
    }, this.tickInterval);
  }

  private advanceTab(): void {
    const currentIndex = this.tabs.indexOf(this.activeTab);
    const nextIndex = (currentIndex + 1) % this.tabs.length;
    this.activeTab = this.tabs[nextIndex];
  }

  private restartProgress(): void {
    this.clearInterval();
    this.startProgress();
  }

  private clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}