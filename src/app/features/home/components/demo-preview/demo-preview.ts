import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, AfterViewInit, SimpleChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo-preview',
  imports: [CommonModule],
  templateUrl: './demo-preview.html',
  styleUrl: './demo-preview.css',
})
export class DemoPreview implements AfterViewInit, OnChanges, OnDestroy {
  @Input() activeTab: string = 'oficina';

  private timers: any[] = [];
  private el: HTMLElement;

  constructor(private elRef: ElementRef) { this.el = elRef.nativeElement; }

  ngAfterViewInit(): void { this.delay(600, () => this.runTab(this.activeTab)); }

  ngOnChanges(c: SimpleChanges): void {
    if (c['activeTab'] && !c['activeTab'].firstChange) {
      this.clearAll();
      this.delay(500, () => this.runTab(this.activeTab));
    }
  }

  ngOnDestroy(): void { this.clearAll(); }

  private runTab(tab: string): void {
    if (tab === 'oficina')        this.runOficina();
    if (tab === 'concessionaria') this.runConcessionaria();
    if (tab === 'autopecas')      this.runAutopecas();
    if (tab === 'estetica')       this.runEstetica();
  }

  // ── OFICINA ────────────────────────────────────────
  private runOficina(): void {
    this.animCount('#kpiOs',   12, 1000);
    this.animCount('#kpiDone',  8,  900);
    this.animCount('#kpiLate',  3,  700);
    this.animMoney('#kpiFat',  9400, 1500, 'R$ ', 'k');
    this.animMoney('#sbFat',   9400, 1500, 'R$ ', 'k');

    this.delay(400, () => this.growBars());
    this.delay(650, () => this.growMecBars());

    this.startTimer('timer1', '2:14:03');
    this.startTimer('timer2', '3:51:20', true);

    // WPP cycle: digitando → enviado → aprovado
    this.delay(2500, () => { this.setText('#wppStatus', '✓ enviado'); this.swapCls('#wppStatus', 'dp-wpp-typing', 'dp-wpp-sent'); });
    this.delay(5000, () => { this.setText('#wppStatus', '🎉 Aprovado!'); this.swapCls('#wppStatus', 'dp-wpp-sent', 'dp-wpp-approved'); });

    // New OS row
    this.delay(6200, () => {
      const row = this.q('#newOsRow');
      const toast = this.q('#newOsToast');
      if (row)  { row.style.display = 'table-row'; row.classList.add('anim-row'); }
      if (toast){ toast.style.display = 'flex'; toast.classList.add('anim-toast'); }
      this.startTimer('timer3', '0:00:01');
    });

    this.delay(10000, () => this.runTab('oficina'));
  }

  // ── CONCESSIONÁRIA ─────────────────────────────────
  private runConcessionaria(): void {
    this.animCount('#kpiNew',  14, 900);
    this.animCount('#kpiSemi', 10, 800);
    this.animCount('#kpiRes',   3, 600);

    this.delay(1000, () => this.typeText('#searchConc', 'BMW 320i...', 70));

    // Filter → Novos
    this.delay(2800, () => {
      this.flash('#fNew');
      this.setText('#filterStatus', 'Somente Novos');
      this.qAll('[data-type="semi"]').forEach(r => { r.style.opacity = '.18'; r.style.transition = 'opacity .3s'; });
      this.q('#fAll')?.classList.replace('b-orange', 'b-gray');
      this.q('#fNew')?.classList.replace('b-gray', 'b-orange');
    });

    // Filter → Todos
    this.delay(4800, () => {
      this.flash('#fAll');
      this.setText('#filterStatus', 'Todos os veículos');
      this.qAll('[data-type="semi"]').forEach(r => { r.style.opacity = '1'; });
      this.q('#fNew')?.classList.replace('b-orange', 'b-gray');
      this.q('#fAll')?.classList.replace('b-gray', 'b-orange');
    });

    // Reserve car 1
    this.delay(6200, () => {
      this.flash('#btnRes1');
      this.delay(400, () => {
        const s = this.q('#statusCar1'); if (s) { s.textContent = 'Reservado'; s.className = 'dp-badge b-gray'; }
        const b = this.q('#btnRes1'); if (b) { b.textContent = 'Indisponível'; b.className = 'dp-badge b-gray'; }
        this.q('#carRow1')?.classList.add('tr-selected');
      });
    });

    // Release
    this.delay(8400, () => {
      const s = this.q('#statusCar1'); if (s) { s.textContent = 'Disponível'; s.className = 'dp-badge b-green'; }
      const b = this.q('#btnRes1'); if (b) { b.textContent = 'Reservar'; b.className = 'dp-badge b-orange'; b.style.cursor = 'pointer'; }
      this.q('#carRow1')?.classList.remove('tr-selected');
    });

    this.delay(11000, () => this.runTab('concessionaria'));
  }

  // ── AUTOPEÇAS ──────────────────────────────────────
  private runAutopecas(): void {
    this.animMoney('#totalValOrc', 1240, 1400, 'R$ ');

    // Progress fill → 40%
    this.delay(800, () => { const f = this.q('#orcFill'); if (f) f.style.width = '40%'; });

    // Channel switch
    this.delay(1800, () => {
      this.q('#chanWpp')?.classList.remove('on');
      this.q('#chanEmail')?.classList.add('on', 'flash');
      this.delay(300, () => this.q('#chanEmail')?.classList.remove('flash'));
    });
    this.delay(3100, () => {
      this.q('#chanEmail')?.classList.remove('on');
      this.q('#chanWpp')?.classList.add('on', 'flash');
      this.delay(300, () => this.q('#chanWpp')?.classList.remove('flash'));
    });

    // Send
    this.delay(4400, () => {
      const btn = this.q('#sendBtn');
      if (btn) { btn.classList.add('sending'); btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><polyline points="20 6 9 17 4 12"/></svg> Enviando...'; }
      this.delay(1000, () => {
        if (btn) btn.style.display = 'none';
        const conf = this.q('#sentConfirm'); if (conf) { conf.style.display = 'flex'; conf.classList.add('anim-sent'); }
        const badge = this.q('#orcStatus'); if (badge) { badge.textContent = 'Enviado ✓'; badge.className = 'dp-badge b-green'; }
        const inline = this.q('#orcStatusInline'); if (inline) inline.textContent = 'Aguard. resposta';
      });
    });

    // Progress → 60%, dot3 active
    this.delay(6000, () => {
      const f = this.q('#orcFill'); if (f) f.style.width = '60%';
      const d3 = this.q('#dot3'); if (d3) { d3.classList.add('active', 'dot-pulse'); }
    });

    // Approved
    this.delay(7800, () => {
      const f = this.q('#orcFill'); if (f) f.style.width = '80%';
      const d3 = this.q('#dot3'); if (d3) { d3.classList.add('done'); d3.classList.remove('active', 'dot-pulse'); }
      const ap = this.q('#approvalBox'); if (ap) { ap.style.display = 'block'; }
      const badge = this.q('#orcStatus'); if (badge) { badge.textContent = '🎉 Aprovado!'; badge.className = 'dp-badge b-green'; }
      const inline = this.q('#orcStatusInline'); if (inline) { inline.textContent = 'Aprovado!'; inline.className = 'dp-badge b-green'; }
    });

    // Reset
    this.delay(11000, () => {
      const btn = this.q('#sendBtn');
      if (btn) { btn.style.display = 'flex'; btn.classList.remove('sending'); btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Enviar orçamento'; }
      const conf = this.q('#sentConfirm'); if (conf) conf.style.display = 'none';
      const ap   = this.q('#approvalBox'); if (ap)   ap.style.display = 'none';
      const fill = this.q('#orcFill'); if (fill) fill.style.width = '0%';
      const badge  = this.q('#orcStatus');       if (badge)  { badge.textContent = 'Aguardando aprovação'; badge.className = 'dp-badge b-orange'; }
      const inline = this.q('#orcStatusInline'); if (inline) { inline.textContent = 'Enviando...'; inline.className = 'dp-badge b-blue'; }
      this.q('#chanEmail')?.classList.remove('on');
      this.q('#chanWpp')?.classList.add('on');
      const d3 = this.q('#dot3'); if (d3) d3.classList.remove('done', 'active', 'dot-pulse');
      const tv = this.q('#totalValOrc'); if (tv) tv.textContent = 'R$ 0';
      this.runTab('autopecas');
    });
  }

  // ── ESTÉTICA ───────────────────────────────────────
  private runEstetica(): void {
    this.animCount('#kpiOsEst', 284, 1400);
    this.animMoney('#kpiFatEst', 94000, 1500, 'R$ ', 'k');
    this.animPct('#kpiSat', 97, 1200);
    this.animPct('#kpiRet', 72, 1000);

    // Bars staggered
    this.delay(400, () => {
      this.qAll('.dp-svc-bar').forEach((bar, i) => {
        const w = bar.style.getPropertyValue('--w') || '0%';
        this.delay(i * 160, () => { bar.style.width = w; });
      });
    });

    // Fidelidade
    this.delay(1100, () => { const b = this.q('#fidelBar'); if (b) b.style.width = '72%'; });

    // Slot highlight cycle
    this.delay(2000, () => this.cycleSlots());

    // New booking
    this.delay(4800, () => { const bk = this.q('#newBooking'); if (bk) bk.style.display = 'flex'; });

    this.delay(9500, () => {
      const bk = this.q('#newBooking'); if (bk) bk.style.display = 'none';
      this.qAll('.dp-svc-bar').forEach(b => { b.style.width = '0'; });
      const fb = this.q('#fidelBar'); if (fb) fb.style.width = '0';
      this.runTab('estetica');
    });
  }

  private cycleSlots(): void {
    const slots = this.qAll('.dp-slot');
    let i = 0;
    const cycle = () => {
      slots.forEach(s => s.classList.remove('highlight'));
      if (slots[i]) slots[i].classList.add('highlight');
      i = (i + 1) % slots.length;
    };
    cycle();
    const t = setInterval(() => { if (!this.timers.includes(t)) return; cycle(); }, 650);
    this.timers.push(t);
  }

  // ── Helpers ────────────────────────────────────────
  private growBars(): void {
    this.qAll('.dp-bar-el[data-h]').forEach(b => { b.style.height = `${b.getAttribute('data-h')}%`; });
  }

  private growMecBars(): void {
    this.qAll('.dp-mec-bar').forEach(b => { b.style.width = b.style.getPropertyValue('--w') || '0%'; });
  }

  private animCount(sel: string, target: number, dur: number): void {
    const el = this.q(sel); if (!el) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(p * target).toString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  private animPct(sel: string, target: number, dur: number): void {
    const el = this.q(sel); if (!el) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = `${Math.round(p * target)}%`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  private animMoney(sel: string, target: number, dur: number, prefix = '', suffix = ''): void {
    const el = this.q(sel); if (!el) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const v = Math.round(p * target);
      el.textContent = suffix === 'k'
        ? `${prefix}${(v / 1000).toFixed(v >= 1000 ? 1 : 0)}k`
        : `${prefix}${v.toLocaleString('pt-BR')}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  private startTimer(id: string, start: string, _red = false): void {
    const el = this.q(`#${id}`); if (!el) return;
    const parts = start.split(':').map(Number);
    let [h, m, s] = parts;
    const t = setInterval(() => {
      if (!this.timers.includes(t)) return;
      s++; if (s >= 60) { s = 0; m++; } if (m >= 60) { m = 0; h++; }
      el.textContent = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
    this.timers.push(t);
  }

  private typeText(sel: string, text: string, speed: number): void {
    const el = this.q(sel); if (!el) return;
    el.textContent = ''; let i = 0;
    const type = () => { if (i < text.length) { el.textContent += text[i++]; this.delay(speed, type); } };
    type();
  }

  private flash(sel: string): void {
    const el = this.q(sel); if (!el) return;
    el.style.transform = 'scale(.9)'; el.style.transition = 'transform .12s';
    this.delay(140, () => { if (el) { el.style.transform = ''; } });
  }

  private swapCls(sel: string, remove: string, add: string): void {
    const el = this.q(sel); if (!el) return;
    el.classList.remove(remove); el.classList.add(add);
  }

  private setText(sel: string, text: string): void {
    const el = this.q(sel); if (el) el.textContent = text;
  }

  private delay(ms: number, fn: () => void): void {
    const t = setTimeout(fn, ms); this.timers.push(t);
  }

  private q(sel: string): HTMLElement | null {
    return this.el.querySelector<HTMLElement>(sel);
  }

  private qAll(sel: string): HTMLElement[] {
    return Array.from(this.el.querySelectorAll<HTMLElement>(sel));
  }

  private clearAll(): void {
    this.timers.forEach(t => { clearTimeout(t); clearInterval(t); });
    this.timers = [];
  }
}