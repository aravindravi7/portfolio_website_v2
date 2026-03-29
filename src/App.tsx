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
  Award
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

const SkillBadge = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <motion.span 
    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-surface-container-highest)', borderColor: 'var(--color-primary-container)' }}
    className="px-1.5 py-0.5 bg-surface-container-highest/50 rounded text-[8px] font-label text-on-surface-variant border border-outline-variant/10 flex items-center gap-1 cursor-default transition-colors"
  >
    <Icon size={10} className="text-primary-container/70" />
    {children}
  </motion.span>
);

const SidebarSection = ({ title, icon: Icon, children, containerClassName = "flex flex-wrap gap-1" }: { title: string, icon: any, children: React.ReactNode, containerClassName?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
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
    whileHover={{ y: -4, scale: 1.02 }}
    className="px-5 py-3 bg-surface-container border border-primary-container/10 rounded-lg flex items-center gap-3 group hover:border-primary-container/40 transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/5 transition-colors"></div>
    <Icon className="text-primary-container/60 group-hover:text-primary-container transition-all group-hover:scale-110" size={20} />
    <span className="font-headline font-medium text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">{title}</span>
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
    whileHover={{ y: -5 }}
    className="p-6 bg-surface-container-highest/40 backdrop-blur-sm rounded-lg border border-outline-variant/10 hover:border-primary-container/30 transition-all duration-300 group"
  >
    <p className="font-label text-[10px] text-primary-container/60 group-hover:text-primary-container mb-1 transition-colors uppercase tracking-widest">{type}</p>
    <h4 className="font-headline font-bold text-lg group-hover:text-primary-container transition-colors">{degree}</h4>
    <p className="text-on-surface-variant text-sm mb-4">{school}</p>
    <div className="flex items-center gap-2 text-[10px] font-label text-secondary/60 group-hover:text-secondary transition-colors">
      <Calendar size={12} /> {date}
    </div>
  </motion.div>
);

const CertificateBadge = ({ title, issuer, link }: { title: string, issuer: string, link?: string }) => {
  const content = (
    <>
      <div className="flex items-start gap-2 mb-0.5">
        <Award size={12} className="text-primary-container/50 mt-0.5 shrink-0 group-hover:text-primary-container group-hover:scale-110 transition-all" />
        <span className="text-[10px] font-headline font-bold text-on-surface/80 group-hover:text-on-surface leading-tight transition-colors">{title}</span>
      </div>
      <div className="pl-5 text-[8px] font-label text-primary-container/30 group-hover:text-primary-container/60 uppercase tracking-tighter transition-colors">
        Issued by {issuer}
      </div>
    </>
  );

  const commonProps = {
    whileHover: { x: 4, backgroundColor: 'var(--color-surface-container-highest)' },
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

export default function App() {
  const [activeSection, setActiveSection] = React.useState('hero');
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
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
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
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 border border-primary-container/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Main Monogram Container */}
            <div className="w-10 h-10 rounded-sm border border-primary-container/30 flex items-center justify-center bg-surface-container-low/60 backdrop-blur-md group-hover:border-primary-container/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Scanning Light Effect */}
              <motion.div 
                animate={{ translateY: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-x-0 h-px bg-primary-container/40 blur-[1px] z-10"
              />
              
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-primary-container)_1px,transparent_1px)] [background-size:4px_4px]"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary-container/60"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary-container/60"></div>
              
              <span className="font-headline font-black text-xl text-primary-container tracking-tighter drop-shadow-[0_0_8px_rgba(0,245,212,0.4)] relative z-20">
                AR
              </span>
            </div>
            
          </motion.div>
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
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ rotate: 180 }}
              className="text-on-surface/40 hover:text-primary-container transition-colors"
            >
              <Terminal size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-on-primary px-5 py-2 text-[10px] font-bold uppercase rounded-sm shadow-[0_0_15px_rgba(0,245,212,0.2)] hover:shadow-[0_0_25px_rgba(0,245,212,0.4)] transition-all duration-300"
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </header>

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
                alt="Aravind Ravi Profile" 
                src="https://media.licdn.com/dms/image/v2/D4E03AQG_QvNf9r9X8A/profile-displayphoto-shrink_800_800/0/1718228181643?e=1743292800&v=beta&t=7_8_8_8_8_8_8_8_8_8_8_8_8_8_8_8_8_8_8_8_8" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm tracking-tight text-on-surface group-hover:text-primary-container transition-colors duration-300">ARAVIND RAVI</h3>
              <p className="font-label text-[9px] text-primary-container/50 uppercase tracking-widest">Technical Product Manager</p>
            </div>
          </motion.div>
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
              <SkillBadge icon={Heart}>Lovable</SkillBadge>
              <SkillBadge icon={FileText}>FigJam</SkillBadge>
              <SkillBadge icon={Network}>Lucidchart</SkillBadge>
              <SkillBadge icon={PenTool}>Draw.io</SkillBadge>
              <SkillBadge icon={Users}>Stakeholder Management</SkillBadge>
              <SkillBadge icon={Rocket}>Release Management</SkillBadge>
              <SkillBadge icon={FileText}>Slab</SkillBadge>
              <SkillBadge icon={Brush}>Miro</SkillBadge>
            </SidebarSection>

            <SidebarSection title="Product & Analytics" icon={BarChart3}>
              <SkillBadge icon={MousePointer2}>Mixpanel</SkillBadge>
              <SkillBadge icon={BarChart}>Power BI</SkillBadge>
              <SkillBadge icon={Activity}>Tableau</SkillBadge>
              <SkillBadge icon={Database}>BigQuery</SkillBadge>
              <SkillBadge icon={TrendingUp}>Google Analytics</SkillBadge>
              <SkillBadge icon={Eye}>Hotjar</SkillBadge>
              <SkillBadge icon={Palette}>Figma</SkillBadge>
              <SkillBadge icon={Zap}>Retool</SkillBadge>
              <SkillBadge icon={Terminal}>Replit</SkillBadge>
              <SkillBadge icon={Terminal}>Vercel</SkillBadge>
              <SkillBadge icon={BarChart3}>Looker Studio</SkillBadge>
            </SidebarSection>

            <SidebarSection title="AI/ML" icon={Cpu}>
              <SkillBadge icon={Brain}>OpenAI APIs</SkillBadge>
              <SkillBadge icon={Bot}>Co-Pilot Studio</SkillBadge>
              <SkillBadge icon={Edit3}>Cursor</SkillBadge>
              <SkillBadge icon={CircleDot}>Ollama</SkillBadge>
              <SkillBadge icon={Droplets}>Streamlit</SkillBadge>
              <SkillBadge icon={Network}>RAG Pipelines</SkillBadge>
              <SkillBadge icon={Terminal}>Prompt Engineering</SkillBadge>
              <SkillBadge icon={ShieldCheck}>AI Evaluation Frameworks</SkillBadge>
              <SkillBadge icon={Terminal}>Claude Code</SkillBadge>
              <SkillBadge icon={Code2}>Google AI Studio</SkillBadge>
              <SkillBadge icon={Network}>GraphRAG</SkillBadge>
              <SkillBadge icon={Users}>Human-in-the-Loop</SkillBadge>
              <SkillBadge icon={Mic}>ASR</SkillBadge>
              <SkillBadge icon={ShieldCheck}>Evaluation Frameworks</SkillBadge>
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

            <SidebarSection title="Methodologies" icon={Box}>
              <SkillBadge icon={Box}>WSJF</SkillBadge>
              <SkillBadge icon={Box}>RICE</SkillBadge>
              <SkillBadge icon={Box}>A/B Testing</SkillBadge>
              <SkillBadge icon={Box}>Change Management</SkillBadge>
              <SkillBadge icon={Box}>UAT</SkillBadge>
              <SkillBadge icon={Box}>Trade-off Analysis</SkillBadge>
              <SkillBadge icon={Box}>Design Thinking</SkillBadge>
              <SkillBadge icon={Box}>HDD</SkillBadge>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary-container"></div>
              <span className="font-label text-[10px] text-primary-container uppercase tracking-[0.4em]">Available for projects</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter text-on-surface leading-[0.85] mb-6">
              ARAVIND <br />
              <span className="text-primary-container drop-shadow-[0_0_30px_rgba(0,245,212,0.2)]">RAVI</span>
            </h1>
            <p className="font-label text-xs md:text-sm text-primary-container/60 uppercase tracking-[0.5em] mb-10">
              Technical Product Manager // PRODUCT MAVEN
            </p>
            <div className="flex flex-wrap gap-3 font-label text-[9px]">
              <motion.a 
                whileHover={{ y: -2, color: 'var(--color-primary-container)' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high/40 border border-outline-variant/10 rounded-sm" 
                href="mailto:aravindravi.academics@gmail.com"
              >
                <Mail size={12} /> Get in touch
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, color: 'var(--color-primary-container)' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high/40 border border-outline-variant/10 rounded-sm" 
                href="https://www.linkedin.com/in/-aravindravi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={12} /> LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, color: 'var(--color-primary-container)' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high/40 border border-outline-variant/10 rounded-sm" 
                href="https://github.com/aravindravi7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={12} /> GitHub
              </motion.a>
            </div>
            <div className="mt-12 max-w-4xl">
              <p className="font-body text-base md:text-lg text-on-surface-variant/80 leading-relaxed font-light">
                Technical Product Manager with 5+ years of experience driving 0-to-1 product launches, cloud platform roadmaps, and AI-powered solutions across Energy, Enterprise SaaS, Fintech, Web3, Non-Profit Tech and Research. Proven track record of defining product strategy for $220M-scale programs, architecting data-intensive systems from edge computing to agentic AI platforms and translating complex technical capabilities into measurable business outcomes, including 10x revenue growth, 60%+ efficiency gains and cross-functional delivery across globally distributed teams.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Domain Expertise Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-label text-[10px] font-bold text-primary-container uppercase tracking-[0.5em]">Domain Expertise</h2>
            <div className="h-px flex-1 signal-line opacity-30"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DomainCard icon={Zap} title="Energy & Battery" />
            <DomainCard icon={Coins} title="FinTech" />
            <DomainCard icon={LayoutGrid} title="B2B SaaS" />
            <DomainCard icon={School} title="EdTech" />
            <DomainCard icon={ShoppingCart} title="E-commerce" />
            <DomainCard icon={HeartHandshake} title="Non-Profit Tech" />
            <DomainCard icon={Coins} title="Web3" />
            <DomainCard icon={HeartPulse} title="HealthTech" />
          </div>
        </section>

        {/* Professional Experience / Timeline */}
        <section className="mb-32" id="experience">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">PROFESSIONAL History</h2>
            <div className="h-px flex-1 signal-line"></div>
          </div>
          <div className="space-y-20 relative border-l border-primary-container/10 ml-4 pl-12">
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
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32" id="projects">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">Selected Projects</h2>
            <div className="h-px flex-1 signal-line"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20" id="education">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">academics</h2>
            <div className="h-px flex-1 signal-line"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </section>

        {/* Writing Section */}
        <section className="mb-32" id="writing">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-widest">Writing & Insights</h2>
            <div className="h-px flex-1 signal-line"></div>
          </div>
          <div className="space-y-6">
            <a 
              href="https://medium.com/@aravindravi_/switch-from-web2-to-web3-imperative-or-hyped-up-b839c643a69a?postPublishedType=repub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-container-low/20 border-l-2 border-primary-container/20 hover:border-primary-container transition-all duration-300 group cursor-pointer block"
            >
              <span className="font-label text-[9px] text-primary-container/40 uppercase tracking-widest mb-2 block">Feb 2023</span>
              <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">Switch from Web2 to Web3: Imperative or hyped-up?</h3>
              <p className="font-body text-sm text-on-surface-variant/60 mt-2">From convenience to control - a look at how the internet’s power structure is evolving.</p>
            </a>
            <a 
              href="https://medium.com/@aravindravi_/from-abandonment-to-acquisition-transforming-walmarts-cart-experience-d2da623fa51a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-container-low/20 border-l-2 border-primary-container/20 hover:border-primary-container transition-all duration-300 group cursor-pointer block"
            >
              <span className="font-label text-[9px] text-primary-container/40 uppercase tracking-widest mb-2 block">Jan 2025</span>
              <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">From Abandonment to Acquisition: Transforming Walmart’s Cart Experience</h3>
              <p className="font-body text-sm text-on-surface-variant/60 mt-2">Cart abandonment, seen through UX.</p>
            </a>
            <a 
              href="https://glific.org/from-fields-to-forecasts-glific-and-bharat-rohans-synergy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-container-low/20 border-l-2 border-primary-container/20 hover:border-primary-container transition-all duration-300 group cursor-pointer block"
            >
              <span className="font-label text-[9px] text-primary-container/40 uppercase tracking-widest mb-2 block">Sep 2025</span>
              <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">From Fields to Forecasts: Glific and Bharat Rohan’s Synergy</h3>
              <p className="font-body text-sm text-on-surface-variant/60 mt-2">Building scalable communication systems for precision agriculture.</p>
            </a>
            <a 
              href="https://glific.org/project-tech4dev-at-oasis-forging-a-path-for-social-impact/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-container-low/20 border-l-2 border-primary-container/20 hover:border-primary-container transition-all duration-300 group cursor-pointer block"
            >
              <span className="font-label text-[9px] text-primary-container/40 uppercase tracking-widest mb-2 block">Sep 2023</span>
              <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">Building for Impact: Takeaways from Oasis</h3>
              <p className="font-body text-sm text-on-surface-variant/60 mt-2">A look at how community-driven tech is shaping real-world social impact.</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-primary-container/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-label text-[10px] text-primary-container/40 uppercase tracking-widest">
            © 2026 Aravind Ravi Portfolio // Built for performance
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
