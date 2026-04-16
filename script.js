'use strict';

/* ============================================================
   UTILITY HELPERS — reuse these anywhere you need them
   ============================================================ */

/** Toggle a class on an element */
const toggleClass = (el, cls) => el.classList.toggle(cls);

/** Add class */
const addClass = (el, cls) => el.classList.add(cls);

/** Remove class */
const removeClass = (el, cls) => el.classList.remove(cls);

/** Query one element */
const $ = (sel, parent = document) => parent.querySelector(sel);

/** Query all elements */
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];


/* ============================================================
   SIDEBAR TOGGLE
   ============================================================ */
const initSidebar = () => {
  const sidebar = $('[data-sidebar]');
  const btn     = $('[data-sidebar-btn]');
  if (!sidebar || !btn) return;
  btn.addEventListener('click', () => toggleClass(sidebar, 'active'));
};


/* ============================================================
   TYPING EFFECT  — easy to reuse: typingEffect(el, texts, speed)
   ============================================================ */
const typingEffect = (el, texts, speed = 80, pause = 1800) => {
  let textIndex = 0;
  let charIndex = 0;
  let deleting  = false;

  const tick = () => {
    const current = texts[textIndex];
    el.textContent = deleting
      ? current.slice(0, charIndex--)
      : current.slice(0, charIndex++);

    let delay = deleting ? speed / 2 : speed;

    if (!deleting && charIndex > current.length) {
      delay = pause;
      deleting = true;
    } else if (deleting && charIndex < 0) {
      deleting = false;
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(tick, delay);
  };

  tick();
};

const initTyping = () => {
  const el = document.getElementById('typing-title');
  if (!el) return;
  typingEffect(el, [
    'Full Stack Developer',
    'React & Node.js Engineer',
    'System Design',
    'API & Database Architect',
  ], 70, 2000);
};


/* ============================================================
   SCROLL REVEAL  — reusable: just add class="reveal" to any element
   ============================================================ */
const initScrollReveal = () => {
  const targets = $$('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addClass(entry.target, 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
};


/* ============================================================
   ANIMATED SKILL BARS  — triggered when skills section enters view
   ============================================================ */
const initSkillBars = () => {
  const skillItems = $$('.skills-item');
  if (!skillItems.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger each bar slightly
        skillItems.forEach((item, i) => {
          setTimeout(() => addClass(item, 'bar-animated'), i * 200);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const skillSection = $('.skill');
  if (skillSection) observer.observe(skillSection);
};


/* ============================================================
   TESTIMONIALS MODAL
   ============================================================ */
const initTestimonialsModal = () => {
  const items           = $$('[data-testimonials-item]');
  const modalContainer  = $('[data-modal-container]');
  const overlay         = $('[data-overlay]');
  const closeBtn        = $('[data-modal-close-btn]');
  const modalImg        = $('[data-modal-img]');
  const modalTitle      = $('[data-modal-title]');
  const modalText       = $('[data-modal-text]');

  if (!modalContainer) return;

  const openModal = (item) => {
    modalImg.src    = item.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt    = item.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = item.querySelector('[data-testimonials-title]').innerHTML;
    modalText.innerHTML  = item.querySelector('[data-testimonials-text]').innerHTML;
    addClass(modalContainer, 'active');
    addClass(overlay, 'active');
  };

  const closeModal = () => {
    removeClass(modalContainer, 'active');
    removeClass(overlay, 'active');
  };

  items.forEach(item => item.addEventListener('click', () => openModal(item)));
  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);
};


/* ============================================================
   PORTFOLIO FILTER
   ============================================================ */
const initFilter = () => {
  const select      = $('[data-select]');
  const selectItems = $$('[data-select-item]');
  const selectValue = $('[data-selecct-value]');  // note: typo in original HTML kept
  const filterBtns  = $$('[data-filter-btn]');
  const filterItems = $$('[data-filter-item]');

  const filterFunc = (value) => {
    filterItems.forEach(item => {
      const show = value === 'all' || value === item.dataset.category;
      show ? addClass(item, 'active') : removeClass(item, 'active');
    });
  };

  // Mobile select
  select?.addEventListener('click', () => toggleClass(select, 'active'));
  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      const val = item.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = item.innerText;
      toggleClass(select, 'active');
      filterFunc(val);
    });
  });

  // Desktop filter buttons
  let activeBtn = filterBtns[0];
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = btn.innerText;
      filterFunc(val);
      activeBtn && removeClass(activeBtn, 'active');
      addClass(btn, 'active');
      activeBtn = btn;
    });
  });
};


/* ============================================================
   PAGE NAVIGATION
   ============================================================ */
const initNavigation = () => {
  const navLinks = $$('[data-nav-link]');
  const pages    = $$('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.innerText.toLowerCase();
      pages.forEach((page, i) => {
        const match = target === page.dataset.page;
        match ? addClass(page, 'active')    : removeClass(page, 'active');
        match ? addClass(navLinks[i], 'active') : removeClass(navLinks[i], 'active');
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Re-trigger scroll reveal for newly shown articles
      setTimeout(initScrollReveal, 50);
    });
  });
};


/* ============================================================
   PARTICLE CANVAS BACKGROUND  — lightweight floating dots
   ============================================================ */
const initParticles = () => {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles;

  const resize = () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  };

  const createParticle = () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
  });

  const init = () => {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
  };

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(153, 204, 0, ${p.alpha})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  };

  init();
  draw();
  window.addEventListener('resize', init);
};


/* ============================================================
   BOOT — call everything here
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initTyping();
  initScrollReveal();
  initSkillBars();
  initTestimonialsModal();
  initFilter();
  initNavigation();
  initParticles();
});
