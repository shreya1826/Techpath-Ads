'use client';

import { useState, useEffect } from 'react';

interface UseExitIntentProps {
  onExitIntent: () => void;
  delay?: number;
  sensitivity?: number;
}

export const useExitIntent = ({ 
  onExitIntent, 
  delay = 1000, 
  sensitivity = 10 
}: UseExitIntentProps) => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseLeave = (event: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page
      if (
        event.clientY <= sensitivity && 
        !isTriggered && 
        event.relatedTarget === null
      ) {
        setIsTriggered(true);
        timeoutId = setTimeout(() => {
          onExitIntent();
        }, delay);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [onExitIntent, delay, sensitivity, isTriggered]);

  const reset = () => {
    setIsTriggered(false);
  };

  return { isTriggered, reset };
};
