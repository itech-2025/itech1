import { InfoBlock } from "../component/InfoBlock"

import { motion } from "motion/react"
import { useState } from "react"

import image from "../assets/img/solution_image (3).webp"
import subtract1 from "../assets/img/network (1).webp"
import subtract2 from "../assets/img/network (2).webp"
import subtract3 from "../assets/img/network (3).webp"
import SectionsHeader from "../component/sectionsHeader"
import { useTranslation } from "react-i18next"
export const allnetworkItems = [ 
    {id:"wired",text: "network.1.name",image: subtract1,details:"network.1.details",content:"network.1.content",feature:"network.1.feature"},
    {id:"wireless",text: "network.2.name",image: subtract2,details:"network.1.details",details1:"network.2.details1",details2:"network.2.details2",content:"network.2.content",feature:"network.2.feature"},
    {id:"communication",text:"network.3.name",image: subtract3,details:"network.3.details",details1:"network.3.details1",details2:"network.3.details2",content:"network.3.content",feature:"network.3.feature"},
  ]
const Network = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number
 
    allnetworkItems.slice( //array to get a single item for the current page
      (currentPage - 1),
      currentPage
    );
  return (
    <> {/*network header*/}
      <SectionsHeader
        name={t("network.name")}
        description={t("network.description")}
        description1={isArabic ? undefined :t("network.description1")}
        description2={isArabic ? undefined :t("network.description2")}
        image={image}
        namestyle="text-white"
      />  {/*content*/}
      <section className='flex flex-col md:mt-30 mx-auto py-10 md:py-20 mt-15 px-4 md:px-9 lg:px-16'>
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className='flex flex-col items-start gap-10 mx-2'>
          <h2 className="text-gray-700 text-3xl md:text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("network.title")}</h2>
          {/* line */}
          <hr className="self-stretch opacity-10 border-b border-gray-800"/>
        </motion.div>
        <div className="grid lg:[grid-template-columns:repeat(auto-fit,minmax(500px,1fr))] px-5 grid-cols-1 gap-12 lg:mt-30 mt-15">
          {allnetworkItems.map((item, index) => (
            <InfoBlock 
              key={index}
              text={t(item.text)}
              image={item.image} 
              blockLine="hidden"
              className={index === allnetworkItems.length - 1 && allnetworkItems.length % 2 !== 0 ? "[grid-column:1/-1] w-full" : "w-full"}   
              boxHeight="h-100"   
              goTo={`/network/${item.id}`}      
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Network