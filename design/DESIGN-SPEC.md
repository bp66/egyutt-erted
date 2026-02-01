# Együtt-Érted Fejlesztőház - Website Design Specification

## Design Philosophy

The website design should reflect the warm, welcoming, and child-friendly atmosphere visible in the physical space. The hand-painted murals, natural wood elements, and soft colors create a sense of safety and playfulness that parents and children should feel when visiting the website.

**Key Principles:**
- Warm and approachable, not clinical
- Easy to navigate for stressed parents
- Professional but friendly
- Mobile-first responsive design
- Accessible to all users

---

## Color Palette

Derived from the building's interior design (murals, furniture, accents):

### Primary Colors

```css
:root {
  /* Warm cream/yellow - from walls */
  --color-cream: #F5ECD7;
  --color-warm-yellow: #F2E8C9;

  /* Soft green - from tree murals */
  --color-leaf-green: #8BC34A;
  --color-soft-green: #C5E1A5;
  --color-pale-green: #E8F5E9;

  /* Earth brown - from wood elements */
  --color-wood-brown: #8D6E63;
  --color-light-wood: #BCAAA4;
}
```

### Accent Colors

```css
:root {
  /* Coral/Orange - from cushions and numbers */
  --color-coral: #E57373;
  --color-warm-orange: #FF8A65;

  /* Sky blue - from accents in murals */
  --color-sky-blue: #81D4FA;
  --color-soft-blue: #B3E5FC;

  /* Sunny yellow - from sun decoration */
  --color-sunny: #FFD54F;
}
```

### Neutral Colors

```css
:root {
  /* Text and backgrounds */
  --color-text-dark: #4E342E;
  --color-text-medium: #6D4C41;
  --color-text-light: #8D6E63;

  --color-white: #FFFFFF;
  --color-off-white: #FAFAFA;
  --color-light-gray: #F5F5F5;
}
```

### Semantic Colors

```css
:root {
  /* Service category colors */
  --color-movement: #8BC34A;      /* Green - Mozgásfejlesztés */
  --color-early-dev: #FFD54F;     /* Yellow - Korai fejlesztés */
  --color-speech: #FF8A65;        /* Orange - Logopédia */
  --color-music: #81D4FA;         /* Blue - Zeneterápia */
  --color-psychology: #CE93D8;    /* Purple - Pszichológia */
}
```

---

## Typography

### Font Selection

**Primary Font (Headings):** Nunito
- Rounded, friendly, approachable
- Good readability
- Free from Google Fonts

**Secondary Font (Body):** Open Sans
- Clean and professional
- Excellent readability
- Wide language support (Hungarian characters)

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

:root {
  --font-heading: 'Nunito', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

### Type Scale

```css
:root {
  /* Desktop */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */

  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Heading Styles

```css
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  color: var(--color-text-dark);
}

h2 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--color-text-dark);
}

h3 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text-dark);
}

p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-medium);
}
```

---

## Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

---

## Border Radius

Rounded corners to match the friendly, soft aesthetic:

```css
:root {
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* Pill shape */
}
```

---

## Shadows

Soft, subtle shadows:

```css
:root {
  --shadow-sm: 0 1px 2px rgba(78, 52, 46, 0.05);
  --shadow-md: 0 4px 6px rgba(78, 52, 46, 0.07);
  --shadow-lg: 0 10px 15px rgba(78, 52, 46, 0.1);
  --shadow-xl: 0 20px 25px rgba(78, 52, 46, 0.1);
}
```

---

## Breakpoints

```css
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
}
```

---

## Component Designs

### Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]  Együtt-Érted     Szolgáltatások  Szakemberek  Kapcsolat│
│          Fejlesztőház          ▼              ▼        [CTA]    │
└─────────────────────────────────────────────────────────────────┘

Mobile:
┌─────────────────────────────────────┐
│  [Logo]  Együtt-Érted      [☰ Menu] │
└─────────────────────────────────────┘
```

**Specs:**
- Height: 80px desktop, 64px mobile
- Background: white with subtle shadow on scroll
- Logo: Heart-hands icon from building + text
- CTA button: "Kapcsolat" in coral color

---

### Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     Együtt - Érted!                                            │
│     Fejlesztőház                                               │
│                                                                 │
│     Szakszerű fejlesztés, szeretettel – Vácon                  │
│                                                                 │
│     A fejlődéshez kinek több, kinek kevesebb                   │
│     segítségre van szüksége. Szeretnénk, hogy                  │
│     ez a segítség elérhető legyen.                             │
│                                                                 │
│     [Szolgáltatásaink]  [Kapcsolatfelvétel]                    │
│                                                                 │
│  ┌──────────┐                                                   │
│  │ Building │  (Hero image: facade or welcoming interior)       │
│  │  Photo   │                                                   │
│  └──────────┘                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: Soft gradient (cream to pale green)
- Optional: Subtle hand-drawn decorative elements (leaves, sun)
- Primary CTA: Green button
- Secondary CTA: Outlined button

---

### Service Cards

```
┌────────────────────────┐
│      [Icon]            │
│   Mozgásfejlesztés     │
│                        │
│   DSZIT, Alapozó,      │
│   Konduktív pedagógia  │
│                        │
│   [Részletek →]        │
└────────────────────────┘
```

**Specs:**
- Background: White
- Border-radius: 16px
- Shadow: shadow-md
- Icon: Simple, rounded style matching the mural aesthetic
- Hover: Slight lift with shadow-lg
- Category color accent (top border or icon background)

---

### Specialist Cards

```
┌────────────────────────────────────────┐
│  ┌──────────┐                          │
│  │  Photo   │  Bálint Edina            │
│  │ (circle) │  Korai fejlesztő         │
│  └──────────┘                          │
│                                        │
│  Gyógypedagógus, szurdopedagógus,     │
│  tiflopedagógus...                     │
│                                        │
│  📞 +36-20-404-8286                    │
│  ✉️ koraifejleszto@egyutterted.hu     │
│                                        │
│  [Bővebben]                            │
└────────────────────────────────────────┘
```

**Specs:**
- Photo: 120px circle with 4px border (category color)
- Background: off-white or white
- Border-radius: 16px

---

### Age Group Tabs

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Kinek ajánljuk?                                              │
│                                                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│   │  0-3 év  │ │  3-6 év  │ │ 6-12 év  │ │ 12-16 év │         │
│   │ [active] │ │          │ │          │ │          │         │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                                                         │  │
│   │  Ajánlott szolgáltatások:                              │  │
│   │  • Korai fejlesztés                                    │  │
│   │  • Konduktív pedagógia                                 │  │
│   │  • Zeneterápia                                         │  │
│   │  • Logopédia                                           │  │
│   │                                                         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Contact Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Kapcsolat                                                     │
│                                                                 │
│   ┌─────────────────────┐  ┌────────────────────────────────┐  │
│   │                     │  │                                │  │
│   │   📍 Cím            │  │   [Google Maps Embed]          │  │
│   │   2600 Vác          │  │                                │  │
│   │   Zichy H. u. 23.   │  │                                │  │
│   │                     │  │                                │  │
│   │   📞 Telefon        │  │                                │  │
│   │   +36-20-226-4114   │  │                                │  │
│   │                     │  │                                │  │
│   │   ✉️ Email          │  │                                │  │
│   │   info@egyutterted.hu│ │                                │  │
│   │                     │  │                                │  │
│   └─────────────────────┘  └────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Footer

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   [Logo]                    Szolgáltatások    Kapcsolat         │
│   Együtt-Érted              • Mozgásfejlesztés  📍 Vác         │
│   Fejlesztőház              • Korai fejlesztés  📞 +36-20-...  │
│                             • Logopédia         ✉️ info@...    │
│   Vácon, a jövő             • Zeneterápia                      │
│   nemzedékéért...           • Pszichológia                     │
│                                                                 │
│   ─────────────────────────────────────────────────────────    │
│   © 2026 Együtt-Érted Fejlesztőház                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: color-text-dark (warm brown)
- Text: white/cream
- Links: cream with hover underline

---

## Button Styles

### Primary Button

```css
.btn-primary {
  background: var(--color-leaf-green);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #7CB342; /* Slightly darker green */
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

### Secondary Button

```css
.btn-secondary {
  background: transparent;
  color: var(--color-leaf-green);
  border: 2px solid var(--color-leaf-green);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 600;
}

.btn-secondary:hover {
  background: var(--color-pale-green);
}
```

### CTA Button (Coral)

```css
.btn-cta {
  background: var(--color-coral);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 600;
}
```

---

## Icons

Use **Lucide Icons** (open source, lightweight):
- Consistent rounded style
- Matches friendly aesthetic
- Easy to customize colors

Key icons needed:
- Phone, Email, Location
- Menu (hamburger), Close
- Arrow right, Chevron down
- Service category icons (custom or from set)

---

## Decorative Elements

Inspired by the wall murals:
- Subtle leaf/tree branch decorations
- Small sun icon
- Rounded cloud shapes
- Soft, hand-drawn style borders

These can be SVG illustrations placed:
- In hero section corners
- As section dividers
- In empty states

---

## Page Layouts

### Homepage Sections (in order)

1. **Navigation** (sticky)
2. **Hero** - Welcome message + main CTA
3. **Services Overview** - 5 category cards
4. **"Kinek ajánljuk?"** - Age group tabs
5. **About Teaser** - Brief story + link
6. **Specialists** - Carousel or grid of 8
7. **Building Gallery** - Photo showcase
8. **Contact** - Info + map
9. **Footer**

### Service Page Layout

1. Navigation
2. Service Hero (title, brief description, icon)
3. Detailed Description
4. Indications list (who is it for)
5. Specialist(s) for this service
6. Practical info (format, frequency)
7. Related services
8. CTA (contact)
9. Footer

### Contact Page Layout

1. Navigation
2. Hero (simple)
3. All specialists with contact info
4. General contact info
5. Map embed
6. Contact form (optional)
7. Footer

---

## Animations

Keep animations subtle and purposeful:

```css
/* Fade in on scroll */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Button hover lift */
.btn:hover {
  transform: translateY(-2px);
}

/* Card hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

---

## Accessibility Requirements

- **Color contrast:** Minimum 4.5:1 for normal text
- **Focus states:** Visible focus rings on all interactive elements
- **Alt text:** All images have descriptive alt text
- **Keyboard navigation:** Full site navigable by keyboard
- **Skip links:** "Skip to main content" link
- **ARIA labels:** On icons and interactive elements
- **Reduced motion:** Respect `prefers-reduced-motion`

---

## File Structure

```
/
├── index.html
├── szolgaltatasok/
│   ├── index.html (services overview)
│   ├── mozgasfejlesztes.html
│   ├── korai-fejlesztes.html
│   ├── logopedia.html
│   ├── zeneterapia.html
│   └── pszichologia.html
├── szakemberek.html
├── kapcsolat.html
├── rolunk.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   └── pages.css
├── js/
│   ├── main.js
│   └── components/
├── assets/
│   ├── images/
│   │   ├── specialists/
│   │   ├── building/
│   │   └── icons/
│   └── fonts/
└── favicon.ico
```

---

## Libraries to Use

1. **None required** - Vanilla CSS and JS
2. **Optional:**
   - AOS (Animate on Scroll) - for scroll animations
   - Swiper - for image carousels (if needed)
   - Lucide Icons - for iconography

---

## Next Steps

1. [ ] Create HTML structure for homepage
2. [ ] Implement CSS variables and base styles
3. [ ] Build component library (buttons, cards, etc.)
4. [ ] Complete homepage layout
5. [ ] Add responsive styles
6. [ ] Build service pages
7. [ ] Build contact page
8. [ ] Add JavaScript interactions
9. [ ] Optimize images
10. [ ] Test accessibility
