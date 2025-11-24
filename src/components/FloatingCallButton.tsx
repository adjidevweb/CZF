import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+33611301215"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4 group animate-fade-in"
      aria-label="Appeler maintenant"
    >
      <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <span className="sr-only">Appeler maintenant: 06 11 30 12 15</span>
    </a>
  );
};

export default FloatingCallButton;
