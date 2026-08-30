import React, { useState } from 'react';
import { PROGRAMS, ASSETS } from '../data/ayurvedaData';
import { Program } from '../types';
import { Sparkles, Calendar, Clock, CheckCircle2, ArrowRight, Utensils, HeartPulse, ChevronDown, ChevronUp } from 'lucide-react';

interface ProgramsSectionProps {
  onBookProgram: (programId: string) => void;
  onOpenAssistant: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onBookProgram, onOpenAssistant }) => {
  const [expandedScheduleId, setExpandedScheduleId] = useState<string | null>(PROGRAMS[0].id);

  const toggleSchedule = (id: string) => {
    setExpandedScheduleId(expandedScheduleId === id ? null : id);
  };

  return (
    <section id="programs" className="py-20 bg-[#efeeea] relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#c0d5c2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#fed488]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fed488]/30 text-[#775a19] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Doctor-Led Immersions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#334537] font-normal tracking-tight mb-4">
            Curated <span className="italic text-[#775a19]">Retreat Programs</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6b7280] leading-relaxed">
            All-inclusive residential healing retreats at our serene Kerala Backwaters and Himalayan Foothills sanctuaries. Complete with daily pulse diagnostics, bespoke Sattvic cuisine, and private therapeutic suites.
          </p>
        </div>

        {/* Programs Cards List */}
        <div className="space-y-12 mb-16">
          {PROGRAMS.map((program, idx) => {
            const isExpanded = expandedScheduleId === program.id;

            return (
              <div
                key={program.id}
                id={`program-card-${program.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5e0d8] shadow-sm hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Program Imagery */}
                  <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] bg-[#223025]">
                    <img
                      src={program.imageUrl}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#223025]/90 via-[#223025]/30 to-transparent" />
                    
                    {/* Floating Duration Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#fed488] text-[#785a1a] text-xs font-bold uppercase tracking-wider shadow-md">
                        {program.durationLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs text-[#d4c8b8] uppercase tracking-wider block mb-1">
                        All-Inclusive Immersion
                      </span>
                      <h4 className="font-display text-2xl font-medium text-white mb-1">
                        {program.title}
                      </h4>
                      <p className="text-xs text-[#eae8e4]">
                        Starting at <span className="text-[#fed488] font-bold text-sm">{program.priceStarting}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right Column: In-Depth Program Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#775a19]">
                          {program.subtitle}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-[#57625a] leading-relaxed mb-4">
                        {program.description}
                      </p>

                      <div className="p-3 rounded-xl bg-[#efeeea] border border-[#e5e0d8] text-xs text-[#37443a] mb-5">
                        <span className="font-bold text-[#334537]">Recommended For: </span>
                        <span>{program.idealFor}</span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block">
                          Retreat Inclusions & Highlights:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {program.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-[#57625a]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#334537] flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dietary Approach */}
                      <div className="flex items-start gap-2.5 text-xs text-[#57625a] bg-amber-50/70 p-3 rounded-xl border border-amber-200">
                        <Utensils className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
                            Ayurvedic Culinary Therapy:
                          </span>
                          <span>{program.dietaryPlan}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions & Itinerary Toggle */}
                    <div className="pt-4 border-t border-[#efeeea] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <button
                        id={`toggle-schedule-${program.id}`}
                        onClick={() => toggleSchedule(program.id)}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#775a19] hover:text-[#334537] py-2 cursor-pointer transition-colors"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'Hide Daily Dinacharya Itinerary' : 'View Daily Dinacharya Itinerary'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        id={`book-program-btn-${program.id}`}
                        onClick={() => onBookProgram(program.id)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#334537] hover:bg-[#223025] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-[#fed488]" />
                        <span>Reserve This Retreat</span>
                      </button>
                    </div>

                  </div>

                </div>

                {/* Expandable Daily Dinacharya Schedule */}
                {isExpanded && (
                  <div className="border-t border-[#e5e0d8] bg-[#fbf9f5] p-6 sm:p-8 animate-fadeIn">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h5 className="font-display text-lg font-semibold text-[#334537]">
                            Sample Daily Schedule (Dinacharya)
                          </h5>
                          <p className="text-xs text-[#6b7280]">
                            Structured to synchronize biological circadian rhythms with natural solar hours.
                          </p>
                        </div>
                        <span className="text-xs font-serif italic text-[#775a19]">
                          Brahma Muhurta to Nidra
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {program.dailySchedule.map((item, sIdx) => {
                          const badgeColor =
                            item.category === 'therapy'
                              ? 'bg-[#c0d5c2]/40 text-[#223025] border-[#c0d5c2]'
                              : item.category === 'yoga'
                              ? 'bg-[#fed488]/30 text-[#785a1a] border-[#fed488]'
                              : item.category === 'diet'
                              ? 'bg-amber-100 text-amber-900 border-amber-200'
                              : 'bg-white text-[#37443a] border-[#e5e0d8]';

                          return (
                            <div
                              key={sIdx}
                              className={`p-3.5 rounded-2xl border ${badgeColor} shadow-2xs flex flex-col justify-between`}
                            >
                              <span className="text-[11px] font-mono font-bold tracking-wider opacity-80 mb-1 block">
                                {item.time}
                              </span>
                              <span className="text-xs font-medium leading-snug">
                                {item.activity}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Custom Consultation CTA Banner with texture */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#334537] text-white p-8 sm:p-12 border border-[#c5a059]/40">
          <div className="absolute inset-0 z-0">
            <img
              src={ASSETS.ctaTexture}
              alt="Ayurvedic Brass Bell Texture"
              className="w-full h-full object-cover opacity-20 filter contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#223025]/90 via-[#334537]/85 to-[#223025]/90" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#fed488] text-xs font-semibold uppercase tracking-wider">
              <span>Bespoke Ayurvedic Medicine</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl text-white font-normal">
              Need a Custom Protocol for Specific Health Conditions?
            </h3>
            <p className="text-xs sm:text-base text-[#efeeea] leading-relaxed">
              Our Senior Vaidyas formulate tailored protocols for chronic inflammation, metabolic disorders, arthritis, hormonal imbalances, and post-viral rehabilitation.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                id="programs-ask-ai-cta-btn"
                onClick={onOpenAssistant}
                className="px-6 py-3 rounded-full bg-[#fed488] hover:bg-[#e9c176] text-[#334537] font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Ask AI Vaidya a Question</span>
              </button>
              <button
                id="programs-custom-consult-btn"
                onClick={() => onBookProgram('custom-consult')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>Schedule Doctor Consultation</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
