import { Heart, ShoppingCart, CircleUserRound } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Left */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="./logo.png" alt="Logo" className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold uppercase">React Sneakers</h3>
              <p className="text-xs">Магазин лучших кроссовок</p>
            </div>
          </div>

          {/* Right */}
          <div>
            <ul className="flex text-center gap-8">
              <li className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                <ShoppingCart size={18} />
                <span>Корзина</span>
              </li>
              <li className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                <Heart size={18} />
                <span>Закладки</span>
              </li>
              <li className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer transition hover:text-foreground">
                <CircleUserRound size={18} />
                <span>Профиль</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
