import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-gray-700">Stay updated with the latest news and events from AASTUFocus.</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition duration-300">
            Subscribe
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;