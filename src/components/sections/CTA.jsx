import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
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
            <Button className="bg-black text-white hover:bg-slate-100 hover:text-blue-600">
              Get Started Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;