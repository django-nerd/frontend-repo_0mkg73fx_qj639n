import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SaaS Landing Redesign',
    tag: 'Web Design',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Fintech Identity System',
    tag: 'Branding',
    img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'E‑commerce UI Kit',
    tag: 'UI/UX',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Motion System Library',
    tag: 'Motion',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="text-blue-200/80 mt-2">A few favorites that blend aesthetics with results.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-sm text-blue-200/90">{p.tag}</p>
                <p className="text-white font-semibold">{p.title}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
