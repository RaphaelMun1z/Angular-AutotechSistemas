import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  currentStep: number = 1;
  progressHeight: string = '0%';

  contactForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl(''),
    cidade: new FormControl(''),
    segmento: new FormControl('', Validators.required),
    mensagem: new FormControl(''),
  });

  constructor() {
    this.contactForm.valueChanges.subscribe(() => {
      this.updateStepper();
    });
  }

  updateStepper() {
    const { nome, sobrenome, email, segmento } = this.contactForm.value;

    if (nome && sobrenome && email && segmento) {
      this.currentStep = 4;
      this.progressHeight = '100%';
    } else if (nome && sobrenome && email) {
      this.currentStep = 3;
      this.progressHeight = '66%';
    } else if (nome || sobrenome) {
      this.currentStep = 2;
      this.progressHeight = '33%';
    } else {
      this.currentStep = 1;
      this.progressHeight = '0%';
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Dados enviados:', this.contactForm.value);
      alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato.');
      this.contactForm.reset();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
