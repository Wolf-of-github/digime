import React, { useState } from 'react';

const skillsData = [
  {
    name: 'Python',
    image: '/python.png',
    category: 'Programming'
  },
  {
    name: 'Java',
    image: '/spring.svg',
    category: 'Programming'
  },
  {
    name: 'Docker',
    image: '/docker.png',
    category: 'DevOps'
  },
  {
    name: 'Go',
    image: '/goalng.jpeg',
    category: 'DevOps'
  },
  {
    name: 'React',
    image: '/react.png',
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    image: '/nodejs.png',
    category: 'Backend'
  },
  {
    name: 'MongoDB',
    image: '/mongodb.png',
    category: 'Database'
  },
  {
    name: 'PostgreSQL',
    image: '/postgresql.png',
    category: 'Database'
  },
  {
    name: 'TensorFlow',
    image: '/tensorflow.png',
    category: 'AI/ML'
  },
  {
    name: 'Kubernetes',
    image: '/kubectl.png',
    category: 'DevOps'
  },
  {
    name: 'Git',
    image: '/git.png',
    category: 'Tools'
  },
  {
    name: 'Linux',
    image: '/linux.png',
    category: 'OS'
  },
  {
    name: 'Terraform',
    image: '/terraform.png',
    category: 'DevOps'
  }
];

// Generate positions using a grid system with sparse assignment
const generateRandomPositions = (count) => {
  // Create an extremely sparse grid to prevent any overlapping
  // With 13 items, use a 5x3 grid (15 cells), giving each ~200px of space
  const cols = 5;
  const rows = 3;
  const totalCells = cols * rows;

  // Create array of all possible grid positions
  const gridCells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      gridCells.push({ row, col });
    }
  }

  // Shuffle the grid cells array to randomize
  for (let i = gridCells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gridCells[i], gridCells[j]] = [gridCells[j], gridCells[i]];
  }

  // Take the first 'count' cells from the shuffled array
  const selectedCells = gridCells.slice(0, count);

  // Convert grid positions to percentages with margins
  const positions = selectedCells.map(cell => {
    // Calculate base position for this grid cell
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    // Exact center of the cell
    const centerX = (cell.col + 0.5) * cellWidth;
    const centerY = (cell.row + 0.5) * cellHeight;

    return {
      left: `${centerX}%`,
      top: `${centerY}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    };
  });

  return positions;
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [positions] = useState(() => generateRandomPositions(skillsData.length));

  return (
    <section className="mt-20 mb-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 font-mono mb-4">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-700 font-mono text-sm max-w-2xl mx-auto">
          Hover over each skill to see its name
        </p>
      </div>

      {/* Floating Skills Container */}
      <div className="relative w-full max-w-6xl mx-auto p-8" style={{ height: '600px' }}>
        {skillsData.map((skill, index) => {
          const position = positions[index];

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                ...position,
                animation: `float ${position.animationDuration} ease-in-out infinite`,
                animationDelay: position.animationDelay
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Circular Image Frame */}
              <div className="relative">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-110"></div>

                {/* Image Container */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-4 border-gray-200 group-hover:border-transparent overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover p-2"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-700">${skill.name.charAt(0)}</div>`;
                    }}
                  />
                </div>

                {/* Skill Name Tooltip */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-12 bg-gray-900 text-white px-4 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all duration-300 ${
                    hoveredSkill === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  {skill.name}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                </div>

                {/* Category Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.category}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          33% {
            transform: translate(-50%, -50%) translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translate(-50%, -50%) translateY(10px) rotate(-5deg);
          }
        }
      `}</style>
    </section>
  );
}
