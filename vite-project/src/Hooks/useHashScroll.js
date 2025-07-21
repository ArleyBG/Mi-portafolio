import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useHashScroll(delay = 100) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      const link = document.querySelector(`a[href='${hash}']`);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, delay);
      }
    }
  }, [location, delay]);
}