'use client';

import { useState } from 'react';
import { Swords, BookOpen, Target, Trophy, Gem } from 'lucide-react';
import TopGuide from './TopGuide';

interface GuideCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: 'book' | 'trophy' | 'sword' | 'gem' | 'target';
  category: string;
}

const guides: GuideCard[] = [
  {
    id: 'top-guide',
    title: "Tournament of Power Guide",
    description: "Seasonal TOP guides with optimal routes and team compositions. Learn the best strategies for maximum points.",
    image: "/top-guide.jpg",
    icon: 'trophy',
    category: 'TOP Guide'
  },
  {
    id: 'pvp-guide',
    title: "PvP Mastery Guide",
    description: "Master advanced PvP techniques, learn about vanishing, charge stepping, and timing your Rising Rush.",
    image: "/pvp-guide.jpg",
    icon: 'sword',
    category: 'PvP'
  },
  {
    id: 'chrono-guide',
    title: "Chrono Guides",
    description: "Complete walkthrough for current events and missions. Get the most out of limited-time content.",
    image: "/chrono.jpg",
    icon: 'target',
    category: 'Chrono'
  }
];

const GuideCard = ({ guide, onClick }: { guide: GuideCard; onClick: () => void }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'book':
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'sword':
        return <Swords className="w-5 h-5 text-red-400" />;
      case 'gem':
        return <Gem className="w-5 h-5 text-blue-400" />;
      case 'target':
        return <Target className="w-5 h-5 text-green-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group bg-white/10 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48">
        <img
          src={guide.image || "/api/placeholder/400/300"}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-red-600/80 text-white text-xs">
            {guide.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {getIcon(guide.icon)}
          <h3 className="text-lg font-bold text-white">{guide.title}</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          {guide.description}
        </p>
        <div className="mt-4 flex items-center text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

const Guides = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  if (selectedGuide === 'top-guide') {
    return (
      <div>
        <button 
          onClick={() => setSelectedGuide(null)}
          className="mb-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
        >
          ← Back to Guides
        </button>
        <TopGuide />
      </div>
    );
  }

  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {guides.map((guide) => (
        <GuideCard 
          key={guide.id} 
          guide={guide} 
          onClick={() => setSelectedGuide(guide.id)}
        />
      ))}
    </div>
  );
};

export default Guides;