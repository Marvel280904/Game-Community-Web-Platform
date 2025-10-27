import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { heroes, builds } from "../data/heroes";

interface BuildsPageProps {
  onNavigate: (page: string, heroId?: string) => void;
}

export function BuildsPage({ onNavigate }: BuildsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(null);

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedHero = selectedHeroId ? heroes.find(h => h.id === selectedHeroId) : null;
  const heroBuilds = selectedHeroId ? builds.filter(b => b.heroId === selectedHeroId) : [];

  // Mock items untuk demonstrasi
  const getItemIcon = (itemName: string) => {
    const icons: { [key: string]: string } = {
      'Raptor Machete': '🗡️',
      'Tough Boots': '👢',
      'Blade of Heptaseas': '⚔️',
      'Endless Battle': '💫',
      'Malefic Roar': '📯',
      'Blade of Despair': '🔪',
      'Star Shard': '⭐',
      'Arcane Boots': '🥾',
      'Calamity Reaper': '💀',
      'Holy Crystal': '💎',
      'Divine Glaive': '🔱',
      'Blood Wings': '🦇',
      'Ice Queen Wand': '🧊',
      'Lightning Truncheon': '⚡',
      'Warrior Boots': '🛡️',
      'Thunder Belt': '⛓️',
      'Oracle': '🔮',
      'Immortality': '♾️'
    };
    return icons[itemName] || '📦';
  };

  const getSpellIcon = (spell: string) => {
    const icons: { [key: string]: string } = {
      'Retribution': '👹',
      'Execute': '🎯',
      'Flicker': '✨',
      'Purify': '🌟',
      'Sprint': '💨'
    };
    return icons[spell] || '📜';
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white mb-2">Build & Emblem Guide</h1>
          <p className="text-slate-400">Temukan build terbaik untuk hero favorit Anda</p>
        </div>

        {/* Search Hero */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Cari hero untuk melihat build..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Hero Selection Grid */}
        {!selectedHeroId && (
          <div>
            <h2 className="text-white mb-6">Pilih Hero</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {filteredHeroes.map((hero) => (
                <button
                  key={hero.id}
                  onClick={() => setSelectedHeroId(hero.id)}
                  className="group"
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
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-center group-hover:text-cyan-400 transition-colors">
                    {hero.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Build Display */}
        {selectedHero && (
          <div>
            {/* Back Button & Hero Info */}
            <button
              onClick={() => setSelectedHeroId(null)}
              className="text-cyan-400 hover:text-cyan-300 mb-6 flex items-center gap-2"
            >
              ← Kembali ke Pilihan Hero
            </button> 

            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/50 border border-cyan-500/30 rounded-xl p-6 mb-8 flex items-center gap-6 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-cyan-500/50 flex-shrink-0">
                <video
                  src={selectedHero.image} // Sumber video dari data
                  autoPlay // Putar otomatis
                  loop // Ulangi terus menerus
                  muted // Wajib di-mute agar autoplay berfungsi di banyak browser
                  playsInline // Penting untuk mobile
                  className="w-full h-full object-cover object-[center_20%] " // Styling sama seperti gambar
                   // Penanganan error sederhana
                >
                </video>
              </div>
              <div className="flex-1">
                <h2 className="text-white mb-1">{selectedHero.name}</h2>
                <p className="text-cyan-400 mb-2">{selectedHero.title}</p>
                <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300">
                  {selectedHero.role}
                </Badge>
              </div>
            </div>

            {/* Build Sets */}
            {heroBuilds.length > 0 ? (
              <div className="space-y-6">
                {heroBuilds.map((build, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all"
                  >
                    {/* Build Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-white mb-1">{build.name}</h3>
                        <Badge className="bg-blue-500/20 border-blue-500/50 text-blue-300">
                          {build.type}
                        </Badge>
                      </div>
                      <Sparkles className="text-cyan-400" size={24} />
                    </div>

                    {/* Items */}
                    <div className="mb-6">
                      <h4 className="text-slate-300 mb-3">🎒 Item Build</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {build.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 hover:border-cyan-500/30 transition-all"
                          >
                            <div className="text-3xl mb-2 text-center">{getItemIcon(item)}</div>
                            <p className="text-slate-300 text-xs text-center line-clamp-2">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Emblem */}
                    <div className="mb-6">
                      <h4 className="text-slate-300 mb-3">🎭 Emblem Setup</h4>
                      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                        <p className="text-cyan-400 mb-3">{build.emblem.name}</p>
                        <div className="flex flex-wrap gap-2">
                          {build.emblem.talents.map((talent, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-purple-500/50 text-purple-300 bg-purple-500/10"
                            >
                              {talent}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Battle Spells */}
                    <div>
                      <h4 className="text-slate-300 mb-3">⚡ Battle Spell</h4>
                      <div className="flex gap-3">
                        {build.battleSpells.map((spell, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 flex items-center gap-3"
                          >
                            <div className="text-2xl">{getSpellIcon(spell)}</div>
                            <p className="text-slate-300 text-sm">{spell}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center">
                <p className="text-slate-400 text-lg mb-2">Build belum tersedia</p>
                <p className="text-slate-500 text-sm">Build untuk hero ini akan segera ditambahkan!</p>
              </div>
            )}
          </div>
        )}

        {/* Popular Builds Section (when no hero selected) */}
        {!selectedHeroId && (
          <div className="mt-16">
            <h2 className="text-white mb-6">🔥 Build Populer</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {builds.slice(0, 3).map((build) => {
                const hero = heroes.find(h => h.id === build.heroId);
                if (!hero) return null;
                
                return (
                  <button
                    key={build.heroId + build.name}
                    onClick={() => setSelectedHeroId(build.heroId)}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all text-left group hover:shadow-cyan-neon"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500/50 transition-all">
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
                      </div>
                      <div>
                        <p className="text-white group-hover:text-cyan-400 transition-colors">
                          {hero.name}
                        </p>
                        <p className="text-slate-400 text-sm">{build.name}</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-500/20 border-blue-500/50 text-blue-300">
                      {build.type}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}