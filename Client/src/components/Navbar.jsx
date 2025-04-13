import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/store', label: 'Store' },
  { path: '/team', label: 'Team' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-primary"
            onClick={closeMenu}
          >
            Logo
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ path, label }) => (
              <li key={path} className="relative">
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive ? 'text-primary' : 'text-white hover:text-primary'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden py-4 space-y-2">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive ? 'text-primary' : 'text-white hover:text-primary'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 