"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-[#050505]/95 px-4 py-3 backdrop-blur-xl">
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between rounded-3xl border px-6 shadow-2xl transition-all duration-500 ${
          scrolled
            ? "h-[68px] border-white/10 bg-black/90 shadow-black/50"
            : "h-[76px] border-white/10 bg-black"
        }`}
      >
        <Link href="/" className="flex flex-shrink-0 items-center">
          <Image
            src="/logo/logo.png"
            alt="Clério Auto Elétrica e Mecânica"
            width={340}
            height={90}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-[56px]" : "h-[62px]"
            }`}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-black text-white transition hover:text-orange-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5562984511005"
          target="_blank"
          rel="noopener noreferrer"
          className="premium-button hidden h-12 flex-shrink-0 items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-6 text-sm font-black text-black shadow-xl shadow-orange-500/25 transition hover:-translate-y-0.5 xl:flex"
        >
          <Phone size={18} />
          62 98451-1005
        </a>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-yellow-400 xl:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-[1500px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/60 xl:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-black text-white transition hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5562984511005"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button mt-5 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 py-4 text-sm font-black text-black"
            >
              <Phone size={18} />
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}