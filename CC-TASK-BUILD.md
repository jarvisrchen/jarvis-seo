# Prototype Build — Nisarga Cure

## Context
- Client: Nisarga Cure
- Slug: nisargacure
- Industry: Naturopathy, Wellness, Physiotherapy, Yoga
- Location: Raipur, Chhattisgarh, India
- Live site: https://nisargacure.com/
- Audit score: ~32/100
- Platform: Zyrosite (SaaS site builder — no WordPress/custom code access)
- Top issues: No meta robots, zero structured data, thin homepage, stock images, no OG tags
- Services: Naturopathy consultation, Tele-consultation, Weight Management, Pain Management, Obesity, Diabetic Management, PCOD/PCOS, Home Visit, Lifestyle Disorders, Post-Surgery Rehab, Yoga Therapy, Physiotherapy, Acupuncture, Acupressure
- Contact: Phone/WhatsApp +918962977723, Email: drteerthamdewangan@gmail.com
- Address: Shop No.3, Shri Thakur Singh Complex, Sarona, Near Gautham Chowk, Near Shri Sankalp Hospital, Raipur, Chhattisgarh 492099
- Images: public/clients/nisargacure/manifest.txt

## Theme Strategy
BUILD NEW — no existing wellness theme. Build from scratch using king-mode ULTRATHINK for design.

## Instructions
1. Read manifest.txt at public/clients/nisargacure/manifest.txt
2. Create theme at src/components/theme-nisargacure/
3. Create page at src/app/clients/nisargacure/page.tsx
4. Create articles placeholder at src/app/clients/nisargacure/articles/page.tsx
5. Create Privacy Policy page at src/app/clients/nisargacure/privacy/page.tsx
6. Create Terms of Service page at src/app/clients/nisargacure/terms/page.tsx
7. Add Privacy Policy and Terms of Service links to the Footer component
8. Header nav must match the original site's page layout order:
   - Home (/), Services (/physiotherapy-naturopathy-yoga-services), Blog (/naturopathy-holistic-approaches), Reviews (/reviews-client-satisfaction), About (/founder-of-nisargacure), Contact (/contact-us)
9. Use REAL content from this prompt — no lorem ipsum
10. Apply king-mode ULTRATHINK for design decisions
11. Use existing UI primitives from src/components/ui/ if available

## Real Content

### Business Description
Nisarga Cure is a naturopathy and wellness center in Raipur, Chhattisgarh, India. They blend naturopathy therapies with modern holistic practices. Their mission is to empower individuals to take control of their own health through personalized natural solutions.

### Services (real, from live site)
1. Naturopathy Consultation
2. Tele-Consultation
3. Weight Management
4. Pain Management
5. Obesity Management
6. Diabetic Management
7. PCOD / PCOS Management
8. Home Visit
9. Lifestyle Disorders
10. Post-Surgery Physical Therapy / Rehabilitation
11. Yoga Therapy
12. Physiotherapy
13. Acupuncture
14. Acupressure

### About the Founder
Dr. Teertham Dewangan is the founder of Nisarga Cure. She is a licensed naturopathy practitioner. The site mentions Central Registration and State Registration credentials.

### Hero Section
Headline: "Empower Yourself with Naturopathy and Yoga"
Sub-headline: "Our mission is to empower individuals to take control of their own health and live their best lives through personalized natural solutions."

### Why Choose Us (from site)
- Naturopathy — natural healing approach
- Personalized therapies — each treatment plan is customized
- Modern holistic practices — combining traditional wisdom with contemporary understanding
- Multiple modalities — yoga, acupuncture, acupressure, physiotherapy

### Contact Info
- WhatsApp: +918962977723
- Email: drteerthamdewangan@gmail.com
- Booking: https://teertham.setmore.com/teertham
- Full Address: Shop No.3, Shri Thakur Singh Complex, Sarona, Near Gautham Chowk, Near Shri Sankalp Hospital, Raipur, Chhattisgarh 492099
- Location: Raipur, Chhattisgarh

### Nav Order (exact from live site)
Home → Services → Blog → Reviews → About → Contact
All are page links (NOT anchors).

### Blog URL
/naturopathy-holistic-approaches

## Placeholder (styled only)
- Contact form (not wired up — use a styled form with all fields)
- Blog / articles — link to /clients/nisargacure/articles as "Coming Soon"
- Google Maps — styled placeholder for Raipur, Chhattisgarh
- FAQ section — add 4-5 relevant FAQs about naturopathy
- Testimonials — 2-3 placeholder testimonials (label them as "Client testimonial")

## SEO Requirements
- Add proper meta title and description on the page (not hardcoded in layout)
- Add JSON-LD structured data: LocalBusiness schema with name, address, phone, services
- Add Organization schema
- Add FAQPage schema with the FAQ content
- Add Open Graph meta tags
- Canonical URL pointing to /clients/nisargacure

## Technical
- Run `npx tsc --noEmit` before committing — fix all errors
- Commit: feat(nisargacure): add Nisarga Cure prototype
- Push to: git push origin clients/nisargacure
- Create branch: clients/nisargacure (from main)
- The root page.tsx should redirect to /clients/nisargacure

## Design Direction
- Color: Purple/violet primary (matches existing brand), with teal/green accents (wellness, nature, healing)
- Font: Nunito (same as original site) or similar rounded sans-serif
- Clean, calm, professional wellness aesthetic
- Mobile-first responsive design
- Soft gradients, rounded corners, generous whitespace
- Nature imagery — plants, leaves, calming wellness photography
