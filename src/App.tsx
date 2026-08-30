import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EssenceSection } from './components/EssenceSection';
import { ScienceSection } from './components/ScienceSection';
import { TherapiesSection } from './components/TherapiesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { Footer } from './components/Footer';
import { DoshaQuizModal } from './components/DoshaQuizModal';
import { TherapyDetailModal } from './components/TherapyDetailModal';
import { BookingModal } from './components/BookingModal';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { Therapy } from './types';
import { ASSETS } from './data/ayurvedaData';
import { MessageCircle, Sparkles, Calendar } from 'lucide-react';

export function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [selectedTherapyForDetail, setSelectedTherapyForDetail] = useState<Therapy | null>(null);
  const [bookingProgramId, setBookingProgramId] = useState<string | undefined>(undefined);
  const [bookingTherapyId, setBookingTherapyId] = useState<string | undefined>(undefined);
  const [userDosha, setUserDosha] = useState<string | undefined>(undefined);
  const [assistantInitialQuery, setAssistantInitialQuery] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('sanctuary');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sanctuary', 'essence', 'science', 'therapies', 'programs'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingForProgram = (programId: string) => {
    setBookingProgramId(programId);
    setBookingTherapyId(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenBookingForTherapy = (therapyId: string) => {
    setBookingTherapyId(therapyId);
    setBookingProgramId(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectProgramWithDosha = (dosha: string) => {
    setUserDosha(dosha);
    setBookingProgramId(undefined);
    setBookingTherapyId(undefined);
    setIsBookingOpen(true);
  };

  const handleAskAIWithDosha = (dosha: string) => {
    setUserDosha(dosha);
    setAssistantInitialQuery(`Namaste Acharya. My Dosha assessment indicates I am predominantly ${dosha}. What classical Panchakarma therapies and herbs do you recommend for my constitution?`);
    setIsAssistantOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#37443a] flex flex-col relative selection:bg-[#c0d5c2] selection:text-[#334537]">
      
      {/* Top Fixed Header */}
      <Header
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenBooking={() => {
          setBookingProgramId(undefined);
          setBookingTherapyId(undefined);
          setIsBookingOpen(true);
        }}
        onOpenAssistant={() => {
          setAssistantInitialQuery(undefined);
          setIsAssistantOpen(true);
        }}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Screen 1: Hero Section */}
        <HeroSection
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenBooking={() => {
            setBookingProgramId(undefined);
            setBookingTherapyId(undefined);
            setIsBookingOpen(true);
          }}
        />

        {/* Screen 1 Sub-feature: Essence of Panchakarma */}
        <EssenceSection
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenBooking={() => {
            setBookingProgramId(undefined);
            setBookingTherapyId(undefined);
            setIsBookingOpen(true);
          }}
        />

        {/* Screen 2: The Science of Longevity & Tridosha Framework */}
        <ScienceSection
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenBooking={() => {
            setBookingProgramId(undefined);
            setBookingTherapyId(undefined);
            setIsBookingOpen(true);
          }}
        />

        {/* Screen 3: Classical Therapies Catalog */}
        <TherapiesSection
          onSelectTherapy={(therapy) => setSelectedTherapyForDetail(therapy)}
          onBookTherapy={handleOpenBookingForTherapy}
        />

        {/* Screen 3: Curated Retreat Immersions */}
        <ProgramsSection
          onBookProgram={handleOpenBookingForProgram}
          onOpenAssistant={() => {
            setAssistantInitialQuery(undefined);
            setIsAssistantOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenBooking={() => {
          setBookingProgramId(undefined);
          setBookingTherapyId(undefined);
          setIsBookingOpen(true);
        }}
        onOpenAssistant={() => {
          setAssistantInitialQuery(undefined);
          setIsAssistantOpen(true);
        }}
      />

      {/* Floating Action Button for AI Vaidya */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          id="floating-ai-vaidya-btn"
          onClick={() => {
            setAssistantInitialQuery(undefined);
            setIsAssistantOpen(true);
          }}
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#334537] hover:bg-[#223025] text-white shadow-xl hover:shadow-2xl border border-[#fed488]/40 transition-all hover:scale-105 cursor-pointer"
          title="Ask Acharya Anand (AI Vaidya)"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#fed488]">
            <img
              src={ASSETS.assistantAvatar}
              alt="Acharya Anand"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#fed488] block leading-none">
              Ask AI Vaidya
            </span>
            <span className="text-xs text-[#efeeea] font-medium leading-tight">
              Acharya Anand
            </span>
          </div>
        </button>
      </div>

      {/* Interactive Modals */}
      <DoshaQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectProgramWithDosha={handleSelectProgramWithDosha}
        onAskAIWithDosha={handleAskAIWithDosha}
      />

      <TherapyDetailModal
        therapy={selectedTherapyForDetail}
        onClose={() => setSelectedTherapyForDetail(null)}
        onBook={handleOpenBookingForTherapy}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgramId={bookingProgramId}
        initialTherapyId={bookingTherapyId}
        initialDosha={userDosha}
      />

      <AIAssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        userDosha={userDosha}
        initialQuery={assistantInitialQuery}
      />

    </div>
  );
}
export default App;
