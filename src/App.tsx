import { ReactNode, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Brain, 
  Dumbbell, 
  Clock, 
  CheckCircle2, 
  Lock,
  ArrowRight,
  Star
} from "lucide-react";
import LightningEffect from "./components/LightningEffect";

const GlowCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)" }}
    className={`bg-zinc-900/50 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const SectionHeading = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-primary text-xs font-display tracking-[0.3em] uppercase mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-black text-glow"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const categories = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Money & Business" },
    { icon: <Brain className="w-6 h-6" />, title: "Psychology" },
    { icon: <Shield className="w-6 h-6" />, title: "Self-Improvement" },
    { icon: <Dumbbell className="w-6 h-6" />, title: "Fitness" },
    { icon: <Zap className="w-6 h-6" />, title: "Productivity" },
    { icon: <Star className="w-6 h-6" />, title: "Investing" },
  ];

  return (
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-bg overflow-x-hidden">
      <LightningEffect />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-primary fill-primary w-6 h-6" />
            <span className="font-display font-black text-xl tracking-tighter">THEMONARCH<span className="text-primary">.IN</span></span>
          </div>
          <motion.a
            href="https://rzp.io/rzp/MonarchE-bookBundle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-bg font-display font-bold px-6 py-2 rounded-full text-sm shadow-glow hover:shadow-glow-strong transition-all"
          >
            ACCESS SYSTEM
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="text-primary font-display text-sm tracking-[0.4em] uppercase mb-6 block">
            TheMonarch.in presents
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter text-glow">
            MONARCH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">KNOWLEDGE VAULT ⚡</span>
          </h1>
          <p className="text-secondary text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light">
            500+ Premium Ebooks. One System. <span className="text-white font-semibold">Total Control.</span>
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="https://rzp.io/rzp/MonarchE-bookBundle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 240, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-bg text-xl font-display font-black px-12 py-6 rounded-2xl flex items-center gap-3 group"
            >
              <Zap className="w-6 h-6 fill-bg" />
              UNLOCK FOR ₹20
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="text-secondary text-sm font-mono uppercase tracking-widest">
              Limited Time Access • Instant Download
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Authority Statement */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-display font-black italic tracking-tight"
          >
            "THIS IS NOT FOR EVERYONE. ONLY FOR THOSE WHO WANT TO <span className="text-primary text-glow">DOMINATE</span>."
          </motion.p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <SectionHeading subtitle="The System">The Monarch Arsenal</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <GlowCard>
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">500+ PREMIUM EBOOKS</h3>
            <p className="text-secondary leading-relaxed">
              The most comprehensive collection of elite knowledge ever assembled. Curated for the 1%.
            </p>
          </GlowCard>
          
          <GlowCard>
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Clock className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">INSTANT ACCESS</h3>
            <p className="text-secondary leading-relaxed">
              No waiting. Instant delivery via secure Google Drive link. Start your evolution immediately.
            </p>
          </GlowCard>
          
          <GlowCard>
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">LIFETIME UPDATES</h3>
            <p className="text-secondary leading-relaxed">
              The vault is alive. We constantly add new high-value resources to keep you ahead of the curve.
            </p>
          </GlowCard>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-32">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl text-center hover:border-primary/30 transition-colors group"
            >
              <div className="text-secondary group-hover:text-primary transition-colors mb-4 flex justify-center">
                {cat.icon}
              </div>
              <span className="text-xs font-display font-bold uppercase tracking-wider">{cat.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <GlowCard className="text-center border-primary/50 bg-primary/5">
            <div className="inline-block bg-primary text-bg text-[10px] font-black px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              Limited Time Offer
            </div>
            <h3 className="text-3xl font-black mb-2">COMPLETE VAULT ACCESS</h3>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-secondary line-through text-2xl">₹999</span>
              <span className="text-5xl font-black text-primary text-glow">₹20</span>
            </div>
            <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                <span>500+ High-Value Ebooks</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                <span>All 7 Core Categories</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                <span>One-Click Google Drive Access</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                <span>Mobile & Desktop Compatible</span>
              </li>
            </ul>
            <motion.a
              href="https://rzp.io/rzp/MonarchE-bookBundle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 240, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-bg py-5 rounded-xl font-display font-black text-xl flex items-center justify-center gap-3"
            >
              <Lock className="w-5 h-5 fill-bg" />
              SECURE ACCESS NOW
            </motion.a>
          </GlowCard>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-32 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="Efficiency">Why The Monarch Vault?</SectionHeading>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">SAVES 1000+ HOURS</h4>
                  <p className="text-secondary">Stop searching for fragmented information. We've curated the absolute best, saving you years of trial and error.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">CURATED ELITE KNOWLEDGE</h4>
                  <p className="text-secondary">This is not "fluff". Every resource is selected for its potential to provide a massive ROI on your time.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">BUILT FOR THE SERIOUS</h4>
                  <p className="text-secondary">The Monarch system is designed for those who treat knowledge as a weapon for domination.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/monarch/800/800')] opacity-20 mix-blend-overlay grayscale" />
              <div className="relative z-10 text-center p-12">
                <div className="text-8xl font-display font-black text-primary mb-4">1%</div>
                <div className="text-xl font-display tracking-widest uppercase">Elite Mindset Only</div>
              </div>
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] h-[120%] border border-primary/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[110%] h-[110%] border border-accent/10 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA & Urgency */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-primary/5 border border-primary/30 p-16 rounded-[3rem] backdrop-blur-xl"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-glow">READY TO DOMINATE?</h2>
            <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
              Limited Access. The price will increase to <span className="text-white font-bold italic">₹999</span> very soon. Don't let this system pass you by.
            </p>
            <motion.a
              href="https://rzp.io/rzp/MonarchE-bookBundle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 240, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-bg text-2xl font-display font-black px-16 py-8 rounded-2xl flex items-center gap-4 mx-auto group"
            >
              <Zap className="w-8 h-8 fill-bg" />
              ⚡ GET INSTANT ACCESS NOW
            </motion.a>
            <div className="mt-8 flex items-center justify-center gap-8 text-xs font-mono text-secondary uppercase tracking-[0.2em]">
              <span>Secure Payment</span>
              <span>•</span>
              <span>Instant G-Drive Link</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[150px] -z-10" />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="text-primary fill-primary w-5 h-5" />
            <span className="font-display font-black text-lg tracking-tighter uppercase">THEMONARCH<span className="text-primary">.IN</span></span>
          </div>
          <p className="text-secondary text-sm mb-2">© 2026 TheMonarch.in. All systems operational.</p>
          <p className="text-primary/60 text-[10px] font-display uppercase tracking-[0.3em] mb-8">Umbrella Brand: TheMonarch.in</p>
          <div className="flex justify-center gap-8 text-xs font-display font-bold text-secondary uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact System</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
