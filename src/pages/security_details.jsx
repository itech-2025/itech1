import { useParams } from 'react-router-dom';
import { BlueListDev } from '../component/listDev';
import SectionsHeader from '../component/sectionsHeader';
import { allsecurityItems } from "./security";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const security_details = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const currentId = id;
    const currentIndex = allsecurityItems.findIndex(n => n.id === currentId);
    const currentsecurity = allsecurityItems[currentIndex];
        const handleHome = () => {
        window.location.href = `/security`; 
    };
    const prevsecurity = allsecurityItems[
    (currentIndex - 1 + allsecurityItems.length) % allsecurityItems.length
    ];
    const handleprev = () => {
        window.location.href = `/security/${prevsecurity.id}`; 
    };
    const nextsecurity = allsecurityItems[
    (currentIndex + 1) % allsecurityItems.length
    ];
    const handlenext = () => {
        window.location.href = `/security/${nextsecurity.id}`; 
    };
    if (!currentsecurity) return <p className="text-center mt-10">الخبر غير موجود</p>;
  return (
    <> {/*security details header*/}
        <SectionsHeader
        name={t(currentsecurity.text)}
        description={t(currentsecurity.details)}
        description1={t(currentsecurity.details1)}
        image={currentsecurity.image}
        namestyle='text-white'
      />
      {/*list*/}
      <BlueListDev
            title={t(currentsecurity.feature)}
            content={t(currentsecurity.content, { returnObjects: true })}
        />
        {/*navigation*/}
        <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
            <li dir='rtl' onClick={handlenext} className="group cursor-pointer flex flex-col md:items-end items-center text-center">
                <button className="w-18 cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden">
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                            {t("security.next")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("security.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                            {t(nextsecurity.text)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={nextsecurity.image}
                    alt={t(nextsecurity.text)}
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
            <li onClick={handleprev} className="group cursor-pointer flex flex-col md:items-end items-center text-center">
                <button className={`${i18next.language==='en'?"w-25":"w-18"} cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 group-hover:border-b-primary-2 overflow-hidden`}>
                    <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform -translate-x-3 group-hover:translate-x-1 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
                        <span className="-mt-2 text-3xl">›</span>
                        {t("security.prev")}
                        <span className="-mt-2 text-3xl">›</span>
                    </div>
                </button>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
                    <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
                        <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                            {t("security.title")}
                        </h2>
                        <div dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30  truncate">
                            {t(prevsecurity.text)}
                        </div>
                    </div>
                    <img loading="lazy"
                    src={prevsecurity.image}
                    alt={t(prevsecurity.text)}
                    className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
                    />
                </div>
            </li>
        </div>
    </>
  );
};


export default security_details