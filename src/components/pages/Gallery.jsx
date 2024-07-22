import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';
import Loader from '../common/Loader';
import useDeviceType from '../../hooks/useDeviceType';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const isMobile = useDeviceType();

  useEffect(() => {
    const fetchImages = async (galleryRef) => {
      const storageRef = ref(storage, galleryRef);
      const imageRefs = await listAll(storageRef);
      const urls = await Promise.all(
        imageRefs.items.map((item) => getDownloadURL(item))
      );
      setImages(urls);
      setLoading(false);
    };

    const galleryRef = isMobile ? 'מובייל גלריה' : 'אינטרנט גלריה';
    fetchImages(galleryRef);
  }, [isMobile]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Carousel effect='fade' arrows autoplay autoplaySpeed={2000}>
      {images.map((src, index) => (
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
