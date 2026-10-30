import React from 'react';
import { motion } from 'framer-motion';
import { NumberMetric } from '../types';

export const Numbers: React.FC = () => {
  const metrics: NumberMetric[] = [
    { value: '<200', unit: 'ms', label: 'SOS response' },
    { value: '95%', unit: '', label: 'crash-free sessions' },
    { value: '2+', unit: 'years', label: 'in Android' },
    { value: '1', unit: 'live', label: 'Play Store app' },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40">
      <div className="mb-12">
        <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-3">
          PERFORMANCE METRICS
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col border-l border-border pl-6"
          >
            <div className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-coral tracking-tight">
              {metric.value}
              {metric.unit && (
                <span className="font-mono font-normal text-lg sm:text-xl text-foreground/80 ml-1.5">
                  {metric.unit}
                </span>
              )}
            </div>

            <div className="font-inter font-medium text-xs sm:text-sm text-muted mt-2 tracking-wide uppercase">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
