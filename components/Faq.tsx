"use client";

import { useState } from "react";
import blocks from "@/content/product-blocks.json";
import Reveal from "./Reveal";

const { faq } = blocks;

export default function Faq() {
  // Первый вопрос раскрыт по умолчанию
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-site scroll-mt-20 px-4 py-section sm:px-6">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {faq.title}
        </h2>
        <div className="mt-10 flex max-w-3xl flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-card bg-sage">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-card px-5 py-4 text-left font-semibold"
                  >
                    {item.q}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                      className={`shrink-0 text-olive-deep transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <path d="M9 3v12M3 9h12" />
                    </svg>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className="px-5 pb-5"
                  >
                    <p className="max-w-prose text-[15px]">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
