import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// All item imports
import { allNewsItems } from "../pages/news";
import { allsecurityItems } from "../pages/security";
import { allsmarthomeItems } from "../pages/smart_home";
import { allnetworkItems } from "../pages/network";
import { allblogsItems } from "../pages/blogs";
import { allservicesItems } from "../pages/services";
import { allproductItems } from "../pages/product";

const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
 
  const handleHome = () => {
      window.location.href = "/"; 
  };
  // 🗂 Source map for dynamic sections
  const sources = {
    news: allNewsItems,
    security: allsecurityItems,
    smart_home: allsmarthomeItems,
    network: allnetworkItems,
    blogs: allblogsItems,
    services: allservicesItems,
    product: allproductItems
  };
  //  Lookup label dynamically by segment or ID
  const getDynamicLabel = (segment, prevSegment) => {
    if (sources[segment]) {
      return t(`nav.${segment}`); 
    }

    const source = sources[prevSegment];
    if (source) {
      const item = source.find(obj => String(obj.id) === segment);
      return item?.text || item?.title || null;
    }

    return null;
  };

  // 🏷 Static labels fallback
  const labels = {
    "about":t("nav.about"),
    "smart_home":t("nav.smart_home"),
    "security":t("nav.security"),
    "network":t("nav.network"),
    "news":t("nav.news"),
    "blogs":t("nav.blogs"),
    "FAQ":t("nav.FAQ"),
    "project":t("nav.top_projects"),
    "contact":t("nav.Contact"),
    "contracting":t("nav.Contracts"),
    "consulting":t("nav.Consulting"),
    "maintenance":t("nav.Maintenance"),
    "upgrade":t("nav.Upgrades"),
    "home_product":t("nav.home-p"),
    "security_product":t("nav.security-p"),
    "network_product":t("nav.network-p")
  }

  return (
    <nav className="text-gray-600 font-light font-['Montserrat-Arabic'] leading-relaxed">
      <ul className="flex flex-wrap gap-2 justify-end items-center">
        <li className="flex items-center gap-1 max-w-[4rem]">
          <button onClick={handleHome} className="hover:text-primary cursor-pointer whitespace-nowrap truncate inline-block">
            {t("nav.home")}
          </button>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const handleClick = () => {
            window.location.href = routeTo; // 🔁 This forces a page reload
          };
          const isLast = index === pathnames.length - 1;
          const prevSegment = pathnames[index - 1];
          const labelKey = getDynamicLabel(name, prevSegment) || labels[name] || decodeURIComponent(name);
          const label = t(labelKey); // Translate the key to Arabic

          return (
            <li key={name} className="flex items-center gap-1 max-w-[5rem] sm:max-w-[10rem]">
              <span className="mx-2">/</span>
              {/* Conditionally render the breadcrumb item based on whether it's the last one */}
              {isLast ? (
                // If it's the last item, render as plain text (non-clickable)
                <span
                  title={label}
                  className="text-gray-500 whitespace-nowrap truncate inline-block"
                >
                  {label}
                </span>
              ) : (
                // If it's not the last item, render as a clickable button
                <button
                  onClick={handleClick}
                  title={label}
                  className="hover:text-primary cursor-pointer whitespace-nowrap truncate inline-block"
                >
                  {label}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;