import React, { useState } from 'react';
import { THERAPIES } from '../data/ayurvedaData';
import { Therapy } from '../types';
import { Sparkles, Clock, CheckCircle2, ArrowRight, Eye, Calendar, Filter } from 'lucide-react';

interface TherapiesSectionProps {
  onSelectTherapy: (therapy: Therapy) => void;
  onBookTherapy: (therapyId: string) => void;
}

export const TherapiesSection: React.FC<TherapiesSectionProps> = ({
  onSelectTherapy,
  onBookTherapy,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Classical Therapies' },
    { id: 'nervous', label: 'Mind & Nervous System' },
    { id: 'rejuvenation', label: 'Full-Body Oleation & Rejuvenation' },
    { id: 'detox', label: 'Deep Cellular Detox' },
    { id: 'metabolic', label: 'Metabolic & Lymphatic' },
  ];

  const filteredTherapies = selectedCategory === 'all'
    ? THERAPIES
    : THERAPIES.filter((t) => t.category === selectedCategory);

  return (
    <section id="therapies" className="py-20 bg-[#fbf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e1e6e2] text-[#334537] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#775a19]" />
            <span>Sacred Ayurvedic Modalities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#334537] font-normal tracking-tight mb-4">
            Classical <span className="italic text-[#775a19]">Therapies</span> Catalog
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6b7280] leading-relaxed">
            Each therapy is formulated using classical Charaka Samhita manuscripts, employing warm copper-decocted herbal oils and synchronized dual-therapist hands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#334537] text-white shadow-sm'
                  : 'bg-[#efeeea] text-[#6b7280] hover:bg-[#e4e2de] hover:text-[#334537]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Therapies Grid matching Image 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTherapies.map((therapy) => (
            <div
              key={therapy.id}
              id={`therapy-card-${therapy.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e5e0d8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-[#223025]">
                  <img
                    src={therapy.imageUrl}
                    alt={therapy.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#223025]/85 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#334537] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {therapy.duration}
                    </span>
                    {therapy.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#fed488] text-[#785a1a] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-2xl font-medium text-white flex items-center gap-2">
                      <span>{therapy.name}</span>
                      <span className="font-serif italic text-lg text-[#fed488]">({therapy.sanskritName})</span>
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#775a19] uppercase tracking-wider block mb-1">
                      {therapy.tagline}
                    </span>
                    <p className="text-xs sm:text-sm text-[#57625a] leading-relaxed line-clamp-3">
                      {therapy.description}
                    </p>
                  </div>

                  {/* Dosha Affinities */}
                  <div>
                    <span className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider block mb-1.5">
                      Ideal Constitution:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {therapy.idealDosha.map((dosha) => (
                        <span
                          key={dosha}
                          className="px-2.5 py-0.5 rounded-full bg-[#e1e6e2] text-[#334537] text-[11px] font-medium"
                        >
                          {dosha} Pacifier
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits List */}
                  <div className="pt-2 border-t border-[#efeeea]">
                    <span className="text-[11px] font-bold text-[#334537] uppercase tracking-wider block mb-2">
                      Key Clinical Actions:
                    </span>
                    <div className="space-y-1.5">
                      {therapy.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#57625a]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#334537] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-[#efeeea] flex items-center justify-between gap-3 mt-4">
                <button
                  id={`view-protocol-${therapy.id}`}
                  onClick={() => onSelectTherapy(therapy)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#775a19] hover:text-[#334537] py-2 cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Protocol</span>
                </button>

                <button
                  id={`book-therapy-btn-${therapy.id}`}
                  onClick={() => onBookTherapy(therapy.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#334537] hover:bg-[#223025] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#fed488]" />
                  <span>Book Therapy</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
