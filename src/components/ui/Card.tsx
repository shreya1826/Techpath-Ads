import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg p-6',
        hover && 'transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
