import {
  Search,
  SlidersHorizontal,
  Sparkles,
  Utensils,
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Busca por tipo de comida',
    text: 'Encontre opções de acordo com o que você está com vontade de comer.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Filtros inteligentes',
    text: 'Refine sua busca para chegar mais rápido às opções que fazem sentido.',
  },
  {
    icon: Utensils,
    title: 'Variedade de pratos',
    text: 'Explore diferentes receitas e descubra novos sabores em um só lugar.',
  },
  {
    icon: Sparkles,
    title: 'Experiência simples',
    text: 'Uma interface clara para você navegar, escolher e pedir sem complicação.',
  },
]

export default function Features() {
  return (
    <section
      id="funcionalidades"
      className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gourmet-green">
            Funcionalidades
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-gourmet-dark sm:text-5xl">
            Tudo para encontrar
            <span className="text-gourmet-red"> seu próximo prato.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gourmet-dark/65 sm:text-lg">
            Recursos pensados para deixar a descoberta de sabores mais rápida,
            organizada e agradável.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-3xl border border-gourmet-dark/8 bg-gourmet-cream p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="absolute right-5 top-4 text-6xl font-black text-gourmet-green/8">
                0{index + 1}
              </span>

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gourmet-red shadow-sm">
                <Icon size={27} strokeWidth={2.2} />
              </div>

              <h3 className="relative mt-6 text-xl font-extrabold text-gourmet-dark">
                {title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gourmet-dark/60">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
