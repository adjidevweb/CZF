import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              C.Z.F <span className="text-accent">Rénovation</span>
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Votre partenaire de confiance pour tous vos travaux de couverture et rénovation depuis plus de 20 ans.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">RGE</span>
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Qualibat</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-accent transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm hover:text-accent transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm hover:text-accent transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Pose toiture</li>
              <li>Travaux de zinguerie</li>
              <li>Réparation de toiture</li>
              <li>Nettoyage/Démoussage</li>
              <li>Peinture sur toiture</li>
              <li>Pose de fenêtre de toit</li>
              <li>Pose de gouttière</li>
              <li>Ravalement façade</li>
              <li>Maçonnerie</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33611301215"
                  className="flex items-start text-sm hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>06.11.30.12.15</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ferretclaude17@gmail.com"
                  className="flex items-start text-sm hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>ferretclaude17@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>32 Avenue Montcalm<br />93420 Villepinte, France</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} C.Z.F Rénovation. Tous droits réservés.</p>
          <p className="mt-2">
            <Link to="#" className="hover:text-accent transition-colors">
              Mentions Légales
            </Link>
            {" | "}
            <Link to="#" className="hover:text-accent transition-colors">
              Politique de Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
