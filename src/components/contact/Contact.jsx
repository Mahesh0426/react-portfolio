import React from "react";
import "animate.css";
import ContactInfo from "./ContactInfo";
import { MessageForm } from "./messageForm";

function Contact() {
  return (
    <div
      id="contact"
      className="max-w-6xl mx-auto py-20 px-6 h-full relative text-white"
    >
      <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]">
        Get in touch
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ContactInfo />
        <MessageForm />
      </div>
    </div>
  );
}

export default Contact;
