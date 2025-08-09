import Breadcrumbs from "../component/Breadcrumbs"
import { motion } from "motion/react"
import i18next from "i18next"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
  // Displays a visually rich header section with animated image, title, breadcrumbs, and optional descriptions.
const SectionsHeader = ({name, description,description1,description2,description3, image, className="", fontstyle="", namestyle="", content, block}) => {
  const location = useLocation();
  const [hasAnimated, setHasAnimated] = useState(false);
  // Track whether animation has already played for this route using sessionStorage
  useEffect(() => {
    const animatedKey = `sectionHeaderAnimated-${location.pathname}`;
    const animatedBefore = sessionStorage.getItem(animatedKey);

    if (!animatedBefore) {
      sessionStorage.setItem(animatedKey, "true");
      setHasAnimated(false); // Animation should play
    } else {
      setHasAnimated(true); // Already played on this page
    }
  }, [location.pathname]);
  return (
    <header className="mx-auto pb-10 relative overflow-hidden px-3 lg:px-18  lg:pt-30 pt-20 bg-white border-b-2 border-gray-200 rounded-b-[2rem] md:rounded-b-[5rem] mb-0">
        <motion.div
          initial={!hasAnimated ?{ clipPath: "inset(0% 0% 100% 0%)", filter:"blur(10px)" }:{}}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", filter:"blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        className="rounded-xl md:rounded-3xl h-fit w-full relative overflow-hidden">
          <div className="absolute top-0 inset-0 backdrop-blur-[1px] h-70 md:h-120 rounded-xl md:rounded-3xl bg-black/10 z-1"/>{/*add blur above the image to make the text clear*/}
            <img loading="lazy" src={image} className={`w-full h-70 md:h-120 object-cover object-center rounded-b-xl md:rounded-b-3xl ${className}`}/>
            {/* Breadcrumbs container with decorative edge smoothing */}
            <div className={`h-20 max-w-fit bg-white -mt-15 ${i18next.language === 'en' ? 'ml-5 md:ml-11' : 'mr-5 md:mr-11'} relative z-1 flex justify-between items-start rounded-2xl md:rounded-t-3xl`}>
              <div className={`w-5 h-10 self-center ${i18next.language === 'en' ? '-ml-[19px] rounded-br-[20px]' : '-mr-[19px] rounded-bl-[20px]'}  relative bg-white/0 shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1`}/>
                <div className="font-light font-['Montserrat-Arabic'] tracking-tight mt-5 mx-3 flex gap-3">
                  <Breadcrumbs/>
                </div>
              <div className={`w-5 h-10 self-center ${i18next.language === 'en' ? '-mr-[19px] rounded-bl-[20px]' : '-ml-[19px] rounded-br-[20px]'}  relative bg-white/0 shadow-[0px_20px_0px_0px_rgba(255,255,255,1)] z-1`} />
            </div>
            {/* Section title positioned over image */}
            <div className={`${i18next.language === 'en' ? 'right-4 sm:right-13 ml-3' : 'left-4 sm:left-13'} absolute lg:bottom-10 bottom-25 z-1 ${block}`}>
              <h4 className={`text-xl sm:text-4xl font-normal font-['Montserrat-Arabic'] leading-[85.50px] ${namestyle}`}>{name}</h4>
            </div>
        </motion.div>
        {/* Optional description and content block with fade-in animation */}
        {(description || description1 || description2 || description3) && (
        <motion.div
          initial={!hasAnimated ?{ opacity:0, filter:"blur(10px)" }:{}}
          whileInView={{ opacity:1, filter:"blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className=" max-w-full my-5 mx-auto flex flex-col gap-5 px-3 lg:px-15 md:px-10 text-gray-600 text-lg sm:text-xl font-light font-['Montserrat-Arabic'] leading-loose">
          {description &&<p className={`${fontstyle}`}>{description}</p>}
          {description1 &&<p>{description1}</p>}
          {description2 &&<p>{description2}</p>}
          {description3 &&<p>{description3}</p>}
          {/* Render structured content blocks if provided */}
          {
            content?.map((item, index)=>(
            <div key={index}>
            <div className="text-gray-700 text-xl font-normal font-['Montserrat-Arabic'] leading-loose">{item.b}</div>
            <div className="text-gray-600 text-lg font-light font-['Montserrat-Arabic'] leading-relaxed">{item.p}</div>
            </div>
          ))}
        </motion.div>)}
    </header>
  )
}

export default SectionsHeader