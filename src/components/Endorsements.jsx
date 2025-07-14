import React from 'react';

const endorsements = [
  {
    name: "Dr. Anita Mehra",
    title: "Professor, USC Viterbi School of Engineering",
    text: "Ishaan consistently demonstrated initiative, creativity, and leadership in every assignment. His work ethic and commitment to excellence are exemplary.",
    avatar: "https://media.istockphoto.com/id/1326432425/photo/shot-of-a-mature-business-men-working-at-home-using-laptop-stock-photo.webp?s=1024x1024&w=is&k=20&c=-3mDmAd_NYBfjMIfBrv0PqCdms2pCRnVsDKenOGMKjE=",
  },
  {
    name: "Arjun Nair",
    title: "Engineering Manager, HealthBridge Systems",
    text: "It was a pleasure mentoring Ishaan during his internship. He quickly adapted to our stack and contributed to high-impact features with clean, efficient code.",
    avatar: "https://media.istockphoto.com/id/2165425298/photo/portrait-of-a-man-in-an-office.webp?s=1024x1024&w=is&k=20&c=oVWqnlwZZQFqGpoZ2maRWFsjy569O3837sJAbJIDmAE=",
  },
  {
    name: "Meera Kulkarni",
    title: "Founder, Studio Om",
    text: "Ishaan's frontend redesign brought a fresh, user-friendly experience to our site. His ability to balance aesthetics and functionality is impressive.",
    avatar: "https://media.istockphoto.com/id/1369199737/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=U34pKX1za17CtIvhvI3WXPXMSsP-jLnT0dmlV20jwik=",
  },
];

const Endorsements = () => {
  return (
    <section id="endorsements" className="text-white px-4 py-10">
      <h2 className="text-3xl font-bold font-mono text-center mb-12">Endorsements</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {endorsements.map((endorsement, idx) => (
          <div key={idx} className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={endorsement.avatar}
                alt={endorsement.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{endorsement.name}</h3>
                <p className="text-sm text-gray-300">{endorsement.title}</p>
              </div>
            </div>
            <blockquote className="text-gray-200 text-sm font-mono italic mb-2">“{endorsement.text}”</blockquote>
            <footer className="text-xs text-gray-400 font-mono">— {endorsement.name}, {endorsement.title}</footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Endorsements;
