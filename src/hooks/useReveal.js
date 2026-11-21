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
].join(',');

export default function useReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const targets = Array.from(document.querySelectorAll(SELECTOR));

    targets.forEach((el) => {
      el.setAttribute('data-reveal', '');
      const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(SELECTOR));
      const index = Math.max(0, siblings.indexOf(el));
      el.style.setProperty('--d', `${Math.min(index, 5) * 90}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}