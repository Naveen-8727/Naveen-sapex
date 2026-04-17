import AnimatedSection from "./AnimatedSection";
import plantImg from "@/assets/plant.png";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={plantImg}
              alt="Quality goods"
              className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-primary rounded-2xl -z-10 opacity-30" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            About <span className="text-gradient">Sapex</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Sapex Imports and Exports is a professionally managed trading company based in India, engaged in the import and export of goods across international markets.
            </p>
            <p>
              We operate as a direct trading company, ensuring quality, consistency, and dependable supply to our global clients.
            </p>
            <p>
              Our focus is on building long-term business relationships through trust, transparency, and reliable execution.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
