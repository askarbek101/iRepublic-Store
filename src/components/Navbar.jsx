import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { iRepLogoImg } from '../utils';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#161617] bg-opacity-80 backdrop-blur-sm z-50 h-[44px]">
        <div className="max-w-[1400px] mx-auto px-4 h-full">
          <div className={`flex items-center ${isMobileScreen ? 'justify-start gap-4' : 'justify-between'} h-full`}>
            <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={iRepLogoImg} alt="iRepublic" className="w-[18px] h-[18px]" />
            </Link>

            {isMobileScreen && (
              <button 
                className="text-white opacity-80 hover:opacity-100 transition-opacity ml-2" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}

            {!isMobileScreen && (
              <ul className="flex items-center justify-center space-x-8 h-full flex-1">
                <li className="h-full">
                  <Link 
                    to="/used" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    Б/У
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/mac" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    Mac
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/ipad" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    iPad
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/iphone" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    iPhone
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/watch" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    Watch
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/airpods" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    AirPods
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/trade-in" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    Trade In
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/compare" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    Сравнить
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/accessories" 
                    className="text-[#f5f5f7] text-[14px] font-normal opacity-80 hover:opacity-100 transition-opacity h-full flex items-center"
                  >
                    Аксессуары
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;