# 🚀 Data Analytics Landing Page - Next.js

A modern, responsive landing page for a Data Analytics bootcamp built with Next.js, TypeScript, and Tailwind CSS. This project showcases a complete conversion from HTML to a component-based Next.js application.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI Components**: Clean, reusable components with hover effects and animations
- **Interactive Elements**: Functional modals, forms, and navigation
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component Architecture**: Well-organized, modular component structure
- **Performance Optimized**: Next.js optimizations including Image component and font optimization

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Main page component
├── components/
│   ├── sections/          # Page section components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CourseOverview.tsx
│   │   ├── CurriculumSection.tsx
│   │   ├── TargetAudienceSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       └── ContactForm.tsx
├── data/
│   └── courseData.ts     # Static data and constants
├── hooks/
│   └── useModal.ts       # Custom React hooks
└── lib/
    └── utils.ts          # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory**
   ```bash
   cd marketing-ads-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 🎯 Key Features Implemented

### ✅ Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions

### ✅ Interactive Elements
- Expandable curriculum modules
- Functional contact forms
- Modal dialogs for demos and counseling
- Smooth scroll navigation

### ✅ Performance Optimizations
- Next.js Image component for optimized images
- Font optimization with Google Fonts
- CSS animations with GPU acceleration
- Code splitting and lazy loading

## 🛠️ Technologies Used

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

---

Built with ❤️ using Next.js and TypeScript
