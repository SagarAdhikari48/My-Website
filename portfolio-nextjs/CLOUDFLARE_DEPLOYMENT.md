# Cloudflare Pages Deployment Guide 🚀

## Deploy Next.js Portfolio to sagaradhikari.info.np

### 🎯 Current Situation
- **Domain**: `https://www.sagaradhikari.info.np/`
- **Current**: HTML template deployed via GitHub master branch
- **Goal**: Replace with Next.js portfolio on same domain

---

## 📋 Deployment Steps

### **Step 1: Push Code to GitHub**

```bash
# Navigate to your portfolio folder
cd portfolio-nextjs

# Initialize git (if not already done)
git init
git add .
git commit -m "Next.js portfolio ready for deployment"

# Option A: New Repository (Recommended)
git remote add origin https://github.com/YOUR_USERNAME/nextjs-portfolio.git
git branch -M main
git push -u origin main

# Option B: Same Repository, New Branch
git checkout -b nextjs-portfolio
git push origin nextjs-portfolio
```

### **Step 2: Configure Cloudflare Pages**

1. **Login to Cloudflare Dashboard**
   - Go to your account dashboard
   - Navigate to **Pages** section

2. **Update Project Settings**
   - Find your current `sagaradhikari.info.np` project
   - Go to **Settings** → **Builds & deployments**

3. **Update Build Configuration**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: / (or portfolio-nextjs if in subfolder)
   Node.js version: 18.x or 20.x
   ```

4. **Update Source Repository**
   - **Settings** → **Source**
   - Connect to your new repository (or change branch)
   - Set production branch to `main` (or `nextjs-portfolio`)

### **Step 3: Environment Variables**

In Cloudflare Pages **Settings** → **Environment variables**:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_y5xttqs  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = t2-TxVMKiy1q6FASc
```

### **Step 4: Deploy**

1. **Trigger Deployment**
   - Push code to your configured branch
   - Or manually trigger in Cloudflare Pages dashboard

2. **Monitor Build**
   - Watch build logs in Cloudflare Pages
   - Build should complete in 2-3 minutes

3. **Verify Deployment**
   - Visit `https://www.sagaradhikari.info.np/`
   - Test contact form functionality
   - Check all pages and components

---

## 🔧 Cloudflare Pages Configuration

### **Build Settings**
```yaml
Build command: npm run build
Build output directory: .next
Root directory: /
Environment: Node.js 18.x
```

### **Custom Build Command (if needed)**
```bash
npm ci && npm run build
```

### **Headers Configuration**
Create `_headers` file in `public` folder for security:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🚨 Important Notes

### **Before Deployment**
- [ ] Test build locally: `npm run build`
- [ ] Verify all images are in `public` folder
- [ ] Check environment variables are set
- [ ] Test contact form with EmailJS

### **DNS Settings**
- Your domain DNS should already be configured
- No changes needed if using same domain
- Cloudflare will automatically handle the new deployment

### **Backup Strategy**
- Keep your HTML template in a separate branch
- You can always rollback if needed
- Consider testing on a subdomain first

---

## 🎯 Deployment Options

### **Option 1: Direct Replacement (Recommended)**
- Replace HTML site directly with Next.js
- Same domain, immediate switch
- Users see new portfolio right away

### **Option 2: Staged Deployment**
1. Deploy to subdomain first: `new.sagaradhikari.info.np`
2. Test thoroughly
3. Switch main domain when ready

### **Option 3: Branch Strategy**
1. Keep HTML in `master` branch
2. Deploy Next.js from `nextjs-portfolio` branch
3. Switch production branch when ready

---

## ✅ Post-Deployment Checklist

- [ ] **Homepage loads correctly**
- [ ] **All sections render properly**
- [ ] **Images display correctly**
- [ ] **Contact form sends emails**
- [ ] **Mobile responsive design works**
- [ ] **Portfolio images load (LeanLaw gallery)**
- [ ] **External links work (LinkedIn, GitHub)**
- [ ] **PDF download works**
- [ ] **Smooth scrolling navigation**
- [ ] **Performance is good (check PageSpeed)**

---

## 🔄 Rollback Plan

If something goes wrong:

1. **Quick Rollback**
   - Change production branch back to `master`
   - HTML template will be restored immediately

2. **Fix and Redeploy**
   - Fix issues in Next.js code
   - Push updates to trigger new build

---

## 📞 Support

- **Cloudflare Pages Docs**: [pages.cloudflare.com](https://pages.cloudflare.com/)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Build Issues**: Check Cloudflare Pages build logs

Your Next.js portfolio will be live at `https://www.sagaradhikari.info.np/` once deployed! 🎉