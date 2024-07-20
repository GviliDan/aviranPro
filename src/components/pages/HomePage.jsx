import React, { useEffect, useState } from 'react';
import ArrowAnimation from '../common/ArrowAnimation';
import CardHomePage from '../common/CardHomePage';
import { PageTitles, Routes } from '../../enums';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';

const HomePage = () => {
  const [cardsImages, setCardsImages] = useState([]);
  const [heroImage, setHeroImage] = useState([]);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const storageRef = ref(storage, 'תמונה ראשית בדף הבית');
      const imageRefs = await listAll(storageRef);
      if (imageRefs.items.length > 0) {
        const firstImageRef = imageRefs.items[0];
        const firstImageUrl = await getDownloadURL(firstImageRef);
        setHeroImage([firstImageUrl]);
      }
    };

    const fetchCardImages = async () => {
      const storageRef = ref(storage, 'כרטיסיות בדף הבית');
      const imageRefs = await listAll(storageRef);
      const urls = await Promise.all(
        imageRefs.items.map((item) => getDownloadURL(item))
      );
      setCardsImages(urls);
    };

    fetchHeroImage();
    fetchCardImages();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='relative w-full'>
        <img
          src={heroImage}
          alt='Description'
          className='w-full h-[calc(100vh-62px)] md:h-[calc(100vh-85px)] object-cover'
        />
        <ArrowAnimation />
      </div>
      <div
        id='about-us'
        className='flex flex-col items-center pt-12 px-2 text-center'
      >
        <div className='flex flex-col gap-4 md:text-2xl md:max-w-4xl'>
          <span className='text-3xl text-title'>השראה</span>
          <p>
            נוגעת בכל פרט, מהבחירות האסתטיות של עיצוב המקום ועד למילים החמות של
            הנדרים. היא מזכירה לנו שהחתונה היא לא רק אירוע, אלא תחילתו של מסע
            משותף, מסע של בניית זיכרונות, התגברות על מכשולים וחגיגת כל רגע קטן
            וגדול יחד.
          </p>
          <div className='flex flex-col md:flex-row w-full md:justify-center items-center gap-8 py-12'>
            <CardHomePage
              imageSrc={cardsImages[0]}
              text={PageTitles.GALLERY}
              path={Routes.GALLERY}
            />
            <CardHomePage
              imageSrc={cardsImages[1]}
              text={PageTitles.PROJECTS}
              path={Routes.PROJECTS}
            />
            <CardHomePage
              imageSrc={cardsImages[2]}
              text={PageTitles.WORKING_PROCESS}
              path={Routes.WORKING_PROCESS}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
