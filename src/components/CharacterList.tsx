'use client';

import { useRouter } from 'next/navigation';
import { Sword, Shield } from 'lucide-react';
import type { Character } from '../types';

const CharacterCard = ({ character }: { character: Character }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/character/${character.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white/10 backdrop-blur-md border-0 text-white p-3 sm:p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="mb-2">
        <h3 className="text-base sm:text-lg font-semibold">{character.name}</h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Tier {character.tier} • Element: {character.element}
        </p>
      </div>
      <div className="flex gap-3 sm:gap-4">
        <img
          src={character.imageSrc}
          alt={character.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <Sword className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span>{character.attack}</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
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
    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;