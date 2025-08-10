import { useState} from "react";
import { motion } from "motion/react";
import { AdminButton } from "../component/buttons";
//image import
import slide_img1 from "../assets/img/slide1.webp"
import slide_img2 from "../assets/img/slide2.webp"
import slide_img3 from "../assets/img/slide3.webp"
import slide_img4 from "../assets/img/slide4.webp"
import slide_img5 from "../assets/img/slide5.webp"
import brand1 from '../assets/img/bg.svg'
import brand2 from '../assets/img/bg (1).svg'
// FontAwesome icons for navigation buttons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Swiper carousel imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';

const Hero = () => {
const { t } = useTranslation();
// Array of slide images with translation keys
const swipercontent = [
  { image: slide_img5, key: 0 },
  { image: slide_img4, key: 1 },
  { image: slide_img3, key: 2 },
  { image: slide_img2, key: 3 },
  { image: slide_img1, key: 4 }
];
// Track current and active slide index
  const [currentSlide, setCurrentSlide] = useState(1)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Animation variants for text reveal
  const textVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, filter:"blur(2px)"  },
  visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, filter:"blur(0px)" },
};

  return (
    <section dir="rtl" id="home" className="mx-auto relative z-2 overflow-hidden bg-black">
      {/* Swiper carousel setup */}
      <Swiper
        slidesPerView={'auto'}
        loop
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
        onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex);
            setActiveSlideIndex(swiper.activeIndex);
        }}        
        modules={[Navigation,Autoplay]}
        initialSlide={4}
        navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        }}
        >
        {/* Render each slide */}
        {swipercontent.map((item, index) => {
          const slide = t(`home.Heroslides.${index}`, { returnObjects: true });           
          return(
          <SwiperSlide  key={index}>
            <div  className="rounded-lg shadow">
              <div key={index} className={`${currentSlide === index ? 'item--active' : ''} item absolute top-0 inset-0 backdrop-blur-xs z-1`}/>
              {/* Slide title and subtitle */}
              <img loading="lazy" src={item.image} className="w-full md:h-[100vh] h-[80vh] object-cover" />
              <motion.div
                initial="hidden"
                animate={currentSlide === index ? "visible" : "hidden"}
                viewport={{once:false}}
                className="absolute w-full left-[50%] top-[50%] translate-[-50%] z-2 text-center sm:p-0 p-3">
                {/* Slide title and subtitle */}
                <motion.p variants={textVariants} transition={{ duration: 2 }} viewport={{once:false}} className="text-white md:text-5xl small:text-3xl text-2xl font-normal font-['Montserrat-Arabic'] sm:leading-[85.50px] leading-[4.5rem] md:mb-5">{slide.text1}</motion.p>
                <motion.p variants={textVariants} transition={{ duration: 2 }} viewport={{once:false}} className="text-white md:text-5xl small:text-3xl text-2xl font-normal font-['Montserrat-Arabic'] sm:leading-[85.50px] leading-[4.5rem] md:mb-5">{slide.text2}</motion.p>
                <motion.p variants={textVariants} transition={{ duration: 2 }} viewport={{once:false}} className="text-white md:text-lg  text-md font-normal font-['Montserrat-Arabic'] leading-10 mb-10">{slide.subText}</motion.p>
                {/* Conditional CTA button on slide 4 */}
                {index === 4 && (
                      <AdminButton goTo='#popup' variants={textVariants} transition={{ duration: 2 }} viewport={{once:false}} text={t("home.cta")} className2='bg-white text-primary-3 border-white' className1='border-white text-white' textColor="sm:text-base text-sm"/>
                )}
                {/* Conditional brand logos on slide 3 */}
                {index === 3 && (
                  <motion.div
                    variants={textVariants}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                    className="absolute flex sm:left-1/2 left-30 top-[95%] -translate-x-1/2 gap-3 md:w-fit md:h-fit w-80 h-10"
                  >
                    <img loading="lazy" src={brand1} className="w-20 md:w-full" />
                    <img loading="lazy" src={brand2} className="w-20 md:w-full " />
                  </motion.div>
                    
                )}
              </motion.div>
            </div>
          </SwiperSlide>
        )})}
      </Swiper>

        {/* navigation button */}
        <div className="absolute sm:bottom-4 sm:right-0 bottom-5 small:right-[23%] right-[20%] translate-[-50%] flex gap-4 z-10 ">
          <button  className="swiper-button-prev-custom  w-12 h-12 p-3.5 rounded-full inline-flex justify-start items-center gap-2.5 cursor-pointer border border-white/50">
            <FontAwesomeIcon icon={faChevronRight} size="xl" className="text-white" />
          </button>
          <button  className="swiper-button-next-custom w-12 h-12 p-4 rounded-full inline-flex justify-start items-center cursor-pointer border border-white/50">
            <FontAwesomeIcon icon={faChevronLeft} size="xl" className="text-white"/>
          </button>
        </div>
      {/* Slide number indicator row */}
      <div className="absolute bottom-12 left-12 gap-4 z-10 text-white tracking-widest sm:flex hidden">
        {swipercontent.map((_, index) => (
          <div dir="ltr" key={index} className={`relative flex items-center ${
                currentSlide === index ? 'w-20 number-progress' : 'w-12'}`}>
            <span
              className={`${
                currentSlide === index? 'text-white' : 'text-white/50'
              } text-right text-white text-base font-normal font-['Montserrat-Arabic'] leading-normal tracking-tight`}
            >
              {String(-index + 5).padStart(2, '0')} {/*to number start with 0*/}
            </span>
            {/* Progress bar for active slide */}
            {currentSlide === index && (
              <span className={`${
                currentSlide !== 0 ? 'absolute left-1 ml-8 h-[2px] bg-white slide-progress w-12 origin-left' : ''}`}></span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
