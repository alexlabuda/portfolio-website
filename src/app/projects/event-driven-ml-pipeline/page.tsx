import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';

export const metadata = {
  title: 'Event-Driven ML Pipeline with Vertex AI | Alex Labuda',
  description: 'Case study on building an event-driven machine learning pipeline with Vertex AI and LLMs for real-time call transcript analysis for a custom closet company',
};

export default function EventDrivenMLPipelinePage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      {/* Top section with background image - only for header through Business Challenge */}
      <div 
        className="relative w-full mb-16" 
        style={{
          backgroundImage: "url('/images/0e2ddf79-1296-4c85-9ddd-822a1ccd7126.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Semi-transparent overlay for better readability */}
        <div className="absolute inset-0 bg-white bg-opacity-75"></div>
        
        {/* Content container */}
        <div className="relative py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="mb-12">
              <Link href="/projects" className="text-primary-600 hover:text-primary-700 mb-4 flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-6">Event-Driven ML Pipeline with Vertex AI and LLMs</h1>
              <p className="mt-4 text-lg text-gray-600">
                A real-time machine learning solution for processing and classifying call center transcripts to drive personalized customer experiences for a leading custom closet company.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Gemini</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">KubeFlow</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Pub/Sub</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Cloud Functions</span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2>Project Overview</h2>
              <p>
                This project involved designing and implementing an end-to-end event-driven machine learning 
                pipeline for a leading custom closet company with 65 retail locations across the United States. 
                The system processes inbound call center transcripts by integrating a call tracking platform, 
                Google Cloud Platform services, and Vertex AI with large language models for sophisticated 
                classification and analysis.
              </p>
              <p>
                The solution enriches customer data profiles by automatically classifying call transcripts 
                according to business type, product interest, purchase intent, and appointment details. This 
                enriched data fuels personalized customer communications and recommendations across 
                digital touchpoints, significantly improving conversion rates and customer satisfaction.
              </p>
            </div>

            {/* Business Challenge */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2>Business Challenge</h2>
              <p>
                The client was facing several challenges with their sales and support operations:
              </p>
              <ul>
                <li>Manual classification of inbound calls was inconsistent and time-consuming</li>
                <li>Sales representatives had limited visibility into customer interests from previous interactions</li>
                <li>Marketing teams couldn't segment customers based on product interests expressed during calls</li>
                <li>Personalization efforts were limited by lack of structured data from phone interactions</li>
                <li>Lead routing efficiency was compromised by manual processing</li>
                <li>No systematic approach existed to correlate customer interests with digital behavior</li>
              </ul>
              <p>
                The business needed an intelligent solution that could automatically analyze call transcripts, 
                extract useful classifications, and integrate this data with their customer data platform for 
                personalized outreach and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of content without background image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Architecture */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Solution Architecture</h2>
          <p>
            I designed a cloud-native, event-driven architecture leveraging Google Cloud Platform services:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Key Components</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Call Tracking Platform:</strong> For capturing, recording, and transcribing customer calls across all 65 store locations</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>BigQuery:</strong> Data warehouse storing call transcripts and classification results</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Cloud Pub/Sub:</strong> Event messaging service triggering ML pipeline when new transcripts arrive</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Vertex AI:</strong> Machine learning platform with Gemini LLM for transcript classification</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>KubeFlow Pipelines:</strong> Orchestrating the end-to-end ML workflow</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>LangChain:</strong> Framework for building LLM applications and prompt engineering</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Customer Data Platform:</strong> For activating the ML insights across customer touchpoints</span>
              </li>
            </ul>
          </div>
          
          <p>
            The pipeline operates as follows:
          </p>
          <ol>
            <li>Call tracking platform captures customer call details and transcripts across all store locations</li>
            <li>Call transcripts are automatically ingested into BigQuery tables</li>
            <li>New record creation in BigQuery triggers a Pub/Sub event</li>
            <li>Pub/Sub message initiates the KubeFlow pipeline to classify the new transcript</li>
            <li>Vertex AI with Gemini LLM processes the transcript with specialized prompts to classify:
              <ul>
                <li>Business type (new vs. existing customer)</li>
                <li>Product interest (closet type, home office, garage storage, etc.)</li>
                <li>Purchase intent (information seeking vs. action taking)</li>
                <li>Appointment status (including cancellations)</li>
              </ul>
            </li>
            <li>Classification results are written back to BigQuery</li>
            <li>Customer Data Platform utilizes these classifications to trigger personalized emails, web recommendations, and other tailored customer experiences</li>
          </ol>
        </div>

        {/* Machine Learning Implementation */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Machine Learning Implementation</h2>
          <p>
            The classification system leverages several machine learning techniques built on Google's Vertex AI platform:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Business Type Classification</h3>
              <p className="text-gray-700">
                Implemented a prompt-engineered Gemini LLM classifier to determine whether a call represents 
                new business (first-time inquiry) or existing business (follow-up, existing customer), enabling
                different nurturing paths for prospects versus existing customers.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Product Interest Detection</h3>
              <p className="text-gray-700">
                Developed a specialized classification system capable of identifying customer interest across 
                the company's product catalog: walk-in closets, reach-in closets, home offices, garages, wall beds,
                and more - enabling tailored product recommendations.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Purchase Intent Analysis</h3>
              <p className="text-gray-700">
                Created a classification model to distinguish between information-seeking behaviors 
                (early research) versus action-taking intent (ready to schedule consultation), allowing sales 
                teams to prioritize prospects based on their position in the buying journey.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Appointment Status Tracking</h3>
              <p className="text-gray-700">
                Built a specialized classifier to detect appointment cancellations from call transcripts, 
                enabling automatic calendar updates and proactive follow-up workflows when customers 
                cancel scheduled consultations.
              </p>
            </div>
          </div>
          
          <p>
            The classification system was developed using LangChain for prompt engineering and implemented
            with Gemini 1.5 Pro for maximum accuracy. All models were thoroughly validated on historical call 
            transcript data with human-verified labels before deployment.
          </p>
        </div>

        {/* Results and Impact */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Results and Impact</h2>
          <p>
            The implementation of this ML pipeline delivered significant business value:
          </p>
          
          <div className="bg-accent-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Key Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-accent-100">
                <div className="flex flex-col items-center mb-3">
                  <svg className="w-10 h-10 text-accent-600 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <h4 className="text-xl font-bold text-gray-800">Email Engagement</h4>
                </div>
                <p className="text-gray-700 mb-3 text-center">
                  <span className="block text-xl font-bold text-accent-600 mb-1">Significant Increase</span>
                  in email open rates through personalized product recommendations based on classified call content
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-accent-100">
                <div className="flex flex-col items-center mb-3">
                  <svg className="w-10 h-10 text-accent-600 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <h4 className="text-xl font-bold text-gray-800">Conversion Optimization</h4>
                </div>
                <p className="text-gray-700 mb-3 text-center">
                  <span className="block text-xl font-bold text-accent-600 mb-1">Notable Improvement</span>
                  in consultation booking conversion rate from targeted follow-up communications
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-accent-100">
                <div className="flex flex-col items-center mb-3">
                  <svg className="w-10 h-10 text-accent-600 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-xl font-bold text-gray-800">Opportunity Recovery</h4>
                </div>
                <p className="text-gray-700 mb-3 text-center">
                  <span className="block text-xl font-bold text-accent-600 mb-1">Substantial Reduction</span>
                  in lost opportunities from cancelled appointments through proactive rescheduling
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-accent-300 italic">Results projected based on initial implementation and pilot program data</p>
            </div>
          </div>
          
          <p>
            Beyond these quantitative results, the solution provided several qualitative benefits:
          </p>
          <ul>
            <li>Sales teams gained immediate visibility into customer product interests without manual call reviews</li>
            <li>Marketing could segment audiences based on spoken interests, not just digital behavior</li>
            <li>Automated tagging of interested product categories improved website personalization</li>
            <li>Reduced time from initial inquiry to scheduled consultation through targeted follow-up</li>
            <li>Significantly improved customer experience through context-aware communications</li>
          </ul>
        </div>

        {/* Technical Challenges */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Technical Challenges and Solutions</h2>
          
          <div className="my-8 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Transcript Preprocessing</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 mb-3"><strong>Challenge:</strong> Call transcripts contained noise, company-specific terminology, and conversation artifacts that reduced classification accuracy.</p>
                <p className="text-gray-700"><strong>Solution:</strong> Implemented a custom preprocessing pipeline that cleaned transcripts by removing brand mentions, normalizing product terminology, and handling speech disfluencies before classification.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Event-Driven Architecture</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 mb-3"><strong>Challenge:</strong> Ensuring reliable processing of new call transcripts with minimal latency to enable timely personalization.</p>
                <p className="text-gray-700"><strong>Solution:</strong> Built a robust event-driven system using Pub/Sub and KubeFlow Pipelines that automatically triggers classification when new records appear in BigQuery, with comprehensive error handling and retry mechanisms.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Cost Optimization</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 mb-3"><strong>Challenge:</strong> LLM inference costs could become significant at the company's call volume across 65 locations.</p>
                <p className="text-gray-700"><strong>Solution:</strong> Optimized inference by batching transcript processing, carefully tuning prompt length, and implementing a tiered approach that only invoked the most sophisticated models when necessary for complex classifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technologies Used through Conclusion - with background image - full width */}
      <div 
        className="relative py-12 mb-16 w-full" 
        style={{
          backgroundImage: "url('/images/event-driven-classification-skills-section-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Semi-transparent overlay for better readability */}
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technologies Used */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Python</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Vertex AI</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Gemini 1.5 Pro</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">KubeFlow</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">BigQuery</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Pub/Sub</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Cloud Functions</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Cloud Storage</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">LangChain</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">pandas</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Secret Manager</span>
              </div>
              <div className="bg-gray-50 bg-opacity-90 px-4 py-3 rounded text-center shadow-sm">
                <span className="font-medium">Customer Data Platform</span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none">
            <h2>Conclusion</h2>
            <p className="bg-white bg-opacity-75 p-4 rounded-lg">
              This event-driven ML pipeline represents a successful application of cloud-native machine learning 
              technologies to enhance customer experiences for a nationwide custom closet retailer. By leveraging 
              Google Cloud Platform services and state-of-the-art language models, the solution transformed how 
              the company harnesses customer conversations for personalized marketing and sales follow-up.
            </p>
            <p className="bg-white bg-opacity-75 p-4 rounded-lg">
              The project demonstrates the power of combining real-time data processing, sophisticated machine learning models, 
              and customer data activation to deliver measurable business impact through improved conversion rates, 
              more relevant customer communications, and a seamless omnichannel experience.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/projects" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
          <a 
            href="mailto:contact@alexlabuda.com?subject=Discussion%20about%20Event-Driven%20ML%20Pipeline%20Project" 
            className="bg-primary-600 text-white hover:bg-primary-700 px-5 py-2 rounded font-medium transition-colors"
          >
            Discuss This Project
          </a>
        </div>
      </div>
    </div>
  );
} 