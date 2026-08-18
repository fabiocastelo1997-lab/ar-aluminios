// AR Alumínios — comportamento do site

document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }

  // Separadores (tabs) — Produtos / Portfólio
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var buttons = group.querySelectorAll('.tab-btn');
    var panels = document.querySelectorAll('[data-tab-panel-group="' + group.dataset.tabs + '"]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        var target = document.querySelector('[data-tab-panel="' + btn.dataset.tab + '"]');
        if (target) target.classList.add('active');
      });
    });
  });

  // Lightbox da galeria
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('.lb-caption');
    var closeBtn = lightbox.querySelector('.close-lb');

    document.querySelectorAll('[data-lightbox]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        lbImg.src = link.getAttribute('href');
        lbCaption.textContent = link.dataset.caption || '';
        lightbox.classList.add('open');
      });
    });

    function closeLightbox() { lightbox.classList.remove('open'); lbImg.src = ''; }
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  // Envio de formulários (FormSubmit — sem servidor próprio)
  document.querySelectorAll('form[data-ajax-form]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'A enviar…'; }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            status.textContent = 'Pedido enviado com sucesso. Entraremos em contacto brevemente.';
            status.className = 'form-status ok';
            form.reset();
          } else {
            throw new Error('Falha no envio');
          }
        })
        .catch(function () {
          status.textContent = 'Não foi possível enviar agora. Ligue-nos ou contacte-nos por WhatsApp.';
          status.className = 'form-status err';
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.label || 'Enviar'; }
        });
    });
  });
});
