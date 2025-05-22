import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Logo size="small" />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16 text-sm">
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Get the App</h3>
            <div className="flex flex-col space-y-3">

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-all rounded-md py-2 px-4 text-white text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.6c-.1-44.3 36.4-65.6 38-66.5-20.7-30.2-52.9-34.3-64.4-34.8-27.4-2.8-53.4 16.2-67.2 16.2-13.9 0-35.2-15.8-57.9-15.3-29.7.4-57 17.3-72.3 43.9-30.8 53.5-7.9 132.7 22 176.1 14.6 21.1 32 44.8 54.7 43.9 22-1 30.4-14.2 57-14.2 26.5 0 34.1 14.2 57.4 13.8 23.8-.4 38.9-21.6 53.5-42.9 16.9-24.7 23.9-48.7 24-50.1-.5-.2-45.8-17.6-45.9-69.1zM267.5 91.2c12.3-15 20.7-35.8 18.4-56.6-17.8.7-39.4 11.8-52.2 26.8-11.4 13.2-21.4 34.3-18.7 54.4 19.8 1.5 40.2-10 52.5-24.6z" />
                </svg>
                App Store
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-all rounded-md py-2 px-4 text-white text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="#34A853"
                    d="M325.3 234.3L104.7 52.7C91.6 42.6 75.5 40.2 60.5 47.3L275.1 256 60.5 464.7c15 7.1 31.1 4.7 44.2-5.3l220.6-181.6c14.8-12.2 14.8-35.4 0-47.6z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M449.4 211.2L389.2 180l-85.1 70 85.1 70 60.2-31.2c17.8-9.2 17.8-32.8 0-42.6z"
                  />
                  <path
                    fill="#EA4335"
                    d="M60.5 47.3C50.4 52.1 43.3 62 43.3 73.6v364.8c0 11.6 7.1 21.5 17.2 26.3L275.1 256 60.5 47.3z"
                  />
                  <path
                    fill="#4285F4"
                    d="M389.2 180l-85.1 70 85.1 70V180z"
                  />
                </svg>
                Google Play
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs tracking-wide">© 2025 Keesa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
