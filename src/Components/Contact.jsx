import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Themetoggle from "../Components/Themetoggle";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Message sent successfully! (You can later connect this to EmailJS or backend API)"
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]
                 transition-colors duration-500 ease-in-out flex flex-col items-center px-4 sm:px-6 md:px-8 py-10"
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between w-full max-w-5xl mb-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-[hsl(var(--primary))]/10 
               text-[hsl(var(--primary))] px-4 py-2 rounded-lg font-medium 
               hover:bg-[hsl(var(--primary))]/20 transition text-sm sm:text-base"
        >
          <Home size={18} /> Home
        </button>
        <Themetoggle />
      </div>

      {/* Header */}
      <header className="text-center mb-12 max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-[hsl(var(--foreground))]">
          Let’s Work{" "}
          <span className="text-[hsl(var(--primary))]">Together</span>
        </h1>
        <p className="text-[hsl(var(--foreground))]/70 text-sm sm:text-lg leading-relaxed">
          Have a project in mind or just want to say hello? I’d love to hear
          from you.
        </p>
      </header>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                   rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]/80">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] 
                       bg-transparent focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] 
                       text-[hsl(var(--foreground))]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]/80">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] 
                       bg-transparent focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] 
                       text-[hsl(var(--foreground))]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]/80">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] 
                       bg-transparent focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] 
                       text-[hsl(var(--foreground))]"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full 
                     bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] 
                     py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 
                     hover:scale-[1.02] transition-all duration-300"
        >
          <Send size={18} /> Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        <a
          href="mailto:youremail@example.com"
          className="text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] transition"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] transition"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
