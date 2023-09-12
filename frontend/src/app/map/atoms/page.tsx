'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Carousel from '@/components/carousel';

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <h1 className='t2'>혜택 있는 카드</h1>
        <Carousel />
      </main>
    </div>
  );
};

export default Home;
