import logo from '../assets/gourmeton-logo.png'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Apresentação', href: '#apresentacao' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Inscrição', href: '#newsletter' },
]


export default function Footer() {

  return (
    <footer className="py-10 px-6 sm:px-10 lg:px-20 bg-gourmet-dark">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">

            <div className="p-5 flex flex-col items-center text-center lg:items-start lg:text-left">
                <a
                href="#inicio"
                className="flex items-center rounded-lg outline-none transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gourmet-yellow"
                aria-label="GourmetOn — voltar ao início"
                >
                <img
                    src={logo}
                    alt="GourmetOn — Sabores do seu jeito"
                    className="h-17 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] mb-5"
                />
                </a>
                <p className="text-gourmet-cream text-base max-w-md">Sabores da Itália direto pra sua casa, com ingredientes selecionados e entregues fresquinhos para transformar cada refeição em uma experiência especial.</p>
            </div>

            <nav className="flex flex-col justify-center items-center text-center">

                {links.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className="py-1 font-semibold text-gourmet-cream transition-colors hover:text-gourmet-red text-lg">
                    {link.label}
                    </a>
                ))}
            </nav>

            <div className="p-5 flex flex-col items-center text-center lg:items-end lg:text-right">
                <h3 className='text-gourmet-green font-bold pb-3'>Encontre-nos</h3>
                <ul>
                    <li className='text-gourmet-cream text-base'>(11) 98765-4321</li>
                    <li className='text-gourmet-cream text-base'>deploydasdiva@gmail.com</li>
                    <li className='text-gourmet-cream text-base'>Av. Paulista, 1011</li>
                </ul>
            </div>
            
            
        </div>

        <div className="border-t border-gourmet-cream/20 mt-6 pt-5" />

        <p className="text-gourmet-cream/50 text-sm text-center">© 2026 GourmetOn. Todos os direitos reservados.</p>

    </footer>
  )
}
