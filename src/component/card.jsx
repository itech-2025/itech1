import { motion } from "motion/react"
import i18next from "i18next"
//blue card use on different pages like about section and page
const RightCard = ({image, text, subText, className = "", delay = 0, width="", padding=""}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration: 1, delay:delay, ease: "easeOut" }}
    viewport={{once:true}} 
    className={`flex xlscreen:justify-start xl:justify-end justify-center ${className}`}>
        <div dir={i18next.language==='ar' ? "rtl":"ltr"} className={`bg-white/10 backdrop-blur-[2px] rounded-2xl ${padding}`}>
            <div className="text-white md:text-xl text-lg font-normal font-['Montserrat-Arabic'] leading-loose mb-2">{text}</div>
            <div className={`text-white md:text-base text-sm font-light font-['Montserrat-Arabic'] leading-normal ${width}`}>{subText}</div>
        </div>
        <div className="flex flex-col justify-center">
            <div className="w-19 h-19 rounded-r-full bg-dark-primary backdrop-blur-[2px] -mr-16">
                <img loading="lazy" src={image} className="md:w-full md:h-full w-[90%] h-[90%] object-cover mr-3 md:mt-0 mt-0.5" />
                <div className="w-5 h-9 relative bg-transparent border border-transparent rounded-bl-2xl shadow-[0px_20px_0px_0px_rgba(0,13,38)] mr-11 md:-mt-28 -mt-26.5  -z-1" />
                <div className="w-5 h-9 relative bg-transparent border border-transparent rounded-tl-2xl shadow-[0px_-20px_0px_0px_rgba(0,13,38)] mr-11 mt-19 -z-1" />
            </div>
        </div>
    </motion.div>    
  )
}

const LeftCard =({image, text, subText, className = "" , delay = 0, width="", padding="" }) =>{
    return(
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 1, delay:delay, ease: "easeOut" }}
        viewport={{once:true}}
        className={`flex xlscreen:justify-end xl:justify-start justify-center -mt-15 ${className}`}>
            <div className="flex flex-col justify-center z-10 ">
                <div className="w-19 h-19 rounded-l-full bg-dark-primary backdrop-blur-[2px] -ml-16">
                    <img src={image} className="md:w-full md:h-full w-[90%] h-[90%] object-cover md:-mr-3 md:mt-0 mt-0.5" />
                    <div className="w-5 h-9 relative bg-transparent border border-transparent rounded-br-2xl shadow-[0px_20px_0px_0px_rgba(0,13,38)] mr-3 md:-mt-28 -mt-26 -z-1" />
                    <div className="w-5 h-9 relative bg-transparent border border-transparent rounded-tr-2xl shadow-[0px_-20px_0px_0px_rgba(0,13,38)] mr-3 md:mt-19 mt-17.5 -z-1" />
                </div>
            </div>
            <div className={`bg-white/10 backdrop-blur-[2px] rounded-2xl ${padding}`}>
                <div className="text-white md:text-xl text-lg font-normal font-['Montserrat-Arabic'] leading-loose mb-2">{text}</div>
                <div className={`text-white md:text-base text-sm font-light font-['Montserrat-Arabic'] leading-normal  ${width}`}>{subText}</div>
            </div>  
        </motion.div>  
    )
}

export {RightCard, LeftCard}