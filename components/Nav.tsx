'use client';
import { navData } from '@/data';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className='mb-5 flex flex-col items-center py-5'
    >
      <div className='flex w-full max-w-6xl justify-between'>
        <div className='flex items-center gap-5'>
          <Link className='text-base' href='/'>
            georgiPH
          </Link>
        </div>
        <div className='flex items-center gap-5'>
          {navData.map((item) => (
            <Link key={item.title} className='text-base' href={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-[20px]' />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
