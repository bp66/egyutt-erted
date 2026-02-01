# Együtt-Érted Fejlesztőház - Website Redesign Proposal

## About the Organization

**Együtt-Érted Fejlesztőház** (Together - For You! Development House) is a SEND (Special Educational Needs and Disabilities) education center located in Vác, Hungary. Founded in 2013, the center was established by parents (Baloghné Tóth Katalin and Balogh Péter) whose daughter was born with developmental challenges. Their mission is to provide specialized therapies and development services close to families' homes, eliminating the need to travel to Budapest for each therapy session.

**Location:** Zichy Hippolyt u. 23., Vác, 2600, Hungary
**General Contact:** +36-20-226-4114 | info@egyutterted.hu
**Tagline:** "Vácon, a jövő nemzedékéért..." (In Vác, for the future generation...)

---

## Current Website Analysis

### Existing Page Structure
Based on research, the current website has the following pages:
- Kezdőoldal (Home)
- Bemutatkozás (Introduction)
- Mozgás (Movement therapies)
  - Alapozó torna (Foundation therapy)
  - Dinamikus Szenzoros Integrációs Terápia (DSZIT)
  - Konduktív pedagógia (Conductive pedagogy)
- Zene (Music)
  - Zeneterápia (Music therapy)
  - Zene-bölcsi (Music for toddlers)
- Pszichológia (Psychology)
  - Gyermek lelkivilág (Child psychology)
- Tudás (Knowledge)
  - Angol ovisoknak (English for preschoolers)
- Elérhetőség (Contact)

### Current Issues Identified
1. **Outdated design** - Not mobile-responsive
2. **Fragmented navigation** - Services scattered across different categories
3. **Missing information** - No clear indications/symptoms for each therapy
4. **Incomplete specialist profiles** - Minimal therapist information
5. **No age group clarity** - Target ages not clearly communicated
6. **Lack of visual hierarchy** - Difficult to find relevant information quickly

---

## Current Services & Specialists

### Movement Therapies (Mozgás)

#### 1. Alapozó Terápia (Foundation Therapy)
**Specialist:** dr. Illés Hilda (also psychologist)
**Contact:** Part of psychology services
**Description:** Complex neurological development therapy based on movement development that restarts the human developmental movement sequence.

**Current Target:** 5-16 years
**Indications:**
- Delayed or impaired speech development
- Pronunciation difficulties
- Dyslexia and dysgraphia
- Hyperactivity and attention disorders (organic origin)
- Developmental delays in preschoolers
- Mild intellectual disabilities
- General motor clumsiness

**Format:** 2×1 hour/week, groups of 5-6 children

---

#### 2. DSZIT (Dinamikus Szenzoros Integrációs Terápia)
**Specialists:**
- Tóth Anita (Sensory Integration Therapist) - +36-20-201-5318 | szit@egyutterted.hu
- Horváth-Lengyel Viktória (Foundation therapy, Conductor-teacher, DSZIT specialist) - +36-20-325-1849 | konduktor@egyutterted.hu

**Description:** Dynamic Sensory Integration Therapy developed by Varga Izabella and Szvatkó Anna, based on Ayres' sensory integration therapy. It addresses sensory processing difficulties considering environmental, emotional, and social factors.

**Target Age:** 3-8 years
**Indications:**
- Learning difficulties
- Behavioral and integration challenges
- Motor coordination problems
- Delayed speech development
- Speech problems
- Attention disorders
- Hyperactivity
- Intellectual disabilities
- Autism spectrum

**Format:** Individual and small group sessions, playful therapeutic activities

---

#### 3. Konduktív Pedagógia (Conductive Pedagogy)
**Specialist:** Horváth-Lengyel Viktória
**Contact:** +36-20-325-1849 | konduktor@egyutterted.hu

**Description:** Pető András's method for rehabilitation of people with central nervous system damage. A holistic approach that develops not just movement, but also speech, thinking, and social skills.

**Target Age:** All ages (from infancy)
**Indications:**
- Cerebral palsy
- Central nervous system damage
- Motor disabilities
- Need for integrated development (motor + cognitive + social)

**Format:** Mother-baby sessions, individual therapy, group sessions (depending on age and condition)

---

### Music Services (Zene)

#### 4. Zeneterápia (Music Therapy)
**Specialist:** Bergmann Emese (kindergarten teacher, music therapist, family life educator)
**Contact:** +36-30-668-6290 | zene@egyutterted.hu

**Description:** Uses music to map capabilities and restore damaged functions, enabling better intellectual-emotional and social relationships. Helps with communication, relationship building, learning, self-expression.

**Target Age:** Various (customized)
**Indications:**
- Communication difficulties
- Emotional regulation challenges
- Social skill development needs
- Learning difficulties
- Rehabilitation needs

---

#### 5. Zene-bölcsi (Music for Babies/Toddlers)
**Specialist:** Bergmann Emese
**Contact:** +36-30-668-6290 | zene@egyutterted.hu

**Description:** Musical sessions with music therapy elements for very young children and expectant mothers. Features Hungarian folk music, classical, and modern music.

**Target Age:** 0-3 years + pregnant mothers
**Schedule:** Tuesdays, 9:30-10:00 and 10:00-10:30

---

### Psychology Services (Pszichológia)

#### 6. Pszichológia / Gyermek lelkivilág (Psychology / Child Psychology)
**Specialist:** dr. Illés Hilda (psychologist, developmental specialist, lawyer, mother of three)
**Contact:** +36-20-254-0578 | pszichologus@egyutt-erted.hu

**Credentials:**
- MA Psychology (Debreceni Egyetem) - counseling and school psychology
- Foundation therapy training
- Play therapy certification
- OH-card instructor
- Certified drawing analysis expert
- Story therapy candidate

**Description:** Rogerian approach (unconditional acceptance, empathy, authenticity). Systems-oriented work with emphasis on parent consultation and family dynamics.

**Target Age:** Children and adults (healthy individuals, not psychiatric cases)
**Areas Addressed:**
- Family changes (new siblings)
- Loss experiences (divorce, death)
- Social skills development
- Psychosomatic symptoms
- Educational difficulties
- Behavioral challenges

---

### Educational Services (Tudás)

#### 7. Angol ovisoknak (English for Preschoolers)
**Specialist:** Not specified
**Contact:** General contact

**Description:** Teaching English to preschoolers and elementary students since 2004. Playful, movement-based approach where language "sticks" naturally.

**Target Age:**
- 3-4 years: Mondays 16:30-17:00 (max 6 children)
- 5-6 years: Mondays 17:15-17:45 (max 6 children)

**Topics:** Animals, numbers, body parts, colors, simple actions, everyday objects

---

### Early Development

#### 8. Korai Fejlesztés (Early Development)
**Specialist:** Bálint Edina
**Contact:** +36-20-404-8286 | koraifejleszto@egyutterted.hu

**Description:** Comprehensive early childhood development for children showing developmental differences.

**Target Age:** 0-6 years

---

## Recommended New Website Structure

### Primary Navigation

```
HOME
├── RÓLUNK (About Us)
│   ├── Történetünk (Our Story)
│   ├── Küldetésünk (Our Mission)
│   └── Szakembereink (Our Specialists)
│
├── SZOLGÁLTATÁSOK (Services) - [Main specialty sections]
│   │
│   ├── MOZGÁSFEJLESZTÉS (Movement Development)
│   │   ├── Alapozó Terápia
│   │   ├── DSZIT (Szenzoros Integráció)
│   │   └── Konduktív Pedagógia
│   │
│   ├── ZENETERÁPIA (Music Therapy)
│   │   ├── Egyéni Zeneterápia
│   │   └── Zene-bölcsi (0-3 év)
│   │
│   ├── PSZICHOLÓGIA (Psychology)
│   │   ├── Gyermekpszichológia
│   │   └── Szülői Tanácsadás
│   │
│   ├── KORAI FEJLESZTÉS (Early Development)
│   │
│   └── ANGOL NYELVOKTATÁS (English Education)
│
├── KINEK AJÁNLJUK? (Who Is It For?)
│   ├── Életkor szerint (By Age)
│   │   ├── 0-3 éves korig
│   │   ├── 3-6 éves (óvodások)
│   │   ├── 6-12 éves (iskolások)
│   │   └── 12-16 éves
│   │
│   └── Tünetek szerint (By Symptoms)
│       ├── Mozgásfejlődési elmaradás
│       ├── Beszédfejlődési késés
│       ├── Figyelemzavar / Hiperaktivitás
│       ├── Tanulási nehézségek
│       ├── Viselkedési problémák
│       └── Szenzoros feldolgozási nehézségek
│
├── KAPCSOLAT (Contact)
│   ├── Elérhetőségek
│   ├── Helyszín és megközelítés
│   └── Időpontfoglalás
│
└── HÍREK / BLOG (News/Blog) [optional]
```

---

## Detailed Content Recommendations

### Homepage

**Hero Section:**
- Large, welcoming image of the center with children
- Main headline: "Együtt - Érted! Fejlesztőház"
- Subheadline: "Szakszerű fejlesztés, szeretettel - Vácon"
- CTA buttons: "Szolgáltatásaink" / "Kapcsolat"

**Quick Service Overview:**
- 6 icon cards for main services with brief descriptions
- Each links to detailed service page

**"Kiknek segítünk?" (Who do we help?) Section:**
- Age-based tabs or accordion
- Symptom-based quick links

**Specialist Highlights:**
- Photo + brief intro for each therapist
- Links to full profiles

**Testimonials** (if available)

**Location & Contact Quick Info**

---

### Service Page Template (for each specialty)

Each service page should follow this structure:

#### Header
- Service name
- One-sentence description
- Key visual/icon

#### Overview Section
```
MIBEN SEGÍT? (How does it help?)
[2-3 paragraph description of the therapy/service]
```

#### Target Audience
```
KIKNEK AJÁNLJUK? (Who is it for?)

Életkor: [Age range]

Tünetek / Jellemzők:
• [Symptom 1]
• [Symptom 2]
• [Symptom 3]
...
```

#### Practical Information
```
GYAKORLATI INFORMÁCIÓK

Foglalkozás formája: [Individual/Group/Both]
Gyakoriság: [Weekly frequency]
Időtartam: [Session length]
Helyszín: [Location]
```

#### Therapist Profile
```
SZAKEMBERÜNK

[Photo]
[Name]
[Title/Qualifications]

[2-3 paragraph professional bio including:]
- Educational background
- Specializations
- Experience
- Approach/philosophy

Elérhetőség:
📞 [Phone]
✉️ [Email]
```

#### Call to Action
```
ÉRDEKLŐDÉS / IDŐPONTFOGLALÁS
[Contact form or booking button]
```

---

## Specialist Profile Content

### dr. Illés Hilda - Pszichológus, Alapozó Fejlesztő

**Photo:** [Professional headshot needed]

**Qualifications:**
- Pszichológus (MA) - Debreceni Egyetem, tanácsadás és iskolapszichológia
- Alapozó terápiás mozgásfejlesztő
- OH-kártya instruktor
- Okleveles rajzvizsgálati szakértő
- Meseterapeuta jelölt
- Jogász

**Bio:**
Dr. Illés Hilda három gyermek édesanyja. Hisz a kapcsolat gyógyító erejében és az öngyógyító képességben. Munkája során rogersi elvekre épít: feltétel nélküli elfogadás, empátia és hitelesség jellemzi a terápiás kapcsolatot. Rendszerszemléletben dolgozik, gyermekek esetében különösen fontosnak tartja a szülőkkel történő rendszeres konzultációt.

**Contact:**
- 📞 +36-20-254-0578
- ✉️ pszichologus@egyutt-erted.hu

---

### Bergmann Emese - Zeneterapeuta

**Photo:** [Professional headshot needed]

**Qualifications:**
- Óvónő
- Zeneterapeuta
- Családi életre nevelő

**Bio:**
Bergmann Emese a zene gyógyító erejét használja fel a gyermekek fejlesztésében. A zeneterápia segítségével az egyén képességeinek feltérképezése és a sérült funkciók helyreállítása válik lehetővé. A Zene-bölcsi foglalkozásokon a legkisebbeket és várandós édesanyákat várja magyar népzenétől a klasszikus és modern zenéig ívelő programmal.

**Contact:**
- 📞 +36-30-668-6290
- ✉️ zene@egyutterted.hu

---

### Horváth-Lengyel Viktória - Konduktor, Mozgásfejlesztő

**Photo:** [Professional headshot needed]

**Qualifications:**
- Konduktor-tanító
- Alapozó terápiás mozgásfejlesztő
- DSZIT mozgásfejlesztő szakember

**Bio:**
Horváth-Lengyel Viktória komplex mozgásfejlesztési megközelítést alkalmaz. A konduktív pedagógia, az alapozó terápia és a DSZIT módszerek kombinálásával segít a gyermekeknek a mozgáskoordinációs és szenzoros feldolgozási nehézségeik leküzdésében. Egyéni és csoportos foglalkozásokat egyaránt tart.

**Contact:**
- 📞 +36-20-325-1849
- ✉️ konduktor@egyutterted.hu

---

### Tóth Anita - Szenzoros Integrációs Terapeuta

**Photo:** [Professional headshot needed]

**Qualifications:**
- Szenzoros integrációs terápiát végző szakember

**Bio:**
[Additional information needed]

**Contact:**
- 📞 +36-20-201-5318
- ✉️ szit@egyutterted.hu

---

### Bálint Edina - Korai Fejlesztő

**Photo:** [Professional headshot needed]

**Qualifications:**
- Korai fejlesztő szakember

**Bio:**
Bálint Edina a legkisebb gyermekek és családjaik fejlesztésével foglalkozik. A korai fejlesztés során komplex, személyre szabott megközelítést alkalmaz a fejlődési elmaradás feltérképezésére és a sérült készségek fejlesztésére.

**Contact:**
- 📞 +36-20-404-8286
- ✉️ koraifejleszto@egyutterted.hu

---

## "Who Is It For?" Page Content

### By Age Group

#### 0-3 éves korig (Babies & Toddlers)
**Ajánlott szolgáltatások:**
- 🎵 Zene-bölcsi zeneterápiával
- 👶 Korai fejlesztés
- 🧠 Konduktív pedagógia (mama-baba foglalkozás)

**Jellemző fejlesztési igények:**
- Megkésett mozgásfejlődés
- Izomtónus eltérések
- Központi idegrendszeri érintettség korai jelei

---

#### 3-6 éves (Óvodások)
**Ajánlott szolgáltatások:**
- 🏃 DSZIT terápia
- 🎵 Zeneterápia
- 🧠 Konduktív pedagógia
- 👶 Korai fejlesztés (6 éves korig)
- 🇬🇧 Angol ovisoknak
- 💭 Gyermekpszichológia

**Jellemző fejlesztési igények:**
- Figyelemzavar
- Szenzoros feldolgozási nehézségek
- Beszédfejlődési késés
- Mozgáskoordinációs problémák
- Viselkedési nehézségek óvodában

---

#### 6-12 éves (Iskolások)
**Ajánlott szolgáltatások:**
- 🏃 Alapozó terápia
- 🧠 Konduktív pedagógia
- 💭 Gyermekpszichológia
- 🇬🇧 Angol nyelvoktatás

**Jellemző fejlesztési igények:**
- Diszlexia, diszgráfia
- Tanulási nehézségek
- Figyelemzavar (ADHD)
- Mozgásügyetlenség

---

#### 12-16 éves
**Ajánlott szolgáltatások:**
- 🏃 Alapozó terápia
- 💭 Pszichológia

**Jellemző fejlesztési igények:**
- Tanulási nehézségek folytatása
- Serdülőkori pszichés kihívások

---

### By Symptoms/Indications

#### Mozgásfejlődési elmaradás
**Jellemzők:** Megkésett mérföldkövek, izomtónus eltérések, motoros ügyetlenség
**Ajánlott terápiák:** Konduktív pedagógia, DSZIT, Alapozó terápia

#### Beszédfejlődési késés
**Jellemzők:** Kevés szó, nehezen érthetőség, kiejtési problémák
**Ajánlott terápiák:** Alapozó terápia, DSZIT, Zeneterápia

#### Figyelemzavar / Hiperaktivitás
**Jellemzők:** Nehézségek a koncentrációval, impulzivitás, túlmozgékonyság
**Ajánlott terápiák:** Alapozó terápia, DSZIT, Pszichológia

#### Tanulási nehézségek
**Jellemzők:** Diszlexia, diszgráfia, diszkalkulia jelei
**Ajánlott terápiák:** Alapozó terápia, Pszichológia

#### Viselkedési problémák
**Jellemzők:** Beilleszkedési nehézségek, agresszió, visszahúzódás
**Ajánlott terápiák:** Pszichológia, Zeneterápia

#### Szenzoros feldolgozási nehézségek
**Jellemzők:** Érzékenység zajra/érintésre, koordinációs problémák, csetlő-botló mozgás
**Ajánlott terápiák:** DSZIT, Alapozó terápia

---

## Technical Recommendations

### Responsive Design Requirements
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1280px
- Touch-friendly navigation on mobile
- Collapsible menu for mobile

### Accessibility
- WCAG 2.1 AA compliance
- Alt text for all images
- Proper heading hierarchy
- Sufficient color contrast
- Keyboard navigation support

### Performance
- Optimized images (WebP format)
- Lazy loading for images
- Fast loading times (<3 seconds)

### SEO
- Hungarian language meta tags
- Structured data for local business
- Optimized URLs in Hungarian
- Local SEO for Vác area

### Features to Add
1. **Online appointment booking** - Simple form or integration with booking system
2. **FAQ section** - Common questions about therapies
3. **Resources section** - Downloadable materials for parents
4. **News/Blog** - Updates about the center and relevant articles

---

## Content Gaps to Address

### Missing Information Needed:
1. **Photos** - Professional photos of:
   - The development center building/interior
   - Each specialist (professional headshots)
   - Children during therapy sessions (with consent)

2. **Detailed bios** for:
   - Tóth Anita (SIT specialist)
   - Bálint Edina (Early development)
   - English teacher(s)

3. **Pricing information** - Consider whether to display on website or keep for inquiry

4. **Success stories/Testimonials** - Anonymous parent testimonials

5. **FAQ content** - Common questions from parents

6. **Practical information:**
   - Parking availability
   - Public transport access
   - What to bring to first appointment
   - What to expect at initial consultation

---

## Implementation Priority

### Phase 1: Foundation
1. New responsive design template
2. Updated navigation structure
3. Homepage redesign
4. Contact page with map and booking form

### Phase 2: Service Pages
5. Create detailed pages for each specialty
6. Specialist profile pages
7. "Who is it for?" section

### Phase 3: Enhancement
8. FAQ section
9. Resources/downloads
10. Blog/news section
11. Testimonials

---

## Summary

The Együtt-Érted Fejlesztőház website needs a complete redesign to:
1. **Modernize** the visual design and make it responsive
2. **Clarify** services by providing detailed information about each therapy
3. **Guide** parents through clear indications and age-appropriate recommendations
4. **Humanize** the center by showcasing specialist profiles
5. **Simplify** the booking/contact process

The new structure organizes content by:
- Service category (Movement, Music, Psychology, Education)
- Target age group
- Symptoms/indications

Each specialty page will have consistent sections covering what the therapy is, who it's for, practical details, and therapist information with direct contact details.
