'use client';
import React from 'react';
import { Sword, Shield, Star } from 'lucide-react';


const Teams = () => {
  const teams = [
    {
      name: 'Fusion Warriors',
      description: 'Top-tier fusion characters',
      members: [
        { name: 'Lf Vegito Blue', attack: '1.5M', defense: '1.2M', imageSrc: '/vegito.webp' },
        { name: 'Lf SSJ3 Gotenks', attack: '1.7M', defense: '1.4M', imageSrc: '/ssj3-gotenks.webp' },
        { name: 'Leader Slot Ultra Majin Vegeta', attack: '1.7M', defense: '1.4M', imageSrc: '/ul-majin.webp' },

      ],
    },
    {
      name: 'Saiyan',
      description: 'Classic Saiyan',
      members: [
        { name: 'Ultra Majin Vegeta', attack: '1.8M', defense: '1.3M', imageSrc: '/ul-majin.webp' },
        { name: 'Lf Vegito Blue', attack: '1.6M', defense: '1.1M', imageSrc: '/vegito.webp' },
        { name: 'Lf Ssj2 Goku', attack: '1.6M', defense: '1.1M', imageSrc: '/ssj3.webp' },
      ],
    },
  ];

  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {teams.map((team, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md border-0 text-white p-3 sm:p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-2">
            <h3 className="text-base sm:text-lg font-semibold">{team.name}</h3>
            <p className="text-gray-300 text-xs sm:text-sm">{team.description}</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {team.members.map((member, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex gap-1 mb-1">
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
                      <span>{member.attack}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                      <span>{member.defense}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
    </div>
    
  );
};

export default Teams;