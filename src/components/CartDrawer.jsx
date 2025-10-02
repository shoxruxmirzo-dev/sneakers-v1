import { X } from 'lucide-react';
import React from 'react';
import CartItem from './CartItem';
import { useAppContext } from '../context/AppContext';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen } = useAppContext();
  return (
    <div
      onClick={() => {
        setIsCartOpen(false);
      }}
      className={`fixed inset-0 z-30 w-full h-full bg-black/50 ${
        isCartOpen ? 'visible' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 w-full sm:w-sm h-screen bg-background shadow-md p-5 pb-8 flex flex-col gap-4 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Корзина</h1>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-7 h-7 bg-primary/5 hover:bg-primary/10 border rounded-md flex items-center justify-center cursor-pointer active:scale-95"
          >
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <span>Итого:</span>
            <div className="flex-1 border-b border-dashed"></div>
            <b>21 498 руб</b>
          </div>
          <button className="p-2 bg-[#9dd558] hover:bg-[#9dc558] text-primary-foreground border rounded-lg flex items-center justify-center cursor-pointer active:scale-95">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
