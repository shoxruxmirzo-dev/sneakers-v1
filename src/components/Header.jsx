import { Heart, ShoppingCart, CircleUserRound, Menu } from 'lucide-react';
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router';

const Header = () => {
  const { navigate, user, setUser, isMenuOpen, setIsMenuOpen, setIsCartOpen } = useAppContext();

  return (
    <header className="py-4 border-b">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Left */}
          <Link to={'/'} className="flex items-center gap-1 md:gap-2 cursor-pointer">
            <img src="./logo.png" alt="Logo" className="w-9 h-9 md:w-10 md:h-10" />
            <div>
              <h3 className="text-sm md:text-xl font-bold uppercase">React Sneakers</h3>
              <p className="hidden md:block text-xs">Магазин лучших кроссовок</p>
            </div>
          </Link>

          {/* Desktop nav */}

          <div className="hidden md:flex text-center gap-8">
            <div
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
            >
              <ShoppingCart size={18} />
              <span>Корзина</span>
            </div>
            <div
              onClick={() => navigate('/favorites')}
              className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
            >
              <Heart size={18} />
              <span>Закладки</span>
            </div>
            {user ? (
              <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                <CircleUserRound size={18} />
                <span>Профиль</span>
              </div>
            ) : (
              <button
                onClick={() => setUser(true)}
                className="border px-4 py-2 rounded-md text-sm text-muted-foreground cursor-pointer transition hover:text-foreground hover:bg-border"
              >
                Войти
              </button>
            )}
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-8 h-8 bg-background hover:bg-primary/10 border rounded-md flex items-center justify-center cursor-pointer active:scale-95"
          >
            <Menu size={18} className="text-muted-foreground" />
          </button>

          {/* Mobile nav */}
          {isMenuOpen && (
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="md:hidden fixed left-0 top-0 right-0 bottom-0 z-30 w-full h-full bg-black/50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute w-1/2 h-screen left-0 bg-background shadow-md p-5 pt-8 pb-8 flex flex-col items-center gap-4"
              >
                <div
                  onClick={() => {
                    setIsCartOpen(true), setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
                >
                  <ShoppingCart size={18} />
                  <span>Корзина</span>
                </div>
                <div
                  onClick={() => {
                    navigate('/favorites'), setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
                >
                  <Heart size={18} />
                  <span>Закладки</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                  <CircleUserRound size={18} />
                  <span>Профиль</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
