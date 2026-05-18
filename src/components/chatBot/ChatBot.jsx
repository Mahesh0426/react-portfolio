import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import chatbotIcon from "../../assets/profilePicture.jpg";
import { CgClose } from "react-icons/cg";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { getResponseStream } from "./prompt";
import TypingIndicator from "./TypingIndicator";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const originalInputRef = useRef("");

  // Initialize messages state after hooks are declared
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hey there! 👋 I'm Mahesh's assistant bot. Ask me anything about his skills, projects, or experience!",
      time: Date.now(),
    },
  ]);

  // Format time helper
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Parse message text: newlines → <br>, URLs → clickable links, **text** → bold
  const renderMessageText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Split each line by URLs and **bold**
      const parts = line.split(/(https?:\/\/[^\s]+|\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, i) => {
        if (part.match(/^https?:\/\//)) {
          return (
            <a
              key={`${lineIdx}-${i}`}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline underline-offset-2 hover:text-amber-300 break-all"
            >
              {part}
            </a>
          );
        }
        if (part.match(/^\*\*.*\*\*$/)) {
          return <strong key={`${lineIdx}-${i}`}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return (
        <span key={lineIdx}>
          {rendered}
          {lineIdx < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  // Lock background scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    if (isRecording && recognition) {
      recognition.stop();
      setIsRecording(false);
    }

    const userMsg = {
      id: Date.now(),
      type: "user",
      text: inputValue.trim(),
      time: Date.now(),
    };

    const botMsgId = Date.now() + 1;

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    originalInputRef.current = "";
    setIsTyping(true);

    try {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: botMsgId, type: "bot", text: "", time: Date.now() },
      ]);

      // Buffer: stream fills it fast, interval drains it smoothly
      let fullBuffer = "";
      let displayedLength = 0;
      let streamDone = false;

      // Start smooth rendering interval (20ms per character)
      const renderInterval = setInterval(() => {
        if (displayedLength < fullBuffer.length) {
          // Reveal 1-3 characters at a time for natural feel
          const charsToAdd = Math.min(
            Math.ceil(Math.random() * 2) + 1,
            fullBuffer.length - displayedLength,
          );
          displayedLength += charsToAdd;
          const visibleText = fullBuffer.slice(0, displayedLength);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMsgId ? { ...msg, text: visibleText } : msg,
            ),
          );
        } else if (streamDone) {
          clearInterval(renderInterval);
        }
      }, 20);

      // Stream fills the buffer
      await getResponseStream(userMsg.text, (streamedText) => {
        fullBuffer = streamedText;
      });
      streamDone = true;
    } catch (error) {
      console.error("AI response error:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev.filter((msg) => msg.id !== botMsgId),
        {
          id: botMsgId,
          type: "bot",
          text: "Oops! Something went wrong. Please try again later. 😅",
          time: Date.now(),
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = true;
      recog.lang = "en-US";

      recog.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");

        const previousText = originalInputRef.current;
        setInputValue(
          previousText ? previousText + " " + transcript : transcript,
        );
      };

      recog.onend = () => {
        setIsRecording(false);
      };

      recog.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
      };

      setRecognition(recog);
    } else {
      console.warn("Speech Recognition is not supported in this browser.");
    }
  }, []);

  // Toggle speech recognition
  const toggleRecording = () => {
    if (!recognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (isRecording) {
      recognition.stop();
      setIsRecording(false);
    } else {
      originalInputRef.current = inputValue;
      recognition.start();
      setIsRecording(true);
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-2 right-5 z-50 w-80 sm:w-96 h-[32.5rem] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-xl flex flex-col"
          >
            {/* Header - fixed at top */}
            <div className="px-3 py-4 flex items-center justify-between flex-shrink-0 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={chatbotIcon}
                    alt="Bot"
                    className="w-8 h-8 bg-slate-700 rounded-full p-1 border border-amber-500/50"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 block w-2.5 h-2.5 rounded-full bg-green-500 border border-slate-800"></span>
                </div>
                <div>
                  <p className="text-amber-200 font-semibold text-sm">
                    Mahesh AI Assistant
                  </p>
                  <p className="text-green-400 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors duration-200 p-1 hover:bg-slate-700 rounded-lg cursor-pointer"
              >
                {/* Close Button */}
                <div>
                  <CgClose />
                </div>
              </button>
            </div>

            {/* Messages - scrollable middle */}
            <div className="bg-slate-900/95 backdrop-blur-sm flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-slate-700">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {/* Bot avatar */}
                  {msg.type === "bot" && (
                    <img
                      src={chatbotIcon}
                      alt="Bot"
                      className="w-7 h-7 rounded-full object-cover border border-amber-500/50 flex-shrink-0"
                    />
                  )}

                  <div
                    className={`max-w-[75%] flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.type === "user"
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : "bg-slate-700/80 text-slate-200 rounded-bl-sm border border-slate-600/30"
                      }`}
                    >
                      {msg.type === "bot"
                        ? renderMessageText(msg.text)
                        : msg.text}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 px-1">
                      {formatTime(msg.time)}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator chatbotIcon={chatbotIcon} />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input - fixed at bottom */}
            <div className="bg-gradient-to-t from-slate-900 via-slate-800/95 to-slate-800/80 backdrop-blur-md border-t border-slate-700/50">
              <div className="px-3 py-2 flex items-center">
                {/* Mic Button - positioned on the right */}
                <button
                  onClick={toggleRecording}
                  className="p-2 text-slate-400 hover:text-amber-400 transition-colors"
                  title={isRecording ? "Stop speaking" : "click to `Speak"}
                >
                  {isRecording ? (
                    <div className="relative flex items-center justify-center">
                      <FaMicrophone className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span className="absolute w-6 h-6 rounded-full border border-amber-400 opacity-50 animate-ping" />
                    </div>
                  ) : (
                    <FaMicrophone className="w-4 h-4" />
                  )}
                </button>
                <div className="flex-1 w-full flex items-center gap-2 bg-slate-700/40 border border-slate-600/40 rounded-2xl px-2 py-1.5 focus-within:border-amber-500/40 focus-within:shadow-[0_0_12px_rgba(245,158,11,0.08)] transition-all duration-300">
                  {/* Input field */}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      isRecording ? "Bot is listening..." : "Type a message..."
                    }
                    className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 text-sm py-1.5 focus:outline-none"
                  />

                  {/* Send button */}
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className={`p-2 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer flex-shrink-0 ${
                      inputValue.trim()
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
                        : "bg-slate-600/50 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    <IoSend size={14} />
                  </button>
                </div>
              </div>

              {/* Powered by line */}
              <div className="text-center pb-2">
                <span className="text-[10px] text-slate-600 tracking-wide">
                  Powered by{" "}
                  <span className="text-amber-500/60 font-medium">Mahesh</span>{" "}
                  ✦
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bot Icon - hidden when chat is open */}
      {!isOpen && (
        <div
          className="fixed bottom-14 right-6 z-50 cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            {/* Pulsing glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-amber-400 opacity-30 blur-sm animate-pulse group-hover:opacity-60 transition-opacity duration-300"></div>

            {/* Chat bot icon container */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 border-2 border-amber-500/70 shadow-lg shadow-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src="/chatbot-icon.svg"
                alt="Chat Bot"
                className="w-[20px] h-[20px]"
              />
            </div>

            {/* Green online dot */}
            <span className="absolute bottom-0 right-0 block w-4 h-4 rounded-full bg-green-500 border-2 border-slate-800 shadow-lg">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
