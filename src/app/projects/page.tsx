import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import { FaChartBar } from 'react-icons/fa';

export const metadata = {
  title: 'Projects | Alex Labuda',
  description: 'Data science and machine learning projects by Alex Labuda',
};

export default function ProjectsPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my recent data science and machine learning projects, ranging from 
            event-driven ML pipelines to unsupervised learning and interactive visualizations.
          </p>
        </div>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="lg:flex lg:items-center lg:space-x-8 bg-primary-50 rounded-xl p-6">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-64 relative">
                <Image 
                  src={getAssetPath('/images/2024_09-AI-Engineering-Sentiment-Analysis.png')}
                  alt="Event-Driven ML Pipeline with Vertex AI"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900">Event-Driven ML Pipeline with Vertex AI and LLMs</h2>
              <p className="mt-3 text-gray-600">
                Designed and implemented an end-to-end event-driven machine learning pipeline using 
                Google Cloud Platform and Vertex AI. The system processes call transcripts in real-time, 
                leveraging large language models for classification and entity extraction.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Gemini</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">KubeFlow</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Pub/Sub</span>
              </div>
              <div className="mt-6">
                <Link 
                  href="/projects/event-driven-ml-pipeline" 
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Read case study →
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="lg:flex lg:items-center lg:space-x-8 lg:flex-row-reverse bg-accent-50 rounded-xl p-6 relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-64 flex items-center justify-center">
                <p className="text-gray-500">Unsupervised Learning Visualization Placeholder</p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900">Unsupervised Learning Pipeline for Sports Streaming</h2>
              <p className="mt-3 text-gray-600">
                Developed a customer segmentation pipeline for a large sports streaming brand using unsupervised 
                learning techniques. The solution identified distinct viewer personas based on viewing patterns, 
                engagement metrics, and demographic data, enabling personalized content recommendations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Clustering</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">BigQuery</span>
              </div>
              <div className="mt-6">
                <span className="text-gray-500 italic">Project details coming soon</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="lg:flex lg:items-center lg:space-x-8 bg-primary-50 rounded-xl p-6 relative">
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
              <h2 className="text-2xl font-bold text-gray-900">Media Mix Modeling for Marketing Attribution</h2>
              <p className="mt-3 text-gray-600">
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
              <div className="mt-6">
                <span className="text-gray-500 italic">Project details coming soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau Visualization Section */}
        <div className="mt-20 bg-accent-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableau Visualization Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm aspect-[16/10] relative">
              <a href="https://public.tableau.com/app/profile/alexlabuda/viz/MappingDisease-CholeraOutbreak/WOW2021W24CholeraOutbreak" target="_blank" rel="noopener noreferrer">
                <Image
                  src={getAssetPath('/images/tableau_cholera.png')}
                  alt="Cholera Outbreak Dashboard"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm aspect-[16/10] relative">
              <a href="https://public.tableau.com/app/profile/alexlabuda/viz/GoogleCovid-19MobilityDashboard_16734798303240/GoogleCOVID-19MobilityDashboard" target="_blank" rel="noopener noreferrer">
                <Image
                  src={getAssetPath('/images/tableau_covid.png')}
                  alt="COVID-19 Mobility Dashboard"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <AnimatedButton 
              href="https://public.tableau.com/app/profile/alexlabuda/vizzes" 
              text="Visit my Tableau Public profile"
              icon={<FaChartBar className="w-5 h-5" />}
              className="max-w-[280px] mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 