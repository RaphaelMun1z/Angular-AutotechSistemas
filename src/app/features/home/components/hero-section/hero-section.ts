import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { CounterService } from '../../../../core/services/counter.service';

declare var feather: any;

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit, AfterViewInit {
  officinasCount = 0;
  satisfacaoCount = 0;
  osCount = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.animateStats();
  }

  ngAfterViewInit(): void {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  private animateStats(): void {
    this.counterService.countTo(0, 12000, 2000, (value) => {
      if (value < 1000) {
        this.officinasCount = value;
      } else {
        this.officinasCount = Math.floor(value / 1000);
      }
    });

    setTimeout(() => {
      this.counterService.countTo(0, 98, 2000, (value) => {
        this.satisfacaoCount = value;
      });
    }, 300);

    setTimeout(() => {
      this.counterService.countTo(0, 3200000, 2000, (value) => {
        if (value < 1000000) {
          this.osCount = Math.floor(value / 1000);
        } else {
          const millions = Math.floor(value / 1000000);
          const lastChars = (value % 1000000) / 100000;
          this.osCount = millions * 10 + Math.floor(lastChars);
        }
      });
    }, 600);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
}