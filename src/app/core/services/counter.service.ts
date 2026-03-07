import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  /**
   * Anima um número de 0 até o valor final
   * @param from Valor inicial
   * @param to Valor final
   * @param duration Duração em ms
   * @param onCount Callback chamado a cada frame com o valor atual
   */
  countTo(
    from: number,
    to: number,
    duration: number = 2000,
    onCount: (value: number) => void,
  ): void {
    const startTime = performance.now();
    const difference = to - from;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: ease-out-quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      const currentValue = Math.floor(from + difference * easedProgress);
      onCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * Anima um valor até a meta com suporte a porcentagem
   */
  countToPercentage(to: number, duration: number = 2000, onCount: (value: number) => void): void {
    this.countTo(0, to, duration, onCount);
  }
}
