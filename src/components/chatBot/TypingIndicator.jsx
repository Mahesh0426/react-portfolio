import React from "react";
import { motion } from "framer-motion";

const TypingIndicator = ({ chatbotIcon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 9 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-end gap-2 justify-start"
    >
      <img
        src={chatbotIcon}
        alt="Bot"
        className="w-7 h-7 rounded-full object-cover border border-amber-500/50 flex-shrink-0"
      />
      <div className="px-4 py-3 rounded-2xl bg-slate-700/80 text-slate-200 rounded-bl-sm border border-slate-600/30 overflow-hidden">
        <div className="flex space-x-1.5 items-center">
          <span
            className="block w-2 h-2 bg-slate-400 rounded-full"
            style={{
              animation: "typingDot 1.4s ease-in-out infinite",
              animationDelay: "0ms",
            }}
          ></span>
          <span
            className="block w-2 h-2 bg-slate-400 rounded-full"
            style={{
              animation: "typingDot 1.4s ease-in-out infinite",
              animationDelay: "200ms",
            }}
          ></span>
          <span
            className="block w-2 h-2 bg-slate-400 rounded-full"
            style={{
              animation: "typingDot 1.4s ease-in-out infinite",
              animationDelay: "400ms",
            }}
          ></span>
        </div>
        <style>{`
          @keyframes typingDot {
            0%, 80%, 100% { transform: scale(1); opacity: 0.4; }
            40% { transform: scale(1.3) translateY(-1px); opacity: 1; }
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
