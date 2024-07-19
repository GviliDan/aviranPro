import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import aviranLogo from '../../assets/images/aviranLogo.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className='text-title py-8 px-4'>
      {/* Desktop Footer */}
      <div className='hidden md:flex flex-col items-center justify-center'>
        <div className='flex items-center space-x-2'>
          <span
            onClick={() => handleNavigation('/about-us')}
            className='hover:underline cursor-pointer text-title'
          >
            ABOUT
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation('/working-process')}
            className='hover:underline cursor-pointer text-title'
          >
            WORKING PROCESS
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation('/projects')}
            className='hover:underline cursor-pointer text-title'
          >
            PROJECTS
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation('/destinations')}
            className='hover:underline cursor-pointer text-title'
          >
            DESTINATIONS
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation('/gallery')}
            className='hover:underline cursor-pointer text-title'
          >
            GALLERY
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation('/contact-us')}
            className='hover:underline cursor-pointer text-title'
          >
            CONTACT US
          </span>
        </div>
        <div className='mt-4'>
          <img src={aviranLogo} alt='Logo' className='h-24' />
        </div>
        <div className='flex items-center space-x-4 mt-4 text-title'>
          <a
            href='https://www.instagram.com/a.r___production?igshid=MXZjZWtoZnAzeTNpaA%3D%3D&utm_source=qr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a
            href='https://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faYoutube} size='2x' />
          </a>
        </div>
        <p className='mt-4 text-center text-title'>
        ALL RIGHTS RESERVED TO AVIRAN ROKACHE PRODUCTION
        </p>
      </div>

      {/* Mobile Footer */}
      <div className='flex flex-col items-center justify-center md:hidden text-title'>
        <img src={aviranLogo} alt='Logo' className='h-12' />
        <div className='flex items-center space-x-4 mt-4'>
          <a
            href='https://www.instagram.com/a.r___production?igshid=MXZjZWtoZnAzeTNpaA%3D%3D&utm_source=qr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a
            href='https://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faYoutube} size='2x' />
          </a>
        </div>
        <p className='mt-4 text-center text-title'>
          ALL RIGHTS RESERVED TO AVIRAN ROKACHE PRODUCTION
        </p>
        <div className='mt-4 text-center'>
          <span
            onClick={() => handleNavigation('/contact-us')}
            className='block hover:underline cursor-pointer text-title'
          >
            CONTACT US
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
