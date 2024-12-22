'use client';

import React from 'react';
import { Shield, Swords, Activity, Heart, Zap, Star } from 'lucide-react';
import type { CharacterDetails } from '../types';

const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-white/5 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-sm text-gray-300">{label}</span>
    </div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);

const ResistCard = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
    <span className="text-sm text-gray-300">{label}</span>
    <span className="font-semibold">{value}%</span>
  </div>
);

const AbilityCard = ({ title, description, subtitle }: { title: string; description: string; subtitle?: string }) => (
  <div className="bg-white/5 rounded-xl p-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {subtitle && (
      <div className="text-sm text-gray-300 mb-4">{subtitle}</div>
    )}
    <p className="text-gray-200 whitespace-pre-line">{description}</p>
  </div>
);

const CharacterDetail: React.FC<{ character: CharacterDetails }> = ({ character }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-xl overflow-hidden">
          <img 
            src={character.image || "/api/placeholder/500/500"} 
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h1 className="text-2xl md:text-3xl font-bold">{character.name}</h1>
            <p className="text-gray-300">{character.title}</p>
          </div>
        </div>

        {/* Base Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <StatCard
            icon={<Heart className="w-5 h-5 text-red-400" />}
            label="HP"
            value={character.stats.hp.toLocaleString()}
          />
          <StatCard
            icon={<Swords className="w-5 h-5 text-yellow-400" />}
            label="Strike ATK"
            value={character.stats.strikeAtk.toLocaleString()}
          />
          <StatCard
            icon={<Shield className="w-5 h-5 text-blue-400" />}
            label="Strike DEF"
            value={character.stats.strikeDef.toLocaleString()}
          />
          <StatCard
            icon={<Activity className="w-5 h-5 text-purple-400" />}
            label="Blast ATK"
            value={character.stats.blastAtk.toLocaleString()}
          />
          <StatCard
            icon={<Shield className="w-5 h-5 text-green-400" />}
            label="Blast DEF"
            value={character.stats.blastDef.toLocaleString()}
          />
          <StatCard
            icon={<Zap className="w-5 h-5 text-orange-400" />}
            label="Critical"
            value={character.stats.criticalRate}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Traits */}
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Traits</h2>
            <div className="flex flex-wrap gap-2">
              {character.traits.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Resistances */}
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Resistances</h2>
            <div className="grid grid-cols-2 gap-4">
              <ResistCard label="Pierce" value={character.stats.pierceResist} />
              <ResistCard label="Slice" value={character.stats.sliceResist} />
              <ResistCard label="Impact" value={character.stats.impactResist} />
              <ResistCard label="Explode" value={character.stats.explodeResist} />
            </div>
          </div>

          {/* Z Ability */}
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Z Ability</h2>
            {character.zAbility.map((ability, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-lg font-semibold mb-2">Level {ability.level}</h3>
                <p className="text-gray-200">{ability.effect}</p>
              </div>
            ))}
          </div>

          {/* Arts Cards */}
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Held Arts Cards</h2>
            {character.heldArtsCards.map((card, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-lg font-semibold mb-2">{card.type}</h3>
                <p className="text-gray-200">{card.effect}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Main Ability */}
          <AbilityCard
            title={character.mainAbility.name}
            description={character.mainAbility.description}
            subtitle={`Requirements: ${character.mainAbility.requirements}`}
          />

          {/* Unique Abilities */}
          {character.uniqueAbilities.map((ability, index) => (
            <AbilityCard
              key={index}
              title={ability.name}
              description={ability.description}
            />
          ))}

          {/* Extra Arts Card */}
          <AbilityCard
            title={character.extraArtsCard.name}
            description={character.extraArtsCard.description}
          />

          {/* Special Arts Card */}
          <AbilityCard
            title={character.specialArtsCard.name}
            description={character.specialArtsCard.description}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;