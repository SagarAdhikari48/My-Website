# Email Contact Form Setup Guide 📧

## Overview
The contact form is configured to send emails to `sagradhkr48@gmail.com` using EmailJS service.

## 🚀 Quick Setup (Recommended - EmailJS)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (`sagradhkr48@gmail.com`)
5. Note down the **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

Message:
{{message}}

---
Reply to: {{from_email}}
Sent from portfolio contact form
```

4. Note down the **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**

### Step 5: Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email (`sagradhkr48@gmail.com`) for the message

## 🔧 Alternative Setup (SMTP Backend)

If you prefer using the backend API route with SMTP:

### Step 1: Configure SMTP Settings
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sagradhkr48@gmail.com
SMTP_PASS=your_app_password
```

### Step 2: Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings → Security
3. Under "Signing in to Google", select "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in `SMTP_PASS`

### Step 3: Update Contact Component
Uncomment the API route code in `Contact.tsx` and comment out the EmailJS code.

## 📋 Features

### ✅ What Works
- **Real Email Delivery**: Messages sent to `sagradhkr48@gmail.com`
- **Form Validation**: All fields required
- **Loading States**: Visual feedback during submission
- **Success/Error Messages**: Clear user feedback
- **Responsive Design**: Works on all devices
- **Professional Formatting**: HTML email templates

### 📧 Email Content
Each contact form submission includes:
- **Sender Details**: Name and email
- **Subject Line**: User-provided subject
- **Message Content**: Full message text
- **Reply-To**: Automatic reply to sender's email
- **Professional Formatting**: Clean HTML layout

### 🛡️ Security Features
- **Input Validation**: Server-side validation
- **Rate Limiting**: Prevents spam (can be added)
- **Error Handling**: Graceful failure handling
- **Environment Variables**: Secure credential storage

## 🎯 Testing Checklist

- [ ] EmailJS account created and configured
- [ ] Environment variables set correctly
- [ ] Development server restarted
- [ ] Test form submission completed
- [ ] Email received at `sagradhkr48@gmail.com`
- [ ] Reply-to functionality works
- [ ] Error handling works (test with invalid config)

## 🚨 Troubleshooting

### Common Issues:
1. **"Failed to send message"**
   - Check environment variables are set correctly
   - Verify EmailJS service is active
   - Check browser console for detailed errors

2. **Email not received**
   - Check spam/junk folder
   - Verify EmailJS template configuration
   - Test EmailJS service in their dashboard

3. **Environment variables not loading**
   - Ensure file is named `.env.local` (not `.env`)
   - Restart development server after changes
   - Check variables start with `NEXT_PUBLIC_` for client-side access

### Support:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Next.js Environment Variables: [https://nextjs.org/docs/basic-features/environment-variables](https://nextjs.org/docs/basic-features/environment-variables)

## 💡 Pro Tips

1. **Free Tier Limits**: EmailJS free tier allows 200 emails/month
2. **Custom Domain**: Consider upgrading for custom domain emails
3. **Analytics**: EmailJS provides email delivery analytics
4. **Templates**: Create multiple templates for different contact types
5. **Auto-Reply**: Set up automatic confirmation emails to users

Your contact form is now ready to receive messages at `sagradhkr48@gmail.com`! 🎉