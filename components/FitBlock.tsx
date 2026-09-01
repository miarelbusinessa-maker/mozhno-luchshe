import blocks from "@/content/product-blocks.json";
import Reveal from "./Reveal";

const { fit } = blocks;

function Mark({ kind }: { kind: "yes" | "no" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`mt-1 shrink-0 ${kind === "yes" ? "text-olive" : "text-moss"}`}
    >
      {kind === "yes" ? (
        <path d="m4 10.5 4 4 8-9" />
      ) : (
        <path d="M10 4v8m0 4h.01" />
      )}
    </svg>
  );
}

export default function FitBlock() {
  return (
    <section className="bg-sage py-section">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {fit.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-card bg-cream p-7">
              <h3 className="text-xl font-semibold text-olive-deep">
                {fit.yes.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {fit.yes.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Mark kind="yes" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-cream p-7">
              <h3 className="text-xl font-semibold">{fit.no.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {fit.no.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Mark kind="no" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
