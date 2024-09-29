"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/dashboard'); 
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = (path: any) => {
    setActiveLink(path); 
  };

  return (
    <div
      className={`fixed left-0 top-0 bottom-0 h-screen transition-all duration-300 ease-in-out bg-white shadow-lg ${isExpanded ? 'w-40' : 'w-18'} border-r border-gray-300`}
      onMouseEnter={() => setIsExpanded(true)} 
      onMouseLeave={() => setIsExpanded(false)} 
    >
      <div className="flex items-center justify-center h-20">
        <h1 className="text-3xl font-bold text-gray-700">M</h1>
      </div>

      <div className="flex flex-col justify-start h-full mt-20">
        <ul className="space-y-2">

          <li>
            <Link href="/dashboard" onClick={() => handleLinkClick('/dashboard')}>
              <div className={`flex items-center text-gray-600 p-2 ml-2 mr-2 rounded-md ${activeLink === '/dashboard' ? 'bg-slate-300' : 'hover:bg-slate-200'}`}>
                <div className="flex items-center" style={{ height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'} whitespace-nowrap`}>Dashboard</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/profile" onClick={() => handleLinkClick('/profile')}>
              <div className={`flex items-center text-gray-600 p-2 ml-2 mr-2 rounded-md ${activeLink === '/profile' ? 'bg-slate-300' : 'hover:bg-slate-200'}`}>
                <div className="flex items-center" style={{ height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'} whitespace-nowrap`}>Profile</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/performance" onClick={() => handleLinkClick('/performance')}>
              <div className={`flex items-center text-gray-600 p-2 ml-2 mr-2 rounded-md ${activeLink === '/performance' ? 'bg-slate-300' : 'hover:bg-slate-200'}`}>
                <div className="flex items-center" style={{ height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'} whitespace-nowrap`}>Performance</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/quiz" onClick={() => handleLinkClick('/quiz')}>
              <div className={`flex items-center text-gray-600 p-2 ml-2 mr-2 rounded-md ${activeLink === '/quiz' ? 'bg-slate-300' : 'hover:bg-slate-200'}`}>
                <div className="flex items-center" style={{ height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 21h8.25" />
                  </svg>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'} whitespace-nowrap`}>Quiz</span>
                </div>
              </div>
            </Link>
          </li>

          <hr className='mx-2 mt-4 border border-1 border-gray-500' />

          <li className="mt-24">
            <Link href="/docs" onClick={() => handleLinkClick('/docs')}>
              <div className={`flex items-center text-gray-600 p-2 ml-2 mr-2 rounded-md ${activeLink === '/docs' ? 'bg-slate-300' : 'hover:bg-slate-200'}`}>
                <div className="flex items-center" style={{ height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-3.75m-3.75 0h-3.375A3.375 3.375 0 0 0 3 11.625v2.625M16.125 6H7.875a2.625 2.625 0 0 0-2.625 2.625v.75m0 0V18a2.625 2.625 0 0 0 2.625 2.625h8.25A2.625 2.625 0 0 0 20.25 18V6.75A2.625 2.625 0 0 0 17.625 4.125h-1.5" />
                  </svg>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'} whitespace-nowrap`}>Docs</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/logout" onClick={() => handleLinkClick('/logout')}>
              <div className={`flex items-center text-gray-600 p-2 ml-2 mr-2 rounded-md ${activeLink === '/logout' ? 'bg-slate-300' : 'hover:bg-slate-200'}`}>
                <div className="flex items-center" style={{ height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'} whitespace-nowrap`}>Logout</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
