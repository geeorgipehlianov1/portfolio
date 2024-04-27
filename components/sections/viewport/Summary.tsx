'use client';
import { motion } from 'framer-motion';

export default function Summary() {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className='w-full max-w-4xl text-center text-base'
    >
      I am a Full Stack Developer with a primary focus on front-end development.
      I enjoy participating in both front-end and back-end aspects of
      application development. My career plan is to take an Engineering Manager
      role, leveraging my expertise in web development along with my leadership
      skills to drive projects to success.
    </motion.p>
  );
}
