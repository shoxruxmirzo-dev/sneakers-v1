import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import Banner from '../components/Banner';
import { dummyProducts } from '../assets/assets';
import Searchblock from '../components/Searchblock';

const Home = () => {
  return (
    <>
      <Banner />
      <section className="mt-10">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Title title="Все кроссовки" />
              <Searchblock />
            </div>
            <div className="mt-7 flex flex-wrap  gap-4 md:gap-6">
              {dummyProducts.map((product, index) => (
                <Card key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
