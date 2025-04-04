import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Howl } from "howler";

const links = [
  { label: "Anointed & Activated", url: "https://anointedandactivated.com" },
  { label: "The Ridiculous Key", url: "https://ridiculouskey.com" },
];

const sounds = {
  hover: new Howl({ src: ["/sounds/hover.mp3"] }),
};

export default function AetheronOrb() {
  const [angle, setAngle] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const radius = 150;
  const centerX = 0;
  const centerY = 0;

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center">
      {links.map((link, index) => {
        const theta = angle + (index * (Math.PI * 2)) / links.length;
        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);

        return (
          <motion.a
            key={link.label}
            href={link.url}
            onHoverStart={() => sounds.hover.play()}
            className="absolute w-40 h-40 rounded-full text-white text-center flex items-center justify-center font-bold shadow-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-110 transition-transform"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            whileHover={{ scale: 1.2 }}
          >
            {link.label}
          </motion.a>
        );
      })}
      <div className="absolute w-48 h-48 rounded-full flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-inner animate-pulse">
        Aetheron
      </div>
    </div>
  );
}
