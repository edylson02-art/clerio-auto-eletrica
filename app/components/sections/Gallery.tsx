"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const photos = [
  "/images/gallery/galeria-fachada.webp",
  "/images/gallery/galeria-recepcao.webp",
  "/images/gallery/galeria-area-servicos.webp",
  "/images/gallery/galeria-mecanico-trabalhando.webp",
  "/images/gallery/galeria-manutencao-andamento.webp",
  "/images/gallery/galeria-oficina-funcionando.webp",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function previousPhoto() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  }

  function nextPhoto() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") previousPhoto();
      if (event.key === "ArrowRight") nextPhoto();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white"
    >
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-orange-400">
            <Camera size={16} />
            Nossa estrutura
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Conheça a estrutura da{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Clério.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Ambiente organizado, equipamentos modernos e uma estrutura preparada
            para cuidar do seu veículo com segurança e qualidade.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <Image
                src={src}
                alt="Estrutura da Clério Auto Elétrica e Mecânica"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-orange-500 hover:text-black"
            aria-label="Fechar galeria"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={previousPhoto}
            className="absolute left-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-orange-500 hover:text-black md:flex"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="relative h-[75vh] w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-2xl">
            <Image
              src={selectedPhoto}
              alt="Foto ampliada da estrutura da Clério Auto Elétrica e Mecânica"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-orange-500 hover:text-black md:flex"
            aria-label="Próxima foto"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}