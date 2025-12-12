import React, { useEffect, useState } from 'react';
import { Eye, Heart } from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch("https://plausible.io/api/v2/query", {
      method: "POST",
      headers: {
        "Authorization": "Bearer pnfLo4CW35vL1Jt8Zc6rcbP2Zh0jpogb9nUK-M0anYq-N2dkoCFgTLXxvWPSY-wu",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site_id: "ishaanapte.me",
        metrics: ["visitors"],
        date_range: "all"
      })
    })
      .then(res => res.json())
      .then(data => {
        const count = data.results?.[0]?.metrics?.[0];
        if (typeof count === "number") {
          setVisitorCount(count);
        }
      })
      .catch((err) => console.error("Failed to fetch visitor count", err));
  }, []);

  return (
    <footer className="bg-gray-200/80 border-t border-gray-300/50 text-gray-900 py-8 px-6 w-full flex-shrink-0 mt-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
          
          {/* Copyright and Message */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-mono text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                ©2025 Ishaan Apte
              </span>
            </p>
            <p className="text-sm text-gray-700 font-mono flex items-center justify-center lg:justify-start gap-2">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              Grateful for the journey. Thank you for visiting!
            </p>
          </div>

          {/* Visitor Counter */}
          <div className="bg-white/60 rounded-lg px-6 py-3 hover:bg-white/80 transition-all duration-300 shadow-lg border border-gray-300">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 text-blue-700 rounded-lg">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-mono">Total Visitors</div>
                <div className="text-xl font-bold text-gray-900 font-mono">
                  {visitorCount !== null ? visitorCount.toLocaleString() : (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-xs text-gray-600 font-mono">
            Built with{' '}
            <span className="text-red-500">♥</span>{' '}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;