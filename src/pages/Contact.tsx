import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl text-primary-foreground/90">
              Une question ? Un projet ? Nous sommes là pour vous répondre
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nos Coordonnées</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  N'hésitez pas à nous contacter par téléphone, email ou en utilisant le formulaire ci-contre. Nous vous répondrons rapidement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+33611301215" className="text-muted-foreground hover:text-accent transition-colors">
                      06 11 30 12 15
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Disponible 24h/24 - 7j/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:ferretclaude17@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      ferretclaude17@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      32 Avenue Montcalm<br />
                      93420 Villepinte, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi : 8h - 19h<br />
                      Samedi : 9h - 17h<br />
                      Urgences 24h/24
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-bold mb-2 text-accent">Urgence ?</h3>
                <p className="text-muted-foreground mb-4">
                  En cas d'urgence (fuite, infiltration, etc.), appelez-nous immédiatement. Nous intervenons 24h/24 et 7j/7.
                </p>
                <Button asChild className="btn-cta w-full">
                  <a href="tel:+33611301215">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler en Urgence
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Demander un Devis Gratuit</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Ex: Devis rénovation toiture"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Votre message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-cta w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la Demande"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Notre Localisation</h2>
            <p className="text-center text-muted-foreground mb-6">
              Visitez notre local ou contactez-nous pour une intervention
            </p>
            
{/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.5385395!2d2.5146284!3d48.9584635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612c8c7e3e3e3%3A0x4e8e8e8e8e8e8e8e!2s32%20Avenue%20Montcalm%2C%2093420%20Villepinte!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Notre localisation à Villepinte"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
