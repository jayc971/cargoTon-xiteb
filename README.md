# CargoTON – Modern Business Website

A modern, responsive business website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Features a professional design, smooth navigation, interactive components, and a cohesive yellow brand color scheme.

---

## 🚀 Features

### Navigation & User Experience

- **Smart Navigation:** Dropdown submenus with active state indicators
- **Smooth Scrolling:** Auto-scroll to sections (Services, Blog, Home)
- **Active State Indicators:** Yellow dots show current page/section
- **Mobile Responsive:** Collapsible mobile menu with full functionality
- **Under Construction Modal:** Professional handling of incomplete features

### Design & Styling

- **Modern UI:** Clean, professional design with [shadcn/ui](https://ui.shadcn.com/) components
- **Consistent Branding:** Yellow (`#f9bf04`) accent color throughout
- **Responsive Layout:** Mobile-first design for all devices
- **Interactive Elements:** Hover effects, transitions, and animations
- **Professional Typography:** Carefully chosen fonts and spacing

### Sections & Components

- **Hero Section:** Eye-catching landing area with call-to-action
- **Services Section:** Showcase of business offerings with icons
- **Statistics Section:** Animated counters showing achievements
- **Testimonials:** Client feedback with ratings and photos
- **News/Blog Section:** Latest articles and insights
- **Client Logos:** Trusted partners and clients showcase
- **Footer:** Comprehensive site links and contact information

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Image Handling:** Next.js Image optimization

---

## 📦 Installation

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd cargoton-website
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. **Open your browser:**  
    Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization

### Brand Colors

To modify the brand color, edit your `tailwind.config.ts`:

```ts
colors: {
  'common-bg-color': '#f9bf04', // Main brand color
}
```

### Navigation Menu

Edit navigation items in `components/header.tsx`:

```ts
const navItems = [
  {
     name: "HOME",
     action: "scroll-top",
     subItems: [/* submenu items */],
  },
  // Add more items...
]
```

### Content Sections

Each section is a separate component in the `components/` directory:

- `hero-slider.tsx` – Landing section
- `services-section.tsx` – Services showcase
- `news-section.tsx` – Blog/news articles
- `testimonials-section.tsx` – Client testimonials

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration

Custom Tailwind config includes:

- Custom color palette
- Extended spacing and typography
- Component-specific utilities
- Dark mode support (ready to implement)

---

## 📱 Responsive Design

The website is fully responsive:

- **Mobile:** `< 768px`
- **Tablet:** `768px – 1024px`
- **Desktop:** `> 1024px`

---

## 🎯 Navigation Behavior

- **HOME:** Scrolls to top of page
- **SERVICES:** Auto-scrolls to "Our Services" section
- **BLOG:** Auto-scrolls to "Latest News" section
- **Other items:** Shows "Under Construction" modal
- **Active states:** Yellow dot indicators for current section

---

## 🚧 Development Status

### Completed Features

- ✅ Responsive navigation with submenus
- ✅ Smooth scrolling between sections
- ✅ Professional UI components
- ✅ Mobile-responsive design
- ✅ Under construction modal system
- ✅ Brand color consistency

### Planned Features

- 🔄 Contact form with validation
- 🔄 Blog post detail pages
- 🔄 Search functionality
- 🔄 Dark mode toggle
- 🔄 Animation enhancements
- 🔄 SEO optimization

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Navigation component
│   ├── hero-slider.tsx      # Hero section
│   ├── services-section.tsx
│   ├── news-section.tsx
│   └── ...
├── lib/
│   └── utils.ts             # Utility functions
├── hooks/
│   └── use-mobile.tsx       # Mobile detection hook
└── public/
     └── images/              # Static assets
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create a feature branch:**  
    `git checkout -b feature/amazing-feature`
3. **Commit your changes:**  
    `git commit -m 'Add amazing feature'`
4. **Push to the branch:**  
    `git push origin feature/amazing-feature`
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🆘 Support

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) – React framework
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) – Beautiful UI components
- [Lucide](https://lucide.dev/) – Beautiful icons
- [Vercel](https://vercel.com/) – Deployment platform

