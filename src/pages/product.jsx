import SectionsHeader from '../component/sectionsHeader';
import ProductImages from '../component/productImages';
import subtract1 from "../assets/img/solution_image (1).png";
import subtract2 from "../assets/img/solution_image (2).png";
import subtract3 from "../assets/img/solution_image (3).png";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// Helper to create image URLs
function generateImageUrls(folderName, count) {
  return Array.from({ length: count }, (_, i) => `/${folderName}/${folderName}-${i + 1}.jpg`);
}

// Product data
const homeImages = generateImageUrls('home', 30);
const securityImages = generateImageUrls('security', 16);
const networkImages = generateImageUrls('network', 11);

export const allproductItems = [
  {id: "home_product",text: "product.home_product",image: subtract2,listOfImage: homeImages,},
  {id: "security_product",text: "product.security_product",image: subtract1,listOfImage: securityImages,},
  {id: "network_product",text: "product.network_product",image: subtract3,listOfImage: networkImages,},
];

const Product = () => {
  const { t } = useTranslation();
  const path = window.location.pathname.replace("/", ""); // e.g. "home_product"

  const currentIndex = allproductItems.findIndex(p => p.id === path);
  const currentproduct = allproductItems[currentIndex];
  const prevproduct = allproductItems[(currentIndex - 1 + allproductItems.length) % allproductItems.length];
  const nextproduct = allproductItems[(currentIndex + 1) % allproductItems.length];
  const handleprev = () => {
        window.location.href = `/${prevproduct.id}`; 
    };
    const handlenext = () => {
        window.location.href = `/${nextproduct.id}`; 
    };

  if (currentIndex === -1 || !currentproduct) {
    return <p className="text-center mt-10">الخبر غير موجود</p>;
  }

  return (
    <>
    {/*header*/}
      <SectionsHeader
        name={t(currentproduct.text)}
        image={currentproduct.image}
        namestyle='text-white'
        space="hidden"
      />
      {/*product images*/}
      <ProductImages images={currentproduct.listOfImage} />
      {/*navigation*/}
      <div dir='ltr' className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-15 mt-10 lg:px-20 md:px-10 px-5">
        
        {/* NEXT PRODUCT */}
        <li dir='rtl' className="flex flex-col md:items-end items-center text-center">
          <button
            onClick={handlenext}
            className="group w-18 cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden"
          >
            <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform translate-x-3 group-hover:-translate-x-2 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
              <span className="-mt-2 text-3xl">›</span>
              {t("services.next")}
              <span className="-mt-2 text-3xl">›</span>
            </div>
          </button>
          <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
            <div className={`md:text-left ${i18next.language==='ar'?"text-right":"text-left"}`}>
              <h2 className="text-gray-500 text-sm font-light leading-tight font-['Montserrat-Arabic'] tracking-tight">
                {t("product.title")}
              </h2>
              <div
                dir={i18next.language==='en'?"ltr":"rtl"} className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30 truncate">
                {t(nextproduct.text)}
              </div>
            </div>
            <img
              src={nextproduct.image}
              alt={t(nextproduct.text)}
              className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
            />
          </div>
        </li>

        {/* Center Decoration */}
        <div className="md:mt-15">
          <div className="flex items-center justify-end gap-2 hover:text-primary">
            <span className="font-medium text-primary">
              <div className='grid grid-cols-2 gap-0.5 group'>
                {[1, 2].map((_, index) => (
                  <div key={index} className='h-2.5 w-2.5 border-2 group-hover:border-t-primary-2 group-hover:border-x-primary-1' />
                ))}
                {[1, 2].map((_, index) => (
                  <div key={`b-${index}`} className='h-2.5 w-2.5 border-2 group-hover:border-t-primary-1 group-hover:border-x-primary' />
                ))}
              </div>
            </span>
          </div>
        </div>

        {/* PREVIOUS PRODUCT */}
        <li className="flex flex-col md:items-end items-center text-center">
          <button
            onClick={handleprev}
            className={`group ${i18next.language==='en'?"w-25":"w-18"} cursor-pointer text-lg font-light font-['Montserrat-Arabic'] border-b pb-2 border-b-primary-1 hover:border-b-primary-2 overflow-hidden`}
          >
            <div className="flex items-start gap-2 w-20 transition-all duration-300 ease-in-out transform -translate-x-3 group-hover:translate-x-1 group-hover:bg-gradient-to-b group-hover:from-primary-1 group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent text-dark-primary">
              <span className="-mt-2 text-3xl">›</span>
              {t("services.prev")}
              <span className="-mt-2 text-3xl">›</span>
            </div>
          </button>
          <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-6">
            <div className={`md:text-right ${i18next.language==='ar'?"text-right":"text-left"}`}>
              <h2 className="text-gray-500 text-sm font-light font-['Montserrat-Arabic'] leading-tight tracking-tight">
                {t("product.title")}
              </h2>
              <div
                dir={i18next.language === 'en' ? "ltr" : "rtl"}
                className="text-gray-900 text-xl font-normal font-['Montserrat-Arabic'] leading-loose lg:w-50 w-30  truncate"
              >
                {t(prevproduct.text)}
              </div>
            </div>
            <img
              src={prevproduct.image}
              alt={t(prevproduct.text)}
              className="sm:w-40 sm:h-32 w-30 h-22 object-cover rounded-md"
            />
          </div>
        </li>
      </div>
    </>
  );
};

export default Product;
