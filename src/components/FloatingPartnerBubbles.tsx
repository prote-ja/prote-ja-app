import { useEffect, useRef, useState } from "react";
import BioparkLogo from "@/assets/biopark.png";
import HugoLogo from "@/assets/hugo.png";
import UtfprLogo from "@/assets/utfpr.png";
import Espalmaq from "@/assets/espalmaq.png";
import SapatilhasLogo from "@/assets/sapatilhas.png";
// Constants for configuration
const CONFIG = {
  sizeRange: { min: 20, max: 40 },
  speedYRange: { min: 0.8, max: 1.0 },
  speedXRange: { min: -0.3, max: 0.3 },
  animationInterval: 100, // in milliseconds
  partnerLogos: [BioparkLogo, UtfprLogo, SapatilhasLogo, HugoLogo, Espalmaq],
};

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  logo: string;
}

export function FloatingPartnerBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Utility to generate bubbles
  const generateBubbles = () => {
    return CONFIG.partnerLogos.map((logo, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size:
        Math.random() * (CONFIG.sizeRange.max - CONFIG.sizeRange.min) +
        CONFIG.sizeRange.min,
      speedY:
        (Math.random() * (CONFIG.speedYRange.max - CONFIG.speedYRange.min) +
          CONFIG.speedYRange.min) *
        (Math.random() > 0.5 ? 1 : -1),
      speedX:
        Math.random() * (CONFIG.speedXRange.max - CONFIG.speedXRange.min) +
        CONFIG.speedXRange.min,
      logo,
    }));
  };

  useEffect(() => {
    // Initialize bubbles
    setBubbles(generateBubbles());

    // Animation function
    const animateBubbles = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => ({
          ...bubble,
          y:
            (bubble.y + bubble.speedY + window.innerHeight) %
            window.innerHeight,
          x: (bubble.x + bubble.speedX + window.innerWidth) % window.innerWidth,
        }))
      );
    };

    // Set up animation
    const intervalId = setInterval(animateBubbles, CONFIG.animationInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Handle resize without resetting bubbles
    const handleResize = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => ({
          ...bubble,
          x: Math.min(bubble.x, window.innerWidth),
          y: Math.min(bubble.y, window.innerHeight),
        }))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
        >
          <img
            src={bubble.logo}
            alt="Partner Logo"
            className="w-2/3 h-2/3 object-contain opacity-30"
          />
        </div>
      ))}
    </div>
  );
}
