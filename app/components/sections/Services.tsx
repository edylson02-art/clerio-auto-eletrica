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
  { icon: Zap, title: "Auto Elétrica", description: "Sistemas elétricos, iluminação e falhas elétricas." },
  { icon: Wrench, title: "Mecânica Geral", description: "Manutenção preventiva e corretiva." },
  { icon: ScanSearch, title: "Scanner Automotivo", description: "Diagnóstico eletrônico com equipamentos modernos." },
  { icon: MoveHorizontal, title: "Alinhamento", description: "Mais estabilidade, segurança e economia de pneus." },
  { icon: CircleDot, title: "Balanceamento", description: "Correção de vibrações e melhor dirigibilidade." },
  { icon: Disc3, title: "Freios", description: "Pastilhas, discos, fluido e revisão completa." },
  { icon: CarFront, title: "Suspensão", description: "Amortecedores, molas, buchas e componentes." },
  { icon: Snowflake, title: "Ar-condicionado", description: "Higienização, manutenção e carga de gás." },
  { icon: Gauge, title: "Injeção Eletrônica", description: "Correção de falhas e melhor desempenho." },
  { icon: Cog, title: "Motor de Partida", description: "Avaliação, reparo e troca do sistema." },
  { icon: Fan, title: "Radiadores", description: "Manutenção do sistema de arrefecimento." },
  { icon: Settings2, title: "Embreagem", description: "Avaliação, troca e manutenção do conjunto." },
];

const products = [
  { icon: Circle, title: "Pneus", description: "Venda e orientação na escolha do pneu ideal." },
  { icon: BatteryCharging, title: "Baterias", description: "Teste, troca e instalação de baterias." },
  { icon: Package, title: "Peças em Geral", description: "Peças automotivas para manutenção e reparo." },
  { icon: Droplets, title: "Lubrificantes", description: "Óleos e lubrificantes para melhor desempenho." },
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
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.035 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:border-orange-500/80 hover:bg-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/25"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition duration-300 group-hover:bg-orange-500/35" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-xl border border-orange-500/50 bg-orange-500/15 text-orange-400 shadow-lg shadow-orange-500/10 transition duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-yellow-400">
          <Icon size={29} strokeWidth={2.4} />
        </div>

        <h4 className="text-lg font-black text-white">{item.title}</h4>
      </div>

      <p className="relative mt-3 text-[15px] leading-7 text-zinc-200">
        {item.description}
      </p>

      <div className="relative mt-4 h-px w-20 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-36" />
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#050505] px-6 pb-24 pt-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.08),transparent_30%)]" />

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

        <div className="mt-12">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0" />
            <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
              Serviços especializados
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} item={service} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0" />
            <h3 className="text-center text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
              Produtos automotivos
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <ServiceCard key={product.title} item={product} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-20 overflow-hidden rounded-[30px] border border-orange-500/30 bg-gradient-to-br from-zinc-950 via-black to-orange-950/70 p-8 shadow-2xl shadow-orange-500/10 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.32em] text-orange-400">
                Atendimento rápido pelo WhatsApp
              </span>

              <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Pronto para cuidar do seu veículo?
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">
                Solicite um orçamento sem compromisso. Nossa equipe está pronta
                para atender você com agilidade, transparência e qualidade.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Atendimento rápido", "Diagnóstico preciso", "Serviços de qualidade"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-bold text-zinc-200">
                      <CheckCircle2 size={18} className="text-yellow-400" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="https://wa.me/5562984511005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 min-w-[320px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 text-sm font-black uppercase text-black shadow-2xl shadow-orange-500/30 transition hover:scale-105"
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