import { ExternalLink, Mail, Phone } from "lucide-react";
import { assets, registrationLink } from "../constants/workshop";

export function SiteFooter() {
  return (
    <footer className="bg-[#fff7fb] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-950/5 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <img
            src={assets.logo}
            alt="Tim-R logo"
            className="h-16 w-40 rounded-xl object-cover"
          />
          <p className="mt-5 max-w-md leading-7 text-[#4b5568]">
            Tim-R Programming Consult, Nigeria.
            <span className="block">
              Until you spread your wings, you will have no idea of how far you
              can fly.
            </span>
          </p>
        </div>

        <div>
          <h3 className="font-black text-[#07164f]">Contact</h3>
          <div className="mt-4 space-y-3 text-sm font-semibold text-[#4b5568]">
            <a href="mailto:timrprogramming@gmail.com" className="flex items-center gap-2 hover:text-[#f31286]">
              <Mail className="h-4 w-4" />
              timrprogramming@gmail.com
            </a>
            <a href="mailto:info@timrprogramming.com" className="flex items-center gap-2 hover:text-[#f31286]">
              <Mail className="h-4 w-4" />
              info@timrprogramming.com
            </a>
            <a href="https://wa.me/2348068998580" className="flex items-center gap-2 hover:text-[#f31286]">
              <Phone className="h-4 w-4" />
              +234 806 899 8580
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-black text-[#07164f]">Ready?</h3>
          <p className="mt-4 text-sm font-semibold leading-7 text-[#4b5568]">
            Seats are free. Register now and request certification only if you
            need it.
          </p>
          <a
            href={registrationLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#10236f] px-5 py-3 text-sm font-black text-white"
          >
            Register
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
