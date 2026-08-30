import React, { useState } from 'react';
import { SunMedium, Sparkles, MapPin, Mail, Phone, Heart, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
  onOpenAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuiz, onOpenBooking, onOpenAssistant }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="sanctuary-footer" className="bg-[#223025] text-white pt-16 pb-12 border-t border-[#334537] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sanskrit Peace Shloka Ribbon */}
        <div className="text-center py-6 px-4 rounded-2xl bg-white/5 border border-white/10 mb-14 max-w-3xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-[#fed488] mb-1">
            "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।"
          </p>
          <p className="text-xs text-[#d4c8b8] tracking-widest uppercase">
            "May all beings be peaceful. May all beings be free from illness. May good prevail everywhere."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center bg-[#334537] text-[#fed488]">
                <SunMedium className="w-5 h-5" />
              </div>
              <span className="font-display text-2xl font-semibold tracking-wider text-white">
                VEDA<span className="text-[#fed488]">SANCTUM</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#eae8e4] leading-relaxed">
              VedaSanctum is a premier holistic hospital and Panchakarma retreat sanctuary dedicated to classical Ayurvedic clinical healing, longevity science, and personalized rejuvenation.
            </p>
            <div className="pt-2 text-xs text-[#d4c8b8] space-y-1">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fed488]"></span>
                <span>Ministry of AYUSH Recognized Hospital</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fed488]"></span>
                <span>NABH Certified Holistic Health Sanctuary</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-base font-semibold text-[#fed488] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#d4c8b8]">
              <li>
                <a href="#essence" className="hover:text-white transition-colors">
                  Essence of Panchakarma
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  The Science of Longevity
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-white transition-colors">
                  Classical Therapies Catalog
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Multi-Day Retreat Immersions
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Dosha Assessment Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Sanctuary Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-semibold text-[#fed488] uppercase tracking-wider">
              Sanctuary Retreats
            </h4>
            <div className="space-y-3 text-xs text-[#eae8e4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fed488] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Kerala Backwaters Sanctuary</span>
                  <span className="text-[#d4c8b8]">Kumarakom Lakefront, Kottayam, Kerala 686563</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#fed488] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Himalayan Valley Sanctuary</span>
                  <span className="text-[#d4c8b8]">Tapovan Riverside, Rishikesh, Uttarakhand 249192</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / Journal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-semibold text-[#fed488] uppercase tracking-wider">
              Ayurveda Gazette
            </h4>
            <p className="text-xs text-[#eae8e4]">
              Receive monthly seasonal Dinacharya guides, Sattvic recipes, and herbal longevity insights.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:border-[#fed488] outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#fed488] hover:bg-[#e9c176] text-[#334537] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Subscribe to Gazette
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-white/10 border border-[#fed488]/40 text-xs text-[#fed488] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#fed488]" />
                <span>Thank you for joining our Vedic wellness circle!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#d4c8b8] gap-4">
          <p>© {new Date().getFullYear()} VedaSanctum Ayurvedic Health & Research Retreats. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenAssistant} className="hover:text-white transition-colors cursor-pointer">
              Ask AI Vaidya
            </button>
            <span>•</span>
            <button onClick={onOpenBooking} className="hover:text-white transition-colors cursor-pointer">
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
