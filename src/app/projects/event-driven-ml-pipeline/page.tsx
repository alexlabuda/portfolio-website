import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';
import HexagonParticlesBackground from '../../components/HexagonParticlesBackground';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import { FaEnvelope } from 'react-icons/fa';
import TableOfContents from '@/app/components/TableOfContents';
import ScrollToTop from '@/app/components/ScrollToTop';
import GradientReadingProgressBar from '@/app/components/GradientReadingProgressBar';
import MLWorkflowDiagramWrapper from '@/app/components/MLWorkflowDiagramWrapper';
import type { Metadata } from 'next';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { SiLangchain } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { SiGooglebigquery } from "react-icons/si";
import { 
  PubSubIcon, 
  CloudFunctionsIcon,
  VertexAIIcon,
  SecretManagerIcon, 
  CloudStorageIcon 
} from '@/app/components/icons';

export const metadata: Metadata = {
  title: 'Event-Driven Call Transcript Classification Pipeline with Vertex AI and Gemini | Alex Labuda',
  description: 'Case study on building an event-driven machine learning pipeline using Google Cloud Platform, Vertex AI and Gemini for real-time call transcript analysis for a custom closet company',
  keywords: 'Event-Driven Architecture, Machine Learning Pipeline, Vertex AI, Gemini, Call Transcript Analysis, MLOps, Python, GCP, Google Cloud Platform',
  openGraph: {
    title: 'Event-Driven Call Transcript Classification Pipeline with Vertex AI and Gemini',
    description: 'Case study on implementing an end-to-end ML pipeline for real-time call transcript classification using Google Cloud Platform',
    url: 'https://www.alex-labuda.com/projects/event-driven-ml-pipeline',
    images: [
      {
        url: 'https://www.alex-labuda.com/images/2024_09-AI-Engineering-Sentiment-Analysis.png',
        width: 1200,
        height: 630,
        alt: 'Event-Driven ML Pipeline Architecture',
      },
    ],
    type: 'article',
  },
};

export default function EventDrivenMLPipelinePage() {
  return (
    <main
      className="bg-gray-50/40 py-12 sm:py-16 mt-1 relative"
      itemScope
      itemType="https://schema.org/TechArticle"
    >
      <meta itemProp="author" content="Alex Labuda" />
      <meta itemProp="datePublished" content="2024-04-01" />
      <meta itemProp="headline" content="Event-Driven Call Transcript Classification Pipeline with Vertex AI and Gemini" />
      <meta itemProp="keywords" content="Event-Driven Architecture, Machine Learning Pipeline, Vertex AI, Gemini, Call Transcript Analysis, MLOps" />
      
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
      
      {/* Background particles for the entire page */}
      <HexagonParticlesBackground />
      
      {/* Top section with gradient overlay */}
      <div className="relative w-full mb-12">
        {/* Semi-transparent Overlay for better text contrast - only for the top section */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900/90 via-accent-800/80 to-gray-900/70 z-[1]"></div>

        {/* Content container */}
        <div className="relative py-12 z-[5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
            {/* Header Section */}
            <header className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <nav aria-label="Breadcrumb">
                <Link href="/projects" className="text-primary-600 hover:text-primary-700 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back to Projects
                </Link>
              </nav>
              <h1 
                className="text-3xl font-bold text-gray-900 sm:text-4xl mt-6"
                itemProp="name"
              >
                Event-Driven Call Transcript Classification Pipeline with Vertex AI and Gemini
              </h1>
              <p 
                className="mt-4 text-lg text-gray-700"
                itemProp="abstract"
              >
                A real-time machine learning solution for processing and classifying call center transcripts to drive personalized customer experiences for a leading custom closet company.
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Gemini</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">KubeFlow</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Pub/Sub</span>
              </div>
              
              {/* Project header image */}
              <div className="mt-6 mb-2">
                <figure className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-slate-50 to-gray-100">
                  <div className="relative aspect-[21/9] w-full">
                    <Image 
                      src={getAssetPath('/images/2024_09-AI-Engineering-Sentiment-Analysis.png')}
                      alt="Event-Driven ML Pipeline with Vertex AI architecture diagram showing data flow from call center to processing pipeline"
                      fill
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                      className="p-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.01]"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                      quality={100}
                      itemProp="image"
                    />
                  </div>
                </figure>
              </div>
            </header>

            {/* Project Overview */}
            <section 
              className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl"
              aria-labelledby="project-overview"
              itemProp="articleSection"
            >
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2 id="project-overview">Project Overview</h2>
                <div itemProp="articleBody">
                  <p>
                    This project involved designing and implementing an end-to-end event-driven machine learning 
                    pipeline for a leading custom closet company with retail locations across the United States. 
                    The system processes inbound call center transcripts by integrating a call tracking platform, 
                    Google Cloud Platform services, and Vertex AI with large language models for customized 
                    classification and analysis.
                  </p>
                  <p>
                    The solution captures call transcripts in real-time from a call center tracking platform, automatically 
                    processes them using a Pub/Sub triggered pipeline, and classifies them according to 
                    product interest, purchase intent, and appointment details. This enriched data fuels personalized 
                    customer communications and recommendations across digital touchpoints, improving 
                    conversion rates and customer satisfaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Project Overview */}
            <section 
              className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl"
              aria-labelledby="role-impact"
              itemProp="articleSection"
            >
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2 id="role-impact">Role & Impact</h2>
                <div itemProp="articleBody">
                  <p>
                  Led end-to-end design and implementation of the real-time ML pipeline as the sole data scientist on a cross-functional team. 
                  Personally handled all ML design, prompt engineering, and infrastructure orchestration. 
                  Enabled automated classification of thousands of weekly call transcripts, reducing inconsistent manual processing.
                  </p>
                </div>
              </div>
            </section>

            {/* Business Challenge */}
            <section 
              className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl"
              aria-labelledby="business-challenge"
              itemProp="articleSection"
            >
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
                <h2 id="business-challenge">Business Challenge</h2>
                <div itemProp="articleBody">
                  <p>
                    The client faced several challenges processing the high volume of inbound sales calls:
                  </p>
                  <ul>
                    <li>Inconsistent reporting quality and metrics from customer support representatives across locations</li>
                    <li>No automated way to extract actionable insights from customer conversations</li>
                    <li>Manual follow-up processes that missed key sales opportunities</li>
                    <li>Lack of flexibility in tailoring conversation insights to specific business types and customer segments</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Rest of content without background image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24 relative z-[2]">
        {/* Solution Architecture */}
        <section 
          className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          aria-labelledby="solution-architecture"
          itemProp="articleSection"
        >
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="solution-architecture">Solution Architecture</h2>
            <div itemProp="articleBody">
              <p className="mb-8">
                We designed and implemented a fully event-driven architecture on Google Cloud Platform that processes call transcripts in real-time:
              </p>

              {/* Architecture Diagram */}
              <figure className="w-full overflow-x-auto">
                <div className="min-w-full lg:min-w-0 py-4">
                  <MLWorkflowDiagramWrapper />
                  
                  {/* Diagram Caption */}
                  <figcaption className="text-sm text-center text-gray-600 mt-2">
                    Event-driven architecture for real-time call transcript classification and processing
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* Machine Learning Implementation */}
        <section 
          className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          aria-labelledby="ml-implementation"
          itemProp="articleSection"
        >
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="ml-implementation">Machine Learning Implementation</h2>
            <div itemProp="articleBody">
              <p>
                The core of the solution leveraged Vertex AI and Gemini large language models to analyze call transcripts:
              </p>
              <ul>
                <li><strong className="text-gray-900">Model Selection:</strong> Utilized Gemini for its superior ability to understand conversational context and nuances in call transcripts</li>
                <li><strong className="text-gray-900">Prompt Engineering:</strong> Designed specialized prompts for each classification task using LangChain optimized to achieve high performance in transcript analysis</li>
                <li><strong className="text-gray-900">Multi-label Classification:</strong> Developed four distinct classification chains</li>
                <li><strong className="text-gray-900">Safety Mechanisms:</strong> Configured safety settings to enable business classification while preventing inappropriate content</li>
                <li><strong className="text-gray-900">Data Preprocessing:</strong> Implemented text normalization, special character removal, and standardization techniques</li>
                <li><strong className="text-gray-900">Validation System:</strong> Created a fuzzy matching validation process to correct classification outputs that didn't match predefined categories</li>
                <li><strong className="text-gray-900">Pipeline Automation:</strong> Built a three-step Vertex AI Pipeline that:</li>
                <ol className="list-decimal pl-5">
                  <li>Exports transcript data from BigQuery</li>
                  <li>Processes transcripts through classification models</li>
                  <li>Loads enriched data back to BigQuery for activation</li>
                </ol>
                <li><strong className="text-gray-900">Model Versioning:</strong> Established CI/CD processes for prompt updates</li>
              </ul>
              <p>
                This approach allowed us to process thousands of call transcripts weekly with minimal human intervention, achieving high classification performance while maintaining flexibility to adapt to changing business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section 
          className="bg-accent-50/95 backdrop-blur-sm p-8 rounded-xl mb-12 shadow-lg"
          aria-labelledby="outcomes"
          itemProp="articleSection"
        >
          <h2 id="outcomes" className="text-2xl font-bold text-center mb-8 text-gray-900">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8" itemProp="articleBody">
            {/* Email Engagement Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Email Engagement</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-medium text-accent-700">Projected Increase</span>
              </div>
              <p className="text-gray-700">Personalized email campaigns based on call transcript insights designed to drive higher open and click-through rates.</p>
            </div>

            {/* Conversion Optimization Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Conversion Optimization</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="font-medium text-accent-700">Targeted Improvement</span>
              </div>
              <p className="text-gray-700">Enhanced follow-up processes and targeted content based on call intent classification aimed at improving website-to-appointment conversion rates.</p>
            </div>

            {/* Opportunity Recovery Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Opportunity Recovery</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-medium text-accent-700">Expected Reduction</span>
              </div>
              <p className="text-gray-700">Automated follow-up system for high-intent calls that don't convert to appointments designed to reduce missed sales opportunities.</p>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section 
          className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          aria-labelledby="technical-challenges"
          itemProp="articleSection"
        >
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="technical-challenges">Technical Challenges</h2>
            <div itemProp="articleBody">
              <p>
                Implementing this event-driven ML solution required overcoming several complex technical hurdles:
              </p>
              <ul>
                <li><strong className="text-gray-900">Transcript Quality Issues:</strong> Call transcripts often contained noise, brand mentions, and speech disfluencies that reduced classification accuracy. I developed specialized preprocessing techniques to clean and normalize the text before analysis.</li>
                
                <li><strong className="text-gray-900">Event-Driven Architecture:</strong> Ensuring reliable real-time processing with minimal latency required careful design of the Pub/Sub topic configuration, subscription handling, and error management to prevent message loss.</li>
                
                <li><strong className="text-gray-900">Authentication & Security:</strong> The solution required secure authentication between multiple GCP services. I implemented service account management with appropriate IAM permissions and Secret Manager integration for API credentials.</li>
                
                <li><strong className="text-gray-900">Pipeline Orchestration:</strong> Building a reliable KubeFlow pipeline involved complex component design, artifact passing between steps, and ensuring consistent data formats throughout the workflow.</li>
                
                <li><strong className="text-gray-900">LLM Prompt Engineering:</strong> Developing effective prompts for the Gemini model required extensive testing and refinement to achieve high classification accuracy across diverse call scenarios and product types.</li>
                
                <li><strong className="text-gray-900">Validation & Error Handling:</strong> LLM outputs sometimes contained unexpected formats or classifications. I implemented a fuzzy matching system that could correct outputs to match predefined categories without human intervention.</li>
                
                <li><strong className="text-gray-900">Cost Optimization:</strong> LLM inference at call volume scale could become expensive. I implemented batching and caching strategies to reduce API calls and optimize the overall solution cost.</li>
                
                <li><strong className="text-gray-900">Data Privacy Compliance:</strong> Call transcripts contained personally identifiable information (PII). The solution needed robust security measures to ensure GDPR and CCPA compliance throughout the data processing pipeline.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Tradeoffs & Decisions */}
        <section 
          className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          aria-labelledby="design-tradeoffs"
          itemProp="articleSection"
        >
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="design-tradeoffs">Design Tradeoffs & Decisions</h2>
            <div itemProp="articleBody">
              <p>
                Several key architectural and modeling decisions were made to ensure the solution was scalable, cost-effective, and optimized for real-world call data:
              </p>
              <ul>
                <li><strong className="text-gray-900">Event-Driven Architecture:</strong> Chose an event-driven design using Pub/Sub and Cloud Functions to enable low-latency, real-time processing and avoid unnecessary compute costs associated with batch jobs.</li>
                
                <li><strong className="text-gray-900">Model Selection:</strong> Selected Gemini 1.5 Pro for its strong zero-shot performance and contextual understanding of noisy, real-world transcripts, outperforming traditional classification models in preliminary evaluations.</li>
                
                <li><strong className="text-gray-900">Prompt Design Strategy:</strong> Used LangChain to modularize and chain prompts, enabling rapid iteration, reusable templates, and better debugging across multiple classification tasks.</li>
                
                <li><strong className="text-gray-900">Pipeline Modularity:</strong> Structured the Vertex AI Pipeline with clearly separated steps for ingestion, classification, and enrichment to improve observability and maintainability.</li>
                
                <li><strong className="text-gray-900">Fallback Handling:</strong> Anticipated classification edge cases by integrating fuzzy matching and validation layers, trading minor recall for significantly improved precision and reliability.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section 
          className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          aria-labelledby="technologies"
          itemProp="articleSection"
        >
          <h2 id="technologies" className="text-2xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" itemProp="articleBody">
            {/* GCP Core group */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-blue-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">Cloud Infrastructure</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600">
                      <DiGoogleCloudPlatform className="w-full h-full" />
                    </div>
                    <span className="text-sm">Google Cloud Platform</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600">
                      <SiGooglebigquery className="w-full h-full" />
                    </div>
                    <span className="text-sm">BigQuery</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600">
                      <PubSubIcon className="w-full h-full" />
                    </div>
                    <span className="text-sm">Cloud Pub/Sub</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600">
                      <CloudFunctionsIcon className="w-full h-full" />
                    </div>
                    <span className="text-sm">Cloud Functions</span>
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
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600">
                      <VertexAIIcon className="w-full h-full" />
                    </div>
                    <span className="text-sm">Vertex AI</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-sm">Gemini 1.5 Pro</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600">
                      <SiLangchain className="w-full h-full" />
                    </div>
                    <span className="text-sm">LangChain</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h2a2 2 0 012 2v3a2 2 0 01-2 2H5V12zm6 0h2a2 2 0 012 2v5a2 2 0 01-2 2h-2v-9zm6 0h2a2 2 0 012 2v3a2 2 0 01-2 2h-2v-5z" />
                    </svg>
                    <span className="text-sm">KubeFlow Pipelines</span>
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
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-green-600">
                      <AiOutlinePython className="w-full h-full" />
                    </div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-sm">FuzzyWuzzy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-green-600">
                      <SecretManagerIcon className="w-full h-full" />
                    </div>
                    <span className="text-sm">Secret Manager</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">Call Tracking Platform</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="text-sm">Email Marketing System</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex-shrink-0 text-orange-600">
                      <CloudStorageIcon className="w-full h-full" />
                    </div>
                    <span className="text-sm">Cloud Storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Sidebar */}
        <section 
          className="mb-12 bg-gradient-to-br from-gray-50/95 to-slate-100/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-200"
          aria-labelledby="why-it-matters"
          itemProp="articleSection"
        >
          <h2 id="why-it-matters" className="text-2xl font-bold text-gray-900 mb-6">Why It Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-8" itemProp="articleBody">
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
                  Businesses often overlook unstructured data in customer support—this project proves how conversation data can be mined in real time for revenue opportunities.
                </p>
                <p className="mt-3 text-sm italic text-gray-600 border-l-4 border-primary-200 pl-3">
                  The most valuable insights often exist in places where companies aren't looking—the space between formal data points, in the conversations and interactions that happen every day.
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
                  LLMs can't just "plug and play"—they require thoughtful prompt engineering, validation systems, and downstream integration to work in real-world production.
                </p>
                <p className="mt-3 text-sm italic text-gray-600 border-l-4 border-accent-200 pl-3">
                  The difference between a demo and production-ready ML is immense. Robust solutions require meticulous attention to edge cases, validation chains, and integration points that are invisible in controlled environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section 
          className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          aria-labelledby="conclusion"
          itemProp="articleSection"
        >
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
            <h2 id="conclusion">Conclusion</h2>
            <div itemProp="articleBody">
              <p>
                This project demonstrates the power of combining event-driven architecture with advanced machine learning 
                to transform unstructured conversation data into actionable business intelligence. The solution successfully:
              </p>
              <ul>
                <li>Automated the classification of thousands of weekly call transcripts with high performance</li>
                <li>Enabled personalized marketing campaigns based on specific product interests expressed during calls</li>
                <li>Improved sales follow-up by automatically identifying high-intent prospects</li>
                <li>Created a unified view of customer interactions across channels</li>
                <li>Provided retail locations with better insights into customer needs and preferences</li>
              </ul>
              <p>
                Beyond the immediate business impact, this project showcases how modern cloud infrastructure, event-based 
                architectures, and large language models can be combined to solve complex business problems in a scalable, 
                cost-effective manner.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation - Back to Projects link and Discuss This Project button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24 flex justify-between items-center mb-8">
        <Link href="/projects" className="text-primary-600 hover:text-primary-700 flex items-center">
          <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
        
        <AnimatedButton 
          href="mailto:contact@alexlabuda.com?subject=Discussion%20about%20Event-Driven%20ML%20Pipeline%20Project"
          text="Discuss This Project"
          icon={<FaEnvelope className="w-5 h-5" />}
          className="max-w-[200px]"
        />
      </div>
    </main>
  );
} 