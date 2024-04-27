'use client';
import { motion } from 'framer-motion';

export default function Knowledge() {
  return (
    <motion.p
      className='text-center text-xl'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      [&apos;FE Developer&apos;, &apos;BE Developer&apos;, &apos;Web Development
      Enthusiast&apos;]
    </motion.p>
  );
}
