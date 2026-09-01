"use client";

import Image from "next/image";
import { useState } from "react";

// Лёгкая встройка YouTube: до клика — локальный постер без единого
// запроса к YouTube, по клику — iframe youtube-nocookie с автозапуском
export default function YouTubeEmbed({
  videoId,
  title,
  poster,
}: {
  videoId: string;
  title: string;
  poster: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-card bg-ink">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Смотреть видео: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-card bg-ink"
    >
      <Image
        src={poster}
        alt=""
        width={1280}
        height={720}
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-olive-deep transition-colors group-hover:bg-cream">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
