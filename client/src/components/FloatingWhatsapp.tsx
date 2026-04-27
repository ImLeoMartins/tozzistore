import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phoneNumber = '5515991163645'; // coloque seu número com DDD
  const message = 'Olá! Vim pelo site e gostaria de um orçamento.';
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        bg-[#239158]
        hover:bg-green-600
        text-white
        px-5
        py-4
        rounded-full
        shadow-2xl
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <MessageCircle size={24} />

      <span className="hidden sm:block font-semibold">
        Chamar no WhatsApp
      </span>
    </a>
  );
}