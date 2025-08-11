import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SectionsHeader from '../component/sectionsHeader';
import { Infobox } from "../component/InfoBlock";

//image
import image from "../assets/img/news.webp";
import photo1 from "../assets/img/news (1).webp";
import photo2 from "../assets/img/news (2).webp";
import photo3 from "../assets/img/news (3).webp";
import photo4 from "../assets/img/news (4).webp";
import photo5 from "../assets/img/news (5).webp";
import photo6 from "../assets/img/news (6).webp";
import photo7 from "../assets/img/news (7).webp";
import photo8 from "../assets/img/news (8).webp";

import { useTranslation } from 'react-i18next';
export const allNewsItems = [
    { id:"news.1.title", image: photo7, date: "news.1.date",title: "news.1.title", details: "news.1.details" ,details1:"news.1.details1",details2:"news.1.details2"},
    { id:"news.2.title", image: photo8, date: "news.2.date",title: "news.2.title", details: "news.2.details" ,details1:"news.2.details1",details2:"news.2.details2"},
    { id:"news.3.title", image: photo6, date: "news.3.date",title: "news.3.title", details: "news.3.details" ,details1:"news.3.details1",details2:"news.3.details2"},
    { id:"news.4.title", image: photo5, date: "news.4.date",title: "news.4.title", details: "news.4.details" ,details1:"news.4.details1",details2:"news.4.details2"},
    { id:"news.5.title", image: photo4, date: "news.5.date",title: "news.5.title", details: "news.5.details" ,details1:"news.5.details1",details2:"news.5.details2"},
    { id:"news.6.title", image: photo3, date: "news.6.date",title: "news.6.title", details: "news.6.details" ,details1:"news.6.details1",details2:"news.6.details2"},
    { id:"news.7.title", image: photo2, date: "news.7.date",title: "news.7.title", details: "news.7.details" ,details1:"news.7.details1",details2:"news.7.details2"},
    { id:"news.8.title", image: photo1, date: "news.8.date",title: "news.8.title", details: "news.8.details" ,details1:"news.8.details1",details2:"news.8.details2"},
  ];
  
const News = () => {
  const paginationRef = useRef(null); 
  const { t } = useTranslation();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(allNewsItems.length / itemsPerPage);

  const displayedItems = allNewsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNum) => {setCurrentPage(pageNum);
    if (paginationRef.current) {
      const topOffset = paginationRef.current.offsetTop - 110; // scroll 110px above
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }

  return (
    <>
      {/*header*/}
      <SectionsHeader name={t("nav.news")} image={image} namestyle='text-white'  />
      {/*content*/} 
      <div ref={paginationRef} dir='rtl' className="grid grid-cols-1 lg:grid-cols-2 lg:mt-30 mt-15 md:gap-10 lg:mx-18 md:mx-9 mx-5 md:p-5">
        {displayedItems.map((item, index) => (
          <Infobox
            key={index}
            image={item.image}
            date={t(item.date)}
            title={t(item.title)}
            details={t(item.details)}
            imagestyle='object-top'
            goTo={`/news/${item.id}`}
            className="w-fit"
          />
        ))}
      </div>
      {/* Pagination Bar */}
      <div  dir='rtl' className="flex justify-center items-center gap-2 mt-10 rtl">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="group relative cursor-pointer group px-1 py-1 rounded-full inline-flex justify-center items-center gap-2 overflow-hidden border hover:border-b-primary transition hover:delay-130 hover:border-x-primary-1 hover:border-t-primary-1 text-primary hover:text-white">
            <div className="w-8 h-8 relative overflow-hidden border rounded-full z-1 text-white bg-primary group-hover:bg-white group-hover:text-primary"> 
              <FontAwesomeIcon icon={faAngleRight} size='lg' className="w-5 h-5 left-[6.5px] top-[5px] absolute transform duration-300"/>
            </div>
            <div className="text-center justify-start text-base bold-arabic px-1 pb-1 z-1 group-hover:text-white">{t("news.prev")}</div> 
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 ease-out group-hover:w-90 group-hover:h-90 z-0 $" />
          </button>
        )}

        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 rounded-full font-bold ${
              currentPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'
            } hover:bg-primary hover:text-white transition`}
          >
            {i + 1}
          </button>
        ))}

        {currentPage < pageCount && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="group relative cursor-pointer group px-1 py-1 rounded-full inline-flex justify-center items-center gap-2 overflow-hidden border hover:border-b-primary transition hover:delay-130 hover:border-x-primary-1 hover:border-t-primary-1 text-primary hover:text-white">
            <div className="text-center justify-start text-base bold-arabic px-1 pb-1 z-1 group-hover:text-white">{t("news.next")}</div> 
            <div className="w-8 h-8 relative overflow-hidden border rounded-full z-1 text-white bg-primary group-hover:bg-white group-hover:text-primary"> 
              <FontAwesomeIcon icon={faAngleLeft} size='lg' className="w-5 h-5 left-[5px] top-[5px] absolute transform duration-300"/>
            </div>
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 ease-out group-hover:w-90 group-hover:h-90 z-0 $" />
          </button>
        )}
      </div>
    </>
  );
};

export default News;
