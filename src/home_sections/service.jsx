import { motion } from "motion/react"
import { InfoBlock } from "../component/InfoBlock"
// Image imports for service cards
import subtract1 from "../assets/img/subtract (1).png"
import subtract2 from "../assets/img/subtract (2).jpg"
import subtract3 from "../assets/img/subtract (3).jpg"
import subtract4 from "../assets/img/subtract (4).jpg"
import { useTranslation } from "react-i18next"
const Service = () => {
  const { t } = useTranslation()
  // Static array of service items with image and route ID
  const solutioncontent = [
    { id:"contracting", key:0, image: subtract1},
    { id:"consulting", key:1, image: subtract2},
    { id:"maintenance", key:2, image: subtract3},
    { id:"upgrade", key:3, image: subtract4}
  ]
  return (
    <section className='flex flex-col md:mt-30 mx-auto  py-10 md:py-20 mt-15 px-4 md:px-9 lg:px-23'>
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className='flex flex-col items-start gap-10 mx-2'>
          <h2 className="text-gray-700 text-3xl md:text-4xl font-normal font-['Montserrat-Arabic'] leading-[54px]">{t("home.services_header")}</h2>
          {/* line */}
          <hr className="self-stretch opacity-10 border-b border-gray-800"/>
        </motion.div>
        {/* Grid layout for service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mt-30 mt-15">
          {solutioncontent.map((item, index) => {
            // Fetch localized content for each service item
              const content = t(`home.services.${index}`, { returnObjects: true });
              return (
              <InfoBlock 
                key={index}
                text={content.text}
                subtext={content.subText}
                image={item.image} 
                goTo={`/${item.id}`} // Link to detailed service page
              />
          )})}
        </div>
    </section>
  )
}

export default Service