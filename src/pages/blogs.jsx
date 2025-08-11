import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SectionsHeader from '../component/sectionsHeader';
import { InfoBlock } from "../component/InfoBlock";
//images
import image from "../assets/img/blogs (5).webp";
import photo1 from "../assets/img/blogs (1).webp";
import photo2 from "../assets/img/blogs (2).webp";
import photo3 from "../assets/img/blogs (3).webp";
import photo4 from "../assets/img/blogs (4).webp";
import photo6 from "../assets/img/blogs (6).webp";
import photo7 from "../assets/img/blogs (7).webp";
import photo8 from "../assets/img/blogs (8).webp";
import photo9 from "../assets/img/blogs (9).webp";
import photo10 from "../assets/img/blogs (10).webp";
import photo11 from "../assets/img/blogs (11).webp";
import { useTranslation } from "react-i18next"

export const allblogsItems = [
  { id:1, image: photo1,title:"blogs.1.title",maindetails:"blogs.1.maindetails",content:"blogs.1.content"},
  { id:2, image: photo3,title:"blogs.2.title",maindetails:"blogs.2.maindetails",content:"blogs.2.content"},
  { id:3, image: photo11,title:"blogs.3.title",maindetails:"blogs.3.maindetails",content:"blogs.3.content"},
  { id:4, image: photo2,title:"blogs.4.title",maindetails:"blogs.4.maindetails",content:"blogs.4.content"},
  { id:5, image: photo9,title:"blogs.5.title",maindetails:"blogs.5.maindetails",content:"blogs.5.content"},
  { id:6, image: photo10,title:"blogs.6.title",maindetails:"blogs.6.maindetails",content:"blogs.6.content"},
  { id:7, image: photo6,title:"blogs.7.title",maindetails:"blogs.7.maindetails",content:"blogs.7.content"},
  { id:8, image: photo8,title:"blogs.8.title",maindetails:"blogs.8.maindetails",content:"blogs.8.content"},
  { id:9, image: photo7,title:"blogs.9.title",maindetails:"blogs.9.maindetails",content:"blogs.9.content"},
  { id:10, image: photo4,title:"blogs.10.title",maindetails:"blogs.10.maindetails",content:"blogs.10.content"}
];
  
const Blogs = () => {
  const paginationRef = useRef(null);
  const { t } = useTranslation()
  const itemsPerPage = 6;// Number of blog items to show per page
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number
// Calculate total number of pages based on item count
  const pageCount = Math.ceil(allblogsItems.length / itemsPerPage);
// Slice the blog items array to get only the items for the current page
  const displayedItems = allblogsItems.slice(
    (currentPage - 1) * itemsPerPage, // Start index
    currentPage * itemsPerPage // End index (non-inclusive)
  );
// Update current page when user selects a different one
  const handlePageChange = (pageNum) => {setCurrentPage(pageNum);
    if (paginationRef.current) {
      const topOffset = paginationRef.current.offsetTop - 130; // scroll 130px above
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }

  return (
    <>{/*blog header*/}
      <SectionsHeader
        name={t("blogs.name")}
        image={image}
        namestyle='text-white'
         /> {/*list of blog*/}
      <div ref={paginationRef} className="grid grid-cols-1 lg:grid-cols-2 lg:mt-30 mt-15 gap-15 px-4 sm:px-9 lg:px-18 mx-auto">
        {displayedItems.map((item, index) => (
          <InfoBlock 
              key={index}
              text={t(item.title)}
              subtext={t(item.maindetails)}
              image={item.image}
              goTo={`/blogs/${item.id}`} //see blogs details
            />
        ))}
      </div>

      {/* Pagination Bar */}
      <div dir='rtl' className="flex justify-center items-center gap-2 mt-20 rtl">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="group relative cursor-pointer group px-1 py-1 rounded-full inline-flex justify-center items-center gap-2 overflow-hidden border hover:border-b-primary transition hover:delay-130 hover:border-x-primary-1 hover:border-t-primary-1 text-primary hover:text-white">
            <div className="w-8 h-8 relative overflow-hidden border rounded-full z-1 text-white bg-primary group-hover:bg-white group-hover:text-primary"> 
              <FontAwesomeIcon icon={faAngleRight} size='lg' className="w-5 h-5 left-[6.5px] top-[5px] absolute transform duration-300"/>
            </div>
            <div className="text-center justify-start text-base bold-arabic px-1 pb-1 z-1 group-hover:text-white">{t("blogs.prev")}</div> 
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
            <div className="text-center justify-start text-base bold-arabic px-1 pb-1 z-1 group-hover:text-white">{t("blogs.next")}</div> 
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

export default Blogs;
