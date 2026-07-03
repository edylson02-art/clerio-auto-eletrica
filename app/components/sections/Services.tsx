"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  CarFront,
  CheckCircle2,
  Circle,
  CircleDot,
  Cog,
  Disc3,
  Droplets,
  Fan,
  Gauge,
  MoveHorizontal,
  Package,
  Phone,
  ScanSearch,
  Settings2,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Auto Elétrica",
    description: "Sistemas elétricos, iluminação e falhas elétricas.",
  },
  {
    icon: Wrench,
    title: "Mecânica Geral",
    description: "Manutenção preventiva e corretiva.",
  },
  {
    icon: ScanSearch,
    title: "Scanner Automotivo",
    description: "Diagnóstico eletrônico com equipamentos modernos.",
  },
  {
    icon: MoveHorizontal,
    title: "Alinhamento",
    description: "Mais estabilidade, segurança e economia de pneus.",
  },
  {
    icon: CircleDot,
    title: "Balanceamento",
    description: "Correção de vibrações e melhor dirigibilidade.",
  },
  {
    icon: Disc3,
    title: "Freios",
    description: "Pastilhas, discos, fluido e revisão completa.",
  },
  {
    icon: CarFront,
    title: "Suspensão",
    description: "Amortecedores, molas, buchas e componentes.",
  },
  {
    icon: Snowflake,
    title: "Ar-condicionado",
    description: "Higienização, manutenção e carga de gás.",
  },
  {
    icon: Gauge,
    title: "Injeção Eletrônica",
    description: "Correção de falhas e melhor desempenho.",
  },
  {
    icon: Cog,
    title: "Motor de Partida",
    description: "Avaliação, reparo e troca do sistema.",
  },
  {
    icon: Fan,
    title: "Radiadores",
    description: "Manutenção do sistema de arrefecimento.",
  },
  {
    icon: Settings2,
    title: "Embreagem",
    description: "Avaliação, troca e manutenção do conjunto.",
  },
];

const products = [
  {
    icon: Circle,
    title: "Pneus",
    description: "Venda e orientação na escolha do pneu ideal.",
  },
  {
    icon: BatteryCharging,
    title: "Baterias",
    description: "Teste, troca e instalação de baterias.",
  },
  {
    icon: Package,
    title: "Peças em Geral",
    description: "Peças automotivas para manutenção e reparo.",
  },
  {
    icon: Droplets,
    title: "Lubrificantes",
    description: "Óleos e lubrificantes para melhor desempenho.",
  },
];

function ServiceCard({
  item,
  index,
}: {
  item: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.035 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#101010] p-7 shadow-xl shadow-black/30 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/50 hover:bg-[#171717] hover:shadow-2xl hover:shadow-orange-500/10"
    >
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-orange-500/0 blur-3xl transition duration-500 group-hover:bg-orange-500/25" />

      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/40 bg-orange-500/10 text-orange-400 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black">
        <Icon size={28} strokeWidth={2.4} />
      </div>

      <h4 className="relative text-xl font-black text-white">{item.title}</h4>

      <p className="relative mt-4 text-[15px] leading-7 text-zinc-300">
        {item.description}
      </p>

      <div className="relative mt-5 h-px w-14 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-28" />
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#070707] px-6 pb-24 pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.07),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
            Serviços e produtos
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Tudo para o seu veículo,
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              em um só lugar.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Mecânica, auto elétrica, diagnóstico automotivo, pneus, baterias,
            peças e soluções completas para manter seu veículo em boas condições.
          </p>
        </motion.div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/0 via-orange-500/55 to-orange-500/0" />
            <h3 className="text-center text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
              Serviços especializados
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/0 via-orange-500/55 to-orange-500/0" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} item={service} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/55 to-yellow-400/0" />
            <h3 className="text-center text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
              Produtos automotivos
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/55 to-yellow-400/0" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <ServiceCard key={product.title} item={product} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-20 overflow-hidden rounded-[34px] border border-orange-500/30 bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#2a1000] p-8 shadow-2xl shadow-orange-500/10 md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
                Atendimento rápido pelo WhatsApp
              </span>

              <h3 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Pronto para cuidar do seu veículo?
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Solicite um orçamento sem compromisso. Nossa equipe está pronta
                para atender você com agilidade, transparência e qualidade.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {[
                  "Atendimento rápido",
                  "Diagnóstico preciso",
                  "Serviços de qualidade",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-bold text-zinc-200"
                  >
                    <CheckCircle2 size={18} className="text-yellow-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="https://wa.me/5562984511005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-600 px-8 py-5 text-sm font-black uppercase tracking-wide text-black shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/50"
              >
                <Phone size={20} />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}