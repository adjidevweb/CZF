import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, Award, Wrench, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import artisanLogo from "@/assets/artisan-logo.png";
import veluxLogo from "@/assets/velux-logo.png";
import decennaleLogo from "@/assets/decennale-logo.webp";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCallButton />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
            <p className="text-xl text-primary-foreground/90">
              Plus de 20 ans d'expertise au service de votre toiture
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Notre Histoire</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Fondée il y a plus de 20 ans, <strong className="text-foreground">C.Z.F Rénovation</strong> est une entreprise familiale qui a su évoluer avec son temps tout en conservant les valeurs traditionnelles du métier de couvreur.
              </p>
              <p>
                Notre passion pour l'excellence et notre engagement envers la satisfaction client nous ont permis de devenir une référence dans le domaine de la couverture et de la rénovation de toiture dans toute la région.
              </p>
              <p>
                Avec une équipe de professionnels qualifiés et certifiés, nous intervenons sur tous types de projets, des plus simples aux plus complexes, en apportant toujours le même soin et la même attention aux détails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
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

      {/* Values */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Qualité",
                description: "Matériaux premium et travail soigné pour garantir la durabilité",
              },
              {
                icon: Users,
                title: "Proximité",
                description: "À l'écoute de nos clients et disponibles 24/7",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Certifications RGE et Qualibat pour votre tranquillité",
              },
              {
                icon: Wrench,
                title: "Expertise",
                description: "Plus de 20 ans d'expérience dans le métier",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Garanties</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Certification RGE</h3>
                <p className="text-muted-foreground">
                  Notre certification RGE (Reconnu Garant de l'Environnement) vous permet de bénéficier d'aides financières pour vos travaux de rénovation énergétique.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Label Qualibat</h3>
                <p className="text-muted-foreground">
                  Le label Qualibat atteste de notre compétence technique et de notre capacité à réaliser des travaux de qualité selon les règles de l'art.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Garantie Décennale</h3>
                <p className="text-muted-foreground">
                  Tous nos travaux sont couverts par une garantie décennale qui protège vos investissements pendant 10 ans.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-accent">Assurance Responsabilité</h3>
                <p className="text-muted-foreground">
                  Notre assurance responsabilité civile professionnelle couvre tous les travaux réalisés pour votre sécurité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Travailler Avec Nous ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
          </p>
          <Button asChild size="lg" className="btn-cta text-lg px-8 py-6">
            <Link to="/contact">Demander un Devis Gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
