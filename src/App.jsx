import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Home from './pages/home'
import About_us from './pages/about_us'
import Smart_home from './pages/smart_home'
import Security from './pages/security'
import Network from './pages/network'
import News from './pages/news';
import Blogs from './pages/blogs';
import FAQ from './pages/FAQ';
import Services from './pages/services';
import Project from './pages/project';
import Product from './pages/product';
import Contact from './pages/contact';
import Layout from './component/layout';

import NewsDetail from './pages/NewsDetail';
import Security_details from './pages/security_details';
import Smart_home_details from './pages/smart_home_details';
import Network_details from './pages/network_details';
import BlogDetails from './pages/blogs_details';

import './App.css'
import i18n from './i18n';
import ScrollToTop from './component/scrollTop';


function App() {
  const languages = [
  { code: 'ar', name: 'Arabic', dir: 'rtl' },
  { code: 'en', name: 'English', dir: 'ltr' }
];

  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(lng));

  const currentLangObj = languages.find((lang) => lang.code === locale);

  useEffect(() => {
      document.body.dir = currentLangObj.dir || "ltr";
  }, [currentLangObj]);


  return (
   <Router>
      <ScrollToTop/>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/smart_home" element={<Smart_home />} />
          <Route path="/security" element={<Security />} />
          <Route path="/network" element={<Network/>} />
          <Route path="/news" element={<News/>} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/:id' element={<Services/>}/>
          <Route path='/project' element={<Project/>}/>
          
          <Route path="/home_product" element={<Product />} />
          <Route path="/security_product" element={<Product />} />
          <Route path="/network_product" element={<Product />} />

          <Route path='/contact' element={<Contact/>}/>
          <Route path='/security/:id' element={<Security_details/>}/>
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path='/smart_home/:id' element={<Smart_home_details/>}/>
          <Route path='/network/:id' element={<Network_details/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>}/>
        </Route>
      </Routes>
    </Router>

  )
}

export default App
