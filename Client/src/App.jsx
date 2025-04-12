import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Courses from './pages/Courses';
import Store from './pages/Store';
import Team from './pages/Team';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route 
            path="/about" 
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            } 
          />
          <Route 
            path="/services" 
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            } 
          />
          <Route 
            path="/portfolio" 
            element={
              <PageWrapper>
                <Portfolio />
              </PageWrapper>
            } 
          />
          <Route 
            path="/courses" 
            element={
              <PageWrapper>
                <Courses />
              </PageWrapper>
            } 
          />
          <Route 
            path="/store" 
            element={
              <PageWrapper>
                <Store />
              </PageWrapper>
            } 
          />
          <Route 
            path="/team" 
            element={
              <PageWrapper>
                <Team />
              </PageWrapper>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } 
          />
          <Route 
            path="/faq" 
            element={
              <PageWrapper>
                <FAQ />
              </PageWrapper>
            } 
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
