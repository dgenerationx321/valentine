# Valentine Proposal Website - Setup Guide

## Running the App

```bash
cd valentine-proposal
npm install
npm run dev
```

Visit **http://localhost:5173** to see the website.

---

## Adding Sagrika's Photos

The website currently uses emoji placeholders. To add actual photos:

### 1. Add Photo Files
Place Sagrika's photos in `src/assets/images/`:
- `naina-1.jpg` - For quotes section
- `naina-proposal.jpg` - For the proposal popup
- `naina-celebration.jpg` - For the celebration card

### 2. Update QuotesSection.jsx
Replace the emoji placeholder with her image:

```jsx
// At the top of the file
import nainaPhoto from '../assets/images/naina-1.jpg'

// Replace the emoji div with:
<img
  src={nainaPhoto}
  alt="My love Naina"
  className="w-full h-full rounded-full object-cover"
/>
```

### 3. Update ProposalPopup.jsx
```jsx
import nainaProposal from '../assets/images/naina-proposal.jpg'

// Replace emoji with:
<img
  src={nainaProposal}
  alt="My beautiful Sagrika"
  className="w-full h-full rounded-full object-cover"
/>
```

### 4. Update CelebrationCard.jsx
```jsx
import nainaCelebration from '../assets/images/naina-celebration.jpg'

// Replace emoji with:
<img
  src={nainaCelebration}
  alt="Together forever"
  className="w-full h-full rounded-full object-cover"
/>
```

---

## Setting Up Email Notifications

To receive an email when she clicks "Yes":

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account

### 2. Set Up Email Service
1. Click "Email Services" in the dashboard
2. Add a new service (Gmail, Outlook, etc.)
3. Follow the connection instructions
4. Note down the **Service ID**

### 3. Create Email Template
1. Click "Email Templates"
2. Create a new template with:
   - **Subject**: `🎉 She Said YES! Valentine Proposal Accepted!`
   - **Content**:
   ```
   Hello {{to_name}},

   {{message}}

   Time: {{date}}

   Congratulations! 💖
   ```
3. Note down the **Template ID**

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update CelebrationCard.jsx
Open `src/components/CelebrationCard.jsx` and replace:

```jsx
const serviceId = 'YOUR_SERVICE_ID'    // Replace with your service ID
const templateId = 'YOUR_TEMPLATE_ID'  // Replace with your template ID
const publicKey = 'YOUR_PUBLIC_KEY'    // Replace with your public key
```

---

## Customizing Quotes

Edit the `quotes` array in `src/components/QuotesSection.jsx`:

```jsx
const quotes = [
  {
    text: "Your romantic quote here...",
    subtitle: "A subtitle about the quote..."
  },
  // Add more quotes...
]
```

---

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder. You can deploy this to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use the gh-pages branch

---

## Features Included

✅ Animated heart loader
✅ Romantic quotes carousel with animations
✅ Heart cursor
✅ Floating hearts background
✅ Valentine proposal popup
✅ Escaping "No" button (can't click it!)
✅ Celebration confetti animation
✅ Email notification on "Yes"
✅ Responsive design (works on mobile)
✅ Romantic fonts and styling

---

Made with ❤️ for Sagrika (Naina)
