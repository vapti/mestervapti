"use client";
import React, { useState } from "react";
import { toast } from "sonner";
export default function Kontaktos() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("pages/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("API Response status:", response.status);

      if (response.ok) {
        setStatus("Message sent successfully!");
        toast.success("Besked sendt!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setStatus("Error sending message.");
        toast.error("Fejl ved afsendelse af besked.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
      toast.error("Fejl ved afsendelse af besked.");
    }
  };
  return (
    <div className="bg-neutral-900 py-20 w-full">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-4xl font-bold text-white">Kontakt Os</div>
        <hr className="opacity-10 py-2" />
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col my-4">
            <label className="text-white" htmlFor="name">
              Dit Navn
            </label>
            <input
              className="text-black bg-gray-50 border p-4 rounded"
              type="text"
              id="name"
              name="name"
              placeholder="Dit Navn..."
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <label className="text-white" htmlFor="email">
              E-Mail
            </label>
            <input
              className="text-black bg-gray-50 border p-4 rounded"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Din E-Mail..."
              autoComplete="off"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <label className="text-white" htmlFor="number">
              Telefonnummer
            </label>
            <input
              className="text-black bg-gray-50 border p-4 rounded"
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Dit Telefonnummer..."
              autoComplete="off"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <label className="text-white" htmlFor="message">
              Besked
            </label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              name="message"
              id="message"
              className="text-black bg-gray-50 border p-4 rounded"
              placeholder="Skriv om dit emne her...."
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 w-40 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition-colors"
          >
            Send
          </button>
          {status && <p className="mt-4 text-white">{status}</p>}
        </form>
      </div>
    </div>
  );
}