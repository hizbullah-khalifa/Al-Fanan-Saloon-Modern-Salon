import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "../data/content";

const ACTIVE_COLOR = "text-amber-500 fill-amber-500";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          description="Real words from the men who trust us with their look."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-black/5 sm:min-h-[280px] dark:border-zinc-800 dark:bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex h-full flex-col items-center justify-center gap-5 px-8 py-12 text-center sm:px-16"
              >
                <Quote className="h-9 w-9 text-amber-500/60 dark:text-amber-400/60" />
                <blockquote className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-zinc-700 sm:text-xl dark:text-zinc-200">
                  "{t.quote}"
                </blockquote>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < t.rating ? ACTIVE_COLOR : "text-zinc-300 dark:text-zinc-600"}`}
                    />
                  ))}
                </div>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-12 w-12 rounded-full border-2 border-amber-500 object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {t.name}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            aria-label="Previous review"
            onClick={prev}
            className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-lg transition-all hover:-left-2 hover:border-amber-500 hover:text-amber-600 sm:-left-16 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-amber-400"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next review"
            onClick={next}
            className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-lg transition-all hover:-right-2 hover:border-amber-500 hover:text-amber-600 sm:-right-16 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-amber-400"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-amber-600 dark:bg-amber-400"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}