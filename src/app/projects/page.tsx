import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import { FaChartBar } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Machine Learning Projects & Tableau Visualizations | Alex Labuda',
  description: 'Explore data science projects and interactive Tableau dashboards by Alex Labuda, featuring ML pipelines, customer segmentation, and data visualizations for business insights.',
  keywords: 'Machine Learning Projects, Data Science Portfolio, Tableau Dashboards, Data Visualization, Interactive Visualizations, MLOps, Vertex AI, Customer Segmentation',
  openGraph: {
    title: 'Machine Learning Projects & Tableau Visualizations | Alex Labuda',
    description: 'Explore data science projects and interactive Tableau dashboards, including event-driven ML pipelines, unsupervised learning, and data visualization solutions.',
    url: 'https://www.alex-labuda.com/projects',
    images: [
      {
        url: 'https://www.alex-labuda.com/images/tableau_covid.png',
        width: 1200,
        height: 630,
        alt: 'Data Science Projects and Tableau Visualizations by Alex Labuda',
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 id="projects-title" className="text-3xl font-bold text-gray-900 sm:text-4xl">Machine Learning & Data Science Projects</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my recent data science and machine learning projects, ranging from 
            event-driven ML pipelines to unsupervised learning and interactive visualizations.
          </p>
        </header>

        <section 
          aria-labelledby="projects-title"
          className="space-y-16"
          itemScope 
          itemType="https://schema.org/CollectionPage"
        >
          <meta itemProp="name" content="Data Science Projects Portfolio" />
          <meta itemProp="description" content="Collection of machine learning, MLOps, and data science projects by Alex Labuda" />
          
          {/* Project 1 */}
          <Link
            href="/projects/event-driven-ml-pipeline"
            className="group block lg:flex lg:items-center lg:space-x-8 bg-primary-50 rounded-xl p-6 transform transition duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            itemScope 
            itemType="https://schema.org/SoftwareApplication"
          >
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-64 relative">
                <Image 
                  src={getAssetPath('/images/2024_09-AI-Engineering-Sentiment-Analysis.png')}
                  alt="Event-Driven ML Pipeline with Vertex AI and Gemini for Call Transcript Classification"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  itemProp="image"
                />
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900" itemProp="name">Event-Driven Call Transcript Classification Pipeline with Vertex AI and Gemini</h2>
              <p className="mt-3 text-gray-600" itemProp="description">
              Developed a real-time machine learning pipeline for processing and classifying 
              call center transcripts for CDP activation. This solution leverages 
              GCP's event architecture for seamless processing, Vertex AI pipelines, and Gemini LLMs for classification.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">LLMs</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Gemini</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">KubeFlow</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
              </div>
              <meta itemProp="applicationCategory" content="Machine Learning" />
              <meta itemProp="operatingSystem" content="Cloud Platform" />
              <div className="mt-6">
                <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center">
                  Read case study
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/unsupervised-learning-sports-streaming"
            className="group block lg:flex lg:items-center lg:space-x-8 lg:flex-row-reverse bg-accent-50 rounded-xl p-6 relative transform transition duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            itemScope 
            itemType="https://schema.org/SoftwareApplication"
          >
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-64 relative">
                <Image 
                  src={getAssetPath('/images/customer-segmentation.png')}
                  alt="Customer Segmentation Pipeline with K-Means for Sports Streaming Platform"
                  fill
                  style={{ 
                    objectFit: "contain" 
                  }}
                  priority
                  itemProp="image"
                />
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900" itemProp="name">Customer Segmentation Pipeline and Advanced Feature Engineering for a Sports Streaming Service</h2>
              <p className="mt-3 text-gray-600" itemProp="description">
                Developed a customer segmentation pipeline for a large sports streaming brand using K-means clustering and sophisticated feature engineering. The solution identified distinct viewer personas based on viewing patterns, 
                engagement metrics, and content preferences, enabling targeted marketing campaigns.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">K-Means</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
              </div>
              <meta itemProp="applicationCategory" content="Data Science" />
              <meta itemProp="operatingSystem" content="Cloud Platform" />
              <div className="mt-6">
                <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center">
                  Read case study
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Project 3 */}
          <article 
            className="lg:flex lg:items-center lg:space-x-8 bg-primary-50 rounded-xl p-6 relative transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
            itemScope 
            itemType="https://schema.org/CreativeWork"  
          >
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-64 flex items-center justify-center">
                <p className="text-gray-500">Tableau Dashboard Placeholder</p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900" itemProp="name">Media Mix Modeling for Marketing Attribution</h2>
              <p className="mt-3 text-gray-600" itemProp="description">
                Created a media mix model to analyze the effectiveness of marketing channels and optimize 
                advertising spend. The solution integrated time-series forecasting and causal inference 
                techniques to measure the ROI of digital and traditional marketing campaigns.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">R</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Time Series</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Tableau</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Marketing Analytics</span>
              </div>
              <meta itemProp="keywords" content="Media Mix Modeling, Marketing Attribution, Time Series, R, Tableau" />
              <div className="mt-6">
                <span className="text-gray-500 italic">Project details coming soon</span>
              </div>
            </div>
          </article>
        </section>

        {/* Tableau Visualization Section */}
        <section 
          className="mt-20 bg-accent-50 rounded-xl p-8"
          aria-labelledby="tableau-gallery-title"
          id="tableau-visualizations"
          itemScope 
          itemType="https://schema.org/CollectionPage"
        >
          <h2 id="tableau-gallery-title" className="text-2xl font-bold text-gray-900 mb-6" itemProp="name">Interactive Data Visualization Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-8" itemProp="description">
            Explore my interactive Tableau dashboards that transform complex data into actionable insights through intuitive visualizations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://public.tableau.com/app/profile/alexlabuda/viz/MappingDisease-CholeraOutbreak/WOW2021W24CholeraOutbreak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg aspect-[16/10] relative transform transition duration-300 hover:scale-[1.02]"
              itemScope 
              itemType="https://schema.org/VisualArtwork"
              aria-label="View Cholera Outbreak Dashboard on Tableau Public"
            >
              <meta itemProp="name" content="Cholera Outbreak Dashboard" />
              <meta itemProp="creator" content="Alex Labuda" />
              <meta itemProp="keywords" content="Tableau, Data Visualization, Public Health, Epidemiology, Disease Mapping" />
              <meta itemProp="description" content="Interactive dashboard visualizing historical cholera outbreak data with geographic distribution and timeline analysis" />
              <Image
                src={getAssetPath('/images/tableau_cholera.png')}
                alt="Interactive Cholera Outbreak Dashboard showing geographic distribution of historical disease spread with timeline analysis"
                fill
                className="object-contain"
                itemProp="image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold">Cholera Outbreak Dashboard</h3>
                <p className="text-white/90 text-sm">Historical disease mapping analysis</p>
              </div>
            </a>
            <a 
              href="https://public.tableau.com/app/profile/alexlabuda/viz/GoogleCovid-19MobilityDashboard_16734798303240/GoogleCOVID-19MobilityDashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg aspect-[16/10] relative transform transition duration-300 hover:scale-[1.02]"
              itemScope 
              itemType="https://schema.org/VisualArtwork"
              aria-label="View COVID-19 Mobility Dashboard on Tableau Public"
            >
              <meta itemProp="name" content="COVID-19 Mobility Dashboard" />
              <meta itemProp="creator" content="Alex Labuda" />
              <meta itemProp="keywords" content="Tableau, Data Visualization, COVID-19, Mobility Analysis, Pandemic Response" />
              <meta itemProp="description" content="Interactive dashboard visualizing Google mobility data during the COVID-19 pandemic with regional comparisons and trend analysis" />
              <Image
                src={getAssetPath('/images/tableau_covid.png')}
                alt="Interactive COVID-19 Mobility Dashboard showing population movement patterns during the pandemic with regional comparisons"
                fill
                className="object-contain"
                itemProp="image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold">COVID-19 Mobility Dashboard</h3>
                <p className="text-white/90 text-sm">Population movement analysis during pandemic</p>
              </div>
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Discover more of my data visualization work on Tableau Public</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedButton 
                href="/visualizations" 
                text="View Full Visualization Gallery"
                icon={<FaChartBar className="w-5 h-5" />}
                className="max-w-[300px] mx-auto"
              />
              <AnimatedButton 
                href="https://public.tableau.com/app/profile/alexlabuda/vizzes" 
                text="Visit Tableau Public Profile"
                icon={<FaChartBar className="w-5 h-5" />}
                className="max-w-[300px] mx-auto !bg-accent-600 !text-white hover:!bg-accent-700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Alex Labuda's Tableau Public profile to see all data visualizations"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 