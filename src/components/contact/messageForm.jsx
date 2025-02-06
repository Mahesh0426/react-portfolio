import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MessageForm = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const ServiceID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const TemplateID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const PublicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!senderName || !senderEmail || !message) {
      toast.error("Please enter all fields.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    const templateParams = {
      from_name: senderName,
      from_email: senderEmail,
      to_email: "kunwarmahesh29@gmail.com",
      subject: "New message from your Website",
      message: message,
    };

    emailjs
      .send(ServiceID, TemplateID, templateParams, PublicKey)
      .then(() => {
        toast.success("Message sent successfully! ✅", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setSenderName("");
        setSenderEmail("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Error sending message. ❌", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-lg shadow-md w-full"
    >
      <div className="mb-4">
        <label className="block text-white mb-1">Your Name</label>
        <input
          type="text"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">Your Email</label>
        <input
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">Your Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300"
      >
        Send Message
      </button>
      <ToastContainer />
    </form>
  );
};
