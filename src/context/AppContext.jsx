import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('no-scroll');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('no-scroll');
    }
  }, [isCartOpen]);

  const value = { navigate, isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
