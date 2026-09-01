import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // На машине есть лишний lockfile выше по дереву — фиксируем корень трейсинга
  outputFileTracingRoot: __dirname,
  images: {
    // Статический экспорт: оптимизатор изображений недоступен,
    // поэтому кладём в public уже подготовленные размеры.
    unoptimized: true,
  },
};

export default nextConfig;
