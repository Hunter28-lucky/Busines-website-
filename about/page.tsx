import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - EliteBusiness',
  description: 'Learn about EliteBusiness - our mission, vision, values, and the expert team dedicated to transforming your business success.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-[#05060F]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">About Goswami</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Transforming businesses through innovation, strategy, and excellence since 2014
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Founded in 2014, EliteBusiness emerged from a simple yet powerful vision: 
                  to help businesses unlock their full potential through strategic innovation 
                  and cutting-edge solutions.
                </p>
                <p>
                  What started as a small consulting firm has grown into a full-service 
                  business transformation partner, serving clients across North America and 
                  beyond. Our journey has been marked by countless success stories, each one 
                  reinforcing our commitment to excellence.
                </p>
                <p>
                  Today, we&apos;re proud to be recognized as industry leaders, trusted by 
                  Fortune 500 companies and innovative startups alike. Our success is built 
                  on one fundamental principle: your success is our success.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 shadow-luxury animate-float"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#0A0A0F] border border-white/[0.08] p-10 rounded-2xl hover:border-white/[0.12] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses of all sizes with strategic insights, innovative 
                solutions, and actionable strategies that drive sustainable growth and 
                competitive advantage in an ever-evolving marketplace.
              </p>
            </div>
            <div className="bg-[#0A0A0F] border border-white/[0.08] p-10 rounded-2xl hover:border-white/[0.12] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be the most trusted business transformation partner globally, recognized 
                for our unwavering commitment to client success, innovative approach, and 
                ability to deliver exceptional results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#0A0A0F] border border-white/[0.08] rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Excellence</h3>
              <p className="text-slate-300">
                We strive for excellence in every project, never settling for good enough
              </p>
            </div>
            <div className="text-center p-6 bg-[#0A0A0F] border border-white/[0.08] rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Integrity</h3>
              <p className="text-slate-300">
                Honest, transparent, and ethical in all our business dealings
              </p>
            </div>
            <div className="text-center p-6 bg-[#0A0A0F] border border-white/[0.08] rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-slate-300">
                Constantly pushing boundaries to find better solutions
              </p>
            </div>
            <div className="text-center p-6 bg-[#0A0A0F] border border-white/[0.08] rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Client-First</h3>
              <p className="text-slate-300">
                Your success drives our decisions and shapes our strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Mitchell', role: 'CEO & Founder', initial: 'JM' },
              { name: 'Sarah Anderson', role: 'Chief Strategy Officer', initial: 'SA' },
              { name: 'David Park', role: 'Head of Analytics', initial: 'DP' },
              { name: 'Emma Wilson', role: 'VP of Operations', initial: 'EW' },
            ].map((member, index) => (
              <div key={index} className="bg-[#0A0A0F] border border-white/[0.08] rounded-2xl shadow-luxury p-8 text-center hover:border-white/[0.12] transition-all">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-slate-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our team can help transform your business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-luxury transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
