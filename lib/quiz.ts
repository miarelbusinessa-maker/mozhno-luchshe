export type Question = {
  id: "goal" | "activity" | "barrier" | "support" | "time";
  title: string;
  options: string[];
};

export const QUESTIONS: Question[] = [
  {
    id: "goal",
    title: "Какая у вас основная цель?",
    options: [
      "Больше энергии",
      "Форма",
      "Режим и дисциплина",
      "Показатели здоровья",
    ],
  },
  {
    id: "activity",
    title: "Как часто вы двигаетесь за обычную неделю?",
    options: ["Редко", "1–2 раза", "3–4 раза", "Почти каждый день"],
  },
  {
    id: "barrier",
    title: "Что обычно мешает?",
    options: [
      "Нет мотивации",
      "Нет времени",
      "Слишком много противоречивых советов",
      "Начинаю и бросаю",
    ],
  },
  {
    id: "support",
    title: "Какая поддержка вам подходит?",
    options: [
      "Понятные задачи на день",
      "Награды и прогресс",
      "Чтобы кто-то спрашивал, как дела",
      "Просто информация",
    ],
  },
  {
    id: "time",
    title: "Сколько времени готовы уделять в день?",
    options: ["До 15 минут", "15–30 минут", "30–60 минут", "Больше часа"],
  },
];

// Ответы храним как индекс выбранного варианта для каждого шага.
export type Answers = (number | null)[];

export const EMPTY_ANSWERS: Answers = QUESTIONS.map(() => null);

import profilesContent from "@/content/profiles.json";

export type Profile = {
  id: string;
  name: string;
  description: string;
  steps: string[];
};

export const RESULT_DISCLAIMER = profilesContent.disclaimer;

// Черновое правило сопоставления: профиль определяется ответом
// на первый вопрос (цель). Финальные правила задаёт продукт.
export function getProfile(answers: Answers): Profile {
  return profilesContent.profiles[answers[0] ?? 0];
}
