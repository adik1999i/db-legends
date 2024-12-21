'use client'

import React, { useState } from 'react';
import { Search, Star, Sword, Shield, Trophy, Users, BookOpen } from 'lucide-react';
import Teams from './Teams';

interface FeaturedCardProps {
  title: string;
  description: string;
  imageSrc: string;
  stats?: {
    attack?: string;
    defense?: string;
    [key: string]: string | undefined;
  };
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('characters');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const FeaturedCard: React.FC<FeaturedCardProps> = ({ 
    title, 
    description, 
    imageSrc, 
    stats 
  }) => (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{title}</h3>
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
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 bg-white/10 rounded-full"
            >
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search characters, teams, or guides..."
            className={`w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ${
              isSearchOpen ? 'block' : 'hidden sm:block'
            }`}
          />
          <Search className="absolute left-3 sm:left-4 top-3 sm:top-4 h-5 w-5 text-gray-400" />
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <FeaturedCard
            imageSrc="/ssj3.webp"
            title="SSJ2 Goku"
            description="Latest character release"
          />
          <FeaturedCard
            imageSrc="/vegito.webp"
            title="Top Meta Teams"
            description="Current PvP favorites"
          />
          <FeaturedCard
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
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activeTab === 'characters' && [1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border-0 text-white p-3 sm:p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2">
                  <h3 className="text-base sm:text-lg font-semibold">Character {i}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Tier Z • Element: PUR</p>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <img
                    src="/api/placeholder/100/100"
                    alt={`Character ${i}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Sword className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        <span>2.1M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                        <span>1.8M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {activeTab === 'teams' && <Teams />}
        </div>
      </div>
    </div>
  );
}