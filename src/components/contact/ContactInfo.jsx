import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div data-aos="fade-right" className="space-y-6 text-lg">
      <ContactItem
        icon={<BsFillTelephoneFill size={22} />}
        text="+61 0426182793"
        href="tel:+61415571816"
      />
      <ContactItem
        icon={<CgMail size={22} />}
        text="kunwarmahesh29@gmail.com"
        href="mailto:kunwarmahesh29@gmail.com"
      />
      <ContactItem
        icon={<MdLocationOn size={22} />}
        text="Sydney, NSW Australia"
        href="https://www.google.com/maps/place/Sydney,+NSW,+Australia"
      />
    </div>
  );
};

const ContactItem = ({ icon, text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 shadow-md"
    >
      <div className="bg-blue-500 p-3 rounded-full text-white">{icon}</div>
      <span className="text-white text-lg">{text}</span>
    </a>
  );
};

export default ContactInfo;
