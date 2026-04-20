import { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tozzilogo from '../assets/tozzilogo.png'

/**
 * Header Component - Industrial Moderno Design
 * Features: Logo, Navigation, Search, Cart, Mobile Menu
 * Colors: Yellow (#FFC107) accent on dark gray (#2C3E50) background
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1A3D2B] border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={ tozzilogo } alt="ieuslapoha" className='h-50 w-auto'/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground text-white hover:text-primary font-medium transition-all duration-300 ease-in-out text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button className="p-2 hover:bg-primary rounded-lg transition-all duration-300 ease-in-out hidden sm:flex">
              <Search size={20} className="text-muted" />
            </button> 

            {/* Cart Button */}
            <button className="relative p-2 hover:bg-primary rounded-lg transition-all duration-300 ease-in-out">
              <ShoppingCart size={20} className="text-muted" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-orange-500 text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-in-out"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 px-0 text-foreground hover:text-primary font-medium transition-all duration-300 ease-in-out text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
