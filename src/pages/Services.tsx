import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Wrench, Droplets, Wind, Thermometer, HardHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ServiceCard from "@/components/ServiceCard";
import couvertureImg from "@/assets/service-couverture.jpg";
import zinguerieImg from "@/assets/service-zinguerie.jpg";
import isolationImg from "@/assets/service-isolation.jpg";
import reparationImg from "@/assets/service-reparation.png";
import demoussageImg from "@/assets/service-demoussage.png";
import peintureImg from "@/assets/service-peinture.png";
import fenetreToitImg from "@/assets/service-fenetre-toit.png";
import gouttiereImg from "@/assets/service-gouttiere.png";
import ravalementImg from "@/assets/service-ravalement.png";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Pose Toiture",
      description: "Installation complète de toiture neuve avec tous types de matériaux : tuiles, ardoises, zinc, bac acier. Travaux réalisés dans les règles de l'art pour une toiture durable et esthétique.",
      image: couvertureImg,
    },
    {
      icon: Wrench,
      title: "Travaux de Zinguerie",
      description: "Pose et entretien de gouttières, chéneaux, noues et autres éléments de zinguerie. Garantie d'étanchéité parfaite pour protéger votre habitation des infiltrations d'eau.",
      image: zinguerieImg,
    },
    {
      icon: HardHat,
      title: "Réparation de Toiture",
      description: "Réparation de fuites, remplacement de tuiles cassées, réfection de joints. Intervention rapide pour tous types de problèmes de toiture.",
      image: reparationImg,
      
    },
    {
      icon: Droplets,
      title: "Nettoyage / Démoussage",
      description: "Nettoyage professionnel de votre toiture pour éliminer mousses, lichens et algues. Traitement préventif pour prolonger la durée de vie de votre couverture.",
      image: demoussageImg,
    },
    {
      icon: Wind,
      title: "Peinture sur Toiture",
      description: "Application de peinture spéciale toiture pour rénover l'aspect de votre couverture. Protection et esthétique améliorées.",
      image: peintureImg,
    },
    {
      icon: Wind,
      title: "Pose de Fenêtre de Toit",
      description: "Installation de fenêtres de toit type Velux pour apporter lumière naturelle et ventilation. Pose étanche et conforme aux normes.",
      image: fenetreToitImg,
    },
    {
      icon: Droplets,
      title: "Pose de Gouttière",
      description: "Installation de gouttières en zinc, aluminium ou PVC. Assure l'évacuation efficace des eaux pluviales pour protéger votre façade.",
      image: gouttiereImg,
    },
    {
      icon: Home,
      title: "Ravalement Façade",
      description: "Ravalement complet de façade : nettoyage, réparation des fissures, enduit, peinture. Redonnez un coup de neuf à votre habitation.",
      image: ravalementImg,
    },
    {
      icon: HardHat,
      title: "Maçonnerie",
      description: "Travaux de maçonnerie générale : murs, murets, réparations diverses. Intervention de maçons qualifiés pour tous vos besoins.",
      image: isolationImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCallButton />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Des solutions complètes pour tous vos besoins en couverture et rénovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Service sur mesure</h2>
              <p className="text-muted-foreground mb-6">
                Chaque projet est unique. Nous adaptons nos services à vos besoins spécifiques et à votre budget. N'hésitez pas à nous consulter pour un service personnalisé.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">Demander un Devis Personnalisé</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Processus</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contact", desc: "Vous nous contactez par téléphone ou via notre formulaire" },
              { step: "2", title: "Visite", desc: "Nous visitons votre chantier pour établir un diagnostic précis" },
              { step: "3", title: "Devis", desc: "Vous recevez un devis détaillé et sans engagement" },
              { step: "4", title: "Travaux", desc: "Nos équipes réalisent les travaux dans le respect des délais" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un Projet en Tête ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <Button asChild size="lg" className="btn-cta text-lg px-8 py-6">
            <Link to="/contact">Obtenir un Devis Gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
