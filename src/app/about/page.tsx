import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';
import { FaPython, FaDatabase, FaChartBar, FaGraduationCap, FaUniversity, FaCalendarAlt, FaMedal, FaBriefcase, FaCode, FaChartLine, FaTrophy, FaCertificate, FaCloudversify, FaTable, FaBrain, FaCheck, FaEnvelope } from 'react-icons/fa';
import { SiR, SiTensorflow, SiGooglecloud, SiTableau, SiCoursera, SiDatacamp } from 'react-icons/si';
import { AnimatedButton } from '@/app/components/AnimatedButton';

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

            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                  <FaChartBar className="text-primary-600" />
                </span>
                Core Skills
              </h3>
              <div className="space-y-5">
                <div className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center">
                      <FaPython className="text-primary-700 mr-2 text-xl" />
                      <span className="text-gray-800 font-medium">Python</span>
                    </div>
                    <span className="text-primary-700 font-medium bg-primary-50 px-2 py-1 rounded-md text-sm">95%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-800" 
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center">
                      <SiR className="text-primary-700 mr-2 text-xl" />
                      <span className="text-gray-800 font-medium">R</span>
                    </div>
                    <span className="text-primary-700 font-medium bg-primary-50 px-2 py-1 rounded-md text-sm">85%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-800" 
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center">
                      <FaDatabase className="text-primary-700 mr-2 text-xl" />
                      <span className="text-gray-800 font-medium">SQL</span>
                    </div>
                    <span className="text-primary-700 font-medium bg-primary-50 px-2 py-1 rounded-md text-sm">90%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-800" 
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center">
                      <SiTensorflow className="text-primary-700 mr-2 text-xl" />
                      <span className="text-gray-800 font-medium">Machine Learning</span>
                    </div>
                    <span className="text-primary-700 font-medium bg-primary-50 px-2 py-1 rounded-md text-sm">92%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-800" 
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center">
                      <FaChartBar className="text-primary-700 mr-2 text-xl" />
                      <span className="text-gray-800 font-medium">Tableau</span>
                    </div>
                    <span className="text-primary-700 font-medium bg-primary-50 px-2 py-1 rounded-md text-sm">80%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-800" 
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-accent-100 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center mr-2">
                  <FaGraduationCap className="text-accent-700" />
                </span>
                Education
              </h3>
              <div className="space-y-6">
                <div className="group bg-white p-4 rounded-lg border border-accent-100 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-block w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center">
                        <FaUniversity className="text-accent-600" />
                      </span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">Bachelor of Science - BS</h4>
                      <p className="text-primary-700 font-medium">Double Major: Data Analytics & Finance</p>
                      <div className="mt-2 space-y-1.5">
                        <p className="text-gray-700 flex items-center">
                          <span className="font-medium">SUNY New Paltz</span>
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <FaCalendarAlt className="text-accent-500 mr-1.5" />
                          <span>2019 - 2021</span>
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <FaMedal className="text-accent-500 mr-1.5" />
                          <span>Grade: 3.97</span>
                        </p>
                        <p className="text-gray-600 text-sm mt-1 pl-0.5">
                          Activities: Analytics teaching assistant and tutor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-4 rounded-lg border border-accent-100 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-block w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center">
                        <FaUniversity className="text-accent-600" />
                      </span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">Associate of Arts and Sciences - AAS</h4>
                      <p className="text-primary-700 font-medium">Liberal Arts and Sciences</p>
                      <div className="mt-2 space-y-1.5">
                        <p className="text-gray-700 flex items-center">
                          <span className="font-medium">SUNY Orange</span>
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <FaCalendarAlt className="text-accent-500 mr-1.5" />
                          <span>2010 - 2012</span>
                        </p>
                        <p className="text-gray-600 text-sm mt-1 pl-0.5">
                          Activities: 2011 Political Club Treasurer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100 mb-8 transform transition duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                  <FaCheck className="text-primary-600 text-xl" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">Download My Resume</h3>
              </div>
              
              <div className="mt-4 mb-3">
                <AnimatedButton 
                  href={getAssetPath('/documents/resume.pdf')}
                  text="Download PDF"
                  download="Alex_Labuda_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                />
              </div>
              
              <div className="flex items-center justify-center mt-3 mb-1">
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse mx-0.5"></span>
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-300 mx-0.5"></span>
                <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse delay-600 mx-0.5"></span>
              </div>
              
              <p className="text-gray-600 text-center">
                Get a copy of my full resume with detailed experience and qualifications.
              </p>
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
                and sharing knowledge through internal workshops and technical blog posts. Outside of work, 
                you'll find me on the golf course or exploring trails in the Shawangunk Mountain ridge on my weekend runs.
              </p>
            </div>

            <div className="mt-10 bg-primary-50 p-6 rounded-lg shadow-md border border-primary-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <FaBriefcase className="text-primary-600 text-xl" />
                </span>
                Work Experience
              </h2>
              
              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="group bg-white p-5 rounded-lg border-l-4 border-primary-500 shadow-lg transform transition duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 hidden sm:block">
                      <span className="inline-block w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                        <FaChartLine className="text-primary-600 text-xl" />
                      </span>
                    </div>
                    <div className="sm:ml-4 flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Senior Data Scientist</h3>
                        <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium flex items-center mt-1 sm:mt-0">
                          <FaCalendarAlt className="mr-1.5" />
                          Dec 2024 - Apr 2025
                        </span>
                      </div>
                      <p className="text-primary-700 font-medium mb-3 flex items-center">
                        <FaTrophy className="text-primary-500 mr-2" />
                        Zion & Zion
                      </p>
                      <ul className="text-gray-600 space-y-3">
                        <li className="flex">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span>Created event-driven pipelines, classifying thousands of call transcripts each day for a national closet remodeling brand using Vertex AI and LLMs.</span>
                        </li>
                        <li className="flex">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span>Developed an advanced unsupervised learning pipeline for a multi-billion-dollar sports streaming brand to power CDPs, marketing campaigns, and personalization strategies, from feature engineering to continuous training and deployment.</span>
                        </li>
                        <li className="flex">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span>Mentored junior team members in Python, R, Google Cloud, machine learning operations and cloud-based deployment strategies.</span>
                        </li>
                        <li className="flex">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span>Led internal coding workshops to build team data analytics capabilities and foster a culture of learning.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="group bg-white p-5 rounded-lg border-l-4 border-accent-500 shadow-lg transform transition duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 hidden sm:block">
                      <span className="inline-block w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center">
                        <FaCode className="text-accent-600 text-xl" />
                      </span>
                    </div>
                    <div className="sm:ml-4 flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Data Scientist</h3>
                        <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium flex items-center mt-1 sm:mt-0">
                          <FaCalendarAlt className="mr-1.5" />
                          Jan 2022 - Dec 2024
                        </span>
                      </div>
                      <p className="text-accent-700 font-medium mb-3 flex items-center">
                        <FaTrophy className="text-accent-500 mr-2" />
                        Zion & Zion
                      </p>
                      <ul className="text-gray-600 space-y-3">
                        <li className="flex">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <span>Built and deployed predictive models on Vertex AI with automated monitoring, training and deployment.</span>
                        </li>
                        <li className="flex">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <span>Built and maintained interactive Tableau dashboards, surfacing real-time KPIs for stakeholders.</span>
                        </li>
                        <li className="flex">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <span>Built multi-touch attribution models using GA4 data to analyze marketing impact across customer journeys.</span>
                        </li>
                        <li className="flex">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <span>Automated weekly email delivery of hundreds of Tableau reports, saving thousands of hours annually.</span>
                        </li>
                        <li className="flex">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <span>Executed time-series forecasting, Media Mix Modeling, customer segmentation, and ad-hoc statistical analyses to support marketing and strategic planning.</span>
                        </li>
                        <li className="flex">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <span>Authored internal and external whitepapers and blogs to share methodologies and thought leadership in applied data science.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-accent-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                  <FaCertificate className="text-accent-600 text-xl" />
                </span>
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-white p-5 rounded-lg border border-primary-100 shadow-lg transform transition duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-block w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                        <FaBrain className="text-primary-600 text-xl" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Introduction to LangGraph</h3>
                      <div className="flex items-center mt-1">
                        <FaCheck className="text-green-500 mr-1.5" />
                        <p className="text-gray-600 text-sm">LangChain</p>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">Skills: Large Language Models (LLM) · LLMOps</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-5 rounded-lg border border-primary-100 shadow-lg transform transition duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-block w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                        <FaCloudversify className="text-primary-600 text-xl" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Introduction to LangSmith</h3>
                      <div className="flex items-center mt-1">
                        <FaCheck className="text-green-500 mr-1.5" />
                        <p className="text-gray-600 text-sm">LangChain</p>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">Skills: Large Language Model Operations (LLMOps)</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-5 rounded-lg border border-accent-100 shadow-lg transform transition duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-block w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center">
                        <SiTensorflow className="text-accent-600 text-xl" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-accent-700 transition-colors">DeepLearning.AI TensorFlow Developer</h3>
                      <div className="flex items-center mt-1">
                        <FaCheck className="text-green-500 mr-1.5" />
                        <p className="text-gray-600 text-sm">Coursera</p>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">Skills: CNN · NLP · Time Series Forecasting</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-5 rounded-lg border border-accent-100 shadow-lg transform transition duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-block w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center">
                        <FaChartLine className="text-accent-600 text-xl" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-accent-700 transition-colors">Data Science for Business</h3>
                      <div className="flex items-center mt-1">
                        <FaCheck className="text-green-500 mr-1.5" />
                        <p className="text-gray-600 text-sm">Business Science</p>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">Skills: Machine Learning · Cluster Analysis · R</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <AnimatedButton 
                href="/contact"
                text="Get in touch"
                icon={<FaEnvelope className="w-5 h-5" />}
                className="max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 