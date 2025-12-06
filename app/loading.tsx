export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
          
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
          
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">EB</span>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Loading...</h2>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
