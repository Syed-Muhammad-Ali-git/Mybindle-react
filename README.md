# MyBindle - React Website

A modern social platform built with React, TypeScript, and Vite. MyBindle is designed to help users stay connected, build communities, and share meaningful experiences.

This project is a clone of a this Figma design , available at [https://mybindle-react-sigma.vercel.app/](https://mybindle-react-sigma.vercel.app/).

## Features

- **Hero Section**: Eye-catching landing page with mobile mockups and call-to-action button
- **Feature Section**: Showcasing key features to engage users
- **Click Section**: Interactive section for user engagement
- **Install Section**: Guides users on how to install the app
- **Reason Section**: Explains why users should choose MyBindle
- **What Our Users Say**: Testimonials and user feedback section
- **Footer**: Site footer with links and information
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS
- **Routing**: Single-page application with React Router for navigation

## Technologies Used

- **React 19**: Latest version of React for building the user interface
- **TypeScript**: Type-safe JavaScript for better development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing for SPA navigation

## Build Process

The project was built using a standard React setup with Vite as the build tool. It follows a component-based architecture, with reusable components for different sections like Hero, Features, Footer, etc. The design is responsive, optimized for both desktop and mobile devices. Assets such as images are stored in the `src/assets/images/` directory. Routing is handled via React Router for single-page application navigation.

## Development Time

This project took approximately 6 hours to complete.

## Project Structure

```
src/
├── components/
│   ├── heroSection.tsx      # Main landing section with branding and CTA
│   ├── featureSection.tsx   # Features showcase section
│   ├── clickSection.tsx     # Interactive user engagement section
│   ├── installSection.tsx   # App installation guide section
│   ├── reasonSection.tsx    # Reasons to choose MyBindle section
│   ├── whatOurUserSays.tsx  # User testimonials section
│   └── footer.tsx           # Site footer component
├── pages/
│   └── home/
│       └── page.tsx         # Home page component
├── utils/
│   └── routes.tsx           # Application routing configuration
├── assets/
│   ├── react.svg            # React logo asset
│   └── images/              # Static images (logos, mockups, cards)
├── App.tsx                  # Main application component
├── App.css                  # Application-specific styles
├── index.css                # Global styles
└── main.tsx                 # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Syed-Muhammad-Ali-git/Mybindle-react.git
   cd mybindle-website-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Repository

[GitHub Repository](https://github.com/Syed-Muhammad-Ali-git/Mybindle-react.git)
