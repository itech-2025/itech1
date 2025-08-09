import { motion } from "motion/react"
import image from "../assets/img/Group 11.svg"
import i18next from "i18next"
// GrayListDev component displays a stylized, animated list of items with a title it used in about page
const GrayListDev = ({title,content}) => {
  return (
        <section id='feature' className='flex flex-col px-3 sm:px-9 md:py-20 py-10 bg-secondary-2 md:mt-30 mt-15 mx-4 md:mx-9 lg:mx-18 rounded-3xl'>
            <div className='flex flex-col items-start justify-center pb-7 px-1.5'>
                <motion.h2
                initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-normal mb-4 font-['Montserrat-Arabic'] text-gray-700">{title}</motion.h2>
            </div>
            <hr className="self-stretch opacity-10 border-b border-gray-800 w-[90%]"/>
        <motion.div
        initial={{ opacity: 0.3, y: 50, filter: "blur(5px)"  }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)"  }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className='grid grid-cols-1 gap-6 mt-10 relative'>
        {/* Loop through content array to render each item */}
            {
                content.map((items, index)=>(
                    <div>
                        <div key={index} className='lg:h-[8rem] relative flex flex-col items-start overflow-hidden md:px-15 sm:px-10 px-5'>
                            <div className="flex items-start"> 
                                <div className="lg:text-4xl md:text-3xl sm:text-xl text-lg text-center font-light font-['Montserrat-Arabic'] text-transparent stroke-blue">{String(index+1).padStart(2, "0")}</div>
                                <ol className={`md:mr-7 px-2 self-center ${i18next.language ==='en'? "ml-5 ":"mr-3 "}`}>
                                    <li className="md:text-xl text-lg font-normal font-['Montserrat-Arabic'] text-gray-600 mb-1.5">{items.title}</li>
                                    <li className='text-gray-500 md:text-lg text-sm font-light font-["Montserrat-Arabic"] leading-normal'>{items.description}</li>
                                </ol>
                            </div>
                            <hr className="self-stretch opacity-10 border-b border-gray-800 w-full my-3"/>
                        </div>
                    </div>
                ))
            }
        </motion.div>
    </section>
  )
}
// BlueListDev component displays a stylized, animated list of items on a dark background it used in solution section subpage
const BlueListDev = ({title,content}) => {
  return (
        <section id='feature' className='flex flex-col px-4 sm:px-9 md:py-20 py-10 bg-dark-primary md:mt-30 mt-15 mx-3 md:mx-9 lg:mx-18 rounded-3xl'>
        <div className='flex flex-col items-start justify-center pb-7 px-1.5'>
            <motion.h2
            initial={{ clipPath: "inset(100% 0% 0% 0%)", y:15, opacity: 0, filter:"blur(10px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y:0, opacity: 1, filter:"blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-normal mb-4 font-['Montserrat-Arabic'] text-white">{title}</motion.h2>
        </div>
        <hr className="self-stretch opacity-20 border-b border-white"/>
        <motion.div
        initial={{ opacity: 0.3, y: 50, filter: "blur(5px)"  }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)"  }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 relative'>
        {/* Loop through content array to render each item */}
            {
                content.map((items, index)=>(
                    <div className="flex justify-center">
                        <div key={index} className='sm:w-[600px] sm:h-32 h-26 w-120 relative bg-white/10 rounded-[1rem] flex justify-between items-center'>
                               <div className={`sm:h-16 h-14 sm:w-12 w-10 bg-dark-primary rounded-b-full ${i18next.language === 'en' ? 'ml-3' : 'mr-3'}  -mt-16 px-1.5 relative z-1`}>
                                    <div className={`w-5 h-10 relative bg-white/0 ${i18next.language === 'en' ? 'rounded-tr-[20px] -ml-6' : 'rounded-tl-[20px] -mr-6'} shadow-[0px_-15px_0px_0px_rgba(0,13,38,1)]`} />
                                    <div className="bg-primary sm:h-14 h-12 sm:w-8.5 w-6.5 -mt-10 rounded-full pt-2">
                                        <div className="sm:text-[1.3rem] text-lg text-center font-light font-['Montserrat-Arabic'] text-transparent stroke-white">{String(index+1).padStart(2, "0")}</div>
                                    </div>
                                    <div className={`w-5 h-10 -mt-11 sm:-mt-14 relative bg-white/0 ${i18next.language === 'en' ? 'rounded-tl-[20px] ml-8 sm:ml-10.5' : 'rounded-tr-[20px] mr-8.5 sm:mr-10.5'} shadow-[0px_-20px_0px_0px_rgba(0,13,38,1)]`}/>
                                </div>
                                <img src={image} alt="feature icon" className='absolute top-0 left-0 brightness-500 z-0' />
                                <ol className='w-[80%] text-center'>
                                    <li className='text-white sm:text-lg text-sm font-normal font-["Montserrat-Arabic"] leading-normal'>{items}</li>
                                </ol>
                            <div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </motion.div>
    </section>
  )
}

export {GrayListDev,BlueListDev}