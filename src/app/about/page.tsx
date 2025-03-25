import Link from 'next/link';
import Image from 'next/image';

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
              src="/images/profile-photo.jpg"
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
            <div className="prose prose-indigo max-w-none">
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
                href="#" 
                className="inline-block bg-indigo-600 px-6 py-2 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
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
            {/* Experience Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:text-right">
                <p className="text-sm font-semibold text-gray-600">2022 - Present</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900">Senior Data Scientist</h3>
                <p className="text-lg text-indigo-600">Zion & Zion</p>
                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-outside ml-5">
                  <li>Built and deployed an event-driven ML pipeline using Vertex AI for real-time call transcript classification</li>
                  <li>Developed customer segmentation solutions using unsupervised learning for a major sports streaming brand</li>
                  <li>Created media mix models to optimize marketing spend across digital and traditional channels</li>
                  <li>Led the adoption of MLOps practices, improving model deployment efficiency by 40%</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 - Add more items as needed */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:text-right">
                <p className="text-sm font-semibold text-gray-600">2020 - 2022</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900">Data Scientist</h3>
                <p className="text-lg text-indigo-600">Previous Company</p>
                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-outside ml-5">
                  <li>Developed predictive models for customer retention and churn prediction</li>
                  <li>Created interactive Tableau dashboards to visualize key business metrics</li>
                  <li>Collaborated with cross-functional teams to implement data-driven solutions</li>
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
              <p className="text-sm font-semibold text-gray-600">2016 - 2020</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold text-gray-900">BS, Business Analytics & Finance</h3>
              <p className="text-lg text-indigo-600">University Name</p>
              <p className="mt-2 text-gray-600">Graduated with high honors (GPA: 3.8/4.0)</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:text-right">
              <p className="text-sm font-semibold text-gray-600">Certifications</p>
            </div>
            <div className="md:col-span-3">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-baseline">
                  <span className="mr-2">•</span>
                  <span>Google Cloud Certified - Professional Data Engineer</span>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-2">•</span>
                  <span>Tableau Desktop Specialist</span>
                </li>
                <li className="flex items-baseline">
                  <span className="mr-2">•</span>
                  <span>Machine Learning Specialization - Coursera</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 