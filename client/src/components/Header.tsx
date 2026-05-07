import { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tozzilogo from '../assets/Logos/tozzilogo.png'

/**
 * Header Component - Industrial Moderno Design
 * Features: Logo, Navigation, Search, Cart, Mobile Menu
 * Colors: Yellow (#FFC107) accent on dark gray (#2C3E50) background
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = '5515991163645'; // coloque seu número com DDD
  const message = 'Olá! Vim pelo site e gostaria de um orçamento.';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const handleScroll = (href: string) => {
  const element = document.querySelector(href);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Orçamento', href: whatsappLink },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Parceiros', href: '#parceiros' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1A3D2B] shadow-sm border-b border-black/10">
      <div className="container">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={tozzilogo} alt="tozzilogo" className='h-50 w-auto' />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 space-between">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.href)}
                  className="text-white hover:text-primary font-medium transition-all duration-300 text-sm"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary font-medium transition-all duration-300 text-sm"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">



            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-in-out"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
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
                className="block py-2 px-0 text-white hover:text-primary font-medium transition-all duration-300 ease-in-out text-sm"
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
