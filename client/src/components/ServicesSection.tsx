import { Truck, Shield, Headphones, TrendingDown } from 'lucide-react';

/**
 * Services Section - Industrial Moderno Design
 * Features: 4 main services with icons and descriptions
 * Uses generated service icons background
 */
export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entrega em 24-48 horas para a maioria das regiões',
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Todos os produtos com garantia e certificação',
    },
    {
      icon: Headphones,
      title: 'Suporte Profissional',
      description: 'Atendimento especializado para suas dúvidas',
    },
    {
      icon: TrendingDown,
      title: 'Preços Competitivos',
      description: 'Melhores preços do mercado com qualidade',
    },
  ];

  return (
    <section id="saibamais" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a Tozzi?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos líderes em qualidade e confiabilidade no mercado de materiais elétricos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-all duration-300 ease-in-out"></div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 ease-in-out">
                  <Icon size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
