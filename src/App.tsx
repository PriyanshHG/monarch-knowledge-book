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
    className={`bg-zinc-900/50 border border-primary/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const SectionHeading = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12 sm:mb-16">
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-primary text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase mb-3 sm:mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl sm:text-4xl md:text-5xl font-black text-glow leading-tight"
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
    <div className="min-h-screen bg-bg selection:bg-primary selection:text-bg overflow-x-hidden relative">
      <div className="noise" />
      <div className="scanline" />
      <LightningEffect />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <Zap className="text-primary fill-primary w-4 h-4 sm:w-6 sm:h-6" />
            <span className="font-display font-black text-[11px] xs:text-sm sm:text-xl tracking-tighter uppercase">
              THEMONARCH<span className="text-primary">.IN</span>
            </span>
          </div>
          <motion.a
            href="https://rzp.io/rzp/MonarchE-bookBundle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-bg font-display font-bold px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm shadow-glow hover:shadow-glow-strong transition-all whitespace-nowrap flex-shrink-0"
          >
            ACCESS SYSTEM
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-48 pb-16 sm:pb-40 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-display text-[9px] sm:text-xs tracking-[0.3em] uppercase">
              System Online: TheMonarch.in
            </span>
          </div>
          
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-9xl font-black mb-6 sm:mb-10 leading-[1] sm:leading-[0.9] tracking-tighter text-glow-strong">
            MONARCH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x">KNOWLEDGE VAULT</span>
          </h1>
          
          <p className="text-secondary text-sm sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 sm:mb-16 font-light leading-relaxed px-2">
            Access the <span className="text-white font-bold">500+ Premium Ebook System</span>. Curated for those who refuse to be average. <span className="text-primary font-bold">Dominate through knowledge.</span>
          </p>
          
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <motion.a
              href="https://rzp.io/rzp/MonarchE-bookBundle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 240, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-bg text-sm sm:text-2xl font-display font-black px-6 sm:px-16 py-4 sm:py-8 rounded-xl sm:rounded-3xl flex items-center justify-center gap-3 sm:gap-4 group w-full sm:w-fit whitespace-nowrap shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Zap className="w-5 h-5 sm:w-8 sm:h-8 fill-bg" />
              UNLOCK SYSTEM FOR ₹20
              <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-secondary text-[9px] sm:text-xs font-mono uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Instant G-Drive Access</span>
              <span className="hidden sm:block opacity-30">|</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Lifetime Updates</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg to-transparent z-10" />
      </section>

      {/* Authority Statement */}
      <section className="py-20 sm:py-40 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-thunder-gradient opacity-50" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="w-12 sm:w-20 h-1 bg-primary mx-auto rounded-full shadow-glow" />
            <p className="text-2xl sm:text-4xl md:text-6xl font-display font-black italic tracking-tight leading-tight px-2">
              "THIS IS NOT FOR THE <span className="text-secondary/40">AVERAGE</span>. <br />
              ONLY FOR THOSE BORN TO <span className="text-primary text-glow-strong">DOMINATE</span>."
            </p>
            <div className="w-12 sm:w-20 h-1 bg-primary mx-auto rounded-full shadow-glow" />
          </motion.div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <SectionHeading subtitle="The System">The Monarch Arsenal</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <GlowCard>
            <div className="bg-primary/10 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Shield className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">500+ PREMIUM EBOOKS</h3>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              The most comprehensive collection of elite knowledge ever assembled. Curated for the 1%.
            </p>
          </GlowCard>
          
          <GlowCard>
            <div className="bg-primary/10 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Clock className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">INSTANT ACCESS</h3>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              No waiting. Instant delivery via secure Google Drive link. Start your evolution immediately.
            </p>
          </GlowCard>
          
          <GlowCard>
            <div className="bg-primary/10 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Zap className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">LIFETIME UPDATES</h3>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              The vault is alive. We constantly add new high-value resources to keep you ahead of the curve.
            </p>
          </GlowCard>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 mb-20 sm:mb-32">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(0, 240, 255, 0.5)", backgroundColor: "rgba(0, 240, 255, 0.05)" }}
              className="bg-zinc-900/50 border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center transition-all duration-300 group cursor-default"
            >
              <div className="text-secondary group-hover:text-primary transition-colors mb-3 sm:mb-4 flex justify-center group-hover:scale-110 duration-300">
                {cat.icon}
              </div>
              <span className="text-[9px] sm:text-xs font-display font-bold uppercase tracking-widest group-hover:text-white transition-colors">{cat.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <GlowCard className="text-center border-primary/50 bg-primary/5">
            <div className="inline-block bg-primary text-bg text-[10px] font-black px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              Limited Time Offer
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">COMPLETE VAULT ACCESS</h3>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-secondary line-through text-xl sm:text-2xl">₹999</span>
              <span className="text-4xl sm:text-5xl font-black text-primary text-glow">₹20</span>
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
              className="w-full bg-primary text-bg py-4 sm:py-5 rounded-xl font-display font-black text-lg sm:text-xl flex items-center justify-center gap-3 whitespace-nowrap"
            >
              <Lock className="w-5 h-5 fill-bg" />
              SECURE ACCESS NOW
            </motion.a>
          </GlowCard>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <SectionHeading subtitle="Efficiency">Why The Monarch Vault?</SectionHeading>
            <div className="space-y-8 sm:space-y-12">
              <div className="flex gap-4 sm:gap-6">
                <div className="bg-primary/10 w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">SAVES 1000+ HOURS</h4>
                  <p className="text-secondary text-sm sm:text-base">Stop searching for fragmented information. We've curated the absolute best, saving you years of trial and error.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="bg-primary/10 w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">CURATED ELITE KNOWLEDGE</h4>
                  <p className="text-secondary text-sm sm:text-base">This is not "fluff". Every resource is selected for its potential to provide a massive ROI on your time.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="bg-primary/10 w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">BUILT FOR THE SERIOUS</h4>
                  <p className="text-secondary text-sm sm:text-base">The Monarch system is designed for those who treat knowledge as a weapon for domination.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 sm:mt-0">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/monarch/800/800')] opacity-20 mix-blend-overlay grayscale" />
              <div className="relative z-10 text-center p-8 sm:p-12">
                <div className="text-6xl sm:text-8xl font-display font-black text-primary mb-2 sm:mb-4">1%</div>
                <div className="text-sm sm:text-xl font-display tracking-widest uppercase">Elite Mindset Only</div>
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
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-primary/5 border border-primary/30 px-6 py-12 sm:p-16 rounded-3xl sm:rounded-[3rem] backdrop-blur-xl"
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 text-glow leading-tight">READY TO DOMINATE?</h2>
            <p className="text-base sm:text-xl text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto">
              Limited Access. The price will increase to <span className="text-white font-bold italic">₹999</span> very soon. Don't let this system pass you by.
            </p>
            <motion.a
              href="https://rzp.io/rzp/MonarchE-bookBundle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 240, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-bg text-sm sm:text-2xl font-display font-black px-6 sm:px-16 py-4 sm:py-8 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 mx-auto group w-full sm:w-fit whitespace-nowrap"
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 fill-bg" />
              GET INSTANT ACCESS NOW
            </motion.a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[9px] sm:text-xs font-mono text-secondary uppercase tracking-[0.2em]">
              <span>Secure Payment</span>
              <span className="hidden sm:inline">•</span>
              <span>Instant G-Drive Link</span>
              <span className="hidden sm:inline">•</span>
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
