import { useRef, useEffect } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Headings from './Components/Headings/Headings.jsx';
import CategorySection from "./Components/Category/CategorySection.jsx";
import Banner from "./Components/Banner/BannerSection.jsx";

function App() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarEl = navbarRef.current;
    if (!navbarEl) return;

    const setNavbarHeight = () => {
      const height = navbarEl.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    };

    setNavbarHeight();

    const observer = new ResizeObserver(setNavbarHeight);
    observer.observe(navbarEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div ref={navbarRef}>
        <Navbar />
      </div>

      <Headings />

      <main className="w-full overflow-x-hidden">
        <CategorySection />
        <Banner />
      </main>
    </div>
  );
}

export default App;