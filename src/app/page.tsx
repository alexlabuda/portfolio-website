import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Alex Labuda</span>
                <span className="block text-indigo-600 mt-2">Senior Data Scientist</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                Specializing in machine learning, predictive modeling, unsupervised learning, 
                time-series forecasting, media mix modeling, and MLOps.
                Delivering end-to-end ML solutions from data to deployment.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link 
                  href="/projects" 
                  className="inline-block bg-indigo-600 px-6 py-3 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="h-full w-full bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
                {/* Using Image component from Next.js for optimization */}
                <Image
                  src="/images/alex-labuda-portrait.jpg"
                  alt="Alex Labuda - Senior Data Scientist & Machine Learning Engineer"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight/Teaser Blocks */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Expertise & Experience</h2>
            <p className="mt-4 text-xl text-gray-600">
              3+ years of experience delivering scalable ML pipelines and interactive dashboards.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Expertise Card 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">Machine Learning</h3>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Building predictive models, unsupervised learning solutions, and 
                  time-series forecasting systems that deliver business value.
                </p>
              </div>
            </div>

            {/* Expertise Card 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">MLOps & Engineering</h3>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Designing and implementing end-to-end ML pipelines with continuous integration 
                  and deployment using modern cloud platforms.
                </p>
              </div>
            </div>

            {/* Expertise Card 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">Data Visualization</h3>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Transforming complex data into interactive Tableau dashboards and 
                  compelling visualizations that tell a story.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500"
            >
              See my recent projects
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
