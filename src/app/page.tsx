'use client';

import { useState , useEffect} from 'react';
import {  Trophy, Users, BookOpen } from 'lucide-react';
import FeaturedCard from '../components/FeaturedCard';
import CharacterList from '../components/CharacterList';
import Teams from '../components/Teams';
import Guides from '../components/Guides';
import type { Character } from '../types';
import SearchBar from '../components/SearchBar';

// Top 10 Character data
// Top 10 Character data
const characters: Character[] = [
  {
    id: 'ul-majin-vegeta',
    name: 'Ultra Majin Vegeta',
    element: 'YEL',
    tier: 'Z',
    rank: 1,
    imageSrc: '/ul-majin.webp',
    attack: '2.95M',
    defense: '1.82M',
  },
  {
    id: 'vegito-blue',
    name: 'LF Vegito Blue',
    element: 'GRN',
    tier: 'Z',
    rank: 2,
    imageSrc: '/vegito.webp',
    attack: '2.88M',
    defense: '1.79M',
  },
  {
    id: 'ssj3-gotenks',
    name: 'LF SSJ3 Gotenks',
    element: 'RED',
    tier: 'Z',
    rank: 3,
    imageSrc: '/ssj3-gotenks.webp',
    attack: '2.83M',
    defense: '1.76M',
  },
  {
    id: 'ssj2-goku',
    name: 'LF SSJ2 Goku',
    element: 'GRN',
    tier: 'S',
    rank: 4,
    imageSrc: '/ssj3.webp',
    attack: '2.79M',
    defense: '1.75M',
  },
  {
    id: 'daima-goku',
    name: 'LF Daima Goku',
    element: 'RED',
    tier: 'S',
    rank: 5,
    imageSrc: '/daima.webp',
    attack: '2.77M',
    defense: '1.74M',
  },
  {
    id: 'ultra-turles',
    name: 'Ultra Turles',
    element: 'BLU',
    tier: 'S',
    rank: 6,
    imageSrc: '/ultra-turles.webp',
    attack: '2.75M',
    defense: '1.73M',
  },
  {
    id: 'ultimate-gohan',
    name: 'LF Ultimate Gohan',
    element: 'PUR',
    tier: 'S',
    rank: 7,
    imageSrc: '/ult-gohan1.webp',
    attack: '2.73M',
    defense: '1.72M',
  },
  {
    id: 'treeku',
    name: 'LF Spirit Saiyan Goku',
    element: 'YEL',
    tier: 'S',
    rank: 8,
    imageSrc: '/treeku1.webp',
    attack: '2.71M',
    defense: '1.71M',
  },
  {
    id: 'omega-shenron',
    name: 'LF Omega Shenron',
    element: 'GRN',
    tier: 'A',
    rank: 9,
    imageSrc: '/omega1.webp',
    attack: '2.69M',
    defense: '1.70M',
  },
  {
    id: 'ultra-gogeta',
    name: 'Ultra Super Gogeta',
    element: 'PUR',
    tier: 'A',
    rank: 10,
    imageSrc: '/ultra-gogeta.webp',
    attack: '2.67M',
    defense: '1.69M',
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('characters');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple loading state
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-black-900 to-gray-900">
        <div className="h-72 sm:h-96 bg-black/50" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="/banner-new.jpg"
          alt="DB Legends Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="max-w-6xl mx-auto h-full flex items-center px-4 sm:px-6">
            <div className="text-white">
              <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">The DB Legends Codex</h1>
              <p className="text-base sm:text-xl text-gray-300 max-w-xl">
                Your ultimate destination for teams, guides, and character analysis
              </p>
              <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button 
                  onClick={() => setActiveTab('characters')}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Browse Characters
                </button>
                <button 
                  onClick={() => setActiveTab('guides')}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors text-sm sm:text-base"
                >
                  View Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Search Bar */}
        <div className="relative mb-8 sm:mb-12">
          <SearchBar />
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <FeaturedCard
            type="character"
            characterId="ssj2-goku"
            imageSrc="/ssj3.webp"
            title="SSJ2 Goku"
            description="Latest character release"
            stats={{
              attack: "2.66M",
              defense: "1.73M"
            }}
          />
          <FeaturedCard
            type="team"
            imageSrc="/vegito.webp"
            title="Top Meta Teams"
            description="Current PvP favorites"
          />
          <FeaturedCard
            type="guide"
            imageSrc="/pvp.png"
            title="PvP Guide"
            description="Master the basics"
          />
        </div>

        {/* Tabs Section */}
        <div className="mt-8 sm:mt-12">
          {/* Tab Buttons */}
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-4 sm:mb-0">
            <div className="flex space-x-2 bg-white/10 backdrop-blur-md p-1 rounded-lg w-fit min-w-full sm:min-w-0">
              {[
                { id: 'characters', icon: Trophy, label: 'Characters' },
                { id: 'teams', icon: Users, label: 'Teams' },
                { id: 'guides', icon: BookOpen, label: 'Guides' }
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-md transition-colors whitespace-nowrap text-sm sm:text-base ${
                    activeTab === id 
                      ? 'bg-red-600 text-white' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'characters' && <CharacterList characters={characters} />}
            {activeTab === 'teams' && <Teams />}
            {activeTab === 'guides' && <Guides />}
          </div>
        </div>
      </div>
    </div>
  );
}