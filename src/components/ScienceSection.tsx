import React, { useState } from 'react';
import { ASSETS, DOSHAS, SCIENCE_PILLARS } from '../data/ayurvedaData';
import { Sparkles, Flame, Brain, Activity, Wind, Droplets, Mountain, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ScienceSectionProps {
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
}

export const ScienceSection: React.FC<ScienceSectionProps> = ({ onOpenQuiz, onOpenBooking }) => {
  const [selectedDoshaKey, setSelectedDoshaKey] = useState<'Vata' | 'Pitta' | 'Kapha'>('Vata');
  const selectedDosha = DOSHAS[selectedDoshaKey];

  return (
    <section id="science" className="py-20 bg-[#efeeea] relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c0d5c2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fed488]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Banner for The Science matching Image 3 */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 border border-[#e5e0d8] bg-[#223025]">
          <div className="absolute inset-0">
            <img
              src={ASSETS.scienceHero}
              alt="Pouring warm medicated herbal oil into a classical copper vessel"
              className="w-full h-full object-cover opacity-35 filter contrast-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#223025] via-[#223025]/90 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fed488]/20 border border-[#fed488]/40 text-[#fed488] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3 text-[#fed488]" />
              <span>Evidence-Based Longevity</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
              The Science of Longevity: Classical Ayurveda Reimagined
            </h2>
            <p className="text-sm sm:text-base text-[#eae8e4] leading-relaxed mb-6">
              Modern systems biology confirms what Vedic Rishis mapped 5,000 years ago: human physiology is governed by circadian biorhythms, personalized metabolic rates, and gut-centered neurochemistry.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                id="science-quiz-btn"
                onClick={onOpenQuiz}
                className="px-5 py-2.5 rounded-full bg-[#fed488] hover:bg-[#e9c176] text-[#334537] text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Assess Your Bio-Type</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Scientific Pillars Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#775a19] block mb-1">
              Cellular Mechanisms
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#334537]">
              How Panchakarma Interacts with Human Biology
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCIENCE_PILLARS.map((pillar, idx) => {
              const icons = [Sparkles, Flame, Brain, Activity];
              const IconComp = icons[idx % icons.length];

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#e5e0d8] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#e1e6e2] text-[#334537] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display text-base font-semibold text-[#334537]">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-[#775a19] bg-[#fed488]/30 px-2 py-0.5 rounded-md inline-block mb-3 font-medium">
                      {pillar.scientificCorrelate}
                    </span>
                    <p className="text-xs sm:text-sm text-[#57625a] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#efeeea] flex items-center justify-between text-xs text-[#775a19] font-medium font-serif italic">
                    <span>{pillar.sanskrit}</span>
                    <span>Vedic Shastra</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tridosha Elemental Constitution Explorer */}
        <div className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-10 border border-[#e5e0d8] shadow-sm">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#e5e0d8]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fed488]/30 text-[#775a19] text-xs font-semibold uppercase tracking-wider mb-2">
                <span>The Tridosha Framework</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#334537]">
                Understand Your Dominant Bio-Energy (Prakriti)
              </h3>
              <p className="text-sm text-[#6b7280] mt-1 max-w-xl">
                Every individual is born with a distinct ratio of Vata, Pitta, and Kapha. Identifying your baseline constitution allows precision medicine and dietary optimization.
              </p>
            </div>

            {/* Dosha Selector Pills */}
            <div className="flex gap-2 p-1.5 bg-[#efeeea] rounded-2xl border border-[#e5e0d8] self-start lg:self-center">
              {(['Vata', 'Pitta', 'Kapha'] as const).map((doshaKey) => {
                const info = DOSHAS[doshaKey];
                const isSelected = selectedDoshaKey === doshaKey;
                const DoshaIcon = doshaKey === 'Vata' ? Wind : doshaKey === 'Pitta' ? Flame : Droplets;

                return (
                  <button
                    key={doshaKey}
                    id={`dosha-tab-${doshaKey.toLowerCase()}`}
                    onClick={() => setSelectedDoshaKey(doshaKey)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#334537] text-white shadow-md'
                        : 'text-[#57625a] hover:bg-white/60'
                    }`}
                  >
                    <DoshaIcon className={`w-4 h-4 ${isSelected ? 'text-[#fed488]' : 'text-[#775a19]'}`} />
                    <span>{info.name}</span>
                    <span className="text-xs opacity-75 font-serif italic hidden sm:inline">({info.sanskrit})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Dosha Detailed Overview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Overview & Characteristics */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#775a19] bg-[#fed488]/40 px-3 py-1 rounded-full">
                  Elements: {selectedDosha.elements}
                </span>
                <span className="text-xs text-[#6b7280]">
                  Qualities: {selectedDosha.qualities.join(' • ')}
                </span>
              </div>

              <div>
                <h4 className="font-display text-2xl text-[#334537] mb-2 font-medium">
                  {selectedDosha.name} Bio-Governance
                </h4>
                <p className="text-sm sm:text-base text-[#57625a] leading-relaxed">
                  {selectedDosha.governance}
                </p>
              </div>

              {/* Traits checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#e5e0d8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                    Physical Traits:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#57625a]">
                    {selectedDosha.physicalTraits.map((trait, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#775a19] mt-0.5">•</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e5e0d8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                    Mental & Temperament:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#57625a]">
                    {selectedDosha.mentalTraits.map((trait, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#775a19] mt-0.5">•</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Signs of Imbalance */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Signs of {selectedDosha.name} Imbalance (Vikriti):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-950">
                  {selectedDosha.signsOfImbalance.map((sign, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Balancing Wisdom & Protocol */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-[#e5e0d8] shadow-sm space-y-6 flex flex-col justify-between">
              
              <div className="space-y-5">
                <h4 className="font-display text-lg font-semibold text-[#334537] border-b border-[#efeeea] pb-2 flex items-center justify-between">
                  <span>How to Balance {selectedDosha.name}</span>
                  <span className="text-xs font-sans text-[#775a19] font-normal">Naturopathic Recommendations</span>
                </h4>

                {/* Dietary Tips */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                    1. Therapeutic Dietary Guidelines:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {selectedDosha.balancingTips.diet.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#57625a]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#334537] flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifestyle Tips */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                    2. Daily Lifestyle (Dinacharya):
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {selectedDosha.balancingTips.lifestyle.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#57625a]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#334537] flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Classical Herbs */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                    3. Key Classical Botanicals (Rasayanas):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedDosha.balancingTips.herbs.map((herb, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#efeeea] text-[#334537] text-xs font-medium border border-[#e5e0d8]"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#efeeea] flex items-center justify-between">
                <span className="text-xs text-[#6b7280]">
                  Unsure of your exact ratio?
                </span>
                <button
                  id="science-take-quiz-footer-btn"
                  onClick={onOpenQuiz}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#775a19] hover:text-[#334537] cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Complete Assessment</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
