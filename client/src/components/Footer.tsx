import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Clock
} from 'lucide-react';


  const phoneNumber = '5515991163645'; // coloque seu número com DDD
  const message = 'Olá! Vim pelo site e gostaria de um orçamento.';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#1A3D2B] text-white py-16 scroll-mt-24">
      <div className="container">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tozzi
            </h3>

            <p className="text-white/70 leading-relaxed text-sm">
              Materiais elétricos, hidráulicos, iluminação,
              ferramentas e atendimento especializado para sua obra.
            </p>
          </div>

          {/* Loja 1 */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-primary">
              Loja Cerquilho
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span>
                  <a
                    href="https://maps.app.goo.gl/fFH4SJvTEjfqGbDV8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-primary transition"
                  >
                    Av. Washington Luíz, 646 <br />
                    Centro - Cerquilho/SP
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-primary mt-1" />
                <span>(15) 3384-1068</span>
              </li>

              <li className="flex gap-3">
                <Clock size={18} className="text-primary mt-1" />
                <span>Seg a Sex: 7h às 17h</span>
              </li>
            </ul>
          </div>

          {/* Loja 2 */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-primary">
              Loja Tietê
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                  <a
                    href="https://maps.app.goo.gl/gYJCoEgBcfiTjT4J9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-primary transition"
                  >
                    Av. Fernando Costa, 301 <br />
                    Centro - Tietê/SP
                  </a>
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-primary mt-1" />
                <span>(15) 2108-1430</span>
              </li>

              <li className="flex gap-3">
                <Clock size={18} className="text-primary mt-1" />
                <span>Seg a Sáb: 7h às 17h</span>
              </li>
            </ul>
          </div>

          {/* Navegação / Redes */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-primary">
              Navegação
            </h4>

            <ul className="space-y-3 text-sm mb-6">
              <li><a href="#inicio" className="hover:text-primary">Início</a></li>
              <li><a href={ whatsappLink } className="hover:text-primary">Orçamento</a></li>
              <li><a href="#parceiros" className="hover:text-primary">Parceiros</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/tozzimateriaiseletricos/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Instagram size={18} />
              </a>

              <a href="https://www.facebook.com/p/Tozzi-Materiais-El%C3%A9tricos-100083655101902/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          © 2026 Tozzi Materiais Elétricos — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}