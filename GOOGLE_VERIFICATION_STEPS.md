# Google Search Console Verification Guide

## Step 1: Go to Google Search Console
Visit: https://search.google.com/search-console/

## Step 2: Add Your Property
1. Click "Add Property"
2. Choose "URL prefix"
3. Enter: `https://www.sagaradhikari.info.np`

## Step 3: Verify Ownership (Choose ONE method)

### Method A: HTML File Upload (Recommended)
1. Google will give you a file like `google123abc456.html`
2. Download the file
3. Upload it to your website's `public/` folder
4. The file should be accessible at: `https://www.sagaradhikari.info.np/google123abc456.html`
5. Click "Verify" in Google Search Console

### Method B: Meta Tag (Already prepared in your website)
1. Google will give you a meta tag like: `<meta name="google-site-verification" content="abc123def456" />`
2. I've already prepared this in your layout.tsx file
3. Just replace "your-google-verification-code" with the actual code
4. Deploy your website
5. Click "Verify" in Google Search Console

## Step 4: Submit Sitemap
1. After verification, go to "Sitemaps" in the left menu
2. Add sitemap URL: `sitemap.xml`
3. Click "Submit"

## Step 5: Monitor Rankings
1. Go to "Performance" tab
2. Add filter for query: "Sagar Adhikari"
3. Monitor your ranking progress weekly

## Expected Timeline:
- Day 1: Verification and sitemap submission
- Week 1: Google starts indexing your pages
- Week 2-4: Initial rankings appear
- Month 1-3: Steady ranking improvements with content creation