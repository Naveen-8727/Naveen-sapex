import { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.", {
          icon: <CheckCircle className="text-green-500" size={18} />,
        });
        setForm({ name: "", email: "", phone: "", requirement: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

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
              { icon: Phone, label: "+91 9032078727", href: "tel:+919032078727" },
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
            <form className="glass-card p-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                {(["name", "email", "phone", "requirement"] as const).map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={handleChange}
                    required={field === "name" || field === "email"}
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
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:shadow-glow transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    Sending... <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
