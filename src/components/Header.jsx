import { Search, Heart, ShoppingCart, CircleUserRound, Menu, ListOrdered } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { navigate, userData, setUserData, isMenuOpen, setIsMenuOpen, setIsCartOpen } =
    useAppContext();

  return (
    <header className="py-4">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Left */}
          <Link to={'/'} className="flex items-center gap-1 md:gap-2 cursor-pointer">
            <img src="./logo.png" alt="Logo" className="w-9 h-9" />
            <div>
              <h3 className="text-sm md:text-base font-bold uppercase">React Sneakers</h3>
              <p className="hidden md:block text-xs">Магазин лучших кроссовок</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-4 border px-3 py-1.5 rounded-md test-sm">
            <Search size={18} className=" text-muted-foreground" />
            <input type="search" placeholder="Поиск..." className="w-full outline-none text-sm" />
          </div>

          {/* Desktop nav */}

          <div className="hidden md:flex text-center gap-4 lg:gap-8">
            <div
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
            >
              <ShoppingCart size={18} />
              <span className="hidden lg:inline">Корзина</span>
            </div>
            <div
              onClick={() => navigate('/favorites')}
              className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground"
            >
              <Heart size={18} />
              <span className="hidden lg:inline">Закладки</span>
            </div>
            {userData ? (
              <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                <CircleUserRound size={18} />
                <span className="hidden lg:inline">{userData.firstname}</span>
              </div>
            ) : (
              <button
                onClick={() =>
                  setUserData({
                    _id: 'whbhfhf15554',
                    email: 'mrshon4554@gmail.com',
                    firstname: 'Shoxruxmirzo',
                  })
                }
                className="flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm text-muted-foreground cursor-pointer transition hover:text-foreground hover:bg-border"
              >
                <span>Войти</span>
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
                className="absolute w-2/5 h-screen left-0 bg-background shadow-md p-5 pt-8 pb-8 pl-10 flex flex-col gap-4"
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
                {userData ? (
                  <>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                      <ListOrdered size={18} />
                      <span>Мои заказы</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                      <CircleUserRound size={18} />
                      <span>{userData.firstname}</span>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      setUserData({
                        _id: 'whbhfhf15554',
                        email: 'mrshon4554@gmail.com',
                        firstname: 'Shoxruxmirzo',
                      })
                    }
                    className="flex items-center justify-center gap-1 border px-3 py-1.5 rounded-md text-sm text-muted-foreground cursor-pointer transition hover:text-foreground hover:bg-border"
                  >
                    <CircleUserRound size={18} />
                    <span>Войти</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Search */}
        <div className="mt-4 w-full flex md:hidden items-center gap-4 border px-3 py-1.5 rounded-md test-sm">
          <Search size={18} className=" text-muted-foreground" />
          <input type="search" placeholder="Поиск..." className="w-full outline-none text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
