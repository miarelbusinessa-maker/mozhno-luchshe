import Image from "next/image";
import Reveal from "./Reveal";

function CheckIcon() {
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
      className="mt-1 shrink-0 text-olive"
      aria-hidden="true"
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

const BLOCKS = [
  {
    image: "/media/product-ai-mentor.webp",
    alt: "Женщина отдыхает на диване и переписывается с наставником в телефоне",
    title: "Наставник, который всегда на связи",
    text: "План — это только начало. Наставник отвечает на вопросы, перестраивает программу, когда меняются обстоятельства, и поддерживает, когда хочется всё бросить.",
    points: [
      "Помнит ваши цели, ритм и ограничения",
      "Подстраивает план под реальную жизнь, а не наоборот",
      "Поддерживает в трудные дни — без давления и нотаций",
    ],
    imageLeft: true,
  },
  {
    image: "/media/product-gamification.webp",
    alt: "Две подруги идут по осеннему парку с ковриками для йоги",
    title: "Мотивация, встроенная в процесс",
    text: "Сила воли — ненадёжный ресурс, поэтому прогресс устроен как игра. Маленькие победы заметны каждый день, и к ним хочется возвращаться.",
    points: [
      "Баллы и уровни за выполненные задачи",
      "Серии дней показывают, как копится постоянство",
      "Внутренняя валюта и награды за достигнутые цели",
    ],
    imageLeft: false,
  },
];

export default function Product() {
  return (
    <section id="program" className="scroll-mt-20 bg-sage/50 py-section">
      <h2 className="sr-only">Программа</h2>
      <div className="mx-auto flex max-w-site flex-col gap-20 px-4 sm:px-6 md:gap-24">
        {BLOCKS.map((block) => (
          <Reveal key={block.title}>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <Image
                src={block.image}
                alt={block.alt}
                width={1200}
                height={900}
                className={`aspect-[4/3] w-full rounded-card object-cover ${
                  block.imageLeft ? "" : "md:order-2"
                }`}
              />
              <div>
                <h3 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 max-w-prose text-moss">{block.text}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
