import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl text-center">
        <Image
          src="/logo/logo.png"
          alt="Clério Auto Elétrica"
          width={260}
          height={90}
          className="mx-auto h-20 w-auto"
        />

        <h1 className="mt-10 text-6xl font-black text-yellow-400">404</h1>

        <h2 className="mt-4 text-3xl font-black">
          Página não encontrada
        </h2>

        <p className="mt-4 text-zinc-400">
          O endereço acessado não existe ou foi movido.
        </p>

        <Link
          href="/"
          className="premium-button mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 text-sm font-black uppercase text-black"
        >
          <ArrowLeft size={18} />
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}