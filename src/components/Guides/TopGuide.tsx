'use client';

import { useState } from 'react';
import { Trophy, MapPin, Users, ChevronDown, ChevronUp, Swords } from 'lucide-react';

interface TOPSection {
  title: string;
  description: string;
  images: string[];
  content?: string;
}

interface TOPSeason {
  season: string;
  routes: TOPSection[];
  teams: TOPSection[];
  startDate?: string;
  endDate?: string;
}

const topSeasons: TOPSeason[] = [
  {
    season: 'Season 95',
    startDate: '2024-01-10',
    endDate: '2024-01-17',
    routes: [
      {
        title: 'Battle Route 1st Half',
        description: 'Optimal path',
        images: ['/top/s95/top-route.jpg'],
        content: 'Follow this route for the best score'
      },
      {
        title: 'Battle Route 2nd Half',
        description: 'Optimal path',
        images: ['/top/s95/top-route2.jpg'],
        content: 'Follow this route for the best score'
      }
    ],
    teams: [
      {
        title: 'Taunthan Team / Son Family',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/taunthan-team.jpg']
      },
      {
        title: 'GT Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/gt-team.jpg']
      },
      {
        title: 'Hybrids Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/hybrids-team.jpg']
      },
      {
        title: 'Regen Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/regen-team.jpg']
      },
      {
        title: 'LOE Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/loe-team.jpg']
      },
      {
        title: 'Sagas Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/sagas-team.jpg']
      },
      {
        title: 'Bardock Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/saiyan-team-1.jpg']
      },
      {
        title: 'Turles Team',
        description: 'Friendship rank minimum 5 , Use atleast 2 C tier for this season',
        images: ['/top/s95/turles-team.jpg']
      },
      // Add more teams as needed
    ]
  }
];

const Section = ({ section }: { section: TOPSection }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
          <p className="text-sm text-gray-300">{section.description}</p>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      {expanded && (
        <div className="p-4 pt-0">
          <div className="space-y-4">
            {section.images.map((image, idx) => (
              <div key={idx} className="relative">
                <img
                  src={image}
                  alt={`${section.title} illustration ${idx + 1}`}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
            {section.content && (
              <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const SeasonGuide = ({ season }: { season: TOPSeason }) => {
  const [activeTab, setActiveTab] = useState<'routes' | 'teams'>('routes');

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Season Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <div>
              <h2 className="text-xl font-bold text-white">{season.season}</h2>
              {season.startDate && season.endDate && (
                <p className="text-sm text-gray-300">
                  {season.startDate} - {season.endDate}
                </p>
              )}
            </div>
          </div>
          <div className="px-3 py-1 bg-red-600/20 rounded-full">
            <span className="text-sm text-red-400 font-medium">Active Season</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-2 bg-white/10 backdrop-blur-md p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('routes')}
          className={`flex-1 sm:flex-none flex items-center justify-center px-4 py-2 rounded-md transition-colors text-sm ${
            activeTab === 'routes'
              ? 'bg-red-600 text-white'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <MapPin className="w-4 h-4 mr-2" />
          Battle Routes
        </button>
        <button
          onClick={() => setActiveTab('teams')}
          className={`flex-1 sm:flex-none flex items-center justify-center px-4 py-2 rounded-md transition-colors text-sm ${
            activeTab === 'teams'
              ? 'bg-red-600 text-white'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <Users className="w-4 h-4 mr-2" />
          Team Builds
        </button>
      </div>

      {/* Content Sections */}
      <div className="space-y-4">
        {activeTab === 'routes'
          ? season.routes.map((route, idx) => (
              <Section key={idx} section={route} />
            ))
          : season.teams.map((team, idx) => (
              <Section key={idx} section={team} />
            ))}
      </div>
    </div>
  );
};

const TopGuide = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Swords className="w-6 h-6 text-red-400" />
        <h1 className="text-2xl font-bold text-white">Tournament of Power Guide</h1>
      </div>
      
      {topSeasons.map((season, idx) => (
        <SeasonGuide key={idx} season={season} />
      ))}
    </div>
  );
};

export default TopGuide;