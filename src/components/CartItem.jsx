import { Trash2 } from 'lucide-react';
import React from 'react';
import { dummyProducts } from '../assets/assets';

const CartItem = () => {
  return (
    <div className="mt-4 border p-3 rounded-xl flex items-center gap-2">
      <img src={dummyProducts[0]['image']} alt="Image" width={70} />
      <div>
        <h3 className="text-sm">Мужские Кроссовки Nike Blazer Mid Suede</h3>
        <b className="text-sm font-bold">12 999 руб</b>
      </div>
      <button className="w-7 h-7 px-1 bg-primary/5 hover:bg-primary/10 border rounded-md flex items-center justify-center cursor-pointer active:scale-95 ">
        <Trash2 size={17} className="text-muted-foreground" />
      </button>
    </div>
  );
};

export default CartItem;
