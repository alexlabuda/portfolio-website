import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';
import HexagonParticlesBackground from '../../components/HexagonParticlesBackground';

export const metadata = {
  title: 'Event-Driven ML Pipeline with Vertex AI | Alex Labuda',
  description: 'Case study on building an event-driven machine learning pipeline with Vertex AI and LLMs for real-time call transcript analysis for a custom closet company',
};

export default function EventDrivenMLPipelinePage() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      {/* Top section with Hexagon particles - only for header through Business Challenge */}
      <div className="relative w-full mb-16">
        <HexagonParticlesBackground />
        
        {/* Semi-transparent Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900/90 via-accent-800/80 to-gray-900/70 z-10"></div>

        {/* Content container */}
        <div className="relative py-12 z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <Link href="/projects" className="text-primary-600 hover:text-primary-700 mb-4 flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-6">Event-Driven ML Pipeline with Vertex AI and LLMs</h1>
              <p className="mt-4 text-lg text-gray-700">
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
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2>Project Overview</h2>
                <p>
                  This project involved designing and implementing an end-to-end event-driven machine learning 
                  pipeline for a leading custom closet company with 65 retail locations across the United States. 
                  The system processes inbound call center transcripts by integrating a call tracking platform, 
                  Google Cloud Platform services, and Vertex AI with large language models for sophisticated 
                  classification and analysis.
                </p>
                <p>
                  The solution captures call transcripts in real-time from a call center tracking platform, automatically 
                  processes them using a Pub/Sub triggered pipeline, and classifies them according to business type, 
                  product interest, purchase intent, and appointment details. This enriched data fuels personalized 
                  customer communications and recommendations across digital touchpoints, significantly improving 
                  conversion rates and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Business Challenge */}
            <div className="mb-16 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
                <h2>Business Challenge</h2>
                <p>
                  The client faced several challenges processing the high volume of inbound sales calls:
                </p>
                <ul>
                  <li>Manual review of 5,000+ weekly call transcripts was time-consuming and inconsistent</li>
                  <li>No automated way to extract actionable insights from customer conversations</li>
                  <li>Manual follow-up processes that missed key sales opportunities</li>
                  <li>Inability to target marketing emails based on expressed customer interests from calls</li>
                  <li>Lack of integration between call tracking data and customer relationship management systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of content without background image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Architecture */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2>Solution Architecture</h2>
            <p className="mb-8">
              I designed and implemented a fully event-driven architecture on Google Cloud Platform that processes call transcripts in real-time:
            </p>

            {/* Architecture Diagram */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-full lg:min-w-0 py-4">
                <div className="relative bg-white p-6 rounded-lg">
                  {/* SVG Node-Arc Diagram */}
                  <svg className="w-full h-auto" viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background grid pattern */}
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="1"/>
                    </pattern>
                    <rect width="900" height="400" fill="url(#grid)" />
                    
                    {/* Call Tracking Platform Node */}
                    <rect x="40" y="150" width="120" height="60" rx="8" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2"/>
                    <rect x="40" y="150" width="120" height="60" rx="8" fill="url(#callGradient)" fillOpacity="0.9"/>
                    <text x="100" y="175" textAnchor="middle" fill="#4A5568" fontWeight="600" fontSize="12">Call Tracking</text>
                    <text x="100" y="195" textAnchor="middle" fill="#4A5568" fontSize="12">Platform</text>
                    
                    {/* Cloud Functions Node */}
                    <rect x="240" y="150" width="120" height="60" rx="8" fill="#EBF4FF" stroke="#C3DAFE" strokeWidth="2"/>
                    <text x="300" y="175" textAnchor="middle" fill="#4C51BF" fontWeight="600" fontSize="12">Cloud</text>
                    <text x="300" y="195" textAnchor="middle" fill="#4C51BF" fontSize="12">Functions</text>
                    
                    {/* BigQuery Node */}
                    <rect x="240" y="270" width="120" height="60" rx="8" fill="#EBF8FF" stroke="#BEE3F8" strokeWidth="2"/>
                    <text x="300" y="295" textAnchor="middle" fill="#2B6CB0" fontWeight="600" fontSize="12">BigQuery</text>
                    <text x="300" y="315" textAnchor="middle" fill="#2B6CB0" fontSize="12">Data Storage</text>
                    
                    {/* Pub/Sub Node */}
                    <rect x="440" y="270" width="120" height="60" rx="8" fill="#F0FFF4" stroke="#C6F6D5" strokeWidth="2"/>
                    <text x="500" y="295" textAnchor="middle" fill="#276749" fontWeight="600" fontSize="12">Cloud</text>
                    <text x="500" y="315" textAnchor="middle" fill="#276749" fontSize="12">Pub/Sub</text>
                    
                    {/* KubeFlow Node */}
                    <rect x="440" y="150" width="120" height="60" rx="8" fill="#FAF5FF" stroke="#E9D8FD" strokeWidth="2"/>
                    <text x="500" y="175" textAnchor="middle" fill="#6B46C1" fontWeight="600" fontSize="12">KubeFlow</text>
                    <text x="500" y="195" textAnchor="middle" fill="#6B46C1" fontSize="12">Pipelines</text>
                    
                    {/* LLM / Vertex AI Node */}
                    <rect x="640" y="150" width="120" height="60" rx="8" fill="#FFF5F5" stroke="#FED7D7" strokeWidth="2"/>
                    <text x="700" y="175" textAnchor="middle" fill="#C53030" fontWeight="600" fontSize="12">Vertex AI</text>
                    <text x="700" y="195" textAnchor="middle" fill="#C53030" fontSize="12">Gemini 1.5 Pro</text>
                    
                    {/* Customer Data Platform Node */}
                    <rect x="640" y="270" width="120" height="60" rx="8" fill="#FFFAF0" stroke="#FEEBC8" strokeWidth="2"/>
                    <text x="700" y="295" textAnchor="middle" fill="#C05621" fontWeight="600" fontSize="12">Customer Data</text>
                    <text x="700" y="315" textAnchor="middle" fill="#C05621" fontSize="12">Platform</text>
                    
                    {/* Email Marketing System Node */}
                    <rect x="740" y="60" width="120" height="60" rx="8" fill="#F0F4F8" stroke="#CBD5E0" strokeWidth="2"/>
                    <text x="800" y="85" textAnchor="middle" fill="#2D3748" fontWeight="600" fontSize="12">Email Marketing</text>
                    <text x="800" y="105" textAnchor="middle" fill="#2D3748" fontSize="12">System</text>
                    
                    {/* PRIMARY FLOW PATHS */}
                    {/* Call Tracking to Cloud Functions - webhook trigger */}
                    <path d="M 160 180 L 240 180" stroke="#4C51BF" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Cloud Functions to BigQuery - store transcript */}
                    <path d="M 300 210 L 300 270" stroke="#2B6CB0" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* BigQuery to Pub/Sub - new data notification */}
                    <path d="M 360 300 L 440 300" stroke="#276749" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Pub/Sub to KubeFlow - trigger pipeline */}
                    <path d="M 500 270 L 500 210" stroke="#6B46C1" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* KubeFlow to Vertex AI - ML processing */}
                    <path d="M 560 180 L 640 180" stroke="#C53030" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Vertex AI back to KubeFlow - classification results */}
                    <path d="M 640 160 C 610 160 590 140 560 140" stroke="#C53030" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* KubeFlow to BigQuery - write enriched data */}
                    <path d="M 440 170 C 400 170 370 220 360 270" stroke="#2B6CB0" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* BigQuery to Customer Data Platform - access enriched data */}
                    <path d="M 360 310 C 400 350 600 350 640 300" stroke="#C05621" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Customer Data Platform to Email Marketing - personalized campaigns */}
                    <path d="M 700 270 C 730 230 750 150 800 120" stroke="#2D3748" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* FEEDBACK/RESPONSE PATHS */}
                    {/* Cloud Functions to Call Tracking - webhook acknowledgment */}
                    <path d="M 240 160 C 200 150 180 150 160 160" stroke="#4A5568" strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arrowhead)"/>
                    
                    {/* Arrowhead and gradient definitions */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                      </marker>
                      
                      <linearGradient id="callGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF5F7" />
                        <stop offset="100%" stopColor="#FED7E2" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Updated Legend with flow description */}
                  <div className="flex flex-wrap gap-4 mt-6 justify-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#FFF5F7] border border-[#FED7E2] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">External System</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#EBF4FF] border border-[#C3DAFE] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">GCP Processing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#EBF8FF] border border-[#BEE3F8] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">Data Storage</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#F0FFF4] border border-[#C6F6D5] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">Event Messaging</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#FAF5FF] border border-[#E9D8FD] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">ML Orchestration</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#FFF5F5] border border-[#FED7D7] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">AI/ML Models</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#FFFAF0] border border-[#FEEBC8] rounded-sm mr-2"></div>
                      <span className="text-xs text-gray-600">Data Activation</span>
                    </div>
                  </div>
                  
                  {/* Flow sequence description */}
                  <div className="mt-6 text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
                    <p><strong>Data Flow:</strong> Calls are transcribed by the Call Tracking Platform → transcripts sent to Cloud Functions → stored in BigQuery → Pub/Sub notifies of new data → KubeFlow orchestrates ML processing → Vertex AI analyzes transcripts → results stored back in BigQuery → Customer Data Platform activates data → personalized emails sent</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="mt-8">Pipeline Workflow</h3>
            <ol className="list-decimal pl-5">
              <li>Call tracking platform captures inbound call audio and transcribes conversations</li>
              <li>Webhook triggers send transcript data to Google Cloud Platform</li>
              <li>Cloud Functions process the incoming webhook data and load it into BigQuery</li>
              <li>New transcript records in BigQuery trigger a Pub/Sub notification</li>
              <li>Pub/Sub message initiates the KubeFlow pipeline using Vertex AI Pipelines</li>
              <li>The pipeline exports transcript data, processes it with Gemini 1.5 Pro to classify:</li>
              <ul className="list-disc pl-5">
                <li>Business type (new vs. existing)</li>
                <li>Product interest (closet type, home office, garage, etc.)</li>
                <li>Purchase intent (information seeking vs. action taking)</li>
                <li>Appointment status (including cancellations)</li>
              </ul>
              <li>Classification results are loaded back into BigQuery</li>
              <li>Customer data platform accesses the enriched data to power personalized communications</li>
            </ol>
          </div>
        </div>

        {/* Machine Learning Implementation */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2>Machine Learning Implementation</h2>
            <p>
              The core of the solution leveraged Vertex AI and Gemini large language models to analyze call transcripts:
            </p>
            <ul>
              <li><strong className="text-gray-900">Model Selection:</strong> Utilized Gemini 1.5 Pro for its superior ability to understand conversational context and nuances in call transcripts</li>
              <li><strong className="text-gray-900">Prompt Engineering:</strong> Designed specialized prompts for each classification task using LangChain to achieve high accuracy in transcript analysis</li>
              <li><strong className="text-gray-900">Multi-label Classification:</strong> Developed four distinct classification chains:</li>
              <ul className="list-disc pl-5">
                <li>Business Type: Determining if calls represent new or existing business</li>
                <li>Product Interest: Identifying specific product categories discussed (closets, home offices, garages, etc.)</li>
                <li>Purchase Intent: Classifying intent as information-seeking or action-taking</li>
                <li>Appointment Status: Detecting cancellations to trigger follow-up workflows</li>
              </ul>
              <li><strong className="text-gray-900">Safety Mechanisms:</strong> Configured safety settings to enable business classification while preventing inappropriate content</li>
              <li><strong className="text-gray-900">Data Preprocessing:</strong> Implemented text normalization, special character removal, and standardization techniques</li>
              <li><strong className="text-gray-900">Validation System:</strong> Created a fuzzy matching validation process to correct classification outputs that didn't match predefined categories</li>
              <li><strong className="text-gray-900">Pipeline Automation:</strong> Built a three-step Vertex AI Pipeline that:</li>
              <ol className="list-decimal pl-5">
                <li>Exports transcript data from BigQuery</li>
                <li>Processes transcripts through classification models</li>
                <li>Loads enriched data back to BigQuery for activation</li>
              </ol>
              <li><strong className="text-gray-900">Model Versioning:</strong> Established CI/CD processes for prompt updates and model improvement with automated A/B testing</li>
            </ul>
            <p>
              This approach allowed us to process thousands of call transcripts weekly with minimal human intervention, achieving high classification accuracy while maintaining flexibility to adapt to changing business needs.
            </p>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-accent-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Engagement Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">Email Engagement</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-medium text-accent-700">Significant Increase</span>
              </div>
              <p className="text-gray-700">Personalized email campaigns based on call transcript insights led to substantially higher open and click-through rates.</p>
            </div>

            {/* Conversion Optimization Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Conversion Optimization</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="font-medium text-accent-700">Notable Improvement</span>
              </div>
              <p className="text-gray-700">Enhanced follow-up processes and targeted content based on call intent classification improved website-to-appointment conversion rates.</p>
            </div>

            {/* Opportunity Recovery Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Opportunity Recovery</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-medium text-accent-700">Substantial Reduction</span>
              </div>
              <p className="text-gray-700">Automated follow-up system for high-intent calls that didn't convert to appointments resulted in fewer missed sales opportunities.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-accent-300">Results projected based on initial implementation and pilot program data</p>
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2>Technical Challenges</h2>
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
      </div>

      {/* Move the background section outside the container to make it full-width */}
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
        <div className="absolute inset-0 bg-white bg-opacity-75"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technologies Used section with card version */}
          <div className="mb-16 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Technologies Used</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* GCP Core group */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <span className="text-sm">Cloud Pub/Sub</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm">Cloud Functions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ML Platform group */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-md overflow-hidden">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Gemini 1.5 Pro</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="text-sm">LangChain</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="text-sm">KubeFlow Pipelines</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Development group */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-md overflow-hidden">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-sm">FuzzyWuzzy</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-sm">Secret Manager</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Integration group */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-md overflow-hidden">
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
                      <svg className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                      <span className="text-sm">Cloud Storage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Delete this Conclusion section and replace with the earlier one */}
          <div className="mb-16 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
              <h2>Conclusion</h2>
              <p>
                This project demonstrates the power of combining event-driven architecture with advanced machine learning 
                to transform unstructured conversation data into actionable business intelligence. The solution successfully:
              </p>
              <ul>
                <li>Automated the classification of 5,000+ weekly call transcripts with high accuracy</li>
                <li>Reduced the time from call completion to data availability from days to minutes</li>
                <li>Enabled personalized marketing campaigns based on specific product interests expressed during calls</li>
                <li>Improved sales follow-up by automatically identifying high-intent prospects</li>
                <li>Created a unified view of customer interactions across digital and voice channels</li>
                <li>Provided retail locations with better insights into customer needs and preferences</li>
              </ul>
              <p>
                Beyond the immediate business impact, this project showcases how modern cloud infrastructure, event-based 
                architectures, and large language models can be combined to solve complex business problems in a scalable, 
                cost-effective manner. The fully automated pipeline continues to process thousands of calls weekly with 
                minimal maintenance, delivering consistent value to the business.
              </p>
            </div>
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