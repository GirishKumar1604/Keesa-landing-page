import React from 'react';

export const AppShowcase: React.FC = () => {
  return (
    <section className="py-24 relative" id="app">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Phone Mockup */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Glow layer behind the phone */}
            <div
              className="absolute w-[300px] h-[600px] bg-purple-600 opacity-20 blur-[40px] rounded-[40px] z-0"
              aria-hidden="true"
            />

            {/* Phone mockup */}
            <div className="relative z-10">
              <div className="w-[90vw] max-w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-4 border-gray-800 shadow-xl flex flex-col overflow-hidden">
                {/* App content scroll area */}
                <div className="flex-1 overflow-y-auto hide-scrollbar bg-white p-3">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 text-black text-sm">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-black rounded-sm relative">
                        <div className="absolute right-[-2px] top-1/2 transform -translate-y-1/2 w-[2px] h-[6px] bg-black"></div>
                        <div className="absolute left-[2px] top-[2px] right-[2px] bottom-[2px] bg-black"></div>
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-[#2D2851] text-2xl font-bold">
                      Good Morning Pal !
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#2D2851] flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>

                  {/* Balance cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#E8F3E9] p-4 rounded-xl">
                      <div className="text-[#2D2851] text-sm mb-2">Balance</div>
                      <div className="text-[#2D2851] text-xl font-bold">1,00,000</div>
                    </div>
                    <div className="bg-[#FFE8E8] p-4 rounded-xl">
                      <div className="text-[#2D2851] text-sm mb-2">Spent</div>
                      <div className="text-[#2D2851] text-xl font-bold">5,000</div>
                    </div>
                  </div>

                  {/* Recent transactions */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-[#2D2851] font-semibold">Recent Transactions</div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2D2851"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: '🚗', label: 'Car', amount: '1,000' },
                        { icon: '🌐', label: 'Utilities', amount: '1,000' },
                        { icon: '🏠', label: 'House', amount: '1,000' },
                        { icon: '💡', label: 'Electricity', amount: '2,000' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-[#2D2851]">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#2D2851]">{item.amount}</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#2D2851"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom navigation */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    {/* 5 nav icons (unchanged) */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2851" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2851" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                    <div className="w-12 h-12 rounded-full bg-[#2D2851] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2851" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2851" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl" />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
            <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-6 leading-snug">
              All that you deserve. <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                And some more.
              </span>
            </h2>
            <p className="text-gray-400 md:text-lg max-w-xl">
              See your spending in categories. Catch fraud before it strikes.
              Get card and loan suggestions that actually make sense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
