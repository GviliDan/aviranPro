import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import aviranLogo from '../../assets/images/aviranLogo.png';

const ContactUs = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4'>
      <h1 className='text-5xl font-bold mb-12 text-title' lang='en'>
        CONTACT US
      </h1>
      <div className='flex flex-col items-center text-center gap-4 max-w-xl'>
        <p className='text-lg md:text-xl font-heebo'>TEL. 052-5167979</p>
        <p className='text-lg md:text-xl font-heebo'>aviranpro@outlook.com</p>

        <div className='flex flex-col items-center gap-4'>
          <div className='flex gap-6 mt-4'>
            <a
              href='https://www.instagram.com/a.r___production?igshid=MXZjZWtoZnAzeTNpaA%3D%3D&utm_source=qr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-4xl text-title' />
            </a>
            <a
              href='https://wa.me/+972525167979'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp className='text-4xl text-title' />
            </a>
            <a
              href='mailto:aviranpro@outlook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaEnvelope className='text-4xl text-title' />
            </a>
          </div>
        </div>

        <div className='w-full border-t border-line'></div>

        <div className='flex justify-center items-center'>
          <img src={aviranLogo} alt='Logo' className='h-48 w-48' />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
