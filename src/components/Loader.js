import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="loader-spinner"
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl text-white font-bold"
        >
          Loading...
        </motion.h2>
      </div>
    </div>
  );
};

export default Loader;
