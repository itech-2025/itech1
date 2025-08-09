import { motion } from 'motion/react';
import { useState } from "react";
// FontAwesome icons for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Swiper carousel imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// Image imports for product slides
import image from "../assets/img/State (1).png"
import image1 from "../assets/img/State (2).png"
import image2 from "../assets/img/State (3).png"
import image3 from "../assets/img/State (4).png"
import image4 from "../assets/img/State (5).png"
import image5 from "../assets/img/State (6).png"
import image6 from "../assets/img/State (7).png"
import image7 from "../assets/img/State (8).png"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Product = () => {
    const { t } = useTranslation()
    // Static array of product images and names
    const swipercontent = [
        { image: image, name:"IR " },
        { image: image1, name:"mini hub" },
        { image: image2, name:"mix pad" },
        { image: image3, name:"mix pad 11 inch"},
        { image: image4, name:"mix pad with 3 switch" },
        { image: image5, name:"mixpad" },
        { image: image6, name:"mixpad 7"},
        { image: image7, name:"smart lock"},
  ]
  // Track current and active slide index
  const [currentSlide, setCurrentSlide] = useState(1)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <section dir='rtl' className='flex flex-col md:px-9 px-3 md:py-15 py-8 bg-secondary-2 md:mt-30 mt-15 lg:mx-18 md:mx-9 mx-4 rounded-3xl w-[100wh] md:h-[100vh] h-[80vh]'>
        <div dir={i18next.language === 'ar' ? 'rtl' : 'ltr'} className='mx-5'>
            <div className='flex flex-col items-start justify-start pb-10'>
                <motion.h2
                initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-gray-700 md:text-4xl text-3xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.product_section_header")}</motion.h2>
            </div>
            {/* line */}
            <hr className="self-stretch opacity-10 border-b border-gray-800"/>
        </div>
        {/* Swiper carousel for product images */}
        <Swiper
            modules={[EffectFade, Navigation, Autoplay]}
            effect="fade"
            loop={true}
            initialSlide={0}
            speed={'autoplay' ? 1000 : 10}
            fadeEffect={{ crossFade: true }}
            autoplay={{
                delay: 1000,
            }}
            onSlideChange={(swiper) => {
                setCurrentSlide(swiper.realIndex);
                setActiveSlideIndex(swiper.activeIndex);
            }} 
            navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
            }}
            className="w-full h-full rounded-3xl overflow-hidden relative mt-10"
        >{/* Render each product as a slide */}
            {swipercontent.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='absolute top-6 right-6 bg-white px-1.5 rounded-lg text-gray-700 text-base font-normal font-["Montserrat-Arabic"] leading-normal tracking-tight'>{item.name}</div>
                    <img src={item.image} alt={item.name} className="w-full h-full md:object-cover object-center" />
                </SwiperSlide>
            ))}
        </Swiper>
        {/* Custom navigation buttons positioned at bottom center */}
        <div className="relative flex z-10 ">
            <div className="absolute -bottom-5 left-[50%] translate-x-[-50%] h-20 lg:w-[18%] md:w-[30%] w-[40%] bg-secondary-2 z-1 flex justify-between items-center rounded-t-4xl">
                <div className="w-5 h-10 -mr-[20px] relative bg-white/0 rounded-bl-[50px] shadow-[0px_20px_0px_0px_rgba(231,236,240,1)] z-1" />
                    <div className='flex justify-between w-[90%] -ml-2'>
                        <button className="swiper-button-prev-custom w-6 h-12 mt-4 inline-flex cursor-pointer">
                            <FontAwesomeIcon icon={faChevronRight} size="lg" className="swiper-button-prev-custom text-black/60" />
                        </button>
                        <button className="swiper-button-next-custom w-6 h-12 mt-4 inline-flex cursor-pointer">
                            <FontAwesomeIcon icon={faChevronLeft} size="lg" className="swiper-button-next-custom text-black/60"/>
                        </button>
                    </div>
                <div className="w-5 h-10 -ml-[20px] relative bg-white/0 rounded-br-[50px] shadow-[0px_20px_0px_0px_rgba(231,236,240,1)] z-1" />
            </div>
        </div>
    </section>
  )
}

export default Product