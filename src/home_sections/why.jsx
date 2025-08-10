import { useState, useEffect } from "react"
//import image
import image from "../assets/img/Subtract.webp"
import visor from "../assets/img/visor-duotone.svg"
import clock from "../assets/img/clock-user-duotone 1.svg"
import target from "../assets/img/target-duotone 1.svg"
import head from '../assets/img/head-circuit-duotone (1).svg'
import lightbulb from "../assets/img/lightbulb-duotone.svg"
import check from "../assets/img/check-circle-duotone.svg"

import { motion } from "motion/react"
import {LeftCard, RightCard} from "../component/card"
import { useTranslation } from "react-i18next"
import i18next from "i18next";

const Why = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const { i18n, t } = useTranslation();
    // Determine component and padding based on language
    const isArabic = i18n.language === 'ar';
    const cardConfig = isArabic
    ? { Component: LeftCard, padding: "py-6 md:pr-25 pr-18 pl-5 w-full xl:h-fit md:h-45", className:"mb-10" } // RTL
    : { Component: RightCard, padding: "py-6 md:pl-25 pl-18 pr-5 w-full xl:h-fit md:h-45", className:"mb-0" }; // LTR

    const { Component: CardComponent, padding, className } = cardConfig;

  useEffect(() => {
    const updateSize = () =>
      setIsLargeScreen(window.innerWidth >= 1480); // Tailwind's lg = 1024px
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    //why section in the home page
    <section dir='rtl' className='flex flex-col mx-auto lg:mt-30 mt-15 lg:px-18 md:px-9 px-4'>
        {isLargeScreen &&<motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[90vw] h-[72vh] overflow-hidden"
        >
            <img loading="lazy" src={image} className="w-full"/>
        </motion.div>}
        {isLargeScreen && <motion.div>
            <div className=" bg-dark-primary rounded-b-3xl">
                <div className="flex justify-between">
                    <div className="w-52 h-35 bg-dark-primary rounded-t-3xl -mt-28"></div>
                    <div className="w-52 h-35 bg-dark-primary rounded-t-2xl -mt-28"></div>
                </div>
                <div className="flex justify-between -mt-20">
                    <div className="w-5 h-13 mr-52 relative bg-transparent border border-transparent rounded-br-3xl shadow-[0px_20px_0px_0px_rgba(0,13,38)]" />
                    <div className="w-5 h-13 ml-52 relative bg-transparent border border-transparent rounded-bl-3xl shadow-[0px_20px_0px_0px_rgba(0,13,38)]" />
                </div>
                <div className="relative h-200 w-[70vw] m-auto">
                    <div>
                        <motion.div
                        initial={{opacity:0 ,rotate:60}}
                        whileInView={{opacity:1,rotate:-10 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{once:true}}
                        className="w-[585.26px] h-[583.99px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-between rounded-full border border-gray-700">
                            <div
                            className="w-3 h-3 -mt-1.5 bg-secondary-1 rounded-full">
                                <RightCard text={t("home.why.1.text")} subText={t("home.why.1.subtext")} image={visor} className="rotate-10 mr-7 -mt-15" delay={0.8} width={`${i18next.language === 'AR' ? 'w-56' : 'w-70'}`} padding="py-6 pl-25 pr-5" />
                            </div>
                            <div className="w-3 h-3 -mb-1.5 bg-secondary-1 rounded-full">
                                <LeftCard text={t("home.why.2.text")} subText={t("home.why.2.subtext")} image={clock} className="rotate-10 origin-bottom-right ml-7" delay={1.8} width={`${i18next.language === 'AR' ? 'w-56' : 'w-70'}`} padding="py-6 pr-25 pl-5" />
                            </div>
                        </motion.div>
                        <motion.div
                        initial={{opacity:0 ,rotate:80}}
                        whileInView={{opacity:1,rotate:-25 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{once:true}}
                        className="w-[499.02px] h-[497.89px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-start justify-around pr-9 rounded-full border border-gray-700 gap-15">
                            <div className="w-3 h-3 bg-secondary-1 rounded-full ">
                                <LeftCard text={t("home.why.3.text")} subText={t("home.why.3.subtext")} image={target} className="rotate-25 origin-bottom-right" delay={1} width={`${i18next.language === 'AR' ? 'w-56' : 'w-70'}`} padding="py-6 pr-25 pl-5" />
                            </div>
                            <div className="w-3 h-3 bg-secondary-1 rounded-full">
                                <LeftCard text={t("home.why.4.text")} subText={t("home.why.4.subtext")} image={head} className="rotate-25 origin-bottom -ml-1" delay={1.4} width="w-56" padding="py-6 pr-25 pl-5" />
                            </div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity:0 ,rotate:-180}}
                        whileInView={{opacity:1,rotate:-70 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{once:true}}
                        className="w-[351.49px] h-[350.61px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-between rounded-full border border-gray-700">
                            <div className="w-3 h-3 -mt-1.5  bg-secondary-1 rounded-full">
                                <RightCard text={t("home.why.5.text")} subText={t("home.why.5.subtext")} image={check} className={`rotate-70  ${i18next.language === 'AR' ? '-mt-20 mr-4' : '-mt-22 mr-10'} origin-center`} delay={1.2} width="w-56" padding="py-6 pl-25 pr-5" />
                            </div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity:0 ,rotate:-260}}
                        whileInView={{opacity:1,rotate:-220 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        viewport={{once:true}}
                        className="w-[313.32px] h-[311.50px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-center rounded-full border border-gray-700">
                            <div className="w-3 h-3 -mt-1.5 ml-73 bg-secondary-1 rounded-full">
                                <RightCard text={t("home.why.6.text")} subText={t("home.why.6.subtext")} image={lightbulb} className={`rotate-220 ${i18next.language === 'en' ? '-mt-58 -mr-20' : '-mt-48 -mr-16'}  origin-bottom-right`} delay={1.6} width={`${i18next.language === 'AR' ? 'w-56' : 'w-70'}`} padding="py-5 pl-25 pr-5" />
                            </div>
                            <motion.div 
                            dir={i18next.language === 'AR' ? 'rtl' : 'ltr'}
                            initial={{scale:0.5, opacity:0, rotate:260 }}
                            whileInView={{scale:1, opacity:1, rotate:220 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                            viewport={{once:true}}
                            className="w-72 text-center">
                                <span class="text-white/50 text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.why.span.1")}</span>
                                <span class="text-white text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.why.span.2")}</span>
                                <span class="text-white/60 text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.why.span.3")}</span>
                                <span class="text-white text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.why.span.4")}</span>
                                <span class="text-white/50 text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.why.span.5")}</span>
                            </motion.div>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
        </motion.div>}
        {/*if the screen >= 1480 show another style*/}
            {!isLargeScreen &&<div className=" bg-dark-primary mt-3 rounded-3xl py-10 md:px-10 px-5">
                <motion.div
                    dir={i18next.language==='ar' ? "rtl":"ltr"}
                    initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
                    whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='flex flex-col items-start gap-10'>
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.why.why_us")}</h1>
                    {/* line */}
                    <hr className={`self-stretch opacity-30 border-b border-gray-100 ${i18next.language==='ar'?"mb-30":" mb-10"}`}/>
                </motion.div>
                <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-15">
                    <CardComponent text={t("home.why.1.text")} subText={t("home.why.1.subtext")} image={visor} className={className} delay={0.8} padding={padding} width="mt-5" />
                    <CardComponent text={t("home.why.2.text")} subText={t("home.why.2.subtext")} image={clock} className={className} delay={1} padding={padding} width="mt-5" />
                    <CardComponent text={t("home.why.3.text")} subText={t("home.why.3.subtext")} image={target} className={className} delay={1.2} padding={padding} width="mt-5" />
                    <CardComponent text={t("home.why.4.text")} subText={t("home.why.4.subtext")} image={head} className={className} delay={1.4}  padding={padding} width="mt-5" />
                    <CardComponent text={t("home.why.5.text")} subText={t("home.why.5.subtext")} image={check} className={className} delay={1.6} padding={padding} width="mt-5" />
                    <CardComponent text={t("home.why.6.text")} subText={t("home.why.6.subtext")} image={lightbulb} className={className} delay={1.8} padding={padding} width="mt-5" />
                       
                </div>
            </div>}
    </section>
  )
}

export default Why