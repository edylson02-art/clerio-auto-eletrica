"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ShieldCheck, Wrench } from "lucide-react";

const benefits = [
  "Atendimento especializado",
  "Diagnóstico transparente",
  "Equipamentos modernos",
  "Compromisso com qualidade",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505,black_18%,black)]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -36, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative h-[620px] overflow-hidden rounded-[38px] border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src="/images/recepcao-auto-eletrica.webp"
              alt="Fachada da Clério Auto Elétrica e Mecânica"
              fill
              className="object-cover object-[58%_center] transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 rounded-3xl border border-white/10 bg-black/75 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black">Oficina de confiança</h3>
                  <p className="text-sm text-zinc-300">
                    Qualidade, segurança e transparência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
            Sobre a oficina
          </span>

          <h2 className="mt-5 max-w-[760px] text-4xl font-black leading-tight md:text-6xl">
            Cuidado completo para o seu veículo com{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              confiança e qualidade.
            </span>
          </h2>

          <div className="mt-6 max-w-[720px] space-y-4 text-lg leading-relaxed text-zinc-300">
            <p>
              A Clério Auto Elétrica e Mecânica oferece soluções completas para
              quem busca atendimento ágil, diagnóstico preciso e serviços
              automotivos realizados com responsabilidade.
            </p>

            <p>
              Com atuação em auto elétrica, mecânica geral, pneus, peças,
              baterias e manutenção preventiva, a oficina reúne praticidade,
              transparência e compromisso para cuidar do seu veículo em um só
              lugar.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-orange-500/50 hover:bg-orange-500/10"
              >
                <CheckCircle2 className="text-yellow-400" size={22} />
                <span className="font-bold text-zinc-100">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5562984511005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 text-sm font-black uppercase text-black shadow-2xl shadow-orange-500/25 transition hover:scale-105"
            >
              <Phone size={19} />
              Falar com a oficina
            </a>

            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-orange-500/50 bg-white/[0.04] px-8 text-sm font-black uppercase text-white transition hover:bg-orange-500/10"
            >
              <Wrench size={19} />
              Ver serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}