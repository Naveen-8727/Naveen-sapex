import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/SapexLogo.jpeg";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "What We Do", href: "services" },
  { label: "Global", href: "global" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavigation = (id: string) => {
    setOpen(false);

    // If already on homepage
    if (location.pathname === "/") {
      setTimeout(() => {
        scrollToSection(id);
      }, 100);

      return;
    }

    // Navigate to homepage first
    navigate("/");

    setTimeout(() => {
      scrollToSection(id);
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-soft border-b border-white/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Sapex Logo"
            className="h-10 md:h-16 w-auto rounded-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-b border-white/30"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;