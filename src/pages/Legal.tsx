import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Mentions Légales & Politique de Confidentialité</h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Informations légales et engagement de confidentialité de C.Z.F Rénovation
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose lg:prose-lg mx-auto">
            <h2>1. Éditeur du site</h2>
            <p>
              <strong>C.Z.F Rénovation</strong><br />
              [Adresse complète de l'entreprise]<br />
              SIRET : [Numéro SIRET]<br />
              N° TVA intracommunautaire : [Numéro de TVA]<br />
              Téléphone : [Numéro de téléphone]<br />
              Email : [Adresse email de contact]
            </p>

            <h2>2. Directeur de la publication</h2>
            <p>[Nom du directeur de la publication]</p>

            <h2>3. Hébergement</h2>
            <p>
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              Téléphone : [Téléphone de l'hébergeur]
            </p>

            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site (textes, images, vidéos, logos, etc.) est la propriété exclusive de C.Z.F Rénovation ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie des éléments du site sans l'accord écrit préalable de C.Z.F Rénovation est strictement interdite et constituerait un acte de contrefaçon sanctionné par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>

            <h2>5. Protection des données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité, d'effacement de vos données ou une limitation du traitement. Vous pouvez également vous opposer au traitement des données vous concernant et disposez du droit de retirer votre consentement à tout moment en vous adressant à [adresse email du DPO ou contact RGPD].
            </p>

            <h2>6. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience utilisateur. En naviguant sur notre site, vous acceptez l'utilisation de cookies conformément à notre politique en la matière. Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur.
            </p>

            <h2>7. Responsabilité</h2>
            <p>
              C.Z.F Rénovation s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de modifier, à tout moment et sans préavis, le contenu.
            </p>
            <p>
              C.Z.F Rénovation ne saurait être tenue pour responsable des dommages directs ou indirects pouvant résulter de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions qui pourraient survenir sur l'équipement informatique de l'utilisateur.
            </p>

            <h2>8. Liens hypertextes</h2>
            <p>
              La mise en place de liens hypertextes par des tiers vers des pages ou des documents diffusés sur le site de C.Z.F Rénovation est autorisée sous réserve que les liens ne portent pas atteinte aux intérêts et à la réputation de notre entreprise.
            </p>

            <h2>9. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
              <br />
              - Par email : [adresse email de contact]
              <br />
              - Par téléphone : [numéro de téléphone]
              <br />
              - Par courrier : [adresse postale complète]
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Dernière mise à jour : 24/11/2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
