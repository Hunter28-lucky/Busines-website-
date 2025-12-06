# EliteBusiness - Premium Business Website

A fully professional, modern business website built with Next.js 15, React, and Tailwind CSS. Features a clean corporate design with luxury elements, smooth animations, and complete responsiveness.

![EliteBusiness](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🎯 Features

### Complete Pages
- ✅ **Home** - Hero, services, testimonials, portfolio preview, CTA sections
- ✅ **About** - Company story, mission, vision, values, team
- ✅ **Services** - 6 detailed service offerings with benefits
- ✅ **Pricing** - 3-tier pricing table with popular plan highlight
- ✅ **Portfolio** - Grid-style case studies with hover animations
- ✅ **Testimonials** - Client reviews with filtering by category
- ✅ **Contact** - Form with validation, contact info, Google Maps

### Design Features
- 🎨 Clean white, black & blue color palette
- ✨ Smooth scroll and fade animations
- 📱 Fully responsive (mobile-first)
- 🎭 Premium UI with luxury elements
- 🚀 Fast loading and optimized performance
- ♿ SEO optimized with proper meta tags

### Technical Features
- ⚡ Built with Next.js 15 App Router
- 🔷 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🧩 Reusable React components
- 📝 Form validation on contact page
- 🎯 Clean, commented code structure

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd business-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
business-website/
├── app/                          # Next.js App Router pages
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── pricing/page.tsx         # Pricing page
│   ├── portfolio/page.tsx       # Portfolio page
│   ├── testimonials/page.tsx    # Testimonials page
│   ├── contact/page.tsx         # Contact page with form
│   ├── layout.tsx               # Root layout with Navbar/Footer
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles & animations
│
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Navigation with scroll effect
│   ├── Footer.tsx               # Footer with links & social
│   ├── Hero.tsx                 # Homepage hero section
│   ├── ServiceCard.tsx          # Service display cards
│   ├── TestimonialCard.tsx      # Testimonial display cards
│   └── PortfolioCard.tsx        # Portfolio project cards
```

---

## 🎨 Customization Guide

### 1. Change Brand Colors

Find and replace color classes throughout the project:
- **Primary Blue:** `blue-600`, `blue-500`, `blue-700`
- **Purple:** `purple-600`, `purple-500`, `purple-700`
- **Pink:** `pink-600`, `pink-500`, `pink-700`

Example:
```tsx
// Current
className="bg-blue-600"
// Change to
className="bg-green-600"
```

### 2. Update Company Logo & Name

**File:** `components/Navbar.tsx` and `components/Footer.tsx`

```tsx
<Link href="/" className="text-2xl font-bold">
  <span className="text-blue-600">Your</span>
  <span className="text-gray-900">Company</span>
</Link>
```

### 3. Edit Contact Information

**Files:** `components/Footer.tsx` and `app/contact/page.tsx`

Update email, phone, address throughout both files.

### 4. Modify Services

**File:** `app/services/page.tsx`

Edit the services array:
```tsx
const services = [
  {
    icon: '🚀',
    title: 'Your Service',
    description: 'Description...',
    features: ['Feature 1', 'Feature 2']
  }
];
```

### 5. Update Pricing

**File:** `app/pricing/page.tsx`

Customize pricing plans in the pricingPlans array.

### 6. Add Portfolio Items

**File:** `app/portfolio/page.tsx`

Add projects to the portfolio array.

### 7. Edit Testimonials

**File:** `app/testimonials/page.tsx`

Add/modify testimonials in the testimonials array.

### 8. Update SEO Meta Tags

Each page has metadata - update in respective `page.tsx` files:
```tsx
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your description...",
};
```

### 9. Change Social Links

**Files:** `components/Footer.tsx` and `app/contact/page.tsx`

Update social media URLs.

### 10. Google Maps

**File:** `app/contact/page.tsx`

Replace Google Maps embed URL with your location.

---

## 📱 Responsive Design

Built with mobile-first approach using Tailwind breakpoints:
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

---

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import on Vercel
3. Deploy automatically

### Build Locally

```bash
npm run build
npm start
```

---

## 📝 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production
npm run lint     # Run linter
```

---

## 🎨 Color Palette

- Primary Blue: `#2563EB`
- Purple: `#9333EA`
- Pink: `#EC4899`
- Gray: `#F9FAFB` to `#111827`

---

## 🛠️ Tech Stack

- Next.js 15.1.3
- React 19.0.0
- TypeScript 5.x
- Tailwind CSS 4.x

---

## ✅ Launch Checklist

- [ ] Update company name/logo
- [ ] Change colors (if needed)
- [ ] Update contact info
- [ ] Customize services
- [ ] Set pricing
- [ ] Add portfolio items
- [ ] Add testimonials
- [ ] Update Google Maps
- [ ] Update SEO metadata
- [ ] Test contact form
- [ ] Test mobile responsiveness
- [ ] Deploy

---

Made with ❤️ for professional businesses.
