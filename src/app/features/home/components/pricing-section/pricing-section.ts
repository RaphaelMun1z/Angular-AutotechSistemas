import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PricingFeature {
  text: string;
  isBold?: boolean;
}

interface PricingPlan {
  id: string;
  icon: 'site' | 'system' | 'combo';
  title: string;
  pricePrefix: string;
  currency: string;
  priceMain: string;
  priceCents: string;
  description: string;
  features: PricingFeature[];
  buttonClass: string;
  buttonText: string;
  isPopular: boolean;
}

@Component({
  selector: 'app-pricing-section',
  imports: [CommonModule],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
})
export class PricingSection {
  pricingPlans: PricingPlan[] = [
    {
      id: 'site',
      icon: 'site',
      title: 'Site & Landing Page',
      pricePrefix: 'a partir de',
      currency: 'R$',
      priceMain: '999',
      priceCents: ',90',
      description: 'Presença digital focada em captação de clientes. Ideal para oficinas que querem ser encontradas no Google e receber orçamentos direto no WhatsApp.',
      features: [
        { text: 'Página única (Landing Page) de alta conversão' },
        { text: 'Botão flutuante para orçamentos via WhatsApp' },
        { text: 'Integração com Google Meu Negócio e Maps' },
        { text: 'Galeria de serviços (Revisão, Suspensão, etc.)' },
        { text: 'Carregamento ultrarrápido (Mobile-first)' },
        { text: 'Otimização SEO para buscas locais' }
      ],
      buttonClass: 'outl',
      buttonText: 'Quero atrair mais clientes →',
      isPopular: false
    },
    {
      id: 'system',
      icon: 'system',
      title: 'Sistema de Gestão',
      pricePrefix: 'a partir de',
      currency: 'R$',
      priceMain: '1.499',
      priceCents: ',90',
      description: 'Software web sob medida para organizar a rotina da oficina. Abandone o papel e tenha controle total sobre orçamentos, veículos e histórico.',
      features: [
        { text: 'Gerador de Ordem de Serviço (OS) em PDF' },
        { text: 'Envio de orçamentos direto para o WhatsApp' },
        { text: 'Cadastro de clientes e histórico de placas' },
        { text: 'Painel de status (Na fila, No box, Concluído)' },
        { text: 'Dashboard gerencial com faturamento mensal' },
        { text: 'Acesso na nuvem (PC, tablet ou celular)' },
        { text: 'Banco de dados configurado e seguro' }
      ],
      buttonClass: 'prim',
      buttonText: 'Quero organizar minha oficina →',
      isPopular: true
    },
    {
      id: 'combo',
      icon: 'combo',
      title: 'Combo Completo',
      pricePrefix: 'pagamento único',
      currency: 'R$',
      priceMain: '1.999',
      priceCents: ',90',
      description: 'A transformação digital definitiva. Capte clientes pela internet e gerencie toda a operação da sua oficina em um único ecossistema.',
      features: [
        { text: 'Tudo do Site & Landing Page', isBold: true },
        { text: 'Tudo do Sistema de Gestão', isBold: true },
        { text: 'Área do cliente (acompanhamento de status)' },
        { text: 'Lembretes automáticos (ex: próxima troca de óleo)' },
        { text: 'Configuração de Domínio e Hospedagem' },
        { text: 'Treinamento remoto para os mecânicos/balcão' },
        { text: 'Suporte técnico e garantia de 30 dias' }
      ],
      buttonClass: 'gold',
      buttonText: 'Quero a solução completa →',
      isPopular: false
    }
  ];

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
