import { motion, AnimatePresence } from "framer-motion";

import React from "react";

const CardsDraws = ({ cards }) => {
  return (
    <AnimatePresence>
      <div className="grid grid-cols-4 gap-2 mt-10 mb-10 sm:grid-cols-10">
        {cards &&
          cards.length > 0 &&
          cards.map((element, index) => {
            if (element.value === "QUEEN") {
              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: 0,
                    repeatDelay: 1,
                  }}
                >
                  <AnimatePresence>
                    <motion.img
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      src={element?.image}
                      className="object-cover max-h-24 sm:max-h-32"
                      alt="card"
                    />
                  </AnimatePresence>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={index}
                >
                  <img
                    src={element?.image}
                    className="object-cover max-h-24 sm:max-h-32"
                    alt="card"
                  />
                </motion.div>
              );
            }
          })}
      </div>
    </AnimatePresence>
  );
};

export default CardsDraws;
