import { Heart, Plus } from 'lucide-react';
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="w-[200px] md:w-[210px] border p-5 rounded-2xl relative hover:shadow-md transition hover:-translate-y-1.5">
      <img src={product.image[0]} alt={product.name} width={168} className="block" />
      <h3 className="mt-2 text-sm">{product.name}</h3>
      <button className="absolute left-5 top-5  w-8 h-8 bg-primary/5 hover:bg-primary/10 border rounded-md flex items-center justify-center cursor-pointer active:scale-95">
        <Heart size={18} className="text-muted-foreground" />
      </button>
      <div className="mt-3 flex items-center justify-between ">
        <div>
          <p className="text-xs uppercase">Цена:</p>
          <b className="text-sm font-bold">{product.price.toLocaleString('ru-RU')} руб</b>
        </div>
        <button className="w-8 h-8 bg-primary/5 hover:bg-primary/10 border rounded-md flex items-center justify-center cursor-pointer active:scale-95">
          <Plus size={18} className="text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Card;
