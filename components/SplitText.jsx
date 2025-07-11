'use client'; // if using App Router

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplitText({
  text = '',
  className = '',
  splitType = 'chars',
  delay = 100,
  duration = 0.5,
  ease = 'easeOut',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '0px',
  onLetterAnimationComplete = () => {},
  textAlign = 'left',
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin }
    );

    const element = document.getElementById('split-text');
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, [threshold, rootMargin]);

  const parts =
    splitType === 'words' ? text.split(' ') : text.split('');

  return (
    <div
      id="split-text"
      className={`flex flex-wrap ${textAlign === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
    >
      {parts.map((part, i) => (
        <motion.span
          key={i}
          initial={from}
          animate={isVisible ? to : from}
          transition={{
            delay: i * (delay / 2000),
            duration,
            ease,
          }}
          onAnimationComplete={() => {
            if (i === parts.length - 1) onLetterAnimationComplete();
          }}
          className="inline-block"
        >
          {part === ' ' ? '\u00A0' : part}
        </motion.span>
      ))}
    </div>
  );
}
