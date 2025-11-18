import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // No backend requested; mimic success
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12),transparent_45%)] pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let’s build something great</h2>
        <p className="text-blue-200/80 mb-8">Tell me about your project, timeline, and goals. I’ll reply within 24 hours.</p>
        <form onSubmit={submit} className="grid gap-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email address" type="email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="What are you building?" rows="5" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <button className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:brightness-110 transition">
            <Send className="w-4 h-4" /> Send message
          </button>
          {status && <p className="text-blue-200/90">{status}</p>}
        </form>
      </div>
    </section>
  );
}
