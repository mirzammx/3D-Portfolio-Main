import { useEffect, useState } from "react";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 1. Handle Token from URL (Handshake from Auth App)
    const searchParams = new URLSearchParams(window.location.search);
    const urlToken = searchParams.get('token');
    if (urlToken) {
      localStorage.setItem('token', urlToken);
      // Clean up the URL so the token isn't visible
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // 2. Check Authentication
    const token = localStorage.getItem('token');
    if (!token) {
      // Not logged in? Redirect to Auth App immediately
      window.location.href = 'http://localhost:8081';
      return;
    }

    // 3. If Authenticated, allow rendering
    setIsAuthenticated(true);
    
    // Add smooth fade-in effect on page load
    setIsLoaded(true);
  }, []);

  // Prevent rendering protected content if not authenticated
  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className={`app-container transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
