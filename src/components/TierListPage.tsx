import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { heroes, HeroRole, TierRank } from "../data/heroes";

interface TierListPageProps {
  onNavigate: (page: string, heroId?: string) => void;
}

export function TierListPage({ onNavigate }: TierListPageProps) {
  const [selectedRole, setSelectedRole] = useState<HeroRole | "All">("All");

  const roles: (HeroRole | "All")[] = ["All", "Fighter", "Tank", "Assassin", "Mage", "Marksman", "Support"];
  const tiers: TierRank[] = ['S+', 'S', 'A', 'B', 'C'];

  const filteredHeroes = heroes.filter((hero) => 
    selectedRole === "All" || hero.role === selectedRole
  );

  const getHeroesByTier = (tier: TierRank) => {
    return filteredHeroes.filter(hero => hero.tier === tier);
  };

  const getTierColor = (tier: TierRank) => {
    switch (tier) {
      case 'S+':
        return 'border-gold-500/30 bg-gold-shiny-gradient text-yellow-900';
      case 'S':
        return 'border-gold-500/30 bg-gold-glossy-gradient text-yellow-200';
      case 'A':
        return 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]';
      case 'B':
        return 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]';
      case 'C':
        return 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]';
    }
  };

  const getTierBorderColor = (tier: TierRank) => {
    switch (tier) {
      case 'S+':
        return 'border-cyan-500/50';
      case 'S':
        return 'border-blue-500/50';
      case 'A':
        return 'border-purple-500/50';
      case 'B':
        return 'border-indigo-500/50';
      case 'C':
        return 'border-slate-600/50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-300" size={28} />
            <h1 className="text-white">Tier List Hero</h1>
          </div>
          <p className="text-slate-400">Ranking hero berdasarkan performa meta patch 1.8.42</p>
        </div>

        {/* Role Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedRole === role
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900/50 text-slate-300 border border-slate-800 hover:border-cyan-500/30 hover:text-cyan-400'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Tier List */}
        <div className="space-y-6">
          {tiers.map((tier) => {
            const tierHeroes = getHeroesByTier(tier);
            
            if (tierHeroes.length === 0) return null;

            return (
              <div key={tier} className="bg-slate-900/30 border border-slate-800 rounded-xl p-4 sm:p-6">
                {/* Tier Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br ${getTierColor(tier)} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl sm:text-3xl">{tier}</span>
                  </div>
                  <div>
                    <h2 className="text-white mb-1">Tier {tier}</h2>
                    <p className="text-slate-400 text-sm">
                      {tier === 'S+' && 'Sangat Dominan - Pick/Ban Priority'}
                      {tier === 'S' && 'Sangat Kuat - Meta Heroes'}
                      {tier === 'A' && 'Kuat - Pilihan Solid'}
                      {tier === 'B' && 'Seimbang - Situasional'}
                      {tier === 'C' && 'Lemah - Butuh Buff'}
                    </p>
                  </div>
                  <Badge className="ml-auto bg-slate-800 text-slate-300 border-slate-700">
                    {tierHeroes.length} Heroes
                  </Badge>
                </div>

                {/* Heroes Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
                  {tierHeroes.map((hero) => (
                    <button
                      key={hero.id}
                      onClick={() => onNavigate('heroes', hero.id)}
                      className="group relative"
                    >
                      <div className={`aspect-square rounded-lg overflow-hidden border-2 ${getTierBorderColor(tier)} purple-neon-glow`}>
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
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Role Badge */}
                        <div className="absolute top-1 right-1">
                          <div className="bg-slate-950/80 backdrop-blur-sm text-slate-300 text-xs px-1.5 py-0.5 rounded">
                            {hero.role}
                          </div>
                        </div>

                        {/* Name */}
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <p className="text-white text-xs sm:text-sm text-center group-hover:text-cyan-400 transition-colors line-clamp-1">
                            {hero.name}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-white mb-4">📊 Penjelasan Tier</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded border-gold-500/30 bg-gold-shiny-gradient flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-900">S+</span>
              </div>
              <div>
                <p className="text-slate-200 mb-1">Must Ban</p>
                <p className="text-slate-400 text-sm">Hero sangat dominan dan sering di-ban</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded border-gold-500/30 bg-gold-glossy-gradient flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-200">S</span>
              </div>
              <div>
                <p className="text-slate-200 mb-1">Meta Pick</p>
                <p className="text-slate-400 text-sm">Hero yang sangat kuat di meta saat ini</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                <span className="text-white">A</span>
              </div>
              <div>
                <p className="text-slate-200 mb-1">Pilihan Solid</p>
                <p className="text-slate-400 text-sm">Hero yang balance dan bisa diandalkan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                <span className="text-white">B</span>
              </div>
              <div>
                <p className="text-slate-200 mb-1">Situasional</p>
                <p className="text-slate-400 text-sm">Bagus untuk situasi tertentu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                <span className="text-white">C</span>
              </div>
              <div>
                <p className="text-slate-200 mb-1">Butuh Buff</p>
                <p className="text-slate-400 text-sm">Hero yang kurang kuat di meta saat ini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}