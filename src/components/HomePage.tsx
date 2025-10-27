import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Newspaper, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { heroes } from "../data/heroes";

interface HomePageProps {
  onNavigate: (page: string, heroId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  
  const spotlightHeroes = heroes.filter(h => h.tier === 'S+' || h.tier === 'S').slice(0, 3);
  const metaHeroes = heroes.filter(h => h.tier === 'S+' || h.tier === 'S');

  const news = [
    {
      id: 1,
      title: 'Patch 1.8.42 - Balance Changes Meta Baru!',
      summary: 'Update terbaru membawa perubahan besar pada hero Assassin dan Mage. Fanny dan Kagura mendapat buff signifikan.',
      image: 'https://images.unsplash.com/photo-1759701547036-bf7d7b05cc52?w=600',
      date: '23 Oktober 2025'
    },
    {
      id: 2,
      title: 'Hero Baru: Arathor, The Shadow Reaper',
      summary: 'Hero Assassin terbaru dengan kemampuan teleportasi dan burst damage yang mengerikan akan segera hadir!',
      image: 'https://images.unsplash.com/photo-1730830741396-ffb85bb2e983?w=600',
      date: '20 Oktober 2025'
    },
    {
      id: 3,
      title: 'Tips & Trik: Menguasai Fanny dalam 7 Hari',
      summary: 'Panduan lengkap dari pro player untuk menguasai hero paling sulit di Mobile Legends.',
      image: 'https://images.unsplash.com/photo-1654105593913-ffd2f0bf4520?w=600',
      date: '18 Oktober 2025'
    }
  ];

  const guides = [
    'Cara Counter Fanny untuk Pemula',
    'Best Build Kagura 2025',
    'Strategi Win Rate Mythic Glory',
    'Hero Terbaik untuk Solo Rank',
    'Tips Farming Efektif Jungler'
  ];

  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % spotlightHeroes.length);
  };

  const prevHero = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + spotlightHeroes.length) % spotlightHeroes.length);
  };

  const currentHero = spotlightHeroes[currentHeroIndex];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Spotlight Section */}
      <section className="relative h-[600px] sm:h-[700px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video
            src={currentHero.splashArt} // Sumber video dari data
            autoPlay // Putar otomatis
            loop // Ulangi terus menerus
            muted // Wajib di-mute agar autoplay berfungsi di banyak browser
            playsInline // Penting untuk mobile
            className="w-full h-full object-cover object-[center_20%] " // Styling sama seperti gambar
          >
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 border-0 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Award size={14} className="mr-1" />
              Hero Spotlight
            </Badge>
            <h1 className="text-white mb-2">{currentHero.name}</h1>
            <p className="text-cyan-400 text-xl sm:text-2xl mb-4">{currentHero.title}</p>
            <p className="text-slate-300 text-lg mb-6 max-w-xl">{currentHero.lore}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => onNavigate('heroes', currentHero.id)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                Lihat Detail Hero
              </Button>
              <Badge variant="outline" className="border-purple-500/50 text-purple-400 px-4 py-2">
                {currentHero.role}
              </Badge>
              <Badge variant="outline" className="border-gold-500/30 text-gold-glossy px-4 py-2">
                Tier {currentHero.tier}
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevHero}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-slate-900/70 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextHero}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-slate-900/70 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {spotlightHeroes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentHeroIndex
                  ? 'bg-cyan-400 w-8 shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Meta Tier List Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-300" size={24} />
              <h2 className="text-white">Hero Meta Patch 1.8.42</h2>
            </div>
            <Button
              onClick={() => onNavigate('tierlist')}
              variant="outline"
              className="bg-transparent border-cyan-500/30 text-cyan-400 hover:bg-transparent hover:shadow-cyan-glossy hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              Lihat Tier List Lengkap
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-cyan-500/30 rounded-xl p-6 sm:p-8 shadow-cyan-glossy">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {metaHeroes.map((hero) => (
                <button
                  key={hero.id}
                  onClick={() => onNavigate('heroes', hero.id)}
                  className="group relative"
                >
                  <div className="aspect-square rounded-lg overflow-hidden border-2 purple-neon-glow">
                    <video
                      src={hero.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      // Tambahkan 'transform-gpu' di sini
                      className="w-full h-full object-cover group-hover:scale-110 transform-gpu duration-150 "
                    >
                </video>
                    <div className="absolute top-1 right-1">
                      <div className="bg-gradient-to-br border-gold-500/30 bg-gold-shiny-gradient text-yellow-900 text-xs font-medium px-2 py-0.5 rounded shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        {hero.tier}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-center group-hover:text-cyan-400 transition-colors">
                    {hero.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 pt-10">
          {/* Left Column - News */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Newspaper className="text-cyan-400" size={24} />
              <h2 className="text-white">News & Latest Patch Notes</h2>
            </div>
            <div className="space-y-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all hover:shadow-cyan-neon"
                >
                  <div className="sm:flex">
                    <div className="sm:w-64 h-48 sm:h-auto relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-cyan-400 text-sm mb-2">{item.date}</p>
                      <h3 className="text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 mb-4">{item.summary}</p>
                      <Button
                        variant="link"
                        className="text-cyan-400 hover:text-cyan-300 p-0"
                      >
                        Baca Selengkapnya →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Guides */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-white mb-4">📚 Guides & Tips</h3>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:border-green-neon-500 hover:shadow-green-neon">
                <ul className="space-y-3">
                  {guides.map((guide, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-slate-300 hover:text-cyan-400 transition-colors flex items-start gap-2 group"
                      >
                        <span className="text-cyan-500 group-hover:text-cyan-400">•</span>
                        <span>{guide}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}