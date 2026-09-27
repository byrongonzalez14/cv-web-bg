import { getCvData, getServices } from "@/content";
import { BASE_URL } from "./metadata";

const PERSON_ID = `${BASE_URL}/#person`;
const SERVICE_ID = `${BASE_URL}/#service`;

export function personJsonLd(locale: string) {
  const { profile } = getCvData(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    jobTitle: `${profile.headline} | ${profile.tagline}`,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    url: BASE_URL,
    image: `${BASE_URL}/images/about/profile.png`,
    sameAs: [profile.linkedin, profile.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressCountry: "CO",
    },
  };
}

export function professionalServiceJsonLd(locale: string) {
  const { services } = getServices(locale);
  const { profile } = getCvData(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    url: BASE_URL,
    image: `${BASE_URL}/images/about/profile.png`,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    areaServed: "Worldwide",
    availableLanguage: ["es", "en"],
    founder: { "@id": PERSON_ID },
    sameAs: [profile.linkedin, profile.github],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "es" ? "Servicios" : "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.problem,
        },
      })),
    },
  };
}

export function faqJsonLd(locale: string) {
  const { faqs } = getServices(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps any text from closing the <script> element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
