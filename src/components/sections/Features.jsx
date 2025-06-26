import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaChartPie,
  FaSyncAlt,
  FaUserFriends
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Expertise",
      description: "Industry-leading knowledge and practical experience across all our services."
    },
    {
      icon: <FaChartPie />,
      title: "Results-Driven",
      description: "Our focus is on delivering measurable outcomes for our clients, whether it's skills, talent, or online performance."
    },
    {
      icon: <FaSyncAlt />,
      title: "Holistic Approach",
      description: "We offer integrated solutions, understanding how each aspect of digital strategy connects and contributes to overall success."
    },
    {
      icon: <FaUserFriends />,
      title: "Client-Centric",
      description: "Your goals are our priority. We tailor our services to meet your unique needs."
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
<section className="py-20 bg-blue-900 ">


      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-center mb-16 text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Sownmark is Your Digital Advantage
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-500 transition duration-300 text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-tr from-blue-100 to-indigo-200 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
