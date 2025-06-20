import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import HiringSolutionsPage from './pages/HiringSolutionsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/hiring-solutions" element={<HiringSolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;