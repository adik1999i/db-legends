'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Users, BookOpen, Trophy, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ALL_CHARACTERS } from '../data/characters';

interface SearchResult {
  id: string;
  title: string;
  type: 'character' | 'team' | 'guide';
  image?: string;
  description?: string;
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search characters
    Object.entries(ALL_CHARACTERS).forEach(([id, character]) => {
      if (
        character.name.toLowerCase().includes(lowerQuery) ||
        character.traits.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      ) {
        searchResults.push({
          id,
          title: character.name,
          type: 'character',
          image: character.image,
          description: character.traits.type
        });
      }
    });

    // Mock teams and guides search (you can replace with actual data)
    const teams = [
      { id: 'fusion-warriors', title: 'Fusion Warriors', description: 'Top-tier fusion team' },
      { id: 'saiyan', title: 'Saiyan', description: 'Classic Saiyan team' }
    ];

    const guides = [
      { id: 'pvp-guide', title: 'PvP Guide', description: 'Master PvP mechanics' },
      { id: 'beginners-guide', title: 'Beginner\'s Guide', description: 'Start your journey' }
    ];

    // Add matching teams
    teams.forEach(team => {
      if (team.title.toLowerCase().includes(lowerQuery)) {
        searchResults.push({ ...team, type: 'team' as const });
      }
    });

    // Add matching guides
    guides.forEach(guide => {
      if (guide.title.toLowerCase().includes(lowerQuery)) {
        searchResults.push({ ...guide, type: 'guide' as const });
      }
    });

    setResults(searchResults);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'character':
        return <Trophy className="w-4 h-4 text-yellow-400" />;
      case 'team':
        return <Users className="w-4 h-4 text-blue-400" />;
      case 'guide':
        return <BookOpen className="w-4 h-4 text-green-400" />;
      default:
        return null;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setSearchQuery('');
    switch (result.type) {
      case 'character':
        router.push(`/character/${result.id}`);
        break;
      case 'team':
        router.push(`/teams/${result.id}`);
        break;
      case 'guide':
        router.push(`/guides/${result.id}`);
        break;
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Mobile Search Toggle */}
      <div className="sm:hidden mb-4 flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white/10 rounded-full"
        >
          <Search className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* Search Input */}
      <div className={`relative ${isOpen ? 'block' : 'hidden sm:block'}`}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search characters, teams, or guides..."
          className="w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all"
        />
        <Search className="absolute left-3 sm:left-4 top-3 sm:top-4 h-5 w-5 text-gray-400" />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-3 sm:top-4 p-1 hover:bg-white/10 rounded-full"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-white/10 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={`${result.type}-${result.id}`}
              onClick={() => handleResultClick(result)}
              className={`flex items-center gap-4 p-4 hover:bg-white/10 cursor-pointer transition-colors
                ${index !== results.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              {result.image ? (
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  {getIcon(result.type)}
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  {getIcon(result.type)}
                  <h4 className="text-white font-semibold">{result.title}</h4>
                </div>
                {result.description && (
                  <p className="text-sm text-gray-400">{result.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}