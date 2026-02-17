import { useFadeIn } from "../hooks/useFadeIn";

/**
 * Wraps children in a div that fades in when scrolled into view.
 * Relies on the .fade-in / .visible CSS classes in global.css
 */
export default function FadeSection({ children, className = "" }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}