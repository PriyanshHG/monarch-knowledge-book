import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LightningEffect() {
  const [bolts, setBolts] = useState<{ id: number; x: number; y: number; scale: number; rotation: number }[]>([]);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const newBolt = {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 60,
          scale: 0.8 + Math.random() * 2,
          rotation: (Math.random() - 0.5) * 40,
        };
        setBolts((prev) => [...prev, newBolt]);
        
        if (Math.random() > 0.5) {
          setFlash(true);
          setTimeout(() => setFlash(false), 50);
        }

        setTimeout(() => {
          setBolts((prev) => prev.filter((b) => b.id !== newBolt.id));
        }, 200);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Screen Flash */}
      <motion.div
        animate={{ opacity: flash ? 0.05 : 0 }}
        className="absolute inset-0 bg-primary z-50"
      />

      <div className="opacity-30">
        {bolts.map((bolt) => (
          <motion.div
            key={bolt.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1, 0] }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              left: `${bolt.x}%`,
              top: `${bolt.y}%`,
              transform: `scale(${bolt.scale}) rotate(${bolt.rotation}deg)`,
            }}
          >
            <svg width="200" height="600" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M120 0L40 280H100L20 600L180 260H100L160 0H120Z"
                fill="url(#lightning-grad)"
                filter="url(#glow)"
              />
              <defs>
                <linearGradient id="lightning-grad" x1="100" y1="0" x2="100" y2="600" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F0FF" />
                  <stop offset="0.5" stopColor="#0066FF" />
                  <stop offset="1" stopColor="#00F0FF" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
