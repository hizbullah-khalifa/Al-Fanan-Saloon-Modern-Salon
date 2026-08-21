import { motion } from "framer-motion";
import { CalendarCheck, ChevronDown, Scissors } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function FloatingScissors({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [0, -14, 0], rotate: [-12, 8, -12] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute text-amber-500/40 dark:text-amber-400/30 ${className}`}
    >
      <Scissors className="h-10 w-10 md:h-14 md:w-14" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950 dark:from-zinc-950/90 dark:via-zinc-950/70 dark:to-zinc-950" />
      </div>

      <FloatingScissors className="left-[8%] top-[22%]" delay={0} />
      <FloatingScissors className="right-[10%] top-[30%]" delay={1.5} />
      <FloatingScissors className="left-[18%] bottom-[24%]" delay={3} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center sm:px-8"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          Premium Grooming · Dubai
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-semibold leading-tight text-zinc-50 sm:text-6xl lg:text-7xl"
        >
          Premium Cuts,
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Sharp Style
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
        >
          Where classic barbering meets modern grooming. Step into Dubai's most
          talked-about barbershop for an experience that leaves you looking —
          and feeling — your absolute best.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-300 hover:scale-105 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/50"
          >
            <CalendarCheck className="h-5 w-5 transition-transform group-hover:-rotate-6" />
            Book Now
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-500/60 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:text-amber-300"
          >
            Our Services
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-zinc-400 transition-colors hover:text-amber-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}