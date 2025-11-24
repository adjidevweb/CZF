import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tous" },
    { id: "couverture", label: "Couverture" },
    { id: "renovation", label: "Rénovation" },
    { id: "zinguerie", label: "Zinguerie" },
  ];

  const projects = [
    {
      id: 1,
      category: "renovation",
      title: "Rénovation Complète Toiture",
      location: "Villepinte",
      image: gallery1,
      description: "Rénovation complète d'une toiture ancienne avec remplacement des tuiles. Travaux incluant la dépose complète, traitement de charpente, isolation renforcée et pose de nouvelles tuiles.",
    },
    {
      id: 2,
      category: "couverture",
      title: "Pose de Nouvelle Couverture",
      location: "Aulnay-sous-Bois",
      image: gallery2,
      description: "Installation d'une nouvelle couverture en tuiles plates sur maison individuelle. Travaux réalisés en 5 jours avec garantie décennale.",
    },
    {
      id: 3,
      category: "zinguerie",
      title: "Réfection Complète Zinguerie",
      location: "Sevran",
      image: gallery3,
      description: "Remplacement complet des gouttières, chéneaux et descentes. Installation de zinc naturel pour une durabilité optimale.",
    },
    {
      id: 4,
      category: "renovation",
      title: "Rénovation Toiture et Isolation",
      location: "Tremblay-en-France",
      image: gallery4,
      description: "Rénovation avec isolation thermique renforcée, pose de fenêtres de toit Velux et ravalement de façade associé.",
    },
    {
      id: 5,
      category: "couverture",
      title: "Pose de Toiture en Ardoise",
      location: "Seine-Saint-Denis",
      image: gallery5,
      description: "Pose d'une toiture en ardoise naturelle pour une maison de caractère. Travail soigné et respectueux de l'architecture d'origine.",
    },
    {
      id: 6,
      category: "zinguerie",
      title: "Installation de Gouttières",
      location: "Paris",
      image: gallery6,
      description: "Pose de gouttières en aluminium sur mesure avec habillage en zinc. Évacuation des eaux pluviales optimisée.",
    },
    {
      id: 7,
      category: "renovation",
      title: "Ravalement de Façade",
      location: "Bondy",
      image: gallery7,
      description: "Ravalement complet de façade avec isolation par l'extérieur. Amélioration de l'étanchéité et de l'isolation thermique.",
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCallButton />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
            <p className="text-xl text-primary-foreground/90">
              Découvrez la qualité de notre travail à travers nos projets réalisés
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? "btn-cta" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-white/90 text-sm">📍 {project.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/contact?project=${project.id}`}>
                          Demander un devis
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "500+", label: "Projets réalisés" },
              { value: "20+", label: "Années d'expérience" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "100%", label: "Travaux garantis" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre Projet, Notre Passion
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Rejoignez nos nombreux clients satisfaits
          </p>
          <Button asChild size="lg" className="btn-cta text-lg px-8 py-6">
            <Link to="/contact">Demander un Devis</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
