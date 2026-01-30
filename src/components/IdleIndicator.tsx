"use client";

import { useEffect, useRef, useState } from "react";

export default function IdleIndicator() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    let animationId: number;
    let currentY = 15;
    let targetY = 15;
    let idleTimer: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const updatePosition = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      targetY = 15 + percent * 70;

      // Detect if scrolling
      if (Math.abs(scrollTop - lastScrollY) > 0.5) {
        setIsIdle(false);
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => setIsIdle(true), 150);
      }
      lastScrollY = scrollTop;

      // Smooth lerp
      currentY += (targetY - currentY) * 0.08;

      if (elementRef.current) {
        elementRef.current.style.transform = `translateY(${currentY}vh)`;
      }

      animationId = requestAnimationFrame(updatePosition);
    };

    animationId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="fixed top-0 right-6 text-muted-foreground/30 text-xs font-mono select-none pointer-events-none z-50"
    >
      <span className={`tracking-widest ${isIdle ? "animate-pulse" : ""}`}>...</span>
    </div>
  );
}
