import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <section className="mt-6 md:mt-12">
      <div className="container">
        <div className="flex items-center justify-center">
          <img src={assets.banner} alt="Banner" className="hidden md:block rounded-2xl" />
          <img src={assets.banner_sm} alt="Banner" className="md:hidden rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
