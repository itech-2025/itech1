import { motion } from "motion/react"
import { useState, useEffect } from "react"
import i18next from "i18next"

import SectionsHeader from '../component/sectionsHeader'
import { InfoBlock } from "../component/InfoBlock"
import {LeftCard, RightCard} from "../component/card"
//image
import image from "../assets/img/shield-check-duotone.svg"
import image1 from "../assets/img/smart_home (1).svg"
import image2 from "../assets/img/smart_home (2).svg"
import image3 from "../assets/img/smart_home (3).svg"
import image4 from "../assets/img/smart_home (4).svg"
import image5 from "../assets/img/solution_image (2).webp"

import subtract1 from "../assets/img/smart_home_img (2).webp"
import subtract2 from "../assets/img/smart_home_img (8).webp"
import subtract3 from "../assets/img/smart_home_img (7).webp"
import subtract4 from "../assets/img/smart_home_img (6).webp"
import subtract5 from "../assets/img/smart_home_img (5).webp"
import subtract6 from "../assets/img/smart_home_img (4).webp"
import subtract7 from "../assets/img/smart_home_img (3).webp"
import subtract8 from "../assets/img/smart_home_img (1).webp"
import { useTranslation } from "react-i18next"
export const allsmarthomeItems = [
      {id:"smart_light",image: subtract1,text:"smart_home.1.name",details:"smart_home.1.details",content:"smart_home.1.content"},
      {id:"smart_conditioner",image: subtract2,text:"smart_home.2.name",details:"smart_home.2.details",content:"smart_home.2.content"},
      {id:"smart_devices",image: subtract3,text:"smart_home.3.name",details:"smart_home.3.details",content:"smart_home.3.content"},
      {id:"smart_curtain",image: subtract4,text:"smart_home.4.name",details:"smart_home.4.details",content:"smart_home.4.content",},
      {id:"smart_sensors",image: subtract5,text:"smart_home.5.name",details:"smart_home.5.details",content:"smart_home.5.content"},
      {id:"smart_voice",image: subtract6,text:"smart_home.6.name",details:"smart_home.6.details",content:"smart_home.6.content"},
      {id:"smart_garage",image: subtract7,text:"smart_home.7.name",details:"smart_home.7.details",content:"smart_home.7.content"},
      {id:"smart_shading",image: subtract8,text:"smart_home.8.name",details:"smart_home.8.details",content:"smart_home.8.content"}
    ]
const Smart_home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { i18n, t } = useTranslation();
  // Determine component and padding based on language
  const isArabic = i18n.language === 'ar';
  const cardConfig = isArabic
    ? { Component: LeftCard, padding: "py-6 md:pr-25 pr-18 pl-5 w-100", className:"mb-10" } // RTL
    : { Component: RightCard, padding: "py-6 md:pl-25 pl-18 pr-5 w-100", className:"mb-0" }; // LTR
    
  const { Component: CardComponent, padding, className } = cardConfig;
  
  useEffect(() => {
    const updateSize = () =>
    setIsLargeScreen(window.innerWidth >= 1480); // Tailwind's lg = 1024px
    updateSize();
      
    window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);
  const [currentPage, setCurrentPage] = useState(1);
      
      allsmarthomeItems.slice(
        (currentPage - 1),
        currentPage
      );
  return (
    <>{/*header*/}
      <SectionsHeader
        name={t("smart_home.name")}
        description={t("smart_home.description")}
        description1={t("smart_home.description1")}
        image={image5}
        namestyle="text-white"
      />
      {/*models*/}
      <section dir='rtl' className='flex flex-col mx-auto lg:px-18 md:px-9 px-4 md:mt-30 mt-15'>
          <div className=" bg-dark-primary mt-3 rounded-3xl py-10 md:px-10 px-5">
          {/*if the screen is large it will apply this style*/}
            {isLargeScreen &&<div className="relative h-200 w-72 m-auto">
              <div>
                <motion.div
                  initial={{opacity:0 ,rotate:60}}
                  whileInView={{opacity:1,rotate:-15 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{once:true}}
                  className="w-[585.26px] h-[583.99px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-between rounded-full border border-gray-700">
                    <div className="w-3 h-3 -mt-1.5 bg-secondary-1 rounded-full">
                      <RightCard text={t("smart_home.why.1.text")} subText={t("smart_home.why.1.subtext")} image={image} className="rotate-15 mr-7 -mt-15" delay={0.8} width="w-75" padding="py-4 pl-20 pr-5" />
                    </div>
                    <div className="w-3 h-3 -mb-1.5 bg-secondary-1 rounded-full">
                      <RightCard text={t("smart_home.why.2.text")} subText={t("smart_home.why.2.subtext")} image={image2} className="rotate-15 mr-7 -mt-23" delay={1.5} width="w-70" padding="py-6 pl-20 pr-5"/>
                    </div>
                </motion.div>
                <motion.div
                  initial={{opacity:0 ,rotate:80}}
                  whileInView={{opacity:1,rotate:-20 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{once:true}}
                  className="w-[499.02px] h-[497.89px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-start justify-start pr-9 rounded-full border border-gray-700 gap-15">
                    <div className="w-3 h-3 mt-9 bg-secondary-1 rounded-full">
                      <LeftCard text={t("smart_home.why.3.text")} subText={t("smart_home.why.3.subtext")} image={image4} className="rotate-20 origin-bottom -ml-1" delay={0.9} width="w-70" padding="py-6 pr-20 pl-5"/>
                    </div>
                </motion.div>
                <motion.div 
                  initial={{opacity:0 ,rotate:-180}}
                  whileInView={{opacity:1,rotate:-80 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{once:true}}
                  className="w-[351.49px] h-[350.61px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-between rounded-full border border-gray-700">
                    <div className="w-3 h-3 -mt-1.5  bg-secondary-1 rounded-full">
                        <RightCard text={t("smart_home.why.4.text")} subText={t("smart_home.why.4.subtext")} image={image1} className="rotate-80 -mt-25 mr-10 origin-center" delay={1} width="w-75" padding="py-6 pl-20 pr-5"/>
                    </div>
                    <div className="w-3 h-3 -mb-1.5 bg-secondary-1 rounded-full ">
                      <LeftCard text={t("smart_home.why.5.text")} subText={t("smart_home.why.5.subtext")} image={image3} className="rotate-80 origin-center" delay={1.5} width="w-70" padding="py-6 pr-20 pl-5"/> 
                    </div>
                </motion.div>
                <motion.div 
                  initial={{opacity:0 ,rotate:-260}}
                  whileInView={{opacity:1,rotate:-220 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  viewport={{once:true}}
                  className="w-[313.32px] h-[311.50px] absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-center rounded-full border border-gray-700">
                    <motion.div 
                      initial={{scale:0.5, opacity:0, rotate:260 }}
                      whileInView={{scale:1, opacity:1, rotate:220 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      viewport={{once:true}}
                      className="w-72 text-center">
                        <span className="text-white text-3xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("smart_home.why.span.1")}</span>
                        <span className="text-white/50 text-3xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("smart_home.why.span.2")}</span>
                        <span className="text-white text-3xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("smart_home.why.span.3")}</span>
                  </motion.div>
                </motion.div>
              </div>  
            </div>}
            {/*apply this style when the screen is small*/}
            {!isLargeScreen &&
              <div>
                <motion.div
                  dir={i18next.language==='ar' ? "rtl":"ltr"}
                  initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className='flex flex-col items-start gap-10'>
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("smart_home.why.why_us")}</h1>
                    {/* line */}
                    <hr className={`self-stretch opacity-30 border-b border-gray-100 ${i18next.language==='ar'?"mb-30":" mb-10"}`}/>
                </motion.div>
                <div className="relative grid lg:grid-cols-2 grid-cols-1 gap-15">
                  <CardComponent text={t("smart_home.why.1.text")} subText={t("smart_home.why.1.subtext")} image={image} className={className} delay={0.8} padding={padding} width="mt-5" />
                  <CardComponent text={t("smart_home.why.2.text")} subText={t("smart_home.why.2.subtext")} image={image2} className={className} delay={1} padding={padding} width="mt-5" />
                  <CardComponent text={t("smart_home.why.3.text")} subText={t("smart_home.why.3.subtext")} image={image4} className={className} delay={1.2} padding={padding} width="mt-5" />
                  <CardComponent text={t("smart_home.why.4.text")} subText={t("smart_home.why.4.subtext")} image={image1} className={className} delay={1.4}  padding={padding} width="mt-5" />
                  <CardComponent text={t("smart_home.why.5.text")} subText={t("smart_home.why.5.subtext")} image={image3} className={className} delay={1.6} padding={padding} width="mt-5" />                            
                </div>
              </div>
            }
          </div>
      </section>
      {/*solutions*/}
      <section className='flex flex-col md:mt-30 mx-auto py-10 md:py-20 mt-15 px-4 md:px-9 lg:px-16'>
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='flex flex-col items-start gap-10 mx-2'>
            <h2 className="text-gray-700 text-3xl md:text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("smart_home.title")}</h2>
            {/* line */}
            <hr className="self-stretch opacity-10 border-b border-gray-800"/>
          </motion.div>
          <div className="grid lg:[grid-template-columns:repeat(auto-fit,minmax(500px,1fr))] px-5 grid-cols-1 gap-12 lg:mt-30 mt-15">
            {allsmarthomeItems.map((item, index) => (
              <InfoBlock 
                key={index}
                text={t(item.text)}
                image={item.image} 
                blockLine="hidden"
                className={index === allsmarthomeItems.length - 1 && allsmarthomeItems.length % 2 !== 0 ? "[grid-column:1/-1] w-full" : "w-full"}   
                boxHeight="h-100"   
                goTo={`/smart_home/${item.id}`}      
              />
            ))}
          </div>
      </section>
    </>
  )
}

export default Smart_home
