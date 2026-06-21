import { Globe2 } from "lucide-react";
import { assets } from "../constants/workshop";

export function ConvenerSection() {
  return (
    <section className="relative overflow-hidden bg-[#07164f] py-20 text-white">
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#f31286]/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#ff8a00]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur md:p-8 lg:grid-cols-[0.42fr_1fr] lg:p-10">
          <div className="mx-auto w-full max-w-[260px] rounded-[1.75rem] bg-white p-3 shadow-xl shadow-blue-950/30">
            <img
              src={assets.convener}
              alt="Dr. Timothy A. OGUNLEYE"
              className="aspect-square w-full rounded-[1.3rem] object-cover object-top"
            />
          </div>

          <div>
            <p className="inline-flex rounded-full bg-[#ff8a00]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#ffb347]">
              Convener:
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-3xl font-black leading-tight tracking-tight text-[#ff8a00] sm:text-4xl lg:text-5xl">
              Tim-R Programming Consult, Nigeria.
            </h2>
            <p className="mt-5 text-xl font-black text-white">
              Dr. Timothy A. OGUNLEYE
            </p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Chair, Board of Trustees, Tim-R Programming Consult, Nigeria.
              Tim-R continues to advance practical technology education and
              responsible AI development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://timothy-ogunleye.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-[#10236f] shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5">
                <Globe2 className="h-4 w-4" />
                Personal website
              </a>
              <a href="https://timrprogramming.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                <Globe2 className="h-4 w-4" />
                Company website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
