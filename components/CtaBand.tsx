import Reveal from "./Reveal";

// Повторный призыв к тесту между крупными блоками
export default function CtaBand({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-site px-4 pb-section sm:px-6">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-olive-deep p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-xl font-semibold text-cream sm:text-2xl">
              {title}
            </p>
            <p className="mt-2 max-w-prose text-[15px] text-cream/80">{text}</p>
          </div>
          <a
            href="#test"
            className="shrink-0 rounded-card bg-cream px-6 py-3.5 font-semibold text-olive-deep transition-colors hover:bg-sage"
          >
            Пройти тест
          </a>
        </div>
      </Reveal>
    </div>
  );
}
