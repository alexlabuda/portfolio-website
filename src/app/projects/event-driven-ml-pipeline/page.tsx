import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';

export const metadata = {
  title: 'Event-Driven ML Pipeline with Vertex AI | Alex Labuda',
  description: 'Case study on building an event-driven machine learning pipeline with Vertex AI and LLMs for real-time call transcript analysis',
};

export default function EventDrivenMLPipelinePage() {
  return (
    <div className="bg-white py-12 sm:py-16">
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
            A real-time machine learning solution for processing and analyzing call center transcripts using Vertex AI and large language models.
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

        {/* Hero Image */}
        <div className="w-full relative h-80 md:h-96 bg-primary-50 rounded-xl overflow-hidden mb-12">
          <Image 
            src={getAssetPath('/images/2024_09-AI-Engineering-Sentiment-Analysis.png')} 
            alt="Event-Driven ML Pipeline Architecture"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Project Overview */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Project Overview</h2>
          <p>
            This project involved designing and implementing an end-to-end event-driven machine learning 
            pipeline for a leading telecommunications company. The system processes call center transcripts 
            in real-time, leveraging Google Cloud Platform services and Vertex AI with large language models 
            for sophisticated classification and entity extraction tasks.
          </p>
          <p>
            The solution provides critical insights to customer service teams, enabling them to identify 
            customer sentiment, classify issues, extract actionable information, and recommend next steps—all 
            in near real-time as calls are being conducted.
          </p>
        </div>

        {/* Business Challenge */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Business Challenge</h2>
          <p>
            The client was facing several challenges with their call center operations:
          </p>
          <ul>
            <li>Customer service representatives (CSRs) struggled to quickly identify the key issues from long call transcripts</li>
            <li>Manual classification of calls was inconsistent and time-consuming</li>
            <li>Important follow-up items were often missed during busy periods</li>
            <li>There was no systematic way to detect customer sentiment trends</li>
            <li>Quality assurance teams had limited visibility into call outcomes</li>
          </ul>
          <p>
            The business needed an intelligent solution that could analyze call transcripts in real-time and provide 
            actionable insights to CSRs during the call, as well as comprehensive analytics for management teams.
          </p>
        </div>

        {/* Solution Architecture */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Solution Architecture</h2>
          <p>
            I designed a cloud-native, event-driven architecture using Google Cloud Platform services:
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
                <span><strong>Cloud Speech-to-Text API:</strong> For real-time transcription of call audio</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Cloud Pub/Sub:</strong> Event messaging service to trigger processing workflows</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Cloud Functions:</strong> Serverless compute for event handling and preprocessing</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Vertex AI:</strong> Google's ML platform for training and deploying models</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>LangChain:</strong> Framework for developing LLM-powered applications</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>BigQuery:</strong> Data warehouse for analytics and reporting</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-100 text-primary-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Looker Studio:</strong> Business intelligence tool for dashboarding</span>
              </li>
            </ul>
          </div>
          
          <p>
            The pipeline operates as follows:
          </p>
          <ol>
            <li>Call audio is transcribed in real-time using Cloud Speech-to-Text API</li>
            <li>Transcription events trigger Pub/Sub messages</li>
            <li>Cloud Functions process the transcripts and prepare them for ML analysis</li>
            <li>Vertex AI models perform sentiment analysis, issue classification, and entity extraction</li>
            <li>Results are stored in BigQuery for analytics and sent to CSR dashboards</li>
            <li>Looker Studio dashboards provide management with trend analysis and insights</li>
          </ol>
        </div>

        {/* Machine Learning Implementation */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Machine Learning Implementation</h2>
          <p>
            The solution leverages several machine learning techniques:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sentiment Analysis</h3>
              <p className="text-gray-700">
                Fine-tuned a pre-trained language model on historical call transcripts to classify customer sentiment 
                as positive, neutral, or negative, with additional granularity for detecting frustration, confusion, 
                and satisfaction.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Issue Classification</h3>
              <p className="text-gray-700">
                Implemented a hierarchical classification system using Vertex AI to categorize customer issues 
                into primary categories and subcategories with over 90% accuracy.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Entity Extraction</h3>
              <p className="text-gray-700">
                Utilized named entity recognition techniques to extract relevant information such as account numbers, 
                product names, dates, and specific customer requests from the call transcripts.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-3">LLM-Powered Summarization</h3>
              <p className="text-gray-700">
                Integrated large language models using LangChain to generate concise call summaries and recommended 
                next actions for customer service representatives.
              </p>
            </div>
          </div>
          
          <p>
            All models were evaluated against a comprehensive test set derived from historical call data, achieving 
            performance metrics that exceeded the client's requirements. Regular retraining processes were established 
            to ensure model accuracy over time.
          </p>
        </div>

        {/* Results and Impact */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Results and Impact</h2>
          <p>
            The implementation of this ML pipeline delivered significant business value:
          </p>
          
          <div className="bg-accent-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Key Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">35%</div>
                <p className="text-gray-700">Reduction in average call handling time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">28%</div>
                <p className="text-gray-700">Increase in first-call resolution rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">42%</div>
                <p className="text-gray-700">Improvement in customer satisfaction scores</p>
              </div>
            </div>
          </div>
          
          <p>
            Beyond these quantitative results, the solution provided several qualitative benefits:
          </p>
          <ul>
            <li>CSRs reported feeling more confident and effective with ML-powered assistance</li>
            <li>Management gained unprecedented visibility into customer pain points and trends</li>
            <li>The quality assurance team could focus their efforts on calls flagged by the system</li>
            <li>Product teams received valuable feedback on feature requests and pain points</li>
            <li>The system identified training opportunities based on call patterns</li>
          </ul>
        </div>

        {/* Technical Challenges */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Technical Challenges and Solutions</h2>
          
          <div className="my-8 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Real-Time Processing</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 mb-3"><strong>Challenge:</strong> Processing call transcripts with low latency was essential for providing insights while the call was still in progress.</p>
                <p className="text-gray-700"><strong>Solution:</strong> Implemented a streaming architecture with Pub/Sub and horizontally scalable Cloud Functions, optimizing model inference times using Vertex AI's high-performance endpoints.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Model Accuracy</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 mb-3"><strong>Challenge:</strong> Initial models struggled with domain-specific terminology and the conversational nature of call transcripts.</p>
                <p className="text-gray-700"><strong>Solution:</strong> Fine-tuned models on industry-specific data and implemented a custom preprocessing pipeline to handle speech disfluencies and conversational patterns.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Cost Optimization</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 mb-3"><strong>Challenge:</strong> Full LLM processing of all call transcripts would be prohibitively expensive at scale.</p>
                <p className="text-gray-700"><strong>Solution:</strong> Implemented a tiered approach where simpler, more efficient models handled routine classification tasks, while more advanced LLMs were only engaged for complex calls or specific scenarios.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Python</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Vertex AI</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Cloud Functions</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Pub/Sub</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">BigQuery</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">LangChain</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Speech-to-Text</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Looker Studio</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Cloud Storage</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Terraform</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">CI/CD Pipeline</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded text-center">
              <span className="font-medium">Docker</span>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2>Conclusion</h2>
          <p>
            This event-driven ML pipeline represents a successful application of cloud-native machine learning 
            technologies to solve real business challenges. By leveraging Google Cloud Platform services and 
            state-of-the-art language models, the solution has transformed the client's call center operations, 
            resulting in improved efficiency, enhanced customer experiences, and valuable business insights.
          </p>
          <p>
            The project demonstrates the power of combining real-time data processing, sophisticated machine learning models, 
            and intuitive dashboarding to create a comprehensive solution that delivers tangible business value.
          </p>
        </div>

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