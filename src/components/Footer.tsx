'use client';

import { MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">DB Legends Codex</h3>
            <p className="text-sm text-gray-400">
              Your ultimate destination for Dragon Ball Legends guides and resources
            </p>
          </div>
          
          <a
            href="https://discord.com/invite/PQjgnAPq5s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] transition-colors rounded-lg text-white"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Join IVOxLord Discord</span>
          </a>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © 2024 DB Legends Codex. Made with ❤️ by IVOxLord Community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;