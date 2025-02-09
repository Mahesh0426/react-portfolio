import React from "react";
import "animate.css";
import ContactInfo from "./ContactInfo";
import { MessageForm } from "./messageForm";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="contact"
      className="max-w-6xl mx-auto py-20 px-6 h-full relative text-white"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]"
      >
        Get In Touch
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ContactInfo />
        <MessageForm />
      </div>
    </div>
  );
}

export default Contact;
