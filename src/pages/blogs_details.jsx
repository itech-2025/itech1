import { useParams } from 'react-router-dom';
import SectionsHeader from '../component/sectionsHeader';
import { allblogsItems } from './blogs'; // make sure this is exported correctly
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const BlogDetails = () => {
    const { t } = useTranslation();
    const { id } = useParams(); // Get blog ID from URL parameters
    const currentId = parseInt(id);// Convert ID from string to number
    const currentIndex = allblogsItems.findIndex(n => n.id === currentId);// Find index of current blog
    const currentblogs = allblogsItems[currentIndex];// Get current blog object
    const handleHome = () => { // Navigate to the main blogs page
        window.location.href = `/blogs`; 
    };
    // Get previous blog using circular indexing
    const prevblogs = allblogsItems[
        (currentIndex - 1 + allblogsItems.length) % allblogsItems.length
    ];
    // Navigate to previous blog
     const handleprev = () => {
        window.location.href = `/blogs/${prevblogs.id}`; 
    };
    // Get next blog using circular indexing
    const nextblogs = allblogsItems[
        (currentIndex + 1) % allblogsItems.length
    ];
    // Navigate to next blog
     const handlenext = () => {
        window.location.href = `/blogs/${nextblogs.id}`; 
    };
    // If blog not found, show fallback message
    if (!currentblogs) return <p className="text-center mt-10">المدونة غير موجود</p>;
  return (
    <>
      {/*header for every blog page*/}
        <SectionsHeader
            description={t(currentblogs.title)}
            image={currentblogs.image}
            description1={t(currentblogs.maindetails)}
            content={t(currentblogs.content, { returnObjects: true })}
            className='object-top'
            block="hidden"
            fontstyle='text-gray-800 text-2xl md:text-4xl font-normal leading-[54px]'
            namestyle='px-4 py-1 bg-gray-100 rounded-lg gap-2.5 overflow-hidden text-gray-900 text-base font-normal leading-normal tracking-tight'
      />
      {/*navigate between blogs*/}
         <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
            <li dir='rtl' className="flex flex-col md:items-end items-center text-center">
                <button
                    onClick={handlenext}
                    className="group w-18 cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden"
                >
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                            {t("blogs.next")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("blogs.name")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                            {t(nextblogs.title)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={nextblogs.image}
                    alt={t(nextblogs.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
            <div className="md:mt-15">
                <button onClick={handleHome} className="flex items-center justify-end gap-2 hover:text-primary cursor-pointer">
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
                        {t("blogs.prev")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("blogs.name")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30  truncate">
                            {t(prevblogs.title)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={prevblogs.image}
                    alt={t(prevblogs.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
        </div>
    </>
  );
};

export default BlogDetails;
