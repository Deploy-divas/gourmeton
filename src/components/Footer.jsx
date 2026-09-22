import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/gourmeton-logo.png'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Apresentação', href: '#apresentacao' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
]

export default function Footer() {

  return (
    <footer className="grid grid-cols-3 gap-10 py-10 px-15 bg-gourmet-dark">
        <div className="p-10 ">
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
            <p className="text-gourmet-cream text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi eum illo, omnis similique odit. Minus corrupti quod et eos?</p>
        </div>

        <div className="p-10 flex flex-col text-center">
                {links.map((link) => (

                    <a
                    key={link.href}
                    href={link.href}
                    className="py-1 font-semibold text-gourmet-cream transition-colors hover:text-gourmet-red"
                    >
                    {link.label}
                    </a>
                ))}

        </div>
        
        <div className="p-10 text-right">
            <h3 className='text-gourmet-green font-bold pb-3'>Encontre-nos</h3>
            <ul>
                <li className='text-gourmet-cream text-base'>(11) 98765-4321</li>
                <li className='text-gourmet-cream text-base'>deploydasdiva@gmail.com</li>
                <li className='text-gourmet-cream text-base'>Av. Paulista, 1011</li>
            </ul>
        </div>

    </footer>
  )
}
