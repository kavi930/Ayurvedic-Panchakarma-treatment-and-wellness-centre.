import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Compass } from 'lucide-react';
import { ASSETS } from '../data/ayurvedaData';

interface HeroSectionProps {
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuiz, onOpenBooking }) => {
  return (
    <section id="sanctuary" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Image with botanical atmospheric overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBg}
          alt="VedaSanctum Ayurvedic Retreat Atmosphere"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#223025] via-[#334537]/65 to-[#223025]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#223025]/40 to-[#223025]/90" />
      </div>

      {/* Decorative Vedic pattern accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#fed488]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#c0d5c2]/10 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Sanskrit Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#c5a059]/40 text-[#fed488] text-xs uppercase tracking-[0.25em] font-semibold mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fed488] animate-pulse"></span>
          <span>Ancient Wisdom, Timeless Healing</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.15] mb-6 max-w-4xl drop-shadow-md">
          Restore Your Natural <span className="italic font-light text-[#fed488]">Equilibrium</span> Through Authentic Panchakarma
        </h1>

        {/* Editorial Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#efeeea] font-normal leading-relaxed max-w-2xl mb-10 text-balance drop-shadow-sm">
          Rooted in millennia-old Vedic traditions, our classical Panchakarma detoxification treatments purify the body at the cellular level, calm the restless mind, and realign your bio-energies.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a
            id="hero-explore-programs-btn"
            href="#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#fed488] hover:bg-[#e9c176] text-[#334537] font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4 text-[#775a19]" />
          </a>

          <button
            id="hero-dosha-quiz-btn"
            onClick={onOpenQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold text-base transition-all hover:scale-[1.02] cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#fed488]" />
            <span>Discover Your Dosha</span>
          </button>
        </div>

        {/* 3 Pillars of Credibility Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-white shadow-sm hover:border-[#c5a059]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#c0d5c2]/20 flex items-center justify-center text-[#fed488] mb-3">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-medium text-white mb-1">
              100% Organic Medicated Oils
            </h3>
            <p className="text-xs text-[#eae8e4] leading-relaxed">
              Brewed slowly over brass vessels with 30+ wildcrafted Himalayan & Kerala botanicals.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-white shadow-sm hover:border-[#c5a059]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#c0d5c2]/20 flex items-center justify-center text-[#fed488] mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-medium text-white mb-1">
              Vaidya-Led Custom Protocols
            </h3>
            <p className="text-xs text-[#eae8e4] leading-relaxed">
              Daily pulse diagnosis (Nadi Pariksha) with personalized sequential therapy plans.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-white shadow-sm hover:border-[#c5a059]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#c0d5c2]/20 flex items-center justify-center text-[#fed488] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-medium text-white mb-1">
              Cellular Detox & Agni Reset
            </h3>
            <p className="text-xs text-[#eae8e4] leading-relaxed">
              Systematic elimination of deep metabolic waste (Ama) and restoration of vitality (Ojas).
            </p>
          </div>

        </div>

      </div>

      {/* Subtle bottom gradient transition to main page */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#fbf9f5] to-transparent pointer-events-none" />
    </section>
  );
};
