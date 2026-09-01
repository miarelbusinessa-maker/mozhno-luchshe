import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Мария Ельчугина",
    role: "Основатель, продукт",
    line: "Придумала сервис и отвечает за продуктовые решения",
    initials: "МЕ",
  },
  {
    name: "Леонид Ельчугин",
    role: "Технический директор",
    line: "Фронтенд и архитектура прототипа",
    initials: "ЛЕ",
  },
  {
    name: "Денис Баландин",
    role: "Маркетинг",
    line: "Коммуникации и работа с аудиторией",
    initials: "ДБ",
  },
  {
    name: "Дарья Яковлева",
    role: "Врач-диетолог, эндокринолог",
    line: "Следит, чтобы рекомендации были безопасными",
    initials: "ДЯ",
  },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-site scroll-mt-20 px-4 py-section sm:px-6">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Кто делает проект
        </h2>
        <p className="mt-5 max-w-prose text-moss">
          Небольшая команда: продукт, разработка, маркетинг и врач, который
          проверяет каждую формулировку о здоровье.
        </p>
      </Reveal>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.06}>
            <li className="h-full rounded-card bg-sage p-6">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-lg font-semibold text-cream"
              >
                {person.initials}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
              <p className="mt-1 text-[15px] font-medium text-olive-deep">
                {person.role}
              </p>
              <p className="mt-2 text-[15px] text-moss">{person.line}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
