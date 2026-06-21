import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { registrationLink, workshopGains } from "../constants/workshop";

export function RegistrationSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="rounded-[2rem] bg-[#10236f] p-8 text-white shadow-2xl shadow-blue-950/15">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ff8a00]">
            Workshop value
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Built for people who want AI that can be trusted.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {workshopGains.map((gain) => (
              <div key={gain} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <CheckCircle2 className="mb-4 h-6 w-6 text-[#ff8a00]" />
                <p className="font-semibold leading-7 text-white/90">{gain}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="register" className="rounded-[2rem] border border-[#f31286]/15 bg-[#fff7fb] p-8 shadow-xl shadow-pink-950/5">
          <Award className="h-10 w-10 text-[#f31286]" />
          <h2 className="mt-5 text-3xl font-black text-[#07164f]">
            Reserve your seat now.
          </h2>
          <p className="mt-4 leading-8 text-[#4b5568]">
            Registration is free and takes just a moment. After registering, you
            will receive the workshop access details and updates from the Tim-R
            team.
          </p>
          <a
            href={registrationLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f31286] px-7 py-4 text-base font-black text-white shadow-xl shadow-pink-500/25 transition hover:-translate-y-0.5 hover:bg-[#c80d6c]"
          >
            Open Registration Form
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-semibold leading-7 text-[#4b5568]">
            Certificate is optional. If you need one, a small token will be
            requested only for certificate processing.
          </p>
        </div>
      </div>
    </section>
  );
}
