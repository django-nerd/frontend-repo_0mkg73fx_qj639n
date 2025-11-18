import { motion } from 'framer-motion';
import { PenTool, Layout, Palette, Scissors, Figma, Rocket } from 'lucide-react';

const services = [
  { icon: Layout, title: 'Website Design', desc: 'High-converting, responsive websites built with modern tools.' },
  { icon: PenTool, title: 'Logo & Brand', desc: 'Distinctive identities: marks, palettes, typography, and rules.' },
  { icon: Palette, title: 'Design Systems', desc: 'Reusable components and tokens for scalable products.' },
  { icon: Scissors, title: 'Marketing Graphics', desc: 'Social kits, banners, one-pagers, and pitch decks.' },
  { icon: Rocket, title: 'No/Low‑Code Builds', desc: 'Webflow/Framer prototypes, animations, and CMS setup.' },
  { icon: Figma, title: 'UI/UX Support', desc: 'Wireframes, flows, and collaborative design sprints.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(29,78,216,0.15),transparent_45%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-slate-900">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-white font-semibold">{title}</p>
              <p className="text-blue-200/80 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
