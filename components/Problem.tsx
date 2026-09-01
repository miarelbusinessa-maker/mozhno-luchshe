import Link from "next/link";
import causes from "@/content/causes.json";
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
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {causes.home.map((cause, i) => (
            <Reveal key={cause.title} delay={i * 0.06}>
              <div className="h-full rounded-card bg-cream p-6">
                <h3 className="text-lg font-semibold">{cause.title}</h3>
                <p className="mt-2 text-[15px]">{cause.what}</p>
                <p className="mt-2 text-[15px] text-moss">{cause.why}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link
          href={causes.link.href}
          className="mt-2 inline-block rounded-card font-semibold text-olive-deep underline-offset-4 hover:underline"
        >
          {causes.link.label} →
        </Link>
      </div>
    </section>
  );
}
