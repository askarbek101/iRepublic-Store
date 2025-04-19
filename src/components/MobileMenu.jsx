import React from 'react';
import { Link } from 'react-router-dom';
import { iRepLogoImg } from '../utils';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="fixed top-0 right-0 w-full h-full bg-[#161617] bg-opacity-80 backdrop-blur-md overflow-y-auto">
        {/* Header with Logo */}
        <div className="flex items-center justify-between px-6 h-[44px] border-b border-[#424245] border-opacity-50">
          <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity" onClick={onClose}>
            <img src={iRepLogoImg} alt="iRepublic" className="w-[18px] h-[18px]" />
          </Link>
          <button 
            onClick={onClose}
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-2 divide-y divide-[#424245] divide-opacity-50">
          <li>
            <Link 
              to="/used" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              Б/У
            </Link>
          </li>
          <li>
            <Link 
              to="/mac" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              Mac
            </Link>
          </li>
          <li>
            <Link 
              to="/ipad" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              iPad
            </Link>
          </li>
          <li>
            <Link 
              to="/iphone" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              iPhone
            </Link>
          </li>
          <li>
            <Link 
              to="/watch" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              Watch
            </Link>
          </li>
          <li>
            <Link 
              to="/airpods" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              AirPods
            </Link>
          </li>
          <li>
            <Link 
              to="/trade-in" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              Trade In
            </Link>
          </li>
          <li>
            <Link 
              to="/compare" 
              className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
              onClick={onClose}
            >
              Сравнить
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu; 