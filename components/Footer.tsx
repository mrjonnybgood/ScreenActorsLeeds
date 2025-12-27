import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-zinc-700 rounded-full flex items-center justify-center overflow-hidden text-zinc-300">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-semibold text-zinc-100">
                SCREEN ACTORS <span className="text-zinc-500 text-xs tracking-widest uppercase">Leeds</span>
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              A supportive, after-work space to explore screen acting, build confidence on camera, and work scenes in a focused, friendly group.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-zinc-100 font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="hover:text-brand-teal transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-teal transition-colors">About</NavLink></li>
              <li><NavLink to="/book" className="hover:text-brand-teal transition-colors">Book a Place</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-teal transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
             <h3 className="text-zinc-100 font-medium mb-4">Location</h3>
             <p className="text-sm leading-relaxed mb-4">
               Number One, Kirkstall Forge,<br/>
               Great Exhibition Way,<br/>
               Leeds, LS5 3BF
             </p>
             <p className="text-sm text-zinc-500">
               © {new Date().getFullYear()} Screen Actors Leeds
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;