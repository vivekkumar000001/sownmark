import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import {
  FaChartLine,
  FaUsers,
  FaBullhorn,
  FaLaptopCode
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Become a Digital Marketing Expert",
      description:
        "Learn cutting-edge strategies and tools from industry veterans. Our comprehensive courses empower you with the skills to thrive in the digital landscape.",
      actionText: "Learn More",
      color: "blue",
      link: "/digital-marketing" // 👈 Add your real route or link
    },
    {
      icon: <FaUsers />,
      title: "Connect with Top Digital Talent",
      description:
        "From digital marketing specialists to IT professionals, we connect companies with the perfect candidates to build high-performing teams.",
      actionText: "Learn More",
      color: "blue",
      link: "/digital-marketing"
    },
    {
      icon: <FaBullhorn />,
      title: "Achieve Your Marketing Goals",
      description:
        "Let our expert agency team craft and execute powerful digital strategies – SEO, SEM, Social Media, Content, and more – to boost your brand's online presence.",
      actionText: "Learn More",
      color: "blue",
      link: "/blog"
    },
    {
      icon: <FaLaptopCode />,
      title: "Build a Stunning & Effective Website",
      description:
        "We create responsive, user-friendly, and high-performing websites that reflect your brand, engage your audience, and drive conversions.",
      actionText: "Learn More",
      color: "blue",
      link: "/blog  "
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.h2
          className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-black leading-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Sownmark Can Do For You
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
