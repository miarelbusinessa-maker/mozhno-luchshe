import Image from "next/image";
import Reveal from "./Reveal";

const FEATURES = [
  {
    label: "ИИ-наставник",
    icon: (
      <path d="M12 3a7 7 0 0 1 7 7c0 2.4-1.2 4.1-2.5 5.5-.8.9-1.5 2-1.5 3.5h-6c0-1.5-.7-2.6-1.5-3.5C6.2 14.1 5 12.4 5 10a7 7 0 0 1 7-7ZM10 22h4" />
    ),
  },
  {
    label: "Игровые механики",
    icon: (
      <path d="M8 5h8a5 5 0 0 1 5 5v4a3 3 0 0 1-5.4 1.8L14 14h-4l-1.6 1.8A3 3 0 0 1 3 14v-4a5 5 0 0 1 5-5Zm0 4v2m-1-1h2m6.5-.5h.01M17.5 11h.01" />
    ),
  },
  {
    label: "Питание и тренировки",
    icon: (
      <path d="M4 12h3m10 0h3M8 7v10m8-10v10M8 9.5h8m-8 5h8" />
    ),
  },
  {
    label: "Отслеживание прогресса",
    icon: <path d="M4 20V10m5.4 10V4m5.3 16v-9m5.3 9V8" />,
  },
];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-site px-4 pb-section pt-12 sm:px-6 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14">
        <Reveal>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight lg:text-[2.75rem]">
            Здоровье — это привычки,
            <br />
            которым нужна поддержка
          </h1>
          <p className="mt-6 max-w-prose text-lg text-moss">
            «Можно Лучше» превращает заботу о себе в понятные ежедневные шаги
            и поддерживает интерес игровыми механиками.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#test"
              className="rounded-card bg-olive-deep px-6 py-3.5 font-semibold text-cream transition-colors hover:bg-olive-dark"
            >
              Пройти тест
            </a>
            <a
              href="#program"
              className="rounded-card border border-olive px-6 py-3.5 font-semibold text-olive-deep transition-colors hover:bg-sage"
            >
              Посмотреть программу
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            src="/media/hero-calm-morning.webp"
            alt="Женщина спокойно пьёт чай у окна утром"
            width={1320}
            height={990}
            priority
            className="aspect-[4/3] w-full rounded-card object-cover"
          />
        </Reveal>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-sage pt-8 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <li key={feature.label} className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-olive"
              aria-hidden="true"
            >
              {feature.icon}
            </svg>
            <span className="text-[15px] font-medium text-ink">
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
