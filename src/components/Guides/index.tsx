'use client';

import { useState } from 'react';
import { Swords, BookOpen, Target, Trophy, Gem } from 'lucide-react';
import TopGuide from './TopGuide';
import { VideoCard } from './VideoCard';
import { GuideCard as GuideCardType, VideoGuide } from '../../types';

const guides: GuideCardType[] = [
  {
    id: 'top-guide',
    title: "Tournament of Power Guide",
    description: "Seasonal TOP guides with optimal routes and team compositions.",
    image: "/top-guide.jpg",
    icon: 'trophy' as 'trophy',
    category: 'TOP Guide'
  },
  {
    id: 'chrono-guide',
    title: "Chrono Guides",
    description: "Learn how to farm and manage your Chrono Crystals efficiently.",
    image: "/chrono.jpg",
    icon: 'gem' as 'gem',
    category: 'Resource'
  },
  {
    id: 'pvp-guide',
    title: "PvP Mastery Guide",
    description: "Master advanced PvP techniques and strategies.",
    image: "/pvp-guide.jpg",
    icon: 'sword' as 'sword',
    category: 'PvP'
  }
];
const chronoGuides: VideoGuide[] = [
 {
   title: "Monthly CC Guide",
   description: "HOW TO SAVE UPTO 20K CHRONO CRYSTAL FOR LEGENDS FESTIVAL 2024",
   videoId: "ZseEAY2-76k",
   category: "Monthly Guide",
   date: "2024-01-15"
 },
 {
   title: "F2P CC Guide",
   description: "How to get upto 5000 chrono crystal from this weekly reset",
   videoId: "rOrf7n61bhM",
   category: "Farming Guide",
   date: "2024-01-10"
 }
];

const GuideCard = ({ guide, onClick }: { guide: GuideCardType; onClick: () => void }) => {
 const getIcon = (iconType: string) => {
   switch (iconType) {
     case 'trophy': return <Trophy className="w-5 h-5 text-yellow-400" />;
     case 'sword': return <Swords className="w-5 h-5 text-red-400" />;
     case 'gem': return <Gem className="w-5 h-5 text-purple-400" />;
     case 'target': return <Target className="w-5 h-5 text-green-400" />;
     default: return <BookOpen className="w-5 h-5 text-yellow-400" />;
   }
 };

 return (
   <div 
     onClick={onClick}
     className="group bg-white/10 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
   >
     <div className="relative h-48">
       <img
         src={guide.image || "/api/placeholder/400/300"}
         alt={guide.title}
         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
       <div className="absolute top-4 left-4">
         <span className="px-3 py-1 rounded-full bg-red-600/80 text-white text-xs">
           {guide.category}
         </span>
       </div>
     </div>
     <div className="p-6">
       <div className="flex items-center gap-2 mb-2">
         {getIcon(guide.icon)}
         <h3 className="text-lg font-bold text-white">{guide.title}</h3>
       </div>
       <p className="text-gray-300 text-sm leading-relaxed">
         {guide.description}
       </p>
       <div className="mt-4 flex items-center text-sm text-gray-400">
         <span className="flex items-center gap-1">
           <BookOpen className="w-4 h-4" />
           Read More
         </span>
       </div>
     </div>
   </div>
 );
};

const ChronoGuideContent = () => (
 <div className="space-y-6">
   <div className="flex items-center gap-2 mb-4">
     <Gem className="w-6 h-6 text-purple-400" />
     <h2 className="text-2xl font-bold text-white">Chrono Crystal Guides</h2>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {chronoGuides.map((guide, idx) => (
       <VideoCard key={idx} guide={guide} />
     ))}
   </div>
 </div>
);

const Guides = () => {
 const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

 const renderGuideContent = () => {
   switch(selectedGuide) {
     case 'top-guide':
       return <TopGuide />;
     case 'chrono-guide':
       return <ChronoGuideContent />;
     default:
       return (
         <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
           {guides.map((guide) => (
             <GuideCard 
               key={guide.id} 
               guide={guide} 
               onClick={() => setSelectedGuide(guide.id)}
             />
           ))}
         </div>
       );
   }
 };

 if (selectedGuide) {
   return (
     <div>
       <button 
         onClick={() => setSelectedGuide(null)}
         className="mb-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
       >
         ← Back to Guides
       </button>
       {renderGuideContent()}
     </div>
   );
 }

 return renderGuideContent();
};

export default Guides;