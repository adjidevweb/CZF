import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À Propos" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Réalisations" },
    { to: "/quote", label: "Demande de Devis" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="C.Z.F Rénovation" className="h-40 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.to) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+33611301215" className="flex items-center text-primary hover:text-accent transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">06 11 30 12 15</span>
            </a>
            <Button asChild className="btn-cta">
              <Link to="/contact">Devis Gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent px-4 py-2 ${
                    isActive(link.to) ? "text-accent bg-accent/10" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-3 border-t border-border">
                <a
                  href="tel:+33611301215"
                  className="flex items-center text-primary hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">06 11 30 12 15</span>
                </a>
                <Button asChild className="btn-cta w-full">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Devis Gratuit
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
