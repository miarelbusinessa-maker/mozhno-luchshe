"use client";

import { useEffect, useRef, useState } from "react";
import {
  Answers,
  EMPTY_ANSWERS,
  getProfile,
  QUESTIONS,
  RESULT_DISCLAIMER,
} from "@/lib/quiz";
import Reveal from "./Reveal";

const ADVANCE_DELAY_MS = 250;

export default function Quiz() {
  // step 0..4 — вопросы, 5 — финальный экран с планом
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const isFinished = step === QUESTIONS.length;
  const question = isFinished ? null : QUESTIONS[step];

  function selectOption(optionIndex: number) {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = optionIndex;
      return next;
    });
    advanceTimer.current = setTimeout(() => {
      setStep((s) => s + 1);
    }, ADVANCE_DELAY_MS);
  }

  function goBack() {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setStep((s) => Math.max(0, s - 1));
  }

  function restart() {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setAnswers(EMPTY_ANSWERS);
    setStep(0);
  }

  // Стрелки перемещают фокус по вариантам ответа
  function onOptionKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const count = question?.options.length ?? 0;
    let nextIndex: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      nextIndex = (index + 1) % count;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      nextIndex = (index - 1 + count) % count;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      optionRefs.current[nextIndex]?.focus();
    }
  }

  const profile = isFinished ? getProfile(answers) : null;

  return (
    <section id="test" className="mx-auto max-w-site scroll-mt-20 px-4 py-section sm:px-6">
      <Reveal>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Соберите свой план
        </h2>
        <p className="mt-5 max-w-prose text-moss">
          Пять коротких вопросов — и вы увидите, с чего программа началась бы
          именно для вас. Ответы никуда не отправляются.
        </p>
      </Reveal>

      <div className="mt-10 rounded-card bg-sage p-5 sm:p-10">
        {!isFinished && question && (
          <div>
            <div className="mb-8">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium text-moss">
                  Шаг {step + 1} из {QUESTIONS.length}
                </p>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="rounded-card text-sm font-medium text-olive-deep underline-offset-4 hover:underline"
                  >
                    ← Назад
                  </button>
                )}
              </div>
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cream"
                role="progressbar"
                aria-label="Прогресс теста"
                aria-valuemin={1}
                aria-valuemax={QUESTIONS.length}
                aria-valuenow={step + 1}
              >
                <div
                  className="h-full rounded-full bg-olive transition-all"
                  style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold sm:text-2xl">
              {question.title}
            </h3>
            <div
              role="radiogroup"
              aria-label={question.title}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              {question.options.map((option, i) => {
                const selected = answers[step] === i;
                return (
                  <button
                    key={option}
                    ref={(el) => {
                      optionRefs.current[i] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => selectOption(i)}
                    onKeyDown={(e) => onOptionKeyDown(e, i)}
                    className={`rounded-card border-2 bg-cream px-5 py-4 text-left font-medium transition-colors ${
                      selected
                        ? "border-olive"
                        : "border-cream hover:border-olive/40"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {isFinished && profile && (
          <div>
            <p className="text-sm font-medium text-moss">Ваш профиль</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
              {profile.name}
            </h3>
            <p className="mt-4 max-w-prose">{profile.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {profile.steps.map((step, i) => (
                <div key={step} className="rounded-card bg-cream p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-olive-deep">
                    Шаг {i + 1}
                  </p>
                  <p className="mt-2 text-[15px]">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://t.me/miar_in"
                className="rounded-card bg-olive-deep px-6 py-3.5 font-semibold text-cream transition-colors hover:bg-olive-dark"
              >
                Написать нам в Telegram
              </a>
              <button
                type="button"
                onClick={restart}
                className="rounded-card border border-olive px-6 py-3.5 font-semibold text-olive-deep transition-colors hover:bg-cream"
              >
                Пройти заново
              </button>
            </div>
            <p className="mt-6 max-w-prose text-sm text-moss">
              {RESULT_DISCLAIMER}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
