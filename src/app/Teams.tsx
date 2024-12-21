'use client';
import React from 'react';
import { Sword, Shield, Star } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      name: 'Fusion Warriors',
      description: 'Top-tier fusion characters',
      members: [
        { name: 'Vegito', attack: '1.5M', defense: '1.2M', imageSrc: '/vegito.webp' },
        { name: 'Gogeta', attack: '1.7M', defense: '1.4M', imageSrc: '/gogeta.webp' },
      ],
    },
    {
      name: 'Saiyan Saga',
      description: 'Classic Saiyan warriors',
      members: [
        { name: 'SSJ Goku', attack: '1.8M', defense: '1.3M', imageSrc: '/ssj2.webp' },
        { name: 'Vegeta', attack: '1.6M', defense: '1.1M', imageSrc: '/vegeta.webp' },
      ],
    },
  ];

  return (
    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {teams.map((team, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md border-0 text-white p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-2">
            <h3 className="text-lg font-semibold">{team.name}</h3>
            <p className="text-gray-300 text-sm">{team.description}</p>
          </div>
          <div className="space-y-4">
            {team.members.map((member, idx) => (
              <div key={idx} className="flex gap-4">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex gap-1 mb-1">
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
                      <span>{member.attack}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-blue-400" />
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
