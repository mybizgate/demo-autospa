(function () {
  'use strict';

  const root = document.documentElement;
  const config = {
    brand: root.dataset.brand || 'Auto Gate Car Saloon',
    whatsapp: (root.dataset.whatsapp || '601158121239').replace(/\D/g, ''),
    storageKey: 'mybizgate_autogate_' + (root.dataset.theme || 'demo')
  };

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const form = document.querySelector('[data-booking-form]');
  const service = document.querySelector('[data-service]');
  const date = document.querySelector('[data-date]');
  const status = document.querySelector('[data-form-status]');
  const year = document.querySelector('[data-year]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const whatsappUrl = (text) => 'https://wa.me/' + config.whatsapp + '?text=' + encodeURIComponent(text);

  if (year) year.textContent = String(new Date().getFullYear());

  if (date) {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    date.min = local.toISOString().slice(0, 10);
  }

  // Direct WhatsApp links (hero button, contact list) share one configurable number.
  document.querySelectorAll('[data-wa-link]').forEach((link) => {
    link.href = whatsappUrl('Hello ' + config.brand + ', I would like to ask about detailing for my car.');
    if (link.hasAttribute('data-wa-display')) {
      link.textContent = '+' + config.whatsapp.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '$1 $2-$3 $4');
    }
  });

  // Mobile navigation
  if (toggle && menu) {
    const setMenu = (open) => {
      menu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
      if (event.matches) setMenu(false);
    });
  }

  // Service and package buttons pre-fill the booking form.
  document.querySelectorAll('[data-select-service]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (!service) return;
      service.value = button.dataset.selectService || '';
      const booking = document.querySelector('#booking');
      if (booking) booking.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      service.focus({ preventScroll: true });
    });
  });

  // Booking form: build the WhatsApp enquiry, keep a local copy, open WhatsApp.
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = Object.fromEntries(new FormData(form).entries());
      const message = [
        config.brand + ' · appointment enquiry',
        'Name: ' + data.name,
        'Phone: ' + data.phone,
        'Vehicle: ' + data.vehicle,
        'Service: ' + data.service,
        'Preferred date: ' + data.date,
        'Preferred time: ' + data.time,
        'Notes: ' + (data.notes || '-')
      ].join('\n');

      try {
        localStorage.setItem(config.storageKey, JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
      } catch (error) {
        // Private browsing may block storage; the enquiry still works.
      }

      const url = whatsappUrl(message);
      const backup = document.querySelector('[data-wa-backup]');
      if (backup) {
        backup.href = url;
        backup.hidden = false;
      }
      // window.open returns null with noopener, so the status is set once and covers both cases.
      if (status) status.textContent = 'Your enquiry is ready. If WhatsApp did not open, tap the link below.';
      window.open(url, '_blank', 'noopener');
    });
  }
})();
