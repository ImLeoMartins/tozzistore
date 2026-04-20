import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Tozzi Materiais Elétricos
 * Industrial Moderno Design with dynamic sections
 * Features: Hero, Services, Categories, Products, Testimonials, Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Categories Section */}
        <CategoriesSection />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
