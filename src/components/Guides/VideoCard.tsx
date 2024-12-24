// components/VideoCard.tsx
import { VideoGuide } from '../../types';

export const VideoCard = ({ guide }: { guide: VideoGuide }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${guide.videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border-0"
      />
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-white">{guide.title}</h3>
        <span className="px-2 py-1 bg-red-600/20 rounded-full text-xs text-red-400">
          {guide.category}
        </span>
      </div>
      <p className="text-sm text-gray-300 mb-2">{guide.description}</p>
      <time className="text-xs text-gray-400">{guide.date}</time>
    </div>
  </div>
);