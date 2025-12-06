import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - EliteBusiness',
  description: 'Transparent pricing for our business services. Choose the perfect plan for your business needs and budget.',
};

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups looking to establish a strong foundation',
      features: [
        'Strategic consultation (5 hours/month)',
        'Market analysis & insights',
        'Monthly performance reports',
        'Email support',
        'Basic analytics dashboard',
        'Quarterly strategy review'
      ],
      popular: false,
      buttonText: 'Get Started',
      color: 'blue'
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale operations and maximize growth',
      features: [
        'Strategic consultation (15 hours/month)',
        'Advanced market & competitive analysis',
        'Bi-weekly performance reports',
        'Priority support (24/7)',
        'Custom analytics dashboards',
        'Monthly strategy sessions',
        'Dedicated account manager',
        'Process optimization consulting'
      ],
      popular: true,
      buttonText: 'Get Started',
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solutions for large organizations with complex requirements',
      features: [
        'Unlimited strategic consultation',
        'Full-service business transformation',
        'Real-time reporting & analytics',
        'White-glove support (24/7)',
        'Enterprise-grade solutions',
        'Weekly executive briefings',
        'Dedicated team of experts',
        'Custom integration & development',
        'On-site consulting available'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      color: 'pink'
    }
  ];

  return (
    <div className="pt-20 bg-[#05060F]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#05060F] via-[#0A0A0F] to-[#05060F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transparent Pricing</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#0A0A0F] border border-white/[0.08] rounded-2xl shadow-luxury p-8 ${
                  plan.popular
                    ? 'ring-4 ring-cyan-600 transform scale-105'
                    : 'hover:shadow-2xl'
                } transition-all duration-300 relative hover:border-white/[0.12] transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`w-6 h-6 ${
                          plan.popular ? 'text-cyan-500' : 'text-blue-500'
                        } mr-3 flex-shrink-0 mt-0.5`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-4 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-luxury'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-luxury'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#05060F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have questions? We&apos;ve got answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I switch plans later?',
                answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise clients.'
              },
              {
                question: 'Is there a contract or commitment?',
                answer: 'Our Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans are customized based on your needs.'
              },
              {
                question: 'Do you offer custom solutions?',
                answer: 'Yes! Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements.'
              },
              {
                question: 'What happens if I exceed my consultation hours?',
                answer: 'Additional hours can be purchased at a discounted rate. We\'ll always notify you before any additional charges.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#0A0A0F] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.12] transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect plan for your business
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-luxury transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
