'use client';

import { useTheme } from '../components/ThemeProvider';

export default function ThemeTestPage() {
  const { theme, themeConfigs } = useTheme();
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Theme Test Page</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
          This page showcases how UI elements look with our color scheme: <span className="font-semibold">{theme}</span>
        </p>
        
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Theme Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Theme Variables</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-500 border border-gray-300 dark:border-gray-600"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Primary (--color-primary-500)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-500 border border-gray-300 dark:border-gray-600"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Accent (--color-accent-500)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white border border-gray-300 dark:border-gray-600"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Background (Light)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-900 border border-gray-300 dark:border-gray-600"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Background (Dark)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Primary Color Palette</h3>
              <div className="flex flex-wrap gap-2">
                <div className="w-10 h-10 rounded bg-primary-50 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-100 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-200 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-300 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-400 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-500 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-600 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-700 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-800 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-primary-900 border border-gray-200 dark:border-gray-700"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">Accent Color Palette</h3>
              <div className="flex flex-wrap gap-2">
                <div className="w-10 h-10 rounded bg-accent-50 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-100 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-200 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-300 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-400 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-500 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-600 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-700 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-800 border border-gray-200 dark:border-gray-700"></div>
                <div className="w-10 h-10 rounded bg-accent-900 border border-gray-200 dark:border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Buttons</h2>
          <div className="space-y-4">
            <div>
              <button className="btn-primary">
                Primary Button
              </button>
            </div>
            <div>
              <button className="btn-secondary">
                Secondary Button
              </button>
            </div>
            <div>
              <button className="btn-outline">
                Outline Button
              </button>
            </div>
            <div>
              <button className="btn-accent">
                Accent Button
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Typography & Links</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Heading</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This is a paragraph with a <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">themed link</a> inside it.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is smaller supporting text.
            </p>
            <div>
              <ul className="pl-5 space-y-1 list-disc">
                <li>List item with <strong>bold text</strong></li>
                <li>Another list item with <em>emphasized text</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gradient Background</h2>
        <div className="space-y-4">
          <div className="h-40 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-gray-800 font-semibold">Background Gradient</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Use the <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">bg-gradient-primary</code> utility class for the gradient background.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="h-3 bg-primary-500"></div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Primary</h3>
            <p className="text-gray-700 dark:text-gray-300">This card uses the primary color in its design.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="h-3 bg-accent-500"></div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Accent</h3>
            <p className="text-gray-700 dark:text-gray-300">This card uses the accent color in its design.</p>
          </div>
        </div>
        
        <div className="bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-50 mb-2">Themed Background</h3>
            <p className="text-primary-800 dark:text-primary-200">This card has a themed background color.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Form Elements</h2>
        <div className="space-y-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="btn-primary w-full flex justify-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 