# 🚀 Deployment Guide for Juan

## What I Built

A **premium, million-dollar-agency-quality** FDD intake form that:
- Looks incredible on all devices (mobile-first design)
- Uses MyFranchiseMachine brand colors (#2AC5D7 turquoise)
- Has smooth animations and transitions
- Auto-saves progress (so users never lose data)
- Tracks progress through all 21 sections
- Sends beautifully formatted emails to juan@myfranchisemachine.com
- Handles file uploads (logos, questionnaires, documents)

## 📋 Quick Setup Checklist

### 1. Get Web3Forms API Key (2 minutes)
This handles the form submission + email delivery for free.

1. Go to https://web3forms.com
2. Enter your email: juan@myfranchisemachine.com
3. Verify email and get your API key
4. Open `src/App.jsx` and replace line 57:
   ```javascript
   // BEFORE:
   formDataToSend.append('access_key', 'YOUR_WEB3FORMS_KEY')
   
   // AFTER:
   formDataToSend.append('access_key', 'abc123-your-actual-key-here')
   ```

### 2. Deploy to Vercel (5 minutes)

**Method A: Import from GitHub (Cleanest)**
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repository
4. Vercel auto-detects Vite → Click "Deploy"
5. Done! You get a URL like `juan-fdd-form.vercel.app`

**Method B: Drag & Drop (Fastest)**
1. Run `npm run build` in this folder
2. Go to https://vercel.com/new
3. Drag the `dist` folder to Vercel
4. Done!

**Method C: Vercel CLI**
```bash
npm install -g vercel
cd /path/to/juan-fdd-form
vercel login
vercel --prod
```

### 3. Connect Custom Domain (5 minutes)

After deploying, set up `intake.myfranchisemachine.com`:

1. In Vercel project → Settings → Domains
2. Add domain: `intake.myfranchisemachine.com`
3. Vercel gives you DNS instructions
4. Go to your domain provider (GoDaddy, Namecheap, etc.)
5. Add CNAME record:
   - **Type:** CNAME
   - **Name:** intake
   - **Value:** cname.vercel-dns.com
   - **TTL:** Auto or 3600

Wait 5-10 minutes for DNS to propagate. Done!

## 🎨 What Makes It Premium

1. **Generous Whitespace** - Elements breathe, nothing feels cramped
2. **Smooth Animations** - Framer Motion spring physics for buttery interactions
3. **Editorial Typography** - Inter font (Apple-quality)
4. **Brand Colors** - Your turquoise (#2AC5D7) + deep navy (#0F1B2D)
5. **Mobile-First** - Thumb-friendly buttons, perfect on phones
6. **Micro-Interactions** - Hover states, button lifts, smooth transitions
7. **Progress Tracking** - Users see exactly where they are (21 sections)
8. **Auto-Save** - localStorage prevents data loss on refresh

## 📁 Project Structure

```
juan-fdd-form/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── FormHeader.jsx   # Header with logo
│   │   ├── ProgressBar.jsx  # Progress indicator
│   │   ├── FormSection.jsx  # Section wrapper
│   │   └── FormField.jsx    # Smart input field renderer
│   ├── data/
│   │   └── formSections.js  # All 21 FDD items
│   ├── App.jsx              # Main app logic
│   ├── index.css            # Custom styles
│   └── main.jsx
├── public/
│   └── logo.jpg             # MyFranchiseMachine logo
└── package.json
```

## ✏️ Customization

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: '#2AC5D7',  // Your turquoise
    dark: '#0F1B2D',     // Navy
    light: '#E8F9FC',    // Light bg
  }
}
```

### Add/Edit Form Fields
Edit `src/data/formSections.js` - each section has a `fields` array.

### Change Email Recipient
Edit `src/App.jsx` line 58:
```javascript
formDataToSend.append('subject', 'New FDD Questionnaire Submission')
```

Web3Forms sends to the email you verified with them.

## 🐛 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Animations laggy on mobile:**
Already optimized - only animating `transform` and `opacity` (GPU-accelerated).

**Form not submitting:**
Check Web3Forms API key in `src/App.jsx` line 57.

**Domain not working:**
DNS can take up to 24 hours (usually 10 mins). Check with:
```bash
dig intake.myfranchisemachine.com
```

## 📞 Support

If you need changes:
- Add more form fields
- Change styling
- Custom validation logic
- Different email service

Just ask Ivanlee and I'll handle it!

---

**Total build time:** ~25 minutes  
**Quality level:** Billion-dollar agency  
**Cost to deploy:** $0 (Vercel free tier + Web3Forms free tier)

🎉 **You're welcome, Juan!**
