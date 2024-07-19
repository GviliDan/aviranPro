import React from 'react';
import homePageImage from '../../assets/images/homePageImage.webp';

const HomePage = () => {
  const scrollToAboutUs = () => {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=' flex flex-col items-center justify-center min-h-screen'>
      <div className='relative w-full'>
        <img
          src={homePageImage}
          alt='Description'
          className='w-full h-[calc(100vh-62px)] md:h-[calc(100vh-85px)] object-cover'
        />
        <div className='absolute md:bottom-4 bottom-32 flex justify-center w-full'>
          <button onClick={scrollToAboutUs} className='scroll-down-arrow'>
            &#8595;
          </button>
        </div>
      </div>
      <div
        id='about-us'
        className='flex flex-col items-center py-12 px-2 text-center'
      >
        <div className='flex flex-col gap-4 md:text-2xl md:max-w-4xl'>
          <span className='text-3xl text-title'>השראה</span>
          <p>
            נוגעת בכל פרט, מהבחירות האסתטיות של עיצוב המקום ועד למילים החמות של
            הנדרים. היא מזכירה לנו שהחתונה היא לא רק אירוע, אלא תחילתו של מסע
            משותף, מסע של בניית זיכרונות, התגברות על מכשולים וחגיגת כל רגע קטן
            וגדול יחד.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
