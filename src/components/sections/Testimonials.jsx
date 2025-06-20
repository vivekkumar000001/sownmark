import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from '../ui/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <motion.h2 
          className="text-center pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;