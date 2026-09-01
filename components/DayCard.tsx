"use client";

import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mechanics from "@/content/mechanics.json";

const { day } = mechanics;

// Плавный числовой счётчик; при prefers-reduced-motion значение меняется мгновенно
function useAnimatedNumber(value: number) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  // текущее отображаемое значение: анимация стартует с него,
  // даже если предыдущая была прервана на середине
  const shown = useRef(value);

  useEffect(() => {
    if (shown.current === value) return;
    if (reduceMotion) {
      shown.current = value;
      setDisplay(value);
      return;
    }
    const controls = animate(shown.current, value, {
      duration: 0.25,
      ease: "easeOut",
      onUpdate: (v) => {
        shown.current = Math.round(v);
        setDisplay(shown.current);
      },
    });
    return () => controls.stop();
  }, [value, reduceMotion]);

  return display;
}

function CheckIcon({ visible }: { visible: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
        visible ? "border-cream bg-cream/20" : "border-olive/40 bg-cream"
      }`}
    >
      {visible && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2.5 7.5 3 3 6-7" />
        </svg>
      )}
    </span>
  );
}

export default function DayCard() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState<Record<string, boolean>>({});

  const doneTasks = day.tasks.filter((t) => done[t.id]);
  const earned = doneTasks.reduce((sum, t) => sum + t.points, 0);
  const allDone = doneTasks.length === day.tasks.length;
  const anyDone = doneTasks.length > 0;

  const points = useAnimatedNumber(earned);
  const levelProgress = Math.min(
    (day.level.current + earned) / day.level.perLevel,
    1,
  );
  const streak = day.baseStreak + (anyDone ? 1 : 0);

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="rounded-card bg-cream p-5 sm:p-8">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-xl font-semibold">{day.title}</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {day.tasks.map((task) => {
              const isDone = !!done[task.id];
              return (
                <li key={task.id}>
                  <button
                    type="button"
                    aria-pressed={isDone}
                    onClick={() => toggle(task.id)}
                    className={`flex w-full items-center gap-4 rounded-card border-2 px-4 py-3.5 text-left transition-colors ${
                      isDone
                        ? "border-olive-deep bg-olive-deep text-cream"
                        : "border-sage bg-sage/50 hover:border-olive/40"
                    }`}
                  >
                    <CheckIcon visible={isDone} />
                    <span className="flex-1">
                      <span
                        className={`block text-xs font-semibold uppercase tracking-wide ${
                          isDone ? "text-cream/80" : "text-moss"
                        }`}
                      >
                        {task.slot}
                      </span>
                      <span className="mt-0.5 block font-medium">
                        {task.label}
                      </span>
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        isDone ? "text-cream/90" : "text-olive-deep"
                      }`}
                    >
                      +{task.points}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => setDone({})}
            className="mt-5 rounded-card text-sm font-medium text-moss underline-offset-4 hover:text-olive-deep hover:underline"
          >
            {day.resetLabel}
          </button>
        </div>

        <div className="flex flex-col gap-4" aria-live="polite">
          <div className="rounded-card bg-sage p-5">
            <p className="text-sm text-moss">Баллы за сегодня</p>
            <p className="mt-1 text-4xl font-semibold text-olive-deep">
              {points}
            </p>
          </div>
          <div className="rounded-card bg-sage p-5">
            <p className="text-sm text-moss">Уровень {day.level.number}</p>
            <div
              className="mt-3 h-2 w-full overflow-hidden rounded-full bg-cream"
              role="img"
              aria-label={`До следующего уровня ${day.level.perLevel - day.level.current - earned} баллов`}
            >
              <div
                className="h-full rounded-full bg-olive transition-[width] duration-300 ease-out"
                style={{ width: `${levelProgress * 100}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-moss">
              {day.level.current + earned} из {day.level.perLevel}
            </p>
          </div>
          <div
            className={`rounded-card p-5 transition-colors ${
              anyDone ? "bg-olive-deep text-cream" : "bg-sage"
            }`}
          >
            <p className={`text-sm ${anyDone ? "text-cream/80" : "text-moss"}`}>
              Серия дней
            </p>
            <motion.p
              key={streak}
              initial={reduceMotion || !anyDone ? false : { scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`mt-1 text-4xl font-semibold ${
                anyDone ? "text-cream" : "text-ink"
              }`}
            >
              {streak}
            </motion.p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 flex flex-wrap items-center gap-4 rounded-card border-2 border-olive bg-sage p-5"
          >
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-olive text-cream"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v4m0 0a4 4 0 1 0 4 4m-4-4a4 4 0 1 1-4 4m4 9v-5m-4 5h8" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">{day.reward.banner}</p>
              <p className="text-[15px] text-moss">
                Открыта награда: {day.reward.name} — {day.reward.cost}{" "}
                {day.reward.currency}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
