import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import Banner from '../components/Banner';
import { dummyProducts } from '../assets/assets';

const Home = () => {
  return (
    <>
      <Banner />
      <section className="mt-10">
        <div className="container">
          <div className="flex flex-col">
            <Title title="Все кроссовки" />
            <div className="mt-7 flex flex-wrap justify-center gap-4 md:gap-6">
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
