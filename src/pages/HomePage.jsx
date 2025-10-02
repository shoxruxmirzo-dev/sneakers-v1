import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import Banner from '../components/Banner';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { products } = useAppContext();
  return (
    <>
      <Banner />
      <section className="mt-6 md:mt-10">
        <div className="container">
          <div className="flex flex-col">
            <div className="">
              <Title title="Все кроссовки" />
            </div>
            <div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product, index) => (
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
