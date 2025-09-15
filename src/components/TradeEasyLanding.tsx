import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  Mail,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronUp,
  Building2,
  Cpu,
  Globe,
  Settings,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const TradeEasyLanding: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [userType, setUserType] = useState<string>('Platform');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const scrollToWaitlist = () => {
    const ctaSection = document.querySelector('#cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (!email) return;
    // Here you would integrate with AWS Amplify for email capture
    console.log('Email submitted:', email, 'User type:', userType);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const faqData: FAQItem[] = [
    {
      question: "When are you launching?",
      answer: "We're targeting early 2025 for our beta launch. Join our waitlist to get early access and help shape the product."
    },
    {
      question: "Who can integrate with Trade-Easy?",
      answer: "Any B2B platform, marketplace, SaaS tool, ERP system, or supply chain portal that serves SMEs can integrate our API."
    },
    {
      question: "How does tokenization work?",
      answer: "We convert trade finance instruments into smart contract tokens, enabling faster processing, better transparency, and automated settlements."
    },
    {
      question: "Is this regulated?",
      answer: "Yes, we're working with regulatory bodies to ensure full compliance while maintaining the flexibility that makes embedded finance powerful."
    },
    {
      question: "How much will it cost?",
      answer: "We're designing a usage-based pricing model that scales with your platform. Contact us to discuss pricing for your specific use case."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Custom CSS Styles */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(147, 51, 234, 0.3);
        }

        .gradient-button {
          background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
        }

        .gradient-button:hover {
          background: linear-gradient(135deg, #9333ea 0%, #0891b2 100%);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
          transform: translateY(-2px);
        }

        .gradient-button:active {
          transform: translateY(0px);
        }

        .logo-glow {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
        }

        .app-button {
          position: relative;
          background: rgba(6, 182, 212, 0.1);
          border: 2px solid rgba(6, 182, 212, 0.3);
          color: #06b6d4;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .app-button:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.6);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.3);
        }

        .app-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent);
          transition: left 0.5s;
        }

        .app-button:hover::before {
          left: 100%;
        }

        .mobile-menu {
          backdrop-filter: blur(20px);
          background: rgba(30, 10, 74, 0.95);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900">
        {/* Navigation */}
        <nav className="relative z-50 px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            
            

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mobile-menu border-t border-purple-500/20 p-6">
              <div className="flex flex-col gap-4">
                <a href="#problem" className="text-gray-300 hover:text-white transition-colors py-2">Problem</a>
                <a href="#solution" className="text-gray-300 hover:text-white transition-colors py-2">Solution</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors py-2">FAQ</a>
                <div className="flex flex-col gap-3 pt-4 border-t border-purple-500/20">
                  <a
                    href="https://b01.tradeeasyapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-button px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Go to App</span>
                    <ExternalLink size={16} className="relative z-10" />
                  </a>
                  <button 
                    onClick={scrollToWaitlist}
                    className="gradient-button px-6 py-3 rounded-full font-semibold"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="text-center">
              {/* Logo Integration */}
              <div className="flex justify-center mb-8">
                <div className="logo-glow">
                  <img 
                    src="/TradeEasyLogoWHITE.png"
                    alt="Trade-Easy Logo" 
                    className="h-24 w-auto"
                  />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                What If Every Business Could{' '}
                <span className="gradient-text">
                  Offer Trade Finance
                </span>
                —Not Just Banks?
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Embedded, tokenized trade finance for non-bank platforms. Powered by AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex gap-2 glass-card rounded-full p-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent text-white placeholder-gray-300 border-0 outline-none px-6 py-3 flex-grow min-w-[300px]"
                  />
                  <button
                    onClick={handleSubmit}
                    className="gradient-button text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                  >
                    Join Waitlist <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="py-8 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <p className="text-gray-400 text-sm">Already interested in trade finance?</p>
                <a
                  href="https://b01.tradeeasyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-3 rounded-full border-2 border-cyan-400/30 text-cyan-400 hover:text-white font-semibold transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative flex items-center gap-2">
                    <Globe size={18} />
                    Explore Our Current Platform
                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </a>
              </div>
              
              {isSubmitted && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 max-w-md mx-auto mb-8">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle size={20} />
                    <span>Thanks! We'll be in touch soon.</span>
                  </div>
                </div>
              )}
              
              {/* Abstract Visualization */}
              <div className="relative max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-8 opacity-20">
                  <div className="h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg transform rotate-3"></div>
                  <div className="h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg transform -rotate-2"></div>
                  <div className="h-20 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-lg transform rotate-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Trade Finance is <span className="text-red-400">Broken</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Small businesses can't get the liquidity they need. Non-banks can't offer finance. Everyone loses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, title: "Slow, bank-led process", desc: "Traditional workflows take weeks" },
                { icon: Mail, title: "Manual paperwork", desc: "Endless forms and documents" },
                { icon: Shield, title: "High cost of entry", desc: "Expensive infrastructure required" },
                { icon: Users, title: "SMEs excluded", desc: "Small businesses left behind" }
              ].map((item, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 border-red-500/20 hover:border-red-400/40">
                  <item.icon className="text-red-400 w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                A <span className="gradient-text">Smarter Way</span> to Offer Trade Finance
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {[
                { 
                  step: "1", 
                  title: "Embed via API", 
                  desc: "Simple integration into your existing platform",
                  icon: Cpu
                },
                { 
                  step: "2", 
                  title: "Offer tokenized, AI-powered finance", 
                  desc: "Smart contracts automate the entire process",
                  icon: Zap
                },
                { 
                  step: "3", 
                  title: "Unlock SME growth & liquidity", 
                  desc: "Enable your users to access capital instantly",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                      {item.step}
                    </div>
                    <item.icon className="text-purple-400 w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ArrowRight className="text-purple-400 w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Users Section */}
        <section className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Built for <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Bold Platforms</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "B2B Marketplaces", desc: "Enable trade finance for your vendors and buyers" },
                { icon: Settings, title: "SaaS Platforms", desc: "Add financial services to your software offering" },
                { icon: TrendingUp, title: "Supply Chain Portals", desc: "Provide liquidity throughout the supply chain" },
                { icon: Building2, title: "ERPs", desc: "Integrate finance directly into business operations" },
                { icon: Cpu, title: "Procurement Tools", desc: "Finance purchase orders automatically" },
                { icon: Users, title: "Fintech Platforms", desc: "Expand your financial product suite" }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105">
                  <item.icon className="text-purple-400 w-12 h-12 mb-4 group-hover:text-cyan-400 transition-colors" />
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why It's <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Different</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/20 overflow-hidden">
                <div className="grid grid-cols-3 gap-px bg-purple-500/20">
                  <div className="bg-black/40 p-6">
                    <h3 className="text-xl font-semibold text-white text-center">Feature</h3>
                  </div>
                  <div className="bg-red-900/40 p-6">
                    <h3 className="text-xl font-semibold text-red-400 text-center">Legacy Finance</h3>
                  </div>
                  <div className="bg-purple-900/40 p-6">
                    <h3 className="text-xl font-semibold text-purple-400 text-center">Trade-Easy</h3>
                  </div>
                </div>
                
                {[
                  { feature: "Access", legacy: "Bank-only access", tradeEasy: "Platform-embedded access" },
                  { feature: "Process", legacy: "Paper-based", tradeEasy: "Tokenized smart contracts" },
                  { feature: "Decisioning", legacy: "Rigid scoring", tradeEasy: "AI-based decisioning" },
                  { feature: "Setup Time", legacy: "Long setup", tradeEasy: "Cloud-native & fast" }
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-px bg-purple-500/10">
                    <div className="bg-black/20 p-6">
                      <p className="text-white font-medium text-center">{row.feature}</p>
                    </div>
                    <div className="bg-black/20 p-6">
                      <p className="text-red-300 text-center">{row.legacy}</p>
                    </div>
                    <div className="bg-black/20 p-6">
                      <p className="text-purple-300 text-center font-medium">{row.tradeEasy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Trusted by <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Innovators</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Backed by fintech experts. Built with real-world SME needs in mind.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
              {[1,2,3,4].map((i) => (
                <div key={i} className="h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-24 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Be First to Offer <span className="gradient-text">Embedded Trade Finance</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the waitlist to get early access, updates, and the chance to shape the product.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full glass-card rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full glass-card rounded-full px-6 py-4 text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="Platform">I'm a Platform</option>
                  <option value="SME">I'm an SME</option>
                  <option value="Investor">I'm an Investor</option>
                </select>
                <button
                  onClick={handleSubmit}
                  className="gradient-button text-white px-8 py-4 rounded-full font-semibold"
                >
                  Join Now
                </button>
              </div>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/20 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white font-semibold text-lg">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="text-purple-400 w-6 h-6" />
                    ) : (
                      <ChevronDown className="text-purple-400 w-6 h-6" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-black/40 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src="/TradeEasyLogoWHITE.png" 
                  alt="Trade-Easy" 
                  className="h-8 w-auto logo-glow"
                />
                <span className="text-xl font-bold text-white"></span>
              </div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Trade-Easy is developing a lightweight embedded trade finance solution using tokenization and AI to democratize access to capital for SMEs worldwide.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-8 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">About</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Careers</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2024 Trade-Easy. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TradeEasyLanding;