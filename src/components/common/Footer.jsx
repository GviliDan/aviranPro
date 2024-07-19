import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import aviranLogo from '../../assets/images/aviranLogo.png';

const Footer = () => {
  return (
    <footer className='text-title py-8 px-4'>
      {/* Desktop Footer */}
      <div className='hidden md:flex flex-col items-center justify-center'>
        <div className='flex items-center space-x-2'>
          <a href='/about-us' className='hover:underline text-title'>
            ABOUT
          </a>
          <span className='text-title'>|</span>
          <a href='/working-process' className='hover:underline text-title'>
            WORKING PROCESS
          </a>
          <span className='text-title'>|</span>
          <a href='/projects' className='hover:underline text-title'>
            PROJECTS
          </a>
          <span className='text-title'>|</span>
          <a href='/destinations' className='hover:underline text-title'>
            DESTINATIONS
          </a>
          <span className='text-title'>|</span>
          <a href='/gallery' className='hover:underline text-title'>
            GALLERY
          </a>
          <span className='text-title'>|</span>
          <a href='/contact-us' className='hover:underline text-title'>
            CONTACT US
          </a>
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
          &copy; ALL RIGHTS RESERVED TO SKY PRODUCTIONS 2018-2021
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
          &copy; ALL RIGHTS RESERVED TO SKY PRODUCTIONS 2018-2021
        </p>
        <div className='mt-4 text-center'>
          <a href='/newsletter' className='block mb-2 hover:underline text-title'>
            SIGN UP TO OUR NEWSLETTER
          </a>
          <a href='/contact-us' className='block hover:underline text-title'>
            CONTACT US
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
