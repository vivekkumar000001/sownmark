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
   <section className="section-padding bg-slate-50 pt-16">
  <div className="container-padding">
    <motion.h2 
      className="text-center mb-10 font-bold text-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Why Sownmark is Your Digital Advantage
    </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;