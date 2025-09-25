import { Heart, ShoppingCart, CircleUserRound, Menu } from 'lucide-react';
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router';

const Header = () => {
  const { navigate, isMenuOpen, setIsMenuOpen, setIsCartOpen } = useAppContext();

  return (
    <header className="py-4 border-b">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Left */}
          <Link to={'/'} className="flex items-center gap-2 cursor-pointer">
            <img src="./logo.png" alt="Logo" className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold uppercase">React Sneakers</h3>
              <p className="text-xs">Магазин лучших кроссовок</p>
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
            <Link
              to={'/favorites'}
              className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
            >
              <Heart size={18} />
              <span>Закладки</span>
            </Link>
            <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
              <CircleUserRound size={18} />
              <span>Профиль</span>
            </div>
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
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
                >
                  <ShoppingCart size={18} />
                  <span>Корзина</span>
                </div>
                <Link
                  to={'/favorites'}
                  className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
                >
                  <Heart size={18} />
                  <span>Закладки</span>
                </Link>
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
