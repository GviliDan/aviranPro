import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconHamburger } from '../../assets/icons/index';
import DrawerMenu from './DrawerMenu';

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-background shadow-md z-10'>
        <div
          onClick={() => navigate('/')}
          className='w-full h-[62px] md:h-[85px] flex justify-center items-center relative'
          style={{ cursor: 'pointer' }}
        >
          <h1 lang='en' className='text-xl md:text-5xl font-medium text-title pl-3'>
            Aviran Rokache Productions
          </h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showDrawer();
            }}
            className='absolute left-4 top-1/2 transform -translate-y-1/2'
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <IconHamburger className='w-8 h-8 md:w-12 md:h-12' />
          </button>
        </div>
      </header>
      <DrawerMenu open={open} onClose={onClose} />
    </>
  );
}

export default Header;
