import { useEffect } from "react";

// Scroll reveal fallback. Browsers that support `animation-timeline: view()` animate
// `.reveal` elements in pure CSS (see App.css). Others get an IntersectionObserver
// that adds `.is-visible` as each element enters the viewport.
const useReveal = () => {
  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: view()");
    if (supportsScrollTimeline) return undefined;

    const elements = Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
