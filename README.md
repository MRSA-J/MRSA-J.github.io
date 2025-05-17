# Chen Wei's Portfolio

A modern, responsive personal portfolio website built with Next.js and TypeScript. Showcasing my work, skills, and experience as a Full Stack Engineer, Machine Learning Engineer, and Data Analyst.

## Features

- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🚀 Fast performance
- ✨ Smooth animations using Framer Motion
- 🎨 Clean and modern UI with custom CSS variables
- 💼 Interactive project cards
- 🧩 Academic background with visual timeline
- 📊 Skills visualization with progress bars
- 📝 Contact form with validation
- 🔍 SEO optimized

## Sections

- **Hero** section with introduction and call-to-action
- **About** section with personal information and career objectives
- **Experience** section showcasing professional work history
- **Academic Background** with education, research, teaching, and achievements
- **Projects** section organized by categories (Software Development, Machine Learning/Deep Learning, Data Analysis)
- **Skills** section displaying technical proficiencies with visual indicators
- **Contact** section with form and social links
- **Footer** with additional links and copyright

## Project Structure

- `src/app` - Main application routes and pages
- `src/components` - Reusable UI components
- `src/styles` - Global styles and CSS variables
- `public` - Static assets (images, icons, etc.)

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/MRSA-J/chen-portfolio.git
cd chen-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

1. Update personal information in the component files
2. Replace images in the `public` directory
3. Modify the color scheme and theme variables in `src/styles/globals.css`
4. Update project details in `src/components/Projects.tsx`
5. Add your own skills in `src/components/Skills.tsx`
6. Update work experience in `src/components/Experience.tsx`
7. Edit academic information in `src/components/Background.tsx`

## Key Technologies

- **Next.js** - React framework for production-ready applications
- **TypeScript** - Static type checking for better code quality
- **CSS Variables** - Custom theming and styling without a CSS framework
- **Framer Motion** - Advanced animations and transitions
- **React Icons** - Comprehensive icon library
- **Responsive Design** - Custom media queries for all device sizes

## Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import your project to [Vercel](https://vercel.com/)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your portfolio will be deployed with a custom domain option

## Performance

This portfolio is built with performance in mind:

- Static page generation where possible
- Optimized image loading and processing
- Code splitting and lazy loading of components
- Minimal dependencies to reduce bundle size

## Contact

Feel free to reach out through the contact form on the website or connect via the social links provided.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modern portfolio designs
- Thanks to the creators of Next.js, Tailwind CSS, and other libraries used in this project

# Deploy SSH Key Setup Instructions

To deploy your portfolio to GitHub Pages (MRSA-J.github.io) from this repository, follow these steps:

## 1. Generate a new SSH key pair (no passphrase)

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f github-deploy-key -N ""
```

This creates two files:
- `github-deploy-key` (private key)
- `github-deploy-key.pub` (public key)

## 2. Add the public key to your MRSA-J.github.io repository

1. Go to your MRSA-J.github.io repository on GitHub
2. Navigate to Settings > Deploy keys
3. Click "Add deploy key"
4. Title: "Portfolio Deployment"
5. Key: (paste the contents of `github-deploy-key.pub`)
6. Check "Allow write access"
7. Click "Add key"

## 3. Add the private key to your portfolio repository

1. Go to your portfolio repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Name: `DEPLOY_KEY`
5. Value: (paste the contents of the `github-deploy-key` file)
6. Click "Add secret"

The GitHub Actions workflow will now be able to deploy to your MRSA-J.github.io repository.
