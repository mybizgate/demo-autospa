(function () {
  'use strict';

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const form = document.querySelector('[data-booking-form]');
  const service = document.querySelector('[data-service]');
  const date = document.querySelector('[data-date]');
  const status = document.querySelector('[data-form-status]');
  const year = document.querySelector('[data-year]');
  const backup = document.querySelector('[data-wa-backup]');
  const desktopMenu = window.matchMedia('(min-width: 960px)');
  const config = {
    brand: document.documentElement.dataset.brand || 'Auto Gate Car Saloon',
    whatsapp: '601158121239',
    storageKey: 'mybizgate_autogate_' + (document.documentElement.dataset.theme || 'demo')
  };

  if (year) year.textContent = String(new Date().getFullYear());

  if (date) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
    date.min = localToday.toISOString().slice(0, 10);
  }

  if (toggle && menu) {
    const setMenu = (open, returnFocus) => {
      const shouldOpen = open && !desktopMenu.matches;
      menu.classList.toggle('open', shouldOpen);
      document.body.classList.toggle('menu-open', shouldOpen);
      toggle.setAttribute('aria-expanded', String(shouldOpen));
      toggle.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
      if (shouldOpen) menu.querySelector('a')?.focus();
      else if (returnFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open'), false));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false, false);
    });
    document.addEventListener('click', (event) => {
      if (menu.classList.contains('open') && !menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false, false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('open')) setMenu(false, true);
    });
    desktopMenu.addEventListener('change', () => setMenu(false, false));
  }

  document.querySelectorAll('[data-select-service]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (!service) return;
      service.value = button.dataset.selectService || '';
      document.querySelector('#booking')?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
      service.focus({ preventScroll: true });
    });
  });

  form?.addEventListener('invalid', () => {
    form.classList.add('was-validated');
    if (status) status.textContent = 'Please complete the required fields before preparing your enquiry.';
  }, true);

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

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
      // Browsers with restricted storage can still continue to WhatsApp.
    }

    const url = 'https://wa.me/' + config.whatsapp + '?text=' + encodeURIComponent(message);
    if (backup) {
      backup.href = url;
      backup.hidden = false;
    }
    const opened = window.open(url, '_blank', 'noopener');
    if (status) {
      status.textContent = opened
        ? 'WhatsApp opened with your enquiry. Your appointment is confirmed only after Auto Gate replies.'
        : 'Your enquiry is ready. Use the WhatsApp link below; your appointment is confirmed only after Auto Gate replies.';
    }
  });
})();
