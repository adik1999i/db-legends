'use client';

import { Youtube, Twitter, Instagram } from 'lucide-react';

interface Creator {
  name: string;
  channelName: string;
  image: string;
  subscribers: string;
  description: string;
  links: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
  };
  speciality: string[];
}

const creators: Creator[] = [
  {
    name: "Raiyuden Gaming",
    channelName: "Raiyuden",
    image: "/creators/raiyuden.jpg",
    subscribers: "150K+",
    description: "Known for detailed character showcases and competitive PvP gameplay",
    links: {
      youtube: "https://www.youtube.com/@Raiyuden",
      twitter: "https://twitter.com/Raiyuden_YT",
      instagram: "https://instagram.com/raiyuden_yt"
    },
    speciality: ["Character Showcases", "PvP Analysis", "Tutorial"]
  },
  {
    name: "Goresh",
    channelName: "Goresh",
    image: "/creators/goresh.jpg",
    subscribers: "200K+",
    description: "Top-tier gameplay and in-depth character analysis",
    links: {
      youtube: "https://www.youtube.com/@Goresh",
      twitter: "https://twitter.com/Goreshx"
    },
    speciality: ["Character Analysis", "Summon Videos", "Competitive PvP"]
  },
  // Add more creators
];

const CreatorCard = ({ creator }: { creator: Creator }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48">
        <img 
          src={creator.image} 
          alt={creator.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{creator.name}</h3>
          <p className="text-gray-300 text-sm">{creator.channelName}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="px-3 py-1 bg-red-600/20 rounded-full text-red-400 text-sm">
            {creator.subscribers} Subscribers
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4">
          {creator.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {creator.speciality.map((spec, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {creator.links.youtube && (
            <a 
              href={creator.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Youtube className="w-5 h-5 text-red-500" />
            </a>
          )}
          {creator.links.twitter && (
            <a 
              href={creator.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Twitter className="w-5 h-5 text-blue-400" />
            </a>
          )}
          {creator.links.instagram && (
            <a 
              href={creator.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Creators = () => {
  return (
    <div className="mt-4 sm:mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator, index) => (
          <CreatorCard key={index} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default Creators;