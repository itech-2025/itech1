import { motion } from "motion/react"
import { useState, useRef } from "react";
import { Infobox } from "../component/InfoBlock"
import  {AdminButton} from "../component/buttons"
//image import
import photo1 from "../assets/img/news (1).jpg";
import photo2 from "../assets/img/news (2).jpg";
import photo3 from "../assets/img/news (3).jpg";
import photo4 from "../assets/img/news (4).jpg";
import photo5 from "../assets/img/news (5).jpg";
import photo6 from "../assets/img/news (6).jpg";
import photo7 from "../assets/img/news (7).jpg";
import photo8 from "../assets/img/news (8).jpg";
// FontAwesome icons for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Swiper carousel imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
const News = () => {
  const { t } = useTranslation();
  // Array of news items with image and translation key
  const swipercontent=[
    { id:"news.1.title", image: photo7, key:0,},
    { id:"news.2.title", image: photo8, key:1},
    { id:"news.3.title", image: photo6, key:2},
    { id:"news.4.title", image: photo5, key:3},
    { id:"news.5.title", image: photo4, key:4 },
    { id:"news.6.title", image: photo3, key:5},
    { id:"news.7.title", image: photo2, key:6},
    { id:"news.8.title", image: photo1, key:7 },
  ]
  const swiperRef = useRef(null);// Ref to control Swiper instance
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1) // Track current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Track active slide index
  return (
    <section dir='rtl' className='contanier flex flex-col lg:mt-30 mt-15 lg:mx-18 md:mx-9 mx-4'>
      {/* Header section with title, navigation buttons, and CTA */} 
      <div dir={i18next.language === 'ar' ? 'rtl' : 'ltr'} className='bg-dark-primary md:py-20 sm:py-10 py-5 sm:px-0 px-10 rounded-3xl h-130'>
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`flex sm:flex-row flex-col justify-between items-center pb-5 ${i18next.language === 'ar'?"sm:pl-14":"sm:pr-14"} `}>
          <div className="flex small:flex-row flex-col items-center justify-between sm:mb-0 mb-5 w-full sm:w-fit">
            {/* Title and navigation buttons */}
            <div className={`${i18next.language === 'ar'?"sm:mr-14 sm:ml-5": "sm:ml-14 sm:mr-5"}`}>
              <h2 className="text-white lg:text-4xl md:text-3xl text-2xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.news_section_heading")}</h2>
            </div>
            {/* Swiper navigation buttons */}
            <div dir="rtl" className="relative flex gap-4">
              <button  className={`swiper-button-prev-custom  md:w-12 w-10 md:h-12 h-10 p-3.5 rounded-full inline-flex justify-start items-center gap-2.5 cursor-pointer border ${isBeginning ? 'border-white/40 text-white/40' : 'border-white/50 text-white'}`}>
                <FontAwesomeIcon icon={faChevronRight} className="md:text-2xl text-lg" />
              </button>
              <button  className={`swiper-button-next-custom md:w-12 w-10 md:h-12 h-10 p-4 rounded-full inline-flex justify-center items-center cursor-pointer border ${isEnd ? 'border-white/40 text-white/40' : 'border-white/50 text-white'}`}>
                <FontAwesomeIcon icon={faChevronLeft} className="md:text-2xl text-lg"/>
              </button>
            </div>
          </div>
          {/* Call-to-action button */}
            <AdminButton text={t("home.cta2")} className2="group-hover:text-primary group-hover:bg-white" className1="bg-dark-primary text-white border-white" goTo="news"/>
        </motion.div>
        <hr className="mx-14 opacity-10 border-b border-white small:block hidden"/>
      </div>
      {/* Swiper carousel for news items */}
      <div className="sm:-mt-75 -mt-80 md:px-15 sm:px-8 px-4">
        <Swiper
          key={i18next.language}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={40}
          speed={1000}
          onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex);
              setActiveSlideIndex(swiper.activeIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
          }}        
          modules={[Navigation]}
          navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            100: {slidesPerView: 1,},
            1024: {slidesPerView: 2,},
          }}
          className="relative !overflow-hidden !rounded-3xl"
          >{/* Render each news item as a slide */}
          {swipercontent.map((item, index)=>{
              const content = t(`home.news.${index}`, { returnObjects: true });  
               return(         
              <SwiperSlide key={index}>
                <Infobox
                  image={item.image}
                  date={content.date}
                  title={content.title}
                  details={content.details}
                  goTo={`/news/${item.id}`} // Link to detailed news page
                  className="w-full"
                />
              </SwiperSlide>
          )})}
        </Swiper>
      </div>
    </section>
  )
}

export default News