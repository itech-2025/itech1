import { useState } from "react"
import {LoadButton} from "./buttons"
import { motion } from "motion/react"
import i18next from "i18next"
// InfoBlock component displays an interactive content block with image, text, and subtext it use in service section and psge
const InfoBlock = ({image, text, subtext, blockLine="", boxHeight="", className, goTo = "/"}) => {
   const handleClick = () => {
        window.location.href = goTo; // Navigate to target URL (full page reload)
    };
   const [isTouched, setIsTouched] = useState(false);
  return (
    <div onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}  
        onClick={handleClick}  className={`group cursor-pointer relative w-fit max-h-150 overflow-hidden border border-primary/20 rounded-3xl ${className}`}>
        {/* image */}
        <motion.div
          initial={{ clipPath: "inset(0% 0% 100% 0%)", filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", filter:"blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`relative z-0 lg:h-70 h-50 overflow-hidden rounded-2xl ${boxHeight}`}>
            <img loading="lazy" src={image} className={`w-full h-full object-cover object-center group-hover:scale-120 ${isTouched ? 'scale-120' : ''} duration-300 transition ease-in`}/>
        </motion.div>
        {/*content */}
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", filter:"blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        {/* Button container with dynamic width and language-based positioning */}
          <div className={`h-20 max-w-20 bg-white -mt-12 ${i18next.language==='en'?"ml-10":"mr-10"} relative z-1 flex justify-between items-center rounded-full group-hover:max-w-[13rem] ${isTouched ? 'max-w-[13rem]' : ''} transition-all duration-300`}>
            <div className={`w-5 h-10 ${i18next.language==='en'? "rounded-br-[20px] -ml-[18px]":"rounded-bl-[20px] -mr-[18px]"} -mt-6 relative bg-white/0 shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1`} />
              <LoadButton className={` ${isTouched ? 'gap-4' : ''}`} className1={`${isTouched ? 'text-white opacity-100' : ''}`} className2={`${isTouched ? 'bg-white !text-primary-3' : ''}`} arabic={`${isTouched ? "max-w-[10rem] mr-2" : ""}`} english={`${isTouched ? "max-w-[15rem] ml-2" : ""}`}/>
            <div className={`w-5 h-10 ${i18next.language==='en'? "-mr-[18px] rounded-bl-[20px]":"-ml-[18px] rounded-br-[20px]"} -mt-6 relative bg-white/0 shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1 `} />
          </div>
          {/* Text content section */}
          <div className="flex flex-col mx-9 sm:my-3 max-w-full">
              <h2 className="text-gray-900 lg:text-3xl sm:text-2xl text-lg font-normal font-['Montserrat-Arabic'] leading-10 line-clamp-2">{text}</h2>
              <hr className={`opacity-10 border-b border-gray-800 my-6 ${blockLine}`}/>
              <p className="flex-1 text-gray-600 text-lg font-light font-['Montserrat-Arabic'] leading-relaxed mb-9 line-clamp-3">{subtext}</p>
          </div>
        </motion.div>
    </div>
  )
}
// Infobox component displays a clickable card with an image, date, title, and details it use in news section and page
const Infobox = ({image, date, title, details, goTo = "/", className="", imagestyle=""}) => {
  const handleClick = () => {
        window.location.href = goTo; // Navigate to target URL (full page reload)
    };
  return (
    // Main container with click navigation and hover effects
    <div onClick={handleClick} className="group cursor-pointer relative h-160 w-full">
      <div dir={i18next.language === 'ar' ? 'rtl' : 'ltr'} className={`relative w-full max-h-full overflow-hidden border border-primary/20 bg-white rounded-3xl z-0 ${className}`}>
        {/*image */}
        <motion.div 
          initial={{ clipPath: "inset(0% 0% 100% 0%)", filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", filter:"blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[18rem] overflow-hidden rounded-3xl">
            <img loading="lazy" src={image} className={`w-full h-full object-cover object-center group-hover:scale-105 duration-300 transition ease-in ${imagestyle}`}/>
        </motion.div>
        {/*content*/}
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", filter:"blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10"
        >
        {/* Date badge with decorative edge */}
          <div  className={`h-20 md:max-w-[13rem] max-w-[9rem] bg-white -mt-12 relative z-1 flex justify-between items-center rounded-3xl`}>
                <div className={`text-gray-600 md:text-lg text-sm font-light font-['Montserrat-Arabic'] leading-relaxed ${i18next.language === 'ar' ? 'md:mr-10 mr-4' : 'md:ml-10 ml-4'} md:-mt-4 -mt-7`}>{date}</div>           
                <div className={`w-5 h-10 ${i18next.language === 'ar' ? 'rounded-br-[20px] md:-ml-[18px] -ml-[14px]' : 'rounded-bl-[20px] md:-mr-[19px] -mr-[15px]'}  -mt-6 relative bg-white/0 shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1`} />
          </div>
          {/* Title and details section */}
          <div className="flex flex-col gap-4 md:mr-9 mr-3 md:ml-4 ml-3 md:h-58 h-45">
            <div className="line-clamp-2">
              <h2 className="text-gray-700 md:text-[24px] text-lg font-normal font-['Montserrat-Arabic'] leading-10 block max-w-prose">{title}</h2>
            </div>
            <div className="line-clamp-2">
              <p className="flex-1 text-gray-600 md:text-lg text-sm font-light font-['Montserrat-Arabic'] leading-relaxed block max-w-prose ">{details}</p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Floating button with decorative edges and hover expansion */}
      <div className="h-20 min-w-20 bg-white -mt-12 absolute left-4 z-1 flex justify-between items-center rounded-full border-t border-primary/30  group-hover:min-w-[13rem] transition-all duration-300">
          <div className="w-5 h-10 -mr-[18.5px] -mt-[25px] relative bg-white/0 rounded-bl-[20px] border-b border-primary/30 shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1" />
          <LoadButton/>
          <div className="w-5.5 h-12 -ml-[16.5px] -mt-[89px] relative bg-white/0 rounded-bl-[20px] border-b-1 border-primary/30 shadow-[0px_29px_0px_0px_rgba(255,255,255,1)] z-1" />
      </div>
    </div>
  )
}

export {InfoBlock, Infobox}