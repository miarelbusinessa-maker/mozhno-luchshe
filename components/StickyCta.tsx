"use client";

import { useEffect, useState } from "react";

// Липкая кнопка теста на мобильном: появляется после прокрутки
// первого экрана и прячется, когда блок теста уже виден
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const test = document.getElementById("test");
    if (!hero || !test) return;

    const update = () => {
      const heroGone = hero.getBoundingClientRect().bottom <= 0;
      const testRect = test.getBoundingClientRect();
      const testVisible =
        testRect.top < window.innerHeight && testRect.bottom > 0;
      setShow(heroGone && !testVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <a
        href="#test"
        className="block rounded-card bg-olive-deep px-6 py-4 text-center font-semibold text-cream shadow-lg shadow-ink/20"
      >
        Пройти тест
      </a>
    </div>
  );
}
