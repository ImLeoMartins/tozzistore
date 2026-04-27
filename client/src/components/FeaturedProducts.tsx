import { Button } from '@/components/ui/button';

import logoSil from '../assets/Logos/Sil.png'
import logoJng from '../assets/Logos/JNG.png'
import logoTramontina from '../assets/Logos/Tramontina.png'
import logoSchneider from '../assets/Logos/Schneider.png'
import logoMargirius from '../assets/Logos/Margirius.png'
import logoBrum from '../assets/Logos/Brum.png'
import logoIntelbras from '../assets/Logos/intelbras.png'
import logoLorenzetti from '../assets/Logos/Lorenzetti.png'
import logoDewalt from '../assets/Logos/Dewalt.png'



export default function FeaturedProducts() {
  const suppliers = [
    {
      id: 1,
      name: 'Sil',
      category: 'Cabos Elétricos',
      description: 'Referência nacional em fios e cabos.',
      logo: logoSil,
      bg: '#FFF8E1',
    },
    {
      id: 2,
      name: 'JNG',
      category: 'Disjuntores',
      description: 'Soluções completas em proteção elétrica.',
      logo: logoJng,
      bg: '#E8F0FE',
    },
    {
      id: 3,
      name: 'Tramontina',
      category: 'Ferramentas',
      description: 'Qualidade e tradição brasileira.',
      logo: logoTramontina,
      bg: '#E8F0FE',
    },
    {
      id: 4,
      name: 'Schneider',
      category: 'Disjuntores',
      description: 'Soluções completas em proteção elétrica.',
      logo: logoSchneider,
      bg: '#ebffe5',
    },
    {
      id: 5,
      name: 'Margirius',
      category: 'Controles eletricos',
      description: 'Uma das principais fabricantes de controles eletricos',
      logo: logoMargirius,
      bg: '#e8f1ff',
    },
    {
      id: 6,
      name: 'Brum',
      category: 'Quadros Distribuição',
      description: 'Quadros pra distribuição.',
      logo: logoBrum,
      bg: '#EEF2FF',
    },
    {
      id: 7,
      name: 'Intelbras',
      category: 'Segurança',
      description: 'Líder em soluções de alta tecnologia em segurança.',
      logo: logoIntelbras,
      bg: '#eefff4',
    },
    {
      id: 8,
      name: 'Lorenzetti',
      category: 'Duchas e aquecedores',
      description: 'Líder em duchas e chuveiros.',
      logo: logoLorenzetti,
      bg: '#ffeeee',
    },
    {
      id: 9,
      name: 'DeWalt',
      category: 'Ferramentas',
      description: 'Líder em ferramentas elétricas industriais de alta performance.',
      logo: logoDewalt,
      bg: '#fff9ee',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary">
              Destaques
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos parceiros
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Trabalhamos com marcas reconhecidas no mercado, garantindo qualidade,
            segurança e desempenho em cada produto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suppliers.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Área da logo */}
              <div
                className="h-52 flex items-center justify-center p-8"
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-60 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">
                  {item.category}
                </p>

                <h3 className="text-2xl font-bold mb-2">
                  {item.name}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>

              {/* Linha hover */}
              <div className="h-1 bg-primary w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* botão */}
      </div>
    </section>
  );
}