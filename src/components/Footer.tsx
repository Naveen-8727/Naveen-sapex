import { Mail, Phone } from "lucide-react";
import logo from "@/assets/SapexLogo.jpeg";

const Footer = () => (
  <footer id="footer" className="gradient-footer text-white/80 pt-16 pb-8">
    <div className="container-custom px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="Sapex" className="h-12 rounded-md mb-4" />
          <p className="text-sm text-white/60 leading-relaxed">
            Driven by Trade. Built on Trust. Your reliable partner for global import and export operations.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About", "What We Do", "Global", ].map((l) => (
              <li key={l}>
                <a href={l === "Certificates" ? "/certificates" : `/#${l.toLowerCase().replace(/ /g, "")}`} className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+919542668727" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +91 9032078727
            </a>
            <a className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> info[at]sapexglobal.com
            </a>
          </div>
        </div>

        {/* Social placeholder */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Follow Us</h4>
          <p className="text-sm text-white/60">Connect with us on social media for the latest updates.</p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Sapex Imports and Exports. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
