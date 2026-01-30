# Pavan Deshpande - Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Single-page layout with smooth scroll navigation
- Animated sections with Framer Motion
- Responsive design for all devices
- Dark theme with modern aesthetics
- Skills marquee animation
- Contact form with email integration
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pavandeshpande12/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles and CSS variables
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page component
├── components/
│   ├── Navbar.tsx     # Navigation bar
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills with marquee
│   ├── Projects.tsx   # Projects grid
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer
└── lib/
    └── utils.ts       # Utility functions
```

## Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #6366f1;
  --accent: #8b5cf6;
  /* ... */
}
```

### Content
Update your personal information in the respective component files.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Pavan Deshpande**
- GitHub: [@pavandeshpande12](https://github.com/pavandeshpande12)
- LinkedIn: [Pavan Deshpande](https://linkedin.com/in/pavan-deshpande-723aa6239)
- Email: pavandeshpande12@gmail.com
