import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  type = 'button'
}) {
  const baseStyle = "relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 rounded-sm focus:outline-none cursor-pointer overflow-hidden group";

  const variants = {
    primary: "bg-brand-gold text-primary-navy hover:bg-light-gold shadow-md hover:shadow-lg border border-brand-gold",
    secondary: "bg-primary-navy text-white hover:bg-secondary-navy border border-primary-navy shadow-md",
    outline: "bg-transparent text-primary-navy border-2 border-primary-navy hover:bg-primary-navy hover:text-white",
    goldOutline: "bg-transparent text-brand-gold border-2 border-brand-gold hover:bg-brand-gold hover:text-primary-navy",
    dark: "bg-secondary-navy text-white border border-brand-gold/30 hover:border-brand-gold hover:bg-primary-navy"
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-sm px-6 py-3 gap-2.5",
    lg: "text-base px-8 py-4 gap-3"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      {/* Subtle shine effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
}
