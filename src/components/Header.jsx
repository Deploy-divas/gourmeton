import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-limpa.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Apresentação", href: "#apresentacao" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Inscrição", href: "#newsletter" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gourmet-green/15 bg-gourmet-cream/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center rounded-lg outline-none transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gourmet-red"
          aria-label="GourmetOn — voltar ao início"
        >
          <img
            src={logo}
            alt="GourmetOn — Sabores do seu jeito"
            className="h-20 w-auto object-contain sm:h-14"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm font-semibold text-gourmet-dark/80 transition-colors hover:text-gourmet-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gourmet-red focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#funcionalidades"
            className="rounded-full bg-gourmet-red px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-gourmet-red/20 transition hover:-translate-y-0.5 hover:bg-gourmet-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gourmet-red focus-visible:ring-offset-2"
          >
            Conheça o app
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-gourmet-dark transition hover:bg-gourmet-green/10 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gourmet-green/10 bg-gourmet-cream px-5 pb-5 pt-3 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-gourmet-dark transition hover:bg-gourmet-green/10 hover:text-gourmet-red"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#funcionalidades"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-gourmet-red px-5 py-3 text-center font-bold text-white"
            >
              Conheça o app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
