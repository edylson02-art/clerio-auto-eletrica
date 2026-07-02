"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const photos = [
  {
    title: "Fachada da Oficina",
    category: "Estrutura",
    src: "/images/gallery/galeria-05.webp",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Recepção",
    category: "Atendimento",
    src: "/images/gallery/galeria-02.webp",
    className: "",
  },
  {
    title: "Área de Serviços",
    category: "Oficina",
    src: "/images/gallery/galeria-03.webp",
    className: "",
  },
  {
    title: "Centro de Alinhamento",
    category: "Equipamentos",
    src: "/images/gallery/galeria-04.webp",
    className: "",
  },
  {
    title: "Elevadores Automotivos",
    category: "Manutenção",
    src: "/images/gallery/galeria-01.webp",
    className: "",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

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

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      previousPhoto();
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedIndex]);
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.16),transparent_32%)]" />

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

        <div className="mt-14 grid auto-rows-[280px] gap-5 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className={`group relative cursor-zoom-in overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] text-left shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-orange-500/60 hover:shadow-orange-500/20 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:bg-orange-500/10 group-hover:opacity-100" />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-yellow-400">
                  {photo.category}
                </span>

                <h3 className="mt-2 text-3xl font-black leading-tight text-white">
                  {photo.title}
                </h3>
              </div>
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
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              fill
              sizes="100vw"
              className="object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-yellow-400">
                {selectedPhoto.category}
              </span>

              <h3 className="mt-2 text-3xl font-black text-white">
                {selectedPhoto.title}
              </h3>
            </div>
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