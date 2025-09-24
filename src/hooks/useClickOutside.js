import { useEffect } from "react";

/**
 * A custom hook that triggers a callback when a click is detected outside of a specified element.
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to monitor.
 * @param {() => void} handler - The function to call when a click outside is detected.
 * @param {React.RefObject<HTMLElement> | null} triggerRef - An optional ref for a trigger element (e.g., a hamburger button) to ignore.
 */
export function useClickOutside(ref, handler, triggerRef = null) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target) &&
          (!triggerRef || (triggerRef.current && !triggerRef.current.contains(event.target)))) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, triggerRef]);
}
