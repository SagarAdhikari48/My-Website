# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `.next` folder to Netlify or connect your GitHub repository.

## Deploy to GitHub Pages

1. Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
};
```

2. Build and export:
```bash
npm run build
```

3. Upload the `out` folder to GitHub Pages.

## Environment Variables

If you add a contact form service, create a `.env.local` file:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
```

## Custom Domain

After deployment, you can add your custom domain in your hosting provider's settings.