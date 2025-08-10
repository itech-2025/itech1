import { useState, useEffect } from "react"
import hand2 from "../assets/img/hand (1).webp"
import hand1 from "../assets/img/hand (2).webp"
import circle from "../assets/img/circle.webp"
import image from "../assets/img/about_section.webp"
import { MovingDivRight } from "../component/MovingDivs"
import { motion } from "motion/react"
import { useTranslation } from 'react-i18next';
import i18next from "i18next"
const About = () => {
const { t } = useTranslation();

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const updateSize = () =>
        setIsSmallScreen(window.innerWidth >= 1480); // Tailwind's lg = 1024px
        updateSize();

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

  return (
    <section className='flex flex-col'>
    {/*Your journey with our company section content*/}
    {/*header div move to the bottom*/}
        <motion.div dir="rtl"
            initial={{y:-120, opacity:0}}
            whileInView={{y:0, opacity:1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{once:true}} >
                <div className='w-full xlscreen:h-72 md:h-50 h-40 bg-dark-primary'/>
                {/*edge styling */}
                <div className="flex justify-between -mt-2">
                    <div className="xlscreen:w-15 md:w-10 sm:w-5 w-4 h-10 bg-dark-primary rounded-bl-2xl "></div>
                    <div className="xlscreen:w-15 md:w-10 sm:w-5 w-4 h-10 bg-dark-primary rounded-br-2xl"></div>
                </div>
                {/*white div for styling */}
                <div className='h-72 xlscreen:mx-15 md:mx-10 sm:mx-5 mx-4 bg-white -mt-40 p-3 rounded-3xl'/>
        </motion.div>
        {/*content*/}
        <motion.div
            initial={{scaleY:0 }}
            whileInView={{scaleY:1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{once:true}}
            className='xlscreen:h-160 lg:h-130 md:h-90 sm:h-70 h-50 sm:-mt-69 -mt-70 bg-dark-primary rounded-3xl relative overflow-hidden xlscreen:mx-18 md:mx-13 sm:mx-8 mx-6'>
                <motion.div
                    initial={{x: -300, y:-90, opacity:0, rotate:-20 }}
                    whileInView={{x: 0, y:0, opacity:1, rotate:0 }}
                    transition={{ duration: 1, ease: "easeOut", delay:1.7 }}
                    viewport={{once:true}}
                    className="xlscreen:h-fit xlscreen:w-fit lg:w-160 md:w-115 sm:w-90 hidden sm:block absolute left-2 top-0">
                    <img loading="lazy" src={hand1}/>
                </motion.div>
                <motion.div
                    initial={{x: 600, y:180, opacity:0, rotate:-20 }}
                    whileInView={{x: 0, y:0, opacity:1, rotate:0 }}
                    transition={{ duration: 1, ease: "easeOut", delay:1.7 }}
                    viewport={{once:true}}
                    className="xlscreen:h-fit xlscreen:w-fit lg:w-160 md:w-115 sm:w-90 hidden sm:block absolute bottom-0 right-2">
                    <img loading="lazy" src={hand2}/>
                </motion.div>
                <motion.div //circle image in the middle
                        initial={{scale:0 }}
                        whileInView={{scale:1 }}
                        transition={{ duration: 1, ease: "easeOut", delay:2 }}
                        viewport={{once:true}}
                        className="xlscreen:h-70 lg:h-60 md:h-45 sm:h-35 h-23 xlscreen:w-70 lg:w-60 md:w-45 sm:w-35 w-23 rounded-full absolute top-[53%] left-[50%] translate-[-50%] overflow-hidden">
                    <motion.img loading="lazy"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{duration: 5, ease: "easeOut", delay:1.6, repeat: Infinity, foreverrepeatType: "loop"}}
                        src={circle} className=" object-contain" />
                </motion.div>
                <motion.div //top text
                    initial={{y:100, opacity:0 }}
                    whileInView={{y:0 ,opacity:1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay:2.8 }}
                    viewport={{once:true}}
                    className="absolute md:right-10 sm:right-5 right-3 lg:top-15 sm:top-5"
                >
                    <h6 className="text-gray-300 md:text-lg lg:text-2xl text-sm font-light font-['Montserrat-Arabic'] leading-[48px]">{t("home.about.heading")}</h6>
                    <p className="lg:w-96 sm:w-60 text-white md:text-2xl lg:text-4xl text-sm font-normal leading-normal font-['Montserrat-Arabic']">{t("home.about.subheading")}</p>
                </motion.div>
                <motion.div //bottom text
                    initial={{y:-100, opacity:0 }}
                    whileInView={{y:0 ,opacity:1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay:3.9 }}
                    viewport={{once:true}}
                    className={`absolute ${i18next.language==='ar'? "xl:left-2 xlscreen:left-10 md:-left-1 left-1 xlscreen:bottom-15 md:bottom-5 sm:bottom-4 bottom-1":"xl:left-2 xlscreen:left-10 md:-left-1 left-4 xlscreen:bottom-15 md:bottom-5 sm:bottom-4 bottom-1"} xl:w-90 xlscreen:w-[458px] lg:w-90 md:w-70 sm:w-60 w-50`}>
                        <span className="text-gray-300 lg:text-xl md:text-md sm:text-sm text-[11px] font-normal font-['Montserrat-Arabic'] leading-loose">{t("home.about.description.span1")}</span>
                        <span className="text-white lg:text-xl md:text-md sm:text-sm text-[11px] font-bold font-['Montserrat-Arabic'] leading-loose">{t("home.about.description.span2")}</span>
                        <span class="text-gray-300 lg:text-xl md:text-md sm:text-sm text-[11px] font-normal font-['Montserrat-Arabic'] leading-loose">{t("home.about.description.span3")}</span>
                        <span className="text-white lg:text-xl md:text-md sm:text-sm text-[11px] font-bold font-['Montserrat-Arabic'] leading-loose">{t("home.about.description.span4")}</span>
                </motion.div>

        </motion.div>
        {/*about us section content */}
        <div className="lg:mx-18 md:mx-10 mx-4 bg-white">
            <MovingDivRight 
            text={t("home.about.text")} 
            subText={t("home.about.subtext")} 
            image={image} buttonText={t("home.about.buttontext")}
            className="bg-secondary text-gray-700 border-gray-800"
            style2="border-primary text-primary bg-transparent group-hover:bg-white"
            style1="border-primary text-primary"
            transparent="bg-white"
            url="about"
            />
        </div>
    </section>
  )
}
export default About