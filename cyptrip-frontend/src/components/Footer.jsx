import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white">
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 pt-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Cyplaner</h2>
          </div>
          
          {/* Team */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Team</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/team">Our Team</FooterLink></li>
              <li><FooterLink href="/about">About us</FooterLink></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/Privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/Terms">Terms & Conditions</FooterLink></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
            <div className="flex">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  type="email" 
                  className="w-full rounded-l-full pl-10 pr-4 py-3 bg-slate-700 bg-opacity-50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500" 
                  placeholder="Enter your email to get the latest news..." 
                />
              </div>
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-r-full px-6 py-3 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center gap-8 my-10">
          <SocialIcon className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 bg-opacity-50 hover:bg-sky-700 hover:bg-opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </SocialIcon>
          
          <SocialIcon className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 bg-opacity-50 hover:bg-sky-700 hover:bg-opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </SocialIcon>
          
          <SocialIcon className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 bg-opacity-50 hover:bg-sky-700 hover:bg-opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </SocialIcon>
        </div>
        
        {/* Copyright */}
        <div className="relative">
          <div className="text-center text-sm text-gray-400 z-10 relative">
            Cyplanner @ {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  );
};

const SocialIcon = ({ children }) => {
  return (
    <a href="#" className="transition-colors">
      {children}
    </a>
  );
};

export default Footer;