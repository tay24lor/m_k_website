import { useEffect } from 'react';

export const useScrollReveal = (selector = '.reveal-on-scroll') => {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

        if (elements.length === 0) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('in-view'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, [selector]);
};
