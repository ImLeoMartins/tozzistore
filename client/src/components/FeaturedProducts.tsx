import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Featured Products Section - Industrial Moderno Design
 * Features: Product showcase grid with ratings and pricing
 * Uses generated products showcase background
 */
export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Cabo Elétrico 2.5mm',
      category: 'Cabos',
      price: 'R$ 45,90',
      rating: 4.8,
      reviews: 124,
      image: '🔌',
    },
    {
      id: 2,
      name: 'Disjuntor 32A',
      category: 'Proteção',
      price: 'R$ 89,50',
      rating: 4.9,
      reviews: 98,
      image: '⚡',
    },
    {
      id: 3,
      name: 'LED Bulbo 12W',
      category: 'Iluminação',
      price: 'R$ 28,90',
      rating: 4.7,
      reviews: 156,
      image: '💡',
    },
    {
      id: 4,
      name: 'Multímetro Digital',
      category: 'Medidores',
      price: 'R$ 125,00',
      rating: 4.9,
      reviews: 87,
      image: '📊',
    },
    {
      id: 5,
      name: 'Tomada Dupla 20A',
      category: 'Conectores',
      price: 'R$ 35,90',
      rating: 4.6,
      reviews: 203,
      image: '🔌',
    },
    {
      id: 6,
      name: 'Chave Inglesa 10\"',
      category: 'Ferramentas',
      price: 'R$ 42,50',
      rating: 4.8,
      reviews: 142,
      image: '🔧',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mt-48"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary">Destaques</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conheça alguns dos nossos produtos mais vendidos e bem avaliados
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              {/* Product Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>

                {/* Image Placeholder with Emoji */}
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {product.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <button className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg transition-all duration-300 ease-in-out">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-yellow-600 text-primary-foreground font-bold rounded-lg transition-all duration-300 ease-in-out"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
