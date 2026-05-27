import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const teamMembers = [
  {
    name: 'Sathvik Merugu',
    role: 'ML Engineer',
    github: 'https://github.com/Sathvik5647', // TODO: Add GitHub link here
    linkedin: 'https://www.linkedin.com/in/sathvik-merugu-b7195a37b/', // TODO: Add LinkedIn link here
    image: 'https://ui-avatars.com/api/?name=Sathvik+Merugu&background=10b981&color=fff&size=200',
  },
  {
    name: 'Kishan Roy',
    role: 'Developer',
    github: 'https://github.com/kishan-1001', // TODO: Add GitHub link here
    linkedin: 'https://www.linkedin.com/in/kishan-roy1001/', // TODO: Add LinkedIn link here
    image: 'https://ui-avatars.com/api/?name=Kishan+Roy&background=10b981&color=fff&size=200',
  },
];

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  const { isDark, toggle } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <img
                src="/KavachPay_logo.png"
                alt="KavachPay"
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">KavachPay</span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => navigate('/howitworks')} 
                className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
              >
                How it Works
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="text-sm font-medium text-stone-900 dark:text-stone-100 transition-colors cursor-pointer"
              >
                About Us
              </button>
              <a href="/#features" className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                Features
              </a>
              <a href="/#pricing" className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                Pricing
              </a>
              <a href="/#faq" className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                FAQ
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => navigate('/signin')}
                  className="text-sm font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors px-3 sm:px-4 py-2 cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-stone-900 dark:bg-[#ffffff] text-white dark:text-[#000000] text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full hover:bg-stone-800 dark:hover:bg-[#f0f0f0] transition-all hover:shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  Get Started
                </button>
              </div>
              <button
                className="md:hidden p-2 rounded-full text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-4 animate-in slide-in-from-top-2">
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/howitworks'); }} className="text-left text-base font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 px-2 py-1">
                How it Works
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); navigate('/about'); }} className="text-left text-base font-medium text-stone-900 dark:text-stone-100 px-2 py-1">
                About Us
              </button>
              <a href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 px-2 py-1">
                Features
              </a>
              <a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 px-2 py-1">
                Pricing
              </a>
              <a href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 px-2 py-1">
                FAQ
              </a>
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-stone-200 dark:border-stone-800">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigate('/signin'); }}
                  className="w-full text-center text-sm font-semibold text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 rounded-full py-2.5 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigate('/signup'); }}
                  className="w-full text-center bg-stone-900 dark:bg-[#ffffff] text-white dark:text-[#000000] text-sm font-semibold rounded-full py-2.5 hover:bg-stone-800 dark:hover:bg-[#f0f0f0] transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-40 dark:opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-200 dark:bg-stone-800/30 rounded-full blur-3xl opacity-50 dark:opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
              About Us
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              We're building the future of financial protection for gig workers. Meet the team behind KavachPay.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 transition-all hover:shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-6 ring-4 ring-emerald-50 dark:ring-stone-800 object-cover"
                />
                <h3 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-stone-500 dark:text-emerald-500 font-medium mb-6">
                  {member.role}
                </p>
                
                <div className="flex items-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub of {member.name}</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn of {member.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
