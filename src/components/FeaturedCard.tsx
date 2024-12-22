'use client';

import { Sword, Shield, Trophy, Users, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FeaturedCardProps } from "../types"

const FeaturedCard = ({ title, description, imageSrc, type, characterId, stats }: FeaturedCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (type === 'character' && characterId) {
      router.push(`/character/${characterId}`);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="relative group overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="flex items-center gap-2 mb-1">
          {type === 'character' && <Trophy className="w-4 h-4 text-yellow-400" />}
          {type === 'team' && <Users className="w-4 h-4 text-blue-400" />}
          {type === 'guide' && <BookOpen className="w-4 h-4 text-green-400" />}
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-200 text-xs sm:text-sm">{description}</p>
        {stats && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="bg-black/40 rounded p-1 sm:p-2 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1">
                  {key === 'attack' && <Sword className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />}
                  {key === 'defense' && <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />}
                  <span className="text-white text-xs sm:text-sm">{value}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCard;