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
export class HeroSection implements OnInit, OnDestroy, AfterViewInit {
  // business types with palette and icon key
  businessTypes = [
    {
      text: 'oficina mecânica',
      icon: 'wrench',
      colors: { bg: 'rgba(255,204,0,0.12)', text: '#ffc600' },
    },
    {
      text: 'auto center',
      icon: 'car',
      colors: { bg: 'rgba(255,180,0,0.12)', text: '#ffb300' },
    },
    {
      text: 'funilaria',
      icon: 'hammer',
      colors: { bg: 'rgba(255,160,0,0.12)', text: '#ffa000' },
    },
    {
      text: 'troca de óleo',
      icon: 'oil',
      colors: { bg: 'rgba(255,140,0,0.12)', text: '#ff8f00' },
    },
  ];

  currentTypeIndex = 0;
  currentType = this.businessTypes[0];
  animationClass = 'type-entering';

  // Animated stats
  officinasCount = 0;
  satisfacaoCount = 0;
  osCount = 0;

  private intervalId: any;
  private isAnimating = false;

  // timings
  private readonly animationDuration = 250;
  private readonly displayInterval = 2000;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    setTimeout(() => this.switchText(), 200);
    this.intervalId = setInterval(() => this.switchText(), this.displayInterval);

    // Animate stats when component loads
    this.animateStats();
  }

  ngAfterViewInit(): void {
    // initialize feather icons (script added via index.html)
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  private animateStats(): void {
    // Animate "12K+"
    this.counterService.countTo(0, 12000, 2000, (value) => {
      if (value < 1000) {
        this.officinasCount = value;
      } else {
        this.officinasCount = Math.floor(value / 1000);
      }
    });

    // Animate "98%" with delay
    setTimeout(() => {
      this.counterService.countTo(0, 98, 2000, (value) => {
        this.satisfacaoCount = value;
      });
    }, 300);

    // Animate "3.2M" with delay
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

  switchText() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.animationClass = 'type-leaving';
    setTimeout(() => {
      this.currentTypeIndex = (this.currentTypeIndex + 1) % this.businessTypes.length;
      this.currentType = this.businessTypes[this.currentTypeIndex];
      this.animationClass = 'type-entering';
      this.isAnimating = false;
    }, this.animationDuration);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
}
