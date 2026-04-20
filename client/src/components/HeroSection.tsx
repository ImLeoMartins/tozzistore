import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero Section - Industrial Moderno Design
 * Features: Large banner image, diagonal cut, CTA buttons
 * Uses generated hero banner with yellow lightning accent
 */
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029152858/CEGe7ELgrUVBTZoB6Lfwfj/hero-banner-tozzi-D6UGzXJF6UeCvvHYbbcLfw.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-48">
        <div className="max-w-2xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">Bem-vindo à Tozzi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Materiais Elétricos de
            <span className="block text-primary mt-2">Qualidade Garantida</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-100 mb-8 max-w-xl leading-relaxed">
            Sua loja online de confiança para todos os materiais e equipamentos elétricos. Produtos de qualidade, preços competitivos e atendimento profissional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-yellow-600 text-primary-foreground font-bold rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Explorar Produtos
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300 ease-in-out"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-sm text-gray-200">Produtos em Estoque</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-gray-200">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">24h</p>
              <p className="text-sm text-gray-200">Entrega Rápida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Cut Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
        clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
      }}></div>
    </section>
  );
}
