import React, { useState } from 'react';
import { ASSETS, PANCHAKARMA_PHASES } from '../data/ayurvedaData';
import { CheckCircle2, ChevronRight, Sparkles, Clock, Compass, ShieldAlert } from 'lucide-react';

interface EssenceSectionProps {
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
}

export const EssenceSection: React.FC<EssenceSectionProps> = ({ onOpenQuiz, onOpenBooking }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PANCHAKARMA_PHASES[activePhaseIndex];

  return (
    <section id="essence" className="py-20 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e1e6e2] text-[#334537] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#775a19]" />
            <span>Classical Shodhana Chikitsa</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#334537] font-normal tracking-tight mb-4">
            The Essence of <span className="italic text-[#775a19]">Panchakarma</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6b7280] leading-relaxed">
            In Sanskrit, <span className="font-semibold text-[#334537]">Pancha</span> means "five" and <span className="font-semibold text-[#334537]">Karma</span> means "actions". It is not a generic spa treatment, but a precise, physician-guided biological reset that expels deep accumulated metabolic toxins (Ama).
          </p>
        </div>

        {/* 2-Column Editorial & Visual Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left Column: Authentic Herbal Imagery with Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#efeeea]">
              <img
                src={ASSETS.essenceBowl}
                alt="Herbs, sesame oil, and Ayurvedic brass bowls on rustic wood"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#223025]/80 via-transparent to-transparent" />
              
              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e5e0d8] shadow-lg">
                <p className="font-display text-sm italic text-[#334537] mb-1">
                  "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
                </p>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#775a19] font-medium">
                  — Charaka Samhita (1500 BCE)
                </span>
              </div>
            </div>

            {/* Decorative gold background accent */}
            <div className="absolute -top-4 -left-4 w-28 h-28 rounded-full border-2 border-[#c5a059]/40 -z-10 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#fed488]/30 rounded-full blur-2xl -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Deep Classical Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-[#334537] leading-snug">
                Why Classical Sequential Purification Outperforms Surface Detoxing
              </h3>
              <p className="text-base text-[#57625a] leading-relaxed">
                Every metabolic process generates waste. When the digestive fire (<span className="text-[#334537] font-semibold italic">Agni</span>) is dampened by stress, poor sleep, or incompatible food, this waste solidifies into sticky systemic sludge (<span className="text-[#775a19] font-semibold italic">Ama</span>) that lodges in micro-capillaries and joint capsules.
              </p>
              <p className="text-base text-[#57625a] leading-relaxed">
                Panchakarma operates in three mandatory scientific stages: softening the toxins via internal & external oleation, steering them to the central alimentary canal, and expelling them with zero biological strain.
              </p>
            </div>

            {/* 5 Core Pillars Badge Row */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#775a19] mb-3">
                The 5 Classical Karmas (Elimination Pathways):
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { name: 'Vamana', desc: 'Therapeutic Emesis (Kapha)', color: 'bg-[#e1e6e2] text-[#334537]' },
                  { name: 'Virechana', desc: 'Medicated Purgation (Pitta)', color: 'bg-[#fed488]/30 text-[#775a19]' },
                  { name: 'Basti', desc: 'Herbal Enemas (Vata)', color: 'bg-[#c0d5c2]/40 text-[#223025]' },
                  { name: 'Nasya', desc: 'Cranial Clearance', color: 'bg-[#efeeea] text-[#37443a]' },
                  { name: 'Raktamokshana', desc: 'Blood Purification', color: 'bg-[#e4e2de] text-[#334537]' },
                  { name: 'Rasayana', desc: 'Cellular Longevity', color: 'bg-[#d7e6d8] text-[#334537]' }
                ].map((item, idx) => (
                  <div key={idx} className={`p-2.5 rounded-xl border border-[#e5e0d8] ${item.color}`}>
                    <span className="block font-display font-medium text-xs sm:text-sm">{item.name}</span>
                    <span className="block text-[11px] opacity-85">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="essence-quiz-trigger-btn"
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#334537] hover:bg-[#223025] text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Find Your Detox Protocol</span>
                <ChevronRight className="w-4 h-4 text-[#fed488]" />
              </button>
              <button
                id="essence-book-trigger-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#334537]/30 hover:bg-[#334537]/5 text-[#334537] font-medium text-sm transition-all"
              >
                <span>Book Doctor Consultation</span>
              </button>
            </div>

          </div>

        </div>

        {/* Interactive 3-Phase Roadmap Explorer */}
        <div className="bg-[#f5f3ef] rounded-3xl p-6 sm:p-10 border border-[#e5e0d8] shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e5e0d8]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#775a19]">
                The Three-Stage Journey
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#334537] font-normal mt-1">
                Classical Protocol Timeline
              </h3>
            </div>

            {/* Phase Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#efeeea] rounded-full border border-[#e5e0d8]">
              {PANCHAKARMA_PHASES.map((p, idx) => (
                <button
                  key={idx}
                  id={`phase-tab-${idx}`}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activePhaseIndex === idx
                      ? 'bg-[#334537] text-white shadow-sm'
                      : 'text-[#6b7280] hover:text-[#334537]'
                  }`}
                >
                  <span className="font-semibold">{idx + 1}.</span> {p.phase.split(':')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#fed488] text-[#785a1a] text-xs font-bold uppercase tracking-wider">
                  {activePhase.phase}
                </span>
                <span className="text-xs text-[#6b7280] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {activePhase.duration}
                </span>
              </div>

              <h4 className="font-display text-2xl text-[#334537] font-medium">
                {activePhase.title} <span className="font-serif italic text-lg text-[#775a19]">({activePhase.sanskrit})</span>
              </h4>

              <p className="text-base text-[#57625a] leading-relaxed">
                {activePhase.description}
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#e5e0d8] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#334537] block">
                  Core Clinical Objective:
                </span>
                <p className="text-sm text-[#37443a] italic">
                  "{activePhase.purpose}"
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-[#e5e0d8] shadow-sm space-y-4">
              <h5 className="font-display text-base font-semibold text-[#334537] border-b border-[#efeeea] pb-2">
                Prescribed Therapies & Rituals:
              </h5>
              <div className="space-y-3">
                {activePhase.keyTreatments.map((treatment, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e1e6e2] text-[#334537] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#334537]" />
                    </div>
                    <span className="text-sm text-[#37443a] leading-snug">{treatment}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-2">
                <a
                  href="#therapies"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#efeeea] hover:bg-[#e4e2de] text-xs font-semibold text-[#334537] transition-colors"
                >
                  <span>Explore Therapies Catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
