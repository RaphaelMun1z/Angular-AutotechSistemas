import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    // AOS (Animate On Scroll) initialization
    setTimeout(() => {
      if (typeof (window as any).AOS !== 'undefined') {
        (window as any).AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          offset: 150,
          once: true,
          disable: false,
          mirror: false,
        });
      }
    }, 100);
  })
  .catch((err) => console.error(err));
