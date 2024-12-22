export default function Loading() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-black-900 to-gray-900 flex items-center justify-center">
        <div className="relative w-20 h-20">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-red-600/20 rounded-full animate-ping"></div>
          {/* Core circle */}
          <div className="relative bg-red-600 rounded-full w-full h-full animate-pulse"></div>
        </div>
      </div>
    );
  }