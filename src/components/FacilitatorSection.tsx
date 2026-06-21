import { assets, facilitatorBio } from "../constants/workshop";

export function FacilitatorSection() {
  return (
    <section id="facilitator" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-blue-950/10">
            <img
              src={assets.facilitator}
              alt="Ime Inyang, workshop facilitator"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
            />
            <div className="p-5">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f31286]">
                Facilitator
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#07164f]">Ime Inyang</h2>
              <p className="mt-2 font-bold text-[#4b5568]">(AI Engineer)</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f31286]">
              Meet your facilitator
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#07164f] sm:text-5xl">
              Practical AI insight from a builder and responsible-AI advocate.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4b5568]">
              {facilitatorBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
