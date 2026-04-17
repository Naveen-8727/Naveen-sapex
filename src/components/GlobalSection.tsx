import { Globe, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const regions = [
  { name: "Middle East", desc: "Strong trade partnerships across UAE, Saudi Arabia, and beyond." },
  { name: "North America", desc: "Expanding footprint across the United States and Canada." },
  { name: "Europe", desc: "Reliable supply chains connecting to key European markets." },
  { name: "Southeast Asia", desc: "Growing relationships across emerging Asian economies." },
];

const GlobalSection = () => (
  <section id="global" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

    <div className="container-custom relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Global Presence</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
          Our <span className="text-gradient">Reach</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          We work with clients and partners across key international markets, enabling smooth and reliable trade.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((r, i) => (
          <AnimatedSection key={r.name} delay={i * 0.1}>
            <div className="glass-card p-8 text-center group hover-lift">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <Globe size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2 flex items-center justify-center gap-1">
                <MapPin size={14} className="text-primary" /> {r.name}
              </h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalSection;
