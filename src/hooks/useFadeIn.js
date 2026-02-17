import { useRef, useEffect } from "react";

/**
 * Attaches an IntersectionObserver to a ref and adds the "visible" class
 * once the element enters the viewport. Used for scroll-triggered fade-ins.
 */
export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}