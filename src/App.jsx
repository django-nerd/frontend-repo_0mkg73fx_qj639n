import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(59,130,246,0.08),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <Services />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} Your Name — Website & Graphic Designer
        </footer>
      </main>
    </div>
  );
}

export default App;