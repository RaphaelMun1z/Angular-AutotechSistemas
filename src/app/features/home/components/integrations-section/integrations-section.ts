import { Component } from '@angular/core';

@Component({
  selector: 'app-integrations-section',
  imports: [],
  templateUrl: './integrations-section.html',
  styleUrl: './integrations-section.css',
})
export class IntegrationsSection {
  integrations = [
    {
      name: 'Tabela FIPE',
      badge: { text: 'Popular', type: 'pop' },
      bg: '#fff2e8',
      svg: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
    },
    {
      name: 'SEFAZ / NF-e',
      badge: { text: 'Popular', type: 'pop' },
      bg: '#e8f4ff',
      svg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
    },
    {
      name: 'PagSeguro',
      badge: null,
      bg: '#edfbf2',
      svg: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
    },
    {
      name: 'Boleto Bancário',
      badge: null,
      bg: '#f0f0ff',
      svg: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
    },
    {
      name: 'Pix / Open Finance',
      badge: { text: 'Novo', type: 'new' },
      bg: '#fff8e1',
      svg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
    },
    {
      name: 'Mercado Livre',
      badge: null,
      bg: '#fdf0f0',
      svg: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    },
    {
      name: 'Google Analytics',
      badge: null,
      bg: '#e8fff4',
      svg: '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
    },
    {
      name: 'WhatsApp API',
      badge: { text: 'Popular', type: 'pop' },
      bg: '#fdf0ff',
      svg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
    },
    {
      name: 'Google Maps',
      badge: null,
      bg: '#e8f8ff',
      svg: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
    },
    {
      name: 'Mailchimp',
      badge: null,
      bg: '#fff3f0',
      svg: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
    },
    {
      name: 'Shopify',
      badge: { text: 'Novo', type: 'new' },
      bg: '#f0fff8',
      svg: '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
    },
    {
      name: 'Google Reviews',
      badge: null,
      bg: '#fafaf0',
      svg: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    },
  ];

  scrollToContact(event: Event): void {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
