import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import HiringSolutionsPage from './pages/HiringSolutionsPage';
import AboutPage from './pages/AboutPage';
import Blog from './pages/Blog';

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
        {/* ✅ Wrap nested routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* path="/" */}
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="hiring-solutions" element={<HiringSolutionsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
