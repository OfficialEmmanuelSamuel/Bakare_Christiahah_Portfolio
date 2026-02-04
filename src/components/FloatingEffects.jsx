import { motion } from "framer-motion";

const particles = Array.from({ length: 35 });
const streaks = Array.from({ length: 6 });

const HighMotionFloatingEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glowing Particles */}
      {particles.map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const size = Math.random() * 10 + 6;
        const duration = Math.random() * 6 + 4;

        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-linear-to-br from-rose-500 via-rose-500 to-amber-500 shadow-xl opacity-70"
            style={{
              width: size,
              height: size,
              top: `${startY}%`,
              left: `${startX}%`,
              filter: "blur(6px)",
            }}
            animate={{
              x: [
                0,
                (Math.random() - 0.5) * 60, // wider horizontal movement
                (Math.random() - 0.5) * 60,
                0,
              ],
              y: [
                0,
                (Math.random() - 0.5) * 60, // taller vertical movement
                (Math.random() - 0.5) * 60,
                0,
              ],
              rotate: [0, 180, -180, 0], // slight rotation
              scale: [0.8, 1, 1.2, 0.8], // pulsating effect
              opacity: [0.4, 0.9, 0.4, 0.7],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}

      {/* Light Streaks */}
      {streaks.map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-px w-200 bg-linear-to-r from-transparent via-rose-500 to-transparent blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `-${Math.random() * 50}%`,
          }}
          animate={{
            x: ["0%", "150%"], // increase streak distance
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6, // faster streaks
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
};

export default HighMotionFloatingEffect;
