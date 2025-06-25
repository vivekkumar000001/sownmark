import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from '../ui/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-cyan-200 to-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sky-900">What Our Clients Say</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

