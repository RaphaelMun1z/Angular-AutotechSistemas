import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

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
  originalPrice?: string;
  savingsLabel?: string;
  installments?: string;
  description: string;
  features: PricingFeature[];
  buttonClass: string;
  buttonText: string;
  isPopular: boolean;
  // dados do popup
  modalTitle: string;
  modalSub: string;
  modalBadge: string;
  modalFeatures: ModalFeature[];
  modalUrgency: UrgencyItem[];
}

interface ModalFeature {
  icon: string;
  name: string;
  desc: string;
}

interface UrgencyItem {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-pricing-section',
  imports: [CommonModule],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
})
export class PricingSection {
  @ViewChild('modal') modalRef!: ElementRef;

  isOpen = false;
  activePlan: PricingPlan | null = null;

  constructor(private scroller: ViewportScroller) {}

  pricingPlans: PricingPlan[] = [
    {
      id: 'site',
      icon: 'site',
      title: 'Site & Landing Page',
      pricePrefix: 'a partir de',
      currency: 'R$',
      priceMain: '999',
      priceCents: ',90',
      installments: 'ou 12x de R$ 83,32 no cartão',
      description:
        'Presença digital focada em captação de clientes. Ideal para oficinas que querem ser encontradas no Google e receber orçamentos direto no WhatsApp.',
      features: [
        { text: 'Página única (Landing Page) de alta conversão' },
        { text: 'Botão flutuante para orçamentos via WhatsApp' },
        { text: 'Galeria de serviços (Revisão, Suspensão, etc.)' },
        { text: 'Carregamento ultrarrápido' },
        { text: 'Otimização SEO para buscas locais' },
      ],
      buttonClass: 'outl',
      buttonText: 'Quero atrair mais clientes →',
      isPopular: false,
      modalTitle: 'Site & Landing Page',
      modalSub: 'Uma página construída para uma única missão: transformar quem pesquisa no Google em cliente entrando na sua oficina.',
      modalBadge: '🌐 presença digital · a partir de R$ 999,90',
      modalFeatures: [
        { icon: '🎯', name: 'Layout de alta conversão', desc: 'Design orientado a ação — cada seção guia o visitante até o botão de orçamento. Sem distrações, sem menus desnecessários.' },
        { icon: '💬', name: 'Botão WhatsApp flutuante', desc: 'Sempre visível em qualquer scroll. O cliente clica, abre o WhatsApp com mensagem pré-preenchida e você já sabe o que ele quer.' },
        { icon: '🔍', name: 'SEO local otimizado', desc: 'Código e conteúdo estruturados para aparecer nas buscas "mecânica em [sua cidade]" e no Google Maps.' },
        { icon: '🖼️', name: 'Galeria de serviços', desc: 'Seção visual com os serviços que você oferece — Revisão, Suspensão, Freios, Elétrica — com fotos e descrições.' },
        { icon: '⚡', name: 'Carregamento ultrarrápido', desc: 'Performance otimizada para mobile. Sites lentos perdem clientes: o seu vai abrir em menos de 2 segundos.' },
        { icon: '📍', name: 'Mapa e localização integrados', desc: 'Google Maps embutido com endereço, horário de funcionamento e botão "Como chegar" direto na página.' },
      ],
      modalUrgency: [
        { icon: '📍', title: 'Clientes pesquisam no Google primeiro', desc: 'Mais de 80% das pessoas busca "mecânica perto de mim" antes de escolher uma oficina. Sem site, você não existe para elas.' },
        { icon: '📅', title: 'Vagas limitadas este mês', desc: 'Só aceitamos novos projetos de site para não comprometer a qualidade de entrega. Confirme disponibilidade.' },
        { icon: '🏁', title: 'Entrega em até 10 dias úteis', desc: 'Do briefing à publicação. Você começa a receber orçamentos enquanto a concorrência ainda está sem site.' },
      ],
    },

    {
      id: 'system',
      icon: 'system',
      title: 'Sistema de Gestão',
      pricePrefix: 'a partir de',
      currency: 'R$',
      priceMain: '1.499',
      priceCents: ',90',
      installments: 'ou 12x de R$ 124,99 no cartão',
      description:
        'Software web sob medida para organizar a rotina da oficina. Abandone o papel e tenha controle total sobre orçamentos, veículos e histórico.',
      features: [
        { text: 'Gerador de Ordem de Serviço (OS) em PDF' },
        { text: 'Envio de orçamentos direto para o e-mail do cliente' },
        { text: 'Cadastro de clientes e histórico de placas' },
        { text: 'Painel de status (Na fila, No box, Concluído)' },
        { text: 'Dashboard gerencial com faturamento mensal' },
        { text: 'Acesso na nuvem (PC, tablet ou celular)' },
        { text: 'Banco de dados configurado e seguro' },
      ],
      buttonClass: 'prim',
      buttonText: 'Quero organizar minha oficina →',
      isPopular: true,
      modalTitle: 'Sistema de Gestão',
      modalSub: 'Software sob medida para acabar com o papel, o caderno e a planilha. Controle total da sua oficina de qualquer dispositivo.',
      modalBadge: '⚙️ gestão digital · a partir de R$ 1.499,90',
      modalFeatures: [
        { icon: '📄', name: 'Gerador de OS em PDF', desc: 'Crie e imprima Ordens de Serviço profissionais em segundos. Com logo da sua oficina, assinatura do cliente e número sequencial.' },
        { icon: '📧', name: 'Orçamentos por e-mail', desc: 'Monte o orçamento no sistema e envie direto para o cliente em um clique. Ele recebe um PDF formatado no e-mail dele.' },
        { icon: '🚘', name: 'Histórico por placa', desc: 'Cadastre veículos e acesse todo o histórico de serviços de qualquer carro — na hora que o cliente ligar, você já tem a informação.' },
        { icon: '🟡', name: 'Painel de status em tempo real', desc: 'Visualize todos os carros na oficina: Na fila, No box, Aguardando peça, Concluído. Sem precisar perguntar para o mecânico.' },
        { icon: '📊', name: 'Dashboard de faturamento', desc: 'Veja quanto a oficina faturou no dia, semana e mês. Identifique os serviços mais lucrativos sem precisar de planilha.' },
        { icon: '☁️', name: 'Acesso em qualquer dispositivo', desc: 'PC do escritório, tablet do balcão ou celular do dono. O sistema funciona no navegador — sem instalar nada.' },
        { icon: '🔒', name: 'Banco de dados seguro', desc: 'Dados armazenados em servidor dedicado com backup automático diário. Nenhuma informação é perdida.' },
      ],
      modalUrgency: [
        { icon: '📋', title: 'Cada OS perdida é dinheiro perdido', desc: 'Serviços não registrados, orçamentos esquecidos e histórico inacessível custam mais do que o sistema inteiro em um mês.' },
        { icon: '📅', title: 'Implantação em até 7 dias', desc: 'Configuramos o sistema, importamos seus dados e treinamos sua equipe. Em uma semana você já está operando.' },
        { icon: '🤝', title: 'Sistema é seu, para sempre', desc: 'Pagamento único. Não é SaaS, não tem mensalidade. O sistema é desenvolvido e entregue para você.' },
      ],
    },

    {
      id: 'combo',
      icon: 'combo',
      title: 'Combo Completo',
      pricePrefix: 'a partir de',
      currency: 'R$',
      priceMain: '1.999',
      priceCents: ',90',
      originalPrice: 'R$ 2.498,80',
      savingsLabel: 'Você economiza R$ 498,90',
      installments: 'ou 12x de R$ 166,66 no cartão',
      description:
        'A transformação digital definitiva. Capte clientes pela internet e gerencie toda a operação da sua oficina em um único ecossistema.',
      features: [
        { text: 'Tudo do Site & Landing Page', isBold: true },
        { text: 'Tudo do Sistema de Gestão', isBold: true },
        { text: 'Área do cliente (acompanhamento de status)' },
        { text: 'Lembretes automáticos (ex: próxima troca de óleo)' },
        { text: 'Configuração de Domínio e Hospedagem' },
        { text: 'Treinamento remoto para os mecânicos/balcão' },
        { text: 'Suporte técnico e garantia de 30 dias' },
      ],
      buttonClass: 'gold',
      buttonText: 'Quero a solução completa →',
      isPopular: false,
      modalTitle: 'Combo Completo',
      modalSub: 'Site que capta + sistema que organiza. Os dois funcionando juntos como um ecossistema digital completo para sua oficina.',
      modalBadge: '✦ solução completa · pagamento único · sem mensalidade',
      modalFeatures: [
        { icon: '🌐', name: 'Landing Page de alta conversão', desc: 'Design profissional focado em transformar visitas em orçamentos via WhatsApp. SEO local para aparecer no Google da sua cidade.' },
        { icon: '⚙️', name: 'Sistema de Gestão completo', desc: 'OS em PDF, envio de orçamentos por e-mail, painel de status por veículo e dashboard com faturamento mensal.' },
        { icon: '👤', name: 'Área do cliente', desc: 'Seu cliente acompanha o status do carro em tempo real pelo celular — sem precisar ligar para a oficina.' },
        { icon: '🔔', name: 'Lembretes automáticos', desc: 'O sistema avisa o cliente quando a próxima revisão ou troca de óleo está chegando. Fidelização no piloto automático.' },
        { icon: '🌍', name: 'Domínio + Hospedagem', desc: 'Configuramos tudo do zero: domínio personalizado (ex: oficinaxyz.com.br) e hospedagem inclusa no primeiro ano.' },
        { icon: '🎓', name: 'Treinamento remoto', desc: 'Sessão ao vivo para o balcão aprender a usar o sistema com segurança. Gravada e disponível para consulta.' },
        { icon: '🛡️', name: 'Suporte e garantia 30 dias', desc: 'Se algo não funcionar como acordado no primeiro mês, corrigimos sem custo. Investimento protegido.' },
        { icon: '☁️', name: 'Acesso em qualquer dispositivo', desc: 'Funciona em qualquer dispositivo com internet — PC do escritório, tablet do balcão ou celular do dono.' },
      ],
      modalUrgency: [
        { icon: '📅', title: 'Só 3 vagas por mês', desc: 'Para manter a qualidade, limitamos o número de novos projetos. Vagas do mês atual podem fechar a qualquer momento.' },
        { icon: '📈', title: 'Sua concorrência já está online', desc: 'Oficinas com site aparecem antes no Google Maps. Cada mês sem presença digital é receita que vai para o concorrente.' },
        { icon: '💰', title: 'Preço travado agora', desc: 'O valor atual é promocional para novos clientes da região. Não garantimos manutenção deste preço nas próximas semanas.' },
        { icon: '🤝', title: 'Sem mensalidade, nunca', desc: 'Pagamento único. Sem contratos mensais, sem surpresas. O sistema é seu para sempre.' },
      ],
    },
  ];

  onCardClick(plan: PricingPlan, event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.pbtn')) return;
    this.activePlan = plan;
    this.openModal();
  }

  openModal(): void {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isOpen = false;
    document.body.style.overflow = '';
    setTimeout(() => (this.activePlan = null), 300);
  }

  close(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('combo-overlay')) {
      this.closeModal();
    }
  }

  goToContact(): void {
    this.closeModal();
    setTimeout(() => this.scroller.scrollToAnchor('contact'), 150);
  }

  scrollToContact(): void {
    this.scroller.scrollToAnchor('contact');
  }
}