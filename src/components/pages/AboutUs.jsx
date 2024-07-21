import React from 'react';
import ArrowAnimation from '../common/ArrowAnimation';
import aboutUsHero from '../../assets/images/aboutUsHero.jpeg';

function AboutUs() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <div className='relative w-full'>
        <img
          src={aboutUsHero}
          alt='Description'
          className='w-full h-[calc(100vh-62px)] md:h-[calc(100vh-85px)] object-cover fade-in'
        />
        <ArrowAnimation />
      </div>
      <div
        id='about-us'
        className='flex flex-col items-center py-12 px-2 text-center fade-in-section'
      >
        <div className='flex flex-col gap-8 max-w-4xl' dir='rtl'>
          <span className='text-5xl text-title fade-in' lang='en'>
            ABOUT US
          </span>
          <div className='flex flex-col gap-4 md:text-2xl'>
            <span className='font-bold text-2xl fade-in'>קודם כל מזל טוב!</span>
            <span className='font-bold fade-in'>
              נעים להכיר: אבירן רוקח הפקת אירועים.
            </span>
            <p className='fade-in'>
              אנחנו כאן כדי לשנות את כל מה שחשבתם על ארגון ותכנון יום החתונה.
              במקום כאבי ראש, לוחות זמנים צפופים, התעסקות עם חוזים, סגירת ספקים
              ו.. אתם כבר מבינים, אנחנו חושבים שבדיוק כמו האירוע, גם ההיערכות
              אליו יכולה וצריכה להיות חוויה בפני עצמה: חוויה מרגשת, כיפית והכי
              חשוב רגועה.
            </p>
            <span className='font-bold fade-in'>
              ובדיוק בשביל זה אנחנו כאן.
            </span>
            <p className='fade-in'>
              מהדברים הגדולים והחשובים ועד לפרטים הקטנים שלא זכרתם שצריכים,
              אנחנו דואגים לכל פרט ולכל אורך הדרך- מהפגישה הראשונה ועד לכניסה
              לחופה, ועד לריקוד האחרון.
            </p>
            <span className='font-bold text-2xl fade-in'>שנצא לדרך?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
