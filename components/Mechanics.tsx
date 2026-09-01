import mechanics from "@/content/mechanics.json";
import DayCard from "./DayCard";
import Reveal from "./Reveal";

// Схематичные макеты экранов продукта: честная схема вместо
// реалистичных скриншотов несуществующего приложения
function ScreenDay() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col gap-2 p-4">
      <div className="h-2 w-16 rounded-full bg-olive/30" />
      <div className="mt-2 flex flex-col gap-2">
        {[true, true, false].map((filled, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-lg p-2 ${
              filled ? "bg-olive-deep" : "bg-sage"
            }`}
          >
            <span
              className={`h-3.5 w-3.5 rounded-full border-2 ${
                filled ? "border-cream bg-olive" : "border-olive/40 bg-cream"
              }`}
            />
            <span
              className={`h-1.5 flex-1 rounded-full ${
                filled ? "bg-cream/60" : "bg-olive/20"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="mt-auto h-8 rounded-lg bg-olive/15" />
    </div>
  );
}

function ScreenProgress() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col gap-3 p-4">
      <div className="h-2 w-20 rounded-full bg-olive/30" />
      <div className="mt-1 rounded-lg bg-sage p-3">
        <div className="h-4 w-10 rounded bg-olive/50" />
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cream">
          <div className="h-full w-3/4 rounded-full bg-olive" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-sage p-3">
          <div className="h-3 w-8 rounded bg-olive/50" />
          <div className="mt-1.5 h-1.5 w-12 rounded-full bg-olive/20" />
        </div>
        <div className="rounded-lg bg-olive-deep p-3">
          <div className="h-3 w-8 rounded bg-cream/70" />
          <div className="mt-1.5 h-1.5 w-12 rounded-full bg-cream/40" />
        </div>
      </div>
      <div className="mt-auto flex items-end gap-1.5">
        {[5, 8, 6, 10, 7, 11, 9].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-t bg-olive/40"
            style={{ height: `${h * 4}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function ScreenReward() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col items-center gap-3 p-4 pt-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-olive/15">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-olive"
        >
          <path d="M4 10h16v10H4zM2 7h20v3H2zm10 0v13m0-13S9 7 8 5.5C7 4 8.5 2.5 10 3c1.7.6 2 4 2 4Zm0 0s3 0 4-1.5c1-1.5-.5-3-2-2.5-1.7.6-2 4-2 4Z" />
        </svg>
      </div>
      <div className="h-2.5 w-24 rounded-full bg-olive/40" />
      <div className="h-2 w-16 rounded-full bg-olive/20" />
      <div className="mt-auto h-8 w-full rounded-lg bg-olive-deep" />
    </div>
  );
}

const SCREENS = [
  { title: "Экран дня", node: <ScreenDay /> },
  { title: "Экран прогресса", node: <ScreenProgress /> },
  { title: "Экран награды", node: <ScreenReward /> },
];

export default function Mechanics() {
  return (
    <section
      id="mechanics"
      className="mx-auto max-w-site scroll-mt-20 px-4 py-section sm:px-6"
    >
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Механики и вовлечение
        </h2>
        <p className="mt-5 max-w-prose text-moss">{mechanics.day.intro}</p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="rounded-card bg-sage p-2 sm:p-3">
          <DayCard />
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="text-2xl font-semibold tracking-tight">
          Правила прогресса
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {mechanics.rules.map((rule) => (
            <div key={rule.title} className="rounded-card bg-sage p-6">
              <h4 className="font-semibold text-olive-deep">{rule.title}</h4>
              <p className="mt-2 text-[15px]">{rule.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="text-2xl font-semibold tracking-tight">
          Игровые форматы
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mechanics.formats.map((format) => (
            <div
              key={format.title}
              className="rounded-card border border-sage bg-cream p-6"
            >
              <h4 className="font-semibold">{format.title}</h4>
              <p className="mt-2 text-[15px] text-moss">{format.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-card border-2 border-olive bg-sage p-6">
          <h4 className="font-semibold text-olive-deep">
            {mechanics.review.title}
          </h4>
          <p className="mt-2 max-w-prose text-[15px]">{mechanics.review.text}</p>
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="text-2xl font-semibold tracking-tight">
          Как это выглядит в продукте
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {SCREENS.map((screen) => (
            <figure key={screen.title} className="flex flex-col items-center">
              <div className="h-64 w-full max-w-[220px] overflow-hidden rounded-[1.5rem] border-2 border-olive/25 bg-cream">
                {screen.node}
              </div>
              <figcaption className="mt-3 text-sm font-medium text-moss">
                {screen.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
