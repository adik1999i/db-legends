'use client';

import { useState, useEffect } from 'react';
import { Sword, Shield, X } from 'lucide-react';
import type { Team, TeamDialogProps, TeamDetailsMapping } from '../types';

const TeamDialog = ({ team, isOpen, onClose }: TeamDialogProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !team) return null;

  const teamDetails: TeamDetailsMapping = {
    'Fusion Warriors': {
      image: '/fusion-team.webp',
      subtitle: 'The Ultimate Fusion Team Composition',
      description: `The Fusion Warriors team composition represents the pinnacle of offensive capability in Dragon Ball Legends. This team capitalizes on the unique fusion mechanics of the Dragon Ball universe, bringing together the most powerful fused warriors.

      The team excels in maintaining combo pressure while having the defensive capabilities to withstand enemy rushes. The synergy between units allows for seamless switch-ins and devastating combo extensions.`,
      strategy: `Key Strategy Points:
      • Start battles with Vegito Blue to build early pressure
      • Save Gotenks' main ability for late-game comebacks
      • Use Ultra Majin Vegeta as a counter against powerful yellow units
      • Maintain vanish gauge advantage through strategic switches`
    },
    'Saiyan': {
      image: '/saiyan-team.webp',
      subtitle: 'Pure Saiyan Power Team',
      description: `The Classic Saiyan team remains one of the most reliable and powerful team compositions in the game. Drawing from the deep pool of Saiyan characters, this team offers incredible flexibility and raw power while maintaining strong defensive options.

      The team's strength lies in its ability to adapt to any situation, with each unit capable of functioning as both an offensive and defensive pivot.`,
      strategy: `Key Strategy Points:
      • Ultra Majin Vegeta serves as the primary damage dealer
      • Use SSJ2 Goku as a last-stand unit with healing
      • Vegito Blue provides crucial combo extensions
      • Focus on building rising rush quickly through aggressive play`
    }
  };

  const currentTeam = teamDetails[team.name];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start md:items-center justify-center z-50 overflow-y-auto">
      <div className="relative w-full min-h-screen md:min-h-0 md:w-[90%] md:my-8 max-w-5xl bg-gradient-to-br from-gray-900 to-black md:rounded-xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-20 bg-black/50 p-2 rounded-full"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div className="block md:hidden relative aspect-[16/9]">
              <img
                src={team.image}
                alt={team.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-gray-900" />
            </div>
            
            <div className="hidden md:block h-[600px]">
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:max-h-[600px] overflow-y-auto">
            <div className="p-6 md:p-8 text-white">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{team.name}</h2>
                <p className="text-lg md:text-xl text-gray-400">{currentTeam.subtitle}</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Sword className="w-5 h-5 text-red-400" />
                    <span className="text-base md:text-lg">Team Power: 8.2M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-base md:text-lg">Support: A+</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">Overview</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {currentTeam.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">Battle Strategy</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {currentTeam.strategy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const teams: Team[] = [
    {
      name: 'Fusion Warriors',
      description: 'Top-tier fusion characters',
      image: '/fusion-team.jpg',
      core: [
        { name: 'LF Vegito Blue', imageSrc: '/vegito.webp' },
        { name: 'LF SSJ3 Gotenks', imageSrc: '/ssj3-gotenks.webp' },
        { name: 'Ultra Majin Vegeta', imageSrc: '/ul-majin.webp' },
      ],
      bench: [
        { name: 'SSJ Gogeta', imageSrc: '/ssj-gogeta.webp' },
        { name: 'LF SSJ4 Gogeta', imageSrc: '/ssj4-gogeta.webp' },
        { name: 'SSJ3 Gotenks', imageSrc: '/ssj3-gotenks-sp.webp' },

      ]
    },
    {
      name: 'Saiyan',
      description: 'Classic Saiyan',
      image: '/saiyan-team.jpg',
      core: [
        { name: 'Ultra Majin Vegeta', imageSrc: '/ul-majin.webp' },
        { name: 'LF Vegito Blue', imageSrc: '/vegito.webp' },
        { name: 'LF SSJ2 Goku', imageSrc: '/ssj3.webp' },
      ],
      bench: [
        { name: 'LF SSJ3 Goku', imageSrc: '/ssj-goku.webp' },
        { name: 'LF Bardock', imageSrc: '/lf-bardock.webp' },
        { name: 'Pui Pui', imageSrc: '/pui-pui.webp' },
      ]
    },
  ];

  if (!mounted) return null;

  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {teams.map((team, index) => (
        <div
          key={index}
          onClick={() => setSelectedTeam(team)}
          className="bg-white/10 backdrop-blur-md border-0 text-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">{team.name}</h3>
            <p className="text-gray-300 text-sm">{team.description}</p>
          </div>

          <div className="flex gap-4">
            {/* Core Team */}
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Core</h4>
              <div className="space-y-2">
                {team.core.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="text-sm truncate">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bench */}
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Bench</h4>
              <div className="space-y-2">
                {team.bench.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="text-sm truncate">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <TeamDialog 
        team={selectedTeam} 
        isOpen={selectedTeam !== null}
        onClose={() => setSelectedTeam(null)}
      />
    </div>
  );
};
export default Teams;