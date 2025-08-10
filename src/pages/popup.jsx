import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useState,useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import popupImg from "../assets/img/popup.webp"

const Popup = () => {
    const {t}=useTranslation()
    const formRef = useRef();// Ref for accessing the form DOM element if needed
    // Initial form state
        const [formData, setFormData] = useState({
            name: "",
            entity: "",
            email: "",
            phone: "",
            service: "",
            applicant: "",
            region: "",
            description: "",
        });
    // Error state for validation messages
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
            // Validate service selection
            if (!formData.service) {newErrors.service =t("contact.empty-service") };
            if (!formData.applicant) {newErrors.applicant =t("contact.empty-applicant") };// Validate applicant type
            if (!formData.region) {newErrors.region =t("contact.empty-city")} ;// Validate region/city selection
            setErrors(newErrors);// Update error state
            // If no errors, show success message
            if (Object.keys(newErrors).length === 0) {
            alert(t("contact.success"));
            }
        };
  return (
    //get quote popup 
    <div id="popup" className="group h-[100vh] w-full fixed top-0 left-0 bg-black/30 !z-50 opacity-0 invisible transition-all target:opacity-100 target:visible">
        <div dir={i18next.language==='ar'?"ltr":"rtl"} className='bg-white p-5 sm:w-[75%] w-[85%] h-[75%] lg:h-fit text-gray-600 flex flex-row absolute top-[50%] left-[50%] translate-[-50%]  rounded-3xl shadow-[0_2rem_4rem_rgba(0,0,0, .2)] overflow-hidden opacity-0 transform scale-50 transition-all group-target:opacity-100 group-target:translate-[-50%] group-target:scale-110 delay-200'>
            <a href="#" className={`text-[2.6rem] absolute -top-3 ${i18next.language==='ar'?"right-2":"left-2"}  z-3 text-primary transition-all`}>&times;</a>
            <div className='w-[75%] md:block hidden rounded-3xl overflow-hidden'>
                    <img loading="lazy" src={popupImg} className='w-full h-full object-cover' />
            </div>
            <div className={`relative lg:h-fit h-full w-full bg-white z-1 overflow-y-auto lg:overflow-y-hidden`}>
                    <form dir={i18next.language==='ar'?"rtl":"ltr"} ref={formRef} onSubmit={handleSubmit} className="flex flex-col pt-10 sm:px-10 px-5 gap-4 relative z-0">
                        <h4 className='text-gray-700 lg:text-3xl text-3xl font-normal font-["Montserrat-Arabic"] leading-[54px] -mt-9'>{t("nav.button")}</h4>
                        {/* Name */}
                        <div className="flex flex-col h-fit">
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
                        <div className='flex lg:flex-row flex-col gap-5'>
                            {/*applicant type*/}
                            <div className='flex flex-col h-fit w-full'>
                                <label htmlFor="applicant" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.applicant")}</label>
                                <select
                                name="applicant"
                                value={formData.applicant}
                                onChange={handleChange}
                                className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.applicant ? "mt-2" : "-mt-2"}`}
                                >
                                <option value="" className='hidden'/>
                                <option value={t("contact.institution")}>{t("contact.institution")}</option>
                                <option value={t("contact.Private")}>{t("contact.Private")}</option>
                                <option value={t("contact.Individual")}>{t("contact.Individual")}</option>
                                <option value={t("contact.Seller")}>{t("contact.Seller")}</option>
                                <option value={t("contact.End")}>{t("contact.End")}</option>
                                <option value={t("contact.Installation")}>{t("contact.Installation")}</option>
                                <option value={t("contact.Other")}>{t("contact.Other")}</option>
                                </select>
                                {errors.applicant && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.applicant}</p>}
                            </div>
                            {/* Entity */}
                            <div className='flex flex-col h-fit w-full'>
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
                        </div>
                        <div className='flex lg:flex-row flex-col gap-5'>
                            {/* Email */}
                            <div className='flex flex-col h-fit w-full'>
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
                            <div className='flex flex-col h-fit w-full'>
                                <label htmlFor="phone" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.phone-number")}</label>
                                <input
                                type="tel"
                                name="phone"
                                maxLength="9"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.phone ? "mt-2" : "-mt-2"}`}
                                />
                                {errors.phone && <div className="mb-2 text-red-500 text-[11px] sm:text-[13px] mt-1">{errors.phone}</div>}
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-5'>
                            {/* Service */}
                            <div className='flex flex-col h-fit w-full'>
                                <label htmlFor="service" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.type-of-service")}</label>
                                <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.service ? "mt-2" : "-mt-2"}`}
                                >
                                <option value="" className='hidden'/>
                                <option value={t("nav.smart_home")}>{t("nav.smart_home")}</option>
                                <option value={t("nav.security")}>{t("nav.security")}</option>
                                <option value={t("nav.network")}>{t("nav.network")}</option>
                                <option value={t("contact.Rehabilitation")}>{t("contact.Rehabilitation")}</option>
                                <option value={t("contact.Installation_service")}>{t("contact.Installation_service")}</option>
                                <option value={t("contact.Other")}>{t("contact.Other")}</option>
                                </select>
                                {errors.service && <p className="text-red-500 text-xs sm:text-sm m-1">{errors.service}</p>}
                            </div>
                            {/* Region */}
                            <div className='flex flex-col h-fit w-full'>
                                <label htmlFor="region" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.city")}</label>
                                <select
                                name="region"
                                value={formData.region}
                                onChange={handleChange}
                                className={`border-b border-gray-300 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out text-base focus:mt-2 ${formData.region ? "mt-2" : "-mt-2"}`}
                                >
                                    <option value="" className='hidden'/>
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
                        </div>
                        {/* description */}
                        <div className='flex flex-col h-20'>
                            <label htmlFor="description" className='text-gray-500 text-sm font-normal font-["Montserrat-Arabic"]'>{t("contact.description")}</label>
                            <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
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
  )
}

export default Popup