'use client'

import React, { useState } from 'react';
import { Search, Star, Sword, Shield, Trophy, Users, BookOpen } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('characters');

  const FeaturedCard = ({ title, description, stats }: {
    title: string;
    description: string;
    stats?: Record<string, string>;
  }) => (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <img
        src="/api/placeholder/400/300"
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
        {stats && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="bg-black/40 rounded p-2 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1">
                  {key === 'attack' && <Sword className="w-4 h-4 text-red-400" />}
                  {key === 'defense' && <Shield className="w-4 h-4 text-red-400" />}
                  <span className="text-white text-sm">{value}</span>
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
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/banner-new.jpg"
          alt="DB Legends Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="max-w-6xl mx-auto h-full flex items-center px-6">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">The DB Legends Codex</h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Your ultimate destination for teams, guides, and character analysis
              </p>
              <div className="mt-8 flex gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Browse Characters
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors">
                  View Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search characters, teams, or guides..."
            className="w-full p-4 pl-12 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all"
          />
          <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeaturedCard
            title="Ultra Instinct Goku"
            description="Latest character release"
            stats={{
              attack: "98",
              defense: "85"
            }}
          />
          <FeaturedCard
            title="Top Meta Teams"
            description="Current PvP favorites"
          />
          <FeaturedCard
            title="PvP Guide"
            description="Master the basics"
          />
        </div>

        {/* Custom Tabs */}
        <div className="mt-12">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-md p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('characters')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
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
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
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
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeTab === 'guides' 
                  ? 'bg-red-600 text-white' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Guides
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'characters' && [1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border-0 text-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">Character {i}</h3>
                  <p className="text-gray-300 text-sm">Tier Z • Element: PUR</p>
                </div>
                <div className="flex gap-4">
                  <img
                    src="/api/placeholder/100/100"
                    alt={`Character ${i}`}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Sword className="w-4 h-4 text-red-400" />
                        <span>2.1M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span>1.8M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
