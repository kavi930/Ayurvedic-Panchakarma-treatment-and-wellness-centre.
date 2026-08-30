import React, { useState } from 'react';
import { PROGRAMS, THERAPIES } from '../data/ayurvedaData';
import { BookingForm } from '../types';
import { X, Calendar, MapPin, CheckCircle2, Sparkles, User, Mail, Phone, Home, HeartPulse, Download, FileCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  initialTherapyId?: string;
  initialDosha?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProgramId,
  initialTherapyId,
  initialDosha,
}) => {
  const [formData, setFormData] = useState<BookingForm>({
    programId: initialProgramId || (initialTherapyId ? undefined : PROGRAMS[0].id),
    therapyId: initialTherapyId,
    fullName: '',
    email: '',
    phone: '',
    startDate: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
    durationDays: 7,
    retreatLocation: 'Kerala Backwaters Sanctuary',
    knownDosha: initialDosha || 'Undetermined',
    healthGoals: ['Cellular Detox & Agni Reset', 'Stress Reduction & Deep Sleep'],
    roomType: 'Deluxe Garden Villa',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');

  if (!isOpen) return null;

  const healthGoalOptions = [
    'Cellular Detox & Agni Reset',
    'Stress Reduction & Deep Sleep',
    'Joint Pain & Mobility',
    'Metabolic & Weight Rebalance',
    'Digestive Restoration (Gut Health)',
    'Radiant Skin & Longevity (Rasayana)'
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const exists = prev.healthGoals.includes(goal);
      return {
        ...prev,
        healthGoals: exists
          ? prev.healthGoals.filter((g) => g !== goal)
          : [...prev.healthGoals, goal],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newConfId = `VEDA-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationId(newConfId);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#c5a059', '#334537', '#fed488']
      });
    } catch {
      // ignore
    }
  };

  const selectedProg = PROGRAMS.find((p) => p.id === formData.programId);
  const selectedTherapy = THERAPIES.find((t) => t.id === formData.therapyId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbf9f5] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#e5e0d8] relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-[#e5e0d8] flex items-center justify-between sticky top-0 bg-[#fbf9f5]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#334537] text-[#fed488] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#775a19] block">
                Sanctuary Reservation
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-[#334537] font-medium">
                {isSubmitted ? 'Reservation Confirmed' : 'Book Your Healing Retreat'}
              </h3>
            </div>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#efeeea] text-[#334537] flex items-center justify-center shadow-xs border border-[#e5e0d8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Sanctuary Location Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                  1. Select Sanctuary Destination:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Kerala Backwaters Sanctuary', desc: 'Coastal Kerala • Cradle of Classical Ayurveda' },
                    { name: 'Himalayan Foothills Sanctuary', desc: 'Rishikesh Valley • Pranic Pine Forests & Ganges' }
                  ].map((loc) => (
                    <button
                      key={loc.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, retreatLocation: loc.name as any })}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        formData.retreatLocation === loc.name
                          ? 'bg-[#334537] text-white border-[#334537] shadow-sm'
                          : 'bg-white text-[#37443a] border-[#e5e0d8] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      <MapPin className={`w-4 h-4 flex-shrink-0 mt-0.5 ${formData.retreatLocation === loc.name ? 'text-[#fed488]' : 'text-[#775a19]'}`} />
                      <div>
                        <span className="font-semibold text-xs block">{loc.name}</span>
                        <span className={`text-[11px] block mt-0.5 ${formData.retreatLocation === loc.name ? 'text-[#eae8e4]' : 'text-[#6b7280]'}`}>
                          {loc.desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Program or Therapy Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                  2. Choose Retreat Program or Therapy:
                </label>
                <select
                  value={formData.programId || formData.therapyId || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.startsWith('program-')) {
                      setFormData({ ...formData, programId: val, therapyId: undefined });
                    } else {
                      setFormData({ ...formData, therapyId: val, programId: undefined });
                    }
                  }}
                  className="w-full p-3.5 rounded-xl bg-white border border-[#e5e0d8] text-sm text-[#37443a] focus:border-[#334537] outline-none shadow-2xs"
                >
                  <optgroup label="Multi-Day Immersive Retreat Programs">
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.durationLabel} - from {p.priceStarting})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Individual Classical Therapies (Single Session)">
                    {THERAPIES.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.sanskritName}) - {t.duration} ({t.priceEstimate})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Dates & Accommodation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-1.5">
                    Preferred Arrival Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-[#e5e0d8] text-xs sm:text-sm text-[#37443a] focus:border-[#334537] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-1.5">
                    Villa & Suite Category:
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value as any })}
                    className="w-full p-3 rounded-xl bg-white border border-[#e5e0d8] text-xs sm:text-sm text-[#37443a] focus:border-[#334537] outline-none"
                  >
                    <option value="Deluxe Garden Villa">Deluxe Garden Villa (Botanical Views)</option>
                    <option value="Ayurvedic Heritage Suite">Ayurvedic Heritage Suite (Teak Wood & Verandah)</option>
                    <option value="Serenity River Pavilion">Serenity River Pavilion (Private Treatment Deck)</option>
                  </select>
                </div>
              </div>

              {/* Health Goals Checklist */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                  3. Primary Health Objectives:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {healthGoalOptions.map((goal) => {
                    const isChecked = formData.healthGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => handleGoalToggle(goal)}
                        className={`p-2.5 rounded-xl border text-left text-xs flex items-center gap-2 transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#e1e6e2] text-[#334537] border-[#334537]/40 font-medium'
                            : 'bg-white text-[#57625a] border-[#e5e0d8] hover:bg-[#efeeea]'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isChecked ? 'text-[#334537]' : 'text-gray-300'}`} />
                        <span>{goal}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest Personal Information */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#334537] block mb-2">
                  4. Guest Contact Details:
                </label>
                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-[#e5e0d8] text-xs sm:text-sm text-[#37443a] focus:border-[#334537] outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-[#e5e0d8] text-xs sm:text-sm text-[#37443a] focus:border-[#334537] outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number (WhatsApp preferred)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-[#e5e0d8] text-xs sm:text-sm text-[#37443a] focus:border-[#334537] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#e5e0d8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#6b7280]">
                  <span>Includes all doctor consultations, daily therapies & sattvic meals.</span>
                </div>

                <button
                  type="submit"
                  id="confirm-booking-submit-btn"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#334537] hover:bg-[#223025] text-white text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#fed488]" />
                  <span>Confirm Sanctuary Reservation</span>
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Voucher Screen */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#e1e6e2] text-[#334537] flex items-center justify-center mx-auto shadow-inner border border-[#334537]/20">
                <FileCheck className="w-8 h-8 text-[#334537]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#775a19]">
                  Voucher Confirmation ID: {confirmationId}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl text-[#334537]">
                  Namaste, {formData.fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-[#57625a]">
                  Your reservation request has been confirmed at our <strong className="text-[#334537]">{formData.retreatLocation}</strong>. Our senior Vaidya medical coordinator will contact you at <strong>{formData.email}</strong> to review your pre-arrival health questionnaire.
                </p>
              </div>

              {/* Summary Receipt Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#e5e0d8] text-left text-xs space-y-3 max-w-md mx-auto shadow-2xs">
                <div className="flex justify-between border-b border-[#efeeea] pb-2">
                  <span className="text-[#6b7280]">Program / Therapy:</span>
                  <span className="font-semibold text-[#334537]">{selectedProg?.title || selectedTherapy?.name || 'Ayurvedic Retreat'}</span>
                </div>
                <div className="flex justify-between border-b border-[#efeeea] pb-2">
                  <span className="text-[#6b7280]">Arrival Date:</span>
                  <span className="font-semibold text-[#334537]">{formData.startDate}</span>
                </div>
                <div className="flex justify-between border-b border-[#efeeea] pb-2">
                  <span className="text-[#6b7280]">Suite:</span>
                  <span className="font-semibold text-[#334537]">{formData.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Known Dosha:</span>
                  <span className="font-semibold text-[#775a19]">{formData.knownDosha}</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-[#334537] hover:bg-[#223025] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                >
                  Done & Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
