import { motion } from "motion/react"
import solution_image2 from "../assets/img/solution_image (1).webp"
import solution_image1 from "../assets/img/solution_image (2).webp"
import solution_image3 from "../assets/img/solution_image (3).webp"
import { MovingDivLeft, MovingDivRight } from "../component/MovingDivs"
import { useTranslation } from 'react-i18next';
const Solution = () => {
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';
    const solutioncontent=[
        { key: 0,image:solution_image1,url:"smart_home"},
        { key: 1,image:solution_image2,url:"security"},
        { key: 2,image:solution_image3,url:"network"},
    ]
  return (
    //solution section in home page
    <section className='flex flex-col sm:px-9 px-4 md:py-20 py-10 bg-secondary-2 overflow-hidden lg:mt-30 mt-15 lg:mx-18 md:mx-9 mx-4 rounded-3xl'>
        <div className="mx-5"> 
            <div className='flex flex-col items-start justify-start pb-10'>
                <motion.h2
                initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-gray-700 lg:text-4xl text-3xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.solution_header")}</motion.h2>
            </div>
            {/* line */}
            <hr className="self-stretch opacity-10 border-b border-gray-800"/>
        </div>    
        <div>
        {solutioncontent.map((items, index) => {
        const content = t(`home.solutions.${index}`, { returnObjects: true });

        // Determine starting component based on language
        const isLeft = (isEnglish && index % 2 === 0) || (!isEnglish && index % 2 !== 0);
        const Component = isLeft ? MovingDivLeft : MovingDivRight;
            return(
            <Component 
                key={index}
                text={content.text}
                subText={content.subText}
                image={items.image} 
                buttonText={t("home.cta2")} 
                className="bg-dark-primary text-white border-white"
                transparent="bg-secondary-2"
                style2="group-hover:text-primary group-hover:bg-white"
                url={items.url} //see more details
            />
            )
        })}
        </div>
    </section>
  )
}

export default Solution