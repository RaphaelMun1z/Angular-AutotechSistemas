import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-lead-section',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-lead-section.html',
  styleUrl: './contact-lead-section.css',
})
export class ContactLeadSection {
  currentStep = 1;
  progressScale = '0';
  companyWhatsApp = '5511992467155';
  companyEmail = 'autotechsistemas.suporte@gmail.com';

  contactForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L}\s]+$/u)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L}\s]+$/u)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L}\s.-]+$/u)]),
    segmento: new FormControl('', Validators.required),
    mensagem: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
  });

  constructor() {
    this.contactForm.valueChanges.subscribe(() => {
      this.updateStepper();
    });
  }

  updateStepper(): void {
    const { nome, sobrenome, email, telefone, cidade, segmento, mensagem } = this.contactForm.value;

    if (nome && sobrenome && email && telefone && cidade && segmento && mensagem && this.contactForm.valid) {
      this.currentStep = 4;
      this.progressScale = '1';
    } else if (nome && sobrenome && email && telefone && cidade) {
      this.currentStep = 3;
      this.progressScale = '0.66';
    } else if (nome || sobrenome) {
      this.currentStep = 2;
      this.progressScale = '0.33';
    } else {
      this.currentStep = 1;
      this.progressScale = '0';
    }
  }

  onTextOnlyInput(controlName: 'nome' | 'sobrenome' | 'cidade', event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^\p{L}\s.-]/gu, '');
    input.value = value;
    this.contactForm.get(controlName)?.setValue(value, { emitEvent: true });
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 11);
    const masked = this.maskPhone(digits);
    input.value = masked;
    this.contactForm.get('telefone')?.setValue(masked, { emitEvent: true });
  }

  private maskPhone(digits: string): string {
    if (!digits) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.touched || !field.errors) return '';
    if (field.errors['required']) return 'Campo obrigatorio.';
    if (field.errors['email']) return 'E-mail invalido.';
    if (field.errors['minlength']) return 'Preencha com mais detalhes.';
    if (field.errors['maxlength']) return 'Limite maximo de 500 caracteres.';
    if (field.errors['pattern']) {
      if (fieldName === 'telefone') return 'Telefone invalido. Use (11) 99999-9999.';
      return 'Formato invalido.';
    }
    return 'Campo invalido.';
  }

  private focusFirstInvalidField(): void {
    const firstInvalid = document.querySelector(
      '#contact .ng-invalid[formcontrolname]'
    ) as HTMLElement | null;

    firstInvalid?.focus();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { nome, sobrenome, email, telefone, cidade, segmento, mensagem } = this.contactForm.value;

      const text = encodeURIComponent(
        [
          'Ola, Autotech!',
          'Vim pelo site e quero agendar uma consultoria.',
          '',
          `- Nome: ${`${nome ?? ''} ${sobrenome ?? ''}`.trim() || 'Nao informado'}`,
          `- E-mail: ${email || 'Nao informado'}`,
          `- Telefone/WhatsApp: ${telefone || 'Nao informado'}`,
          `- Cidade: ${cidade || 'Nao informado'}`,
          `- Segmento: ${segmento || 'Nao informado'}`,
          `- Mensagem: ${mensagem || 'Nao informado'}`,
          '',
          `- E-mail de suporte: ${this.companyEmail}`,
        ].join('\n')
      );

      window.open(`https://wa.me/${this.companyWhatsApp}?text=${text}`, '_blank');
      this.contactForm.reset();
      this.currentStep = 1;
      this.progressScale = '0';
    } else {
      this.contactForm.markAllAsTouched();
      this.focusFirstInvalidField();
      alert('Por favor, preencha todos os campos obrigatorios.');
    }
  }
}
