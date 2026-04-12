import { MessageCircle } from "lucide-react";

const ADMIN_PHONE = "919205244464"; // Replace with actual admin number

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to order a cake from Honey Dukes 🎂"
    );
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-large hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-pulse-ring" />
      
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
