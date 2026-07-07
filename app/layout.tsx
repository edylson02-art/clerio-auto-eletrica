import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import StructuredData from "./components/seo/StructuredData";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

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
    canonical: siteConfig.url,
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Clério Auto Elétrica e Mecânica | Oficina Mecânica em Aparecida de Goiânia",
    description:
      "Especialistas em mecânica geral, auto elétrica, scanner automotivo, suspensão, freios, alinhamento, balanceamento e manutenção preventiva.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Clério Auto Elétrica e Mecânica | Oficina Mecânica",
    description:
      "Serviços especializados em mecânica geral, auto elétrica e diagnóstico automotivo.",
    images: [siteConfig.ogImage],
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
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${inter.variable}`}>
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
