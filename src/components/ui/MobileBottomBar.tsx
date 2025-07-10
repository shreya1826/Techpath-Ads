'use client';

import React from 'react';
import Button from './Button';

interface MobileBottomBarProps {
  onWhatsAppClick: () => void;
  onCallClick: () => void;
  onEnrollClick: () => void;
}

const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onWhatsAppClick,
  onCallClick,
  onEnrollClick
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-40">
      <div className="flex">
        <Button
          onClick={onWhatsAppClick}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 text-center font-semibold rounded-none border-none"
        >
          WhatsApp
        </Button>
        <Button
          onClick={onCallClick}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 text-center font-semibold rounded-none border-none"
        >
          Call
        </Button>
        <Button
          onClick={onEnrollClick}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 text-center font-semibold rounded-none border-none"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
