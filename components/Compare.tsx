import blocks from "@/content/product-blocks.json";
import Reveal from "./Reveal";

const { compare } = blocks;

export default function Compare() {
  return (
    <section className="bg-sage/50 py-section">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-prose text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {compare.title}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {compare.options.map((option) => (
              <div
                key={option.name}
                className={`rounded-card p-6 ${
                  "highlight" in option && option.highlight
                    ? "border-2 border-olive bg-cream"
                    : "border border-sage bg-cream"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    "highlight" in option && option.highlight
                      ? "text-olive-deep"
                      : ""
                  }`}
                >
                  {option.name}
                </h3>
                <dl className="mt-4 flex flex-col gap-3">
                  {compare.criteria.map((criterion, i) => (
                    <div key={criterion}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-moss">
                        {criterion}
                      </dt>
                      <dd className="mt-0.5 text-[15px]">
                        {option.values[i]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
