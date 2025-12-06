import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import FeaturesSlider from '@/components/FeaturesSlider';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#05060F] min-h-screen">
      <Hero />

      {/* Features Slider */}
      <FeaturesSlider />

      {/* Architecture Diagram Section (Dashboard) */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#05060F]">
         <div className="container mx-auto px-6 mb-16 text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-gray-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Extensible by design
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Your users. Your data.<br />Maximum flexibility.
              </h2>
              <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                AuthKit is compatible with any app architecture, allowing you to easily sync user updates via realtime APIs.
              </p>
            </ScrollReveal>
         </div>
         <ArchitectureDiagram />
      </section>

      {/* Customization Section (Make it yours) */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#05060F]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-gray-400 mb-6">
                Customizable
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Your brand. Your style.
              </h2>
              <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                AuthKit can be fully customized to fit natively with your app&apos;s unique design.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative w-full max-w-5xl mx-auto h-[800px] bg-[#050505] border border-white/10 rounded-3xl overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Central Login Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl z-10">
                <div className="flex flex-col gap-6">
                  <div className="text-center mb-2">
                    <div className="w-12 h-12 bg-white/10 rounded-xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                      C
                    </div>
                    <h3 className="text-xl font-medium text-white mb-1">Sign in to SuperApp</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Email</label>
                      <input type="email" placeholder="Your email address" className="w-full h-10 bg-[#050505] border border-white/10 rounded-lg px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Password</label>
                      <input type="password" placeholder="Enter your password" className="w-full h-10 bg-[#050505] border border-white/10 rounded-lg px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500" />
                    </div>
                    <button className="w-full h-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-colors">
                      Continue
                    </button>
                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink-0 mx-4 text-xs text-gray-600">OR</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>
                    <button className="w-full h-10 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                      Continue with Google
                    </button>
                    <p className="text-center text-xs text-gray-600 mt-4">
                      Don&apos;t have an account? <span className="text-white cursor-pointer hover:underline">Sign up</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Widgets */}
              {/* Color Picker */}
              <div className="absolute top-20 left-20 bg-[#111] border border-white/10 rounded-xl p-4 w-48 shadow-xl animate-float" style={{ animationDelay: '0s' }}>
                <div className="text-xs text-gray-500 mb-2">Colour</div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-[#FF5733] cursor-pointer"></div>
                  <div className="w-6 h-6 rounded bg-[#33FF57] cursor-pointer"></div>
                  <div className="w-6 h-6 rounded bg-[#3357FF] ring-2 ring-white ring-offset-2 ring-offset-black cursor-pointer"></div>
                  <div className="w-6 h-6 rounded bg-[#F333FF] cursor-pointer"></div>
                </div>
              </div>

              {/* Appearance */}
              <div className="absolute top-60 left-10 bg-[#111] border border-white/10 rounded-xl p-4 w-56 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs text-gray-500 mb-2">Preferred appearance</div>
                <div className="flex bg-black rounded-lg p-1 border border-white/5">
                  <div className="flex-1 py-1 text-center text-xs text-gray-500 cursor-pointer hover:text-white">System</div>
                  <div className="flex-1 py-1 text-center text-xs text-gray-500 cursor-pointer hover:text-white">Light</div>
                  <div className="flex-1 py-1 text-center text-xs text-white bg-white/10 rounded cursor-pointer">Dark</div>
                </div>
              </div>

              {/* Radius */}
              <div className="absolute bottom-40 left-24 bg-[#111] border border-white/10 rounded-xl p-4 w-48 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs text-gray-500 mb-2">Radius</div>
                <div className="flex gap-2">
                  <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-2/3"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-8 h-4 bg-white/5 rounded-sm"></div>
                  <div className="w-8 h-4 bg-white/20 rounded-md border border-indigo-500/50"></div>
                </div>
              </div>

              {/* Logo Icon */}
              <div className="absolute top-40 right-20 bg-[#111] border border-white/10 rounded-xl p-4 w-56 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-xs text-gray-500 mb-2">Logo icon</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center border border-indigo-500/50 text-white">C</div>
                  <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">❖</div>
                  <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">⚡</div>
                  <div className="h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">👁</div>
                </div>
              </div>

              {/* Button Text */}
              <div className="absolute top-10 right-60 bg-[#111] border border-white/10 rounded-xl p-3 w-40 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-xs text-gray-500 mb-1">Button text</div>
                <div className="text-xs text-white bg-white/5 p-2 rounded border border-white/5">Continue</div>
              </div>

              {/* Page Background */}
              <div className="absolute bottom-60 right-10 bg-[#111] border border-white/10 rounded-xl p-4 w-48 shadow-xl animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="text-xs text-gray-500 mb-2">Page background</div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded bg-[#111] border border-white/20 cursor-pointer"></div>
                  <div className="w-6 h-6 rounded bg-[#05060F] border border-white/5 cursor-pointer"></div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid (Security) */}
      <section className="py-24 md:py-32 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-gray-400 mb-6">
                Security
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Enterprise-grade security
              </h2>
              <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                Protect your users with advanced security features built-in.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1: Leaked Password Protection */}
            <ScrollReveal className="md:col-span-1">
              <div className="group h-[320px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 w-full max-w-[200px]">
                  <div className="bg-[#111] border border-white/10 rounded-lg p-4 mb-6 shadow-lg">
                    <div className="h-2 bg-white/10 rounded w-1/3 mb-3"></div>
                    <div className="h-8 bg-[#050505] border border-red-500/50 rounded flex items-center px-3 text-white tracking-widest">
                      ••••••••
                    </div>
                    <div className="text-[10px] text-red-400 mt-2 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-400"></span> Leaked password detected
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mt-4">Leaked password protection</h3>
              </div>
            </ScrollReveal>

            {/* Card 2: RBAC */}
            <ScrollReveal className="md:col-span-1">
              <div className="group h-[320px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 w-full max-w-[200px]">
                  <div className="bg-[#111] border border-white/10 rounded-lg p-4 mb-6 shadow-lg flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="w-4 h-4 border border-white/20 rounded"></div>
                      <div className="w-8 h-4 bg-indigo-600 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-4 h-4 border border-white/20 rounded"></div>
                      <div className="w-8 h-4 bg-white/10 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-500 rounded-full"></div></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-4 h-4 border border-white/20 rounded"></div>
                      <div className="w-8 h-4 bg-white/10 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-500 rounded-full"></div></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mt-4">Role-Based Access Control</h3>
              </div>
            </ScrollReveal>

            {/* Card 3: Password Strength */}
            <ScrollReveal className="md:col-span-1">
              <div className="group h-[320px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 w-full max-w-[200px]">
                  <div className="bg-[#111] border border-white/10 rounded-lg p-4 mb-6 shadow-lg">
                    <div className="h-8 bg-[#050505] border border-white/10 rounded flex items-center px-3 text-white mb-2">
                      a123456789!
                    </div>
                    <div className="flex gap-1 h-1">
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mt-4">Password strength validation</h3>
              </div>
            </ScrollReveal>

            {/* Card 4: Bot Detection (Wide) */}
            <ScrollReveal className="md:col-span-1.5">
              <div className="group h-[320px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 w-full max-w-[240px] h-[140px] flex items-center justify-center">
                  {/* Radar Effect */}
                  <div className="absolute w-40 h-40 border border-white/5 rounded-full"></div>
                  <div className="absolute w-28 h-28 border border-white/10 rounded-full"></div>
                  <div className="absolute w-16 h-16 border border-white/20 rounded-full"></div>
                  <div className="absolute w-40 h-40 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent rounded-full animate-spin opacity-50"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-10 right-10 animate-ping"></div>
                </div>
                <h3 className="text-lg font-medium text-white mt-4">Automatic spam and bot detection</h3>
              </div>
            </ScrollReveal>

            {/* Card 5: MFA (Wide) */}
            <ScrollReveal className="md:col-span-1.5">
              <div className="group h-[320px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 w-full max-w-[240px]">
                  <div className="flex justify-center gap-2 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className={`w-10 h-12 rounded-lg border ${i === 3 ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10 bg-[#050505]'} flex items-center justify-center text-white font-mono`}>
                        {i <= 2 ? '•' : i === 3 ? '|' : ''}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mt-4">Multi-Factor Authentication</h3>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#05060F]">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Start building today.
            </h2>
            <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Get started for free. No credit card required. Scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm text-black bg-white hover:bg-gray-100 transition-all duration-200 shadow-sm"
              >
                Get started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
