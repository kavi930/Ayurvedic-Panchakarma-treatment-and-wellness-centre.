import React, { useState } from 'react';
import { QUIZ_QUESTIONS, DOSHAS } from '../data/ayurvedaData';
import { QuizResult } from '../types';
import { X, Sparkles, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, Calendar, MessageCircle, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DoshaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgramWithDosha: (dosha: string) => void;
  onAskAIWithDosha: (dosha: string) => void;
}

export const DoshaQuizModal: React.FC<DoshaQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectProgramWithDosha,
  onAskAIWithDosha,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, 'Vata' | 'Pitta' | 'Kapha'>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  if (!isOpen) return null;

  const handleOptionSelect = (dosha: 'Vata' | 'Pitta' | 'Kapha') => {
    const questionId = QUIZ_QUESTIONS[currentStep].id;
    const updatedAnswers = { ...answers, [questionId]: dosha };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, 'Vata' | 'Pitta' | 'Kapha'>) => {
    let vCount = 0;
    let pCount = 0;
    let kCount = 0;

    Object.values(finalAnswers).forEach((d) => {
      if (d === 'Vata') vCount++;
      if (d === 'Pitta') pCount++;
      if (d === 'Kapha') kCount++;
    });

    const total = vCount + pCount + kCount || 1;
    const vPct = Math.round((vCount / total) * 100);
    const pPct = Math.round((pCount / total) * 100);
    const kPct = 100 - vPct - pPct;

    let dominant: QuizResult['dominantDosha'] = 'Vata';
    let summaryText = '';

    if (vPct >= 50) {
      dominant = 'Vata';
      summaryText = 'You have a predominant Vata constitution. Your physiology is governed by Space & Air, characterized by creativity, agility, and enthusiasm, with a tendency toward nervous exhaustion, dryness, and irregular digestion.';
    } else if (pPct >= 50) {
      dominant = 'Pitta';
      summaryText = 'You have a predominant Pitta constitution. Your physiology is driven by Fire & Water, characterized by a sharp intellect, high metabolism, and focused drive, with a tendency toward inflammation, acidity, and heat.';
    } else if (kPct >= 50) {
      dominant = 'Kapha';
      summaryText = 'You have a predominant Kapha constitution. Your physiology is anchored by Water & Earth, characterized by endurance, calm temperament, and natural immunity, with a tendency toward sluggish metabolism and water retention.';
    } else if (vPct >= 35 && pPct >= 35) {
      dominant = 'Vata-Pitta';
      summaryText = 'You possess a dual Vata-Pitta constitution, combining the creative agility of Vata with the sharp transformative metabolism of Pitta. You thrive with calming, moderately warming, and hydrating regimens.';
    } else if (pPct >= 35 && kPct >= 35) {
      dominant = 'Pitta-Kapha';
      summaryText = 'You possess a dual Pitta-Kapha constitution, blending intense drive and solid physical stamina. You benefit most from cooling, light, and mildly spicy regimens that prevent internal stagnation.';
    } else if (vPct >= 35 && kPct >= 35) {
      dominant = 'Vata-Kapha';
      summaryText = 'You possess a dual Vata-Kapha constitution, characterized by fluctuating energy and solid physical structure. Warmth and regular daily routine are your primary healing catalysts.';
    } else {
      dominant = 'Tridoshic';
      summaryText = 'You have a rare, harmoniously balanced Tridoshic constitution (Sama Dosha) where Vata, Pitta, and Kapha are evenly distributed. Seasonal adjustments (Ritucharya) are key to maintaining this equilibrium.';
    }

    const primaryKey = (dominant.includes('Pitta') && pPct > vPct) ? 'Pitta' : (dominant.includes('Kapha') && kPct > vPct) ? 'Kapha' : 'Vata';
    const info = DOSHAS[primaryKey];

    const quizRes: QuizResult = {
      dominantDosha: dominant,
      vataScore: vCount,
      pittaScore: pCount,
      kaphaScore: kCount,
      vataPercentage: vPct,
      pittaPercentage: pPct,
      kaphaPercentage: kPct,
      summary: summaryText,
      recommendations: {
        diet: info.balancingTips.diet,
        therapies: info.recommendedTherapies,
        lifestyle: info.balancingTips.lifestyle,
        herbs: info.balancingTips.herbs,
      }
    };

    setResult(quizRes);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#334537', '#fed488', '#c0d5c2']
      });
    } catch {
      // safe fallback
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];
  const progressPct = Math.round(((currentStep) / QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbf9f5] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e5e0d8] relative animate-scaleUp flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-[#e5e0d8] flex items-center justify-between sticky top-0 bg-[#fbf9f5]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fed488]/40 text-[#775a19] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#775a19] block">
                Prakriti Diagnostics
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-[#334537] font-medium">
                Ayurvedic Dosha Assessment
              </h3>
            </div>
          </div>

          <button
            id="close-quiz-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#efeeea] text-[#334537] flex items-center justify-center shadow-xs border border-[#e5e0d8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1">
          {!result ? (
            /* Quiz Active Step */
            <div className="space-y-6">
              
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-[#6b7280] font-medium mb-2">
                  <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{currentQ.category}</span>
                </div>
                <div className="w-full h-2 bg-[#efeeea] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#334537] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div>
                <h4 className="font-display text-xl sm:text-2xl text-[#334537] font-normal leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option, idx) => {
                  const isSelected = answers[currentQ.id] === option.dosha;

                  return (
                    <button
                      key={idx}
                      id={`quiz-option-${currentStep}-${option.dosha}`}
                      onClick={() => handleOptionSelect(option.dosha)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'bg-[#334537] text-white border-[#334537] shadow-md'
                          : 'bg-white text-[#37443a] border-[#e5e0d8] hover:border-[#334537]/50 hover:bg-[#f5f3ef]'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-[#fed488] text-[#334537] border-[#fed488]'
                            : 'border-[#c5a059] text-[#775a19]'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium leading-relaxed">
                          {option.text}
                        </p>
                        <span className={`text-[11px] block mt-1 ${isSelected ? 'text-[#eae8e4]' : 'text-[#6b7280]'}`}>
                          {option.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <div className="pt-4 flex justify-between items-center">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6b7280] hover:text-[#334537] py-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Question</span>
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-fadeIn">
              
              {/* Top Result Card */}
              <div className="text-center p-6 rounded-3xl bg-[#223025] text-white relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-radial from-[#334537] to-[#223025] opacity-90" />
                <div className="relative z-10 space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#fed488]">
                    Your Unique Prakriti Constitution
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-white font-medium">
                    {result.dominantDosha} Constitution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#efeeea] max-w-lg mx-auto leading-relaxed pt-1">
                    {result.summary}
                  </p>
                </div>
              </div>

              {/* Breakdown Percentages */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-4 rounded-2xl border border-[#e5e0d8] text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6b7280] block">Vata</span>
                  <span className="font-display text-2xl font-bold text-[#334537]">{result.vataPercentage}%</span>
                  <div className="w-full h-1.5 bg-[#efeeea] rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-[#8b9b8e]" style={{ width: `${result.vataPercentage}%` }} />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#e5e0d8] text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#775a19] block">Pitta</span>
                  <span className="font-display text-2xl font-bold text-[#775a19]">{result.pittaPercentage}%</span>
                  <div className="w-full h-1.5 bg-[#efeeea] rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-[#c5a059]" style={{ width: `${result.pittaPercentage}%` }} />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#e5e0d8] text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#223025] block">Kapha</span>
                  <span className="font-display text-2xl font-bold text-[#223025]">{result.kaphaPercentage}%</span>
                  <div className="w-full h-1.5 bg-[#efeeea] rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-[#334537]" style={{ width: `${result.kaphaPercentage}%` }} />
                  </div>
                </div>
              </div>

              {/* Recommended Therapies */}
              <div className="bg-white p-5 rounded-2xl border border-[#e5e0d8] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#334537] block">
                  Prescribed Classical Panchakarma Therapies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {result.recommendations.therapies.map((therapy, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#e1e6e2] text-[#334537] text-xs font-semibold"
                    >
                      {therapy}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dietary & Lifestyle Tips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-[#e5e0d8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                    Dietary Focus:
                  </span>
                  <ul className="space-y-1 text-xs text-[#57625a]">
                    {result.recommendations.diet.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#775a19]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#e5e0d8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                    Key Rasayana Herbs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {result.recommendations.herbs.map((herb, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#efeeea] text-[#334537] text-[11px] font-medium"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="quiz-book-with-dosha-btn"
                  onClick={() => {
                    onClose();
                    onSelectProgramWithDosha(result.dominantDosha);
                  }}
                  className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#334537] hover:bg-[#223025] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#fed488]" />
                  <span>Book Retreat for {result.dominantDosha}</span>
                </button>

                <button
                  id="quiz-ask-ai-btn"
                  onClick={() => {
                    onClose();
                    onAskAIWithDosha(result.dominantDosha);
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-[#e1e6e2] hover:bg-[#c0d5c2] text-[#334537] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask Vaidya About My Result</span>
                </button>

                <button
                  onClick={restartQuiz}
                  className="p-3 rounded-full hover:bg-[#efeeea] text-[#6b7280] transition-colors cursor-pointer"
                  title="Retake Quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
