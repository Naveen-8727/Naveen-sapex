import { Package, ShoppingCart, Layers, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Package, title: "Export Operations", desc: "Supplying goods from India to international markets with reliability and efficiency." },
  { icon: ShoppingCart, title: "Import Operations", desc: "Procuring goods from global markets into India, ensuring quality at every step." },
  { icon: Layers, title: "Bulk Trade", desc: "Handling large-volume transactions with consistency and competitive pricing." },
  { icon: ShieldCheck, title: "Quality Focus", desc: "Maintaining high standards across every shipment we manage." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/50">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
          What We <span className="text-gradient">Do</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          We are engaged in the direct import and export of goods, supplying products to international markets while maintaining high standards of quality and reliability.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="glass-card p-8 h-full group hover-lift cursor-default">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <s.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
