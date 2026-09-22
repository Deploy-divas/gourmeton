import { Mail, ArrowRight } from 'lucide-react'

export default function Newsletter() {

    function handleSubmit(event) {
        event.preventDefault()
        const email = event.target.email.value;
        
        if (!email) {
            return 
        };
        
        alert('Seu email foi cadastrado com sucesso!');
        
        event.target.reset();
    }


  return (
    <section
      id="newsletter"
      className="bg-gourmet-cream py-10 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gourmet-red-dark px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

          <div className="relative z-10 mx-auto max-w-3xl text-center">

            <span className="text-sm font-black uppercase tracking-[0.25em] text-gourmet-yellow">
              Fique por dentro
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              Receba todas as novidades em primeira mão!
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Cadastre seu e-mail e receba novidades, promoções e campanhas
              especiais diretamente na sua caixa de entrada.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              
              <div className="relative flex-1">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gourmet-green"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                  className="h-14 w-full rounded-2xl border-2 border-white/10 bg-white pl-12 pr-4 text-sm text-gourmet-dark outline-none transition placeholder:text-gourmet-dark/40 focus:border-gourmet-green"
                />
              </div>

              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-gourmet-red px-7 font-black text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Quero receber
                <ArrowRight size={19} strokeWidth={2.5} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}