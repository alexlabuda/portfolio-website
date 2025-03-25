# Alex Labuda - Data Science Portfolio

This is my professional portfolio website showcasing my work as a Senior Data Scientist specializing in machine learning, predictive modeling, unsupervised learning, time-series forecasting, media mix modeling, and MLOps.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: GitHub Pages via GitHub Actions

## Features

- Responsive design optimized for all devices
- Modern, minimalistic UI focused on content
- Optimized for SEO
- Static site generation for fast loading and easy hosting
- Continuous deployment via GitHub Actions

## Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
# Generate a production build
npm run build
```

This will create an optimized production build in the `out` directory, ready for deployment.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions using the workflow defined in `.github/workflows/deploy.yml`.

To manually deploy:

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
# (requires GitHub Pages configuration)
git push origin main
```

## Project Structure

- `/src/app`: Core application pages and layouts
- `/src/components`: Reusable UI components
- `/public`: Static assets like images
- `/src/styles`: Global styles and Tailwind configuration

## Customization

To customize the site:

1. Update content in the appropriate page files
2. Add or modify components as needed
3. Update metadata in `layout.tsx` files
4. Add your own images in the `/public/images` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please reach out to me at:

- Email: alexlabuda@gmail.com
- LinkedIn: [linkedin.com/in/alex-labuda](https://www.linkedin.com/in/alex-labuda)
