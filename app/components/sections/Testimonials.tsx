"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Não empurra peças e faz de tudo para que o cliente fique satisfeito.",
    author: "Cliente Google",
  },
  {
    text: "Honesto, produtos de qualidade e com preços justos!",
    author: "Cliente Google",
  },
  {
    text: "São muito bons de serviço e são bem atenciosos.",
    author: "Cliente Google",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.16),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505,black_22%,black)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-orange-400">
            Avaliações reais
          </span>

          <div className="mt-5 flex justify-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={28} fill="currentColor" />
            ))}
          </div>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            O que nossos clientes{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              dizem.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
            A confiança dos nossos clientes é construída com transparência,
            qualidade e compromisso em cada serviço realizado.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.text}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:bg-orange-500/10 hover:shadow-orange-500/20"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition duration-300 group-hover:bg-orange-500/30" />

              <Quote className="text-orange-400" size={36} />

              <div className="mt-5 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-lg font-semibold leading-relaxed text-white">
                “{item.text}”
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">
                  {item.author}
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Comentário publicado no Google
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.google.com/search?q=clerio+auto+eletrica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-orange-500/60 bg-white/[0.04] px-8 text-sm font-black uppercase text-white transition hover:bg-orange-500/10 hover:text-yellow-400"
          >
            Ver avaliações no Google
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}