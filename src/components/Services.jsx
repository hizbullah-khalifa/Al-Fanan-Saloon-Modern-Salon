import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, CircleDollarSign } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "../data/content";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Signature Services"
          description="Every service begins with a consultation. Tap a service to see pricing and what's included."
        />

        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-amber-500 bg-white shadow-xl shadow-amber-500/10 dark:border-amber-400 dark:bg-zinc-900"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-amber-500 text-zinc-950"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      <CircleDollarSign className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {service.title}
                      </h3>
                      <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-amber-500 text-zinc-950"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="border-t border-dashed border-zinc-200 px-6 py-5 dark:border-zinc-800">
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                          <span className="inline-flex items-center gap-1.5">
                            <CircleDollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            {service.price}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}