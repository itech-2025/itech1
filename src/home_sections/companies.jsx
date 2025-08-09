import Marquee from "react-fast-marquee"; //slider
import image from "../assets/img/brand (1).png"
import image1 from "../assets/img/brand (2).png"
import image2 from "../assets/img/brand (3).png"
import image3 from "../assets/img/brand (4).png"
import image4 from "../assets/img/brand (5).png"
import image5 from "../assets/img/brand (6).png"
import image6 from "../assets/img/brand (7).png"
import image7 from "../assets/img/brand (8).png"
import image8 from "../assets/img/brand (9).png"
import image9 from "../assets/img/brand (10).png"
import image10 from "../assets/img/brand (11).png"
import image11 from "../assets/img/brand (12).png"
import { useTranslation } from "react-i18next";
import "../App.css";

const Companies = () => {
  const { t } = useTranslation();// Duplicate the array for seamless effect
  const logos = [
    image, image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10, image11
  ];
  return (
    <section dir="ltr" className='w-full py-20 gap-8 flex flex-col mt-30 overflow-hidden'>
      <div className='flex whitespace-pre-line'>
          <Marquee speed={300} direction="right"> 
          {logos.map((image, index) => (//loop contain slider image
          <div key={index} className="bg-gradient-to-b from-gray-300 to-white rounded-3xl mx-3 px-5">
            <img loading="lazy" className='object-contain h-50 w-50' src={image} alt={`Slide ${index}`} />
          </div>
          ))}
          </Marquee>
      </div>
      { /*Duplicate the array for seamless effect*/}
      <div className="text-gray-700 lg:text-5xl sm:text-3xl text-2xl font-normal font-['Montserrat-Arabic'] leading-[67.50px] align-middle self-center">{t("home.companies")} </div>
      <div className='flex whitespace-pre-line'>
          <Marquee speed={300}>
          {logos.map((image, index) => (
          <div key={index} className="bg-gradient-to-b from-white to-gray-300 rounded-3xl mx-3 px-5">
            <img loading="lazy" className='object-contain h-50 w-50' src={image} alt={`Slide ${index}`} />
          </div>
          ))}
          </Marquee>
      </div>

    </section>
  )
}

export default Companies