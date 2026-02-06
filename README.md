# MyFranchiseMachine - FDD Intake Form

Premium franchise disclosure document questionnaire form.

## 🚀 Live Preview

**Local Development:**
```bash
npm install
npm run dev
```

Visit http://localhost:5173

## 📦 Deployment to Vercel

### Option 1: Via Vercel Dashboard (Recommended)
1. Go to https://vercel.com/new
2. Import this Git repository
3. Configure custom domain: `intake.myfranchisemachine.com`
4. Deploy!

### Option 2: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 🎨 Design Features

- ✅ Premium design with MyFranchiseMachine brand colors (#2AC5D7)
- ✅ Multi-step form with progress tracking
- ✅ Auto-save to localStorage
- ✅ Smooth animations with Framer Motion
- ✅ Mobile-first responsive design
- ✅ File upload support
- ✅ Form validation
- ✅ Email delivery to juan@myfranchisemachine.com

## 🔧 Configuration Needed

### 1. Web3Forms API Key
Get a free API key at https://web3forms.com

Update in `src/App.jsx` line 57:
```javascript
formDataToSend.append('access_key', 'YOUR_WEB3FORMS_KEY')
```

### 2. Custom Domain Setup
After deploying to Vercel:

**For `intake.myfranchisemachine.com`:**
1. Go to Vercel project settings → Domains
2. Add custom domain: `intake.myfranchisemachine.com`
3. Add DNS records in your domain provider:
   - Type: CNAME
   - Name: intake
   - Value: cname.vercel-dns.com
   - TTL: Auto

**For `myfranchisemachine.com/intake`:**
1. Deploy as subdomain first
2. Set up a redirect from main site

## 📝 Form Sections

All 21 FDD items are included:
1. Franchisor Information
2. Business Experience
3. Litigation
4. Bankruptcy
5. Initial Fees
6. Other Fees
7. Estimated Initial Investment
8. Product/Service Restrictions
9-21. (All remaining FDD items)

## 🎯 Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- Web3Forms (email backend)

## 📧 Email Configuration

Emails are sent to: `juan@myfranchisemachine.com`

Format: Clean, organized responses grouped by section with all file attachments included.

---

Built with 💙 by Farrah AI
