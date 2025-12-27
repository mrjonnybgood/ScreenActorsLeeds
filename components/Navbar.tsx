import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Book', path: '/book' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-light/95 backdrop-blur-sm border-b border-zinc-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" onClick={closeMenu} className="flex items-center gap-3 group">
              <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-zinc-700 group-hover:border-brand-teal transition-colors text-white">
                {/* Placeholder Logo Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold tracking-wide text-zinc-900 group-hover:text-brand-teal transition-colors">
                SCREEN ACTORS <span className="text-zinc-500 font-sans text-sm tracking-widest font-normal uppercase">Leeds</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive || (item.path !== '/' && location.pathname.startsWith(item.path))
                      ? 'text-brand-teal border-b-2 border-brand-teal pb-1'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/book">
              <span className="bg-zinc-900 text-white px-5 py-2 text-sm font-medium hover:bg-zinc-800 transition-colors">
                Book a Place
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-zinc-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-brand-light border-b border-zinc-200 shadow-lg transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-brand-teal bg-teal-50/50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4">
            <NavLink to="/book" onClick={closeMenu}>
                <button className="w-full bg-zinc-900 text-white px-4 py-3 text-base font-medium hover:bg-zinc-800 transition-colors">
                    Book a Place
                </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;