import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';

export const metadata = {
  title: 'Blog | Alex Labuda',
  description: 'Data science articles, tutorials, and insights by Alex Labuda',
};

export default function BlogPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on data science, machine learning, and advanced analytics.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-primary-50 rounded-lg overflow-hidden shadow-lg relative transform transition duration-300 hover:scale-[1.02]">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <div className="h-64 md:h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary-600">
                    <p>ML Pipeline Architecture</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold">Featured</div>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Building Event-Driven ML Pipelines with Vertex AI and LLMs
                </h2>
                <p className="mt-4 text-gray-600">
                  A deep dive into architecting real-time machine learning pipelines that process
                  and analyze unstructured data using Google Cloud Platform and large language models.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Image 
                      className="h-10 w-10 rounded-full"
                      src={getAssetPath('/images/headshot-portfolio.jpeg')}
                      alt="Alex Labuda"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Alex Labuda</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2023-03-16">March 16, 2023</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>12 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <p>Customer Segmentation Diagram</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  Machine Learning
                </span>
                <span className="text-xs text-gray-500">Feb 28, 2023</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Effective Customer Segmentation with Unsupervised Learning
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                How to build robust customer segments using clustering techniques that lead to actionable
                marketing strategies and personalized user experiences.
              </p>
              <span className="text-gray-500 italic">Article coming soon</span>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <p>MLOps Workflow Diagram</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                  MLOps
                </span>
                <span className="text-xs text-gray-500">Jan 15, 2023</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                MLOps Best Practices for Production-Ready Models
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                A comprehensive guide to deploying robust machine learning models in production
                environments, covering version control, CI/CD pipelines, and monitoring.
              </p>
              <span className="text-gray-500 italic">Article coming soon</span>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <p>Time Series Chart</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  Forecasting
                </span>
                <span className="text-xs text-gray-500">Dec 10, 2022</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Advanced Time Series Forecasting for Retail Demand
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Examining state-of-the-art approaches to retail demand forecasting using time series 
                models, incorporating seasonality, promotions, and external factors.
              </p>
              <span className="text-gray-500 italic">Article coming soon</span>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <p>Tableau Dashboard</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                  Data Visualization
                </span>
                <span className="text-xs text-gray-500">Nov 5, 2022</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                10 Tableau Tips to Create More Effective Dashboards
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Practical advice for creating impactful Tableau dashboards that communicate insights
                effectively and facilitate data-driven decision making.
              </p>
              <span className="text-gray-500 italic">Article coming soon</span>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <p>Marketing Attribution Chart</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  Marketing Analytics
                </span>
                <span className="text-xs text-gray-500">Oct 20, 2022</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Media Mix Modeling in the Age of Privacy
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                How media mix modeling provides a privacy-compliant alternative to cookie-based
                attribution in an increasingly restricted digital advertising landscape.
              </p>
              <span className="text-gray-500 italic">Article coming soon</span>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] relative">
            {/* "Coming Soon" badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <p>Data Pipeline Diagram</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                  Data Engineering
                </span>
                <span className="text-xs text-gray-500">Sep 15, 2022</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Building Robust Data Pipelines with Python
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                A guide to creating reliable, scalable data pipelines using Python and modern
                tools like Apache Airflow, Luigi, and Prefect.
              </p>
              <span className="text-gray-500 italic">Article coming soon</span>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary-50 text-sm font-medium text-primary-700 hover:bg-primary-100">
              2
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center relative transform transition duration-300 hover:scale-[1.02] hover:shadow-lg">
          {/* "Coming Soon" badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Coming Soon</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to my newsletter</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Get the latest data science articles, tutorials, and insights delivered directly to your inbox.
            No spam, unsubscribe anytime.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/80"
                disabled
                aria-disabled="true"
              />
              <button 
                type="button" 
                className="bg-white text-primary-600 font-medium px-6 py-2 rounded-md opacity-75 cursor-not-allowed"
                disabled
                aria-disabled="true"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">Newsletter signup will be available soon. Check back later!</p>
          </div>
        </div>
      </div>
    </div>
  );
} 