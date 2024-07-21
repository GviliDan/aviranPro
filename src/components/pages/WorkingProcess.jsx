import React from 'react';

const WorkingProcess = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-12 px-4'>
      <div className='flex flex-col items-center text-center gap-8 max-w-4xl fade-in-section'>
        <div className='flex flex-col items-center gap-3'>
          <span className='text-4xl font-semibold text-title fade-in' lang='en'>
            She Said Yes !
          </span>
          <span className='text-3xl font-semibold text-title fade-in' dir='rtl'>
            מה עכשיו?
          </span>
        </div>

        <div className='flex flex-col items-center gap-12' dir='rtl'>
          <div className='flex flex-col items-center gap-4'>
            <span className='text-2xl md:text-3xl font-bold text-title fade-in'>
              פגישה 1: אספרסו ומכירים
            </span>
            <span className='text-xl md:text-2xl text-title fade-in'>
              או כוס יין, אנחנו זורמים
            </span>
            <p className='text-lg md:text-xl fade-in'>
              נכיר אתכם לעומק- מה חשוב לכם, מה הסטייל שלכם, איך תרצו שהחתונה שלכם תראה ותרגיש? נגלה ביחד את כל אלו ועוד ונבין איך כולם ישתלבו בחתונה שלכם בצורה הכי מדויקת שיש.
            </p>
          </div>

          <div className='w-full border-t border-line my-4 fade-in'></div>

          <div className='flex flex-col items-center gap-4'>
            <span className='text-2xl md:text-3xl font-bold text-title fade-in'>
              פגישה 2: בול במקום
            </span>
            <p className='text-lg md:text-xl fade-in'>
              סיור לוקיישנים (לא ארוך, מבטיחים) בסופו נבחר את המקום המושלם לאירוע, תוך התחשבות בכל הפרטים החשובים: שיתאימו למשפחה ולכמות האורחים, למזג האוויר ולאווירה המדויקת שאתם מדמיינים.
            </p>
          </div>

          <div className='w-full border-t border-line my-4 fade-in'></div>

          <div className='flex flex-col items-center gap-4'>
            <span className='text-2xl md:text-3xl font-bold text-title fade-in'>
              פגישה 3: מדברים מספרים
            </span>
            <p className='text-lg md:text-xl fade-in'>
              אף אחד לא אוהב הפתעות לא צפויות. נבנה ביחד תקציב מדויק לכל שלב ושלב, כדי שביום המיוחד תהיו שקטים ורגועים. תתרכזו בדבר היחיד שאתם צריכים לעשות - <span className='font-bold'>ליהנות.</span>
            </p>
          </div>

          <div className='w-full border-t border-line my-4 fade-in'></div>

          <div className='flex flex-col items-center gap-4'>
            <span className='text-2xl md:text-3xl font-bold text-title fade-in'>
              פגישה 4: עושים את זה בסטייל
            </span>
            <p className='text-lg md:text-xl fade-in'>
              מההזמנות ועד לסידורי הפרחים, נבחר את הקו העיצובי שיכניס את הסטייל שלכם לאירוע ויהפוך אותו לייחודי- כזה שהמשפחה והאורחים מדברים עליו גם אחרי חודשים.
            </p>
          </div>

          <div className='w-full border-t border-line my-4 fade-in'></div>

          <div className='flex flex-col items-center gap-4'>
            <span className='text-2xl md:text-3xl font-bold text-title fade-in'>
              פגישה 5: טעמים וזמנים
            </span>
            <p className='text-lg md:text-xl fade-in'>
              נבחר את התפריט עם המנות המושלמות, שיפגעו בול לטעם של כל הארוחים. ולקינוח, נתכנן לוח זמנים לאירוע שיבטיח שהכל יזרום חלק ומדויק לרמת הדקות. כבר אמרנו, לא אוהבים הפתעות לא צפויות.
            </p>
          </div>

          <div className='w-full border-t border-line my-4 fade-in'></div>

          <div className='flex flex-col items-center gap-4'>
            <span className='text-2xl md:text-3xl font-bold text-title fade-in'>
              פגישה 6: היום זה היום!
            </span>
            <p className='text-lg md:text-xl fade-in'>
              נגיע לאולם בשעות הבוקר כדי לוודא את כל הפרטים ולהבטיח שכולם מוכנים: הסקיצה שהכנו, התפריט המדויק, צוות המנהלים והמלצרים, העיצוב ולוחות הזמנים המדויקים. משם כל מה שנשאר זה רק להתארגן, לנסות להשתלט על הפרפרים בבטן ולהתכונן ליום הכי מרגש ומיוחד בחיים שלכם.
            </p>
            <p className='text-lg md:text-xl font-bold fade-in'>
              ומה לגבי האירוע עצמו ? אתם יכולים להיות רגועים: אנחנו נהיה שם בשבילכם בכל שלב באירוע: ללוות, להדריך, לדאוג לכל הפרטים ולא פחות חשוב, להרים!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
