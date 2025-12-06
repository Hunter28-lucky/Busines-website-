'use client';

export default function FeaturesSlider() {
  const features = [
    { icon: '🔐', title: 'SSO', description: 'Single Sign-On' },
    { icon: '📱', title: 'MFA', description: 'Multi-Factor Auth' },
    { icon: '👤', title: 'User Management', description: 'Complete user lifecycle' },
    { icon: '🔑', title: 'Magic Links', description: 'Passwordless authentication' },
    { icon: '🎨', title: 'Customizable', description: 'Match your brand' },
    { icon: '⚡', title: 'Fast', description: 'Optimized performance' },
    { icon: '🛡️', title: 'Secure', description: 'Enterprise-grade security' },
    { icon: '📊', title: 'Analytics', description: 'User insights' },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="text-sm font-medium text-gray-400">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Everything you need
          </h2>
          <p className="text-gray-500 text-lg">
            Built-in authentication features that scale with your business
          </p>
        </div>
      </div>

      {/* Infinite scroll slider */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-6 hover:border-white/[0.12] transition-all group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
