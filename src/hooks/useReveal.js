import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR = [
  '.stat',
  '.card-outline',
  '.grain-bank',
  '.impact-chart',
  '.facility-img',
  '.facility-copy',
  '.tile',
  '.circular-card',
  '.trust-item',
  '.member',
  '.value-card',
  '.story-image',
  '.story-text',
  '.board-copy',
  '.board-list',
  '.benefit',
  '.step',
  '.programme-copy',
  '.split-copy',
  '.split-stat',
  '.science-card',
  '.trace-card',
].join(',');

export default function useReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll(SELECTOR));
    if (!els.length) return;

    els.forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--d', `${Math.min(i, 5) * 90}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}