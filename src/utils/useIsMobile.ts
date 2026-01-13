import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 1000): boolean {
    const query = `(max-width: ${breakpoint}px)`;
    const getInitial = () => {
        if (typeof window === "undefined" || !window.matchMedia) return false;
        return window.matchMedia(query).matches;
    };

    const [isMobile, setIsMobile] = useState<boolean>(getInitial);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;

        const mql = window.matchMedia(query);
        const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile("matches" in e ? e.matches : mql.matches);

        // écoute moderne
        if (typeof mql.addEventListener === "function") {
            mql.addEventListener("change", onChange as EventListener);
        } else {
            // fallback pour anciens navigateurs
            // @ts-ignore: legacy API
            mql.addListener(onChange);
        }

        // synchroniser immédiatement
        setIsMobile(mql.matches);

        return () => {
            if (typeof mql.removeEventListener === "function") {
                mql.removeEventListener("change", onChange as EventListener);
            } else {
                // @ts-ignore: legacy API
                mql.removeListener(onChange);
            }
        };
    }, [breakpoint]);

    return isMobile;
}