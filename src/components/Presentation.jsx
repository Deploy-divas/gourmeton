import { Clock3, CreditCard, UtensilsCrossed } from 'lucide-react'

const benefits = [
  {
    icon: Clock3,
    title: 'Entrega rápida',
    text: 'Encontre opções práticas para receber sua refeição sem complicação.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Mais variedade',
    text: 'Descubra pratos e restaurantes para diferentes gostos e momentos.',
  },
  {
    icon: CreditCard,
    title: 'Pagamento fácil',
    text: 'Uma experiência pensada para deixar seu pedido simples do começo ao fim.',
  },
]

export default function Presentation() {
  return (
    <section id="apresentacao" className="scroll-mt-20 bg-gourmet-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-gourmet-red">
              Sobre o GourmetOn
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-gourmet-dark sm:text-5xl">
              Pedir comida pode ser
              <span className="text-gourmet-green"> simples e gostoso.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gourmet-dark/70 sm:text-lg">
              O GourmetOn foi pensado para transformar a escolha da próxima
              refeição em uma experiência leve. Em um só lugar, você pode
              explorar possibilidades e encontrar o que combina com o seu
              gosto.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-gourmet-yellow" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-3xl border border-gourmet-green/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gourmet-green/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gourmet-green/10 text-gourmet-green transition group-hover:bg-gourmet-green group-hover:text-white">
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-gourmet-dark">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gourmet-dark/60">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
