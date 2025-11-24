import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import beforeImg from "@/assets/gallery-before-1.jpg";
import afterImg from "@/assets/gallery-after-1.jpg";

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
      before: beforeImg,
      after: afterImg,
      description: "Rénovation complète d'une toiture ancienne avec remplacement des tuiles. Travaux incluant la dépose complète, traitement de charpente, isolation renforcée et pose de nouvelles tuiles.",
    },
    {
      id: 2,
      category: "couverture",
      title: "Pose de Nouvelle Couverture",
      location: "Aulnay-sous-Bois",
      before: beforeImg,
      after: afterImg,
      description: "Installation d'une nouvelle couverture en tuiles plates sur maison individuelle. Travaux réalisés en 5 jours avec garantie décennale.",
    },
    {
      id: 3,
      category: "zinguerie",
      title: "Réfection Complète Zinguerie",
      location: "Sevran",
      before: beforeImg,
      after: afterImg,
      description: "Remplacement complet des gouttières, chéneaux et descentes. Installation de zinc naturel pour une durabilité optimale.",
    },
    {
      id: 4,
      category: "renovation",
      title: "Rénovation Toiture et Isolation",
      location: "Tremblay-en-France",
      before: beforeImg,
      after: afterImg,
      description: "Rénovation avec isolation thermique renforcée, pose de fenêtres de toit Velux et ravalement de façade associé.",
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
            <div className="grid gap-16">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="max-w-6xl mx-auto animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-8 text-center">
                    <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-3">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground text-lg">📍 {project.location}</p>
                  </div>
                  
                  {/* Before/After Comparison with enhanced design */}
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-6 py-2 rounded-lg font-bold text-lg shadow-lg z-10">
                            ❌ Avant
                          </div>
                          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-destructive/20 hover:border-destructive/40 transition-all">
                            <img
                              src={project.before}
                              alt={`${project.title} - Avant`}
                              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute -top-3 left-6 bg-accent text-white px-6 py-2 rounded-lg font-bold text-lg shadow-lg z-10">
                            ✓ Après
                          </div>
                          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-accent/20 hover:border-accent/60 transition-all">
                            <img
                              src={project.after}
                              alt={`${project.title} - Après`}
                              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
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
