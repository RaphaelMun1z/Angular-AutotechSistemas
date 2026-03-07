import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  imports: [],
  templateUrl: './navbar-mobile.html',
  styleUrl: './navbar-mobile.css',
})
export class NavbarMobile {
  @Input() isMenuOpen: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();

  onClose(): void {
    this.closeMenu.emit();
  }

  handleContactClick(): void {
    this.onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  }
}
