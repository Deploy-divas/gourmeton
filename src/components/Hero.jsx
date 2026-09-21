import { ArrowRight, Smartphone } from 'lucide-react'
import heroFood from '../assets/hero-food.jpg'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[680px] items-center overflow-hidden pt-[76px] sm:min-h-[740px]"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroFood})`,  
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gourmet-dark/90 via-gourmet-dark/65 to-gourmet-red/25" />
      <div className="absolute inset-0 -z-10 bg-black/10" />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl text-white">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-gourmet-yellow" />
            Sabores do seu jeito
          </span>

          <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl">
            Seu próximo
            <span className="block text-gourmet-yellow">sabor favorito</span>
            está aqui.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            O GourmetOn conecta você aos sabores que combinam com o seu momento.
            Encontre opções, descubra novos pratos e escolha sua próxima refeição
            de um jeito simples.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#funcionalidades"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gourmet-red px-7 py-3.5 font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-gourmet-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Conheça as funcionalidades
              <ArrowRight size={19} />
            </a>

            <a
              href="#apresentacao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Smartphone size={19} />
              Saiba mais
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gourmet-cream to-transparent" />
    </section>
  )
}
