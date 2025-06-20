import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-br from-blue-600 to-blue-400 rounded-bl-[200px] opacity-10 -z-10"></div>
      
      <div className="container-padding">
        <div className="max-w-3xl">
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ctaText && (
              <Link to={ctaLink}>
                <Button primary>{ctaText}</Button>
              </Link>
            )}
            
            {secondaryCtaText && (
              <Link to={secondaryCtaLink}>
                <Button outline>{secondaryCtaText}</Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;