'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
            AuthKit
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Testimonials
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.08]">
            <div className="flex flex-col gap-4">
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Portfolio
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Testimonials
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
