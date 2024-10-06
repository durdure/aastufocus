const teamMembers = [
    {
      id: 1,
      name: 'Media Team',
      role: 'Duresa and Nafsif',
      image: 'https://i.pinimg.com/236x/85/a5/00/85a5006b3eba199cec9ae0efaa356532.jpg', 
      description: 'Anumtuhoo kankeettii maalan siif kennaa!!'
    },
    {
      id: 2,
      name: 'Abnezer Team',
      role: 'DAwit mangistu and Daniel',
      image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
      description: 'Foonni ani nyaadhu kan biraa midhaa yoo taee maali yoo nati hafee'
    },
    {
      id: 3,
      name: 'yididyaa',
      role: 'Bona and Caala',
      image: 'https://i.pinimg.com/236x/85/a5/00/85a5006b3eba199cec9ae0efaa356532.jpg',
      description: "Har'a Gahuuf sababni kufsaan siidhaa."
    },
    {
      id: 4,
      name: 'Worship Team',
      role: 'DArertu and Lasistu',
      image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
      description: 'Jaalala Kiristoos irraa maaltu adda nuu basaa'
    },
    {
      id: 4,
      name: 'Natanan Team',
      role: 'Treasurer',
      image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
      description: 'Jaalala Kiristoos irraa maaltu adda nuu basaa'
    },
    {
      id: 4,
      name: 'Graduate Class Team',
      role: 'DAwit mangistuu and martha baley',
      image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
      description: 'Jaalala Kiristoos irraa maaltu adda nuu basaa'
    },
    {
      id: 4,
      name: 'Choir Team',
      role: 'Daniel and jenenus',
      image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
      description: 'Jaalala Kiristoos irraa maaltu adda nuu basaa'
    },
    {
      id: 4,
      name: 'Worship Team',
      role: 'Treasurer',
      image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
      description: 'Jaalala Kiristoos irraa maaltu adda nuu basaa'
    },
  ];
  
  const Team = () => {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-40 object-fit" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <h4 className="text-gray-600">{member.role}</h4>
                  <p className="text-gray-500 mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;