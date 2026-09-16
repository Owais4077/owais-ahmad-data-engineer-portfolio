# Owais Ahmad - Data Engineer Portfolio Website

A modern, production-ready, dark-themed personal portfolio website for **Owais Ahmad**, Data Engineer based in Lahore, Pakistan. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

Designed specifically to showcase production-grade Data Engineering expertise across **PySpark**, **Databricks**, **Delta Lake**, **Medallion Lakehouse Architecture (Bronze/Silver/Gold)**, **FastAPI**, **PostgreSQL**, and **Power BI**.

---

## 🚀 Live Demo & Deployment

This project is optimized for 1-click deployment on **Vercel** connected to **GitHub**.

- **Target URL**: `https://owais-ahmad.vercel.app`
- **GitHub**: [github.com/Owais4077](https://github.com/Owais4077)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & Static Page Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Respects `prefers-reduced-motion`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & JetBrains Mono

---

## 📁 Project Architecture

```
owais-ahmad-portfolio/
├── public/
│   └── resume/
│       └── Owais-Ahmad-Data-Engineer-CV.pdf  # Downloadable PDF CV
├── src/
│   ├── app/
│   │   ├── layout.tsx                        # Root layout, SEO OpenGraph & JSON-LD schema
│   │   ├── page.tsx                          # Main single-page portfolio layout
│   │   ├── globals.css                       # Global styles & custom scrollbars
│   │   ├── robots.ts                         # Dynamic SEO robots.txt
│   │   ├── sitemap.ts                        # Dynamic SEO sitemap.xml
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx                  # Dynamic detail pages for all 7 projects
│   ├── components/
│   │   ├── Navbar.tsx                        # Responsive sticky navbar with active state tracking
│   │   ├── Hero.tsx                          # Hero section & interactive Data Pipeline visual
│   │   ├── About.tsx                         # Professional summary & engineering principles
│   │   ├── Architecture.tsx                  # Interactive Medallion Architecture diagram
│   │   ├── Experience.tsx                    # YBIX Data Engineer role timeline
│   │   ├── Skills.tsx                        # Categorized technology stack badges
│   │   ├── Projects.tsx                      # Projects grid & category filters
│   │   ├── ProjectCard.tsx                   # Project card component with metrics display
│   │   ├── Certifications.tsx                # Databricks & IBM certification cards
│   │   ├── Education.tsx                     # UET Mardan BS CS degree details
│   │   ├── Contact.tsx                       # Contact form & social cards
│   │   ├── Footer.tsx                        # Footer with quick links & social icons
│   │   ├── ScrollProgress.tsx                # Viewport scroll progress bar
│   │   ├── BackToTop.tsx                     # Floating back-to-top button
│   │   └── MotionWrapper.tsx                 # Framer Motion entry wrapper
│   ├── data/
│   │   ├── personal.ts                       # Personal bio, links, and contact info
│   │   ├── experience.ts                     # Work experience records
│   │   ├── skills.ts                         # Categorized skill arrays
│   │   ├── projects.ts                       # All 7 project objects & metadata
│   │   ├── certifications.ts                 # Certifications & credential IDs
│   │   └── education.ts                      # Degree details
│   └── types/
│       └── portfolio.ts                      # Shared TypeScript interface definitions
├── tailwind.config.ts                        # Custom dark theme configuration
├── tsconfig.json                             # TypeScript configuration
├── package.json                              # Package dependencies & build scripts
└── README.md                                 # Documentation
```

---

## 💻 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/Owais4077/owais-ahmad-portfolio.git
cd owais-ahmad-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production & Verify Types
```bash
npm run build
```

---

## ✏️ How to Customize & Update Data

All portfolio content is stored cleanly in modular TypeScript files under `src/data/`:

### 1. Update Personal Bio or Social Links
Edit `src/data/personal.ts`:
```typescript
export const personalData = {
  name: "OWAIS AHMAD",
  role: "Data Engineer",
  email: "owaisahmad.ds@gmail.com",
  github: "https://github.com/Owais4077",
  linkedin: "https://linkedin.com/in/owais-ahmad-79a431292",
  // ...
};
```

### 2. Replace CV / Resume PDF
Simply drop your updated CV PDF into:
`public/resume/Owais-Ahmad-Data-Engineer-CV.pdf`

### 3. Add or Modify Projects & GitHub Links
Edit `src/data/projects.ts`:
```typescript
{
  slug: "my-new-pipeline",
  title: "My New Lakehouse Project",
  subtitle: "Description",
  // ...
  githubUrl: "https://github.com/Owais4077/my-new-pipeline", // Add GitHub URL when ready
}
```

### 4. Modify Skills & Categories
Edit `src/data/skills.ts`.

### 5. Update Certifications & Credentials
Edit `src/data/certifications.ts`.

---

## ☁️ Deploying to Vercel

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Owais Ahmad Data Engineering Portfolio"
   git remote add origin https://github.com/Owais4077/owais-ahmad-portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `owais-ahmad-portfolio` repository.
4. Click **Deploy**. Vercel will automatically detect Next.js and build the production site!

---

## 📜 License

MIT License. Free to customize for personal use.

