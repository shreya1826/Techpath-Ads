import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  const classes = [
    'bg-white rounded-xl shadow-lg p-6',
    hover && 'transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
