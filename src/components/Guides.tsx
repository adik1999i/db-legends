'use client';

import { BookOpen, Trophy, Sword, Gem } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface GuideCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: 'book' | 'trophy' | 'sword' | 'gem';
  category: string;
}

const guides: GuideCard[] = [
  {
    id: 'beginners-guide',
    title: "T.O.P Guide",
    description: "Everything you need to know to about TOP. From basic mechanics to team building fundamentals.",
    image: "/top-guide.jpg",
    icon: 'book',
    category: 'Top Guide'
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
    title: "Chrono Crystal Guide",
    description: "Learn how to efficiently farm Chrono Crystals and manage your resources for summoning.",
    image: "/chrono.jpg",
    icon: 'gem',
    category: 'Resource'
  }
];

const GuideCard = ({ guide }: { guide: GuideCard }) => {
  const router = useRouter();

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'book':
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-purple-400" />;
      case 'sword':
        return <Sword className="w-5 h-5 text-red-400" />;
      case 'gem':
        return <Gem className="w-5 h-5 text-blue-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <div 
      onClick={() => router.push(`/guides/${guide.id}`)}
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
  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
};

export default Guides;