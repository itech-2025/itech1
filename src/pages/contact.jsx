import SectionsHeader from '../component/sectionsHeader'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useState,useRef } from 'react'
import image from "../assets/img/contact.webp"
import icon from "../assets/img/Group 11 (2).svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Map from '../component/map'



const Contact = () => {
    const {t}=useTranslation()
    const formRef = useRef();
    // Initial form state
    const [formData, setFormData] = useState({
        name: "",
        entity: "",
        email: "",
        phone: "",
        service: "",
        region: "",
        message: "",
    });
    // Handle input changes and update form state
    const [errors, setErrors] = useState({});
    // Handle input changes and update form state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    // Handle form submission and perform validation
    const handleSubmit = (e) => {
        e.preventDefault();// Prevent default form submission
        const newErrors = {};// Temporary object to collect validation errors
        if (!formData.name.trim()) {newErrors.name =t("contact.empty-name")} ;// Validate name field
        if (!formData.entity.trim()){ newErrors.entity =t("contact.empty-entity")} ;// Validate entity field
        // Validate email field
        if (!formData.email.trim()) {
            newErrors.email =t("contact.empty-email") ;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
            newErrors.email =t("contact.invalid-email") ;
        }
        // Validate phone number (must start with 5 and be 9 digits long)
        if (!formData.phone.trim()) {
            newErrors.phone =t("contact.empty-number") ;
        } else if (!/^5\d{8}$/.test(formData.phone)) {
            newErrors.phone =t("contact.invalid-number") ;
        }
        if (!formData.service) {newErrors.service =t("contact.empty-service") }; // Validate service selection
        if (!formData.region) {newErrors.region =t("contact.empty-city")} ;// Validate region/city selection
        setErrors(newErrors);// Update error state
         // If no errors, show success message
        if (Object.keys(newErrors).length === 0) {
        alert(t("contact.success"));
        }
    };


  return (
    <> {/*header*/}
      <SectionsHeader
        name={t("nav.Contact")}
        image={image}
        namestyle='text-white'
      />
      <div className={`lg:mt-30 mt-15 flex ${i18next.language==='ar'?"lg:pl-25 lg:pr-20":"lg:pr-24 lg:pl-20"} sm:px-5 md:px-10 px-2 mx-auto relative`}>
        <div className="flex lg:flex-row flex-col w-full lg:h-185 bg-dark-primary justify-between rounded-3xl">
            {/*contact info*/}
            <div className={`flex items-center justify-between lg:w-[60%] ${i18next.language==='ar'?"lg:pr-10":"lg:pl-10"} md:px-10 px-5 xl:py-20 py-10`}>
                <div className="flex flex-col items-start gap-4 text-white">{/* left content */}
                    <h2 className="lg:text-4xl sm:text-2xl text-xl font-normal font-['Montserrat-Arabic'] leading-[54px] mb-2">{t("contact.text")}</h2>
                    <p  className="md:text-lg text-base font-light font-['Montserrat-Arabic'] leading-relaxed tracking-wide mb-2">{t("contact.subtext")}</p>
                    <hr className="h-px opacity-10 border-b w-[90%]" />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:pl-5 lg:pr-0 py-5'>
                        <div className='px-3 py-5 bg-gray-200/10 relative rounded-xl'>
                            <img loading="lazy" src={icon} className=' absolute top-0 left-0'/>
                            <h4 className='text-lg font-normal font-["Montserrat-Arabic"] leading-relaxed tracking-tight pb-2'>{t("contact.location_header")}</h4>
                            <p className='text-gray-300 text-base font-light font-["Montserrat-Arabic"] leading-normal tracking-tight'>{t("contact.location")}</p>
                        </div>
                        <div className='px-3 py-5 bg-gray-200/10 relative rounded-xl'>
                            <img loading="lazy" src={icon} className=' absolute top-0 left-0'/>
                            <h4 className='text-lg font-normal font-["Montserrat-Arabic"] leading-relaxed tracking-tight  pb-2'>{t("contact.phone")}</h4>
                            <p className='text-gray-300 text-base font-light font-["Montserrat-Arabic"] leading-normal tracking-tight'><span className='block pb-2'>00966551347124</span><span>00966509664785</span></p>
                        </div>
                        <div className='px-3 py-5 bg-gray-200/10 relative rounded-xl'>
                            <img loading="lazy" src={icon} className=' absolute top-0 left-0'/>
                            <h4 className='text-lg font-normal font-["Montserrat-Arabic"] leading-relaxed tracking-tight  pb-2'>{t("contact.email")}</h4>
                            <a className='text-gray-300 text-base font-light font-["Montserrat-Arabic"] leading-normal tracking-tight'>Info@gulf-itech.com</a>
                        </div>
                        <div className='px-3 py-5 bg-gray-200/10 relative rounded-xl'>
                            <img loading="lazy" src={icon} className=' absolute top-0 left-0'/>
                            <h4 className='text-lg font-normal font-["Montserrat-Arabic"] leading-relaxed tracking-tight  pb-2'>{t("contact.website")}</h4>
                            <a>www.gulf-itech.com</a>
                        </div>
                        <div className='px-3 py-5 bg-gray-200/10 relative rounded-xl'>
                            <img loading="lazy" src={icon} className=' absolute top-0 left-0'/>
                            <h4 className='text-lg font-normal font-["Montserrat-Arabic"] leading-relaxed tracking-tight  pb-2'>{t("contact.social")}</h4>
                            <div className="flex gap-8 text-xl text-secondary-1">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                            </div>
                        </div>
                        <div className='px-3 py-5 bg-gray-200/10 relative rounded-xl'>
                            <img loading="lazy" src={icon} className=' absolute top-0 left-0'/>
                            <h4 className='text-lg font-normal font-["Montserrat-Arabic"] leading-relaxed tracking-tight  pb-2'>{t("contact.time_text")}</h4>
                            <p className='text-gray-300 text-base font-light font-["Montserrat-Arabic"] leading-normal tracking-tight'>{t("contact.time")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*form*/}
            <div className='lg:w-[50%] w-full lg:mb-0 mb-10 relative'>
                {/*divs for styling*/}
                <div className={`w-full h-[89%] lg:block hidden absolute ${i18next.language==='ar'?"-left-4 rounded-r-lg":"-right-4 rounded-l-lg"} top-0 my-10  bg-white z-0`}/>
                <div className={`lg:flex hidden flex-col justify-between absolute ${i18next.language==='ar'?"-left-35.5 ml-32":"-right-37 mr-32"}  h-full `}>
                    <div className={`lg:w-19 w-10 h-10 ${i18next.language==='ar'?"rounded-l-2xl":"rounded-r-2xl"}  bg-dark-primary`}></div>
                    <div className={`lg:w-19 w-10 h-[2.6rem] ${i18next.language==='ar'?"rounded-l-2xl":"rounded-r-2xl"}  bg-dark-primary`}></div>
                </div>
                <div className={`relative rounded-lg lg:w-[95%] lg:h-[85%] h-fit lg:mt-13.5 ${i18next.language==='ar'?"lg:mr-8":" lg:ml-8"} md:mx-10 mx-3 bg-secondary z-1`}>
                {/*contact form*/}
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col py-5 px-10 gap-4">
                    {/* Name */}
                    <div className="flex flex-col h-15">
                        <label htmlFor="name" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.name")}</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.name ? "mt-2" : "-mt-2"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.name}</p>}
                    </div>

                    {/* Entity */}
                    <div className='flex flex-col h-15'>
                        <label htmlFor="entity" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.name-of-entity")}</label>
                        <input
                        type="text"
                        name="entity"
                        value={formData.entity}
                        onChange={handleChange}
                        className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.entity ? "mt-2" : "-mt-2"}`}
                        />
                        {errors.entity && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.entity}</p>}
                    </div>

                    {/* Email */}
                    <div className='flex flex-col h-15'>
                        <label htmlFor="email" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.email")}</label>
                        <input
                        type=""
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.email ? "mt-2" : "-mt-2"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className='flex flex-col h-15'>
                        <label htmlFor="phone" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.phone-number")}</label>
                        <input
                        type="tel"
                        name="phone"
                        maxLength="9"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.phone ? "mt-2" : "-mt-2"}`}
                        />
                        {errors.phone && <p className="text-red-500 text-[9px] sm:text-sm m-1">{errors.phone}</p>}
                    </div>

                    {/* Service */}
                    <div className='flex flex-col h-15'>
                        <label htmlFor="service" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.type-of-service")}</label>
                        <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.service ? "mt-2" : "-mt-2"}`}
                        >
                        <option value=""/>
                        <option value={t("nav.smart_home")}>{t("nav.smart_home")}</option>
                        <option value={t("nav.security")}>{t("nav.security")}</option>
                        <option value={t("nav.network")}>{t("nav.network")}</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.service}</p>}
                    </div>

                    {/* Region */}
                    <div className='flex flex-col h-15'>
                        <label htmlFor="region" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.city")}</label>
                        <select
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.region ? "mt-2" : "-mt-2"}`}
                        >
                            <option value="" className=''/>
                            <option value={t("contact.riyadh")}>{t("contact.riyadh")}</option>
                            <option value={t("contact.jeddah")}>{t("contact.jeddah")}</option>
                            <option value={t("contact.dammam")}>{t("contact.dammam")}</option>
                            <option value={t("contact.abha")}>{t("contact.abha")}</option>
                            <option value={t("contact.mecca")}>{t("contact.mecca")}</option>
                            <option value={t("contact.madina")}>{t("contact.madina")}</option>
                            <option value={t("contact.asir")}>{t("contact.asir")}</option>
                            <option value={t("contact.najran")}>{t("contact.najran")}</option>
                        </select>
                        {errors.region && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.region}</p>}
                    </div>

                    {/* Message */}
                    <div className='flex flex-col h-20'>
                        <label htmlFor="message" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.message")}</label>
                        <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    className="border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base "
                        />
                    </div>

                    <button type="submit" dir={i18next.language === 'ar' ? 'rtl' : 'ltr'} className="relative self-end cursor-pointer  group px-1 py-1 rounded-full inline-flex justify-center items-center gap-2 overflow-hidden border border-primary hover:border-b-primary transition hover:delay-130 hover:border-x-primary-1 hover:border-t-primary-1">
                        <div className="text-base bold-arabic px-1 pb-1 z-1 text-primary group-hover:text-white ">{t("contact.send")}</div>
                        <div className="w-8 h-8 relative overflow-hidden border border-primary rounded-full z-1 group-hover:bg-white"> 
                            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 left-[5.7px] top-[7.6px] absolute transform rotate-40 duration-300 text-primary"/>
                        </div> 
                        <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 ease-out group-hover:w-90 group-hover:h-90 z-0" />
                    </button>                
                </form>
                </div>
            </div>
        </div>
    </div>
    <Map/>
    </>
  )
}

export default Contact