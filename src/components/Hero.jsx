import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200/90 text-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_10px_40px_rgba(59,130,246,0.25)]">
            Web & Brand Designer crafting modern, conversion‑focused experiences
          </h1>

          <p className="mt-6 text-lg text-blue-100/90 max-w-xl mx-auto lg:mx-0">
            I design and build premium websites, brand systems, and digital assets that look sharp and perform even better.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:brightness-110 transition">Get a quote</a>
            <a href="#work" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">See my work</a>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid sm:grid-cols-2 gap-4 content-start"
        >
          {[
            { k: 'Webflow/Framer builds', v: 'Pixel‑perfect responsive sites' },
            { k: 'Brand & identity', v: 'Logos, palettes, type systems' },
            { k: 'UI kits & design systems', v: 'Reusable, scalable components' },
            { k: 'Motion & micro‑interactions', v: 'Delightful, on‑brand movement' },
          ].map((item) => (
            <li key={item.k} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-blue-100/90">
              <p className="font-semibold text-white">{item.k}</p>
              <p className="text-sm opacity-80">{item.v}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
