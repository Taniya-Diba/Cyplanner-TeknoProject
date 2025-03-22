// SignUpPage.jsx
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import ImageSignup from '../assets/images/IMG/Caveview.jpg'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex h-screen bg-gray-900 p-4">
      <div className="flex w-full rounded-3xl overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={ImageSignup}
              alt="Coastal Cave View" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-teal-600/10"></div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-900">
          <div className="w-full max-w-md">
            {/* Button as a link */}
            <Link to="/">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  className="text-white"
                />
              </svg>
            </Link>

          <h1 className="text-4xl font-bold text-white mb-12">Sign Up</h1>
          
          <form onSubmit={handleSubmit}>
            {/* Name field */}
            <div className="mb-6 relative">
              <label className="sr-only" htmlFor="name">Full Name</label>
              <div className="flex items-center">
                <div className="absolute left-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M12 13a4 4 0 100-8 4 4 0 000 8z" 
                    />
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M5 19a8 8 0 0114 0" 
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-3 pl-12 pr-12 bg-transparent border-b-2 border-gray-700 focus:border-teal-400 text-white focus:outline-none"
                  placeholder="Full Name"
                />
                <div className="absolute right-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                    <path 
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                      fill="currentColor" 
                      fillOpacity="0.2"
                    />
                    <path 
                      d="M16.5 8.5L10.5 14.5L7.5 11.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email field */}
            <div className="mb-6 relative">
              <label className="sr-only" htmlFor="email">Email</label>
              <div className="flex items-center">
                <div className="absolute left-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M3 8l7.9 5.26a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 pl-12 pr-12 bg-transparent border-b-2 border-gray-700 focus:border-teal-400 text-white focus:outline-none"
                  placeholder="Email"
                />
                <div className="absolute right-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                    <path 
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                      fill="currentColor" 
                      fillOpacity="0.2"
                    />
                    <path 
                      d="M16.5 8.5L10.5 14.5L7.5 11.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password field */}
            <div className="mb-1 relative">
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="flex items-center">
                <div className="absolute left-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M12 15v2m-6 0h12v-2a6 6 0 10-12 0zm4-10a2 2 0 114 0 2 2 0 01-4 0z" 
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full py-3 pl-12 pr-12 bg-transparent border-b-2 border-gray-700 focus:border-teal-400 text-white focus:outline-none"
                  placeholder="Password"
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 text-gray-400 hover:text-gray-300 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>

            {/* Password requirements */}
            <div className="mb-6 text-sm text-gray-400 space-y-2 pl-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                <span>Least 8 characters</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-green-500">Least one number (0-9) or a symbol</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-green-500">lowercase (a-z) and uppercase (A-Z)</span>
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="mb-8 relative">
              <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
              <div className="flex items-center">
                <div className="absolute left-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.5" 
                      d="M12 15v2m-6 0h12v-2a6 6 0 10-12 0zm4-10a2 2 0 114 0 2 2 0 01-4 0z" 
                    />
                  </svg>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full py-3 pl-12 pr-12 bg-transparent border-b-2 border-gray-700 focus:border-teal-400 text-white focus:outline-none"
                  placeholder="Re-Type your password"
                />
                <button 
                  type="button" 
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 text-gray-400 hover:text-gray-300 focus:outline-none"
                >
                  {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-full transition duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Or divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Social login */}
          <div className="flex justify-center space-x-4">
            <button className="p-2 bg-transparent rounded-full hover:bg-gray-800 transition">
              <FaFacebook size={24} className="text-blue-500" />
            </button>
            <button className="p-2 bg-transparent rounded-full hover:bg-gray-800 transition">
              <FcGoogle size={24} />
            </button>
          </div>

          {/* Sign in link */}
          <div className="mt-8 text-center text-gray-400">
            Already a member? <a href="/singin" className="text-teal-400 hover:underline">Sign in</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
