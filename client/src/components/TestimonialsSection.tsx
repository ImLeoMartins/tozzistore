import { Star } from 'lucide-react';

/**
 * Testimonials Section - Industrial Moderno Design
 * Features: Customer reviews and ratings
 * Uses generated testimonial background
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Reginaldo Delain',
      role: 'Eletricista parceiro',
      content:
        'Excelente qualidade de produtos e atendimento. Sempre encontro tudo que preciso com preços muito competitivos.',
      rating: 5,
      avatar: '👨‍🔧',
    },
    {
      id: 2,
      name: 'Pablo',
      role: 'Eletricista parceiro',
      content:
        'Ótimo atendimento e preço justo (também parcelam em 10x no cartão de crédito!)',
      rating: 5,
      avatar: '👨‍🔧',
    },
    {
      id: 3,
      name: 'Calebe',
      role: 'Eletricista parceiro',
      content:
        'Parceria de confiança há 3 anos. Suporte excelente e produtos sempre em estoque.',
      rating: 5,
      avatar: '👨‍🔧',
    },
    {
      id: 4,
      name: 'Reginaldo Delain',
      role: 'Eletricista parceiro',
      content:
        'Excelente qualidade de produtos e atendimento. Sempre encontro tudo que preciso com preços muito competitivos.',
      rating: 5,
      avatar: '👨‍🔧',
    },
    {
      id: 5,
      name: 'Pablo',
      role: 'Eletricista parceiro',
      content:
        'Ótimo atendimento e preço justo (também parcelam em 10x no cartão de crédito!)',
      rating: 5,
      avatar: '👨‍🔧',
    },
    {
      id: 6,
      name: 'Calebe',
      role: 'Eletricista parceiro',
      content:
        'Parceria de confiança há 3 anos. Suporte excelente e produtos sempre em estoque.',
      rating: 5,
      avatar: '👨‍🔧',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira as avaliações de clientes satisfeitos com nossos produtos e serviços
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-8 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              {/* Diagonal accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-all duration-300 ease-in-out"></div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
