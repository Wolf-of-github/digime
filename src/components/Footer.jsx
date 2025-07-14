import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

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
    <footer className="text-white py-6 px-6 w-full flex-shrink-0 mt-auto">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-lg">©2025 Ishaan Apte | Grateful for the journey. Thank you for visiting!</p>
        <div className="text-lg flex items-center gap-2">
          <FaEye />
          <span>{visitorCount !== null ? visitorCount.toLocaleString() : "..."}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;