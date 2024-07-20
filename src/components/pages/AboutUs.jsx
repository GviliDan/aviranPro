import React, { useEffect, useState } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';
import Loader from '../common/Loader';

function AboutUs() {
  const [heroImage, setHeroImage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const storageRef = ref(storage, 'עמוד על עצמנו');
      const imageRefs = await listAll(storageRef);
      if (imageRefs.items.length > 0) {
        const firstImageRef = imageRefs.items[0];
        const firstImageUrl = await getDownloadURL(firstImageRef);
        setHeroImage([firstImageUrl]);
      }
      setLoading(false);
    };

    fetchHeroImage();
  }, []);

  const scrollToAboutUs = () => {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <div className='relative w-full'>
        <img
          src={heroImage[0]}
          alt='Description'
          className='w-full h-[calc(100vh-62px)] md:h-[calc(100vh-85px)] object-cover'
        />
        <div className='absolute bottom-4 flex justify-center w-full'>
          <button onClick={scrollToAboutUs} className='scroll-down-arrow'>
            &#8595;
          </button>
        </div>
      </div>
      <div
        id='about-us'
        className='flex flex-col items-center py-12 px-2 text-center'
      >
        <div className='flex flex-col gap-8 max-w-4xl' dir='rtl'>
          <span className='text-5xl text-title' lang='en'>
            ABOUT US
          </span>
          <div className='flex flex-col gap-4 md:text-2xl'>
            <span className='font-bold text-2xl'>קודם כל מזל טוב!</span>
            <span className='font-bold'>
              נעים להכיר: אבירן רוקח הפקת אירועים.
            </span>
            <p>
              אנחנו כאן כדי לשנות את כל מה שחשבתם על ארגון ותכנון יום החתונה.
              במקום כאבי ראש, לוחות זמנים צפופים, התעסקות עם חוזים, סגירת ספקים
              ו.. אתם כבר מבינים, אנחנו חושבים שבדיוק כמו האירוע, גם ההיערכות
              אליו יכולה וצריכה להיות חוויה בפני עצמה: חוויה מרגשת, כיפית והכי
              חשוב רגועה.
            </p>
            <span className='font-bold'>ובדיוק בשביל זה אנחנו כאן.</span>
            <p>
              מהדברים הגדולים והחשובים ועד לפרטים הקטנים שלא זכרתם שצריכים,
              אנחנו דואגים לכל פרט ולכל אורך הדרך- מהפגישה הראשונה ועד לכניסה
              לחופה, ועד לריקוד האחרון.
            </p>
            <span className='font-bold text-2xl'>שנצא לדרך?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
