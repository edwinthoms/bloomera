import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Sun, Moon, Flower } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white/80 p-2 shadow-lg backdrop-blur-md transition-colors dark:bg-neutral-900/80">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-xl p-2 transition-colors hover:bg-[#A47551]/10 dark:hover:bg-white/5 lg:hidden"
              >
                {isMenuOpen ? (
                  <X size={24} className="dark:text-white" />
                ) : (
                  <Menu size={24} className="dark:text-white" />
                )}
              </button>
              <Link to="/" className="ml-4 flex items-center">
                <Flower className="mr-2 h-6 w-6 text-[#A47551]" />
                <span className="text-2xl font-bold text-[#A47551] dark:text-[#A47551]">
                  Bloom Era
                </span>
              </Link>
            </div>

            <nav className="hidden lg:flex lg:space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-[#A47551]/10 dark:hover:bg-[#A47551]/20 
                    ${location.pathname === item.path 
                      ? 'text-[#A47551] dark:text-[#A47551]' 
                      : 'text-neutral-700 dark:text-neutral-300'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden rounded-xl sm:flex"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="rounded-xl"
                >
                  <Search size={18} />
                </Button>
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-xl bg-white shadow-xl dark:bg-neutral-800">
                    <div className="p-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 pr-10 text-sm focus:border-[#A47551] focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-700/50 dark:text-white dark:focus:border-[#A47551]"
                        />
                        <Search size={16} className="absolute right-3 top-2.5 text-neutral-400" />
                      </div>
                    </div>
                    {searchQuery && (
                      <div className="border-t border-neutral-100 bg-neutral-50/50 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-700/30">
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          Press Enter to search
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="relative">
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={onCartClick}
                  className="rounded-xl bg-[#A47551] px-4 hover:bg-[#8B6344]"
                >
                  <ShoppingBag size={18} />
                  {cartItemsCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-medium text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl dark:bg-neutral-900 sm:max-w-sm">
          <div className="flex h-20 items-center justify-between border-b border-neutral-100 px-6 dark:border-neutral-800">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Flower className="mr-2 h-6 w-6 text-[#A47551]" />
              <span className="text-2xl font-bold text-[#A47551]">Bloom Era</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="h-full overflow-y-auto px-6 py-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-[#A47551]/10 dark:hover:bg-[#A47551]/20
                    ${location.pathname === item.path 
                      ? 'text-[#A47551] dark:text-[#A47551]' 
                      : 'text-neutral-700 dark:text-neutral-300'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 space-y-4">
              <h3 className="px-4 text-sm font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                Customer Service
              </h3>
              {['Contact Us', 'Shipping Info', 'Returns', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center rounded-xl px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-[#A47551]/10 dark:text-neutral-400 dark:hover:bg-[#A47551]/20"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};