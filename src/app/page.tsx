'use client';

import { useState } from 'react';
import { Search, Sword, Shield, Trophy, Users, BookOpen } from 'lucide-react';
import FeaturedCard from '../components/FeaturedCard';
import CharacterList from '../components/CharacterList';
import Teams from '../components/Teams';
import Guides from '../components/Guides';
import type { Character } from '../types';
import SearchBar from '../components/SearchBar';

// Character data
const characters: Character[] = [
  {
    id: 'ul-majin-vegeta',
    name: 'Ultra Majin Vegeta',
    element: 'Yellow',
    tier: 'Z',
    imageSrc: '/ul-majin.webp',
    attack: '2.8M',
    defense: '1.6M',
  },
  {
    id: 'vegito-blue',
    name: 'LF Vegito Blue',
    element: 'Green',
    tier: 'Z',
    imageSrc: '/vegito.webp',
    attack: '2.4M',
    defense: '1.4M',
  },
  {
    id: 'ssj3-gotenks',
    name: 'LF SSJ3 Gotenks',
    element: 'Red',
    tier: 'Z',
    imageSrc: '/ssj3-gotenks.webp',
    attack: '2.7M',
    defense: '1.7M',
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('characters');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black-900 to-gray-900">
      {/* Mobile-friendly Hero Section */}
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
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Browse Characters
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors text-sm sm:text-base">
                  View Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Collapsible Search Bar for Mobile */}
        <div className="relative mb-8 sm:mb-12">
          <div className="sm:hidden mb-4 flex justify-end">
            {/* <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 bg-white/10 rounded-full"
            >
              <Search className="h-5 w-5 text-gray-400" />
            </button> */}
            <SearchBar/>
          </div>
          {/* <input
            type="text"
            placeholder="Search characters, teams, or guides..."
            className={`w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ${
              isSearchOpen ? 'block' : 'hidden sm:block'
            }`}
          /> */}
          <SearchBar/>
          
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

        {/* Scrollable Tabs for Mobile */}
        <div className="mt-8 sm:mt-12">
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-4 sm:mb-0">
            <div className="flex space-x-2 bg-white/10 backdrop-blur-md p-1 rounded-lg w-fit min-w-full sm:min-w-0">
              <button
                onClick={() => setActiveTab('characters')}
                className={`flex items-center px-3 sm:px-4 py-2 rounded-md transition-colors whitespace-nowrap text-sm sm:text-base ${
                  activeTab === 'characters' 
                    ? 'bg-red-600 text-white' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Characters
              </button>
              <button
                onClick={() => setActiveTab('teams')}
                className={`flex items-center px-3 sm:px-4 py-2 rounded-md transition-colors whitespace-nowrap text-sm sm:text-base ${
                  activeTab === 'teams' 
                    ? 'bg-red-600 text-white' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Teams
              </button>
              <button
                onClick={() => setActiveTab('guides')}
                className={`flex items-center px-3 sm:px-4 py-2 rounded-md transition-colors whitespace-nowrap text-sm sm:text-base ${
                  activeTab === 'guides' 
                    ? 'bg-red-600 text-white' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Guides
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'characters' && <CharacterList characters={characters} />}
          {activeTab === 'teams' && <Teams />}
{activeTab === 'guides' && <Guides />}
        </div>
      </div>
    </div>
  );
}