import { useState } from "react"
import image from "../assets/img/solution_image (1).webp"
import { motion } from "motion/react"
import { InfoBlock } from "../component/InfoBlock"
import subtract1 from "../assets/img/security (2).webp"
import subtract2 from "../assets/img/security (3).webp"
import subtract3 from "../assets/img/security (1).webp"
import subtract4 from "../assets/img/security (4).webp"
import SectionsHeader from "../component/sectionsHeader"
import { useTranslation } from "react-i18next"
export const allsecurityItems = [
      {id:"CCTV",text: "security.1.name",image: subtract1,details:"security.1.details",details1:"security.1.details1",content:"security.1.content",feature:"security.1.feature"},
      {id:"intercom",text: "security.2.name",image: subtract2,details:"security.2.details",details1:"security.2.details1",content:"security.2.content",feature:"security.2.feature"},
      {id:"smart_doors",text: "security.3.name",image: subtract3,details:"security.3.details",details1:"security.3.details1",content:"security.3.content",feature:"security.3.feature"},
      {id:"attendance",text:"security.4.name",image: subtract4,details:"security.4.details",details1:"security.4.details1",content:"security.4.content",feature:"security.4.feature"},
    ]
const Security = () => {
    const { t } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1);

    allsecurityItems.slice(
      (currentPage - 1),
      currentPage
    );
  
  return (
    <> {/*security header*/}
      <SectionsHeader
        name={t("security.name")}
        description={t("security.description")}
        description1={t("security.description1")}
        image={image}
        namestyle="text-white"
      />
      {/*content*/}
      <section className='flex flex-col md:mt-30 mx-auto py-10 md:py-20 mt-15 px-4 md:px-9 lg:px-16'>
      {/*heading*/}
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className='flex flex-col items-start gap-10 mx-2'>
          <h2 className="text-gray-700 text-2xl md:text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("security.title")} </h2>
          {/* line */}
          <hr className="self-stretch opacity-10 border-b border-gray-800"/>
        </motion.div>
      {/*security solutions content*/}
        <div className="grid lg:[grid-template-columns:repeat(auto-fit,minmax(500px,1fr))] px-5 grid-cols-1 gap-12 lg:mt-30 mt-15">
          {allsecurityItems.map((item, index) => (
            <InfoBlock 
              key={index}
              text={t(item.text)}
              image={item.image} 
              blockLine="hidden"
              className={index === allsecurityItems.length - 1 && allsecurityItems.length % 2 !== 0 ? "[grid-column:1/-1] w-full" : "w-full"}   
              boxHeight="h-100"   
              goTo={`/security/${item.id}`}      
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Security