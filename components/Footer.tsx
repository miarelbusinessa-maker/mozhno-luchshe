import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-sage bg-cream">
      <div className="mx-auto max-w-site px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/media/logo-horizontal.png"
              alt="Можно Лучше — модификация образа жизни"
              width={845}
              height={227}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-prose text-[15px] text-moss">
              Прототип сервиса модификации образа жизни: ИИ-наставник,
              персональный план и игровые механики.
            </p>
          </div>
          <ul className="text-[15px] text-moss">
            <li>
              <a
                href="mailto:miar.intr@gmail.com"
                className="rounded-card transition-colors hover:text-olive-deep"
              >
                miar.intr@gmail.com
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://t.me/miar_in"
                className="rounded-card transition-colors hover:text-olive-deep"
              >
                Telegram: @miar_in
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 border-t border-sage pt-6">
          <p className="text-sm text-moss">
            © 2026 Можно Лучше
          </p>
          <p className="mt-2 max-w-prose text-sm text-moss">
            Концепция продукта и демонстрационная работа. Сервис не является
            медицинским и не даёт медицинских рекомендаций.
          </p>
        </div>
      </div>
    </footer>
  );
}
