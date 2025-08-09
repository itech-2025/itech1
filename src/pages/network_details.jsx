import { useParams, useNavigate } from 'react-router-dom';
import { BlueListDev } from '../component/listDev';
import SectionsHeader from '../component/sectionsHeader';
import { allnetworkItems } from "./network";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const Network_details = () => {
    const { i18n, t } = useTranslation();
    const isArabic = i18n.language === 'ar'; // Check if current language is Arabic
    const { id } = useParams();// Get network item ID from URL
    const currentId = id; // Current item ID
    const currentIndex = allnetworkItems.findIndex(n => n.id === currentId);// Find index of current item
    const currentnetwork = allnetworkItems[currentIndex];// Get current item object
    const handleHome = () => { // Navigate to network home page
        window.location.href = `/network`; 
    };
    const prevnetwork = allnetworkItems[ // Get previous item using circular indexing
    (currentIndex - 1 + allnetworkItems.length) % allnetworkItems.length
  ];
    const handleprev = () => {// Navigate to previous item
        window.location.href = `/network/${prevnetwork.id}`; 
    };
  const nextnetwork = allnetworkItems[// Get next item using circular indexing
    (currentIndex + 1) % allnetworkItems.length
  ];
  const handlenext = () => {// Navigate to next item
        window.location.href = `/network/${nextnetwork.id}`; 
    };// Fallback message if item not found
  if (!currentnetwork) return <p className="text-center mt-10">الخدمة غير موجود</p>;
  return (
    <> {/*network solutions header*/}
        <SectionsHeader
        name={t(currentnetwork.text)}
        description={t(currentnetwork.details)}
        description1={isArabic ? undefined : t(currentnetwork.details1)}
        description2={isArabic ? undefined : t(currentnetwork.details2) }
        image={currentnetwork.image}
        namestyle='text-white'
        className='object-fill'
      />
      <BlueListDev
            title={t(currentnetwork.feature)}
            content={t(currentnetwork.content, { returnObjects: true })}
        /> {/*navigation between the network solutions*/}
         <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
            <li dir='rtl' className="flex flex-col md:items-end items-center text-center">
                <button
                    onClick={handlenext}
                    className="group w-18 text-lg font-light font-['Montserrat-Arabic'] cursor-pointer border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden"
                >
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                            {t("network.next")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("network.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                            {t(nextnetwork.text)}
                        </div>
                    </div>
                    <img
                    src={nextnetwork.image}
                    alt={t(nextnetwork.text)}
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
                        {t("network.prev")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("network.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30  truncate">
                            {t(prevnetwork.text)}
                        </div>
                    </div>
                    <img
                    src={prevnetwork.image}
                    alt={t(prevnetwork.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
        </div>
    </>
  );
}

export default Network_details