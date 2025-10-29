"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_8pjwp4d",   
        "template_z1oexm9",  
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "cmcIR3gF9dL-XDkzs"    
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-black px-4">
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">
          Let’s Work Together
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Got an idea or a project? Fill out the form —  
          I’ll get back to you soon.
        </p>
        <img
          src="/I_will_design_your_creative_logo_in_24hrs-removebg-preview.png"
          alt="Contact"
          className="hidden md:block mb-25 w-72 mx-auto opacity-80"
        />
      </div>

      <div className="md:w-1/2 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-2xl p-6 w-full max-w-md border border-gray-300">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-400 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-400 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            className="w-full border border-gray-400 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-black transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-sm text-center mt-3 text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
}
