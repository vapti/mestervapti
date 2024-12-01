"use client";

import React from "react";
import { useState } from "react";

export default function Kontaktos() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', number: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };
  

  return (
    <div className="bg-neutral-900 py-20 w-full">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-4xl font-bold">Kontakt Os</div>
        <hr className="opacity-10 py-2" />

        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col my-4">
            <label className="text-white" htmlFor="name">
              Dit Navn
            </label>
            <input
              className="text-black bg-gray-50 border p-4"
              type="text"
              id="name"
              placeholder="Dit Navn..."
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required

            />
          </div>

          <div className="w-full flex flex-col my-4">
            <label className="text-bold" htmlFor="mail">
              E-Mail
            </label>
            <input
              className="text-black bg-gray-50 border p-4"
              type="text"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Din E-Mail..."
              autoComplete="off"
              id="name"
            />
          </div>

          <div className="w-full flex flex-col my-4">
            <label className="text-bold" htmlFor="number">
              Telefonnummer
            </label>
            <input
              className="text-black bg-gray-50 border p-4"
              type="text"    
              value={formData.number}
              onChange={handleChange}
              placeholder="Dit Telefonnummer..."
              autoComplete="off"
              id="name"
            />
          </div>

          <div className="w-full flex flex-col my-4">
            <label className="text-bold" htmlFor="message">
              Besked
            </label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              className="text-black bg-gray-50 border p-4"
              placeholder="Skriv om dit emne her...."
              id=""
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 w-40 bg-gray-800 text-white font-medium"
          >
            Send
          </button>
          <p>{status}</p>
        </form>
      </div>
    </div>
  );
}
