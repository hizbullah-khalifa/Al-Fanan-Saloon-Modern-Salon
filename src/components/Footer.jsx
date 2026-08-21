import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, ArrowUp } from "lucide-react";
import { NAV_LINKS, CONTACT } from "../data/content";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "./SocialIcons";

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon, href: "https://instagram.com" },
  { label: "Facebook", Icon: FacebookIcon, href: "https://facebook.com" },
  { label: "TikTok", Icon: TikTokIcon, href: "https://tiktok.com" },
  {
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    href: `https://wa.me/${CONTACT.whatsappNumber}`,
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold text-zinc-50">
                Ali <span className="text-amber-400">Barbare</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Dubai's premium destination for classic cuts and modern grooming.
              Sharp looks, every visit.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-amber-400"
                  >
                    <span className="h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-amber-400">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-amber-400">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Al Fanan Saloon. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with precision in <span className="text-amber-400">Dubai</span>
            <span aria-hidden>✂️</span>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-300 hover:scale-110 hover:bg-amber-400"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}