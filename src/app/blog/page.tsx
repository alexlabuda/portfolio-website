import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Alex Labuda',
  description: 'Data science and machine learning articles by Alex Labuda - ML Engineer and Tableau Developer',
};

export default function BlogPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on machine learning, MLOps, data science, and visualization
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="relative h-48 bg-gray-200">
              <Image
                src="/images/ml-pipeline-blog.jpg"
                alt="ML Pipeline Architecture"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  MLOps
                </span>
                <span className="ml-3 text-sm text-gray-500">March 15, 2024</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
                Building Event-Driven ML Pipelines with Vertex AI
              </h2>
              <p className="mt-3 text-gray-600 line-clamp-3">
                A comprehensive guide to creating scalable, event-driven machine learning pipelines 
                using Google Cloud Platform&apos;s Vertex AI. Learn how to set up real-time inference, 
                model monitoring, and automated retraining workflows.
              </p>
              <div className="mt-6">
                <Link 
                  href="/blog/event-driven-ml-pipelines" 
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="relative h-48 bg-gray-200">
              <Image
                src="/images/time-series-forecast.jpg"
                alt="Time Series Forecasting"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Time Series
                </span>
                <span className="ml-3 text-sm text-gray-500">February 28, 2024</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
                Advanced Media Mix Modeling Techniques for Marketing Analytics
              </h2>
              <p className="mt-3 text-gray-600 line-clamp-3">
                Explore advanced approaches to media mix modeling that go beyond traditional 
                methods. This article covers incorporating seasonality, addressing attribution 
                windows, and measuring long-term brand effects in your marketing analytics models.
              </p>
              <div className="mt-6">
                <Link 
                  href="/blog/advanced-media-mix-modeling" 
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p className="text-center">Tableau Dashboard</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Data Visualization
                </span>
                <span className="ml-3 text-sm text-gray-500">January 12, 2024</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
                Designing Effective Interactive Dashboards in Tableau
              </h2>
              <p className="mt-3 text-gray-600 line-clamp-3">
                Learn how to create compelling, interactive Tableau dashboards that tell a 
                story with your data. This tutorial covers dashboard layout principles, 
                interactive filtering, action hierarchies, and performance optimization.
              </p>
              <div className="mt-6">
                <Link 
                  href="/blog/effective-tableau-dashboards" 
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p className="text-center">Clustering Diagram</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Unsupervised Learning
                </span>
                <span className="ml-3 text-sm text-gray-500">December 5, 2023</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
                Practical Guide to Customer Segmentation with Python
              </h2>
              <p className="mt-3 text-gray-600 line-clamp-3">
                A detailed walkthrough of implementing customer segmentation using unsupervised 
                learning techniques in Python. From data preparation to model evaluation and 
                interpretation, learn how to extract actionable customer insights.
              </p>
              <div className="mt-6">
                <Link 
                  href="/blog/customer-segmentation-python" 
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p className="text-center">LLM Architecture</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  NLP
                </span>
                <span className="ml-3 text-sm text-gray-500">November 18, 2023</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
                Implementing LLMs for Text Classification: A Practical Approach
              </h2>
              <p className="mt-3 text-gray-600 line-clamp-3">
                Discover how to leverage large language models for text classification tasks. 
                This article covers fine-tuning strategies, prompt engineering, and deployment 
                considerations when working with modern LLMs.
              </p>
              <div className="mt-6">
                <Link 
                  href="/blog/llms-text-classification" 
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p className="text-center">CI/CD Pipeline</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  MLOps
                </span>
                <span className="ml-3 text-sm text-gray-500">October 30, 2023</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
                From Jupyter to Production: A Guide to ML Model Deployment
              </h2>
              <p className="mt-3 text-gray-600 line-clamp-3">
                Bridge the gap between exploratory data analysis and production-ready ML 
                models. Learn best practices for code refactoring, testing, CI/CD pipelines, 
                and monitoring when transitioning models to production environments.
              </p>
              <div className="mt-6">
                <Link 
                  href="/blog/jupyter-to-production" 
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-indigo-50 rounded-lg py-10 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Subscribe to the newsletter</h2>
            <p className="mt-3 text-lg text-gray-600">
              Get notified when I publish new articles on machine learning, data science, and MLOps.
            </p>
            <div className="mt-8 sm:flex sm:justify-center">
              <div className="sm:flex-1 max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  No spam, just data science content. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 