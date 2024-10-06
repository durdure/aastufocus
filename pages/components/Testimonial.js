import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "AASTUFocus has truly changed my college experience for the better!",
    author: "John Doe",
    position: "Student",
  },
  {
    id: 2,
    text: "Joining AASTUFocus helped me find a community that shares my values.",
    author: "Jane Smith",
    position: "Student",
  },
  {
    id: 3,
    text: "The events organized by AASTUFocus are both fun and meaningful.",
    author: "Emily Johnson",
    position: "Graduate",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Members Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">{testimonial.text}</p>
              <h3 className="font-bold">{testimonial.author}</h3>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;