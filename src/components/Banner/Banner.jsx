import React from 'react';
import hero from '../../assets/Images/hero-bg.png'

const Banner = () => {
  return (
    <div className='w-10/12 h-screen bg-cover mx-auto text-white text-center mb-20 mt-16' style={{backgroundImage: `url(${hero})`, border: `1px `, borderRadius:`30px`, backgroundRepeat:'no-repeat', backgroundPosition:`center`, backgroundSize:'cover' }}>      
      <h1 className='mt-10  pt-30 pb-10 lg:text-5xl md:text-4xl font-bold text-2xl'>
        Discover an exceptional cooking  class tailored for you! </h1>
      <p className='pb-10 px-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and 500+ coding problems to become an exceptionally well world-class Programmerr</p>
      <div className='pb-40'>
        <button className='py-3 px-10 rounded-full bg-[rgba(11,229,138,1)] text-black font-bold'>Explore Now</button>
        <button className='ml-10 border-white border-2 py-3 px-10 rounded-full font-bold'> Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;