# VisaConsult - Study Abroad & Visa Consultancy Website

A modern, production-ready Next.js website for study abroad and visa consultancy services.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Animations:** Framer Motion (installed, ready to use)
- **Analytics:** Google Analytics 4

## 📁 Project Structure

```
visa-consultancy/
├── app/
│   ├── (marketing)/          # Marketing pages group
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── services/         # Services page
│   │   ├── countries/        # Countries/destinations page
│   │   ├── contact/          # Contact form page
│   │   └── layout.tsx        # Marketing layout (header/footer)
│   ├── layout.tsx            # Root layout (SEO, fonts, analytics)
│   └── globals.css           # Global styles + shadcn theme
├── components/
│   ├── ui/                   # shadcn UI components
│   └── sections/             # Reusable page sections (empty, ready for use)
├── lib/
│   ├── utils.ts              # Utility functions
│   └── analytics.tsx         # Google Analytics setup
└── public/
    └── images/               # Static images folder
```

## 🎨 Features

### ✅ Implemented
- Responsive navigation with sticky header
- SEO-optimized metadata for all pages
- Google Analytics 4 integration
- Contact form with validation
- Professional footer
- Route groups for clean organization
- TypeScript for type safety
- ESLint configuration
- Tailwind CSS with custom theme variables

### 📦 Ready to Use (Installed but not implemented yet)
- Framer Motion animations
- shadcn/ui components (Button, Card, Form, Input, etc.)
- Form validation with Zod
- React Hook Form

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Update the `.env.local` file with your credentials:
```env
NEXT_PUBLIC_GA_ID=G-YOUR-GA-ID
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Next Steps

### Content Updates Needed

1. **Update Company Info:**
   - Company name (currently "VisaConsult") in:
     - `app/layout.tsx` (SEO metadata)
     - `app/(marketing)/layout.tsx` (header/footer)
   - Contact details in `app/(marketing)/contact/page.tsx`

2. **SEO Configuration:**
   - Update domain URL in `app/layout.tsx`
   - Add Open Graph image to `/public/og-image.jpg`
   - Update metadata for each page as needed

3. **Google Analytics:**
   - Get your GA4 Measurement ID
   - Add to `.env.local` as `NEXT_PUBLIC_GA_ID`

4. **Content Pages:**
   - Fill in About page content
   - Expand Services with your actual services
   - Add country-specific information
   - Customize home page hero and sections

### Features to Add

1. **Homepage Enhancements:**
   - Hero section with CTA
   - Services overview cards
   - Testimonials section
   - Success stories
   - Partner universities logos

2. **Contact Form Backend:**
   - Connect to email service (SendGrid, Resend, etc.)
   - Add form submission API endpoint
   - Email notifications

3. **Additional Pages:**
   - Blog/Resources section
   - FAQ page
   - Privacy Policy & Terms
   - Individual country detail pages

4. **Animations:**
   - Add Framer Motion to hero section
   - Scroll animations for cards
   - Page transitions

## 🎯 SEO Features

- Server-side rendering (SSR) by default
- Semantic HTML structure
- Open Graph tags for social sharing
- Twitter Card metadata
- Proper heading hierarchy
- Mobile-responsive design
- Fast page loads with Next.js optimization
- Automatic image optimization

## 📱 Responsive Design

All pages are fully responsive and tested for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod Validation](https://zod.dev)

## 🤝 Support

For issues or questions, please open an issue in the repository.

## 📄 License

This project is private and proprietary.
