/**
 * Együtt-Érted Fejlesztőház - Main JavaScript
 */

(function() {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  /**
   * Navigation - shadow once the page is scrolled
   */
  function handleNavScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }

  /**
   * Mobile menu open/close
   */
  function setMobileMenu(open) {
    navToggle.classList.toggle('open', open);
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function toggleMobileMenu() {
    setMobileMenu(!navMenu.classList.contains('open'));
  }

  function closeMobileMenu() {
    setMobileMenu(false);
  }

  /**
   * Smooth scroll for same-page anchor links, offset by the fixed nav
   */
  function handleSmoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    closeMobileMenu();
  }

  /**
   * Fade in on scroll animation
   */
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  function init() {
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    if (navToggle && navMenu) {
      navToggle.setAttribute('aria-controls', 'nav-menu');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.addEventListener('click', toggleMobileMenu);

      // Close the mobile menu when a link to another page is clicked
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (!link.getAttribute('href').startsWith('#')) closeMobileMenu();
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) closeMobileMenu();
      });

      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
          closeMobileMenu();
        }
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    handleScrollAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
