import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from './utils/paths';
import ParticlesBackground from '@/app/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section with Particles */}
      <section className="bg-gradient-primary relative py-20 sm:py-24">
        <ParticlesBackground />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block rounded-full overflow-hidden border-4 border-white/50 w-32 h-32 mb-6 relative">
            <Image 
              src={getAssetPath('/images/headshot-portfolio.jpeg')}
              alt="Alex Labuda"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Alex Labuda
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
            Senior Data Scientist specializing in machine learning, predictive modeling, and MLOps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Areas of Expertise</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              I build end-to-end machine learning solutions that drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise Card 1 */}
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600">
                Developing and deploying predictive models, unsupervised learning solutions, and 
                recommendation systems using Python and scikit-learn.
              </p>
            </div>

            {/* Expertise Card 2 */}
            <div className="bg-accent-50 rounded-lg p-6">
              <div className="h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">MLOps</h3>
              <p className="text-gray-600">
                Building robust ML pipelines with automated testing, deployment, and monitoring 
                using Google Cloud Platform and Vertex AI.
              </p>
            </div>

            {/* Expertise Card 3 */}
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Visualization</h3>
              <p className="text-gray-600">
                Creating interactive dashboards and visualizations that communicate insights 
                effectively using Tableau and Python visualization libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Some of my recent work in machine learning and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary-50 h-48 relative">
                <Image 
                  src={getAssetPath('/images/2024_09-AI-Engineering-Sentiment-Analysis.png')}
                  alt="Event-Driven ML Pipeline"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Event-Driven ML Pipeline with Vertex AI</h3>
                <p className="text-gray-600 mb-4">
                  Real-time machine learning pipeline for processing and analyzing call center transcripts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">GCP</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">NLP</span>
                </div>
                <Link 
                  href="/projects" 
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  View details →
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-accent-50 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-accent-700 font-medium">Customer Segmentation</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unsupervised Learning for Sports Streaming</h3>
                <p className="text-gray-600 mb-4">
                  Customer segmentation pipeline identifying distinct viewer personas for content recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">Clustering</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">BigQuery</span>
                </div>
                <Link 
                  href="/projects" 
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  View details →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The tools and technologies I use to build data science solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-primary-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">Python</h3>
              <p className="text-sm text-gray-600">scikit-learn, pandas, numpy</p>
            </div>
            <div className="bg-accent-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">R</h3>
              <p className="text-sm text-gray-600">tidyverse, caret, ggplot2</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">SQL</h3>
              <p className="text-sm text-gray-600">BigQuery, PostgreSQL</p>
            </div>
            <div className="bg-accent-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">Tableau</h3>
              <p className="text-sm text-gray-600">Dashboard design, ETL</p>
            </div>
            <div className="bg-accent-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">Google Cloud</h3>
              <p className="text-sm text-gray-600">Vertex AI, BigQuery</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">Machine Learning</h3>
              <p className="text-sm text-gray-600">Supervised, Unsupervised</p>
            </div>
            <div className="bg-accent-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">NLP</h3>
              <p className="text-sm text-gray-600">BERT, LLMs, Transformers</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg text-center">
              <h3 className="font-bold text-gray-900">MLOps</h3>
              <p className="text-sm text-gray-600">CI/CD, Model Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            I'm currently available for new opportunities and collaborations
            in data science and machine learning.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
