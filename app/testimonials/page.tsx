'use client';

import TestimonialCard from '@/components/TestimonialCard';
import { useState } from 'react';

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp Inc.',
      testimonial: 'EliteBusiness transformed our operations completely. Their strategic approach and dedication to excellence helped us achieve 300% growth in just 18 months. The ROI has been phenomenal.',
      image: 'SJ',
      rating: 5,
      category: 'consulting'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'InnovateNow',
      testimonial: 'Working with EliteBusiness was a game-changer. Their team\'s expertise and professionalism exceeded all expectations. Highly recommend their services to any business looking to scale!',
      image: 'MC',
      rating: 5,
      category: 'strategy'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations',
      company: 'Global Solutions',
      testimonial: 'The results speak for themselves. EliteBusiness delivered on every promise and helped us scale our business to new heights. Outstanding work and exceptional support throughout.',
      image: 'ER',
      rating: 5,
      category: 'consulting'
    },
    {
      name: 'David Park',
      role: 'CMO',
      company: 'MarketLeaders',
      testimonial: 'Their digital marketing strategies completely transformed our brand presence. We saw a 400% increase in qualified leads within 6 months. Best investment we\'ve ever made.',
      image: 'DP',
      rating: 5,
      category: 'marketing'
    },
    {
      name: 'Jennifer Martinez',
      role: 'VP of Technology',
      company: 'DataDrive',
      testimonial: 'The analytics solutions they implemented gave us unprecedented insights into our operations. We\'ve optimized processes and saved over $2M annually. Truly exceptional work.',
      image: 'JM',
      rating: 5,
      category: 'analytics'
    },
    {
      name: 'Robert Kim',
      role: 'President',
      company: 'Enterprise Solutions',
      testimonial: 'EliteBusiness helped us navigate a complex digital transformation. Their expertise, patience, and commitment to our success made all the difference. Couldn\'t be happier.',
      image: 'RK',
      rating: 5,
      category: 'technology'
    },
    {
      name: 'Amanda Foster',
      role: 'Managing Director',
      company: 'Growth Ventures',
      testimonial: 'Their strategic guidance was instrumental in our expansion into new markets. We\'ve successfully launched in 10 new countries with their support. Simply outstanding!',
      image: 'AF',
      rating: 5,
      category: 'strategy'
    },
    {
      name: 'Thomas Anderson',
      role: 'COO',
      company: 'Efficiency First',
      testimonial: 'The process optimization work they did saved us millions and improved our operational efficiency by 60%. They truly understand business operations at a deep level.',
      image: 'TA',
      rating: 5,
      category: 'consulting'
    },
    {
      name: 'Lisa Wong',
      role: 'Founder & CEO',
      company: 'StartupHub',
      testimonial: 'As a startup, we needed guidance we could trust. EliteBusiness provided exactly that and more. They\'ve been invaluable partners in our growth journey.',
      image: 'LW',
      rating: 5,
      category: 'strategy'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'technology', label: 'Technology' }
  ];

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <div className="pt-20 bg-[#05060F]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Client Testimonials</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">4.9/5</div>
              <div className="text-slate-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-slate-300">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-slate-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 glass-dark sticky top-20 z-40 border-b border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                    : 'bg-[#0A0A0F] border border-white/[0.08] text-white hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See and hear directly from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl shadow-luxury flex items-center justify-center text-white cursor-pointer hover:border-white/[0.12] transition-all"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="font-semibold">Click to Watch</p>
                </div>
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s create an amazing testimonial together
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-luxury transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
