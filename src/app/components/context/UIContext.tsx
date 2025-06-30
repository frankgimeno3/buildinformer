'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type UIContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;

  isNewsOpen: boolean;
  setIsNewsOpen: (value: boolean) => void;

  isLoggedOpen: boolean;
  setIsLoggedOpen: (value: boolean) => void;

  section: string;
  setSection: (value: string) => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isLoggedOpen, setIsLoggedOpen] = useState(false);
  const [section, setSection] = useState('home');

  return (
    <UIContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isNewsOpen,
        setIsNewsOpen,
        isLoggedOpen,
        setIsLoggedOpen,
        section,
        setSection,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI debe ser usado dentro de un UIProvider');
  }
  return context;
};
