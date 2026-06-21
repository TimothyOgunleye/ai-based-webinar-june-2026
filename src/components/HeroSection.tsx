import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { assets, registrationLink } from "../constants/workshop";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute left-[-10rem] top-20 h-80 w-80 rounded-full bg-[#ff8a00]/25 blur-3xl" />
      <div className="absolute right-[-8rem] top-16 h-96 w-96 rounded-full bg-[#f31286]/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f31286]/20 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#f31286] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Free virtual AI training
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#07164f] sm:text-6xl lg:text-7xl">
            <span className="block text-[#f31286]">Encoding Values in AI Systems:</span>
            <span className="block">Encoding Trust in LLM Systems</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#39445f] sm:text-xl">
            Join Tim-R Programming Consult, Nigeria for a 2-day AI-based
            virtual training workshop designed to help you encode values, build
            trust, and ship better AI systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={registrationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10236f] px-7 py-4 text-base font-black text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-[#07164f]"
            >
              Register for Free
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="#topics"
              className="inline-flex items-center justify-center rounded-2xl border border-[#10236f]/15 bg-white px-7 py-4 text-base font-black text-[#10236f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f31286]/40"
            >
              View Workshop Details
            </a>
          </div>

          <div className="mt-8 max-w-2xl rounded-3xl border border-[#f31286]/15 bg-white/80 p-5 shadow-lg shadow-pink-950/5">
            <p className="text-sm font-semibold leading-7 text-[#39445f]">
              The training is completely free to attend. Participants who would
              like an official certificate may request one after the workshop
              with a small administrative token to support processing and
              documentation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10"
        >
          <div className="rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-blue-950/20">
            <img
              src={assets.flyer}
              alt="AI-based virtual training workshop flyer"
              className="w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
