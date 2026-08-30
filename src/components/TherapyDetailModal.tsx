import React from 'react';
import { Therapy } from '../types';
import { X, Clock, CheckCircle2, AlertCircle, Leaf, Sparkles, Calendar } from 'lucide-react';

interface TherapyDetailModalProps {
  therapy: Therapy | null;
  onClose: () => void;
  onBook: (therapyId: string) => void;
}

export const TherapyDetailModal: React.FC<TherapyDetailModalProps> = ({ therapy, onClose, onBook }) => {
  if (!therapy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbf9f5] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e5e0d8] relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-therapy-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#334537] flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-[#223025]">
          <img
            src={therapy.imageUrl}
            alt={therapy.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#223025] via-[#223025]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#fed488]">
                Classical Therapy
              </span>
              <span className="text-xs text-[#d4c8b8]">•</span>
              <span className="text-xs text-[#d4c8b8] flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {therapy.duration}
              </span>
            </div>
            <h3 className="font-display text-3xl font-medium text-white flex items-center gap-3">
              <span>{therapy.name}</span>
              <span className="font-serif italic text-xl text-[#fed488]">({therapy.sanskritName})</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#efeeea] font-normal mt-1">
              {therapy.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Summary & Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e5e0d8]">
            <div>
              <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider block">
                Target Doshas:
              </span>
              <div className="flex gap-1.5 mt-1">
                {therapy.idealDosha.map((dosha) => (
                  <span
                    key={dosha}
                    className="px-2.5 py-0.5 rounded-md bg-[#e1e6e2] text-[#334537] text-xs font-semibold"
                  >
                    Pacifies {dosha}
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:text-right">
              <span className="text-xs text-[#6b7280] block">Estimated Session Investment</span>
              <span className="font-display text-lg font-bold text-[#775a19]">{therapy.priceEstimate}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-display text-base font-semibold text-[#334537] mb-2">
              Clinical & Therapeutic Overview
            </h4>
            <p className="text-sm text-[#57625a] leading-relaxed">
              {therapy.description}
            </p>
          </div>

          {/* Step-by-Step Protocol */}
          <div>
            <h4 className="font-display text-base font-semibold text-[#334537] mb-3">
              Step-by-Step Treatment Protocol
            </h4>
            <div className="space-y-2.5">
              {therapy.protocolSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f3ef] border border-[#e5e0d8]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#334537] text-[#fed488] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#334537] uppercase tracking-wide">
                      {step.title}
                    </h5>
                    <p className="text-xs text-[#57625a] mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="font-display text-base font-semibold text-[#334537] mb-2">
              Key Health Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {therapy.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#57625a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#334537] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Botanical Formulations */}
          <div className="p-4 rounded-xl bg-white border border-[#e5e0d8]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#775a19] flex items-center gap-1.5 mb-2">
              <Leaf className="w-3.5 h-3.5" />
              <span>Prescribed Herbal Oils & Decoctions:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {therapy.keyHerbs.map((herb, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-[#efeeea] text-[#334537] text-xs font-medium"
                >
                  {herb}
                </span>
              ))}
            </div>
          </div>

          {/* Contraindications Warning */}
          {therapy.contraindications.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase tracking-wider block mb-0.5">Clinical Contraindications:</span>
                <span>{therapy.contraindications.join(' • ')}. (A pre-treatment pulse diagnosis with our doctor will verify safety).</span>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#e5e0d8] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#334537]/30 text-xs font-semibold text-[#334537] hover:bg-[#efeeea] transition-colors"
            >
              Close
            </button>
            <button
              id="modal-book-therapy-btn"
              onClick={() => {
                onClose();
                onBook(therapy.id);
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#334537] hover:bg-[#223025] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#fed488]" />
              <span>Book This Therapy</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
