import React from 'react';
import lottieArrow from '../../assets/lottie/lottieArrow.json';
import Lottie from 'lottie-react';

function ArrowAnimation() {
  const scrollToAboutUs = () => {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='absolute md:bottom-4 bottom-32 flex justify-center w-full'>
      <button onClick={scrollToAboutUs}>
        <div className='w-full flex items-center justify-center'>
          <div className='border-white border	h-10 w-10 rounded-full absolute '></div>
          <Lottie
            animationData={lottieArrow}
            className='flex justify-center items-center translate-y-[-20px] h-20 z-30'
            loop={true}
          />
        </div>
      </button>
    </div>
  );
}

export default ArrowAnimation;
