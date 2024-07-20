import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';
import Loader from '../common/Loader';

const Gallery = () => {
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

  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const storageRef = ref(storage, 'עמוד גלריה');
      const imageRefs = await listAll(storageRef);
      const urls = await Promise.all(
        imageRefs.items.map((item) => getDownloadURL(item))
      );
      setGalleryImages(urls);
      setLoading(false);
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Carousel
      effect='fade'
      arrows={false}
      autoplay
      autoplaySpeed={2000}
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />}
    >
      {galleryImages.map((src, index) => (
        <div className='h-[70vh] md:h-[80vh]' key={index}>
          <img
            src={src}
            alt={`Description ${index + 1}`}
            className='w-full h-full object-cover'
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
