export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-[#05060F] to-[#05060F]"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
            <span className="text-sm font-medium text-gray-400">
              Powered by WorkOS
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              The world&apos;s best
              <br />
              login box
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Goswami is a beautiful, customizable login experience powered by WorkOS and Radix.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#"
              className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors shadow-lg"
            >
              Get started
            </a>
            <a 
              href="#"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              View demo
            </a>
          </div>
          
          {/* 3 Login Cards Preview */}
          <div className="relative max-w-4xl mx-auto mt-20">
            <div className="flex gap-6 justify-center items-start perspective-1000">
              {/* Left Card */}
              <div className="w-72 bg-[#0D0E12] border border-white/[0.08] rounded-2xl p-6 shadow-2xl transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform opacity-60">
                <div className="text-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">Creative App</h3>
                </div>
                <div className="space-y-3">
                  <div className="h-9 bg-black/40 rounded-lg border border-white/10"></div>
                  <div className="h-9 bg-black/40 rounded-lg border border-white/10"></div>
                  <div className="h-9 bg-pink-600 rounded-lg"></div>
                </div>
              </div>
              
              {/* Center Card (Main) */}
              <div className="w-80 bg-[#0D0E12] border border-white/[0.12] rounded-2xl p-7 shadow-2xl z-10 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Sign in to SuperApp</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full h-10 bg-black/40 border border-white/10 rounded-lg px-3 text-sm text-white placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-medium">Password</label>
                    <input 
                      type="password" 
                      placeholder="Enter your password"
                      className="w-full h-10 bg-black/40 border border-white/10 rounded-lg px-3 text-sm text-white placeholder-gray-600"
                    />
                  </div>
                  <button className="w-full h-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-all shadow-lg shadow-indigo-500/20">
                    Continue
                  </button>
                </div>
              </div>
              
              {/* Right Card */}
              <div className="w-72 bg-[#0D0E12] border border-white/[0.08] rounded-2xl p-6 shadow-2xl transform rotate-[8deg] hover:rotate-[4deg] transition-transform opacity-60">
                <div className="text-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">FastApp</h3>
                </div>
                <div className="space-y-3">
                  <div className="h-9 bg-black/40 rounded-lg border border-white/10"></div>
                  <div className="h-9 bg-black/40 rounded-lg border border-white/10"></div>
                  <div className="h-9 bg-emerald-600 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
