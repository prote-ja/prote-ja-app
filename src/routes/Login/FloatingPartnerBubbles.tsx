import { useEffect, useState } from "react";

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

  useEffect(() => {
    const partnerLogos = [
      "/placeholder.svg?height=40&width=80",
      "/placeholder.svg?height=40&width=80",
      "/placeholder.svg?height=40&width=80",
    ];

    const newBubbles: Bubble[] = partnerLogos.map((logo, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 20, // Smaller size range
      speedY: (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1), // Slower vertical speed, random direction
      speedX: Math.random() * 0.2 - 0.1, // Add horizontal speed
      logo,
    }));

    setBubbles(newBubbles);

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

    const intervalId = setInterval(animateBubbles, 50);

    const handleResize = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => ({
          ...bubble,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
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
