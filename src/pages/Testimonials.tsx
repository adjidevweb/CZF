import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dupont",
      location: "Paris 16ème",
      rating: 5,
      text: "Travail impeccable et équipe très professionnelle. Notre toiture a été refaite en temps record et le résultat est magnifique. Je recommande vivement !",
    },
    {
      name: "Jean Martin",
      location: "Versailles",
      rating: 5,
      text: "Très satisfait du service. Devis clair, travaux réalisés dans les délais. L'équipe est à l'écoute et de bon conseil. Prix compétitif.",
    },
    {
      name: "Sophie Leclerc",
      location: "Boulogne",
      rating: 5,
      text: "Entreprise sérieuse et fiable. Intervention rapide suite à une urgence. Personnel compétent et respectueux. Merci pour votre professionnalisme !",
    },
    {
      name: "Pierre Dubois",
      location: "Neuilly",
      rating: 5,
      text: "Excellente prestation de A à Z. Communication parfaite tout au long du chantier. Chantier propre et soigné. Je n'hésiterai pas à faire appel à eux à nouveau.",
    },
    {
      name: "Isabelle Moreau",
      location: "Saint-Cloud",
      rating: 5,
      text: "Ravis de notre nouvelle toiture ! L'équipe a été très professionnelle et efficace. Le rapport qualité-prix est excellent. Un grand merci !",
    },
    {
      name: "Thomas Bernard",
      location: "Courbevoie",
      rating: 5,
      text: "Travail de qualité, respect des délais et budget maîtrisé. L'entreprise a su répondre à toutes nos questions. Je recommande sans hésitation.",
    },
  ];

  const averageRating = 5;
  const totalReviews = testimonials.length;

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCallButton />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Témoignages Clients</h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Découvrez ce que nos clients pensent de nos services
            </p>
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div>
                <div className="text-5xl font-bold">{averageRating.toFixed(1)}</div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-semibold">{totalReviews}</div>
                <div className="text-sm text-primary-foreground/80">Avis clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Ils Nous Font Confiance</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-lg font-semibold mb-1">Satisfaction Client</div>
                <div className="text-muted-foreground">Basé sur plus de 500 avis</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-lg font-semibold mb-1">Projets Réalisés</div>
                <div className="text-muted-foreground">En 20 ans d'activité</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">4.9/5</div>
                <div className="text-lg font-semibold mb-1">Note Moyenne</div>
                <div className="text-muted-foreground">Sur toutes nos prestations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour vos travaux de couverture
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

export default Testimonials;
