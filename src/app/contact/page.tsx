"use client";

import { useState, FormEvent, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

type FieldError = {
  message: string;
};

type FormErrors = {
  first_name?: FieldError;
  last_name?: FieldError;
  email?: FieldError;
  subject?: FieldError;
  message?: FieldError;
  terms?: FieldError;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
    terms: true
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const statusRef = useRef<HTMLDivElement>(null);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    // First name validation
    if (!formData.first_name.trim()) {
      errors.first_name = { message: 'First name is required' };
      isValid = false;
    } else if (formData.first_name.trim().length < 2) {
      errors.first_name = { message: 'First name must be at least 2 characters' };
      isValid = false;
    }

    // Last name validation
    if (!formData.last_name.trim()) {
      errors.last_name = { message: 'Last name is required' };
      isValid = false;
    } else if (formData.last_name.trim().length < 2) {
      errors.last_name = { message: 'Last name must be at least 2 characters' };
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = { message: 'Email is required' };
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = { message: 'Invalid email address' };
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = { message: 'Subject is required' };
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      errors.subject = { message: 'Subject must be at least 3 characters' };
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = { message: 'Message is required' };
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = { message: 'Message must be at least 10 characters' };
      isValid = false;
    }

    // Terms validation
    if (!formData.terms) {
      errors.terms = { message: 'You must agree to the terms' };
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      
      // Clear error for this field when changed
      if (formErrors[name as keyof FormErrors]) {
        setFormErrors(prev => ({
          ...prev,
          [name]: undefined
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Clear error for this field when changed
      if (formErrors[name as keyof FormErrors]) {
        setFormErrors(prev => ({
          ...prev,
          [name]: undefined
        }));
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const errors: FormErrors = { ...formErrors };
    
    // Validate individual field on blur
    switch (name) {
      case 'first_name':
        if (!value.trim()) {
          errors.first_name = { message: 'First name is required' };
        } else if (value.trim().length < 2) {
          errors.first_name = { message: 'First name must be at least 2 characters' };
        } else {
          delete errors.first_name;
        }
        break;
      case 'last_name':
        if (!value.trim()) {
          errors.last_name = { message: 'Last name is required' };
        } else if (value.trim().length < 2) {
          errors.last_name = { message: 'Last name must be at least 2 characters' };
        } else {
          delete errors.last_name;
        }
        break;
      case 'email':
        if (!value.trim()) {
          errors.email = { message: 'Email is required' };
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          errors.email = { message: 'Invalid email address' };
        } else {
          delete errors.email;
        }
        break;
      case 'subject':
        if (!value.trim()) {
          errors.subject = { message: 'Subject is required' };
        } else if (value.trim().length < 3) {
          errors.subject = { message: 'Subject must be at least 3 characters' };
        } else {
          delete errors.subject;
        }
        break;
      case 'message':
        if (!value.trim()) {
          errors.message = { message: 'Message is required' };
        } else if (value.trim().length < 10) {
          errors.message = { message: 'Message must be at least 10 characters' };
        } else {
          delete errors.message;
        }
        break;
      case 'terms':
        if (type === 'checkbox' && !(e.target as HTMLInputElement).checked) {
          errors.terms = { message: 'You must agree to the terms' };
        } else {
          delete errors.terms;
        }
        break;
    }
    
    setFormErrors(errors);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      // Focus the first field with an error
      const firstErrorField = Object.keys(formErrors)[0] as keyof FormErrors;
      const element = document.getElementById(firstErrorField === 'terms' ? 'terms' : `${firstErrorField}`);
      if (element) {
        element.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xnnpbnnz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          subject: '',
          message: '',
          terms: true
        });
        setFormErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Scroll status message into view and focus for screen readers
      if (statusRef.current) {
        statusRef.current.focus();
      }
    }
  };

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
                    <FaEnvelope className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:alexlabuda@gmail.com" 
                      className="text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:underline"
                    >
                      alexlabuda@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FaLinkedin className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/alex-labuda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:underline"
                      aria-label="LinkedIn profile, opens in a new tab"
                    >
                      linkedin.com/in/alex-labuda
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FaGithub className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">GitHub</p>
                    <a 
                      href="https://github.com/alexlabuda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:underline"
                      aria-label="GitHub profile, opens in a new tab"
                    >
                      github.com/alexlabuda
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
              <h2 className="text-xl font-bold text-gray-900 mb-6" id="contact-form-heading">Send Me a Message</h2>
              
              <div 
                ref={statusRef}
                aria-live="polite" 
                aria-atomic="true"
                tabIndex={-1}
                className="sr-only"
              >
                {submitStatus === 'success' ? 'Your message has been sent successfully.' : ''}
                {submitStatus === 'error' ? 'There was an error sending your message.' : ''}
              </div>
              
              {submitStatus === 'success' ? (
                <div 
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
                  role="status"
                >
                  <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  aria-labelledby="contact-form-heading"
                  noValidate
                >
                  {submitStatus === 'error' && (
                    <div 
                      className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-4" 
                      role="alert"
                    >
                      <p>There was a problem sending your message. Please try again or email me directly.</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={formErrors.first_name ? "true" : "false"}
                        aria-describedby={formErrors.first_name ? "first_name-error" : undefined}
                        required
                        className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          formErrors.first_name 
                            ? 'border-red-300 text-red-900 placeholder-red-300' 
                            : 'border-gray-300 focus:border-primary-500'
                        }`}
                      />
                      {formErrors.first_name && (
                        <p className="mt-1 text-sm text-red-600" id="first_name-error">
                          {formErrors.first_name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={formErrors.last_name ? "true" : "false"}
                        aria-describedby={formErrors.last_name ? "last_name-error" : undefined}
                        required
                        className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          formErrors.last_name 
                            ? 'border-red-300 text-red-900 placeholder-red-300' 
                            : 'border-gray-300 focus:border-primary-500'
                        }`}
                      />
                      {formErrors.last_name && (
                        <p className="mt-1 text-sm text-red-600" id="last_name-error">
                          {formErrors.last_name.message}
                        </p>
                      )}
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
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={formErrors.email ? "true" : "false"}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      required
                      className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        formErrors.email 
                          ? 'border-red-300 text-red-900 placeholder-red-300' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600" id="email-error">
                        {formErrors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={formErrors.subject ? "true" : "false"}
                      aria-describedby={formErrors.subject ? "subject-error" : undefined}
                      required
                      className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        formErrors.subject 
                          ? 'border-red-300 text-red-900 placeholder-red-300' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-600" id="subject-error">
                        {formErrors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={formErrors.message ? "true" : "false"}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                      required
                      className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        formErrors.message 
                          ? 'border-red-300 text-red-900 placeholder-red-300' 
                          : 'border-gray-300 focus:border-primary-500'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600" id="message-error">
                        {formErrors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field to prevent spam */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex={-1} />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={formErrors.terms ? "true" : "false"}
                        aria-describedby={formErrors.terms ? "terms-error" : undefined}
                        required
                        className={`h-4 w-4 rounded focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                          formErrors.terms 
                            ? 'border-red-300 text-red-600' 
                            : 'border-gray-300 text-primary-600'
                        }`}
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="terms" className={`text-sm ${formErrors.terms ? 'text-red-600' : 'text-gray-600'}`}>
                        I agree to receiving communications from Alex Labuda
                      </label>
                      {formErrors.terms && (
                        <p className="mt-1 text-sm text-red-600" id="terms-error">
                          {formErrors.terms.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className={`btn-primary w-full flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg 
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
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