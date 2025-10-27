import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function MLBBFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-cyan-400 mb-4">Land of Dawn Hub</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sumber informasi terpercaya untuk komunitas Mobile Legends: Bang Bang Indonesia. 
              Hero guides, tier lists, dan tips strategi untuk meningkatkan permainan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Daftar Hero
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Tier List
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Build Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-slate-500 text-xs">
              Bergabunglah dengan komunitas kami!
            </p>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900">
          <div className="text-slate-500 text-xs space-y-2">
            <p>
              <strong>Disclaimer:</strong> Land of Dawn Hub adalah website buatan fans dan tidak berafiliasi resmi dengan Moonton atau Mobile Legends: Bang Bang. 
              Semua nama, logo, dan merek dagang adalah milik pemegang hak cipta masing-masing.
            </p>
            <p className="text-center">
              © 2025 Land of Dawn Hub. Dibuat dengan ❤️ untuk komunitas MLBB Indonesia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}