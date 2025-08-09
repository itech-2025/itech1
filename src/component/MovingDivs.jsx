import { motion } from "motion/react"
import { AdminButton } from "../component/buttons";
const MovingDivRight = ({text, subText,buttonText, image, className="", style1, style2, transparent, url}) => {
  return (
    <div dir="rtl"  className="lg:mt-30 mt-15 flex">
        <motion.div
            initial={{ y: 100, width: "400px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 ,width: "880px" }}
            transition={{
                    y: { duration: 1, ease: "easeOut" },
                    opacity: { duration: 1 },
                    width: { duration: 1, delay: 1 },
                }}
            viewport={{once:true}}
            className="flex">
            <div className={`lg:w-[52rem] md:w-[40rem] sm:w-[35rem] w-full rounded-3xl flex items-center justify-between lg:pr-20 sm:pr-10 ${className}`}>
            {/*content div*/}
                <motion.div
                    initial={{y:100, opacity:0 }}
                    whileInView={{y:0 ,opacity:1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay:2 }}
                    viewport={{once:true}}
                    className="flex flex-col sm:items-start items-center gap-4 lg:w-90 sm:w-80 sm:py-0 sm:px-0 py-10 px-5">
                    <h2 className="lg:text-4xl md:text-3xl text-xl font-normal font-['Montserrat-Arabic'] leading-[54px] mb-2">{text}</h2>
                    <hr className="h-px opacity-10 border-b lg:w-90 md:w-70 sm:w-55 w-full" />
                    <p  className="lg:w-96 md:w-70 sm:w-58 sm:text-right text-center md:text-lg text-sm font-light font-['Montserrat-Arabic'] leading-relaxed tracking-wide mb-2">{subText}</p>
                    <AdminButton text={buttonText} className2={`${style2}`} className1={`${style1}`} goTo={url}/>
                </motion.div>
            {/*for styling*/}    
                <motion.div
                    initial={{marginLeft:'0px' }}
                    whileInView={{marginLeft:'-16px' }}
                    transition={{duration:1, delay:1}}
                    viewport={{once:true}}
                    className="sm:flex hidden flex-col justify-between lg:h-[539px] md:h-115 sm:h-95 -ml-4">
                    <div className={`lg:w-19 w-8 h-10 rounded-l-2xl ${className}`}></div>
                    <div className={`lg:w-19 w-8 h-10 rounded-l-2xl ${className}`}></div>
                </motion.div>
            </div>
            {/*div for styling behind the img*/}
            <motion.div
                initial={{opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{duration:1, delay:1}}
                viewport={{once:true}}
                className={`w-100 my-10 -mr-70 sm:block hidden rounded-lg ${transparent}`}>
            </motion.div>
        </motion.div>
        {/*div contain the image*/}
        <motion.div
            initial={{scaleX:0 }}
            whileInView={{scaleX:1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay:1 }}
            viewport={{once:true}}
            className="lg:-mr-91 -mr-97 mt-12 rounded-lg overflow-hidden lg:h-110 md:h-90 h-70 w-280 sm:block hidden">
            <img src={image} className="w-full h-full "/>
        </motion.div>
    </div>
  )
}
//component that move to left contain image and description it used in solution section in home page
const MovingDivLeft = ({text, subText,buttonText, image, className="", style1="", style2="", transparent, url}) => {
  return (
    //container
    <div dir="rtl" className="lg:mt-30 mt-15 flex justify-end">
        {/*image container*/}
        <motion.div
            initial={{scaleX:0 }}
            whileInView={{scaleX:1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay:1 }}
            viewport={{once:true}}
            className="z-2 lg:-ml-91 -ml-97 mt-12 rounded-lg overflow-hidden lg:h-110 md:h-90 h-70 w-280 sm:block hidden">
            <img src={image} className="w-full h-full "/>
        </motion.div>
        {/*content*/}
        <motion.div
            initial={{ y: 100, width: "400px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 ,width: "880px" }}
            transition={{
                    y: { duration: 1, ease: "easeOut" },
                    opacity: { duration: 1 },
                    width: { duration: 1, delay: 1 },
                }}
            viewport={{once:true}}
            className="flex">
            {/*div for styling*/}
            <motion.div
                initial={{opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{duration:1, delay:1}}
                viewport={{once:true}}
                className={`w-100 my-10 -ml-70 rounded-lg z-1 sm:block hidden ${transparent}`}>
            </motion.div>
            <div className={`z-0 lg:w-[52rem] md:w-[40rem] sm:w-[35rem] w-full rounded-3xl flex items-center justify-between lg:pl-20 md:pl-10 sm:pl-5 ${className}`}>
                {/*style the edge*/}
                <motion.div
                    initial={{marginRight:'0px' }}
                    whileInView={{marginRight:'-16px' }}
                    transition={{duration:1, delay:1}}
                    viewport={{once:true}}
                    className="sm:flex hidden flex-col justify-between lg:h-[539px] md:h-115 sm:h-95 -mr-6">
                    <div className={`lg:w-19 w-8 h-10 rounded-r-2xl ${className}`}></div>
                    <div className={`lg:w-19 w-8 h-10 rounded-r-2xl ${className}`}></div>
                </motion.div>
                {/*content*/}
                <motion.div
                    initial={{y:100, opacity:0 }}
                    whileInView={{y:0 ,opacity:1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay:2 }}
                    viewport={{once:true}}
                    className="flex flex-col sm:items-end items-center gap-4 lg:w-90 sm:w-70 w-full sm:py-0 sm:px-0 py-10 px-5">
                    <h2  className="font-normal sm:text-left font-['Montserrat-Arabic'] leading-[54px] mb-2 lg:text-4xl md:text-3xl text-xl">{text}</h2>
                    <hr className="h-px opacity-10 border-b lg:w-90 md:w-70 sm:w-60 w-full" />
                    <p  className="lg:w-96 sm:text-left text-center md:w-70 sm:w-58 md:text-lg text-sm font-light font-['Montserrat-Arabic'] leading-relaxed tracking-wide mb-2">{subText}</p>
                    <AdminButton text={buttonText} className2={`${style2}`} className1={`${style1}`} goTo={url}/>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export {MovingDivRight, MovingDivLeft}