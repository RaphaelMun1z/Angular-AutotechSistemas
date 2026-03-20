import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface StatCard {
  category: string;
  iconSvg: SafeHtml;
  number: string;
  label: string;
  description: string;
  tags: string[];
  source: string;
  sourceUrl: string;
}

@Component({
  selector: 'app-testimonials-section',
  imports: [CommonModule],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection {
  stats: StatCard[];

  constructor(private sanitizer: DomSanitizer) {
    const raw = [
      {
        category: 'Digitalização',
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:.85em;height:.85em;vertical-align:-.1em;margin-right:.3em"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        number: '72,3%',
        label: 'das compras de peças já são feitas por canais digitais',
        description: '"O levantamento apontou que 72,3% das aquisições de peças são feitas por canais digitais como WhatsApp ou telefone, enquanto apenas 7% acontecem diretamente no balcão — evidenciando a transformação digital já em curso no dia a dia das oficinas."',
        tags: ['Compras Digitais', 'WhatsApp', 'Fornecedores'],
        source: 'Pesquisa Oficina Brasil, 2024 — via SINDIREPA',
        sourceUrl: 'https://sindirepago.com.br/escassez-de-mao-de-obra-ja-afeta-1-em-cada-3-oficinas-mecanicas-no-brasil-aponta-estudo/',
      },
      {
        category: 'Porte do Mercado',
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:.85em;height:.85em;vertical-align:-.1em;margin-right:.3em"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
        number: '121.317',
        label: 'empresas de reparação automotiva ativas no Brasil',
        description: '"Há 121.317 empresas de reparação automotiva legalmente estabelecidas no país. Desse total, 76.429 são dedicadas à reparação mecânica — um mercado que realiza mais de 76 milhões de atendimentos por ano e ainda opera em sua maioria de forma manual."',
        tags: ['Mercado', 'Reparação Mecânica', 'Oportunidade'],
        source: 'SINDIREPA Nacional / CINAU — Jornal Oficina Brasil',
        sourceUrl: 'https://oficinabrasil.com.br/noticia/mercado-cinau/dimensoes-do-mercado-de-reposicao-quem-somos-onde-estamos-e-quanto-representamos',
      },
      {
        category: 'Faturamento',
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:.85em;height:.85em;vertical-align:-.1em;margin-right:.3em"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        number: 'R$ 550',
        label: 'é o ticket médio por serviço nas oficinas brasileiras',
        description: '"O setor movimenta mensalmente cerca de R$ 67,6 mil em peças por oficina, com ticket médio de R$ 550 por serviço. Cada OS perdida por falha de gestão ou orçamento não aprovado representa impacto direto e mensurável no faturamento."',
        tags: ['Ticket Médio', 'Gestão Financeira', 'OS'],
        source: 'Pesquisa Oficina Brasil, 2024 — via AutoPapo',
        sourceUrl: 'https://autopapo.com.br/noticia/falta-mao-de-obra-oficinas-mecanicas/',
      },
    ];

    this.stats = raw.map(item => ({
      ...item,
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(item.iconSvg),
    }));
  }
}