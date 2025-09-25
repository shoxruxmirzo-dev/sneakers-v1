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
      <section className="mt-6 md:mt-10">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center  justify-center sm:justify-between gap-2">
              <Title title="Все кроссовки" />
              <Searchblock />
            </div>
            <div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
