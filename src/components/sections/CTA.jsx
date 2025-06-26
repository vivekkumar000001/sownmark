import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
// import { Button } from "@/components/ui/button";


const CTA = () => {
  return (
    <section className="py-8 bg-blue-900 text-white">
      <div className="container-padding text-center">
        <motion.h2 
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        
        <motion.p 
          className="text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact us today for a free consultation and let's discuss your goals.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
    <Link to="/contact">
  <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full">
    Get Started Now
  </button>
</Link>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;