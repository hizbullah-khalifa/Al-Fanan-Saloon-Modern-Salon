import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
  User,
  Phone,
  CalendarDays,
  Scissors,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SERVICES, CONTACT, WHATSAPP_LINK } from "../data/content";

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES[0].title,
    date: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      const text = encodeURIComponent(
        `Hi Ali Barbare! I'd like to book:\n\nService: ${form.service}\nName: ${form.name}\nPhone: ${form.phone}\nPreferred date/time: ${form.date}\nMessage: ${form.message}`,
      );
      window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${text}`, "_blank");
      setTimeout(() => {
        setStatus("idle");
        setForm({
          name: "",
          phone: "",
          service: SERVICES[0].title,
          date: "",
          message: "",
        });
      }, 3500);
    }, 1400);
  };

  return (
    <section id="contact" className="py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Book an Appointment"
          title="Reserve Your Chair"
          description="Fill in your details and we'll confirm your booking on WhatsApp within minutes."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Prefer WhatsApp?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Skip the form and message us directly. We reply fast — usually
                within minutes during opening hours.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-105 hover:bg-green-500"
              >
                <MessageCircle className="h-5 w-5" />
                Message Us on WhatsApp
              </a>
              <div className="mt-6 space-y-3 border-t border-dashed border-zinc-200 pt-6 text-sm dark:border-zinc-700">
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Phone className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  {CONTACT.phone}
                </div>
                <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                  <CalendarDays className="mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-400" />
                  Walk-ins welcome, appointments recommended
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400"
                    >
                      <CheckCircle2 className="h-11 w-11" />
                    </motion.span>
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                      Booking Sent!
                    </h3>
                    <p className="max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
                      We've opened WhatsApp with your booking details. Hit send
                      and we'll confirm your chair shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone / WhatsApp number"
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="relative">
                        <Scissors className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass} cursor-pointer pl-11`}
                        >
                          {SERVICES.map((s) => (
                            <option key={s.title} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="datetime-local"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                    </div>

                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Anything we should know? (optional)"
                      className={`${inputClass} resize-none`}
                    />

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/50 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Request Booking
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}