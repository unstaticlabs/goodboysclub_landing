import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, try to scroll to that element
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));
      // wait a tick in case the target renders after navigation
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback: top if not found
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      return;
    }

    // No hash → scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 opacity-90 shadow-md"
          size="icon"
        >
          <ArrowUpToLine className="text-white h-4 w-4" />
        </Button>
      )}
    </>
  );
};
