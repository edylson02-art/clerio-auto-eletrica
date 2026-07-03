import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://clerioautoeletrica.com.br";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clério Auto Elétrica e Mecânica | Aparecida de Goiânia",
  description:
    "Auto elétrica, mecânica geral, scanner automotivo, alinhamento, balanceamento, pneus, peças e baterias em Aparecida de Goiânia.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Clério Auto Elétrica e Mecânica",
    description:
      "Tudo para o seu veículo em um só lugar: auto elétrica, mecânica geral, pneus, peças, baterias e manutenção completa.",
    url: siteUrl,
    siteName: "Clério Auto Elétrica e Mecânica",
    locale: "pt_BR",
    type: "website",
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
    title: "Clério Auto Elétrica e Mecânica",
    description: "Auto elétrica e mecânica geral em Aparecida de Goiânia.",
    images: ["/images/hero-oficina-clerio.webp"],
  },
  robots: {
    index: true,
    follow: true,
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
  };

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}