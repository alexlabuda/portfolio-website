import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCode, FaFileAlt, FaPython, FaChartLine, FaListUl, FaEnvelope } from 'react-icons/fa';
import { RiRobot2Line } from 'react-icons/ri';
import { SiGooglecloud } from 'react-icons/si';
import { getAssetPath } from '@/app/utils/paths';
import type { Metadata } from 'next';
import HexagonParticlesBackground from '../../components/HexagonParticlesBackground';
import { AnimatedButton } from '@/app/components/AnimatedButton';
import TableOfContents from '@/app/components/TableOfContents';
import ScrollToTop from '@/app/components/ScrollToTop';
import GradientReadingProgressBar from '@/app/components/GradientReadingProgressBar';

export const metadata: Metadata = {
  title: 'Media Mix Modeling for Home Services Marketing | Alex Labuda',
  description: 'Case study: Using Meta\'s Robyn and R to maximize marketing ROI for a $300M home services client, resulting in 44% YoY lead growth in optimized markets.',
  keywords: 'Media Mix Modeling, Robyn, Marketing Analytics, Time Series Forecasting, ROI Optimization, R, Meta Robyn, Home Services, Data Science',
  openGraph: {
    title: 'Media Mix Modeling for Home Services Marketing | Alex Labuda',
    description: 'Case study: Using Meta\'s Robyn and custom data pipelines to maximize marketing ROI for a home services client, resulting in 44% YoY lead growth.',
    images: [
      {
        url: 'https://www.alex-labuda.com/images/MixMediaModeling.png',
        width: 1200,
        height: 630,
        alt: 'Media Mix Modeling Dashboard for Home Services Marketing',
      },
    ],
  },
};

export default function MediaMixModelingPage() {
  // Technology stacks for the project
  const techStacks = [
    {
      title: "Cloud Infrastructure",
      icon: <SiGooglecloud className="h-6 w-6 text-blue-600" />,
      items: ["Google Cloud Platform", "Cloud Storage", "Vertex AI Notebooks & Pipelines"]
    },
    {
      title: "Modeling & ML",
      icon: <RiRobot2Line className="h-6 w-6 text-purple-600" />,
      items: ["Meta's Robyn", "Optimization", "Time Series Regression", "Adstock & Saturation Curves"]
    },
    {
      title: "Development",
      icon: <FaCode className="h-6 w-6 text-green-600" />,
      items: ["R", "Prophet", "Dplyr", "ggplot2"]
    },
    {
      title: "Data Inputs",
      icon: <FaFileAlt className="h-6 w-6 text-orange-600" />,
      items: ["TV, Radio, Search, Display", "Weather, Seasonality", "Lead Volume"]
    }
  ];

  return (
    <main
      className="bg-gray-50/40 py-12 sm:py-16 mt-1 relative"
    >
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
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <Link href="/projects" className="text-primary-600 hover:text-primary-700 mb-4 flex items-center">
                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-6">Maximizing Marketing Effectiveness with Media Mix Modeling for a Home Services Leader</h1>
              <p className="mt-4 text-lg text-gray-700">
                Used Meta's Robyn and custom data pipelines to uncover ROI-driving media channels, reduce inefficient TV spend, and improve lead volume by 44% YoY in optimized markets.
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">R</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Robyn</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Prophet</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Media Mix Modeling</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Time Series Regression</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Marketing Analytics</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Optimization</span>
              </div>
              
              {/* Project header image */}
              <div className="mt-6 mb-2">
                <div className="rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-slate-50 to-gray-100 p-6">
                  <div className="text-center text-gray-600 italic">
                    <p className="text-lg font-medium mb-2">Visualization coming soon</p>
                    <p>A Media Mix Modeling dashboard showing marketing channel effectiveness across different media channels.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2 id="project-overview">Project Overview</h2>
                <p>
                  This project focused on helping a $300M annual revenue home services client operating in Houston, Tulsa, and Oklahoma City optimize their marketing strategy. The goal was to evaluate the impact of traditional and digital media channels on lead generation using Media Mix Modeling (MMM). By analyzing historical performance and incorporating environmental and seasonal trends, we delivered evidence-based media budget recommendations to improve ROI and marketing efficiency.
                </p>
                <p>
                  Markets that adopted our recommendations saw a <strong className="text-primary-700">44% year-over-year increase in leads</strong>, outperforming non-optimized markets, which either declined or remained flat.
                </p>
              </div>
            </div>

            {/* Role & Impact */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
                <h2 id="role-impact">Role & Impact</h2>
                <p>
                  As the lead data scientist and project manager, I was responsible for end-to-end execution—from stakeholder alignment and planning to building robust data preprocessing pipelines and implementing the MMM using Meta's Robyn. I worked directly with client stakeholders to validate assumptions, align on KPIs, and ensure the solution would be both technically sound and immediately actionable by the marketing team.
                </p>
              </div>
            </div>

            {/* Business Challenge */}
            <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
                <h2 id="business-challenge">Business Challenge</h2>
                <p>
                  The client faced multiple challenges that hindered data-driven marketing decisions:
                </p>
                <ul>
                  <li>Disjointed data formats and sources with no centralized warehouse</li>
                  <li>No existing performance benchmarks or attribution methodology to guide budget allocation</li>
                  <li>Leadership resistance to change, particularly hesitance to reduce TV spend in favor of digital channels</li>
                </ul>
                <p>
                  These roadblocks made it difficult to evaluate the true effectiveness of media efforts or reallocate spend with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of content without background image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24 relative z-[2]">
        {/* Solution Architecture */}
        <div className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="solution-architecture">Solution Architecture</h2>

            <ul>
              <li><strong className="text-gray-900">Data Ingestion & Preprocessing:</strong> Cleaned and validated disparate media, lead, and weather data from multiple vendors</li>
              <li><strong className="text-gray-900">Modeling Framework:</strong> Meta's Robyn MMM library in R</li>
              <li><strong className="text-gray-900">Insights Activation:</strong> Generated budget allocation scenarios and ROI insights shared with leadership and media buyers</li>
            </ul>
          </div>
        </div>

        {/* Machine Learning Implementation */}
        <div className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="ml-implementation">Machine Learning Implementation</h2>
            <p>
              The core of the solution relied on time-series regression modeling with regularization and business-informed feature engineering:
            </p>
            <ul>
              <li><strong className="text-gray-900">Response Variable:</strong> Daily lead volume</li>
              <li><strong className="text-gray-900">Media Inputs:</strong> Channel-level impressions and spends for TV, search, display, and social
                <ul>
                  <li>Applied adstock transformations to model carryover effects</li>
                  <li>Used diminishing returns curves to capture saturation effects</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Control Variables:</strong> Weather trends, holidays, and seasonality
                <ul>
                  <li>Incorporated cooling/heating degree days to model HVAC demand</li>
                  <li>Captured seasonal patterns relevant to home services</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Optimizer:</strong> Robyn's budget allocator for scenario planning
                <ul>
                  <li>Simulated spend reallocations to maximize expected leads</li>
                  <li>Generated multiple allocation scenarios for business stakeholders</li>
                </ul>
              </li>
              <li><strong className="text-gray-900">Model Validation:</strong> Comprehensive validation approach
                <ul>
                  <li>Evaluated NRMSE, bias metrics, and decomposition reasonability</li>
                  <li>Ensured business interpretability of coefficients</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-accent-50/95 backdrop-blur-sm p-8 rounded-xl mb-12 shadow-lg">
          <h2 id="outcomes" className="text-2xl font-bold text-center mb-8 text-gray-900">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lead Volume Growth Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Lead Volume Growth</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="font-medium text-accent-700">44% YoY Increase</span>
              </div>
              <p className="text-gray-700">Markets that adopted our recommendations saw a significant 44% year-over-year increase in leads, while non-optimized markets declined or remained flat.</p>
            </div>

            {/* TV Spend Reduction Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Optimized TV Budget</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium text-accent-700">28% Reduction</span>
              </div>
              <p className="text-gray-700">Successfully reduced TV spend by 28% without negative performance impact, reallocating budget to higher-performing digital channels.</p>
            </div>

            {/* Digital Channel Growth Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-gray-800">Digital Channel Growth</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-center mb-3 bg-accent-50 py-1.5 px-2 rounded-md">
                <svg className="w-6 h-6 text-accent-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="font-medium text-accent-700">21% Increase</span>
              </div>
              <p className="text-gray-700">Increased digital marketing spend by 21%, strategically allocated to high-performing channels like paid search, which showed higher ROI than traditional media.</p>
            </div>
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="technical-challenges">Technical Challenges</h2>
            <p>
              Implementing this media mix modeling solution required overcoming several complex technical hurdles:
            </p>
            <ul>
              <li><strong className="text-gray-900">Disjointed & Evolving Data Structures:</strong> Required building flexible and robust data preprocessing pipelines that could adapt to new formats and sources as the project evolved.</li>
              
              <li><strong className="text-gray-900">No Centralized Data Warehouse:</strong> Data engineering had to be modular and transparent to support reproducibility, with careful documentation of source transformations.</li>
              
              <li><strong className="text-gray-900">Data Latency & Sparsity:</strong> Marketing data arrived at different cadences with varying levels of detail. We implemented techniques to normalize across time periods and smooth weekly data to increase signal clarity.</li>
              
              <li><strong className="text-gray-900">Adstock Parameter Tuning:</strong> Finding optimal adstock parameters for each channel was computationally intensive. We developed an efficient grid search approach to identify the best hyperparameter combinations.</li>
              
              <li><strong className="text-gray-900">Model Interpretability:</strong> Ensuring stakeholders could understand and trust the model outputs required careful balance between technical sophistication and business relevance in our visualizations and explanations.</li>
            </ul>
          </div>
        </div>

        {/* Design Tradeoffs & Decisions */}
        <div className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
            <h2 id="design-tradeoffs">Design Tradeoffs & Decisions</h2>
            <p>
              Several key architectural and modeling decisions were made to ensure the solution was robust, interpretable, and actionable:
            </p>
            <ul>
              <li><strong className="text-gray-900">Robyn Chosen Over Manual MMM:</strong> Automated hyperparameter tuning and optimizer features allowed for faster iteration and transparent tradeoff analysis than building a custom MMM solution.</li>
              
              <li><strong className="text-gray-900">Impression Data Over Spend:</strong> Modeled exposure metrics to better reflect media consumption patterns, with spend used for ROI calculations, providing more accurate attribution.</li>
              
              <li><strong className="text-gray-900">Environmental Controls Included:</strong> Weather variables significantly improved model accuracy, capturing HVAC seasonality that was critical for this home services business.</li>
              
              <li><strong className="text-gray-900">Stakeholder Communication:</strong> Delivered multiple models and visual summaries to gradually build trust in the data and shift attitudes toward digital media, overcoming initial resistance.</li>
            </ul>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h2 id="technologies" className="text-2xl font-bold text-gray-900 mb-8">Technologies Used</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ML Platform group */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-purple-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">ML & AI</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  {techStacks[1].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-purple-600 mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
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
                  {techStacks[2].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Data Inputs group */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
              <div className="bg-orange-600 text-white py-2 px-4">
                <h3 className="text-base font-semibold">Data Inputs</h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  {techStacks[3].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-orange-600 mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters Sidebar */}
        <div className="mb-12 bg-gradient-to-br from-gray-50/95 to-slate-100/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-200">
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
                  For home services companies, lead generation is everything. Misallocated media spend means missed opportunities. This project proved that smart, data-driven budgeting could dramatically outperform legacy strategies.
                </p>
                <p className="mt-3 text-sm italic text-gray-600 border-l-4 border-primary-200 pl-3">
                  In a competitive home services market, optimizing advertising spend can make the difference between growth and stagnation. Data-driven media allocation helps companies gain market share while reducing wasteful spending.
                </p>
              </div>
            </div>

            {/* ML/Data Science Perspective */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Data Science Perspective</h3>
                <svg className="w-7 h-7 text-accent-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="prose prose-md max-w-none prose-p:text-gray-700">
                <p>
                  MMM showcases how modeling can influence upstream business strategy. By building trust in data and aligning models with business context, data science can shift how organizations allocate millions in ad spend.
                </p>
                <p className="mt-3 text-sm italic text-gray-600 border-l-4 border-accent-200 pl-3">
                  The true value of media mix modeling lies in its ability to quantify the previously unquantifiable—transforming marketing from an art to a data-driven science while still respecting the creative elements that make campaigns successful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-12 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
            <h2 id="conclusion">Conclusion</h2>
            <p>
              This project demonstrates how media mix modeling, powered by structured data engineering and automated modeling techniques, can transform marketing decision-making. By identifying the true impact of each media channel and incorporating environmental influences, the client achieved remarkable results:
            </p>
            <ul>
              <li>Scaled leads by 44% in optimized markets</li>
              <li>Rebalanced budget to higher-performing digital channels</li>
              <li>Built trust in data for future planning cycles</li>
              <li>Established a repeatable methodology for ongoing optimization</li>
            </ul>
            <p>
              The result was a modern, evidence-backed approach to media investment that positioned this legacy home services business for sustainable growth in an increasingly competitive market.
            </p>
          </div>
        </div>
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
          href="mailto:contact@alexlabuda.com?subject=Discussion%20about%20Media%20Mix%20Modeling%20Project"
          text="Discuss This Project"
          icon={<FaEnvelope className="w-5 h-5" />}
          className="max-w-[200px]"
        />
      </div>
    </main>
  );
} 