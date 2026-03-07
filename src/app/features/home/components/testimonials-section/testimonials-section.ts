import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection {
  activeIndex: number = 1;

  testimonials = [
    {
      segment: 'Oficina Mecânica',
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop',
      name: 'Ana Costa',
      role: 'Gerente de Operações, AutoServ',
      rating: '5.0',
      quote:
        '"O controle de Ordens de Serviço manuais era um pesadelo. A automação da Autotech nos poupou horas preciosas toda semana. Reduzimos erros em 80%."',
      tags: ['Gestão de OS', 'Economia de Tempo'],
    },
    {
      segment: 'Concessionária',
      avatarUrl:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=80&auto=format&fit=crop',
      name: 'Carlos Mendes',
      role: 'Diretor Comercial, AutoPremium',
      rating: '5.0',
      quote:
        '"Este sistema transformou completamente a estratégia comercial da nossa rede. Fechamos orçamentos 40% mais rápido com a aprovação digital."',
      tags: ['Aprovação Digital', 'Vendas', 'Estoque'],
    },
    {
      segment: 'Lojas de Autopeças',
      avatarUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&auto=format&fit=crop',
      name: 'Mariana Silva',
      role: 'CEO, MasterPeças',
      rating: '4.9',
      quote:
        '"A dor de cabeça com tabelas de peças acabou. Conseguimos gerenciar múltiplos catálogos e fornecedores em tempo real, com estoque sempre atualizado."',
      tags: ['Tabelas', 'Integrações'],
    },
  ];

  avatars = [
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=80&auto=format&fit=crop',
    this.testimonials[0].avatarUrl,
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop',
    this.testimonials[1].avatarUrl,
    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=80&auto=format&fit=crop',
    this.testimonials[2].avatarUrl,
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=80&auto=format&fit=crop',
  ];

  setTesti(index: number) {
    if (index === 1) this.activeIndex = 0;
    if (index === 3) this.activeIndex = 1;
    if (index === 5) this.activeIndex = 2;
  }

  prevTesti() {
    this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : this.testimonials.length - 1;
  }

  nextTesti() {
    this.activeIndex = this.activeIndex < this.testimonials.length - 1 ? this.activeIndex + 1 : 0;
  }
}
