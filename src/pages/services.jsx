import {useParams } from 'react-router-dom';
import { useState } from 'react';
import SectionsHeader from '../component/sectionsHeader';

import subtract1 from "../assets/img/subtract (2).webp"
import subtract2 from "../assets/img/subtract (1).webp"
import subtract3 from "../assets/img/subtract (3).webp"
import subtract4 from "../assets/img/subtract (4).webp"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
export const allservicesItems = [
    {id:"consulting",text: "services.1.text",image: subtract1,details:"services.1.details"},
    {id:"contracting",text: "services.2.text",image: subtract2,details:"services.2.details",},
    {id:"maintenance",text: "services.3.text",image: subtract3,details:"services.3.details",},
    {id:"upgrade",text: "services.4.text",image: subtract4,details:"services.4.details",}
    ]
const Services = () => {
    const { t }= useTranslation()
    const [currentPage, setCurrentPage] = useState(1);
    allservicesItems.slice(
        (currentPage - 1),
        currentPage
    );
    const { id } = useParams();
    const currentId = id;
    const currentIndex = allservicesItems.findIndex(n => n.id === currentId);
    const currentservices = allservicesItems[currentIndex];

    const prevservices = allservicesItems[
        (currentIndex - 1 + allservicesItems.length) % allservicesItems.length
    ];
    const nextservices = allservicesItems[
        (currentIndex + 1) % allservicesItems.length
    ];
    const handleprev = () => {
        window.location.href = `/${prevservices.id}`; 
    };
    const handlenext = () => {
        window.location.href = `/${nextservices.id}`; 
    };
    if (!currentservices) return <p className="text-center mt-10">الخدمة غير موجود</p>;
  return (
    <>{/*header*/}
        <SectionsHeader
        name={t(currentservices.text)}
        description={t(currentservices.details)}
        image={currentservices.image}
        namestyle='text-white'
      /> {/*navigation between the services*/}
      <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
            <li dir='rtl' onClick={handlenext} className="group cursor-pointer flex flex-col md:items-end items-center text-center">
                <button className="w-18 cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 group-hover:border-b-primary-2 overflow-hidden">
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                            {t("services.next")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("services.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                            {t(nextservices.text)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={nextservices.image}
                    alt={t(nextservices.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
            <div className="md:mt-15">
                <div className="flex items-center justify-end gap-2 hover:text-primary">
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
                </div>
            </div>
            <li onClick={handleprev} className="group cursor-pointer flex flex-col md:items-end items-center text-center">
                <button className={`${i18next.language==='en'?"w-25":"w-18"} cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 group-hover:border-b-primary-2 overflow-hidden`}>
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform -translate-x-3 group-hover:translate-x-1 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                        {t("services.prev")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("services.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose w-50 truncate">
                            {t(prevservices.text)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={prevservices.image}
                    alt={t(prevservices.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
        </div>
    </>
  )
}

export default Services