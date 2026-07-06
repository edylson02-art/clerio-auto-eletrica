import { siteConfig } from "./site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.postalCode,
    addressCountry: siteConfig.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: ["Aparecida de Goiânia", "Goiânia"],
  serviceType: [
    "Auto elétrica",
    "Mecânica geral",
    "Scanner automotivo",
    "Alinhamento",
    "Balanceamento",
    "Freios",
    "Suspensão",
    "Baterias",
    "Pneus",
    "Ar-condicionado automotivo",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};
