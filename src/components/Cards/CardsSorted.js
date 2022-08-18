import { motion } from "framer-motion";
import React from "react";

const CardsSorted = ({ cardSorted }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-4 gap-2 mt-10 mb-10 sm:grid-cols-10 "
    >
      {cardSorted &&
        cardSorted.length > 0 &&
        cardSorted.map((element, index) => (
          <div key={index}>
            <img
              src={element?.image}
              className="object-cover max-h-24 sm:max-h-32"
              alt="card"
            />
          </div>
        ))}
    </motion.div>
  );
};

export default CardsSorted;
