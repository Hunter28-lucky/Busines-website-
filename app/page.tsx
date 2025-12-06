import Hero from '@/components/Hero';
import FeaturesSlider from '@/components/FeaturesSlider';

export default function Home() {
  return (
    <main className="page bg-[#05060F]">
      {/* Hero Section with 3-card login system */}
      <Hero />

      {/* Features Slider - infinite scroll of authentication features */}
      <FeaturesSlider />

      {/* Page Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto"></div>

      {/* Page Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto"></div>

      {/* Custom UI Section - "Your brand. Your style." */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium text-gray-400">
              Customizable
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Your brand. Your style.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Goswami can be fully customized to fit natively with your app&apos;s unique design.
          </p>
        </div>

        {/* Browser Preview with Floating Customization Cards */}
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="relative h-[700px] bg-gradient-to-br from-[#0A0A0D]/50 to-[#05060F] rounded-3xl overflow-hidden border border-white/[0.08]">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            
            {/* Central Login Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] bg-[#0D0E12] border border-white/[0.12] rounded-2xl p-7 shadow-2xl z-10">
              <div className="flex flex-col gap-5">
                <div className="text-center mb-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Sign in to SuperApp</h3>
                </div>
                
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full h-10 bg-black/40 border border-white/10 rounded-lg px-3 text-sm text-white placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 font-medium">Password</label>
                    <input 
                      type="password" 
                      placeholder="Enter your password"
                      className="w-full h-10 bg-black/40 border border-white/10 rounded-lg px-3 text-sm text-white placeholder-gray-600"
                    />
                  </div>
                  <button className="w-full h-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-all shadow-lg shadow-indigo-500/20">
                    Continue
                  </button>
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-white/[0.08]"></div>
                    <span className="flex-shrink-0 mx-4 text-xs text-gray-600 font-medium">OR</span>
                    <div className="flex-grow border-t border-white/[0.08]"></div>
                  </div>
                  <button className="w-full h-10 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                    Continue with Google
                  </button>
                  <p className="text-center text-xs text-gray-600 mt-3">
                    Don&apos;t have an account? <span className="text-white cursor-pointer hover:underline">Sign up</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Widget: Colour */}
            <div className="absolute top-16 left-12 bg-[#0D0E12] border border-white/[0.08] rounded-xl p-4 w-44 shadow-xl animate-float">
              <div className="text-xs text-gray-500 mb-2.5 font-medium">Colour</div>
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded bg-[#EF4444] cursor-pointer"></div>
                <div className="w-7 h-7 rounded bg-[#8B5CF6] cursor-pointer"></div>
                <div className="w-7 h-7 rounded bg-[#3B82F6] ring-2 ring-white ring-offset-2 ring-offset-[#0D0E12] cursor-pointer"></div>
                <div className="w-7 h-7 rounded bg-[#10B981] cursor-pointer"></div>
              </div>
            </div>

            {/* Floating Widget: Preferred appearance */}
            <div className="absolute top-[35%] left-8 bg-[#0D0E12] border border-white/[0.08] rounded-xl p-4 w-52 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-xs text-gray-500 mb-2.5 font-medium">Preferred appearance</div>
              <div className="flex bg-black/40 rounded-lg p-1 border border-white/5">
                <div className="flex-1 py-1.5 text-center text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">System</div>
                <div className="flex-1 py-1.5 text-center text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">Light</div>
                <div className="flex-1 py-1.5 text-center text-xs text-white bg-white/10 rounded cursor-pointer">Dark</div>
              </div>
            </div>

            {/* Floating Widget: Radius */}
            <div className="absolute bottom-32 left-16 bg-[#0D0E12] border border-white/[0.08] rounded-xl p-4 w-44 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-xs text-gray-500 mb-3 font-medium">Radius</div>
              <div className="flex gap-2 mb-3">
                <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-2/3"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-7 h-7 bg-white/5 rounded-sm border border-white/10"></div>
                <div className="w-7 h-7 bg-white/5 rounded-md border border-white/10"></div>
                <div className="w-7 h-7 bg-white/10 rounded-lg border border-indigo-500/50"></div>
                <div className="w-7 h-7 bg-white/5 rounded-xl border border-white/10"></div>
              </div>
            </div>

            {/* Floating Widget: Button text */}
            <div className="absolute top-12 right-[35%] bg-[#0D0E12] border border-white/[0.08] rounded-xl p-3.5 w-40 shadow-xl animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="text-xs text-gray-500 mb-2 font-medium">Button text</div>
              <div className="text-xs text-white bg-white/5 p-2 rounded border border-white/5 text-center font-medium">Continue</div>
            </div>

            {/* Floating Widget: Logo icon */}
            <div className="absolute top-[28%] right-10 bg-[#0D0E12] border border-white/[0.08] rounded-xl p-4 w-52 shadow-xl animate-float" style={{ animationDelay: '0.7s' }}>
              <div className="text-xs text-gray-500 mb-3 font-medium">Logo icon</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center border border-indigo-500/50 shadow-lg shadow-indigo-500/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer text-white text-lg">⚡</div>
                <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer text-white text-lg">🎨</div>
                <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer text-white text-lg">✨</div>
              </div>
            </div>

            {/* Floating Widget: Page background */}
            <div className="absolute bottom-[35%] right-8 bg-[#0D0E12] border border-white/[0.08] rounded-xl p-4 w-44 shadow-xl animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="text-xs text-gray-500 mb-2.5 font-medium">Page background</div>
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded bg-[#0D0E12] border border-white/20 cursor-pointer ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#0D0E12]"></div>
                <div className="w-7 h-7 rounded bg-[#05060F] border border-white/5 cursor-pointer"></div>
              </div>
            </div>

            {/* Floating Widget: Links */}
            <div className="absolute bottom-14 left-[35%] bg-[#0D0E12] border border-white/[0.08] rounded-xl p-3.5 w-40 shadow-xl animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="text-xs text-gray-500 mb-2.5 font-medium">Links</div>
              <div className="flex gap-3">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-white/20" />
                  <span className="text-xs text-gray-400">C7D3EA</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-white/20" />
                  <span className="text-xs text-gray-400">C7D3EA</span>
                </label>
              </div>
            </div>

            {/* Floating Widget: Favicon */}
            <div className="absolute bottom-16 right-[30%] bg-[#0D0E12] border border-white/[0.08] rounded-xl p-4 w-52 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-xs text-gray-500 mb-3 font-medium">Favicon</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-white/5 rounded-lg text-center hover:bg-white/10 cursor-pointer">
                  <div className="text-[10px] text-gray-400 leading-tight">Upload light mode favicon</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg text-center hover:bg-white/10 cursor-pointer">
                  <div className="text-[10px] text-gray-400 leading-tight">Upload dark mode favicon</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Page Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto"></div>

      {/* Radix Section - "Built on Radix" */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-[#BAD6F7] to-[#7CA8DD] bg-clip-text text-transparent">
              Framework freedom
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Built on Radix, the most popular<br />open source design system.
            </span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Goswami is built with the same UI components used by Vercel, Linear, Supabase, and thousands of others.
          </p>

          {/* Radix Logo Placeholder */}
          <div className="flex justify-center">
            <div className="text-6xl font-bold text-white/10">RADIX</div>
          </div>
        </div>
      </section>

      {/* Page Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto"></div>

      {/* Security Section - 5 feature cards */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#05060F]">
        <div className="container mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-gray-400 mb-6">
            Advanced security
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Designed for developers.<br />Built for the enterprise.
          </h3>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            AuthKit supports enterprise-grade security with modern authentication and authorization standards.
          </p>
        </div>

        {/* Security Feature Cards Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            
            {/* Card 1: Leaked password protection */}
            <div className="bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.12] transition-all group">
              <div className="flex flex-col items-center justify-center h-48 mb-4">
                <div className="w-full max-w-[200px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-red-500/50 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 bg-white/5 rounded w-2/3 mx-auto"></div>
                    <div className="h-6 bg-[#050505] border border-red-500/30 rounded flex items-center px-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-red-500/10"></div>
                      <div className="text-[10px] text-white tracking-wider">••••••••</div>
                    </div>
                    <div className="text-[9px] text-red-400 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-400"></span> Leaked password
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-base font-medium text-white text-center">Leaked password protection</h4>
            </div>

            {/* Card 2: Role-Based Access Control */}
            <div className="bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.12] transition-all group">
              <div className="flex flex-col items-center justify-center h-48 mb-4">
                <div className="w-full max-w-[180px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-4 shadow-lg">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-[#050505] rounded border border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-indigo-600"></div>
                        <div className="w-3 h-3 rounded bg-white/20"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-[#050505] rounded border border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-white/10"></div>
                        <div className="w-3 h-3 rounded bg-white/20"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-[#050505] rounded border border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-white/10"></div>
                        <div className="w-3 h-3 rounded bg-white/20"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-base font-medium text-white text-center">Role-Based Access Control</h4>
            </div>

            {/* Card 3: Password strength validation */}
            <div className="bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.12] transition-all group">
              <div className="flex flex-col items-center justify-center h-48 mb-4">
                <div className="w-full max-w-[200px] bg-[#0A0A0D] border border-white/[0.08] rounded-xl p-4 shadow-lg">
                  <div className="space-y-3">
                    <div className="text-[10px] text-gray-500 mb-1">Password</div>
                    <div className="h-8 bg-[#050505] border border-white/[0.08] rounded flex items-center px-2">
                      <div className="text-xs text-white font-mono">M8zbbr@78GedU9</div>
                    </div>
                    <div className="flex gap-1 h-1">
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-[9px] text-green-400">Strong password</div>
                  </div>
                </div>
              </div>
              <h4 className="text-base font-medium text-white text-center">Password strength validation</h4>
            </div>

            {/* Card 4: Automatic spam and bot detection (wider) */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.12] transition-all group">
              <div className="flex flex-col items-center justify-center h-48 mb-4">
                <div className="relative w-full max-w-[280px] h-[160px] flex items-center justify-center">
                  {/* Radar circles */}
                  <div className="absolute w-40 h-40 border border-white/5 rounded-full"></div>
                  <div className="absolute w-28 h-28 border border-white/10 rounded-full"></div>
                  <div className="absolute w-16 h-16 border border-white/20 rounded-full"></div>
                  {/* Rotating radar beam */}
                  <div className="absolute w-40 h-40 animate-spin" style={{ animationDuration: '3s' }}>
                    <div className="absolute top-0 left-1/2 w-1 h-20 bg-gradient-to-b from-indigo-500/60 to-transparent origin-bottom"></div>
                  </div>
                  {/* Detected threats */}
                  <div className="absolute top-8 right-12 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-10 left-14 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-16 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              <h4 className="text-base font-medium text-white text-center">Automatic spam and bot detection</h4>
            </div>

            {/* Card 5: Multi-Factor Authentication */}
            <div className="bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.12] transition-all group">
              <div className="flex flex-col items-center justify-center h-48 mb-4">
                <div className="w-full max-w-[200px]">
                  <div className="flex justify-center gap-1.5 mb-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className={`w-10 h-12 rounded-lg border flex items-center justify-center text-white font-mono text-lg ${
                        i <= 2 ? 'border-indigo-500/50 bg-indigo-500/10' : 
                        i === 3 ? 'border-indigo-500 bg-indigo-500/20 animate-pulse' : 
                        'border-white/10 bg-[#0A0A0D]'
                      }`}>
                        {i <= 2 ? '•' : i === 3 ? '|' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-center text-gray-500">Enter your 6-digit code</div>
                </div>
              </div>
              <h4 className="text-base font-medium text-white text-center">Multi-Factor Authentication</h4>
            </div>

          </div>
        </div>
      </section>

      {/* Page Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto"></div>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto bg-gradient-to-b from-white/[0.02] to-transparent">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Start building today
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://workos.com/docs/user-management" 
                className="px-8 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Get started
              </a>
              <a 
                href="https://github.com/workos/authkit" 
                className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
