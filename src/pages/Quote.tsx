import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais pour établir votre devis.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCallButton />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Demande de Devis</h1>
            <p className="text-xl text-primary-foreground/90">
              Obtenez votre devis gratuit et personnalisé en quelques minutes
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3">Remplissez le formulaire</h2>
                <p className="text-muted-foreground">
                  Fournissez-nous quelques informations sur votre projet et nous vous contacterons rapidement pour établir un devis détaillé et gratuit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Vos Coordonnées</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse du chantier *</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      placeholder="Adresse complète"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Code postal *</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        required
                        placeholder="75001"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville *</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        placeholder="Paris"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Votre Projet</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service *</Label>
                    <Select name="service" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pose-toiture">Pose toiture</SelectItem>
                        <SelectItem value="zinguerie">Travaux de zinguerie</SelectItem>
                        <SelectItem value="reparation">Réparation de toiture</SelectItem>
                        <SelectItem value="nettoyage">Nettoyage/Démoussage</SelectItem>
                        <SelectItem value="peinture">Peinture sur toiture</SelectItem>
                        <SelectItem value="fenetre-toit">Pose de fenêtre de toit</SelectItem>
                        <SelectItem value="gouttiere">Pose de gouttière</SelectItem>
                        <SelectItem value="ravalement">Ravalement façade</SelectItem>
                        <SelectItem value="maconnerie">Maçonnerie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="surface">Surface approximative (m²)</Label>
                    <Input
                      id="surface"
                      name="surface"
                      type="number"
                      placeholder="Ex: 100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgence du projet *</Label>
                    <Select name="urgency" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (sous 48h)</SelectItem>
                        <SelectItem value="soon">Rapide (1-2 semaines)</SelectItem>
                        <SelectItem value="normal">Normal (1 mois)</SelectItem>
                        <SelectItem value="planned">Planifié (plus d'1 mois)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Description du projet *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Décrivez votre projet en détail (état actuel, travaux souhaités, contraintes particulières...)"
                    />
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note :</strong> Ce devis est entièrement gratuit et sans engagement. Vos données sont protégées et ne seront utilisées que pour établir votre devis.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="btn-cta w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander mon Devis Gratuit"}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Gratuit et sans engagement</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">24h</div>
                <p className="text-sm text-muted-foreground">Réponse sous 24h maximum</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Ans d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
