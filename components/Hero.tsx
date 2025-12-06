export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e293b_0%,_#0f172a_50%,_#000000_100%)]"></div>
      
      {/* Dot grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-sm font-normal text-gray-400">
              Introducing
            </span>
          </div>
          
          {/* Main heading - AuthKit style */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-b from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              AuthKit
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed font-light">
            The world&apos;s best login box,
            <br />
            powered by WorkOS + Radix.
          </p>
          
          {/* 3 Login Cards Preview */}
          <div className="relative max-w-6xl mx-auto mt-24">
            <div className="flex gap-8 justify-center items-center perspective-1000">
              {/* Left Card - Welcome to the Internet */}
              <div className="w-80 bg-[#1a1b23] border border-white/[0.08] rounded-3xl p-8 shadow-2xl transform rotate-[-6deg] scale-90 opacity-70 hover:rotate-[-3deg] hover:scale-95 hover:opacity-90 transition-all duration-300">
                <div className="text-left mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Welcome to the Internet</h3>
                  <p className="text-sm text-gray-400">Log in to continue to your favorite memes</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input 
                      type="text" 
                      placeholder="krrishyogi18@gmail.com"
                      className="w-full h-11 bg-black/50 border border-white/10 rounded-xl px-4 text-sm text-white placeholder-gray-600"
                      defaultValue="krrishyogi18@gmail.com"
                    />
                  </div>
                  <button className="w-full h-11 bg-white text-black rounded-xl font-medium text-sm hover:bg-gray-100 transition-all">
                    Continue
                  </button>
                  <div className="text-center text-sm text-gray-500">
                    Don&apos;t have an account? <span className="text-white">Sign up</span>
                  </div>
                </div>
              </div>
              
              {/* Center Card (Main) - Sign in to SuperApp */}
              <div className="w-96 bg-[#1a1b23] border border-white/[0.12] rounded-3xl p-10 shadow-2xl z-10 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-pulse">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-1">Sign in to SuperApp</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2.5">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full h-12 bg-black/50 border border-white/10 rounded-xl px-4 text-sm text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                  <button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-purple-500/30">
                    Continue
                  </button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-[#1a1b23] text-gray-500">OR</span>
                    </div>
                  </div>
                  <button className="w-full h-12 bg-transparent border border-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                  </button>
                  <button className="w-full h-12 bg-transparent border border-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    Continue with Microsoft
                  </button>
                  <div className="text-center text-sm text-gray-500 mt-6">
                    Don&apos;t have an account? <span className="text-white hover:underline cursor-pointer">Sign up</span>
                  </div>
                </div>
              </div>
              
              {/* Right Card - Clamer */}
              <div className="w-80 bg-[#1a1b23] border border-white/[0.08] rounded-3xl p-8 shadow-2xl transform rotate-[6deg] scale-90 opacity-70 hover:rotate-[3deg] hover:scale-95 hover:opacity-90 transition-all duration-300">
                <div className="text-left mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Sign in to Clamer</h3>
                  <p className="text-sm text-gray-400">Enter a one-time passcode from your authenticator app.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2 justify-between">
                    <input type="text" maxLength={1} className="w-14 h-14 bg-black/50 border border-white/10 rounded-xl text-center text-xl text-white" />
                    <input type="text" maxLength={1} className="w-14 h-14 bg-black/50 border border-white/10 rounded-xl text-center text-xl text-white" />
                    <input type="text" maxLength={1} className="w-14 h-14 bg-black/50 border border-white/10 rounded-xl text-center text-xl text-white" />
                    <input type="text" maxLength={1} className="w-14 h-14 bg-black/50 border border-white/10 rounded-xl text-center text-xl text-white" />
                  </div>
                  <button className="w-full h-11 bg-white text-black rounded-xl font-medium text-sm hover:bg-gray-100 transition-all">
                    Continue
                  </button>
                  <div className="text-center text-sm text-gray-500">
                    Use another method to sign in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
