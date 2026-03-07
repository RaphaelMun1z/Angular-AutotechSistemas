import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  imports: [],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css',
})
export class BlogSection {
  articles = [
    {
      date: '12 Jan 2025',
      readTime: '5 min de leitura',
      category: 'Gestão',
      title: 'Como reduzir o tempo de OS em 40% com automação',
      excerpt:
        'Descubra as estratégias que as maiores oficinas do Brasil usam para agilizar o processo de abertura e fechamento de ordens de serviço.',
      thumbGradient: 'linear-gradient(135deg, var(--red), #800000)',
      svgPath:
        '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />',
    },
    {
      date: '8 Jan 2025',
      readTime: '8 min de leitura',
      category: 'Tecnologia',
      title: 'Integração Pix: como receber pagamentos instantâneos na sua oficina',
      excerpt:
        'O Pix se tornou o meio de pagamento mais usado no Brasil. Saiba como integrar com seu sistema de gestão e eliminar a inadimplência.',
      thumbGradient: 'linear-gradient(135deg, var(--blue), #0a2e5c)',
      svgPath:
        '<rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />',
    },
    {
      date: '2 Jan 2025',
      readTime: '6 min de leitura',
      category: 'Finanças',
      title: '5 KPIs que toda oficina de sucesso monitora todo dia',
      excerpt:
        'Ticket médio, taxa de retorno, margem por serviço — conheça os indicadores que separam as oficinas lucrativas das que fecham as portas.',
      thumbGradient: 'linear-gradient(135deg, #2a2a30, #1c1c20)',
      svgPath:
        '<line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />',
    },
  ];
}
