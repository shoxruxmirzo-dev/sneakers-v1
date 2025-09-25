import { Search } from 'lucide-react';
import React from 'react';

const Searchblock = () => {
  return (
    <div className="flex items-center gap-2 border px-4 py-2 rounded-xl ">
      <Search size={18} className="text-muted-foreground" />
      <input type="search" placeholder="Поиск..." className="outline-none text-sm lg:text-base" />
    </div>
  );
};

export default Searchblock;
