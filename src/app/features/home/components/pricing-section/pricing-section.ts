import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-section',
  imports: [],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
})
export class PricingSection {
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
