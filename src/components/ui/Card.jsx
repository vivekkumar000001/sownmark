import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({
  icon,
  title,
  description,
  actionText,
  link,
  className = '',
  color = 'blue'
}) => {
  const colors = {
    blue: {
      bg: 'from-blue-600 to-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-600'
    },
    emerald: {
      bg: 'from-emerald-600 to-emerald-500',
      text: 'text-emerald-600',
      border: 'border-emerald-600'
    },
    amber: {
      bg: 'from-amber-600 to-amber-500',
      text: 'text-amber-600',
      border: 'border-amber-600'
    },
    violet: {
      bg: 'from-violet-600 to-violet-500',
      text: 'text-violet-600',
      border: 'border-violet-600'
    }
  };

  const selectedColor = colors[color] || colors.blue;

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full ${className}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`h-40 sm:h-44 md:h-48 flex items-center justify-center bg-gradient-to-r ${selectedColor.bg}`}>
        {React.cloneElement(icon, { className: 'text-white text-4xl sm:text-5xl' })}
      </div>

      <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{title}</h3>

        <p className="text-slate-600 text-sm sm:text-base mb-4 line-clamp-4">
          {description}
        </p>

        {actionText && link && (
          <Link
            to={link}
            className={`mt-auto font-medium ${selectedColor.text} hover:underline text-sm sm:text-base`}
          >
            {actionText}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
