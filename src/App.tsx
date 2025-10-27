import { useState } from "react";
import { MLBBHeader } from "./components/MLBBHeader";
import { HomePage } from "./components/HomePage";
import { HeroesPage } from "./components/HeroesPage";
import { TierListPage } from "./components/TierListPage";
import { BuildsPage } from "./components/BuildsPage";
import { MLBBFooter } from "./components/MLBBFooter";

type PageType = 'home' | 'heroes' | 'tierlist' | 'builds';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedHeroId, setSelectedHeroId] = useState<string | undefined>();

  const handleNavigate = (page: string, heroId?: string) => {
    setCurrentPage(page as PageType);
    setSelectedHeroId(heroId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <MLBBHeader currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'heroes' && (
          <HeroesPage onNavigate={handleNavigate} selectedHeroId={selectedHeroId} />
        )}
        {currentPage === 'tierlist' && <TierListPage onNavigate={handleNavigate} />}
        {currentPage === 'builds' && <BuildsPage onNavigate={handleNavigate} />}
      </main>

      <MLBBFooter />
    </div>
  );
}
