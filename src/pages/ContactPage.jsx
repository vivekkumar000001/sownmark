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
      content: "+91 7462881297"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "deepak@sownmark.com"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-cyan-50 via-white to-cyan-100">
      {/* Hero Section */}
      <div className="text-center py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-cyan-700 mb-6 leading-tight">
          <span className="text-blue-900">Contact Sownmark</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-3xl mx-auto">
          We're here to answer your questions and help you achieve your digital goals.
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-100 mb-10 sm:mb-12">
            Send Us a Message
          </h2>
          {/* <div className="bg-black p-5 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-cyan-100"> */}
            <ContactForm />
          </div>
        {/* </div> */}
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-cyan-400 via-white to-cyan-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-800 mb-12 md:mb-16">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl border border-cyan-100 hover:border-cyan-400 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 whitespace-pre-line text-sm sm:text-base leading-relaxed">
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
