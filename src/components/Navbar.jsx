import { Menu, Palette, MonitorSmartphone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClasses =
    "text-slate-200/90 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? "backdrop-blur-md bg-slate-900/60 border-b border-white/10" : ""
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="absolute inset-0 blur-lg bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-40 group-hover:opacity-60 transition" />
            <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 grid place-items-center text-slate-900 font-black shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <Palette className="w-5 h-5" />
            </div>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">Your Name</p>
            <p className="text-xs text-blue-200/80">Design & Creative</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a href="#work" className={linkClasses}>Work</a>
          <a href="#services" className={linkClasses}>Services</a>
          <a href="#about" className={linkClasses}>About</a>
          <a href="#contact" className={`${linkClasses} border border-white/10`}>Contact</a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-slate-900/80 backdrop-blur-md border-t border-white/10">
          <a href="#work" className="block text-slate-200 py-2" onClick={() => setOpen(false)}>Work</a>
          <a href="#services" className="block text-slate-200 py-2" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" className="block text-slate-200 py-2" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className="block text-slate-200 py-2" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
