import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Alex Labuda',
  description: 'Get in touch with Alex Labuda, Senior Data Scientist',
};

export default function ContactPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Me</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question or want to discuss a potential project? Feel free to reach out!
          </p>
        </div>

        <div className="lg:flex lg:gap-12 items-start">
          <div className="lg:w-2/5">
            <div className="mb-10 bg-primary-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FaEnvelope className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:alex@example.com" 
                      className="text-gray-600 hover:text-primary-600"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FaLinkedin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/alexlabuda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      linkedin.com/in/alexlabuda
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FaGithub className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">GitHub</p>
                    <a 
                      href="https://github.com/alexlabuda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      github.com/alexlabuda
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FaTwitter className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Twitter</p>
                    <a 
                      href="https://twitter.com/alexlabuda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      @alexlabuda
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h2>
              <p className="text-gray-600 mb-4">
                I'm available for virtual meetings during the following hours:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM EST</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                For urgent inquiries outside of these hours, please email me directly.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                    I agree to receiving communications from Alex Labuda
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-primary-50 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-l-4 border-primary-500">
                <h3 className="text-lg font-medium text-gray-900">Are you available for freelance work?</h3>
              </div>
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  Yes, I am available for select freelance opportunities that align with my expertise in 
                  data science, machine learning, and advanced analytics. Feel free to contact me with project details.
                </p>
              </div>
            </div>
            
            <div className="bg-accent-50 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-l-4 border-accent-500">
                <h3 className="text-lg font-medium text-gray-900">What types of projects do you typically work on?</h3>
              </div>
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  I specialize in developing end-to-end machine learning solutions, including predictive modeling, 
                  customer segmentation, time-series forecasting, and building MLOps pipelines. I'm particularly 
                  experienced in projects involving Python, R, SQL, and Google Cloud Platform.
                </p>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-l-4 border-primary-500">
                <h3 className="text-lg font-medium text-gray-900">How quickly can you respond to inquiries?</h3>
              </div>
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  I typically respond to all inquiries within 24-48 hours during business days. For urgent matters, 
                  please indicate so in your message, and I'll do my best to get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 