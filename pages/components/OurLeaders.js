import React from 'react';

const leaders = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "President",
    description: "Alice leads the organization with a vision of inclusivity and community engagement.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Mark Davis",
    position: "Vice President",
    description: "Mark supports the president and oversees event planning and execution.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sarah Lee",
    position: "Secretary",
    description: "Sarah manages communications and ensures smooth operations within the team.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "James Brown",
    position: "Treasurer",
    description: "James handles the financial aspects and fundraising efforts of AASTUFocus.",
    image: "https://via.placeholder.com/150",
  },
];

const OurLeaders = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Leaders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div key={leader.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-fit" 
              />
              <h3 className="text-xl font-bold">{leader.name}</h3>
              <p className="text-gray-600">{leader.position}</p>
              <p className="mt-2">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;