import { ConvenerSection } from "./components/ConvenerSection";
import { DetailsStrip } from "./components/DetailsStrip";
import { FacilitatorSection } from "./components/FacilitatorSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { SiteFooter } from "./components/SiteFooter";
import { TopicsSection } from "./components/TopicsSection";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff7fb] text-[#111827]">
      <Header />
      <main>
        <HeroSection />
        <DetailsStrip />
        <TopicsSection />
        <RegistrationSection />
        <FacilitatorSection />
        <ConvenerSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
