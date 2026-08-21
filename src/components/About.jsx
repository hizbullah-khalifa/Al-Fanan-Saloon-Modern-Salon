import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Award, Scissors, Star, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { STATS } from "../data/content";

const ICONS = {
  award: Award,
  users: Users,
  scissors: Scissors,
  star: Star,
};

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Number.isInteger(value)
          ? Math.floor(v)
          : v.toFixed(1);
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span>
      <span ref={ref}>0</span>
      <span className="text-amber-600 dark:text-amber-400">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="More Than a Haircut"
          description="Born in the heart of Dubai, Al Fanan Saloon blends old-world barbering craft with a modern, elevated experience."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/20">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                alt="Inside the Al Fanan Saloon"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-amber-200 bg-white px-6 py-4 shadow-xl sm:block dark:border-amber-500/30 dark:bg-zinc-800">
              <div className="font-display text-3xl font-semibold text-amber-600 dark:text-amber-400">7+</div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Years of Craft
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              <p>
                What started as a single chair and a pair of scissors has grown
                into one of the city's most trusted destinations for premium
                grooming. Every client who walks through our doors is treated to
                the same ritual: a consult-first cut, precision tools, and an
                uncompromising finish.
              </p>
              <p>
                Our master barbers are hand-picked and continuously trained in
                the latest techniques — from textured crop cuts to straight-razor
                beard sculpting — because in Dubai, your look has to be sharp.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((stat) => {
                const Icon = ICONS[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <Icon className="mx-auto mb-3 h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <div className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}