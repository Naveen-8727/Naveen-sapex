import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import labourLicense from "@/assets/LABOUR-LICENSE.jpg";
import udyamReg from "@/assets/Udyam_Registration.jpg";

const certs = [
  { title: "Labour License", desc: "Registered under the Telangana Shops & Establishments Act.", image: labourLicense },
  { title: "Udyam Registration", desc: "MSME registered enterprise — UDYAM-TS-09-0223685.", image: udyamReg },
];

const Certificates = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-28 pb-20 bg-background">
        <div className="container-custom px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
              <ShieldCheck size={14} /> Verified & Compliant
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Our Certifications & <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We maintain all necessary registrations and licenses to ensure transparent and lawful business operations.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certs.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.15}>
                <div
                  className="glass-card overflow-hidden group hover-lift cursor-pointer"
                  onClick={() => setSelected(c.image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-1">{c.title}</h3>
                    <p className="text-muted-foreground text-sm">{c.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
              >
                <X size={20} className="text-foreground" />
              </button>
              <img src={selected} alt="Certificate" className="rounded-xl max-h-[85vh] w-auto shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Certificates;
