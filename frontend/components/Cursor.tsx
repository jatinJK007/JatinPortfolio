import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface CursorProps {
  cursorVariant: 'default' | 'project';
}

export const Cursor: React.FC<CursorProps> = ({ cursorVariant }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device or prefers-reduced-motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchCheck || reducedMotionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const isProject = cursorVariant === 'project';
  const size = isProject ? 68 : 12;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center font-mono text-[11px] font-bold text-black uppercase tracking-wider"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        backgroundColor: 'hsl(8, 92%, 62%)',
        boxShadow: isProject ? '0 0 30px hsla(8, 92%, 62%, 0.45)' : 'none',
        transition: 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {isProject && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="select-none tracking-widest text-[10px]"
        >
          VIEW
        </motion.span>
      )}
    </motion.div>
  );
};
