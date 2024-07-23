import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Routes, PageTitles } from '../../enums';
import aviranLogo from '../../assets/images/aviranLogo.png';

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className='text-title py-8 px-4'>
      {/* Desktop Footer */}
      <div className='hidden md:flex flex-col items-center justify-center'>
        <div className='flex items-center space-x-2'>
          <span
            onClick={() => handleNavigation(Routes.ABOUT_US)}
            className='hover:underline cursor-pointer text-title'
          >
            {PageTitles.ABOUT_US}
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation(Routes.WORKING_PROCESS)}
            className='hover:underline cursor-pointer text-title'
          >
            {PageTitles.WORKING_PROCESS}
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation(Routes.PROJECTS)}
            className='hover:underline cursor-pointer text-title'
          >
            {PageTitles.PROJECTS}
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation(Routes.GALLERY)}
            className='hover:underline cursor-pointer text-title'
          >
            {PageTitles.GALLERY}
          </span>
          <span className='text-title'>|</span>
          <span
            onClick={() => handleNavigation(Routes.CONTACT_US)}
            className='hover:underline cursor-pointer text-title'
          >
            {PageTitles.CONTACT_US}
          </span>
        </div>
        <div className='mt-4'>
          <img
            src={aviranLogo}
            alt='Logo'
            className='h-24 cursor-pointer'
            onClick={() => handleNavigation(Routes.HOME)}
          />
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
            href='https://wa.me/+972525167979'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faWhatsapp} size='2x' />
          </a>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className='flex flex-col items-center justify-center md:hidden text-title'>
        <img
          src={aviranLogo}
          alt='Logo'
          className='h-32 w-32'
          onClick={() => handleNavigation(Routes.HOME)}
        />
        <div className='flex items-center space-x-4 mt-4'>
          <a
            href='https://www.instagram.com/a.r___production?igshid=MXZjZWtoZnAzeTNpaA%3D%3D&utm_source=qr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a
            href='https://www.facebook.com/aviran.rokache?mibextid=ZbWKwL'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a
            href='https://wa.me/+972525167979'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faWhatsapp} size='2x' />
          </a>
        </div>
        <div className='mt-4 text-center'>
          <span
            onClick={() => handleNavigation(Routes.CONTACT_US)}
            className='block hover:underline cursor-pointer text-title'
          >
            {PageTitles.CONTACT_US}
          </span>
        </div>
      </div>

      {/* Common Footer Text */}
      <p className='mt-4 text-center text-title'>
        © ALL RIGHTS RESERVED TO AVIRAN ROKACHE PRODUCTION
      </p>
    </footer>
  );
};

export default Footer;
