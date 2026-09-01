import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import why from "@/content/why.json";

export const metadata: Metadata = {
  title: "Почему не получается самостоятельно — Можно Лучше",
  description:
    "Шесть причин, по которым попытки изменить образ жизни срываются, — и какие механики «Можно Лучше» закрывают каждую из них. Без вины и мотивационного давления.",
  openGraph: {
    title: "Почему не получается самостоятельно",
    description:
      "У срывов есть понятные причины. Разбираем шесть самых частых и показываем, что мы делаем иначе.",
    url: "/why",
    siteName: "Можно Лучше",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        url: "/media/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Можно Лучше — модификация образа жизни",
      },
    ],
  },
};

export default function WhyPage() {
  return (
    <div>
      <Header />
      <main>
        <article className="mx-auto max-w-site px-4 py-section sm:px-6">
          <Reveal>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {why.title}
            </h1>
            <p className="mt-6 max-w-prose text-lg text-moss">{why.intro}</p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-6">
            {why.causes.map((cause, i) => (
              <Reveal key={cause.title} delay={Math.min(i * 0.05, 0.15)}>
                <section className="rounded-card bg-sage p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {cause.title}
                  </h2>
                  <dl className="mt-5 grid gap-5 md:grid-cols-3">
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wide text-moss">
                        Что происходит
                      </dt>
                      <dd className="mt-2 text-[15px]">{cause.what}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wide text-moss">
                        Почему так устроено
                      </dt>
                      <dd className="mt-2 text-[15px]">{cause.why}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold uppercase tracking-wide text-olive-deep">
                        Что с этим можно сделать
                      </dt>
                      <dd className="mt-2 text-[15px]">{cause.todo}</dd>
                    </div>
                  </dl>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-section">
            <h2 className="text-3xl font-semibold tracking-tight">
              {why.different.title}
            </h2>
            <p className="mt-4 max-w-prose text-moss">{why.different.intro}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {why.different.items.map((item) => (
                <li key={item.cause} className="rounded-card border border-sage bg-cream p-6">
                  <p className="font-semibold">{item.cause}</p>
                  <p className="mt-2 text-[15px] text-moss">
                    — {item.mechanic}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/#mechanics"
              className="mt-8 inline-block rounded-card font-semibold text-olive-deep underline-offset-4 hover:underline"
            >
              Посмотреть механики в действии →
            </Link>
          </Reveal>

          <Reveal className="mt-section">
            <section className="rounded-card border-2 border-olive bg-sage p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                {why.doctor.title}
              </h2>
              <p className="mt-3 max-w-prose">{why.doctor.text}</p>
              <ul className="mt-4 flex max-w-prose flex-col gap-2">
                {why.doctor.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-prose text-sm text-moss">
                Сервис не является медицинским и не даёт медицинских
                рекомендаций.
              </p>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <Link
              href={why.cta.href}
              className="inline-block rounded-card bg-olive-deep px-8 py-4 font-semibold text-cream transition-colors hover:bg-olive-dark"
            >
              {why.cta.label}
            </Link>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}
