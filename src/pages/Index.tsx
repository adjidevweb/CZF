import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Award, CheckCircle2, Home, Wrench, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-roofing.jpg";
import veluxLogo from "@/assets/velux-logo.png";
import artisanLogo from "@/assets/artisan-logo.png";
import decennaleLogo from "@/assets/decennale-logo.webp";

const Index = () => {
  const services = [
    {
      icon: Home,
      title: "Couverture",
      description: "Installation et rénovation de tous types de toitures : tuiles, ardoises, zinc. Travail soigné et durable.",
    },
    {
      icon: Wrench,
      title: "Zinguerie",
      description: "Pose et réparation de gouttières, chéneaux, noues. Garantie étanchéité parfaite de votre toiture.",
    },
    {
      icon: Droplets,
      title: "Démoussage",
      description: "Nettoyage professionnel de votre toiture. Prolongez la durée de vie de votre couverture.",
    },
  ];

  const advantages = [
    { icon: Shield, title: "Certifié RGE & Qualibat", desc: "Qualité garantie" },
    { icon: Clock, title: "Intervention Rapide", desc: "24h/24 - 7j/7" },
    { icon: Award, title: "+20 ans d'expérience", desc: "Expertise reconnue" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCallButton />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Expert couvreur au travail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Votre Expert en <span className="text-accent">Couverture</span> et Toiture
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Intervention rapide • Devis gratuit • Qualité garantie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Button asChild size="lg" className="btn-cta text-lg px-8 py-6">
                <Link to="/contact">Demander un Devis Gratuit</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <a href="tel:+33123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all"
                >
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en couverture et rénovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Certifications & Garanties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des certifications reconnues pour votre tranquillité d'esprit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-32 flex items-center justify-center mx-auto mb-6">
                <img 
                  src={artisanLogo} 
                  alt="Artisan Métiers d'Art" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Artisan Qualifié</h3>
              <p className="text-muted-foreground">
                Artisan certifié avec plus de 20 ans d'expérience dans le domaine
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-32 flex items-center justify-center mx-auto mb-6">
                <img 
                  src={veluxLogo} 
                  alt="Installateur Velux" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Installateur Agréé Velux</h3>
              <p className="text-muted-foreground">
                Partenaire officiel Velux pour l'installation de fenêtres de toit
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="h-32 flex items-center justify-center mx-auto mb-6">
                <img 
                  src={decennaleLogo} 
                  alt="Garantie Décennale" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantie Décennale</h3>
              <p className="text-muted-foreground">
                Protection complète pendant 10 ans sur tous nos travaux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Pourquoi Nous Choisir ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Entreprise certifiée RGE et Qualibat",
                "Plus de 20 ans d'expérience",
                "Devis gratuit et sans engagement",
                "Intervention rapide sous 24h",
                "Matériaux de qualité supérieure",
                "Garantie décennale",
                "Service client disponible 24/7",
                "Paiement en plusieurs fois possible",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Preview Section */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Demandez Votre Devis Gratuit
              </h2>
              <p className="text-lg text-muted-foreground">
                Remplissez le formulaire en quelques minutes et recevez votre devis personnalisé rapidement
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="06.11.30.12.15"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Type de service *
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="pose-toiture">Pose toiture</option>
                    <option value="zinguerie">Travaux de zinguerie</option>
                    <option value="reparation">Réparation de toiture</option>
                    <option value="demoussage">Nettoyage/Démoussage</option>
                    <option value="peinture">Peinture sur toiture</option>
                    <option value="fenetre-toit">Pose de fenêtre de toit</option>
                    <option value="gouttiere">Pose de gouttière</option>
                    <option value="ravalement">Ravalement façade</option>
                    <option value="maconnerie">Maçonnerie</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message-preview" className="block text-sm font-medium mb-2">
                    Description de votre projet
                  </label>
                  <textarea
                    id="message-preview"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Décrivez brièvement votre projet..."
                  />
                </div>
                
                <Button type="button" asChild size="lg" className="w-full btn-cta">
                  <Link to="/quote">Obtenir Mon Devis Gratuit</Link>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Localisation</h2>
            <p className="text-lg text-muted-foreground">
              32 Avenue Montcalm, 93420 Villepinte, France
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8915874!2d2.5349289!3d48.9544330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6125f0000001%3A0x0!2s32+Avenue+Montcalm%2C+93420+Villepinte!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation C.Z.F Rénovation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un Expert en Couverture ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-cta text-lg px-8 py-6">
              <Link to="/contact">Demander un Devis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <a href="tel:+33611301215">
                <Phone className="mr-2 h-5 w-5" />
                06.11.30.12.15
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
