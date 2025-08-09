import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import image from '../assets/img/FAQ.jpg'
import SectionsHeader from '../component/sectionsHeader'
import { useTranslation } from 'react-i18next'
const FAQ = () => {
    const {t}=useTranslation()
    const [openIndex, setOpenIndex] = useState(null);// Track which FAQ item is open
    // FAQ data with translation keys
    const FAQData=[
        {question: "fAQ.question1", answer: "fAQ.answer1"},
        {question: "fAQ.question2", answer: "fAQ.answer2"},
        {question: "fAQ.question3", answer: "fAQ.answer3"},
        {question: "fAQ.question4", answer: "fAQ.answer4"},
        {question: "fAQ.question5", answer: "fAQ.answer5"},
        {question: "fAQ.question6", answer: "fAQ.answer6"},
        {question: "fAQ.question7", answer: "fAQ.answer7"},
        {question: "fAQ.question8", answer: "fAQ.answer8"},
        {question: "fAQ.question9", answer: "fAQ.answer9"},
        {question: "fAQ.question10", answer: "fAQ.answer10"},
        {question:"fAQ.question11", answer: "fAQ.answer11"},
        {question: "fAQ.question12", answer: "fAQ.answer12"},
        {question: "fAQ.question13", answer: "fAQ.answer13"},
        {question: "fAQ.question14", answer: "fAQ.answer14"},
        {question: "fAQ.question15", answer: "fAQ.answer15"},
    ]
  return (
    <> {/*FAQ header*/}
    <SectionsHeader 
    name={t("nav.FAQ")} 
    image={image} 
    namestyle='text-white' />
    {/*FAQ content :header, question and answer*/}
    <motion.div
      initial={{ opacity:0, y:100, filter:"blur(15px)" }}
      whileInView={{ opacity:1, y:0, filter:"blur(0px)" }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}>
      <div className="self-stretch justify-center text-gray-700 lg:text-4xl sm:text-3xl text-2xl font-normal font-['Montserrat-Arabic'] leading-[54px] lg:px-20 md:px-10 px-5 lg:mt-30 mt-15">{t("fAQ.title")}</div>
      <div className="mx-auto lg:px-18 md:px-9 px-4 sm:mt-10 mt-5 py-2">
        {FAQData.map((item, index) => (
          <div key={index} className="group bg-white pb-2">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full relative h-fit py-5 rounded-2xl grid grid-cols-6 sm:gap-10 gap-1 border-t border-gray-200 overflow-hidden transition-all duration-200"
            >
            {/*hover effect*/}
              <div 
                  className={`absolute left-0 bottom-0 w-full h-full z-0 transition-transform duration-200 ease-in-out bg-primary 
                  ${openIndex === index ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"}`}
              /> {/*numbring FAQ*/}
              <span className={`col-1 relative z-1 text-gray-700 sm:text-xl font-medium font-['Montserrat-Arabic'] leading-9 ${openIndex === index ? "text-white" : "group-hover:text-white"}`}>
                {`${index + 1 < 10 ? "0" : ""}${index + 1}`}
              </span>
              <div className={`col-span-4 relative z-1 text-gray-700 sm:text-xl font-normal font-["Montserrat-Arabic"] leading-9 text-start ${openIndex === index ? "text-white" : "group-hover:text-white"}`}>
                  {t(item.question)}
              </div>
              <span className={`relative z-1 text-gray-500 md:text-4xl sm:text-3xl text-2xl  font-light ${openIndex === index ? "text-white" : "group-hover:text-white"}`}>{openIndex === index ? "−" : "+"}</span>
            </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex justify-center items-center mx-auto sm:my-6 my-2">
                      <div className="mt-3 text-gray-700 md:text-lg font-light font-['Montserrat-Arabic'] leading-loose max-w-[70%] text-center">
                      {t(item.answer)}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
                  
              </div>
        ))}
      </div>
    </motion.div>
    </>
  )
}

export default FAQ