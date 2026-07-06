import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import StructuredData from "./components/seo/StructuredData";

const siteUrl = "https://clerioautoeletrica.com.br";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Clério Auto Elétrica e Mecânica | Oficina Mecânica em Aparecida de Goiânia",
    template: "%s | Clério Auto Elétrica e Mecânica",
  },

  description:
    "Oficina mecânica e auto elétrica em Aparecida de Goiânia especializada em mecânica geral, injeção eletrônica, scanner automotivo, suspensão, freios, alinhamento, balanceamento, baterias e ar-condicionado.",

  keywords: [
    "oficina mecânica",
    "auto elétrica",
    "mecânica geral",
    "scanner automotivo",
    "injeção eletrônica",
    "alinhamento",
    "balanceamento",
    "freios",
    "suspensão",
    "ar condicionado automotivo",
    "baterias",
    "Aparecida de Goiânia",
    "Goiânia",
    "Clério Auto Elétrica",
  ],

  authors: [{ name: "ES Nexus" }],
  creator: "ES Nexus",
  publisher: "ES Nexus",
  category: "Automotive",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Clério Auto Elétrica e Mecânica",
    title:
      "Clério Auto Elétrica e Mecânica | Oficina Mecânica em Aparecida de Goiânia",
    description:
      "Especialistas em mecânica geral, auto elétrica, scanner automotivo, suspensão, freios, alinhamento, balanceamento e manutenção preventiva.",
    images: [
      {
        url: "/images/hero-oficina-clerio.webp",
        width: 1200,
        height: 630,
        alt: "Clério Auto Elétrica e Mecânica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Clério Auto Elétrica e Mecânica | Oficina Mecânica",
    description:
      "Serviços especializados em mecânica geral, auto elétrica e diagnóstico automotivo.",
    images: ["/images/hero-oficina-clerio.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Clério Auto Elétrica e Mecânica",
    url: siteUrl,
    telephone: "+5562984511005",
    image: `${siteUrl}/images/hero-oficina-clerio.webp`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Av. Pedro Luís Ribeiro, Qd.10 - Lt.01 - Conj. Bela Morada",
      addressLocality: "Aparecida de Goiânia",
      addressRegion: "GO",
      postalCode: "74920-760",
      addressCountry: "BR",
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

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <StructuredData />

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZGK06TN51D"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZGK06TN51D');
          `}
        </Script>
      </body>
    </html>
  );
}