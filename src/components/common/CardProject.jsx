import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardProject = ({ title, image, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className='relative w-[330px] md:w-[468px] h-[300px] border border-gray-300 cursor-pointer group'
      onClick={handleClick}
    >
      <img src={image} alt={title} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-transparent group-hover:bg-white group-hover:bg-opacity-30 flex flex-col justify-center items-center text-white p-4 transition duration-300'>
        <div className='border-2 border-white px-4 py-2'>
          <h3 className='text-xl font-bold uppercase'>{title}</h3>
        </div>
        <div className='absolute inset-0 border border-white pointer-events-none'></div>
      </div>
    </div>
  );
};

export default CardProject;
