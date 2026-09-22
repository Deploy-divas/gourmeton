import { Star } from 'lucide-react'
import mariana from'../assets/dep1.png'
import pedro from'../assets/dep2.png'
import joana from'../assets/dep3.png'

import '../assets/dep1.png'
const depoimentos = [
  {
    "id": 1,
    "nome": "Mariana Costa",
    "foto": mariana,
    "nota": 10,
    "titulo": "Experiência incrível",
    "descricao": "A comida chegou quentinha, bem embalada e muito saborosa. Com certeza vou pedir novamente!"
  },
  {
    "id": 2,
    "nome": "Pedro Almeida",
    "foto": pedro,
    "nota": 9,
    "titulo": "Muito sabor e qualidade",
    "descricao": "Gostei muito da variedade de pratos e da facilidade para encontrar exatamente o que eu queria."
  },
  {
    "id": 3,
    "nome": "Joana Santos",
    "foto": joana,
    "nota": 10,
    "titulo": "Virou meu delivery favorito",
    "descricao": "Tudo foi muito simples desde a escolha do prato até a entrega. A comida estava deliciosa!"
  }
]

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-gourmet-cream py-10 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gourmet-green">
            Depoimentos
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-gourmet-dark sm:text-5xl">
            Quem pede,
            <span className="text-gourmet-red"> recomenda!</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gourmet-dark/65 sm:text-lg">
            Veja o que nossos clientes estão falando sobre seus pedidos e
            experiências com a GourmetOn.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article
              key={depoimento.id}
              className="relative overflow-hidden rounded-3xl border border-gourmet-dark/8 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gourmet-yellow">
                  <Star
                    size={18}
                    fill="currentColor"
                    strokeWidth={2}
                  />

                  <span className="ml-1 text-sm font-black text-gourmet-dark">
                    {depoimento.nota}/10
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={depoimento.foto}
                  alt={`Foto de ${depoimento.nome}`}
                  className="h-14 w-14 rounded-full object-cover"
                />

             
                <h3 className="font-extrabold text-gourmet-dark">
                {depoimento.nome}
                </h3>
                  
              </div>

              <h4 className="mt-6 text-xl font-extrabold text-gourmet-red">
                "{depoimento.titulo}"
              </h4>

              <p className="mt-3 text-sm leading-6 text-gourmet-dark/60">
                "{depoimento.descricao}"
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}