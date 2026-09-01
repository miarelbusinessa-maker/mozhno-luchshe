import blocks from "@/content/product-blocks.json";
import Reveal from "./Reveal";

const { sevenDays } = blocks;

export default function SevenDays() {
  return (
    <section className="mx-auto max-w-site px-4 py-section sm:px-6">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {sevenDays.title}
        </h2>
        <p className="mt-5 max-w-prose text-moss">{sevenDays.intro}</p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sevenDays.days.map((d) => (
            <li key={d.label} className="rounded-card bg-sage p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-olive-deep">
                {d.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-[15px] text-moss">{d.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
