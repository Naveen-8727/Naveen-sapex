import { Handshake, TrendingUp, Eye, Brain, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const points = [
  { icon: Handshake, title: "Direct Trading Company", desc: "No middle layers — direct and transparent operations." },
  { icon: TrendingUp, title: "Reliable Supply & Consistency", desc: "Dependable delivery schedules you can count on." },
  { icon: Eye, title: "Transparent Practices", desc: "Clear communication and honest business dealings." },
  { icon: Brain, title: "Strong Market Understanding", desc: "Deep knowledge of international trade dynamics." },
  { icon: Target, title: "Long-Term Approach", desc: "We build partnerships, not just transactions." },
];

const WhyChooseSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Us</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
          Why Choose <span className="text-gradient">Sapex</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.08}>
            <div className="glass-card p-7 group hover-lift flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                <p.icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold font-heading text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
