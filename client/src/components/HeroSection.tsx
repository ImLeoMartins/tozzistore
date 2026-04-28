import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import tozzifoto from '../assets/tozzifoto.jpg';
import tozzifoto1 from '../assets/tozzifora.jpg';
import tozzifoto2 from '../assets/tozzifoto2.jpg';
import tozzifoto3 from '../assets/tozzifoto3.jpg';
import tozzicerq1 from '../assets/tozzicerq1.jpg';
import tozzicerq2 from '../assets/tozzicerq2.jpg';
import tozzicerq3 from '../assets/tozzicerq3.jpg';

  const phoneNumber = '5515991163645'; // coloque seu número com DDD
  const message = 'Olá! Vim pelo site e gostaria de um orçamento.';
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

/**
 * Hero Section com carrossel no background
 */
export default function HeroSection() {
  const images = [
    tozzifoto1,
    tozzifoto,
    tozzifoto2,
    tozzifoto3,
    tozzicerq1,
    tozzicerq2,
    tozzicerq3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundAttachment: 'fixed',
            }}
          />
        ))}

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-48">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">
              Bem-vindo à Tozzi
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Materiais Elétricos de
            <span className="block text-primary mt-2">
              Qualidade Garantida
            </span>
          </h1>

          {/* Texto */}
          <p className="text-xl text-gray-100 mb-8 max-w-xl leading-relaxed">
            Sua loja online de confiança para todos os materiais e equipamentos
            elétricos. Produtos de qualidade, preços competitivos e atendimento
            profissional.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href= { whatsappLink }>
              <Button
                size="lg"
                className="bg-primary hover:bg-yellow-600 text-primary-foreground font-bold rounded-lg transition-all duration-300 shadow-lg"
              >
                Faça um orçamento
                <ArrowRight className="ml-2" size={20} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 mt-16 pt-16 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-sm text-gray-200">Produtos em Estoque</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-gray-200">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corte diagonal */}
      <div
        className="absolute -bottom-px left-0 right-0 h-24 bg-white"
        style={{
          clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
        }}
      ></div>
    </section>
  );
}