/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Terminal, 
  Mail, 
  Linkedin,
  Github,
  Clock,
  Link as LinkIcon, 
  Code, 
  Package, 
  CheckCircle2, 
  BookOpen, 
  StickyNote, 
  Kanban, 
  ClipboardList, 
  GitBranch, 
  Heart, 
  FileText, 
  Network, 
  PenTool, 
  Users, 
  Rocket, 
  Brush, 
  BarChart3, 
  MousePointer2, 
  BarChart, 
  Activity, 
  Database, 
  TrendingUp, 
  Eye, 
  Palette, 
  Zap, 
  Cpu, 
  Brain, 
  Bot, 
  Edit3, 
  CircleDot, 
  Droplets, 
  ShieldCheck, 
  Code2, 
  Mic, 
  Layers, 
  LayoutGrid, 
  Cloud, 
  Snowflake, 
  Grid, 
  Send, 
  LineChart, 
  Monitor, 
  Layout, 
  Coffee, 
  FileCode, 
  Coins, 
  Box, 
  School, 
  ShoppingCart, 
  HeartHandshake, 
  HeartPulse, 
  ArrowRight, 
  Calendar,
  Award,
  X
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

const SkillBadge = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <motion.span 
    whileHover={{ 
      scale: 1.05, 
      backgroundColor: 'rgba(0, 245, 212, 0.1)', 
      borderColor: 'var(--color-primary-container)',
      color: 'var(--color-primary-container)'
    }}
    className="px-2 py-1 bg-surface-container-highest/50 rounded text-[10px] font-label text-on-surface-variant border border-outline-variant/10 flex items-center gap-1.5 cursor-default transition-all duration-300"
  >
    <Icon size={12} className="text-primary-container/70 group-hover:text-primary-container" />
    {children}
  </motion.span>
);

const SidebarSection = ({ title, icon: Icon, children, containerClassName = "flex flex-wrap gap-1" }: { title: string, icon: any, children: React.ReactNode, containerClassName?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group/section"
  >
    <h4 className="font-label text-[9px] text-primary-container/60 group-hover/section:text-primary-container uppercase tracking-widest mb-2 flex items-center gap-2 transition-colors">
      <Icon size={12} /> {title}
    </h4>
    <div className={containerClassName}>
      {children}
    </div>
  </motion.div>
);

const DomainCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="px-5 py-3 bg-surface-container border border-primary-container/10 rounded-lg flex items-center gap-3 group hover:border-primary-container/40 transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/5 transition-colors"></div>
    <Icon className="text-primary-container/60 group-hover:text-primary-container transition-all group-hover:scale-110" size={20} />
    <span className="font-headline font-medium text-sm text-on-surface-variant group-hover:text-primary-container transition-colors">{title}</span>
  </motion.div>
);

const TimelineItem = ({ 
  date, 
  title, 
  company, 
  points, 
  isLatest = false 
}: { 
  date: string, 
  title: string, 
  company: string, 
  points: React.ReactNode[], 
  isLatest?: boolean 
}) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="relative group/timeline"
  >
    <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border-2 transition-all duration-300 ${isLatest ? 'border-primary-container shadow-[0_0_15px_rgba(0,245,212,0.6)] scale-110' : 'border-outline group-hover/timeline:border-primary-container/50'}`}></div>
    <div className="mb-2">
      <span className={`font-label text-[10px] px-2 py-0.5 rounded transition-colors ${isLatest ? 'text-primary-container bg-primary-container/10' : 'text-on-surface-variant bg-surface-container-highest group-hover/timeline:text-primary-container group-hover/timeline:bg-primary-container/5'}`}>
        {date}
      </span>
    </div>
    <h3 className="text-xl font-headline font-bold group-hover/timeline:text-primary-container transition-colors">{title}</h3>
    <p className="text-secondary font-medium mb-4">{company}</p>
    <motion.div 
      whileHover={{ scale: 1.005 }}
      className={`p-6 bg-surface-container-low/80 backdrop-blur-sm rounded-lg border border-transparent hover:border-primary-container/10 transition-all duration-300 ${isLatest ? 'border-l-4 border-l-secondary-container' : ''}`}
    >
      <ul className="space-y-4 text-sm text-on-surface-variant">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 group/point">
            <ArrowRight className="text-primary-container/40 group-hover/point:text-primary-container transition-colors flex-shrink-0 mt-0.5" size={16} />
            <span className="group-hover/point:text-on-surface transition-colors">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const SignalLine = ({ className = "" }: { className?: string }) => (
  <div className={`h-px relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 signal-line opacity-30"></div>
    <motion.div 
      animate={{ left: ['-20%', '100%'] }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        repeatType: "reverse", 
        ease: "easeInOut" 
      }}
      className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-primary-container/60 to-transparent"
    />
  </div>
);
const EducationCard = ({ 
  type, 
  degree, 
  school, 
  date 
}: { 
  type: string, 
  degree: string, 
  school: string, 
  date: string 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ y: -5 }}
    className="p-6 bg-surface-container-highest/40 backdrop-blur-sm rounded-lg border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group"
  >
    <p className="font-label text-[10px] text-primary-container/60 group-hover:text-primary-container mb-1 transition-colors uppercase tracking-widest">{type}</p>
    <h4 className="font-headline font-bold text-lg group-hover:text-primary-container transition-colors">{degree}</h4>
    <p className="text-on-surface-variant text-sm mb-4">{school}</p>
    <div className="flex items-center gap-2 text-[10px] font-label text-secondary/60 group-hover:text-primary-container transition-colors">
      <Calendar size={12} /> {date}
    </div>
  </motion.div>
);

const CertificateBadge = ({ title, issuer, link }: { title: string, issuer: string, link?: string }) => {
  const content = (
    <>
      <div className="flex items-start gap-2 mb-0.5">
        <Award size={12} className="text-primary-container/50 mt-0.5 shrink-0 group-hover:text-primary-container group-hover:scale-110 transition-all" />
        <span className="text-[10px] font-headline font-bold text-on-surface/80 group-hover:text-primary-container leading-tight transition-colors">{title}</span>
      </div>
      <div className="pl-5 text-[8px] font-label text-primary-container/30 group-hover:text-primary-container/60 uppercase tracking-tighter transition-colors">
        Issued by {issuer}
      </div>
    </>
  );

  const commonProps = {
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: "easeOut" },
    whileHover: { x: 4, backgroundColor: 'rgba(0, 245, 212, 0.05)' },
    className: `px-3 py-2 bg-surface-container-highest/30 rounded border border-outline-variant/10 flex flex-col justify-center h-14 hover:border-primary-container/30 transition-all duration-300 group ${link ? 'cursor-pointer' : 'cursor-default'}`
  };

  if (link) {
    return (
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...commonProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...commonProps}>
      {content}
    </motion.div>
  );
};

const ProjectCard = ({ 
  title, 
  subHeader, 
  date, 
  description, 
  skills, 
  link 
}: { 
  title: string, 
  subHeader: string, 
  date?: string, 
  description: string, 
  skills: string[], 
  link?: string 
}) => {
  const content = (
    <>
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded-sm bg-primary-container/10 flex items-center justify-center text-primary-container">
          <Box size={20} />
        </div>
        {date && <span className="font-label text-[9px] text-primary-container/40 uppercase tracking-widest">{date}</span>}
      </div>
      <h3 className="font-headline text-xl font-bold mb-1 text-on-surface group-hover:text-primary-container transition-colors">{title}</h3>
      <p className="font-label text-[10px] text-secondary/60 uppercase tracking-wider mb-4">{subHeader}</p>
      <p className="font-body text-sm text-on-surface-variant/70 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-2 py-1 bg-primary-container/5 text-primary-container text-[8px] font-label uppercase tracking-wider rounded-xs border border-primary-container/10">
            {skill}
          </span>
        ))}
      </div>
    </>
  );

  const commonProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
    whileHover: { y: -5 },
    className: `p-8 bg-surface-container-low/40 border border-primary-container/10 rounded-sm group hover:border-primary-container/30 transition-all duration-300 flex flex-col h-full ${link ? 'cursor-pointer block' : ''}`
  };

  if (link) {
    return (
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...commonProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...commonProps}>
      {content}
    </motion.div>
  );
};

const RequestCVModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Reset state when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setIsLoading(false);
        setError(null);
        setName('');
        setCompany('');
        setEmail('');
      }, 300); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/request-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, company, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send request');
      }

      console.log('CV Requested successfully:', data);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error requesting CV:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-surface-container border border-primary-container/20 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline text-xl font-bold text-primary-container">Request CV</h3>
                <button onClick={onClose} className="text-on-surface/40 hover:text-primary-container transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-on-surface-variant/80">
                    Please provide your details to receive my latest CV.
                  </p>
                  
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-label text-primary-container/60 uppercase tracking-widest mb-1.5">
                        Full Name
                      </label>
                      <input
                        required
                        disabled={isLoading}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-surface-container-highest border border-outline-variant/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary-container/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[10px] font-label text-primary-container/60 uppercase tracking-widest mb-1.5">
                        Company
                      </label>
                      <input
                        required
                        disabled={isLoading}
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company Name"
                        className="w-full bg-surface-container-highest border border-outline-variant/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary-container/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-label text-primary-container/60 uppercase tracking-widest mb-1.5">
                        Email Address
                      </label>
                      <input
                        required
                        disabled={isLoading}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-surface-container-highest border border-outline-variant/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary-container/50 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-container text-on-primary py-2.5 rounded font-bold uppercase text-[10px] tracking-widest shadow-[0_0_15px_rgba(0,245,212,0.2)] hover:shadow-[0_0_25px_rgba(0,245,212,0.4)] transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 border-2 border-on-primary/30 border-t-on-primary rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 text-center"
                >
                  <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-primary-container" size={24} />
                  </div>
                  <h4 className="font-headline font-bold text-lg mb-2">Request Sent!</h4>
                  <p className="text-sm text-on-surface-variant/60 mb-6">
                    Thank you, {name}. I'll send my CV to {email} shortly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full bg-surface-container-highest text-on-surface py-2.5 rounded font-bold uppercase text-[10px] tracking-widest border border-outline-variant/10 hover:border-primary-container/30 transition-all"
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const LiveStatus = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const estOptions: Intl.DateTimeFormatOptions = { 
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  };
  
  const estString = time.toLocaleString("en-US", estOptions);
  
  const hourStr = time.toLocaleString("en-US", { 
    timeZone: "America/New_York",
    hour: "numeric", 
    hour12: false 
  });
  const hour = parseInt(hourStr);

  let status = "";
  if (hour >= 5 && hour < 11) status = "Starting the day ☀️";
  else if (hour >= 11 && hour < 19) status = "Locked in ☕";
  else if (hour >= 19 && hour < 23) status = "Wrapping up 🌆";
  else status = "Winding down 🌙";

  const [timePart, ampm] = estString.split(' ');
  const [hh, mm] = timePart.split(':');

  return (
    <div className="space-y-1 cursor-default">
      <div className="font-label text-[11px] font-medium text-on-surface/90 flex items-center gap-2">
        {status}
      </div>
      <div className="font-label text-[11px] text-on-surface-variant/80">
        Boston&nbsp;·&nbsp;EST&nbsp;·&nbsp;<span>{hh}</span><span className="blink-colon mx-[1px]">:</span><span>{mm} {ampm}</span>
      </div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = React.useState('hero');
  const [isRequestModalOpen, setIsRequestModalOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'projects', 'education', 'writing'];
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-container z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Ambient Effects */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
        
        {/* Subtle Moving Grid Overlay */}
        <motion.div 
          animate={{ 
            backgroundPosition: ['0px 0px', '40px 40px'] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(var(--color-primary-container)_1px,transparent_1px)] [background-size:40px_40px]"
        />

        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* TopAppBar Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-primary-container/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center px-8 h-16 max-w-screen-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer group relative"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Rotating Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 border border-primary-container/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Main Monogram Container */}
            <div className="w-10 h-10 rounded-sm border border-primary-container/30 flex items-center justify-center bg-surface-container-low/60 backdrop-blur-md group-hover:border-primary-container/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Glitchy Scanning Light Effect */}
              <motion.div 
                animate={{ 
                  translateY: ['-100%', '200%'],
                  opacity: [0.3, 1, 0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1]
                }}
                className="absolute inset-x-0 h-[2px] bg-primary-container z-10 shadow-[0_0_15px_rgba(0,245,212,1)]"
              />
              
              {/* Pulsing Grid Background */}
              <motion.div 
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[radial-gradient(var(--color-primary-container)_1px,transparent_1px)] [background-size:4px_4px]"
              />
              
              {/* Breathing Corner Accents */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary-container/80"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary-container/80"
              />
              
              {/* Holographic AR Text */}
              <motion.span 
                animate={{ 
                  opacity: [1, 0.8, 1, 0.9, 1],
                  textShadow: [
                    '0 0 8px rgba(0,245,212,0.4)',
                    '0 0 12px rgba(0,245,212,0.6)',
                    '0 0 8px rgba(0,245,212,0.4)'
                  ]
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                className="font-headline font-black text-xl text-primary-container tracking-tighter relative z-20"
              >
                AR
              </motion.span>
            </div>
            
          </motion.div>

          {/* Social Links in Header */}
          <div className="flex items-center gap-4 ml-10 mr-auto">
            <motion.a 
              whileHover={{ scale: 1.1, color: 'var(--color-primary-container)' }}
              whileTap={{ scale: 0.9 }}
              className="text-on-surface/40 transition-colors p-1.5 rounded-sm hover:bg-primary-container/5"
              href="https://www.linkedin.com/in/-aravindravi/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: 'var(--color-primary-container)' }}
              whileTap={{ scale: 0.9 }}
              className="text-on-surface/40 transition-colors p-1.5 rounded-sm hover:bg-primary-container/5"
              href="https://github.com/aravindravi7"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: 'var(--color-primary-container)' }}
              whileTap={{ scale: 0.9 }}
              className="text-on-surface/40 transition-colors p-1.5 rounded-sm hover:bg-primary-container/5"
              href="mailto:aravindravi.academics@gmail.com"
              title="Reach Out"
            >
              <Mail size={18} />
            </motion.a>
          </div>

          <nav className="hidden md:flex gap-8 items-center font-headline tracking-tight uppercase text-[10px]">
            <a 
              className={`pb-1 transition-all ${activeSection === 'experience' ? 'text-primary-container border-b border-primary-container' : 'text-on-surface/40 hover:text-primary-container'}`} 
              href="#experience"
            >
              Experience
            </a>
            <a 
              className={`pb-1 transition-all ${activeSection === 'projects' ? 'text-primary-container border-b border-primary-container' : 'text-on-surface/40 hover:text-primary-container'}`} 
              href="#projects"
            >
              Projects
            </a>
            <a 
              className={`pb-1 transition-all ${activeSection === 'education' ? 'text-primary-container border-b border-primary-container' : 'text-on-surface/40 hover:text-primary-container'}`} 
              href="#education"
            >
              Academics
            </a>
            <a 
              className={`pb-1 transition-all ${activeSection === 'writing' ? 'text-primary-container border-b border-primary-container' : 'text-on-surface/40 hover:text-primary-container'}`} 
              href="#writing"
            >
              Writing
            </a>
          </nav>
          <div className="flex items-center gap-6 ml-12">
            <motion.button 
              whileHover={{ rotate: 180 }}
              className="text-on-surface/40 hover:text-primary-container transition-colors"
            >
              <Terminal size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRequestModalOpen(true)}
              className="bg-primary-container text-on-primary px-5 py-2 text-[10px] font-bold uppercase rounded-sm shadow-[0_0_15px_rgba(0,245,212,0.2)] hover:shadow-[0_0_25px_rgba(0,245,212,0.4)] transition-all duration-300"
            >
              Request CV
            </motion.button>
          </div>
        </div>
      </header>

      <RequestCVModal 
        isOpen={isRequestModalOpen} 
        onClose={() => setIsRequestModalOpen(false)} 
      />

      {/* SideNavBar (Desktop Only) */}
      <aside className="fixed left-0 top-0 h-full w-80 z-40 bg-surface-container-low/40 backdrop-blur-xl hidden lg:flex flex-col pt-20 border-r border-primary-container/5">
        <div className="px-8 mb-8 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary-container/20 group-hover:border-primary-container/60 transition-all duration-500 shadow-xl">
              <img 
                alt="Aravind Ravi Professional Profile" 
                src="data:image/jpeg;base64,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_profile.jpg" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm tracking-tight text-on-surface group-hover:text-primary-container transition-colors duration-300">ARAVIND RAVI</h3>
              <p className="font-label text-[9px] text-primary-container/50 uppercase tracking-widest">Technical Product Manager</p>
            </div>
          </motion.div>

          {/* Living Status Section */}
          <div className="mt-10">
            <h4 className="font-label text-[9px] text-primary-container/60 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Clock size={12} /> Right Now
            </h4>
            <LiveStatus />
          </div>
        </div>

        {/* Scrollable Skill Blocks Sidebar */}
        <div className="flex-1 overflow-y-auto px-8 pb-12 scrollbar-hide">
          <div className="space-y-8">
            <SidebarSection title="Product Management" icon={Package}>
              <SkillBadge icon={CheckCircle2}>Jira</SkillBadge>
              <SkillBadge icon={BookOpen}>Confluence</SkillBadge>
              <SkillBadge icon={StickyNote}>Notion</SkillBadge>
              <SkillBadge icon={Kanban}>Trello</SkillBadge>
              <SkillBadge icon={ClipboardList}>Asana</SkillBadge>
              <SkillBadge icon={GitBranch}>n8n</SkillBadge>
              <SkillBadge icon={FileText}>FigJam</SkillBadge>
              <SkillBadge icon={Network}>Lucidchart</SkillBadge>
              <SkillBadge icon={PenTool}>Draw.io</SkillBadge>
              <SkillBadge icon={FileText}>Slab</SkillBadge>
              <SkillBadge icon={Brush}>Miro</SkillBadge>
              <SkillBadge icon={Users}>Stakeholder Management</SkillBadge>
              <SkillBadge icon={Rocket}>Release Management</SkillBadge>
            </SidebarSection>

            <SidebarSection title="Product & Analytics" icon={BarChart3}>
              <SkillBadge icon={MousePointer2}>Mixpanel</SkillBadge>
              <SkillBadge icon={BarChart}>Power BI</SkillBadge>
              <SkillBadge icon={Activity}>Tableau</SkillBadge>
              <SkillBadge icon={TrendingUp}>Google Analytics</SkillBadge>
              <SkillBadge icon={Eye}>Hotjar</SkillBadge>
              <SkillBadge icon={Palette}>Figma</SkillBadge>
              <SkillBadge icon={Zap}>Retool</SkillBadge>
              <SkillBadge icon={Terminal}>Replit</SkillBadge>
              <SkillBadge icon={Terminal}>Vercel</SkillBadge>
              <SkillBadge icon={BarChart3}>Looker Studio</SkillBadge>
              <SkillBadge icon={Heart}>Lovable</SkillBadge>
              <SkillBadge icon={FileText}>Excel</SkillBadge>
              <SkillBadge icon={CheckCircle2}>Linear</SkillBadge>
            </SidebarSection>

            <SidebarSection title="AI/ML" icon={Cpu}>
              <SkillBadge icon={Brain}>OpenAI APIs</SkillBadge>
              <SkillBadge icon={Bot}>Co-Pilot Studio</SkillBadge>
              <SkillBadge icon={Edit3}>Cursor</SkillBadge>
              <SkillBadge icon={CircleDot}>Ollama</SkillBadge>
              <SkillBadge icon={Droplets}>Streamlit</SkillBadge>
              <SkillBadge icon={Network}>RAG Pipelines</SkillBadge>
              <SkillBadge icon={Terminal}>Prompt Engineering</SkillBadge>
              <SkillBadge icon={Terminal}>Claude Code</SkillBadge>
              <SkillBadge icon={Code2}>Google AI Studio</SkillBadge>
              <SkillBadge icon={Network}>GraphRAG</SkillBadge>
              <SkillBadge icon={Users}>Human-in-the-Loop</SkillBadge>
              <SkillBadge icon={Mic}>ASR</SkillBadge>
              <SkillBadge icon={Layers}>LLM Fine-Tuning</SkillBadge>
            </SidebarSection>

            <SidebarSection title="Data & Infrastructure" icon={LayoutGrid}>
              <SkillBadge icon={Cloud}>AWS</SkillBadge>
              <SkillBadge icon={Cloud}>GCP</SkillBadge>
              <SkillBadge icon={Cloud}>Azure</SkillBadge>
              <SkillBadge icon={Snowflake}>Snowflake</SkillBadge>
              <SkillBadge icon={Grid}>Databricks</SkillBadge>
              <SkillBadge icon={Layers}>Microsoft Fabric</SkillBadge>
              <SkillBadge icon={Send}>Postman</SkillBadge>
              <SkillBadge icon={Code}>Github</SkillBadge>
              <SkillBadge icon={LineChart}>Grafana</SkillBadge>
              <SkillBadge icon={TrendingUp}>Alteryx</SkillBadge>
              <SkillBadge icon={Bot}>Hugging Face</SkillBadge>
              <SkillBadge icon={Grid}>Kubernetes</SkillBadge>
              <SkillBadge icon={Monitor}>Docker</SkillBadge>
              <SkillBadge icon={Layout}>Superset</SkillBadge>
              <SkillBadge icon={Database}>BigQuery</SkillBadge>
            </SidebarSection>

            <SidebarSection title="Programming" icon={Code}>
              <SkillBadge icon={Database}>SQL</SkillBadge>
              <SkillBadge icon={Coffee}>Java</SkillBadge>
              <SkillBadge icon={BarChart3}>R</SkillBadge>
              <SkillBadge icon={Code}>Python</SkillBadge>
              <SkillBadge icon={FileCode}>HTML5</SkillBadge>
              <SkillBadge icon={FileCode}>CSS</SkillBadge>
              <SkillBadge icon={FileCode}>JavaScript</SkillBadge>
              <SkillBadge icon={Terminal}>C++</SkillBadge>
              <SkillBadge icon={Coins}>Solidity</SkillBadge>
            </SidebarSection>

            <SidebarSection title="Frameworks" icon={Box}>
              <SkillBadge icon={Box}>WSJF</SkillBadge>
              <SkillBadge icon={Box}>RICE</SkillBadge>
              <SkillBadge icon={Box}>A/B Testing</SkillBadge>
              <SkillBadge icon={Box}>Change Management</SkillBadge>
              <SkillBadge icon={Box}>UAT</SkillBadge>
              <SkillBadge icon={Box}>Trade-off Analysis</SkillBadge>
              <SkillBadge icon={Box}>Design Thinking</SkillBadge>
              <SkillBadge icon={Box}>Hypothesis Driven Development</SkillBadge>
              <SkillBadge icon={Box}>Business Process Mapping</SkillBadge>
              <SkillBadge icon={Box}>Gap Analysis</SkillBadge>
              <SkillBadge icon={Box}>Effort Impact Analysis</SkillBadge>
              <SkillBadge icon={Box}>Eisenhower Matrix</SkillBadge>
              <SkillBadge icon={Box}>Agile/Scrum</SkillBadge>
              <SkillBadge icon={Box}>Kanban</SkillBadge>
              <SkillBadge icon={Box}>Sprint Planning</SkillBadge>
              <SkillBadge icon={Box}>OKRs/KPIs</SkillBadge>
              <SkillBadge icon={Box}>JTBD</SkillBadge>
              <SkillBadge icon={Box}>MoSCoW</SkillBadge>
            </SidebarSection>

            <SidebarSection title="Certificates" icon={Award} containerClassName="flex flex-col gap-2">
              <CertificateBadge title="Introduction to Model Context Protocol" issuer="Anthropic Academy" />
              <CertificateBadge 
                title="Applying AI Technologies to the Workplace" 
                issuer="Northeastern University" 
                link="https://badgr.com/public/assertions/tfj-OM3WRd2pZhorUb2n1w"
              />
              <CertificateBadge 
                title="PGP in Blockchain" 
                issuer="IIT Kanpur" 
                link="https://success.simplilearn.com/9363fd03-5e45-4dfc-899d-58bc118ab995#gs.zbgu2e"
              />
              <CertificateBadge 
                title="Google Agile Project Management" 
                issuer="Coursera" 
                link="https://www.coursera.org/account/accomplishments/verify/TBC3H7KB8FN8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              />
              <CertificateBadge 
                title="Blockchain Business Models" 
                issuer="Duke University" 
                link="https://www.coursera.org/account/accomplishments/verify/BEJT6HBHSSGK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              />
              <CertificateBadge 
                title="Blockchain Foundations & Use Cases" 
                issuer="Consensys Academy" 
                link="https://www.coursera.org/account/accomplishments/verify/WRJLKW4NGRK9?utm_source=wa&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
              />
            </SidebarSection>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-80 pt-24 pb-20 px-6 md:px-16 max-w-6xl relative z-10">
        {/* Hero / Identity Section */}
        <section className="mb-20 relative" id="hero">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="relative z-10"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary-container"></div>
              <span className="font-label text-[10px] text-primary-container uppercase tracking-[0.4em]">OPEN TO FULL-TIME PM ROLES</span>
            </motion.div>
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-7xl md:text-9xl font-headline font-bold tracking-tighter text-on-surface leading-[0.85] mb-6"
            >
              ARAVIND <br />
              <span className="text-primary-container drop-shadow-[0_0_30px_rgba(0,245,212,0.2)]">RAVI</span>
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="font-label text-xs md:text-sm text-primary-container/60 uppercase tracking-[0.5em] mb-10"
            >
              Technical Product Manager // PRODUCT MAVEN
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mt-12 max-w-4xl"
            >
              <div className="space-y-6">
                <p className="font-headline font-bold text-xl md:text-2xl text-on-surface leading-tight">
                  I don't just manage products. I architect them, ship them, and move the needle.
                </p>
                <p className="font-body text-base md:text-lg text-on-surface-variant/80 leading-relaxed">
                  <span className="text-secondary font-bold">$220M program scoped. 10x revenue growth. 1M+ lives impacted.</span> 7 years, 7 companies, 10+ products shipped — from grid-scale energy storage to agentic AI platforms to India's first NFT marketplace.
                </p>
                <p className="font-body text-base md:text-lg text-on-surface-variant/80 leading-relaxed">
                  I'm the PM who built an AI agent on a weekend because the pain point couldn't wait. Who analyzed 10M+ rows of battery telemetry to catch contract violations before they became revenue leaks. Who took a lending operation from $190K/month to $1.9M/month and built the team underneath it from scratch.
                </p>
                <p className="font-body text-base md:text-lg text-on-surface-variant/80 leading-relaxed">
                  Energy. AI. Web3. FinTech. HealthTech. Non-Profit Tech. I don't pick comfortable lanes — I pick hard problems with real stakes, bring clarity from ambiguity, and ship outcomes that compound.
                </p>
                <p className="font-body text-base md:text-lg text-on-surface-variant/80 leading-relaxed">
                  Ex-founder. Technical by obsession. Currently at Northeastern, always building.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Domain Expertise Section */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="font-label text-[10px] font-bold text-primary-container uppercase tracking-[0.5em]">Domain Expertise</h2>
            <SignalLine className="flex-1" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <DomainCard icon={Zap} title="Energy & Battery" />
            <DomainCard icon={Coins} title="FinTech" />
            <DomainCard icon={LayoutGrid} title="B2B SaaS" />
            <DomainCard icon={School} title="EdTech" />
            <DomainCard icon={ShoppingCart} title="E-commerce" />
            <DomainCard icon={HeartHandshake} title="Non-Profit Tech" />
            <DomainCard icon={Coins} title="Web3" />
            <DomainCard icon={HeartPulse} title="HealthTech" />
          </motion.div>
        </section>

        {/* Professional Experience / Timeline */}
        <section className="mb-32" id="experience">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">PROFESSIONAL History</h2>
            <SignalLine className="flex-1" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="space-y-20 relative border-l border-primary-container/10 ml-4 pl-12"
          >
            <TimelineItem 
              isLatest
              date="01-2024 - 12-2024"
              title="Technical Product Manager (Co-op)"
              company="LG Energy Solution Vertech"
              points={[
                <>Drove end-to-end product definition for Power Plant Controllers, creating a product framework encompassing standardized features, BRDs and Research, Integration & Testing workflows; built a <span className="text-primary-container font-bold">cost–effort model</span> adopted for scoping a <span className="text-secondary font-bold">$220M project</span> with a MAANG partner.</>,
                <>Built the 2026 product roadmap for AEROS Cloud and EMS, prioritizing features through <span className="text-primary-container font-bold">WSJF</span> and business impact analysis, drove timely delivery of Q3/Q4 roadmap goals with cross functional teams and created a reusable roadmap template now standardized across LG.</>,
                <>Architected <span className="text-secondary font-bold">AEROS Cloud Edge</span>, a distributed data ingestion engine powering edge computing across global deployments; reduced data transmission volume by <span className="text-primary-container font-bold">40%</span> through device-side filtering, lowering cloud storage costs by 30% while enabling proprietary ML rollouts.</>,
                <>Analyzed 10M+ rows of battery telemetry to develop anomaly detection algorithms benchmarked against RMS thresholds, enabling automated contract compliance monitoring; reduced manual audit effort by <span className="text-primary-container font-bold">60%</span> and integrated real-time dashboards into AEROS Cloud.</>,
                <>Single-handedly developed an <span className="text-secondary font-bold">AI agent</span> that benchmarks critical contract parameters, prioritizing a rapid-build AI solution over longer development cycle; reduced information retrieval time by <span className="text-primary-container font-bold">65%</span> and enabled faster cross-team decision-making across 3 business units.</>
              ]}
            />

            <TimelineItem 
              date="01-2024 - 12-2024"
              title="Technical Product Manager (Founding Team)"
              company="Unilytics"
              points={[
                <>Led 0-1 product strategy and MVP launch for an <span className="text-secondary font-bold">enterprise AI agent platform</span> enabling conversational data intelligence, AI-generated insights and business tool integrations; delivered MVP within <span className="text-primary-container font-bold">6 months</span> with 20+ integrations and early enterprise pilot deployments.</>,
                <>Architected <span className="text-secondary font-bold">GraphRAG-based knowledge retrieval</span> integrating enterprise and external data sources, enabling unified querying across structured and unstructured data; improved data discovery speed by <span className="text-primary-container font-bold">~60%</span> and response relevance on internal evaluation queries.</>,
                <>Built <span className="text-secondary font-bold">agent-driven workflow automation</span> enabling task analysis, execution planning and autonomous execution of reporting, content generation and system updates; reduced manual workflow setup time by <span className="text-primary-container font-bold">~50%</span> and automated 8+ recurring operational workflows.</>,
                <>Established <span className="text-secondary font-bold">enterprise AI governance</span> capabilities including human-in-the-loop (HITL) approval workflows and cross-platform knowledge search across communication and document systems, improving reliability of AI-generated outputs in operational decision workflows.</>
              ]}
            />

            <TimelineItem 
              date="05-2023 - 01-2024"
              title="Associate Product Manager"
              company="Project Tech4Dev"
              points={[
                <>Built and scaled 30+ data dashboards in collaboration with Data Science, Engineering, UX and Marketing teams, enabling 120+ NGOs serving 1M+ beneficiaries to track performance metrics and inform product decisions; reduced reporting time by <span className="text-primary-container font-bold">~40%</span>.</>,
                <>Owned a data platform consolidating fragmented data into central warehouses, enabling automated <span className="text-secondary font-bold">ETL pipelines</span>, schema evolution and real-time analytics across 300+ sources; reduced manual data processing by <span className="text-primary-container font-bold">~60%</span> and improved decision TAT for program managers.</>,
                <>Drove <span className="text-secondary font-bold">UX/UI design</span> for an open-source data platform, structuring end-to-end workflows across ingestion, transformation and orchestration; simplified complex processes into an intuitive interface, enabling self-serve pipeline management for non-technical users.</>,
                <>Designed an <span className="text-secondary font-bold">AI-powered chatbot</span> by integrating OpenAI and Automatic Speech Recognition APIs, leading conversation design and interaction modeling; supported a 100-day cohort of 12,000+ students across 153 schools and improved NLP accuracy by <span className="text-primary-container font-bold">~30%</span>.</>
              ]}
            />

            <TimelineItem 
              date="10-2021 – 04-2023"
              title="Associate Product Manager"
              company="KoineArth"
              points={[
                <>Led GTM and product strategy for India’s first NFT e-commerce, enabling brands to launch digital collectibles for customer engagement and loyalty; defined positioning and distribution, driving <span className="text-primary-container font-bold">$1.5M+</span> Q1 revenue through brand partnerships (MG Motors, MakeMyTrip).</>,
                <>Owned a 1-year product roadmap in collaboration with executive leadership, driving backlog grooming while balancing competing feature trade-offs across a 15-member team; improved on-time delivery from <span className="text-primary-container font-bold">82% to 97%</span> through structured sprint execution.</>,
                <>Synthesized insights from 50+ user interviews and product requirements to define PRDs and acceptance criteria, identifying friction in onboarding and transaction flows; reduced drop-offs across purchase enablement, improving signup-to-transaction conversion <span className="text-primary-container font-bold">~30%</span>.</>,
                <>Built a centralized product enablement hub, leading a cross-functional team to develop use cases, demos and release artifacts; accelerated onboarding and adoption across internal teams, reducing training time by <span className="text-primary-container font-bold">~35%</span> and improving onboarding efficiency by <span className="text-primary-container font-bold">~40%</span>.</>
              ]}
            />

            <TimelineItem 
              date="10-2019 – 11-2020"
              title="Head of Disbursement Operations"
              company="Propelld"
              points={[
                <>Drove the growth of North-Star metric - loan disbursement transactions from $190k/month to <span className="text-primary-container font-bold">$1.9M/month</span> within 1 year by implementing data-driven strategies and optimizing KPIs such as approval time through automated approvals and loan processing TAT.</>,
                <>Analyzed the loan process from application to disbursement, identifying inefficiencies in workflows and external integrations. Operated in tandem with C-level executives to automate processes, reducing user application time by <span className="text-primary-container font-bold">25%</span> and lowering user drop-off rates by <span className="text-primary-container font-bold">35%</span>.</>,
                <>Scaled disbursement operations from a one-person responsibility to leading a team of 8, designing structured training programs and Kanban workflows that reduced error rates by <span className="text-primary-container font-bold">30%</span> and improved turnaround times by <span className="text-primary-container font-bold">25%</span>, enabling the <span className="text-secondary font-bold">10x disbursement growth</span>.</>,
                <>Managed relationships with multi-million-dollar NBFCs and EdTech platforms, aligning stakeholder expectations with product development priorities and ensuring operational-to-technical alignment across the lending pipeline.</>
              ]}
            />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="mb-32" id="projects">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">Selected Projects</h2>
            <SignalLine className="flex-1" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <ProjectCard 
              title="SignalScout"
              subHeader="MULTI AGENT REINFORCEMENT LEARNING SYSTEM FOR AI RESEARCH PRIORITIZATION"
              date="Jan 2026 - Apr 2026"
              description="Built an AI research agent for PMs and analysts drowning in arxiv papers. Three evaluators (Skeptic, Scout, Operator) score every paper in parallel on rigor, novelty and shippability. A contextual Thompson Sampling bandit learns which evaluator to trust per user, using a 15-dim feature vector and rank-1 Bayesian updates. Verified sublinear regret in CI: 14× over random baseline across 500 decisions. Full brand system designed alongside the architecture."
              skills={["PYTHON", "STREAMLIT", "OPENAI APIS", "THOMPSON SAMPLING", "CONTEXTUAL BANDIT", "BAYESIAN INFERENCE", "NUMPY", "SQLITE", "REINFORCEMENT LEARNING"]}
              link="https://signalscout-831047036020.us-west1.run.app"
            />
            <ProjectCard 
              title="Support Vector Machine vs Neural Network"
              subHeader="Benchmarking Binary Classifiers on Non-Linear Synthetic Data"
              date="Feb 2025 – Apr 2025"
              description="Comparative analysis of SVM and Neural Networks on a non-linearly separable classification task using the CMU StatLib PRNN dataset. Tuned SVM kernel parameters (cost, gamma) and NN architecture (neurons, decay) to push performance from baseline to 100% test accuracy. Backed by confusion matrix metrics, sensitivity/specificity analysis, and decision boundary visualizations."
              skills={["R", "SVM", "Neural Networks", "Hyperparameter Tuning", "Binary Classification", "Model Evaluation"]}
              link="https://github.com/aravindravi7/ML_Projects/tree/main/SVM_NN_using_R"
            />
            <ProjectCard 
              title="WorkShip"
              subHeader="AI-Powered Job Platform Built on Trust, Transparency & Verified Hiring"
              date="Feb 2025 – Apr 2025"
              description="Conceptualized and prototyped a hiring platform tackling ghost listings, irrelevant roles, and lack of transparency. Designed end-to-end user journeys for job seekers and recruiters through empathy mapping, competitive analysis, and pain-point identification. Features include verified profiles, real-time updates, and AI-powered job matching to reduce time-to-hire and improve application quality."
              skills={["Figma", "Moqups", "UI/UX", "Product Design", "User Research", "Empathy Mapping"]}
              link="https://aravindravi.sites.northeastern.edu/projects/workship-smarter-hiring-zero-noise/"
            />
            <ProjectCard 
              title="Decentralized KYC System"
              subHeader="Blockchain-Based Identity Verification for Financial Institutions"
              date="Feb 2022 - Mar 2022"
              description="Built a decentralized KYC system on Ethereum using Solidity to eliminate redundant identity verification across financial institutions. Features admin-controlled bank governance, on-chain customer data management, and trustless KYC status sharing — enabling banks to rely on existing verified data instead of repeating checks. Deployed and tested via Remix IDE with ethers.js and web3.js."
              skills={["Solidity", "Ethereum", "Smart Contracts", "Blockchain", "Web3.js", "Ethers.js", "Remix IDE"]}
              link="https://github.com/aravindravi7/Blockchain-Projects"
            />
            <ProjectCard 
              title="Price Performance Optimizer"
              subHeader="Java-Based Pricing Intelligence System with Real-Time Analytics"
              date="Oct 2024 – Nov 2024"
              description="Built a dynamic pricing management system enabling teams to monitor, analyze, and adjust product prices through real-time performance analysis and simulation. Features role-based access (Customer, Supplier, Admin) and robust reporting for actionable pricing insights. Bridges the gap between market data and pricing strategy for informed decision-making."
              skills={["Java", "Role-Based Access Control", "Simulation", "Netbeans", "Maven"]}
              link="https://github.com/aravindravi7/Price-Performance-Optimizer"
            />
            <ProjectCard 
              title="E-Farmer Market"
              subHeader="SQL-Based OLTP System for Direct Farm-to-Consumer Commerce"
              date="Oct 2024 – Dec 2024"
              description="Designed and built an OLTP database application connecting farmers directly with consumers, eliminating middlemen from agricultural supply chains. Implemented stored procedures, triggers, UDFs, and views for automated workflows including stock verification, order processing, and delivery updates. Delivered analytical reports on top-selling products, failed transactions, and category-wise inventory."
              skills={["SQL", "ERD Modeling", "Database Design", "OLTP", "Oracle Autonomous Database"]}
            />
            <ProjectCard 
              title="Campus Crib"
              subHeader="Student Accommodation Management System with Ecosystem Architecture"
              date="Nov 2024 - Dec 2024"
              description="Built a multi-stakeholder student housing platform using a layered ecosystem model (Network → Enterprise → Organization → Role) supporting residents, building managers, real estate agents, and maintenance crews. Features apartment booking, service/work request management, and integrated maintenance workflows (plumbing, electrical, carpentry, pest control) with role-based dashboards for each stakeholder."
              skills={["Java", "Java Swing", "OOP", "Ecosystem Architecture", "Role-Based Access", "MVC Pattern"]}
              link="https://github.com/aravindravi7/Campus-Crib"
            />
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="mb-20" id="education">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">academics</h2>
            <SignalLine className="flex-1" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <EducationCard 
              type="GRADUATE_DEGREE"
              degree="Master of Science in Information Systems"
              school="Northeastern University, Boston, MA"
              date="2024 - 2026"
            />
            <EducationCard 
              type="UNDERGRAD_DEGREE"
              degree="Bachelor of Engineering in Industrial Eng."
              school="College of Engineering Trivandrum, KL"
              date="2014 - 2018"
            />
          </motion.div>
        </section>

        {/* Writing Section */}
        <section className="mb-32" id="writing">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">Writing & Insights</h2>
            <SignalLine className="flex-1" />
          </motion.div>
          <div className="space-y-6">
            {[
              {
                href: "https://medium.com/@aravindravi_/switch-from-web2-to-web3-imperative-or-hyped-up-b839c643a69a?postPublishedType=repub",
                date: "Feb 2023",
                title: "Switch from Web2 to Web3: Imperative or hyped-up?",
                desc: "From convenience to control - a look at how the internet’s power structure is evolving."
              },
              {
                href: "https://medium.com/@aravindravi_/from-abandonment-to-acquisition-transforming-walmarts-cart-experience-d2da623fa51a",
                date: "Jan 2025",
                title: "From Abandonment to Acquisition: Transforming Walmart’s Cart Experience",
                desc: "Cart abandonment, seen through UX."
              },
              {
                href: "https://medium.com/@aravindravi_/the-attention-problem-no-one-talks-about-fcc9548df60d",
                date: "Apr 2026",
                title: "The Attention Problem No One Talks About",
                desc: "When research volume outpaces human judgment, who decides what matters?"
              },
              {
                href: "https://glific.org/from-fields-to-forecasts-glific-and-bharat-rohans-synergy/",
                date: "Sep 2025",
                title: "From Fields to Forecasts: Glific and Bharat Rohan’s Synergy",
                desc: "Building scalable communication systems for precision agriculture."
              },
              {
                href: "https://glific.org/project-tech4dev-at-oasis-forging-a-path-for-social-impact/",
                date: "Sep 2023",
                title: "Building for Impact: Takeaways from Oasis",
                desc: "A look at how community-driven tech is shaping real-world social impact."
              }
            ].map((article, index) => (
              <motion.a 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-surface-container-low/20 border-l-2 border-primary-container/20 hover:border-primary-container hover:bg-primary-container/5 transition-all duration-300 group cursor-pointer block"
              >
                <span className="font-label text-[9px] text-primary-container/40 uppercase tracking-widest mb-2 block group-hover:text-primary-container/60 transition-colors">{article.date}</span>
                <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">{article.title}</h3>
                <p className="font-body text-sm text-on-surface-variant/60 mt-2 group-hover:text-on-surface-variant transition-colors">{article.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-primary-container/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-label text-[10px] text-primary-container/40 uppercase tracking-widest">
            © 2026 Aravind Ravi Portfolio
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/-aravindravi/" target="_blank" rel="noopener noreferrer" className="font-label text-[10px] text-primary-container/40 hover:text-primary-container transition-colors duration-100 uppercase tracking-widest">LinkedIn</a>
            <a href="https://github.com/aravindravi7" target="_blank" rel="noopener noreferrer" className="font-label text-[10px] text-primary-container/40 hover:text-primary-container transition-colors duration-100 uppercase tracking-widest">GitHub</a>
            <a href="mailto:aravindravi.academics@gmail.com" className="font-label text-[10px] text-primary-container/40 hover:text-primary-container transition-colors duration-100 uppercase tracking-widest">Email</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
