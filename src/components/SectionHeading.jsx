import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
          <span className="h-px w-8 bg-amber-600 dark:bg-amber-400" />
          {eyebrow}
          <span className="h-px w-8 bg-amber-600 dark:bg-amber-400" />
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}