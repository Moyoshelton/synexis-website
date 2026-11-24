"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

/** Reset scroll for client side route changes while leaving history restoration alone. */
export default function RouteScrollManager() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const restoringHistory = useRef(false);

  useLayoutEffect(() => {
    const onPopState = () => {
      restoringHistory.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    if (restoringHistory.current) {
      restoringHistory.current = false;
      return;
    }

    const hash = window.location.hash.slice(1);
    let fragmentTarget: HTMLElement | null = null;

    if (hash) {
      try {
        fragmentTarget = document.getElementById(decodeURIComponent(hash));
      } catch {
        // An invalid fragment should not prevent the normal route reset.
      }
    }

    // Run after Next's route scroll decision but before the browser paints the new route.
    const frame = window.requestAnimationFrame(() => {
      if (fragmentTarget) {
        fragmentTarget.scrollIntoView({ block: "start", behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
