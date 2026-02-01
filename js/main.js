/**
 * Együtt-Érted Fejlesztőház - Main JavaScript
 */

(function() {
  'use strict';

  // DOM Elements
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const ageTabs = document.querySelectorAll('.age-tab');
  const agePanels = document.querySelectorAll('.age-panel');

  /**
   * Navigation - Scroll effect
   */
  function handleNavScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  /**
   * Mobile menu toggle
   */
  function toggleMobileMenu() {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  }

  /**
   * Close mobile menu when clicking a link
   */
  function closeMobileMenu() {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  /**
   * Age group tabs functionality
   */
  function handleAgeTabs(e) {
    const target = e.target;
    if (!target.classList.contains('age-tab')) return;

    const ageGroup = target.dataset.age;

    // Update active tab
    ageTabs.forEach(tab => tab.classList.remove('active'));
    target.classList.add('active');

    // Update active panel
    agePanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === `age-${ageGroup}`) {
        panel.classList.add('active');
      }
    });
  }

  /**
   * Smooth scroll for anchor links
   */
  function handleSmoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        closeMobileMenu();
      }
    }
  }

  /**
   * Fade in on scroll animation
   */
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  /**
   * Initialize all event listeners
   */
  function init() {
    // Navigation scroll effect
    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll(); // Initial check

    // Mobile menu
    if (navToggle) {
      navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Age group tabs
    const ageTabsContainer = document.querySelector('.age-tabs');
    if (ageTabsContainer) {
      ageTabsContainer.addEventListener('click', handleAgeTabs);
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Scroll animations
    handleScrollAnimations();

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !navToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
