import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { Features } from "./components/features-section/features-section";
import { UseCasesSection } from "./components/use-cases-section/use-cases-section";
import { BenefitsSection } from "./components/benefits-section/benefits-section";
import { IntegrationsSection } from "./components/integrations-section/integrations-section";
import { TestimonialsSection } from "./components/testimonials-section/testimonials-section";
import { PricingSection } from "./components/pricing-section/pricing-section";
import { BlogSection } from "./components/blog-section/blog-section";
import { ContactSection } from "./components/contact-section/contact-section";
import { ContactLeadSection } from "./components/contact-lead-section/contact-lead-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, Features, UseCasesSection, BenefitsSection, IntegrationsSection, TestimonialsSection, PricingSection, BlogSection, ContactSection, ContactLeadSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
