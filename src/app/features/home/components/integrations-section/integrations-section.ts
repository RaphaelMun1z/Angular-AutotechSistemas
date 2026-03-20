import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Integration {
  name: string;
  badge: { text: string; type: string } | null;
  svg: SafeHtml;
}

@Component({
  selector: 'app-integrations-section',
  imports: [CommonModule],
  templateUrl: './integrations-section.html',
  styleUrl: './integrations-section.css',
})
export class IntegrationsSection {
  integrations: Integration[];

  constructor(private sanitizer: DomSanitizer) {
    const raw = [
      {
        name: 'Tabela FIPE',
        badge: { text: 'Popular', type: 'pop' },
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#e8540a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      },
      {
        name: 'SEFAZ / NF-e',
        badge: { text: 'Popular', type: 'pop' },
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      },
      {
        name: 'PagSeguro',
        badge: null,
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      },
      {
        name: 'Boleto Bancário',
        badge: null,
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="6.01" y2="15"/><line x1="10" y1="15" x2="14" y2="15"/></svg>`,
      },
      {
        name: 'Pix',
        badge: { text: 'Novo', type: 'new' },
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      },
      {
        name: 'WhatsApp API',
        badge: { text: 'Popular', type: 'pop' },
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      },
      {
        name: 'Google Maps',
        badge: null,
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      },
      {
        name: 'Google Reviews',
        badge: null,
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.8em;height:1.8em"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      },
    ];

    this.integrations = raw.map(item => ({
      ...item,
      svg: this.sanitizer.bypassSecurityTrustHtml(item.svg),
    }));
  }

  scrollToContact(event: Event): void {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}