import React from 'react';
import Hero from '../components/sections/Hero';
import ContactForm from '../components/ui/ContactForm';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      content: "123 Digital Avenue\nTech City, TC 10001"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "info@sownmark.com"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="bg-blue-gray-50">
      {/* Hero Section */}
      <Hero
        title="Contact Sownmark"
        subtitle="We're here to answer your questions and help you achieve your digital goals."
      />

      {/* Contact Form */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-gray-800 mb-12">
            Send Us a Message
          </h2>
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-gray-800 mb-16">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-sky-300 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 whitespace-pre-line text-sm sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

