import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import heroBg from "@/assets/sapex.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Global Trade" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,12%,0.88)] via-[hsl(205,60%,20%,0.8)] to-[hsl(195,70%,25%,0.75)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container-custom px-4 md:px-8 text-center md:text-left max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/70 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          Driven by Trade. Built on Trust.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-primary-foreground leading-tight mb-6"
        >
          Connecting Global{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,90%,55%)] to-[hsl(145,60%,50%)]">
            Markets
          </span>{" "}
          with Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Engaged in the import and export of quality goods, delivering reliability, consistency, and long-term business value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#footer"
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
          <a
            href="#footer"
            className="glass border border-white/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
          >
            <FileText size={18} /> Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
