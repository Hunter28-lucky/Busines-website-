import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - EliteBusiness',
  description: 'Explore our portfolio of successful projects and case studies. See how we\'ve helped businesses achieve remarkable results.',
};

export default function PortfolioPage() {
  const portfolio = [
    {
      title: 'E-Commerce Revolution',
      category: 'Digital Transformation',
      description: 'Complete digital overhaul resulting in 250% increase in online sales and 180% improvement in customer satisfaction',
      image: 'from-purple-600 to-blue-600'
    },
    {
      title: 'Global Expansion Strategy',
      category: 'Business Consulting',
      description: 'Strategic planning for successful entry into 15 new international markets within 18 months',
      image: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Data-Driven Growth',
      category: 'Analytics',
      description: 'Advanced analytics platform driving 40% operational efficiency and $2M cost savings annually',
      image: 'from-cyan-600 to-teal-600'
    },
    {
      title: 'Brand Transformation',
      category: 'Digital Marketing',
      description: 'Complete brand refresh and marketing campaign resulting in 320% increase in brand awareness',
      image: 'from-teal-600 to-green-600'
    },
    {
      title: 'Supply Chain Optimization',
      category: 'Operations',
      description: 'Streamlined operations reducing lead time by 60% and increasing profit margins by 25%',
      image: 'from-green-600 to-lime-600'
    },
    {
      title: 'Cloud Migration Success',
      category: 'Technology',
      description: 'Seamless cloud migration improving system performance by 85% and reducing infrastructure costs by 45%',
      image: 'from-orange-600 to-red-600'
    },
    {
      title: 'Customer Experience Enhancement',
      category: 'Strategy',
      description: 'Redesigned customer journey increasing conversion rates by 150% and customer lifetime value by 200%',
      image: 'from-red-600 to-pink-600'
    },
    {
      title: 'Market Disruption Launch',
      category: 'Product Development',
      description: 'Innovative product launch capturing 30% market share in highly competitive industry within first year',
      image: 'from-pink-600 to-purple-600'
    },
    {
      title: 'Financial Restructuring',
      category: 'Consulting',
      description: 'Strategic financial planning reducing operational costs by $5M annually while improving service quality',
      image: 'from-indigo-600 to-blue-600'
    }
  ];

  return (
    <div className="pt-20 bg-[#05060F]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Success stories from clients who trusted us with their vision
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">250%</div>
              <div className="text-slate-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">25</div>
              <div className="text-slate-300">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real businesses, across diverse industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expertise across a wide range of sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              '🏦 Finance',
              '🏥 Healthcare',
              '🛒 E-Commerce',
              '🏭 Manufacturing',
              '💻 Technology',
              '🎓 Education',
              '🏨 Hospitality',
              '🚚 Logistics',
              '🏡 Real Estate',
              '🎯 Marketing'
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-[#0A0A0F] border border-white/[0.08] rounded-xl p-6 text-center hover:border-white/[0.12] transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{industry.split(' ')[0]}</div>
                <div className="font-semibold text-white">{industry.split(' ')[1]}</div>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve remarkable results
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-luxury transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
