import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center">
        <Image
          src="/logo/logo.png"
          alt="Clério Auto Elétrica"
          width={260}
          height={90}
          className="h-20 w-auto"
          priority
        />

        <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
        </div>

        <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-zinc-400">
          Carregando
        </p>
      </div>
    </div>
  );
}