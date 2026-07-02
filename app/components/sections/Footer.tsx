"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const links = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative overflow-hidden border-t border-orange-500/10 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(249,115,22,.12),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-[1500px] gap-12 px-6 py-14 lg:grid-cols-[1.15fr_.75fr_.9fr]">
        <div>
          <Image
            src="/logo/logo.png"
            alt="Clério Auto Elétrica"
            width={260}
            height={80}
            className="h-16 w-auto"
          />

          <p className="mt-6 max-w-md text-[15px] leading-7 text-zinc-400">
            Especialistas em Auto Elétrica e Mecânica Geral, oferecendo
            qualidade, transparência e atendimento especializado para manter seu
            veículo sempre em perfeito funcionamento.
          </p>

          <a
            href="https://wa.me/5562984511005"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-orange-500/50 bg-orange-500/10 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-500 hover:text-black"
          >
            <MessageCircle size={19} />
            Solicitar orçamento
            <ChevronRight size={18} />
          </a>
        </div>

        <div>
          <h3 className="text-lg font-black">Navegação</h3>
          <div className="mt-3 h-px w-10 bg-orange-500" />

          <div className="mt-7 flex flex-col gap-4">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-400"
              >
                <ChevronRight size={15} className="text-orange-500" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">Informações</h3>
          <div className="mt-3 h-px w-10 bg-orange-500" />

          <div className="mt-7 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-orange-500/40 text-yellow-400">
                <Phone size={20} />
              </div>

              <div>
                <p className="font-bold text-white">Telefone / WhatsApp</p>
                <p className="mt-1 text-zinc-400">(62) 98451-1005</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-orange-500/40 text-yellow-400">
                <Clock3 size={20} />
              </div>

              <div>
                <p className="font-bold text-white">Atendimento</p>
                <p className="mt-1 text-zinc-400">Segunda à sexta</p>
                <p className="text-zinc-400">08:00 às 18:00</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-orange-500/40 text-yellow-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="font-bold text-white">Localização</p>
                <p className="mt-1 text-zinc-400">Aparecida de Goiânia - GO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-6 px-6 py-7 md:flex-row">
          <div className="text-center text-sm text-zinc-500 md:text-left">
            <p>© {new Date().getFullYear()} Clério Auto Elétrica e Mecânica.</p>
            <p>Todos os direitos reservados.</p>
          </div>

          <div className="text-center text-sm text-zinc-500">
            <p>Desenvolvido por</p>
            <p className="font-black text-orange-400">ES Nexus</p>
            <p className="text-xs">Software House</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/50 bg-orange-500/10 text-white transition hover:scale-110 hover:bg-orange-500 hover:text-black"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}