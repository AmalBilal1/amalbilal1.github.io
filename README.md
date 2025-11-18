# Personal Website

An elegant, modern personal website built with React, Vite, and Framer Motion.

## Features

- **Hero Section**: Beautiful gradient background with smooth fade-in animations
- **About Section**: Two-column layout with elegant typography
- **Projects Section**: Card-based layout with hover effects
- **Research Section**: Timeline design showcasing research work
- **Experience Section**: Vertical timeline with icons
- **Contact Section**: Clean contact information display
- **Scroll Animations**: Smooth scroll-triggered animations throughout
- **Responsive Design**: Mobile-friendly layouts

## Tech Stack

- React 18
- Vite
- Framer Motion (animations)
- CSS3 with custom properties
- Google Fonts (Cormorant Garamond & Outfit)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Deployment

### Automatic Deployment (GitHub Actions)

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

**Setup Steps:**
1. Go to your repository settings
2. Navigate to Pages → Source
3. Select "GitHub Actions" as the source
4. Push to main branch - the site will automatically build and deploy

### Manual Deployment

You can also deploy manually:

```bash
npm run build
npm run deploy
```

## Customization

### Update Personal Information

1. **Hero Section** ([src/components/Hero.jsx](src/components/Hero.jsx)):
   - Update name, tagline, and bio
   - Change social media links

2. **About Section** ([src/components/About.jsx](src/components/About.jsx)):
   - Modify about text and highlights
   - Replace image placeholder with your photo

3. **Projects Section** ([src/components/Projects.jsx](src/components/Projects.jsx)):
   - Edit the `projectsData` array with your projects
   - Update GitHub links and descriptions

4. **Research Section** ([src/components/Research.jsx](src/components/Research.jsx)):
   - Modify the `researchData` array with your research

5. **Experience Section** ([src/components/Experience.jsx](src/components/Experience.jsx)):
   - Update the `experienceData` array with your experience

6. **Contact Section** ([src/components/Contact.jsx](src/components/Contact.jsx)):
   - Change email address and social links

### Update Colors

Colors are defined in [src/index.css](src/index.css) using CSS custom properties:

```css
:root {
  --pastel-teal: #A8DCD9;
  --pastel-mint: #C5E8E2;
  --pastel-blue: #B8D4E8;
  --soft-lavender: #D4C5E8;
  --cream-white: #FDFBF7;
  /* ... */
}
```

### Update Fonts

Fonts are imported in [index.html](index.html). Current fonts:
- Serif: Cormorant Garamond (headings)
- Sans-serif: Outfit (body text)

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx & Hero.css
│   ├── About.jsx & About.css
│   ├── Projects.jsx & Projects.css
│   ├── Research.jsx & Research.css
│   ├── Experience.jsx & Experience.css
│   └── Contact.jsx & Contact.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## License

Feel free to use this template for your own personal website!
