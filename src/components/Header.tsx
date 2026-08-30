import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MessageCircle, Menu, X, Compass, Activity, BookOpen, SunMedium } from 'lucide-react';
import { ASSETS } from '../data/ayurvedaData';

interface HeaderProps {
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
  onOpenAssistant: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuiz,
  onOpenBooking,
  onOpenAssistant,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sanctuary', href: '#sanctuary', id: 'sanctuary' },
    { label: 'Essence of Panchakarma', href: '#essence', id: 'essence' },
    { label: 'The Science', href: '#science', id: 'science' },
    { label: 'Therapies & Catalog', href: '#therapies', id: 'therapies' },
    { label: 'Retreat Programs', href: '#programs', id: 'programs' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-sm border-b border-[#e5e0d8] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top micro banner */}
      <div className={`hidden md:block border-b border-white/10 pb-2 mb-2 transition-opacity ${scrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs tracking-wider text-[#d4c8b8]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
            <span>VEDIC HEALING SANCTUARY • KERALA & HIMALAYAN FOOTHILLS</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="italic font-serif">"Sarve Bhavantu Sukhinah — May All Beings Be Peaceful"</span>
            <button
              id="top-dosha-btn"
              onClick={onOpenQuiz}
              className="text-[#fed488] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Know Your Dosha</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#sanctuary"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full border border-[#c5a059]/60 flex items-center justify-center bg-[#334537] text-[#fed488] shadow-inner transition-transform group-hover:scale-105">
            <SunMedium className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className={`font-display text-xl sm:text-2xl font-semibold tracking-wider transition-colors ${scrolled ? 'text-[#334537]' : 'text-white md:text-white text-[#334537]'}`}>
                VEDA<span className="text-[#c5a059]">SANCTUM</span>
              </span>
            </div>
            <p className={`text-[10px] tracking-[0.2em] uppercase font-sans ${scrolled ? 'text-[#775a19]' : 'text-[#d4c8b8] md:text-[#d4c8b8] text-[#775a19]'}`}>
              Panchakarma & Ayurvedic Medicine
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              id={`nav-${item.id}`}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                scrolled
                  ? activeSection === item.id
                    ? 'text-[#334537] font-semibold'
                    : 'text-[#6b7280] hover:text-[#334537]'
                  : activeSection === item.id
                  ? 'text-white font-semibold'
                  : 'text-[#d4c8b8] hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Ask Vaidya AI button */}
          <button
            id="header-ask-ai-btn"
            onClick={onOpenAssistant}
            className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-[#e1e6e2] text-[#334537] hover:bg-[#c0d5c2] transition-all border border-[#334537]/20 shadow-sm cursor-pointer"
            title="Consult with our AI Vaidya"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden border border-[#334537]/40 flex-shrink-0">
              <img
                src={ASSETS.assistantAvatar}
                alt="AI Vaidya Avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="hidden sm:inline">Ask Vaidya</span>
            <span className="sm:hidden">AI</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </button>

          {/* Dosha Quiz button */}
          <button
            id="header-quiz-btn"
            onClick={onOpenQuiz}
            className={`hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
              scrolled
                ? 'border border-[#c5a059] text-[#775a19] hover:bg-[#fed488]/20'
                : 'border border-[#c5a059]/70 text-[#fed488] hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Dosha Quiz</span>
          </button>

          {/* Primary Book CTA */}
          <button
            id="header-book-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-[#334537] hover:bg-[#223025] text-white shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#c5a059]/30"
          >
            <Calendar className="w-3.5 h-3.5 text-[#fed488]" />
            <span>Book Retreat</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg lg:hidden transition-colors ${
              scrolled ? 'text-[#334537] hover:bg-[#efeeea]' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f5] border-b border-[#e5e0d8] px-6 py-6 mt-2 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#37443a] hover:text-[#334537] py-2 border-b border-[#efeeea]"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <button
                id="mobile-quiz-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#c5a059] text-[#775a19] font-medium text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                <span>Take Dosha Assessment</span>
              </button>
              <button
                id="mobile-ai-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistant();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#e1e6e2] text-[#334537] font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with AI Vaidya Assistant</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
