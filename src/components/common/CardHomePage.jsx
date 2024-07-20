import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardHomePage({ imageSrc, text, path }) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <div className='flex flex-col'>
      <button
        className='w-[330px] h-[210px] shadow-xl'
        onClick={() => handleNavigation(path)}
      >
        <img src={imageSrc} alt='Description' className='w-full h-full' />
      </button>
      <div className='flex items-center mt-4'>
        <div className='flex-grow border-t-2 border-line'></div>
        <h1 className='mx-4 text-xl font-bold text-title' lang='en'>
          {text}
        </h1>
        <div className='flex-grow border-t-2 border-line'></div>
      </div>
    </div>
  );
}

export default CardHomePage;
