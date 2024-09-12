// DamageNotification.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface DamageNotificationProps {
  damage: number;
  position: { x: number; y: number };
}

const DamageNotification: React.FC<DamageNotificationProps> = ({ damage, position }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        color: 'red',
        fontWeight: 'bold',
      }}
    >
      -{damage}
    </motion.div>
  );
};

export default DamageNotification;
