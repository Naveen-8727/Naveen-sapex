import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Looking for a reliable import-export partner? Connect with us to discuss your requirements.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Info */}
          <AnimatedSection className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "+91 9542668727", href: "tel:+919542668727" },
              { icon: Mail, label: "info@sapexglobal.com", href: "mailto:info@sapexglobal.com" },
              { icon: MapPin, label: "India" },
            ].map((c) => (
              <div key={c.label} className="glass-card p-5 flex items-center gap-4 hover-lift">
                <div className="w-11 h-11 gradient-primary rounded-lg flex items-center justify-center shrink-0">
                  <c.icon size={20} className="text-primary-foreground" />
                </div>
                {c.href ? (
                  <a href={c.href} className="text-foreground font-medium hover:text-primary transition-colors">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-foreground font-medium">{c.label}</span>
                )}
              </div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form className="glass-card p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                {(["name", "email", "phone", "requirement"] as const).map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  />
                ))}
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
