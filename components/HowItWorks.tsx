import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Тест",
    text: "Пять коротких вопросов о целях, ритме жизни и том, что мешало раньше. Занимает меньше двух минут.",
  },
  {
    title: "Личный план",
    text: "Наставник собирает программу под ваш ритм. В ней есть фокус, расписание недели и первые небольшие шаги.",
  },
  {
    title: "Ежедневные задачи",
    text: "Каждый день — несколько посильных конкретных заданий. За выполнение начисляются баллы и растёт серия.",
  },
  {
    title: "Разбор прогресса",
    text: "Раз в неделю наставник спокойно разбирает результаты. Что получилось, что скорректировать, куда двигаться дальше.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-site scroll-mt-20 px-4 py-section sm:px-6">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Как это работает
        </h2>
        <p className="mt-5 max-w-prose text-moss">
          Никаких резких перемен с понедельника. Программа строится вокруг
          вашего ритма и меняется вместе с вами.
        </p>
      </Reveal>
      <Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 md:block">
              {/* Тонкая соединительная линия между шагами: на десктопе
                  горизонтальная, на мобильном вертикальная в левой колонке */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[2.75rem] top-6 hidden h-px w-[calc(100%-3.5rem)] bg-olive/40 md:block"
                />
              )}
              <div className="flex flex-col items-center md:block">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-olive bg-cream font-semibold text-olive-deep">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-olive/40 md:hidden"
                  />
                )}
              </div>
              <div className="pb-2 md:pb-0">
                <h3 className="text-xl font-semibold md:mt-5">{step.title}</h3>
                <p className="mt-2 text-[15px] text-moss">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
