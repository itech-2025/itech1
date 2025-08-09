import { useParams } from 'react-router-dom';
import SectionsHeader from '../component/sectionsHeader';
import { allNewsItems } from './news'; // make sure this is exported correctly
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const NewsDetail = () => {
    const { i18n, t } = useTranslation();
    const isArabic = i18n.language === 'ar'; // Check if current language is Arabic
    const { id } = useParams(); // Get news item ID from URL
    const currentId = id;// Current item ID
    const currentIndex = allNewsItems.findIndex(n => n.id === currentId);// Find index of current item
    const currentNews = allNewsItems[currentIndex];// Get current item object
    const handleHome = () => { // Navigate to news home page
        window.location.href = `/news`; 
    };
    const prevNews = allNewsItems[ // Get previous news item using circular indexing
        (currentIndex - 1 + allNewsItems.length) % allNewsItems.length
    ];
    const handleprev = () => { // Navigate to previous news item
        window.location.href = `/news/${prevNews.id}`; 
    };
     const handlenext = () => {// Navigate to next news item
        window.location.href = `/news/${nextNews.id}`; 
    };
    const nextNews = allNewsItems[// Get next news item using circular indexing
        (currentIndex + 1) % allNewsItems.length
    ];// Fallback message if item not found
    if (!currentNews) return <p className="text-center mt-10">الخبر غير موجود</p>;
  return (
    <> {/*news header*/}
        <SectionsHeader
        name={t(currentNews.date)}
        description={t(currentNews.title)}
        description1={t(currentNews.details)}
        description2={t(currentNews.details1)}
        description3={isArabic ? undefined : t(currentNews.details2) }
        image={currentNews.image}
        className='object-top'
        fontstyle='text-gray-800 lg:text-4xl md:text-2xl text-xl font-normal sm:leading-[54px] leading-[40px]'
        namestyle='px-4 py-1 bg-gray-100 rounded-lg gap-2.5 overflow-hidden text-gray-900 font-normal leading-normal tracking-tight lg:!text-4xl md:!text-2xl !text-lg'
      /> {/*navigation*/}
       <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
            <li dir='rtl' className="flex flex-col md:items-end items-center text-center">
                <button
                    onClick={handlenext}
                    className="group w-18 cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden"
                >
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                            {t("news.next")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("news.name")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                            {t(nextNews.title)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={nextNews.image}
                    alt={t(nextNews.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
            <div className="md:mt-15">
                <button onClick={handleHome} className="flex cursor-pointer items-center justify-end gap-2 hover:text-primary">
                    <span className="font-medium text-primary">
                        <div className='grid grid-cols-2 gap-0.5 group'>
                            {[1, 2].map((_) => (
                                <div className='h-2.5 w-2.5 border-2 group-hover:border-t-primary-2 group-hover:border-x-primary-1'/>
                            ))}
                            {[1, 2].map((_) => (
                                <div className='h-2.5 w-2.5 border-2 group-hover:border-t-primary-1 group-hover:border-x-primary'/>
                             ))}
                        </div>
                    </span>
                </button>
            </div>
            <li className="flex flex-col md:items-end items-center text-center">
                <button
                    onClick={handleprev}
                    className={`group ${i18next.language==='en'?"w-25":"w-18"} cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden`}
                >
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform -translate-x-3 group-hover:translate-x-1 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                        {t("news.prev")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("news.name")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30  truncate">
                            {t(prevNews.title)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={prevNews.image}
                    alt={t(prevNews.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
        </div>
    </>
  );
};

export default NewsDetail;
