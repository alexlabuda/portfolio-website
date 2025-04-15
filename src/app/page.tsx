import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from './utils/paths';
import ParticlesBackground from '@/app/components/ParticlesBackground';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import { FaCode, FaEnvelope, FaChartBar } from 'react-icons/fa';
import { TableauFeature } from '@/app/components/TableauFeature';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section with Particles */}
      <section className="bg-gradient-primary relative py-20 sm:py-24 mt-1" id="home" aria-labelledby="hero-heading">
        <ParticlesBackground />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-[5]">
          <div className="inline-block rounded-full overflow-hidden border-4 border-white/50 w-32 h-32 mb-6 relative">
            <Image 
              src={getAssetPath('/images/headshot-portfolio.jpeg')}
              alt="Alex Labuda - Senior Data Scientist"
              fill
              style={{ objectFit: "cover" }}
              priority
              itemProp="image"
            />
          </div>
          <h1 
            id="hero-heading" 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
            itemProp="name"
          >
            Alex Labuda
          </h1>
          <div 
            itemScope 
            itemType="https://schema.org/Person"
            className="mt-0"
          >
            <meta itemProp="name" content="Alex Labuda" />
            <meta itemProp="jobTitle" content="Senior Data Scientist" />
            <meta itemProp="url" content="https://www.alex-labuda.com" />
            <p 
              className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto"
              itemProp="description"
            >
              Senior Data Scientist specializing in machine learning, predictive modeling, and MLOps.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <AnimatedButton 
              href="/projects"
              text="View Projects"
              icon={<FaCode className="w-5 h-5" />}
              className="max-w-[200px]"
            />
            <AnimatedButton 
              href="/contact"
              text="Get in Touch"
              icon={<FaEnvelope className="w-5 h-5" />}
              className="max-w-[200px] !bg-white !text-primary-600 hover:!bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white" id="expertise-areas" aria-labelledby="expertise-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              id="expertise-heading" 
              className="text-3xl font-bold text-gray-900"
            >
              Areas of Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              I build end-to-end machine learning solutions that drive measurable business results.
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            {/* Expertise Card 1 */}
            <div 
              className="bg-primary-50 rounded-lg p-6"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <meta itemProp="position" content="1" />
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">Machine Learning</h3>
              <p className="text-gray-600" itemProp="description">
                Developing and deploying predictive models, unsupervised learning solutions, time-series forecasting, and 
                recommendation systems using modern data science frameworks and programming languages.
              </p>
            </div>

            {/* Expertise Card 2 */}
            <div 
              className="bg-accent-50 rounded-lg p-6"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <meta itemProp="position" content="2" />
              <div className="h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">MLOps</h3>
              <p className="text-gray-600" itemProp="description">
                Building robust end-to-end ML pipelines with automated testing, deployment, and monitoring 
                using Google Cloud Platform and Vertex AI.
              </p>
            </div>

            {/* Expertise Card 3 */}
            <div 
              className="bg-primary-50 rounded-lg p-6"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <meta itemProp="position" content="3" />
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">Data Visualization</h3>
              <p className="text-gray-600" itemProp="description">
                Creating interactive dashboards and visualizations that communicate insights 
                effectively using Tableau, Shiny and Quarto Dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50" id="data-science-projects" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              id="projects-heading" 
              className="text-3xl font-bold text-gray-900"
            >
              Machine Learning & Data Science Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio of end-to-end machine learning solutions and advanced data science projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <Link 
              href="/projects/event-driven-ml-pipeline"
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] cursor-pointer"
              aria-labelledby="project-1-title"
              itemScope 
              itemType="https://schema.org/CreativeWork"
            >
              <div className="bg-primary-50 h-48 relative">
                <Image 
                  src={getAssetPath('/images/2024_09-AI-Engineering-Sentiment-Analysis.png')}
                  alt="Event-Driven ML Pipeline for Call Transcript Classification using Vertex AI and Gemini"
                  fill
                  style={{ 
                    objectFit: "cover", 
                    objectPosition: "center",
                    maxWidth: "72%",
                    maxHeight: "100%"
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="p-4 m-auto"
                  itemProp="image"
                />
              </div>
              <div className="p-6">
                <h3 
                  id="project-1-title" 
                  className="text-xl font-bold text-gray-900 mb-2"
                  itemProp="name"
                >
                  Event-Driven Call Transcript Classification Pipeline with Vertex AI and Gemini
                </h3>
                <p className="text-gray-600 mb-4" itemProp="description">
                  Real-time machine learning pipeline for processing and classifying call center transcripts for CDP activation. This solution leverages GCP's event architecture for seamless processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Vertex AI</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Kubeflow</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Gemini</span>
                </div>
                <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center">
                  View project details
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Project Card 2 */}
            <Link 
              href="/projects/unsupervised-learning-sports-streaming"
              className="group bg-white rounded-lg shadow-lg overflow-hidden relative transform transition duration-300 hover:scale-[1.02] cursor-pointer"
              aria-labelledby="project-2-title"
              itemScope 
              itemType="https://schema.org/CreativeWork"
            >
              <div className="bg-accent-50 h-48 relative">
                <Image 
                  src={getAssetPath('/images/customer-segmentation.png')}
                  alt="K-Means Customer Segmentation Pipeline for Sports Streaming Platform"
                  fill
                  style={{ 
                    objectFit: "contain", 
                    objectPosition: "center",
                    maxWidth: "100%",
                    maxHeight: "100%"
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="p-4 m-auto"
                  itemProp="image"
                />
              </div>
              <div className="p-6">
                <h3 
                  id="project-2-title" 
                  className="text-xl font-bold text-gray-900 mb-2"
                  itemProp="name"
                >
                  Customer Segmentation Pipeline with K-Means and Feature Engineering for a Streaming Platform
                </h3>
                <p className="text-gray-600 mb-4" itemProp="description">
                  Advanced customer segmentation pipeline identifying distinct viewer personas for content recommendations and personalization. Implemented in GCP's Vertex AI pipelines.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">scikit-learn</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">BigQuery</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Kubeflow</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Vertex AI</span>
                </div>
                <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center">
                  View project details
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <AnimatedButton 
              href="/projects"
              text="View All Data Science Projects"
              icon={<FaCode className="w-5 h-5" />}
              className="max-w-[260px] mx-auto"
            />
            <div className="mt-4">
              <AnimatedButton 
                href="/visualizations"
                text="Explore Tableau Visualizations"
                icon={<FaChartBar className="w-5 h-5" />}
                className="max-w-[280px] mx-auto !bg-accent-500 hover:!bg-accent-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white" id="technical-skills" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="skills-heading" className="text-3xl font-bold text-gray-900">Technical Skills</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The tools and technologies I use to build data science solutions.
            </p>
          </div>

          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            <div 
              className="bg-primary-50 p-4 rounded-lg text-center" 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="1" />
              <h3 className="font-bold text-gray-900" itemProp="name">Python</h3>
              <p className="text-sm text-gray-600" itemProp="description">langchain, scikit-learn, pandas, numpy</p>
            </div>
            <div 
              className="bg-accent-50 p-4 rounded-lg text-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="2" />
              <h3 className="font-bold text-gray-900" itemProp="name">R</h3>
              <p className="text-sm text-gray-600" itemProp="description">tidyverse, tidymodels, ggplot2, shiny</p>
            </div>
            <div 
              className="bg-primary-50 p-4 rounded-lg text-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="3" />
              <h3 className="font-bold text-gray-900" itemProp="name">SQL</h3>
              <p className="text-sm text-gray-600" itemProp="description">BigQuery, Snowflake</p>
            </div>
            <TableauFeature />
            <div 
              className="bg-accent-50 p-4 rounded-lg text-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="5" />
              <h3 className="font-bold text-gray-900" itemProp="name">Google Cloud</h3>
              <p className="text-sm text-gray-600" itemProp="description">Vertex AI, BigQuery, Pub/Sub, Cloud Functions</p>
            </div>
            <div 
              className="bg-primary-50 p-4 rounded-lg text-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="6" />
              <h3 className="font-bold text-gray-900" itemProp="name">Machine Learning</h3>
              <p className="text-sm text-gray-600" itemProp="description">Supervised, Unsupervised, Time-Series Forecasting</p>
            </div>
            <div 
              className="bg-accent-50 p-4 rounded-lg text-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="7" />
              <h3 className="font-bold text-gray-900" itemProp="name">AI</h3>
              <p className="text-sm text-gray-600" itemProp="description">LLMs, RAG, Embeddings, Agents</p>
            </div>
            <div 
              className="bg-primary-50 p-4 rounded-lg text-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="8" />
              <h3 className="font-bold text-gray-900" itemProp="name">Media Mix Modeling</h3>
              <p className="text-sm text-gray-600" itemProp="description">Robyn, Bayesian, Multi-Touch Attribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary" id="contact-cta" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="cta-heading" 
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Ready to Work Together?
          </h2>
          <div 
            itemScope 
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="name" content="Data Science Consulting" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <p 
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-8"
              itemProp="description"
            >
              I'm currently available for new opportunities and collaborations
              in data science and machine learning.
            </p>
            <div itemProp="offeredBy" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Alex Labuda" />
              <meta itemProp="jobTitle" content="Senior Data Scientist" />
            </div>
          </div>
          <AnimatedButton 
            href="/contact"
            text="Get in Touch"
            icon={<FaEnvelope className="w-5 h-5" />}
            className="max-w-[200px] mx-auto !bg-white !text-primary-600 hover:!bg-gray-100"
          />
        </div>
      </section>
    </main>
  );
}
