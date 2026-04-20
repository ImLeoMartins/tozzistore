import { Zap, Cable, Lightbulb, Wrench, Gauge, Shield } from 'lucide-react';

/**
 * Categories Section - Industrial Moderno Design
 * Features: 6 product categories with icons
 * Uses diagonal layout and hover effects
 */
export default function CategoriesSection() {
  const categories = [
    {
      icon: Zap,
      name: 'Cabos e Fios',
      count: '250+ produtos',
      color: 'from-yellow-50 to-yellow-100',
    },
    {
      icon: Lightbulb,
      name: 'Iluminação',
      count: '180+ produtos',
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: Wrench,
      name: 'Ferramentas',
      count: '320+ produtos',
      color: 'from-orange-50 to-orange-100',
    },
    {
      icon: Gauge,
      name: 'Medidores',
      count: '95+ produtos',
      color: 'from-purple-50 to-purple-100',
    },
    {
      icon: Shield,
      name: 'Proteção',
      count: '210+ produtos',
      color: 'from-red-50 to-red-100',
    },
    {
      icon: Cable,
      name: 'Conectores',
      count: '340+ produtos',
      color: 'from-green-50 to-green-100',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary">Categorias</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Encontre tudo que você precisa em materiais elétricos organizados por categoria
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br ${category.color} rounded-xl border border-white/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden`}
              >
                {/* Diagonal accent line */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/60 transition-all duration-300 ease-in-out">
                    <Icon size={28} className="text-foreground" />
                  </div>

                  {/* Title and Count */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-foreground/70 font-medium">
                    {category.count}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 inline-flex items-center gap-2 text-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Mais
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
