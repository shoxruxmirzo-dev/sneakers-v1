import { Heart, Plus } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Card = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="relative w-[210px] border p-5 rounded-xl hover:shadow-md transition hover:-translate-y-1.5">
        <img src={product.image[0]} alt={product.name} width={168} className="block" />
        <h3 className="mt-2 text-sm">{product.name}</h3>
        <button
          onClick={() => {
            setIsFavorited((prev) => !prev), toast.success('Товар добавлен в Закладки!');
          }}
          className={`absolute left-5 top-5  w-8 h-8 hover:bg-primary/5 border rounded-md flex items-center justify-center cursor-pointer active:scale-95 ${
            isFavorited && 'bg-red-50 hover:bg-red-50'
          }`}
        >
          <Heart size={18} className={`text-muted-foreground ${isFavorited && 'text-red-500'}`} />
        </button>
        <div className="mt-3 flex items-center justify-between ">
          <div>
            <p className="text-xs uppercase">Цена:</p>
            <b className="text-sm font-bold">{product.price.toLocaleString('ru-RU')} руб</b>
          </div>
          <button
            onClick={() => toast.success('Товар добавлен в Корзину!')}
            className="w-8 h-8 bg-primary/5 hover:bg-primary/10 border rounded-md flex items-center justify-center cursor-pointer active:scale-95"
          >
            <Plus size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
