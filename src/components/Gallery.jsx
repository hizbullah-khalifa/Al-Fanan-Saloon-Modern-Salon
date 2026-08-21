import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GALLERY } from "../data/content";

function next() {
  setSelected((cur) =>
    cur === null ? null : (cur + 1) % GALLERY.length,
  );
}

function prev() {
  setSelected((cur) =>
    cur === null
      ? null
      : (cur - 1 + GALLERY.length) % GALLERY.length,
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section
      id="gallery"
      className="bg-zinc-50 py-24 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="The Art of the Fade"
          description="A look at recent cuts, shaves and transformations from the chair."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.map((img, index) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setSelected(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                  img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-950/40 group-hover:opacity-100">
                <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-amber-500 text-zinc-950 transition-transform duration-300 group-hover:scale-100">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              aria-label="Close lightbox"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-zinc-950"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
            >
              <X className="h-6 w-6" />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-zinc-950 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-zinc-950 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={GALLERY[selected].src}
              alt={GALLERY[selected].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}