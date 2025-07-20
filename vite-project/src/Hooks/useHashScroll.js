import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useHashScroll(delay = 100) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, delay);
            }
        }
    }, [location, delay]);
}