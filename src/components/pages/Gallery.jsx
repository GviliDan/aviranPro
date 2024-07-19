import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import homePageImage from '../../assets/images/homePageImage.webp';
import aviranLogo from '../../assets/images/aviranLogo.png';

const images = [
  homePageImage,
  aviranLogo,
  homePageImage,
  aviranLogo,
  homePageImage,
  aviranLogo,
];

const CustomPrevArrow = ({ className, style, onClick }) => (
  <LeftOutlined
    className={`${className} custom-arrow`}
    style={{ ...style }}
    onClick={onClick}
  />
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <RightOutlined
    className={`${className} custom-arrow`}
    style={{ ...style }}
    onClick={onClick}
  />
);

const Gallery = () => (
  <Carousel
    effect='fade'
    arrows
    autoplay
    autoplaySpeed={2000}
    prevArrow={<CustomPrevArrow />}
    nextArrow={<CustomNextArrow />}
  >
    {images.map((src, index) => (
      <div className='h-[80vh]' key={index}>
        <img
          src={src}
          alt={`Description ${index + 1}`}
          className='w-full h-full object-cover'
        />
      </div>
    ))}
  </Carousel>
);

export default Gallery;
