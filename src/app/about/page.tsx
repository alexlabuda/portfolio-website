import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';

export const metadata = {
  title: 'About Me | Alex Labuda',
  description: 'Learn more about Alex Labuda, Senior Data Scientist with expertise in ML, predictive modeling, and MLOps',
};

export default function AboutPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/3">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100 mb-8">
              <Image
                src={getAssetPath('/images/alex-labuda-portrait.jpg')}
                alt="Alex Labuda"
                width={600}
                height={800}
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-primary-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Core Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Python</span>
                    <span className="text-primary-700 font-medium">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">R</span>
                    <span className="text-primary-700 font-medium">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">SQL</span>
                    <span className="text-primary-700 font-medium">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Machine Learning</span>
                    <span className="text-primary-700 font-medium">92%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Tableau</span>
                    <span className="text-primary-700 font-medium">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">MS in Data Science</h4>
                  <p className="text-gray-600">University of Technology</p>
                  <p className="text-sm text-gray-500">2016 - 2018</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">BS in Computer Science</h4>
                  <p className="text-gray-600">State University</p>
                  <p className="text-sm text-gray-500">2012 - 2016</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">About Me</h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                I'm a Senior Data Scientist with 3+ years of experience building end-to-end machine learning solutions. 
                My expertise spans predictive modeling, unsupervised learning, time-series forecasting, and MLOps 
                implementation.
              </p>
              <p>
                Currently, I develop and deploy ML solutions for enterprise clients, focusing on 
                creating event-driven pipelines that deliver real-time insights from complex data. I'm passionate 
                about translating business problems into data science solutions that drive measurable results.
              </p>
              <p>
                When I'm not building models or wrangling data, I enjoy mentoring junior data scientists 
                and sharing knowledge through internal workshops and technical blog posts.
              </p>
            </div>

            <div className="mt-10 bg-primary-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h2>
              
              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">Senior Data Scientist</h3>
                  <p className="text-primary-700 font-medium">Analytics Innovations Inc.</p>
                  <p className="text-gray-500 text-sm mb-3">January 2022 - Present</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Lead data scientist for media clients, developing ML solutions from inception to production</li>
                    <li>Created and deployed end-to-end ML pipelines for real-time sentiment analysis using GCP</li>
                    <li>Designed automated MLOps workflows that reduced model deployment time by 60%</li>
                    <li>Implemented unsupervised learning techniques to create customer segmentation models</li>
                  </ul>
                </div>

                {/* Experience 2 */}
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900">Data Scientist</h3>
                  <p className="text-accent-700 font-medium">DataTech Solutions</p>
                  <p className="text-gray-500 text-sm mb-3">June 2020 - December 2021</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Developed time-series forecasting models for retail sales prediction</li>
                    <li>Created interactive Tableau dashboards for stakeholder reporting</li>
                    <li>Implemented A/B testing framework that improved conversion rates by 15%</li>
                    <li>Collaborated with product teams to integrate ML models into customer-facing applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-accent-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-primary-100">
                  <h3 className="font-bold text-gray-900">Google Cloud Professional Data Engineer</h3>
                  <p className="text-gray-600 text-sm">Google Cloud</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-primary-100">
                  <h3 className="font-bold text-gray-900">Tableau Desktop Specialist</h3>
                  <p className="text-gray-600 text-sm">Tableau</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-accent-100">
                  <h3 className="font-bold text-gray-900">Machine Learning with TensorFlow</h3>
                  <p className="text-gray-600 text-sm">Coursera</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-accent-100">
                  <h3 className="font-bold text-gray-900">Advanced SQL for Data Analysis</h3>
                  <p className="text-gray-600 text-sm">Datacamp</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 