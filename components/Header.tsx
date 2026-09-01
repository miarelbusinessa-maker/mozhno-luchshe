"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#how", label: "Как это работает" },
  { href: "/#program", label: "Программа" },
  { href: "/#mechanics", label: "Механики" },
  { href: "/#team", label: "О нас" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрываем мобильное меню по Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-sage bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/#top"
          className="flex shrink-0 items-center rounded-card"
          aria-label="Можно Лучше — к началу страницы"
        >
          <Image
            src="/media/logo-horizontal.png"
            alt="Можно Лучше — модификация образа жизни"
            width={845}
            height={227}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Основная навигация">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-card text-[15px] font-medium text-moss transition-colors hover:text-olive-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#test"
            className="hidden rounded-card bg-olive-deep px-5 py-2.5 text-[15px] font-semibold text-cream transition-colors hover:bg-olive-dark sm:inline-block"
          >
            Пройти тест
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-card text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M4 4l14 14M18 4L4 18" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-sage bg-cream px-4 pb-4 pt-2 md:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-card px-2 py-3 font-medium text-ink hover:bg-sage"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#test"
                className="mt-2 block rounded-card bg-olive-deep px-4 py-3 text-center font-semibold text-cream"
                onClick={() => setMenuOpen(false)}
              >
                Пройти тест
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
