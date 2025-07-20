# MAT Software Portfolio Website

A modern, responsive portfolio website for MAT Software, a software services company based in Lahore, Pakistan. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

-   **Modern Design**: Clean, professional design with the company's blue color scheme (#3a73c1 and #52ace4)
-   **Responsive**: Fully responsive design that works on all devices
-   **Complex Animations**: Smooth scroll animations and interactive elements using Framer Motion
-   **Light Theme**: Clean, light theme optimized for readability
-   **SEO Optimized**: Meta tags, structured data, and performance optimized
-   **Fast Performance**: Built with Next.js for optimal performance

## 📱 Pages

-   **Home** (`/`) - Hero section, about, services overview, reviews, and footer
-   **About** (`/about`) - Detailed company information, team, values, and timeline
-   **Services** (`/services`) - Comprehensive service offerings with pricing
-   **Products** (`/products`) - Software products and solutions showcase
-   **Contact** (`/contact`) - Contact form and company information

## 🛠️ Tech Stack

-   **Framework**: Next.js 14 with App Router
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Font**: Inter (Google Fonts)

## 🎨 Design Features

-   **Primary Colors**: #3a73c1 (dark blue) and #52ace4 (light blue)
-   **Gradient Effects**: Beautiful gradient combinations throughout the site
-   **Smooth Animations**: Scroll-triggered animations and hover effects
-   **Modern UI**: Card-based layouts with shadows and rounded corners
-   **Interactive Elements**: Hover effects, button animations, and form interactions

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd mat-software-portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
MAT Software/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── products/          # Products page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   └── assets/
│       └── logo.svg       # Company logo
├── assets/                # Source assets
│   └── logo.svg           # Original logo file
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎯 Key Components

### Navbar

-   Responsive navigation with mobile menu
-   Smooth scroll effects
-   Contact information display
-   Logo and company branding

### Footer

-   Company information and links
-   Social media links
-   Service and product categories
-   Contact details

### Home Page

-   Hero section with animated logo
-   Statistics showcase
-   About section with company highlights
-   Services overview
-   Client testimonials

### About Page

-   Company mission and vision
-   Core values
-   Team member profiles
-   Company timeline
-   Contact CTA

### Services Page

-   Detailed service descriptions
-   Technology stacks
-   Development process
-   Pricing plans
-   Service categories

### Products Page

-   Product showcase
-   Feature comparisons
-   Technology details
-   Demo links
-   Custom solution CTA

### Contact Page

-   Interactive contact form
-   Office information
-   FAQ section
-   Google Maps integration
-   Business hours

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:

-   Netlify
-   AWS Amplify
-   DigitalOcean App Platform
-   Railway

## 📝 Customization

### Colors

Update the primary colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#3a73c1',
    light: '#52ace4',
  },
  secondary: {
    DEFAULT: '#52ace4',
    dark: '#3a73c1',
  }
}
```

### Content

-   Update company information in each page component
-   Modify contact details in the Navbar and Footer components
-   Replace placeholder images with actual company photos
-   Update team member information in the About page

### Logo

Replace `public/assets/logo.svg` with your company logo.

## 🔧 Development

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Import and use the Navbar and Footer components
4. Add the route to the navigation menu

### Styling

-   Use Tailwind CSS classes for styling
-   Custom animations are defined in `tailwind.config.js`
-   Global styles are in `app/globals.css`

## 📞 Support

For support or questions about this project, please contact:

-   Email: info@matsoftware.com
-   Phone: +92 300 1234567

## 📄 License

This project is proprietary software developed for MAT Software.

---

**MAT Software** - Leading software services company in Lahore, Pakistan
