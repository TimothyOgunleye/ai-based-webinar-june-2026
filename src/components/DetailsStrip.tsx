import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import { workshopDetails } from "../constants/workshop";

const detailIcons = [CalendarDays, Clock3, MapPin, Sparkles];

export function DetailsStrip() {
  return (
    <section className="bg-[#07164f] py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {workshopDetails.map((item, index) => {
          const Icon = detailIcons[index];

          return (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <Icon className="mb-4 h-7 w-7 text-[#ff8a00]" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-black">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
