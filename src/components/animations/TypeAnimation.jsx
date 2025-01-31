import React, { useState, useEffect } from "react";

const TypeAnimation = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of objects representing different phrases to be displayed
  const words = [
    { text: "Write Clean Code.", color: "text-blue-500" },
    { text: "Love Problem-Solving.", color: "text-red-500" },
    { text: "Build Amazing Products.", color: "text-green-400" },
    { text: "Push Creative Boundaries.", color: "text-yellow-500" },
    { text: "Learn Every Day.", color: "text-purple-500" },
  ];

  const typingDelay = 100;

  // UseEffect to start the typing effect when the component mounts
  useEffect(() => {
    let isDeleting = false;
    let currentLength = 0;
    let currentWord = words[currentIndex].text;

    // Set an interval to simulate typing
    const intervalId = setInterval(() => {
      if (isDeleting) {
        currentLength--;
      } else {
        currentLength++;
      }

      // Update text state
      setText(currentWord.substring(0, currentLength));

      // If we finished typing the current word
      if (currentLength === currentWord.length + 1) {
        // Start deleting
        isDeleting = true;
      }

      // If we deleted the whole word
      if (currentLength === 0) {
        // Move to the next word
        isDeleting = false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        currentWord = words[currentIndex].text;
      }
    }, typingDelay);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="h-8 bg-slate-800 flex items-center justify-center">
      <h1 className="relative font-semibold text-4xl mb-8">
        <span className="text-white">I </span>
        {/*text with color */}
        <span className={words[currentIndex].color}>{text}</span>
      </h1>
    </div>
  );
};

export default TypeAnimation;
