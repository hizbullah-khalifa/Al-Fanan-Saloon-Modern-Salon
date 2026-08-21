import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { CONTACT, OPENING_HOURS, WHATSAPP_LINK } from "../data/content";

export default function Location() {
  return (
    <section id="location" className="bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit the Shop"
          description="Conveniently located on Sheikh Zayed Road, minutes from Downtown Dubai."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Address
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {CONTACT.address}
                </p>
                <a
                  href={CONTACT.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:underline dark:text-amber-400"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                <Clock className="h-6 w-6" />
              </span>
              <div className="w-full">
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Opening Hours
                </h3>
                <ul className="mt-3 space-y-2">
                  {OPENING_HOURS.map((row) => (
                    <li
                      key={row.day}
                      className="flex items-center justify-between border-b border-dashed border-zinc-200 pb-2 text-sm dark:border-zinc-700"
                    >
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {row.day}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/30 dark:bg-amber-400 dark:text-zinc-900 dark:hover:bg-amber-300"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl shadow-black/5 dark:border-zinc-800">
              <iframe
                title="Al Fanan Saloon  location map"
                src={CONTACT.mapEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[30%] transition-all duration-500 hover:grayscale-0 dark:invert-[92%] dark:hue-rotate-180"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}