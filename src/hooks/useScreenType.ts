"use client"
import { useState, useEffect } from 'react';

type ScreenType = 'sm' | 'lg';

const useScreenType = (): ScreenType => {
  const [screenType, setScreenType] = useState<ScreenType>('lg');

  const updateScreenType = () => {
    if (window.innerWidth < 768) {
      setScreenType('sm');
    } else {
      setScreenType('lg');
    }
  };

  useEffect(() => {
    updateScreenType();
    window.addEventListener('resize', updateScreenType);
    return () => window.removeEventListener('resize', updateScreenType);
  }, []);

  return screenType;
};

export default useScreenType;
