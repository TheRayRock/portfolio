"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
        "service_8pjwp4d", // your service ID
        "template_z1oexm9", // your template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "cmcIR3gF9dL-XDkzs" // your public key
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
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6 py-8">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 p-8 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Let’s Work <span className="text-gray-700">Together</span>
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
          Got an idea or a project? Fill out the form — I’ll get back to you soon.
        </p>
        <img
          src="/I_will_design_your_creative_logo_in_24hrs-removebg-preview.png"
          alt="Contact Icon"
          className="hidden md:block w-64 mx-auto md:mx-0 opacity-90 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Right Section (Form) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto backdrop-blur-sm border border-gray-200"
      >
        <form onSubmit={handleSubmit} className="space-y-5 ">
          <div>
            <label className="flex justify-start text-sm text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition bg-gray-50"
              required
            />
          </div>
          <div>
            <label className="flex justify-start  text-sm text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition bg-gray-50"
              required
            />
          </div>
          <div>
            <label className="flex justify-start text-sm text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition bg-gray-50 resize-none"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md"
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <p
            className={`text-sm text-center mt-4 ${
              status.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </motion.div>
    </section>
  );
}
