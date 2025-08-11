import {useState} from 'react'
//image icons and image
import image from "../assets/img/footer (1).webp"
import image1 from "../assets/img/footer (2).webp"
import image2 from "../assets/img/footer (3).webp"
import image3 from "../assets/img/footer (4).webp"
import icon from "../assets/img/Ficon.svg"
import icon1 from "../assets/img/Ficon (1).svg"
import icon2 from "../assets/img/Ficon (2).svg"
import icon3 from "../assets/img/Ficon (3).svg"
import logo from '../../public/Logo.svg'

import {AdminButton} from "../component/buttons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { useLocation } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const Footer = () => {
  const { t } = useTranslation()
  const [activelink, setactivelink]=useState(" ")
  const location = useLocation();
  const swipercontent = [image, image1, image2, image3];//swiper content
  const footerNav=[
    {href:"/", label:t("footer.links.home")},
    {href:"/smart_home", label:t("footer.links.solution")},
    {href:"/consulting", label:t("footer.links.services")},
    {href:"/network_product", label:t("footer.links.products")},
    {href:"/blogs", label:t("footer.links.blogs")},
    {href:"/contact", label:t("footer.links.contact")},
    ] 
  const contact=[
    {icon:icon3, text:t("footer.location")},
    {icon:icon2, text:"00966509664785 - 0096655134712"},
    {icon:icon1, text:"info@gulf-itech.com", url:"https://www.gulf-itech.com"},
    {icon:icon, text:"www.gulf-itech.com", url:"https://www.gulf-itech.com"},
    ] //icon list
  return (
    <section className='w-full md:pt-20 gap-8 flex flex-col mt-15 md:mt-30 mx-auto px-4 md:px-9 lg:px-16 sm:mb-10 mb-5'>
      {/*top footer content*/}
      {location.pathname === "/" && (
        <div className="relative">
          {/*background image slider */}
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            loop={true}
            initialSlide={0}
            speed={1200}
            fadeEffect={{ crossFade: false }}
            autoplay={{
                delay: 9000,
            }} 
            
            className="relative"
          >
            {swipercontent.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="sm:h-110 h-120 w-full overflow-hidden rounded-t-3xl bg-dark-primary mb-4">
                    <img loading="lazy" src={item} className="slide-image h-full w-full object-cover object-center" />
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
          {/*text and button in the top of the footer*/}
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full pb-5 lg:pl-20 pl-5 pr-5 lg:pr-0 absolute z-1 lg:top-20 top-8 lg:right-10 right-0">
            <div>
              <div className="text-white text-2xl sm:text-4xl lg:text-[2.8rem] font-bold font-['Montserrat-Arabic'] leading-[75.50px]">{t("footer.text")}</div>
              <div className="text-gray-100 text-lg sm:text-xl lg:text-2xl font-normal font-['Montserrat-Arabic'] leading-9 mt-1">{t("footer.subtext")}</div>
            </div>
            <div className={`${i18next.language==='ar'?"lg:w-45 lg:-ml-5 lg:-mt-20":"lg:w-70 lg:-mr-10 lg:-mt-20 lg:ml-10"}`}>
              <AdminButton text={t("footer.button-text")} className2="group-hover:bg-primary" className1="bg-transparent text-white border-white lg:mt-16 md:mt-14 mt-5 group-hover:!text-primary" hoverColor="!bg-white" textColor="group-hover:!text-primary" goTo='/contact'/>
            </div>
          </div>
        </div>)}
      {/*footer navigation*/}
        <div className="bg-dark-primary rounded-3xl -mt-20 relative z-2 px-5 md:px-10 lg:px-15 ">
          <div className='grid lg:grid-cols-3 grid-rows-1 lg:gap-30 relative py-10 sm:py-15 mb-15'>
            <div className='lg:col-1 flex flex-col mb-3 justify-center items-center small:items-start'>
                <img loading="lazy" src={logo} alt="logo" className='lg:w-64 w-50 lg:h-28 h-20 mb-7 brightness-5000'/>
                <div className="text-gray-100 text-base font-light font-['Montserrat-Arabic'] leading-normal tracking-wide">{t("footer.details")}</div>
            </div>
            <div className='lg:col-span-2 flex sm:flex-row flex-col sm:gap-10 mt-6 gap-0 sm:justify-between'>
              <div className="flex flex-col gap-2 md:gap-8 cursor-default mb-3 relative z-50">
                  <a  className="w-40 bg-gradient-to-b from-white to-sky-800 bg-clip-text text-transparent text-2xl font-medium font-['Montserrat-Arabic'] leading-loose tracking-tight">{t("footer.fast")}</a>
                  <ul className="flex flex-col md:justify-start gap-6">
                      {
                          footerNav.map((link, index)=>(
                          <li key={index} className="flex items-center gap-2.5">
                          <a key={index} href={link.href} 
                          onClick={()=>setactivelink(link.href)} ><span className="text-gray-100 text-base font-light font-['Montserrat-Arabic'] leading-normal tracking-wide">{link.label}</span></a></li>
                          ))
                      }
                  </ul>
              </div>
              <div className="flex flex-col gap-8 cursor-default mb-3 relative z-50">
                <div>
                  <a className="items-start bg-gradient-to-b from-white to-sky-800 bg-clip-text text-transparent text-2xl font-medium font-['Montserrat-Arabic'] leading-loose tracking-tight">{t("footer.help")}</a>
                  <h2 className="text-gray-100 text-base font-normal font-['Montserrat-Arabic'] leading-normal tracking-wide mb-1.5">{t("footer.help-subtext")}</h2>
                </div>
                  <ul className="flex flex-col md:justify-start gap-6">
                    {
                      contact.map((link, index)=>(
                        <li key={index} className="flex gap-0.5 items-start">
                          <img loading="lazy" src={link.icon} className="w-5 h-5 ml-1 mt-1"/>
                          <a  href={link.url} onClick={()=>setactivelink(link.url)} className=''>
                            <span className="text-gray-100 text-base font-light font-['Montserrat-Arabic'] leading-normal tracking-wide">{link.text}</span>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
              </div>
            </div>
          </div>
          {/*privacy policy*/}
          <div dir='rtl' className="w-full h-25 bg-white rounded-t-3xl z-9 -mt-20 flex">
            <div className="w-5 h-10 -mr-5 absolute bottom-0 bg-white/0 rounded-bl-[20px] shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1" />
            <div dir={i18next.language === 'en' ? 'rtl' : 'ltr'} className='flex sm:flex-row flex-col sm:justify-between justify-center gap-4 sm:gap-0 items-center w-full mx-10'>
              <div className="text-gray-700 text-xs font-medium font-['Montserrat'] leading-none">© gulfitech 2024 </div>
              <a href='#' className="text-gray-700 text-xs font-light font-['Montserrat-Arabic'] underline leading-none">{t("footer.privacy")}</a>
            </div>
            <div className="w-8 lg:w-6 h-10 lg:h-13 lg:mt-12 mt-15 -ml-5.5 sm:-ml-6 md:-ml-6.5 lg:-ml-5 relative bg-white/0 rounded-br-[20px] shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1" />
          </div>
        </div>
    </section>
  )
}

export default Footer
