# Aastha Grover - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases professional projects, skills, and experience as a Software Development Engineer.

## Deployment

### Vercel Deployment Link 
[https://portfolio-website-jet-ten-94.vercel.app/](https://portfolio-website-njkoo8g2u-aastha29.vercel.app/)

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth scrolling and animations
- **Navigation Bar**: Fixed navigation with smooth scroll to sections
- **Hero Section**: Eye-catching landing section with call-to-action buttons
- **About Section**: Professional background with skills and expertise categories
- **Projects Section**: Detailed project cards with descriptions, highlights, and technologies
- **Contact Form**: Functional contact form with form validation
- **Footer**: Social links, contact information, and quick navigation
- **TypeScript Support**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS for rapid development and customization

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Inter, Lora)

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation component with mobile menu
│   ├── Hero.tsx          # Hero section with introduction
│   ├── About.tsx         # About section with skills and expertise
│   ├── Projects.tsx      # Projects section with detailed cards
│   ├── Contact.tsx       # Contact form section
│   └── Footer.tsx        # Footer with social links
├── App.tsx               # Main application component
├── main.tsx              # React entry point
└── index.css             # Global styles with Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd "portfolio website"
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will start at `http://localhost:5173/`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Update Personal Information

Edit the following files to customize the portfolio:

- **Navbar**: [src/components/Navbar.tsx](src/components/Navbar.tsx) - Update navigation links
- **About Section**: [src/components/About.tsx](src/components/About.tsx) - Update skills and expertise
- **Experience Section**: [src/components/Experience.tsx](src/components/Experience.tsx) - Modify work experience
- **Projects**: [src/components/Projects.tsx](src/components/Projects.tsx) - Add or modify projects
- **Contact**: [src/components/Contact.tsx](src/components/Contact.tsx) - Update contact information
- **Footer**: [src/components/Footer.tsx](src/components/Footer.tsx) - Add social media links

### Styling

Customize colors and styles in:
- [tailwind.config.js](tailwind.config.js) - Tailwind configuration with custom colors
- [src/index.css](src/index.css) - Global CSS classes

### Adding Work Experience

To add new work experience, update the `experiences` array in [src/components/Experience.tsx](src/components/Experience.tsx):

```typescript
{
  id: 4,
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'Timeline',
  duration: 'Duration',
  description: 'Description of your role and responsibilities...',
  achievements: ['Achievement 1', 'Achievement 2'],
  tech: ['Tech1', 'Tech2'],
}
```

### Adding Projects

To add new personal projects, update the `projects` array in [src/components/Projects.tsx](src/components/Projects.tsx):

```typescript
{
  id: 5,
  title: 'Project Title',
  category: 'Category',
  period: 'Duration',
  description: 'Project description...',
  highlights: ['Feature 1', 'Feature 2'],
  tech: ['Tech1', 'Tech2'],
  icon: '🎯',
}
```

## Sections

### Hero Section
- Main headline and introduction
- Call-to-action buttons linking to projects and contact sections

### About Section
- Professional background information
- Technical expertise categorized by specialization (Frontend, Backend, Databases, DevOps)
- All skills and technologies showcase

### Experience Section
- Professional work history with timeline layout
- Alternating card layout for better visual hierarchy
- Features for each role:
  - Job title and company
  - Timeline and duration badges
  - Comprehensive description
  - Key achievements with icons
  - Technology stack
- Desktop: Vertical timeline with alternating left-right layout
- Mobile: Single column layout with left border accent

### Projects Section
- Personal and side projects in a grid layout
- 2-column grid on desktop, 1 column on mobile
- Features for each project:
  - Project icon (emoji) and category badge
  - Project title
  - Duration indicator
  - Comprehensive description
  - Key features with diamond bullets
  - Technology stack
  - Hover animations and shadow effects

### Contact Section
- Contact form with fields for:
  - First and last name
  - Email address
  - Message
- Direct contact information (email and phone)
- Form submission feedback

### Footer
- Social media links
- Quick navigation
- Copyright information
- Privacy and terms links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The portfolio is fully responsive and optimized for all devices:

- **Desktop (1024px+)**: 
  - 2-column project grid
  - Horizontal timeline with alternating experience cards
  - Full navigation menu

- **Tablet (768px - 1023px)**:
  - 2-column layouts where applicable
  - Optimized spacing and typography

- **Mobile (< 768px)**:
  - Single column layouts for all sections
  - Full-width cards and forms
  - Mobile hamburger navigation menu
  - Touch-friendly buttons and interactive elements
  - Optimized font sizes for readability

## Performance

The website is optimized for performance with:
- Code splitting via Vite
- CSS minimization
- Font optimization via Google Fonts
- Responsive images
- Smooth scroll behavior




### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to your GitHub Pages repository

## License

© 2026 Aastha Grover. All rights reserved.

## Contact

- **Email**: aasgrover@gmail.com
- **Phone**: +91 9464143561
- **Location**: New Delhi, INDIA
