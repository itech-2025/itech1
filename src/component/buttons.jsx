import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const LoadButton = ({ className="",className1="",className2="", arabic="", english=""}) => {
const { t } = useTranslation();
const [isTouched, setIsTouched] = useState(false); // Track touch interaction
    return (
        <button 
        dir={i18next.language === 'ar' ? 'rtl' : 'ltr'}    
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)} 
        className={`group cursor-pointer relative ${i18next.language=='en'?"pr-2":"pl-2"} py-2 inline-flex items-center bg-gradient-to-b from-primary to-primary/85 overflow-hidden rounded-full border border-b-primary-1/40 border-x-primary-1 border-t-primary-1 hover:gap-4 group-hover:gap-3 ${className}`}>
            <div className={`max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:text-white transition-all duration-300 text-center justify-start ${i18next.language === 'ar' ? `text-base group-hover:max-w-[10rem] group-hover:mr-2 ${arabic}` : `text-lg group-hover:max-w-[15rem] group-hover:ml-2 ${english}`} px-1 pb-1 z-10  whitespace-nowrap ${className1}`}>{t("home.cta2")}</div>
            <div className={`w-10 h-10 relative overflow-hidden border border-b-primary-1/40 border-x-primary-1/70 border-t-primary-1/90 rounded-full z-1 group-hover:bg-white text-white group-hover:text-primary-3 ${className2}`}> 
                <FontAwesomeIcon icon={faArrowLeft} size="lg" className="left-[8.50px] top-[8.50px] absolute transform rotate-40 duration-300"/>
            </div> 
        </button>
    );
};

const AdminButton = ({ text , className1="",className2="", hoverColor, textColor, goTo="/"}) => {
    const handleClick = () => {
        window.location.href = goTo; // Navigate to target URL (full page reload)
    };
    return (
        <button onClick={handleClick} dir={i18next.language === 'ar' ? 'rtl' : 'ltr'}  className={`relative cursor-pointer group px-1 py-1 rounded-full inline-flex justify-center items-center gap-2 overflow-hidden border hover:border-b-primary transition hover:delay-130 hover:border-x-primary-1 hover:border-t-primary-1  ${className1}`}>
            <div className={`text-center justify-start text-base bold-arabic px-1 pb-1 z-1 group-hover:text-white ${textColor}`}>{text}</div>
            <div className={`w-8 h-8 relative overflow-hidden border rounded-full z-1 ${className2}`}> 
                <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 left-[5.7px] top-[7.6px] absolute transform rotate-40 duration-300"/>
            </div> 
            <span className={`absolute bottom-0 left-1/2 w-0 h-0 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 ease-out group-hover:w-90 group-hover:h-90 z-0 ${hoverColor}`} />
        </button>
    );
};


// Exporting components correctly
export { LoadButton, AdminButton };
