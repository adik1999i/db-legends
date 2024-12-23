'use client';

import { Sword, Shield, Trophy } from 'lucide-react';
import type { Character } from '../types';

const CharacterCard = ({ character, rank }: { character: Character; rank: number }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border-0 text-white p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-lg font-bold">#{rank}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-red-600/80 text-sm">
          {character.tier} Tier
        </div>
      </div>
      
      <div className="flex gap-4">
        <img
          src={character.imageSrc}
          alt={character.name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between py-1">
          <div>
            <h3 className="text-lg font-semibold mb-1">{character.name}</h3>
            <p className="text-sm text-gray-300">
              Element: {character.element}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Sword className="w-4 h-4 text-red-400" />
              <span>{character.attack}</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>{character.defense}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharacterList = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {characters.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character} 
          rank={character.rank}
        />
      ))}
    </div>
  );
};

export default CharacterList;