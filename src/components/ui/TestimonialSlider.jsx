import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    content: "Sownmark's digital marketing course transformed my career. The practical approach and industry insights gave me the confidence to excel in my new role. Highly recommend!",
    author: "Sarah Johnson",
    role: "Marketing Manager at TechGrowth"
  },
  {
    id: 2,
    content: "We found our ideal digital marketing manager through Sownmark's hiring services. Their screening process was thorough and efficient. Professional service from start to finish.",
    author: "Michael Rodriguez",
    role: "CEO at Innovate Solutions"
  },
  {
    id: 3,
    content: "Our website built by Sownmark not only looks great but also performs exceptionally well. Our conversion rate increased by 45% in just three months. Fantastic job!",
    author: "Emily Chen",
    role: "Founder of GreenLeaf Organics"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative">
            <FaQuoteLeft className="text-blue-500 text-3xl absolute top-0 left-0 opacity-20" />
            <p className="text-xl italic px-10 py-6">
              {testimonials[currentIndex].content}
            </p>
            <FaQuoteRight className="text-blue-500 text-3xl absolute bottom-0 right-0 opacity-20" />
          </div>
          <div className="mt-6">
            <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
            <p className="text-slate-600">{testimonials[currentIndex].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-slate-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;