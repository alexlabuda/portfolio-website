import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';
import HexagonParticlesBackground from '../../components/HexagonParticlesBackground';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import { FaEnvelope } from 'react-icons/fa';
import TableOfContents from '@/app/components/TableOfContents';
import ScrollToTop from '@/app/components/ScrollToTop';
import GradientReadingProgressBar from '@/app/components/GradientReadingProgressBar';
import MLPipelineFlowWrapper from '@/app/components/MLPipelineFlowWrapper';

export const metadata = {
  title: 'Customer Segmentation with K-Means | Alex Labuda',
  description: 'Case study on building customer segmentation with K-Means clustering and feature engineering for a sports streaming platform.',
};

export default function UnsupervisedLearningPage() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 mt-1">
      {/* Reading Progress Bar */}
      <GradientReadingProgressBar 
        height={2} 
        gradientColors={['#4F46E5', '#8B5CF6', '#EC4899']} 
        animate={true}
        zIndex={100}
      />
      
      {/* Table of Contents */}
      <TableOfContents />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Top section with Hexagon particles - only for header through Business Challenge */}
      <div className="relative w-full mb-16">
        <HexagonParticlesBackground />
        
        {/* Semi-transparent Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900/90 via-accent-800/80 to-gray-900/70 z-[1]"></div>

        {/* Content container */}
        <div className="relative py-12 z-[5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
            {/* Header Section */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <Link href="/projects" className="text-primary-600 hover:text-primary-700 mb-4 flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-6">Customer Segmentation with K-Means and Feature Engineering for a Streaming Platform</h1>
              <p className="mt-4 text-lg text-gray-700">
                Leveraged K-Means clustering and advanced feature engineering on subscriber behavior data to identify high-value customer segments and power targeted retention strategies.
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">BigQuery</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">KMeans</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Pandas</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Customer Segmentation</span>
              </div>
              
              {/* Project header image */}
              <div className="mt-6 mb-2">
                <div className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-slate-50 to-gray-100">
                  <div className="relative aspect-[21/9] w-full">
                    <Image 
                      src={getAssetPath('/images/customer-segmentation.png')}
                      alt="Customer Segmentation for Sports Streaming"
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2 id="project-overview">Project Overview</h2>
                <p>
                  This project involved developing a robust customer segmentation strategy for a major regional sports 
                  streaming network. Using unsupervised learning techniques, specifically K-Means clustering with 
                  advanced feature engineering, the solution identified distinct viewer segments based on their 
                  viewing behavior patterns.
                </p>
                <p>
                  The segmentation was designed to support personalized content recommendations, targeted retention 
                  campaigns, and churn mitigation strategies. By understanding the different types of subscribers 
                  and their unique viewing habits, the streaming platform was able to deliver more relevant experiences 
                  to each customer segment.
                </p>
              </div>
            </div>

            {/* Role & Impact */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2 id="role-impact">Role & Impact</h2>
                <p>
                  As the lead data scientist on a cross-functional team, I was responsible for all aspects of the 
                  machine learning solution. This included developing the feature engineering approach, designing and 
                  implementing the clustering models, and orchestrating the end-to-end pipeline deployment.
                </p>
                <p>
                  The solution resulted in actionable, interpretable clusters that were immediately put to use by the 
                  marketing team for campaign targeting. The identification of "super-users" was particularly valuable 
                  for proactive retention efforts and premium feature upselling.
                </p>
              </div>
            </div>

            {/* Business Challenge */}
            <div className="mb-16 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
                <h2 id="business-challenge">Business Challenge</h2>
                <p>
                  The streaming platform faced several challenges in effectively targeting and retaining their subscribers:
                </p>
                <ul>
                  <li>Fragmented subscriber behavior data across multiple channels and platforms</li>
                  <li>No existing segmentation framework for lifecycle marketing and targeting</li>
                  <li>Rising customer acquisition costs making retention increasingly important</li>
                  <li>Need to scale personalized outreach without increasing campaign management overhead</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of content without background image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
        {/* Solution Architecture */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="solution-architecture">Solution Architecture</h2>
            <p className="mb-8">
              We designed a scalable architecture on Google Cloud Platform that processed subscriber data on a weekly basis:
            </p>

            {/* Architecture Diagram */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-full lg:min-w-0 py-4">
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                  {/* Use the MLPipelineFlowWrapper component */}
                  <MLPipelineFlowWrapper />
                  
                  {/* Enhanced Legend with Component Groups */}
                  <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-gray-700 font-medium text-center mb-4">Pipeline Components</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 bg-[#EBF8FF] border border-[#BEE3F8] rounded-sm mr-2"></div>
                          <span className="text-xs text-gray-700 font-medium">Processing Steps</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 pl-6">
                          <li>Data Extraction</li>
                          <li>Feature Engineering</li>
                          <li>Data Cleaning</li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 rounded-full bg-[#4299E1] mr-2"></div>
                          <span className="text-xs text-gray-700 font-medium">Step Sequence</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 pl-6">
                          <li>Ordered Pipeline Flow</li>
                          <li>Component Dependencies</li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 rounded-sm bg-[#805AD5] mr-2"></div>
                          <span className="text-xs text-gray-700 font-medium">Connections</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 pl-6">
                          <li>Data Transfer</li>
                          <li>Artifact Passing</li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 rounded-sm bg-[#F6AD55] mr-2"></div>
                          <span className="text-xs text-gray-700 font-medium">Outputs</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1 pl-6">
                          <li>Key Results</li>
                          <li>Final Segments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flow sequence description */}
                  <div className="mt-6 text-sm text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm border border-blue-100">
                    <h4 className="font-medium text-gray-700 mb-2">Data Flow Sequence</h4>
                    <ol className="space-y-1 pl-5 list-decimal text-gray-600">
                      <li>Aggregate streaming consumption behavior in <span className="text-blue-600 font-medium">BigQuery</span></li>
                      <li>Export to <span className="text-green-600 font-medium">Cloud Storage</span> as input to ML pipeline</li>
                      <li>Perform feature engineering and normalization in <span className="text-purple-600 font-medium">Vertex AI</span></li>
                      <li>Run <span className="text-red-600 font-medium">K-Means clustering</span> with auto-selection of optimal k</li>
                      <li>Store cluster assignments back in <span className="text-blue-600 font-medium">BigQuery</span></li>
                      <li>Activate in <span className="text-orange-600 font-medium">Customer Data Platform</span> for lifecycle and churn interventions</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Description */}
            <ul>
              <li><strong className="text-gray-900">Data Source:</strong> BigQuery view serving as the source for weekly user behavior summaries</li>
              <li><strong className="text-gray-900">Orchestration:</strong> Vertex AI Pipelines with Kubeflow Pipeline components to manage the workflow</li>
              <li><strong className="text-gray-900">Storage:</strong> Cloud Storage for intermediate datasets and model artifacts</li>
              <li><strong className="text-gray-900">Activation:</strong> Results stored back in BigQuery for use in Customer Data Platform and email tools</li>
            </ul>
          </div>
        </div>

        {/* Machine Learning Implementation */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="ml-implementation">Machine Learning Implementation</h2>
            <p>
              The core of the solution leveraged unsupervised learning techniques to identify natural groupings in subscriber behavior:
            </p>
            <ul>
              <li><strong className="text-gray-900">Feature Engineering:</strong> Created 19+ engineered features to capture viewing behavior patterns, including:
                <ul>
                  <li>Total minutes watched per time period</li>
                  <li>Binge behavior metrics (consecutive viewing)</li>
                  <li>Sport-specific affinity scores</li>
                  <li>Weekday vs. weekend viewing ratios</li>
                  <li>Day-part preferences (morning, prime time, late night)</li>
                  <li>Content type preferences (live vs. replay, highlights vs. full games)</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Dimensionality Reduction:</strong> Applied Principal Component Analysis (PCA) to reduce feature space while preserving variance
                <ul>
                  <li>Optimized for maximum variance explanation with minimal components</li>
                  <li>Improved cluster separation and model performance</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Cluster Analysis:</strong> Implemented K-Means with automated parameter selection
                <ul>
                  <li>Used the elbow method to identify optimal number of clusters</li>
                  <li>Validated clusters using silhouette scores</li>
                  <li>Applied business-relevant labels post-clustering: Super, High, Moderate, Low, Dormant</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Pipeline Automation:</strong> Developed a weekly pipeline that:
                <ol className="list-decimal pl-5">
                  <li>Extracted the latest user behavior data</li>
                  <li>Applied feature engineering and standardization</li>
                  <li>Performed clustering and assigned segment labels</li>
                  <li>Stored results with interpretable metadata</li>
                </ol>
              </li>
              <li><strong className="text-gray-900">Strategic Filtering:</strong> Implemented business rules to filter the Dormant cluster from re-engagement campaigns to avoid unintentional churn triggers</li>
            </ul>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-accent-50 p-8 rounded-xl mb-16 shadow-lg">
          <h2 id="outcomes" className="text-2xl font-bold text-center mb-8 text-gray-900">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Super User Identification Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Super User Identification</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="font-medium text-accent-700">Targeted Retention</span>
              </div>
              <p className="text-gray-700">Identified "Super Users" for proactive retention offers (e.g., pause instead of cancel) and premium feature upselling.</p>
            </div>

            {/* Dormant User Management Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Dormant User Management</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium text-accent-700">Churn Prevention</span>
              </div>
              <p className="text-gray-700">Prevented reactivation of "Dormant" users that might churn if reminded, reducing negative campaign effects.</p>
            </div>

            {/* Lifecycle Messaging Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Lifecycle Messaging</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="font-medium text-accent-700">Personalized Communication</span>
              </div>
              <p className="text-gray-700">Enabled lifecycle stage-specific messaging through CDP and email journeys, improving engagement across all user segments.</p>
            </div>
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="technical-challenges">Technical Challenges</h2>
            <p>
              Implementing this customer segmentation solution required overcoming several complex technical hurdles:
            </p>
            <ul>
              <li><strong className="text-gray-900">Sparse Behavioral Signals:</strong> Many low-activity users had minimal viewing data, making it difficult to create meaningful features. We developed specialized techniques to handle sparse behavioral signals while still capturing meaningful patterns.</li>
              
              <li><strong className="text-gray-900">PCA Tuning:</strong> Balancing dimensionality reduction with interpretability required careful tuning of the PCA components. Too few components lost critical information, while too many introduced noise and reduced cluster separation.</li>
              
              <li><strong className="text-gray-900">Pipeline Automation:</strong> Creating a reliable pipeline from BigQuery to Cloud Storage to model processing without manual intervention required robust error handling and data quality validation steps.</li>
              
              <li><strong className="text-gray-900">Feature Consistency:</strong> Ensuring feature definitions remained consistent across pipeline versions as new data sources became available was challenging. We implemented strict schema validation and version control for feature definitions.</li>
              
              <li><strong className="text-gray-900">Cluster Stability:</strong> Maintaining consistent cluster definitions over time despite evolving user behavior required techniques to align new clusters with historical segments for consistent targeting.</li>
            </ul>
          </div>
        </div>

        {/* Design Tradeoffs & Decisions */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="design-tradeoffs">Design Tradeoffs & Decisions</h2>
            <p>
              Several key architectural and modeling decisions were made to ensure the solution was robust, interpretable, and actionable:
            </p>
            <ul>
              <li><strong className="text-gray-900">Algorithm Selection:</strong> Chose K-Means over DBSCAN for simplicity and speed in the pipeline context. While DBSCAN might have found more complex cluster shapes, K-Means provided faster execution and more consistent results across runs.</li>
              
              <li><strong className="text-gray-900">Dimensionality Reduction:</strong> Applied PCA for noise reduction and improved cluster separation, trading some feature interpretability for more distinct and stable clusters.</li>
              
              <li><strong className="text-gray-900">Feature Preservation:</strong> Stored both original features and PCA components with cluster assignments to enable downstream explainability and business interpretation of the segments.</li>
              
              <li><strong className="text-gray-900">Metadata Integration:</strong> Rejected reclustering based on account metadata (age, location, etc.) due to high cardinality and privacy concerns, instead focusing purely on behavioral signals.</li>
              
              <li><strong className="text-gray-900">Weekly Cadence:</strong> Selected a weekly processing frequency to balance freshness of segments with computational efficiency and stability of the clusters over time.</li>
            </ul>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <h2 id="technologies" className="text-2xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cloud Infrastructure group */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-blue-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">Cloud Infrastructure</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2" />
                    </svg>
                    <span className="text-sm">Google Cloud Platform</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                    </svg>
                    <span className="text-sm">BigQuery</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Cloud Storage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ML Platform group */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-purple-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">ML & AI</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-sm">Vertex AI</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-sm">Scikit-learn</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <span className="text-sm">PCA</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="text-sm">K-Means</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Development group */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-green-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">Development</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-sm">Python</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm">Pandas</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm">NumPy</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-sm">Jupyter</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Integration group */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-orange-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">Integrations</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm">Customer Data Platform</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <span className="text-sm">Tableau</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Pipeline Scheduler</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters Sidebar */}
        <div className="mb-16 bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-xl shadow-lg border border-slate-200">
          <h2 id="why-it-matters" className="text-2xl font-bold text-gray-900 mb-6">Why It Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Perspective */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Business Perspective</h3>
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="prose prose-md max-w-none prose-p:text-gray-700">
                <p>
                  Targeting users with relevant messages across the right lifecycle stage improves retention and customer experience. One-size-fits-all messaging hurts engagement and contributes to churn.
                </p>
                <p className="mt-3 text-sm italic text-gray-600 border-l-4 border-primary-200 pl-3">
                  In subscription businesses, understanding the different audience segments is critical for sustainable growth—it's far more cost-effective to retain existing subscribers than to acquire new ones.
                </p>
              </div>
            </div>

            {/* ML/Data Science Perspective */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">ML/DS Perspective</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="prose prose-md max-w-none prose-p:text-gray-700">
                <p>
                  Effective segmentation combines modeling with business alignment—it's not just about statistical clusters, but creating interpretable personas that marketing teams can actually use.
                </p>
                <p className="mt-3 text-sm italic text-gray-600 border-l-4 border-accent-200 pl-3">
                  The true challenge of unsupervised learning isn't just finding patterns in the data—it's translating those patterns into actionable segments that align with business realities and can drive meaningful interventions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
            <h2 id="conclusion">Conclusion</h2>
            <p>
              This project demonstrates the power of unsupervised learning techniques to derive meaningful customer segments 
              from complex behavioral data. The solution successfully:
            </p>
            <ul>
              <li>Created a scalable ML segmentation framework embedded into weekly marketing workflows</li>
              <li>Enabled better personalization and lifecycle-appropriate messaging across user types</li>
              <li>Identified high-value subscribers for proactive retention interventions</li>
              <li>Protected potentially vulnerable segments from counterproductive campaigns</li>
              <li>Demonstrated how unsupervised learning paired with real-time data pipelines can unlock tangible marketing ROI</li>
            </ul>
            <p>
              Beyond the immediate business impact, this project showcases how machine learning can transform 
              raw behavioral data into actionable customer insights that drive meaningful business outcomes.
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/projects" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
          <AnimatedButton 
            href="mailto:contact@alexlabuda.com?subject=Discussion%20about%20Unsupervised%20Learning%20Project"
            text="Discuss This Project"
            icon={<FaEnvelope className="w-5 h-5" />}
            className="max-w-[200px]"
          />
        </div>
      </div>
    </div>
  );
} 