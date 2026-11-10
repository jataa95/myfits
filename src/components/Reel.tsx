"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "./icons";

type Props = { src: string; poster: string; title: string; caption: string };

/**
 * Portrait video card. Plays muted while in view (desktop + mobile),
 * pauses when scrolled away to save data and battery.
 */
export function Reel({ src, poster, title, caption }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="group relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-ink-2">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        aria-label={title}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute inset-0 z-10 flex items-center justify-center"
        aria-label={playing ? `Pause: ${title}` : `Play: ${title}`}
      >
        <span
          className={`grid size-16 place-items-center rounded-full bg-white/90 text-ink shadow-xl transition ${
            playing ? "scale-75 opacity-0" : "opacity-100"
          }`}
        >
          <PlayIcon className="ml-1 size-7" />
        </span>
      </button>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-16 text-white">
        <p className="display text-2xl">{title}</p>
        <p className="mt-1 text-sm text-white/70">{caption}</p>
      </figcaption>
    </figure>
  );
}
