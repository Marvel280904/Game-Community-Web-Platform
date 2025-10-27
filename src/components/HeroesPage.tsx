import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { heroes, HeroRole } from "../data/heroes";

interface HeroesPageProps {
  onNavigate: (page: string, heroId?: string) => void;
  selectedHeroId?: string;
}

export function HeroesPage({ onNavigate, selectedHeroId }: HeroesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<HeroRole | "All">("All");

  const roles: (HeroRole | "All")[] = ["All", "Fighter", "Tank", "Assassin", "Mage", "Marksman", "Support"];

  const filteredHeroes = heroes.filter((hero) => {
    const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "All" || hero.role === selectedRole;
    return matchesSearch && matchesRole;
  })
  .sort((a, b) => {
    // Urutan tier: S+ > S > A > B > C
    const tierOrder = { 'S+': 5, 'S': 4, 'A': 3, 'B': 2, 'C': 1 };
    return tierOrder[b.tier] - tierOrder[a.tier];
  });

  const selectedHero = selectedHeroId ? heroes.find(h => h.id === selectedHeroId) : null;

  if (selectedHero) {
    return (
      <div className="min-h-screen bg-slate-950 pt-20">
        {/* Hero Detail */}
        <div className="relative h-[500px] overflow-hidden">
          <video
            src={selectedHero.splashArt} // Sumber video dari data
            autoPlay // Putar otomatis
            loop // Ulangi terus menerus
            muted // Wajib di-mute agar autoplay berfungsi di banyak browser
            playsInline // Penting untuk mobile
            className="w-full h-full object-cover object-[center_20%] " // Styling sama seperti gambar
          >
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-12">
            <div className="max-w-3xl">
              <button
                onClick={() => onNavigate('heroes')}
                className="text-cyan-400 hover:text-cyan-300 mb-4 flex items-center gap-2"
              >
                ← Back to Hero List
              </button>
              <h1 className="text-white mb-2">{selectedHero.name}</h1>
              <p className="text-cyan-400 text-2xl mb-4">{selectedHero.title}</p>
              <div className="flex gap-3 mb-6">
                <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300">
                  {selectedHero.role}
                </Badge>
                <Badge className="bg-cyan-500/20 border-cyan-500/50 text-cyan-300">
                  Tier {selectedHero.tier}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Lore */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-white mb-4">📖 Story</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{selectedHero.lore}</p>
          </div>

          {/* Skills */}
          <div className="max-w-4xl">
            <h2 className="text-white mb-6">⚔️ Hero Ability</h2>
            <div className="grid gap-6">
              {/* Passive */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-3xl flex-shrink-0">
                    {selectedHero.skills.passive.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white">{selectedHero.skills.passive.name}</h3>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                        Passive
                      </Badge>
                    </div>
                    <p className="text-slate-300">{selectedHero.skills.passive.description}</p>
                  </div>
                </div>
              </div>

              {/* Skill 1 */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
                    {selectedHero.skills.skill1.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-white">{selectedHero.skills.skill1.name}</h3>
                      <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                        Skill 1
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        CD: {selectedHero.skills.skill1.cooldown}s
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {selectedHero.skills.skill1.damageType} Damage
                      </Badge>
                    </div>
                    <p className="text-slate-300">{selectedHero.skills.skill1.description}</p>
                  </div>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-3xl flex-shrink-0">
                    {selectedHero.skills.skill2.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-white">{selectedHero.skills.skill2.name}</h3>
                      <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                        Skill 2
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        CD: {selectedHero.skills.skill2.cooldown}s
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {selectedHero.skills.skill2.damageType} Damage
                      </Badge>
                    </div>
                    <p className="text-slate-300">{selectedHero.skills.skill2.description}</p>
                  </div>
                </div>
              </div>

              {/* Ultimate */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-3xl flex-shrink-0">
                    {selectedHero.skills.ultimate.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-white">{selectedHero.skills.ultimate.name}</h3>
                      <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                        Ultimate
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        CD: {selectedHero.skills.ultimate.cooldown}s
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {selectedHero.skills.ultimate.damageType} Damage
                      </Badge>
                    </div>
                    <p className="text-slate-300">{selectedHero.skills.ultimate.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white mb-2">Daftar Hero</h1>
          <p className="text-slate-400">Jelajahi semua hero Mobile Legends dan temukan favorit Anda</p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Cari hero..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500/50"
            />
          </div>

          {/* Role Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="text-slate-400" size={18} />
            <span className="text-slate-400 text-sm mr-2">Filter Role:</span>
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedRole === role
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/50 text-slate-300 border border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredHeroes.map((hero) => (
            <button
              key={hero.id}
              onClick={() => onNavigate('heroes', hero.id)}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden purple-neon-glow">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                {/* Tier Badge */}
                <div className="absolute top-2 right-2">
                  <Badge className={`${
                    hero.tier === 'S+' ? 'border-gold-500/30 bg-gold-shiny-gradient text-yellow-900' :
                    hero.tier === 'S' ? 'border-gold-500/30 bg-gold-glossy-gradient text-yellow-200' :
                    hero.tier === 'A' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]' :
                    hero.tier === 'B' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' :
                    'bg-slate-700 text-white'
                  }`}>
                    {hero.tier}
                  </Badge>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {hero.name}
                  </p>
                  <p className="text-slate-400 text-sm">{hero.role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredHeroes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Tidak ada hero yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}