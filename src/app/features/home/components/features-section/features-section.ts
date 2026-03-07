import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  imports: [],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class Features implements OnInit, OnDestroy {
  activePage: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activePage = (this.activePage + 1) % 4;
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setPage(index: number): void {
    this.activePage = index;
  }
}
