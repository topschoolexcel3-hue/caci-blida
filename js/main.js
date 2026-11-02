/* ============================================================
   CCIB – Main JavaScript — main.js
   ============================================================ */

'use strict';

/* ---- Hero Slider ---- */
(function initSlider() {
  const slides  = document.querySelectorAll('.hero__slide');
  const dots    = document.querySelectorAll('.hero__dot');
  const btnPrev = document.getElementById('heroPrev');
  const btnNext = document.getElementById('heroNext');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;

  function goTo(idx) {
    slides[current].classList.remove('hero__slide--active');
    dots[current].classList.remove('hero__dot--active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('hero__slide--active');
    dots[current].classList.add('hero__dot--active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  btnNext && btnNext.addEventListener('click', () => { next(); startAuto(); });
  btnPrev && btnPrev.addEventListener('click', () => { prev(); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));

  startAuto();
})();

/* ---- Sticky Header ---- */
(function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(0,0,0,.15)'
      : '';
  }, { passive: true });
})();

/* ---- Hamburger / Mobile Nav ---- */
(function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    btn.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('is-open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', false);
    }
  });
})();

/* ---- Animated Counters (Stats Bar) ---- */
(function initCounters() {
  const items = document.querySelectorAll('.stat-item[data-count]');
  if (!items.length) return;

  function animateCount(el, target) {
    const numEl = el.querySelector('.stat-item__num');
    if (!numEl) return;
    const duration = 2000;
    const step     = 16;
    const steps    = duration / step;
    const inc      = target / steps;
    let current    = 0;

    const tick = setInterval(() => {
      current += inc;
      if (current >= target) {
        current = target;
        clearInterval(tick);
      }
      numEl.textContent = Math.floor(current).toLocaleString('fr-DZ');
    }, step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target, parseInt(entry.target.dataset.count, 10));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  items.forEach(item => observer.observe(item));
})();

/* ---- Back to Top ---- */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---- Contact Form ---- */
(function initContactForm() {
  const form     = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nom  = data.get('nom')?.trim();
    const mail = data.get('email')?.trim();
    const msg  = data.get('message')?.trim();

    if (!nom || !mail || !msg) {
      showFeedback('Veuillez remplir tous les champs obligatoires.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      showFeedback('Veuillez saisir une adresse email valide.', 'error');
      return;
    }

    // Simulate send
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    setTimeout(() => {
      showFeedback('✅ Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.', 'success');
      form.reset();
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le Message';
    }, 1800);
  });

  function showFeedback(msg, type) {
    feedback.textContent  = msg;
    feedback.className    = 'form-feedback ' + type;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();

/* ---- Newsletter Form ---- */
(function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input?.value.trim()) return;
      const btn = form.querySelector('button');
      btn.innerHTML = '<i class="fas fa-check"></i>';
      btn.style.background = '#C8A84B';
      input.value = '';
      input.placeholder = 'Inscrit(e) avec succès !';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
        btn.style.background = '';
        input.placeholder = 'Votre email...';
      }, 3000);
    });
  });
})();

/* ---- Language switcher (UI only) ---- */
(function initLang() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
})();

/* ---- Scroll Reveal (lightweight) ---- */
(function initReveal() {
  const els = document.querySelectorAll(
    '.service-card, .news-item, .event-card, .stat-item, .qlink-card, .av-stat'
  );
  if (!els.length) return;

  els.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .5s ease ${i * 60}ms, transform .5s ease ${i * 60}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();
