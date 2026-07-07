"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black text-white">
      <Image
        src="/images/hero-oficina-clerio.webp"
        alt="Clério Auto Elétrica e Mecânica"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />

      <div className="absolute inset-0 bg-black/22" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(249,115,22,0.28),transparent_34%)]" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050505]" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-[1500px] flex-col justify-center px-6 lg:px-10 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full min-w-0 max-w-[820px]"
        >
          <span className="inline-flex rounded-full border border-orange-500/50 bg-black/45 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.34em] text-orange-400 backdrop-blur">
            Auto Elétrica e Mecânica
          </span>

          <h1 className="mt-8 max-w-full text-[46px] font-black leading-[0.94] tracking-tight sm:text-[58px] md:max-w-[900px] md:text-[78px] xl:text-[92px]">
            Seu carro
            <span className="block text-yellow-400">em boas mãos!</span>
          </h1>

          <p className="mt-6 max-w-full text-[21px] font-medium leading-relaxed text-white md:max-w-[680px]">
            Especialistas em Auto Elétrica e Mecânica Geral para cuidar do seu
            veículo com segurança e qualidade.
          </p>

          <div className="mt-8 flex w-full min-w-0 flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="https://wa.me/5562984511005"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 text-sm font-black uppercase text-black shadow-2xl shadow-orange-500/40 transition hover:scale-105 sm:w-auto"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
              <Phone size={19} />
              Solicitar orçamento
            </a>

            <a
              href="#servicos"
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-yellow-400/70 bg-black/40 px-8 text-sm font-black uppercase text-white backdrop-blur transition hover:bg-yellow-400 hover:text-black sm:w-auto"
            >
              Ver serviços
              <ChevronDown size={19} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
