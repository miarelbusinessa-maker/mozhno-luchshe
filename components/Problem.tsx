import Reveal from "./Reveal";

const STATS = [
  {
    value: "75%",
    label: "не удовлетворены существующими решениями",
  },
  {
    value: "2 из 3",
    label: "срываются с диеты",
  },
  {
    value: "35%",
    label: "не любят спортзал",
  },
];

export default function Problem() {
  return (
    <section className="bg-sage py-section">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-prose text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Почему забота о здоровье так часто срывается
          </h2>
          <p className="mt-5 max-w-prose text-moss">
            Мы поговорили с людьми, которые не раз пытались изменить образ
            жизни. Дело не в лени: подходам, которые они пробовали,
            не хватало поддержки, гибкости и простых понятных шагов.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.08}>
              <div className="rounded-card bg-cream p-7">
                <p className="text-4xl font-semibold text-olive-deep sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15px] text-moss">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-moss">
          По результатам 30+ проблемных интервью, проведённых командой
          в 2024 году.
        </p>
      </div>
    </section>
  );
}
