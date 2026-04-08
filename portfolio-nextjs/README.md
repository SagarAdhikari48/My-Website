# Sagar Adhikari - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js for optimal performance and SEO
- **Interactive**: Smooth animations using Framer Motion
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Sections

- **Hero**: Introduction with animated typing effect
- **About**: Personal information and key strengths
- **Skills**: Technical skills with animated progress bars
- **Experience**: Professional experience timeline
- **Services**: Services offered with hover effects
- **Portfolio**: Project showcase with filtering
- **Testimonials**: Client testimonials carousel
- **Contact**: Contact form and information

## 🛠️ Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Hooks**: Modern React patterns

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Portfolio.tsx
│       ├── Services.tsx
│       ├── Skills.tsx
│       └── Testimonials.tsx
├── public/
│   ├── img/
│   └── pdf/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## 🎨 Customization

### Colors
The primary color scheme can be customized in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - CSS custom properties

### Content
Update the content in each component file:
- Personal information in `About.tsx`
- Skills in `Skills.tsx`
- Experience in `Experience.tsx`
- Projects in `Portfolio.tsx`
- Testimonials in `Testimonials.tsx`

### Images
Replace images in the `public/img/` directory with your own photos.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Build and Deploy

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy

The website can be deployed to various platforms:

- **Vercel** (Recommended for Next.js):
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**:
  ```bash
  npm run build
  # Upload the 'out' folder to Netlify
  ```

- **GitHub Pages**:
  Add to `next.config.ts`:
  ```javascript
  const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  }
  ```

## 📧 Contact Form

The contact form is currently set up with a basic implementation. To make it functional:

1. **Web3Forms** (Recommended):
   - Sign up at [web3forms.com](https://web3forms.com)
   - Add your access key to the form

2. **Formspree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action URL

3. **Custom API**:
   - Create an API route in `src/app/api/contact/route.ts`
   - Implement email sending logic

## 🎯 Performance Optimizations

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **Font Optimization**: Google Fonts with Next.js font optimization
- **CSS Optimization**: Tailwind CSS purging unused styles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- Email: sagradhkr48@gmail.com
- LinkedIn: [Sagar Adhikari](https://www.linkedin.com/in/sagaradhikari48)
- GitHub: [Sagar-Adhikari](https://github.com/Sagar-Adhikari)

---

**Built with ❤️ by Sagar Adhikari**