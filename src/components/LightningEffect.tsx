import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LightningEffect() {
  const [bolts, setBolts] = useState<{ id: number; x: number; y: number; scale: number; rotation: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newBolt = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0.5 + Math.random() * 1.5,
          rotation: Math.random() * 360,
        };
        setBolts((prev) => [...prev, newBolt]);
        setTimeout(() => {
          setBolts((prev) => prev.filter((b) => b.id !== newBolt.id));
        }, 150);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {bolts.map((bolt) => (
        <motion.div
          key={bolt.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.15 }}
          style={{
            position: "absolute",
            left: `${bolt.x}%`,
            top: `${bolt.y}%`,
            transform: `scale(${bolt.scale}) rotate(${bolt.rotation}deg)`,
          }}
        >
          <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M120 0L40 180H100L20 400L180 160H100L160 0H120Z"
              fill="url(#lightning-grad)"
              filter="url(#glow)"
            />
            <defs>
              <linearGradient id="lightning-grad" x1="100" y1="0" x2="100" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF" />
                <stop offset="1" stopColor="#0066FF" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </svg>
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
