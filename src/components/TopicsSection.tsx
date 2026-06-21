import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { workshopTopics } from "../constants/workshop";

export function TopicsSection() {
  return (
    <section id="topics" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f31286]">
              What you will learn
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#07164f] sm:text-5xl">
              Two sessions, one practical AI mindset.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4b5568]">
              The workshop connects ethics, engineering, culture, and deployment
              practice so participants leave with language they can use and
              patterns they can apply.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {workshopTopics.map((topic, index) => (
              <motion.article
                key={topic.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="rounded-[2rem] border border-[#10236f]/10 bg-white p-7 shadow-xl shadow-blue-950/5"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[#fff0f7] p-3 text-[#f31286]">
                  {index === 0 ? <Users className="h-7 w-7" /> : <ShieldCheck className="h-7 w-7" />}
                </div>
                <h3 className="text-2xl font-black text-[#07164f]">{topic.title}</h3>
                <p className="mt-2 text-sm font-bold text-[#f31286]">{topic.audience}</p>
                <p className="mt-4 leading-7 text-[#4b5568]">{topic.description}</p>
                <ul className="mt-6 space-y-3">
                  {topic.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold text-[#26324b]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8a00]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
