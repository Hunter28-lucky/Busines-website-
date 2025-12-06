# 🎨 Quick Customization Guide

This guide shows you exactly where to edit content to make this website your own.

## 📝 Step-by-Step Content Updates

### Step 1: Company Name & Branding

**Location 1:** `components/Navbar.tsx` - Lines 36-43
```tsx
<Link href="/" className="text-2xl font-bold">
  <span className="text-blue-600">Elite</span>
  <span className="text-gray-900">Business</span>
</Link>
```
Change "Elite" and "Business" to your company name.

**Location 2:** `components/Footer.tsx` - Lines 14-16
```tsx
<h3 className="text-2xl font-bold mb-4">
  <span className="text-blue-500">Elite</span>Business
</h3>
```

---

### Step 2: Contact Details

**Location 1:** `components/Footer.tsx` - Lines 56-59
```tsx
<ul className="space-y-2 text-gray-400">
  <li>📧 contact@elitebusiness.com</li>
  <li>📞 +1 (555) 123-4567</li>
  <li>📍 New York, NY 10001</li>
</ul>
```

**Location 2:** `app/contact/page.tsx` - Search for:
- Email addresses (Lines ~95, ~105)
- Phone numbers (Lines ~115, ~125)
- Office address (Lines ~135-145)

---

### Step 3: Homepage Content

**File:** `app/page.tsx`

**Hero Title** (Lines ~85-88):
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  Transform Your Business
  <br />
  <span className="text-blue-200">Into Success</span>
</h1>
```

**Hero Subtitle** (Lines ~89-92):
```tsx
<p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
  Premium business solutions designed for modern enterprises. 
  We deliver excellence, innovation, and results that matter.
</p>
```

**Stats** (Lines ~108-127):
Update numbers to match your business:
- Projects Completed: 500+
- Client Satisfaction: 98%
- Team Members: 50+
- Years Experience: 10+

---

### Step 4: Services

**File:** `app/services/page.tsx` - Lines 11-62

Each service object:
```tsx
{
  icon: '🚀',                    // Change emoji
  title: 'Digital Strategy',     // Service name
  description: 'Transform...',   // Service description
  features: [                    // Service features (bullets)
    'Market Analysis',
    'Growth Planning',
    // Add your features
  ]
}
```

To add a new service, copy the entire object and add to the array.

---

### Step 5: Pricing Plans

**File:** `app/pricing/page.tsx` - Lines 11-58

Each pricing plan:
```tsx
{
  name: 'Starter',              // Plan name
  price: '$2,999',              // Price
  period: '/month',             // Billing period
  description: 'Perfect for...', // Plan description
  features: [                   // Plan features
    'Strategic consultation',
    'Market analysis',
    // Add your features
  ],
  popular: false,               // Set to true for "Most Popular" badge
  buttonText: 'Get Started',    // Button text
  color: 'blue'                 // Color theme
}
```

---

### Step 6: Portfolio Projects

**File:** `app/portfolio/page.tsx` - Lines 11-58

Each project:
```tsx
{
  title: 'E-Commerce Revolution',           // Project name
  category: 'Digital Transformation',       // Category
  description: 'Complete digital...',       // Description
  image: 'from-purple-600 to-blue-600'      // Gradient colors
}
```

Available gradient options:
- `from-purple-600 to-blue-600`
- `from-blue-600 to-cyan-600`
- `from-cyan-600 to-teal-600`
- `from-green-600 to-lime-600`
- `from-orange-600 to-red-600`
- `from-red-600 to-pink-600`
- `from-pink-600 to-purple-600`

---

### Step 7: Testimonials

**File:** `app/testimonials/page.tsx` - Lines 13-78

Each testimonial:
```tsx
{
  name: 'Sarah Johnson',                    // Client name
  role: 'CEO',                              // Job title
  company: 'TechCorp Inc.',                 // Company
  testimonial: 'EliteBusiness...',          // Review text
  image: 'SJ',                              // Initials for avatar
  rating: 5,                                // Stars (1-5)
  category: 'consulting'                    // Category for filtering
}
```

Available categories:
- `consulting`
- `strategy`
- `marketing`
- `analytics`
- `technology`

---

### Step 8: About Page

**File:** `app/about/page.tsx`

**Company Story** (Lines ~25-40):
Update the three paragraphs with your company's history.

**Mission** (Line ~52):
```tsx
<p className="text-gray-600 leading-relaxed">
  To empower businesses...
</p>
```

**Vision** (Line ~62):
```tsx
<p className="text-gray-600 leading-relaxed">
  To be the most trusted...
</p>
```

**Team Members** (Lines ~107-114):
```tsx
{ name: 'John Mitchell', role: 'CEO & Founder', initial: 'JM' }
```

---

### Step 9: Social Media Links

**File:** `components/Footer.tsx` - Lines 22-48

Update URLs for each platform:
```tsx
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
```

**File:** `app/contact/page.tsx` - Lines 163-183

Same social links appear on contact page.

---

### Step 10: Google Maps

**File:** `app/contact/page.tsx` - Lines 276-285

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe `src` URL
5. Replace in this line:
```tsx
src="https://www.google.com/maps/embed?pb=..."
```

---

### Step 11: SEO Metadata

Update on EVERY page's `page.tsx` file:

**Example:** `app/about/page.tsx` - Lines 4-7
```tsx
export const metadata: Metadata = {
  title: 'About Us - EliteBusiness',        // Page title
  description: 'Learn about...',            // Page description
};
```

Files to update:
- `app/layout.tsx` (main site metadata)
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/pricing/page.tsx`
- `app/portfolio/page.tsx`
- `app/contact/page.tsx`

---

## 🎨 Color Scheme Changes

If you want to change from blue to another color:

### Find & Replace

**Blue to Green:**
- Find: `blue-600` → Replace: `green-600`
- Find: `blue-500` → Replace: `green-500`
- Find: `blue-700` → Replace: `green-700`
- Find: `blue-100` → Replace: `green-100`

**Purple to Orange:**
- Find: `purple-600` → Replace: `orange-600`
- Find: `purple-500` → Replace: `orange-500`
- Find: `purple-700` → Replace: `orange-700`

### Available Tailwind Colors
- `red`, `orange`, `amber`, `yellow`
- `lime`, `green`, `emerald`, `teal`
- `cyan`, `sky`, `blue`, `indigo`
- `violet`, `purple`, `fuchsia`, `pink`
- `rose`

---

## 📸 Adding Images

### For Logo
Create a logo file and add to `/public/logo.png`

In `components/Navbar.tsx`:
```tsx
import Image from 'next/image';

<Image 
  src="/logo.png" 
  alt="Company Logo" 
  width={150} 
  height={50} 
/>
```

### For Portfolio/Team Images
1. Add images to `/public/images/`
2. Update `PortfolioCard` component to accept image paths
3. Use Next.js `<Image>` component for optimization

---

## 🚀 Testing Your Changes

After making changes:

1. Save all files
2. Check browser (should auto-reload)
3. Test on mobile view (DevTools → Toggle Device Toolbar)
4. Check all pages work
5. Test contact form

---

## ✅ Final Checklist Before Launch

- [ ] Company name updated everywhere
- [ ] Contact info updated (email, phone, address)
- [ ] Services reflect your offerings
- [ ] Pricing matches your plans
- [ ] Portfolio has real projects
- [ ] Testimonials from real clients
- [ ] About page tells your story
- [ ] Social links work
- [ ] Google Maps shows correct location
- [ ] All SEO metadata updated
- [ ] Logo added (if applicable)
- [ ] Colors changed (if desired)
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] All links work
- [ ] No placeholder text remaining

---

## 🆘 Need Help?

If you get stuck:

1. **Check the browser console** - Press F12 to see errors
2. **Read the error message** - It usually tells you what's wrong
3. **Restart dev server** - Stop (`Ctrl+C`) and run `npm run dev` again
4. **Clear cache** - Delete `.next` folder and restart
5. **Reinstall** - Delete `node_modules`, run `npm install`

---

**Remember:** Save files frequently and check the browser to see changes instantly!

Good luck with your website! 🎉
