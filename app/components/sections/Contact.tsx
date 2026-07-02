"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Telefone",
    text: "62 98451-1005",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Solicite seu orçamento",
  },
  {
    icon: Clock,
    title: "Horário",
    text: "Segunda a sábado",
  },
  {
    icon: MapPin,
    title: "Localização",
    text: "Aparecida de Goiânia - GO",
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
            Contato
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Pronto para cuidar do{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              seu veículo?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Entre em contato e solicite seu orçamento. Nossa equipe está pronta
            para atender você com agilidade, transparência e qualidade.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-orange-500/70 hover:bg-orange-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/50 bg-orange-500/15 text-orange-400 transition group-hover:scale-110 group-hover:text-yellow-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-[30px] border border-orange-500/30 bg-gradient-to-br from-zinc-950 via-black to-orange-950/60 p-8 shadow-2xl shadow-orange-500/10"
          >
            <span className="text-xs font-black uppercase tracking-[0.32em] text-orange-400">
              Atendimento rápido
            </span>

            <h3 className="mt-4 text-3xl font-black leading-tight">
              Fale agora com a Clério Auto Elétrica e Mecânica
            </h3>

            <div className="mt-7 space-y-5 text-zinc-300">
              <p className="flex gap-3">
                <Phone className="mt-1 text-yellow-400" size={20} />
                <span>
                  <strong className="text-white">WhatsApp:</strong> 62
                  98451-1005
                </span>
              </p>

              <p className="flex gap-3">
                <Clock className="mt-1 text-yellow-400" size={20} />
                <span>
                  <strong className="text-white">Horário:</strong> Segunda a
                  sexta, 08:00 às 18:00
                </span>
              </p>

              <p className="flex gap-3">
                <MapPin className="mt-1 text-yellow-400" size={20} />
                <span>
                  <strong className="text-white">Endereço:</strong> Aparecida
                  de Goiânia - GO
                </span>
              </p>
            </div>

            <a
              href="https://wa.me/5562984511005"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 text-sm font-black uppercase text-black shadow-2xl shadow-orange-500/30 transition hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              Solicitar orçamento
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30"
          >
            <iframe
              title="Localização Clério Auto Elétrica e Mecânica"
              src="https://www.google.com/maps?q=Cl%C3%A9rio%20Auto%20El%C3%A9trica%20e%20Mec%C3%A2nica&output=embed"
              className="h-[430px] w-full border-0"
              loading="lazy"
            />

            <div className="flex flex-col gap-4 border-t border-white/10 bg-black p-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-bold text-zinc-300">
                Veja a rota até a oficina pelo Google Maps.
              </span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Cl%C3%A9rio%20Auto%20El%C3%A9trica%20e%20Mec%C3%A2nica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500/60 px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-orange-500/10 hover:text-yellow-400"
              >
                Abrir rota
                <ExternalLink size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}