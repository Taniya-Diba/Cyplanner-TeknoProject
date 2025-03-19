import React from 'react';
import { FaShieldAlt, FaUserLock, FaCookieBite } from 'react-icons/fa';
import Layout from '../components/Layout.jsx';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: `
        <p>We collect several types of information from and about users of our website and mobile application, including:</p>
        <ul>
          <li>Personal information such as name, email address, and phone number when you create an account or make a booking</li>
          <li>Profile information including your preferences, travel history, and saved destinations</li>
          <li>Usage data about how you interact with our platform</li>
          <li>Device information including IP address, browser type, and operating system</li>
          <li>Location data when you use our map features (subject to your device permissions)</li>
        </ul>
      `
    },
    {
      id: 'information-usage',
      title: 'How We Use Your Information',
      content: `
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Personalizing your experience and recommendations</li>
          <li>Processing your bookings and transactions</li>
          <li>Communicating with you about your account, updates, and promotions</li>
          <li>Analyzing usage patterns to improve our platform</li>
          <li>Detecting and preventing fraudulent activities</li>
        </ul>
      `
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      content: `
        <p>We may share your information with:</p>
        <ul>
          <li>Service providers who perform functions on our behalf</li>
          <li>Partners who provide experiences or accommodations you book through our platform</li>
          <li>Legal authorities when required by law or to protect our rights</li>
        </ul>
        <p>We do not sell your personal information to third parties for marketing purposes.</p>
      `
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      content: `
        <p>We use cookies and similar tracking technologies to:</p>
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Understand how you interact with our platform</li>
          <li>Provide personalized content and recommendations</li>
          <li>Analyze the performance of our website and app</li>
        </ul>
        <p>You can control cookie settings through your browser preferences.</p>
      `
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `
        <p>We implement appropriate security measures to protect your personal information, including:</p>
        <ul>
          <li>Encryption of sensitive data</li>
          <li>Secure server infrastructure</li>
          <li>Regular security assessments</li>
          <li>Access controls for our employees</li>
        </ul>
        <p>While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
      `
    },
    {
      id: 'user-rights',
      title: 'Your Rights and Choices',
      content: `
        <p>Depending on your location, you may have certain rights regarding your personal information:</p>
        <ul>
          <li>Access the information we hold about you</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Delete your personal information</li>
          <li>Object to certain processing of your data</li>
          <li>Withdraw consent for optional features</li>
          <li>Request portability of your data</li>
        </ul>
        <p>To exercise these rights, please contact us through the methods listed at the end of this policy.</p>
      `
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">
            Last updated: March 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-8">
          <p className="text-gray-300 mb-4">
            At Cyplaner, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our website and mobile application.
          </p>
          <p className="text-gray-300">
            Please read this policy carefully. If you do not agree with our practices, please do not use 
            our services. By accessing or using our platform, you acknowledge that you have read and 
            understand this Privacy Policy.
          </p>
        </div>

        {/* Key points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <FaShieldAlt size={36} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Your Data Protected</h3>
            <p className="text-gray-400 text-sm">We implement industry-standard security measures to keep your data safe</p>
          </div>
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <FaUserLock size={36} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Control Your Privacy</h3>
            <p className="text-gray-400 text-sm">Access, update, or delete your information at any time</p>
          </div>
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <FaCookieBite size={36} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Transparent Practices</h3>
            <p className="text-gray-400 text-sm">Clear explanation of how we use cookies and your data</p>
          </div>
        </div>

        {/* Table of contents */}
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Contents</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`} 
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policy sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div 
              id={section.id}
              key={section.id} 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              <div 
                className="text-gray-300 space-y-4 policy-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="bg-slate-900 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 text-center mt-12">
          <h2 className="text-2xl text-white font-semibold mb-4">Privacy Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact our Privacy Team at:
          </p>
          <div className="text-sky-400 font-medium mb-6">privacy@Cyplaner.com</div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-full transition duration-200">
            Contact Privacy Team
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;