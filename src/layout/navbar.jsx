import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"

import { HiMenu, HiX } from 'react-icons/hi'
import { AdminButton } from '../component/buttons'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
//import image
import logo from '../../public/Logo.svg'
import icon from "../assets/img/caret-down.svg"
import icon1 from "../assets/img/caret-down-fill 1.svg"
import Popup from '../pages/popup';

function Navbar  () {
  const navigate = useNavigate();
  const isLargeScreen = window.innerWidth >= 1024; //make sure the nav effect will work only with large screen
  const [isopen, setisopen]=useState(false) //small screen navbar
  const navRef = useRef(null);
  useEffect(() => {
      const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setisopen(false);
        }
        };
        if (isopen) {
          document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
  }, [isopen]);
  //check the active link
  const [hoveredlinkId, setHoveredlinkId] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [hoveredcontentId, setHoveredcontentId] = useState(null);
  //small screen navbar animation
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [itemDropdownId, setItemDropdownId] = useState(null);
  const [clickedArrow, setClickedArrow] = useState(false);
  const toggleSubmenu = (id) => {
      setOpenDropdownId((prev) => (prev === id ? null : id));
  };
  const toggleSubmenuItem = (id) => {
      setItemDropdownId((prev) => (prev === id ? null : id));
  };
  //reload the page to make it work with all animation and styles
  const handleHome = () => {
        window.location.href = `/`; 
  };
  //load the data from json file
  const { t } = useTranslation();
  const [activelink, setactivelink]=useState("/"); 
  const location = useLocation();
  useEffect(() => { //to change the active link based on the current path
    setactivelink(location.pathname);
  }, [location.pathname]);
  //button to change the language of the website
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language.toUpperCase());
  const toggleLanguage = () => {
      const newLang = lang === 'EN' ? 'AR' : 'EN';
      setLang(newLang);
      i18n.changeLanguage(newLang.toLowerCase());
  };
  const languageButtonLabel = lang === 'EN' ? 'AR' : 'EN';
  // State to track whether the navigation bar is over the hero section
  const [navOnHero, setNavOnHero] = useState(true);
  // State to track the current pathname of the URL
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    // If the current path is not the homepage, disable nav-on-hero behavior
    if (pathname !== "/") {
      setNavOnHero(false);
      return;
    }
    // Function to update navOnHero based on scroll position
    function handleScroll() {
      // If the user has scrolled past the hero section, disable nav-on-hero
      setNavOnHero(window.scrollY < window.innerHeight - 100);
    }
    // Attach scroll listener to window
    window.addEventListener('scroll', handleScroll);
    // Run the scroll handler once on mount to set initial state
    handleScroll();
    // Cleanup: remove scroll listener when component unmounts or pathname changes
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
  useEffect(() => {
    // Listen for browser navigation events (e.g., back/forward)
    const onPopState = () => setPathname(window.location.pathname);
    // Attach popstate listener to window
    window.addEventListener('popstate', onPopState);
    // Cleanup: remove popstate listener on unmount
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
    const navlink=[ 
    {id: 1, href:"/", label:t("nav.home")},
    {id: 2, href:"/about", label:t("nav.about")},
    {id: 3, href:"#",label:t("nav.solutions"),
      submenu_href:[
        {id: 1, href:"/smart_home", label:t("nav.smart_home"),
          submenu: [
            {id: 1, href:"/smart_home/smart_light", label:t("nav.light")},
            {id: 2, href:"/smart_home/smart_conditioner", label:t("nav.conditioner")},
            {id: 3, href:"/smart_home/smart_devices", label:t("nav.devices")},
            {id: 4, href:"/smart_home/smart_curtain", label:t("nav.curtain")},
            {id: 5, href:"/smart_home/smart_voice", label:t("nav.voice")},
            {id: 6, href:"/smart_home/smart_sensors", label:t("nav.sensor")},
            {id: 7, href:"/smart_home/smart_garage", label:t("nav.garage")},
            {id: 8, href:"/smart_home/smart_shading", label:t("nav.shading")},
          ]
        },
        {id: 2, href:"/security", label:t("nav.security"),
          submenu: [
            {id: 1, href:"/security/CCTV", label:t("nav.CCTV")},
            {id: 2, href:"/security/intercom", label:t("nav.intercom")},
            {id: 3, href:"/security/smart_doors", label:t("nav.door")},
            {id: 4, href:"/security/attendance", label:t("nav.attendance")},
          ]
        },
        {id: 3, href:"/network", label:t("nav.network"),
          submenu: [
            {id: 1, href:"/network/wired", label:t("nav.wired")},
            {id: 2, href:"/network/wireless", label:t("nav.wireless")},
            {id: 3, href:"/network/communication", label:t("nav.communication")},
          ]
        },
      ] 
    },
    {id: 4, href:"#", label:t("nav.services"),
      submenu_href:[
        {id: 1, href:"/consulting", label:t("nav.Consulting")},
        {id: 2, href:"/contracting", label:t("nav.Contracts")},
        {id: 3, href:"/maintenance", label:t("nav.Maintenance")},
        {id: 4, href:"/upgrade", label:t("nav.Upgrades")},
      ] 
    },
    {id: 5, href:"#", label:t("nav.product"),
      submenu_href:[
        {id: 1, href:"/home_product", label:t("nav.home-p")},
        {id: 2, href:"/security_product", label:t("nav.security-p")},
        {id: 3, href:"/network_product", label:t("nav.network-p")},
      ]
    },
    {id: 6, href:"/project", label:t("nav.top_projects")},
    {id: 7, href:"/news", label:t("nav.news")},
    {id: 8, href:"#", label:t("nav.help"),
      submenu_href:[
        {id: 1, href:"/blogs", label:t("nav.blogs")},
        {id: 2, href:"/FAQ", label:t("nav.FAQ")},
        {id: 3, href:"/contact", label:t("nav.Contact")},
      ] 
    },
    ]
   return (
      <div>
        <motion.div
          initial={isLargeScreen ? { opacity: 0.3, y: -100, filter: "blur(1px)"}: {y:0}}
          whileInView={isLargeScreen ? { opacity: 1, y: 0, filter: "blur(0px)"}: {y:0}}
          viewport={isLargeScreen ?{ once: true }:{}}
          transition={isLargeScreen ?{ duration: 0.8, ease: "easeOut"}: {}} 
          className={`largest:mt-6 largest:right-10 largest:left-10 left-0 right-0 largest:rounded-full md:py-2 pl-7 fixed z-40 largest:backdrop-blur-[6px] transition-colors duration-300
            ${navOnHero ? "bg-white/10" : "bg-white border border-gray-200 largest:shadow"}`}
        >
          {/* container content */}
          <div  className="justify-between flex ">
            {/* logo  */}
            <button  onClick={handleHome} className="sm:mr-8 mr-3 cursor-pointer sm:ml-5 -ml-3 mt-1.5 mb-3 small:w-fit w-26 small:h-fit h-15 ">
                <img loading="lazy" src={logo} alt="logo" className='mt-2'/>
            </button>
              {/* nav container */}
            <div className=" grid-cols-4 gap-1 justify-start w-full items-center hidden largest:grid">
              {/* nav */}
              <div className="fixed col-start-1 col-span-3 rounded-full">
                <nav>
                  <ul className="flex px-2.5 regular-arabic">
                    {navlink.map(link => {
                      const isParentActive =
                        activelink === link.href ||
                        activelink.startsWith(link.href + "/") || // handles cases like `/news/5`
                        link.submenu_href?.some(sub =>
                          sub.href === activelink ||
                          activelink.startsWith(sub.href + "/") ||
                          sub.submenu?.some(child =>
                            child.href === activelink || activelink.startsWith(child.href + "/")
                          )
                        );
                      return(
                      <li key={link.id} 
                      onMouseEnter={() => setHoveredlinkId(link.id)}
                      onMouseLeave={() => setHoveredlinkId(null)} 
                      className={`overflow-hidden ${lang=='AR'?"px-3":"px-2"} text-base font-light font-['Montserrat-Arabic'] group rounded-3xl cursor-pointer`}>
                        <a
                          href={link.href}
                          onClick={() => handleLinkClick(link.href)}
                          className={`relative flex items-center justify-between h-11 px-4 overflow-hidden rounded-3xl transform duration-400 group-hover:bg-white group-hover:text-primary
                            ${navOnHero ? "text-white" : "text-primary"}
                            ${activelink === link.href || isParentActive ? "bg-gradient-to-b from-blue-950 to-sky-800 text-white" : ""}
                          `}
                        >
                          <span className="block py-3 transition-transform duration-400 group-hover:-translate-y-full">{link.label}</span>
                          {
                            !link.submenu_href ?(
                              <span className={`block py-3 absolute top-full left-4 transition-all duration-400 group-hover:-top-0.5 ${activelink === link.href||isParentActive ? "text-white" : "text-primary-3" }`}>{link.label}</span>
                            ):(
                              <span className={`block py-3 absolute top-full ${lang=='AR'? "right-4.5": "right-8"} transition-all duration-400 group-hover:-top-0.5 ${activelink === link.href ||isParentActive ? "text-white" : "text-primary-3" }`}>{link.label}</span>
                            )
                          }
                          {link.submenu_href && (
                            <img loading="lazy" src={icon} className={`-mb-4.5 ${lang=='AR'?"mr-2":"ml-2"} ${navOnHero ? "brightness-500" : "brightness-100 group-hover:brightness-100"} ${activelink === link.href ||isParentActive  ? "brightness-500 group-hover:brightness-500" : "brightness-100 group-hover:brightness-100"} `}/>
                          )}
                        </a>
                        {link.submenu_href && hoveredlinkId === link.id && (
                          <div className='absolute top-full h-fit w-fit'>
                          <ul className="mt-4 w-[115%] py-4 px-6 bg-dark-primary rounded-3xl shadow-lg z-50 pointer-events-auto">
                            {link.submenu_href.map(item => {
                              const isLinkActive =
                          activelink === item.id ||
                          activelink.startsWith(item.id + "/") || // handles cases like `/news/5`
                          item.submenu?.some(child =>
                            child.href === activelink || activelink.startsWith(child.href + "/")
                          )
                             return(
                              <li key={item.id}
                              onMouseEnter={() => setHoveredItemId(item.id)}
                              onMouseLeave={() => setHoveredItemId(null)} 
                              className="py-2 relative">
                                <a 
                                  href={item.href}
                                  className={`relative flex items-center justify-between transition-transform duration-300 ${hoveredItemId === item.id || activelink === item.href || isLinkActive  ? 'text-primary-1' : 'text-white'}`}
                                >
                                  <div className='flex w-50 transition-all duration-75'>
                                    <img loading="lazy" src={icon1} className={`-mb-1 ${lang=='AR'?"ml-1":"mr-1"} transition-all duration-300 ease-in-out transform  ${hoveredItemId === item.id ? 'opacity-100 scale-100 ml-3' : 'opacity-0 scale-95 pointer-events-none'}`}/>
                                    <span className='block relative'>{item.label}</span>
                                  </div>
                                  {link.submenu_href?.some(item => Array.isArray(item.submenu) && item.submenu.length > 0) && (
                                    <div onClick={() => hoveredItemId(item.id)} className="block relative w-10">
                                      <span className={`block text-center text-xl transition-transform duration-300 ${hoveredItemId === item.id ? 'rotate-0' : '-rotate-90'}`}>›</span>
                                    </div>
                                  )}
                                </a>
                                {item.submenu && hoveredItemId === item.id && (
                                  <div className={`absolute top-0 ${lang=='AR'?"right-full":"left-full"} h-fit w-fit`}>
                                  <ul className={`${lang=='AR'?"mr-9":"ml-9"} w-full py-4 px-6 bg-dark-primary rounded-3xl shadow-lg z-50 pointer-events-auto`}>
                                    {item.submenu.map(content => (
                                      <li key={content.id}
                                      onMouseEnter={() => setHoveredcontentId(content.id)}
                                      onMouseLeave={() => setHoveredcontentId(null)} 
                                      className="py-2">
                                        <a 
                                          href={content.href}
                                          className={`relative w-60 flex items-center transition-transform duration-300 ${hoveredcontentId === content.id || activelink === content.href  ? 'text-primary-1' : 'text-white'}`}
                                        >
                                            <img loading="lazy" src={icon1} className={`-mb-1 ${lang=='AR'?"ml-1":"mr-1"} transition-all duration-300 ease-in-out transform  ${hoveredcontentId === content.id ? 'opacity-100 scale-100 ml-3' : 'opacity-0 scale-95 pointer-events-none'}`}/>
                                            <span className='block relative'>{content.label}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                  </div>
                                )}
                              </li>
                        )})}
                          </ul>
                          </div>
                        )}
                      </li>
                    )})}
                  </ul>
                </nav>
              </div>
              {/* contain button and lang */}
              <div className={`col-end-5 flex space-x-3 ${lang=='AR'?"lg:space-x-2":"lg:space-x-4"}  justify-end items-center mr-4`}>
                <AdminButton goTo='#popup' text={t("nav.button")} className2={`${navOnHero ? "bg-white text-primary-3 border-white":" bg-primary text-white border-primary group-hover:bg-white group-hover:text-primary"}`} className1={`${navOnHero ? "border-white text-white":" text-primary border-primary"}`}/>
                <button
                  onClick={toggleLanguage}
                  className="w-12 h-12 rounded-full font-bold flex items-center justify-center bg-primary text-white"
                >
                   {languageButtonLabel}
                </button>
              </div>
            </div>
              {/* mobile menu items */}
            <div className={`largest:hidden mx-4 fixed top-6 z-50 ${i18next.language==='ar'? "left-0":"right-0"}`}>
                <button onClick={()=>{setisopen(!isopen)}} className='largest:hidden'>
                  {
                  isopen ? <HiX className='size-7 text-primary relative z-50'/> : <HiMenu className='size-7 text-primary relative z-50'/>
                  }
                </button>
            </div>
            <AnimatePresence>
              {isopen &&(
                <motion.div ref={navRef}
                  initial={{width: "15%", opacity: 0 }}
                  whileInView={{opacity: 1 ,width: "20rem" }}
                  exit={{ width: "15%", opacity: 0 }}
                  transition={{ duration: 0.5}}
                  viewport={{once:true}} 
                  style={{overscrollBehavior: 'contain',WebkitOverflowScrolling: 'touch',}}
                  className={`largest:hidden ${navOnHero ? "bg-white/20 backdrop-blur-[60px]" : "bg-white"}  top-0 fixed flex flex-col ${i18next.language==='ar'? "left-0":"right-0"} overflow-y-auto h-[100vh] z-40 pt-6 pb-7`}>
                    {/*language button*/}
                    <button
                      onClick={toggleLanguage}
                      className="w-5 h-5 mx-5 mt-1 font-bold text-primary"
                      >
                      {languageButtonLabel}
                    </button>
                    <div className={`mt-10 ${i18next.language==='ar'? "mr-4":"ml-4"} `}>
                      <ul className="flex flex-col mb-5">
                        {navlink.map(link => {
                          const isParentActive =
                            activelink === link.href ||
                            activelink.startsWith(link.href + "/") || // handles cases like `/news/5`
                            link.submenu_href?.some(sub =>
                              sub.href === activelink ||
                              activelink.startsWith(sub.href + "/") ||
                              sub.submenu?.some(child =>
                                child.href === activelink || activelink.startsWith(child.href + "/")
                              )
                            );
                          return(
                          <li key={link.id} className="text-base font-light font-['Montserrat-Arabic'] group rounded-3xl cursor-pointer overflow-hidden">
                            <a
                              href={link.href}
                              onClick={(e) => {
                                if (clickedArrow) {
                                  e.preventDefault();
                                  setClickedArrow(false);
                                } else {
                                  handleLinkClick(link.href);
                                }
                              }}
                              className={`relative flex items-start justify-between px-4 py-2 overflow-hidden ${
                                activelink === link.href || isParentActive
                                  ? "text-primary-1"
                                  : navOnHero
                                  ? "text-white"
                                  : "text-primary"
                              }`}
                            >{link.label}
                              
                              {link.submenu_href && (
                                <span
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setClickedArrow(true);
                                    toggleSubmenu(link.id);
                                  }}
                                  className={`text-xl transition-transform duration-300 ${
                                    openDropdownId === link.id ? "-rotate-90" : "rotate-0"
                                  }`}
                                >
                                  ›
                                </span>
                              )}
                            </a>
                            {/* Main Submenu */}
                            {link.submenu_href && openDropdownId === link.id && (
                              <ul className={`${i18next.language === "ar" ? "mr-3" : "ml-3"}`}>
                                {link.submenu_href.map((item) => {
                                  const isLinkActive =
                                    activelink === item.id ||
                                    activelink.startsWith(item.id + "/") ||
                                    item.submenu?.some(
                                      (child) =>
                                        child.href === activelink ||
                                        activelink.startsWith(child.href + "/")
                                  );
                                  return (
                                    <li key={item.id} className="">
                                      <a
                                        href={item.href}
                                        onClick={(e) => {
                                          const clickedTag = e.target.tagName.toLowerCase();
                                          if (clickedTag === "span") {
                                            // If arrow span was clicked, do not navigate
                                            e.preventDefault();
                                          } else {
                                            handleLinkClick(link.href);
                                          }
                                        }}
                                        className={`relative flex items-center justify-between px-3 py-2 ${
                                          navOnHero ? "text-white" : "text-primary"
                                        } ${isLinkActive ? "text-primary-1" : ""}`}
                                      >
                                        <a>{item.label}</a>
                                        {item.submenu && (
                                          <span
                                            onClick={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              setClickedArrow(true);
                                              toggleSubmenuItem(item.id);
                                            }}
                                            className={`text-xl transition-transform duration-300 ${
                                              itemDropdownId === item.id ? "-rotate-90" : "rotate-0"
                                            }`}
                                          >
                                            ›
                                          </span>
                                        )}
                                      </a>
                                      {/* Sub-submenu */}
                                      {item.submenu && itemDropdownId === item.id && (
                                        <ul className={`${i18next.language === "ar" ? "mr-6" : "ml-6"} mt-1`}>
                                          {item.submenu.map((content) => (
                                            <li key={content.id} className="py-1.5">
                                              <a
                                                href={content.href}
                                                className={`relative flex items-center ${
                                                  navOnHero ? "text-white" : "text-primary"
                                                } ${
                                                  activelink === content.href ? "text-primary-1" : ""
                                                }`}
                                              >
                                                <span>{content.label}</span>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        )})}
                      </ul>
                      <AdminButton goTo='#popup' text={t("nav.button")} className2={`${navOnHero ? "bg-white text-primary-3 border-white":" bg-primary text-white border-primary group-hover:bg-white group-hover:text-primary"}`} className1={`${navOnHero ? "border-white text-white":" text-primary border-primary"}`}/>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
      </motion.div>
      {/*quote popup*/}
      <Popup/>
    </div>
  )
}

export default Navbar