import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import { FaChartBar, FaArrowLeft } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Tableau Visualizations | Alex Labuda',
  description: 'Explore interactive Tableau dashboards and data visualizations created by Alex Labuda, transforming complex data into actionable insights for business decision-making.',
  keywords: 'Tableau, Data Visualization, Interactive Dashboards, Business Intelligence, Data Analysis, COVID-19 Mobility, Epidemiology, Public Health',
  openGraph: {
    title: 'Interactive Tableau Visualizations & Dashboards | Alex Labuda',
    description: 'Explore interactive data visualizations created with Tableau that transform complex datasets into actionable insights through intuitive visual analytics.',
    url: 'https://www.alex-labuda.com/visualizations',
    images: [
      {
        url: 'https://www.alex-labuda.com/images/tableau_covid.png',
        width: 1200,
        height: 630,
        alt: 'Interactive Tableau Dashboards by Alex Labuda',
      },
    ],
  },
};

export default function VisualizationsPage() {
  return (
    <main className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <FaArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>
        
        <header className="text-center mb-12">
          <h1 
            id="visualizations-title" 
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Interactive Data Visualization Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my collection of interactive Tableau dashboards that transform complex data 
            into actionable insights through intuitive visualizations.
          </p>
        </header>

        <section 
          aria-labelledby="visualizations-title"
          className="space-y-16"
          itemScope 
          itemType="https://schema.org/CollectionPage"
        >
          <meta itemProp="name" content="Tableau Visualization Gallery" />
          <meta itemProp="description" content="Collection of interactive data visualizations created with Tableau by Alex Labuda" />
          
          {/* Featured Visualizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Visualization 1 */}
            <article 
              className="group"
              itemScope 
              itemType="https://schema.org/VisualArtwork"
            >
              <meta itemProp="name" content="Cholera Outbreak Dashboard" />
              <meta itemProp="creator" content="Alex Labuda" />
              <meta itemProp="keywords" content="Tableau, Data Visualization, Public Health, Epidemiology, Disease Mapping" />
              <meta itemProp="description" content="Interactive dashboard visualizing historical cholera outbreak data with geographic distribution and timeline analysis" />
              
              <a 
                href="https://public.tableau.com/app/profile/alexlabuda/viz/MappingDisease-CholeraOutbreak/WOW2021W24CholeraOutbreak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02]"
                aria-label="View Cholera Outbreak Dashboard on Tableau Public"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={getAssetPath('/images/tableau_cholera.png')}
                    alt="Interactive Cholera Outbreak Dashboard showing geographic distribution of historical disease spread with timeline analysis"
                    fill
                    className="object-cover"
                    itemProp="image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Cholera Outbreak Dashboard</h2>
                  <p className="text-gray-600 mb-4">
                    An interactive visualization mapping the historical spread of cholera, featuring geographic distribution 
                    and timeline analysis of disease outbreaks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Tableau</span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Epidemiology</span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">GIS</span>
                  </div>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center">
                    View Interactive Dashboard
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>

            {/* Visualization 2 */}
            <article 
              className="group"
              itemScope 
              itemType="https://schema.org/VisualArtwork"
            >
              <meta itemProp="name" content="COVID-19 Mobility Dashboard" />
              <meta itemProp="creator" content="Alex Labuda" />
              <meta itemProp="keywords" content="Tableau, Data Visualization, COVID-19, Mobility Analysis, Pandemic Response" />
              <meta itemProp="description" content="Interactive dashboard visualizing Google mobility data during the COVID-19 pandemic with regional comparisons and trend analysis" />
              
              <a 
                href="https://public.tableau.com/app/profile/alexlabuda/viz/GoogleCovid-19MobilityDashboard_16734798303240/GoogleCOVID-19MobilityDashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02]"
                aria-label="View COVID-19 Mobility Dashboard on Tableau Public"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={getAssetPath('/images/tableau_covid.png')}
                    alt="Interactive COVID-19 Mobility Dashboard showing population movement patterns during the pandemic with regional comparisons"
                    fill
                    className="object-cover"
                    itemProp="image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">COVID-19 Mobility Dashboard</h2>
                  <p className="text-gray-600 mb-4">
                    An interactive visualization of Google mobility data during the COVID-19 pandemic, 
                    showing how population movement changed across different regions and venues.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Tableau</span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">COVID-19</span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Mobility Data</span>
                  </div>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center">
                    View Interactive Dashboard
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>
          </div>

          {/* Upcoming Visualizations */}
          <div className="bg-gray-50 rounded-xl p-8 mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Visualizations</h2>
            <p className="text-gray-600 mb-6">
              I'm currently working on new Tableau projects in the following areas:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Marketing Mix Modeling and Attribution Analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Climate Data Analysis and Forecasting</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Customer Journey Analytics</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Interested in seeing more of my data visualization work?
            </p>
            <AnimatedButton 
              href="https://public.tableau.com/app/profile/alexlabuda/vizzes" 
              text="Visit my Tableau Public Profile"
              icon={<FaChartBar className="w-5 h-5" />}
              className="max-w-[300px] mx-auto !bg-accent-500 hover:!bg-accent-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Alex Labuda's complete Tableau Public profile"
            />
          </div>
        </section>
      </div>
    </main>
  );
} 