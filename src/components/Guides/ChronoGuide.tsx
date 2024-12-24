'use client';
import { Gem } from 'lucide-react';
import { VideoCard } from './VideoCard';
import { VideoGuide } from '../../types';

const chronoGuides: VideoGuide[] = [
  {
    title: "Monthly CC Guide",
    description: "HOW TO SAVE UPTO 20K CHRONO CRYSTAL FOR LEGENDS FESTIVAL 2024",
    videoId: "ZseEAY2-76k",
    category: "Monthly Guide",
    date: "2024-01-15"
  },
  {
    title: "F2P CC Guide",
    description: "Best F2P methods to earn Chrono Crystals",
    videoId: "rOrf7n61bhM",
    category: "Farming Guide",
    date: "2024-01-10"
  }
];

const ChronoGuide = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Gem className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Chrono Crystal Guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chronoGuides.map((guide, idx) => (
            <VideoCard key={idx} guide={guide} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ChronoGuide;