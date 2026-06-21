import { ExternalLink } from "lucide-react";
import { assets, registrationLink } from "../constants/workshop";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={assets.logo}
            alt="Tim-R Programming Consult Nigeria logo"
            className="h-12 w-24 rounded-xl object-cover shadow-sm sm:w-32"
          />
          <span className="hidden text-sm font-black uppercase tracking-[0.25em] text-[#10236f] sm:inline">
            Tim-R
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-bold text-[#10236f] md:flex">
          <a href="#topics" className="hover:text-[#f31286]">Topics</a>
          <a href="#facilitator" className="hover:text-[#f31286]">Facilitator</a>
          <a href="#register" className="hover:text-[#f31286]">Register</a>
        </div>

        <a
          href={registrationLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#f31286] px-4 py-2 text-sm font-black text-white shadow-lg shadow-pink-500/25 transition hover:bg-[#c80d6c]"
        >
          Register Free
          <ExternalLink className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
