# 🚀 Quick Deploy Guide - Juan's FDD Forms

## Step 1: Preview Both Versions Locally (2 minutes)

**Light Version:**
\`\`\`bash
cd /root/.openclaw/workspace/projects/juan-fdd-form
npm run dev:light
\`\`\`
Open http://localhost:5173 in your browser

**Dark Version:**
\`\`\`bash
npm run dev:dark
\`\`\`
Open http://localhost:5173 in your browser

Pick which one you like better (or deploy both and let Juan choose!)

---

## Step 2: Get Web3Forms API Key (2 minutes)

1. Go to https://web3forms.com
2. Enter: juan@myfranchisemachine.com
3. Verify email
4. Copy your API key

Edit `src/App-themed.jsx` line 57:
\`\`\`javascript
// Replace this:
formDataToSend.append('access_key', 'YOUR_WEB3FORMS_KEY')

// With your actual key:
formDataToSend.append('access_key', 'abc123-your-key-here')
\`\`\`

Rebuild:
\`\`\`bash
npm run build:both
\`\`\`

---

## Step 3: Deploy to Vercel (5 minutes per version)

### Method A: Drag & Drop (Easiest)

1. Go to https://vercel.com/new
2. Drag the `dist-light/` folder (or `dist-dark/`)
3. Click "Deploy"
4. Done! You get a live URL

### Method B: Vercel CLI

\`\`\`bash
npm install -g vercel
vercel login

# Deploy light version
cd dist-light
vercel --prod --name juan-fdd-light

# Deploy dark version
cd ../dist-dark
vercel --prod --name juan-fdd-dark
\`\`\`

---

## Step 4: Custom Domain (5 minutes)

### For Light Version on intake.myfranchisemachine.com:

1. Vercel project → Settings → Domains
2. Add domain: `intake.myfranchisemachine.com`
3. Go to your DNS provider (GoDaddy, Namecheap, etc.)
4. Add CNAME record:
   - **Name:** intake
   - **Value:** cname.vercel-dns.com
   - **TTL:** Auto

### For Dark Version on intake-dark.myfranchisemachine.com:

Same steps, but use `intake-dark` as subdomain.

Wait 5-10 minutes for DNS to propagate.

---

## Step 5: Test & Send to Juan (3 minutes)

### Test checklist:
- [ ] Form loads correctly
- [ ] All 21 sections present
- [ ] Progress bar works
- [ ] File uploads work
- [ ] Form submission sends email
- [ ] Mobile responsive
- [ ] Animations smooth

### Send Juan both links:

"Juan,

Your FDD form is live in TWO versions:

🌞 **Light/Corporate:** https://intake.myfranchisemachine.com  
Clean, professional, traditional feel

🌙 **Dark/Sleek:** https://intake-dark.myfranchisemachine.com  
Modern, premium, high-tech vibe

Both have exact copy from The Franchise Firm + premium design + smooth animations + mobile-optimized.

Pick your favorite or we can make adjustments!"

---

## 🎯 Quick Deploy Checklist

- [ ] Previewed both versions locally
- [ ] Got Web3Forms API key
- [ ] Updated API key in code
- [ ] Rebuilt both versions
- [ ] Deployed light version to Vercel
- [ ] Deployed dark version to Vercel
- [ ] Configured custom domains
- [ ] Tested form submission
- [ ] Sent preview links to Juan

---

## 📦 Ready-to-Deploy Packages

Pre-built versions available:
- `dist-light-DEPLOY.tar.gz` - Light version
- `dist-dark-DEPLOY.tar.gz` - Dark version

Extract and drag to Vercel. Done!

---

## 💡 Pro Tips

**If Juan wants changes:**
- Edit `src/themes.js` for colors/styling
- Edit `src/data/formSections.js` for form fields
- Run `npm run build:both` to rebuild

**If deployment fails:**
- Check Web3Forms API key is set
- Verify all node_modules are installed
- Try clearing build cache: `rm -rf dist-light dist-dark`

**If DNS doesn't work:**
- Wait longer (can take up to 24h, usually 10 mins)
- Verify CNAME record is correct
- Check with: `dig intake.myfranchisemachine.com`

---

**Total time:** ~20 minutes (both versions)  
**Total cost:** $0  
**Quality:** Million-dollar agency x2

🚀 **Ship it!**
