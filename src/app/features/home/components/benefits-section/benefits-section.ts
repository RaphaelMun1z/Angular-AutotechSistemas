import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits-section',
  imports: [],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css',
})
export class BenefitsSection implements OnInit {
  retencao: number = 0;
  tempoOS: number = 0;
  faturamento: number = 0;
  retencaoExtra: number = 0;

  ngOnInit(): void {
    this.animateValue('retencao', 68, 1500);
    this.animateValue('tempoOS', 40, 1500);
    this.animateValue('faturamento', 25, 1500);
    this.animateValue('retencaoExtra', 55, 1500);
  }

  animateValue(
    propName: 'retencao' | 'tempoOS' | 'faturamento' | 'retencaoExtra',
    target: number,
    duration: number,
  ) {
    const start = 0;
    const increment = target / (duration / 16);

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        this[propName] = target;
        clearInterval(timer);
      } else {
        this[propName] = Math.floor(current);
      }
    }, 16);
  }
}
