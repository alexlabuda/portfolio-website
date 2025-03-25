import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '../utils/paths';

export const metadata = {
  title: 'About Me | Alex Labuda',
  description: 'Learn about Alex Labuda - Senior Data Scientist, ML Engineer, and Tableau Developer',
};

export default function AboutPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6 inline-block rounded-full overflow-hidden border-4 border-indigo-100 w-32 h-32 relative">
            <Image 
              src={getAssetPath('/images/headshot-portfolio.jpeg')}
              alt="Alex Labuda"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Senior Data Scientist with expertise in Python, R, SQL, and Tableau, 
            specializing in machine learning, predictive modeling, and data visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professional Summary */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Snapshot</h2>
            <div className="prose prose-indigo max-w-none space-y-6">
              <p>
                I am a Senior Data Scientist with expertise in building and deploying machine learning 
                models that solve real business problems. My experience spans predictive modeling, 
                unsupervised learning, time-series forecasting, and media mix modeling, with a focus 
                on creating end-to-end ML solutions from data processing to deployment.
              </p>
              
              <p>
                I have strong technical skills in Python, R, SQL, and Tableau, with practical experience 
                implementing MLOps practices and working with cloud platforms like Google Cloud Platform 
                and Vertex AI. Throughout my career, I&apos;ve worked on projects in marketing analytics, 
                customer segmentation, and recommendation systems, delivering solutions that drive 
                business value and improve decision-making.
              </p>
              
              <p>
                I&apos;m passionate about translating complex technical concepts into actionable insights 
                and creating interactive visualizations that tell compelling data stories. I&apos;m currently 
                open to new data science opportunities where I can leverage my expertise to solve 
                challenging problems.
              </p>
            </div>
          </div>

          {/* Skills List */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Languages & Tools</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">R</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tableau</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">GCP</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Git</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">ML & Data Science</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Scikit-learn</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">PyTorch</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Pandas</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NumPy</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Vertex AI</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Specializations</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MLOps</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Time-Series</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Clustering</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Media Mix Modeling</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/documents/resume.pdf" 
                className="inline-block bg-indigo-600 px-6 py-2 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
          
          <div className="space-y-12">
            {/* Senior Data Scientist Role */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:text-right">
                <p className="text-sm font-semibold text-gray-600">Dec 2024 - Present</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900">Senior Data Scientist</h3>
                <p className="text-lg text-indigo-600">Zion & Zion</p>
                <ul className="mt-4 space-y-3 text-gray-600 list-disc list-outside ml-5">
                  <li>Architected and deployed event-driven ML pipelines using Vertex AI and LLMs, processing thousands of call transcripts daily for a national closet remodeling brand</li>
                  <li>Spearheaded development of sophisticated customer segmentation solutions using unsupervised learning for a multi-billion-dollar sports streaming platform, powering CDPs, marketing campaigns, and personalization strategies</li>
                  <li>Led technical mentorship initiatives, guiding junior team members in Python, R, Google Cloud, and MLOps best practices</li>
                  <li>Established and conducted regular coding workshops to enhance team capabilities in data analytics and foster continuous learning culture</li>
                </ul>
              </div>
            </div>

            {/* Data Scientist Role */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:text-right">
                <p className="text-sm font-semibold text-gray-600">Jan 2022 - Dec 2024</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900">Data Scientist</h3>
                <p className="text-lg text-indigo-600">Zion & Zion</p>
                <ul className="mt-4 space-y-3 text-gray-600 list-disc list-outside ml-5">
                  <li>Engineered and deployed machine learning models on Google Vertex AI, implementing robust monitoring and optimization systems for production environments</li>
                  <li>Developed real-time KPI dashboards in Tableau, providing critical insights for executive decision-making and marketing strategy</li>
                  <li>Automated weekly Tableau report distribution system, resulting in thousands of hours saved annually across client organizations</li>
                  <li>Conducted advanced analytics including time-series forecasting, Media Mix Modeling, and customer segmentation to drive data-informed marketing strategies</li>
                  <li>Published thought leadership content through whitepapers and technical blogs, establishing authority in applied data science methodologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Education & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:text-right">
              <p className="text-sm font-semibold text-gray-600">Jan 2019 - Dec 2021</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold text-gray-900">BS, Double Major in Business Analytics & Finance</h3>
              <p className="text-lg text-indigo-600">State University of New York at New Paltz</p>
              <p className="mt-2 text-gray-600">Graduated with high honors (GPA: 3.97)</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:text-right">
              <p className="text-sm font-semibold text-gray-600">Certifications</p>
            </div>
            <div className="md:col-span-3">
              <ul className="space-y-4 text-gray-600">
                {/* LLM & AI Certifications */}
                <li>
                  <h4 className="font-semibold text-gray-800">LLM & AI Development</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-baseline">
                      <span className="mr-2">•</span>
                      <span>LangChain Certified: LangGraph & LangSmith (2025)</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="mr-2">•</span>
                      <span>DeepLearning.AI TensorFlow Developer Specialization (2021)</span>
                    </li>
                  </ul>
                </li>

                {/* Data Science & ML Certifications */}
                <li>
                  <h4 className="font-semibold text-gray-800">Data Science & Machine Learning</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-baseline">
                      <span className="mr-2">•</span>
                      <span>Business Science: Data Science for Business (2023)</span>
                    </li>
                    <li className="flex items-baseline">
                      <span className="mr-2">•</span>
                      <span>Python for Data Science Automation Certification (2023)</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 