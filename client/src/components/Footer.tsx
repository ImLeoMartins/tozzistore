import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component - Industrial Moderno Design
 * Features: Contact info, links, social media, newsletter
 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-20">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-foreground font-bold">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Tozzi</h3>
                <p className="text-xs text-white/70">Materiais Elétricos</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              Sua loja online de confiança para materiais e equipamentos elétricos de qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-all duration-300 ease-in-out text-sm">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 text-sm">(11) 9999-9999</p>
                  <p className="text-white/60 text-xs">Seg-Sex: 8h-18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white/80 text-sm">contato@tozzi.com.br</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white/80 text-sm">São Paulo, SP</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Social Media */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            <p>
              &copy; 2024 Tozzi Materiais Elétricos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
