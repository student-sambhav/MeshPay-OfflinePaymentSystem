import { motion } from "framer-motion";

const packets = [
  {
    id: 1,
    top: "22%",
    left: "28%",
    delay: 0,
  },
  {
    id: 2,
    top: "42%",
    left: "48%",
    delay: 1.2,
  },
  {
    id: 3,
    top: "65%",
    left: "62%",
    delay: 2.1,
  },
];

export default function LivePackets() {
  return (
    <>
      {packets.map((packet) => (
        <motion.div
          key={packet.id}
          initial={{
            x: 0,
            opacity: 0,
          }}
          animate={{
            x: 180,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: packet.delay,
            ease: "linear",
          }}
          className="absolute z-30"
          style={{
            top: packet.top,
            left: packet.left,
          }}
        >
          <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        </motion.div>
      ))}
    </>
  );
}