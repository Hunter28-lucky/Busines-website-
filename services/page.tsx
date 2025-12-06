import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - EliteBusiness',
  description: 'Explore our comprehensive business services including digital strategy, consulting, analytics, marketing, and technology solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Transform your business with data-driven digital strategies that deliver measurable results and sustainable growth.',
      features: [
        'Comprehensive market analysis',
        'Strategic growth planning',
        'ROI optimization',
        'Brand positioning & development',
        'Competitive analysis'
      ]
    },
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Expert guidance to streamline operations, maximize efficiency, and unlock your business\'s full potential.',
      features: [
        'Process optimization',
        'Performance metrics & KPIs',
        'Risk management strategies',
        'Strategic planning & execution',
        'Change management'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Turn raw data into actionable insights with our advanced analytics and business intelligence solutions.',
      features: [
        'Data visualization dashboards',
        'Predictive analytics',
        'Custom reporting solutions',
        'Real-time monitoring',
        'Business intelligence tools'
      ]
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Amplify your brand presence and reach your target audience with our comprehensive digital marketing strategies.',
      features: [
        'SEO & content strategy',
        'Social media management',
        'PPC advertising campaigns',
        'Email marketing automation',
        'Conversion optimization'
      ]
    },
    {
      icon: '⚙️',
      title: 'Technology Solutions',
      description: 'Leverage cutting-edge technology to automate processes, enhance productivity, and drive innovation.',
      features: [
        'Custom software development',
        'Cloud migration & integration',
        'API development',
        'System architecture design',
        'Technical consulting'
      ]
    },
    {
      icon: '📈',
      title: 'Growth Strategy',
      description: 'Scale your business strategically with proven frameworks and methodologies that deliver sustainable results.',
      features: [
        'Market expansion planning',
        'Revenue optimization',
        'Customer acquisition strategies',
        'Retention programs',
        'Partnership development'
      ]
    }
  ];

  return (
    <div className="pt-20 bg-[#05060F]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Services</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your business to new heights
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              End-to-end solutions tailored to your unique business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-[#0A0A0F] border border-white/[0.08] p-6 rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Discovery</h3>
              <p className="text-slate-300">
                We analyze your business, goals, and challenges to create a tailored strategy
              </p>
            </div>
            <div className="text-center bg-[#0A0A0F] border border-white/[0.08] p-6 rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Strategy</h3>
              <p className="text-slate-300">
                Develop a comprehensive roadmap with clear milestones and objectives
              </p>
            </div>
            <div className="text-center bg-[#0A0A0F] border border-white/[0.08] p-6 rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Execution</h3>
              <p className="text-slate-300">
                Implement solutions with precision, agility, and continuous communication
              </p>
            </div>
            <div className="text-center bg-[#0A0A0F] border border-white/[0.08] p-6 rounded-xl hover:border-white/[0.12] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Optimize</h3>
              <p className="text-slate-300">
                Monitor, measure, and refine to ensure sustained success and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss which services are right for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-luxury transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/pricing"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
