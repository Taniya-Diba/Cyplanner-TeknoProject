import React from 'react';
import { FaGavel, FaCreditCard, FaUserShield } from 'react-icons/fa';
import Layout from '../components/Layout.jsx';

const TermsConditions = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `
        <p>By accessing or using the Cyplaner website and mobile application ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Platform.</p>
        <p>We reserve the right to modify these terms at any time. Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes.</p>
      `
    },
    {
      id: 'account',
      title: 'User Accounts',
      content: `
        <p>To access certain features of our Platform, you may need to create a user account. You are responsible for:</p>
        <ul>
          <li>Providing accurate and complete information when creating your account</li>
          <li>Maintaining the confidentiality of your account password</li>
          <li>Restricting access to your account</li>
          <li>All activities that occur under your account</li>
        </ul>
        <p>We reserve the right to terminate accounts or suspend access at our discretion, particularly in cases of suspected fraudulent activity or violation of these terms.</p>
      `
    },
    {
      id: 'content',
      title: 'User Content',
      content: `
        <p>Our Platform allows users to post reviews, photos, and other content. By submitting content, you:</p>
        <ul>
          <li>Grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content</li>
          <li>Represent that you own or have the necessary rights to the content you submit</li>
          <li>Agree not to post content that is illegal, abusive, or violates the rights of others</li>
        </ul>
        <p>We may remove any content that violates these terms or that we find objectionable for any reason.</p>
      `
    },
    {
      id: 'bookings',
      title: 'Bookings and Payments',
      content: `
        <p>When making bookings through our Platform:</p>
        <ul>
          <li>You agree to pay all fees associated with your booking</li>
          <li>You acknowledge that Cyplaner acts as an intermediary between you and service providers</li>
          <li>Each service provider may have their own terms and cancellation policies</li>
          <li>Refunds are subject to the policies of the specific service provider</li>
        </ul>
        <p>All payments are processed securely through our payment partners. We do not store complete credit card information on our servers.</p>
      `
    },
    {
      id: 'limitations',
      title: 'Limitations of Liability',
      content: `
        <p>To the maximum extent permitted by law:</p>
        <ul>
          <li>Cyplaner provides the Platform "as is" without warranties of any kind</li>
          <li>We are not responsible for the accuracy of information provided by third parties</li>
          <li>We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Platform</li>
          <li>Our total liability for any claims is limited to the amount you paid to us for the service in question</li>
        </ul>
        <p>Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so these limitations may not apply to you.</p>
      `
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      content: `
        <p>In the event of any dispute arising from your use of our Platform:</p>
        <ul>
          <li>We encourage you to contact our customer support team first</li>
          <li>Any dispute not resolved informally shall be resolved through arbitration</li>
          <li>The arbitration will be conducted in [City, Country]</li>
          <li>The language of arbitration shall be English</li>
        </ul>
        <p>This agreement to arbitrate does not prevent either party from seeking injunctive relief in a court of competent jurisdiction.</p>
      `
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-300">
            Last updated: March 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-8">
          <p className="text-gray-300 mb-4">
            These Terms and Conditions ("Terms") govern your use of the Cyplaner website and mobile 
            application (collectively, the "Platform") operated by Cyplaner Inc. ("we," "us," or "our").
          </p>
          <p className="text-gray-300">
            Please read these Terms carefully before using our Platform. Your access to and use of the 
            Platform indicates your acceptance of these Terms and our Privacy Policy.
          </p>
        </div>

        {/* Key points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <FaGavel size={36} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Legal Agreement</h3>
            <p className="text-gray-400 text-sm">These terms form a legal agreement between you and Cyplaner</p>
          </div>
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <FaCreditCard size={36} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-400 text-sm">All payments are processed securely through trusted partners</p>
          </div>
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 shadow-lg text-center">
            <FaUserShield size={36} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">User Responsibilities</h3>
            <p className="text-gray-400 text-sm">Guidelines for creating content and using our services</p>
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

        {/* Terms sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div 
              id={section.id}
              key={section.id} 
              className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              <div 
                className="text-gray-300 space-y-4 terms-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>

        {/* Copyright notice */}
        <div className="text-center text-gray-400 my-8">
          <p>© 2025 Cyplaner Inc. All rights reserved.</p>
        </div>

        {/* Contact section */}
        <div className="bg-slate-900 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 text-center mt-12">
          <h2 className="text-2xl text-white font-semibold mb-4">Questions About Our Terms?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms and Conditions,
            please contact our legal team at:
          </p>
          <div className="text-sky-400 font-medium mb-6">legal@Cyplaner.com</div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-full transition duration-200">
            Contact Legal Team
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default TermsConditions;