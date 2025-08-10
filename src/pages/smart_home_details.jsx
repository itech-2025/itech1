import { useParams } from 'react-router-dom';
import { BlueListDev } from '../component/listDev';
import SectionsHeader from '../component/sectionsHeader';
import { allsmarthomeItems } from "./smart_home";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const Smart_home_details = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const currentId = id;
    const currentIndex = allsmarthomeItems.findIndex(n => n.id === currentId);
    const currentsmarthome = allsmarthomeItems[currentIndex];
     const handleHome = () => {
        window.location.href = `/smart_home`; 
    };
    const prevsmarthome = allsmarthomeItems[
    (currentIndex - 1 + allsmarthomeItems.length) % allsmarthomeItems.length
  ];
    const handleprev = () => {
        window.location.href = `/smart_home/${prevsmarthome.id}`; 
    };
  const nextsmarthome = allsmarthomeItems[
    (currentIndex + 1) % allsmarthomeItems.length
  ];
    const handlenext = () => {
        window.location.href = `/smart_home/${nextsmarthome.id}`; 
    };
  if (!currentsmarthome) return <p className="text-center mt-10">الخبر غير موجود</p>;
  return (
    <>{/*header*/}
        <SectionsHeader
            name={t(currentsmarthome.text)}
            description={t(currentsmarthome.details)}
            image={currentsmarthome.image}
            namestyle='text-white'
        />{/*list of feature*/}
        <BlueListDev
            title= {t("smart_home.feature")}
            content={t(currentsmarthome.content, { returnObjects: true })}
        />{/*navigation between smart_home solutions*/}
        <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
            <li dir='rtl' onClick={handlenext} className="group cursor-pointer flex flex-col md:items-end items-center text-center">
                <button className="w-18 cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 group-hover:border-b-primary-2 overflow-hidden">
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                            {t("smart_home.next")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("smart_home.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                            {t(nextsmarthome.text)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={nextsmarthome.image}
                    alt={t(nextsmarthome.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
            <div className="md:mt-15">
                <button onClick={handleHome} className="flex items-center cursor-pointer justify-end gap-2 hover:text-primary">
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
            <li onClick={handleprev} className="group cursor-pointer flex flex-col md:items-end items-center text-center">
                <button className={`${i18next.language==='en'?"w-25":"w-18"} cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 group-hover:border-b-primary-2 overflow-hidden`}>
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform -translate-x-3 group-hover:translate-x-1 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                        {t("smart_home.prev")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("smart_home.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose w-50 truncate">
                            {t(prevsmarthome.text)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={prevsmarthome.image}
                    alt={t(prevsmarthome.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
        </div>
    </>
  );
};


export default Smart_home_details