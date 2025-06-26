import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Agency from './pages/Agency';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import HiringSolutionsPage from './pages/HiringSolutionsPage';
import WebDevelopment from './pages/WebDevelopment';

// Blog Post Pages (or Detailed Sections)
import Essential from './pages/firstbg';
import Responsive from './pages/Responsive';
import Guide from './pages/Guide';
import Leveraging from './pages/Leveraging';
import Hiring from './pages/Hiring';
import Seo from './pages/Seo';
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="agency" element={<Agency />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="hiring-solutions" element={<HiringSolutionsPage />} />
          <Route path="webdevelopment" element={<WebDevelopment />} />
          

          {/* Blog Details / Extended Content */}
          <Route path="firstbg" element={<Essential />} />
          <Route path="responsive" element={<Responsive />} />
          <Route path="guide" element={<Guide />} />
          <Route path="leveraging" element={<Leveraging />} />
          <Route path="hiring" element={<Hiring />} />
          <Route path="seo" element={<Seo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
